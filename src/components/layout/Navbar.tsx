import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Menu, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';
import { useAuthModal } from '@/context/auth/useAuthModal';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#hero');
  const { openLoginModal, openJoinModal } = useAuthModal();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#what-is-studytainment' },
    { label: 'Solutions', href: '#learning-ecosystem' },
    { label: 'Own Pace Academy', href: '#own-pace-academy' },
    { label: 'Our Focus', href: '#our-focus' },
    { label: 'Community', href: '#community' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const scrollPos = window.scrollY + 200;
      for (const link of navLinks) {
        const el = document.querySelector(link.href);
        if (el) {
          const top = (el as HTMLElement).offsetTop;
          const height = (el as HTMLElement).offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(link.href);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    setMobileMenuOpen(false);
    setActiveSection(href);
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 95;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      {/* Top Page Scroll Progress Indicator */}
      <motion.div
        style={{ scaleX, transformOrigin: '0%' }}
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 via-amber-500 to-emerald-500 z-50 shadow-md pointer-events-none"
      />

      <header
        className={cn(
          'sticky top-0 left-0 right-0 z-40 transition-all duration-300 w-full',
          isScrolled
            ? 'bg-white/95 dark:bg-slate-900/90 backdrop-blur-xl shadow-md shadow-slate-900/5 py-3 border-b border-slate-200 dark:border-slate-800'
            : 'bg-transparent py-5'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Official Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('#hero');
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src="https://cdn.studytainment.in/images/header_logo_20250902031422.png"
              alt="Studytainment Logo"
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border-2 border-slate-200 dark:border-slate-800 shadow-sm relative">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(link.href);
                  }}
                  className={`relative px-3.5 py-1.5 text-sm font-extrabold transition-colors rounded-full flex items-center gap-1.5 ${
                    isActive
                      ? 'text-purple-700 dark:text-purple-400'
                      : 'text-slate-900 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-400'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavHighlight"
                      transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                      className="absolute inset-0 bg-purple-100/80 dark:bg-purple-900/40 rounded-full -z-10 border border-purple-300 dark:border-purple-700/50"
                    />
                  )}
                  <span>{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Side CTA & Theme */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="amber"
              size="sm"
              onClick={openLoginModal}
            >
              Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
              onClick={openJoinModal}
            >
              Join Now
            </Button>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-950 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-400 transition-colors border border-slate-300 dark:border-slate-700"
              aria-label="Open navigation menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        onNavigate={handleNavigate}
      />
    </>
  );
};

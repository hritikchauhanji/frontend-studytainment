import React, { useState, useEffect } from 'react';
import { Menu, ArrowUpRight } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import { cn } from '@/lib/utils';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#what-is-studytainment' },
    { label: 'Solutions', href: '#learning-ecosystem' },
    { label: 'Own Pace Academy', href: '#own-pace-academy', badge: 'OPA' },
    { label: 'Our Focus', href: '#our-focus' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <>
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
          <nav className="hidden lg:flex items-center gap-1 bg-white/90 dark:bg-slate-900/80 backdrop-blur-md px-4 py-1.5 rounded-full border-2 border-slate-200 dark:border-slate-800 shadow-sm">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavigate(link.href);
                }}
                className="relative px-3.5 py-1.5 text-sm font-extrabold text-slate-900 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-400 transition-colors rounded-full flex items-center gap-1.5"
              >
                <span>{link.label}</span>
                {link.badge && (
                  <span className="text-[10px] font-black bg-gradient-to-r from-amber-600 to-orange-600 text-white px-1.5 py-0.5 rounded-full shadow-xs">
                    {link.badge}
                  </span>
                )}
              </a>
            ))}
          </nav>

          {/* Desktop Right Side CTA & Theme */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />

            <Button
              variant="amber"
              size="sm"
            >
              Login
            </Button>

            <Button
              variant="primary"
              size="sm"
              iconRight={<ArrowUpRight className="w-4 h-4" />}
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

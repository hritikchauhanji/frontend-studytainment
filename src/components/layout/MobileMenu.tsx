import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { Button } from '../ui/Button';
import { useAuthModal } from '@/context/useAuthModal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (href: string) => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, onNavigate }) => {

  const { openLoginModal, openJoinModal } = useAuthModal();

  const navItems = [
    { label: 'Home', href: '#hero' },
    { label: 'About Us', href: '#what-is-studytainment' },
    { label: 'Solutions', href: '#learning-ecosystem' },
    { label: 'Own Pace Academy', href: '#own-pace-academy' },
    { label: 'Our Focus', href: '#our-focus' },
    { label: 'Community', href: '#community' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-white dark:bg-slate-900 z-50 p-6 flex flex-col justify-between shadow-2xl border-l-2 border-slate-300 dark:border-slate-800 overflow-y-auto lg:hidden"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
                <a href="#hero" onClick={onClose}>
                  <img
                    src="https://cdn.studytainment.in/images/header_logo_20250902031422.png"
                    alt="Studytainment Logo"
                    className="h-10 w-auto object-contain"
                  />
                </a>

                <button
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 transition-colors cursor-pointer"
                  aria-label="Close navigation menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="py-6 flex flex-col gap-2">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavigate(item.href);
                    }}
                    className="flex items-center justify-between py-3 px-4 rounded-xl text-base font-extrabold text-slate-950 dark:text-slate-200 hover:bg-purple-100 dark:hover:bg-purple-500/10 hover:text-purple-700 dark:hover:text-purple-400 transition-all"
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Bottom Actions */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <span className="text-sm font-extrabold text-slate-900 dark:text-slate-400">Theme</span>
                <ThemeToggle />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => {
                    onClose();
                    openLoginModal();
                  }}
                  fullWidth
                >
                  Login
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => {
                    onClose();
                    openJoinModal();
                  }}
                  fullWidth
                >
                  Join Now
                </Button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

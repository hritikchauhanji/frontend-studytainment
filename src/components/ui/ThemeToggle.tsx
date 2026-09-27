import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/context/theme/useTheme';
import { cn } from '@/lib/utils';

interface ThemeToggleProps {
  className?: string;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className }) => {
  const { actualTheme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={cn(
        'relative inline-flex items-center justify-center p-2.5 rounded-full border border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:text-purple-700 dark:hover:text-purple-400 focus:outline-none focus:ring-2 focus:ring-purple-500/40 shadow-xs transition-colors duration-200 cursor-pointer',
        className
      )}
      aria-label={`Switch to ${actualTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: actualTheme === 'dark' ? 180 : 0 }}
        transition={{ duration: 0.4, ease: 'backOut' }}
        className="w-5 h-5 flex items-center justify-center"
      >
        {actualTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-purple-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-600" />
        )}
      </motion.div>
    </button>
  );
};

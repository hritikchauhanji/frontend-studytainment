import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

export interface ButtonProps extends HTMLMotionProps<'button'> {
  children?: React.ReactNode;
  variant?: 'primary' | 'amber' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      iconLeft,
      iconRight,
      fullWidth = false,
      whileHover,
      whileTap,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'inline-flex items-center justify-center font-bold rounded-full cursor-pointer transition-all duration-300 select-none focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 dark:focus:ring-offset-slate-900 disabled:opacity-50 disabled:cursor-not-allowed';

    const variantStyles = {
      primary:
        'bg-gradient-to-r from-purple-700 via-indigo-700 to-purple-800 text-white shadow-lg shadow-purple-600/30 hover:shadow-purple-600/45 hover:from-purple-600 hover:to-purple-700 border border-purple-400/30',
      amber:
        'bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg shadow-amber-600/30 hover:shadow-amber-600/45 hover:from-amber-500 hover:to-orange-500 border border-amber-400/30',
      secondary:
        'bg-white dark:bg-slate-800 text-slate-900 dark:text-white shadow-md hover:shadow-lg border border-slate-300 dark:border-slate-700 hover:border-purple-400 dark:hover:border-purple-500/50',
      outline:
        'bg-white dark:bg-transparent text-slate-900 dark:text-slate-100 border-2 border-slate-300 dark:border-slate-700 hover:bg-purple-50 hover:border-purple-600 dark:hover:bg-purple-500/10 dark:hover:border-purple-400',
      ghost:
        'bg-transparent text-slate-900 dark:text-slate-200 hover:bg-slate-200/80 dark:hover:bg-slate-800/80',
    };

    const sizeStyles = {
      sm: 'text-xs px-4 py-2 gap-1.5',
      md: 'text-sm px-5 py-2.5 gap-2',
      lg: 'text-base px-7 py-3.5 gap-2.5',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={whileHover || { scale: 1.02 }}
        whileTap={whileTap || { scale: 0.98 }}
        className={cn(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          fullWidth ? 'w-full' : '',
          className
        )}
        {...props}
      >
        {iconLeft && <span className="shrink-0">{iconLeft}</span>}
        {children && <span>{children}</span>}
        {iconRight && <span className="shrink-0 transition-transform duration-200 group-hover:translate-x-1">{iconRight}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

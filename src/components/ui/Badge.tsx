import React from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'purple' | 'amber' | 'emerald' | 'outline' | 'ghost';
  pulse?: boolean;
  className?: string;
  icon?: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'purple',
  pulse = false,
  className,
  icon,
}) => {
  const variantStyles = {
    purple: 'bg-purple-100 dark:bg-purple-500/10 text-purple-900 dark:text-purple-300 border-purple-300 dark:border-purple-500/20 font-bold',
    amber: 'bg-amber-100 dark:bg-amber-500/10 text-amber-900 dark:text-amber-400 border-amber-300 dark:border-amber-500/20 font-bold',
    emerald: 'bg-emerald-100 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/20 font-bold',
    outline: 'bg-white dark:bg-slate-900/80 text-slate-900 dark:text-foreground border-slate-300 dark:border-slate-700 shadow-xs font-bold',
    ghost: 'bg-slate-200/80 dark:bg-muted text-slate-800 dark:text-muted-foreground border-transparent font-bold',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs tracking-wide border transition-all duration-300',
        variantStyles[variant],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-current opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-current"></span>
        </span>
      )}
      {icon && <span className="w-3.5 h-3.5 shrink-0">{icon}</span>}
      {children}
    </span>
  );
};

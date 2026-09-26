import React from 'react';
import { motion } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: 'none' | 'purple' | 'amber' | 'emerald';
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'none',
  hoverEffect = true,
  whileHover,
  ...props
}) => {
  const glowStyles = {
    none: 'hover:border-purple-300 dark:hover:border-purple-500/40 hover:shadow-xl',
    purple: 'hover:shadow-[0_15px_35px_-10px_rgba(91,54,245,0.2)] hover:border-purple-500',
    amber: 'hover:shadow-[0_15px_35px_-10px_rgba(217,119,6,0.2)] hover:border-amber-500',
    emerald: 'hover:shadow-[0_15px_35px_-10px_rgba(13,148,136,0.2)] hover:border-emerald-500',
  };

  return (
    <motion.div
      whileHover={hoverEffect ? (whileHover || { y: -6 }) : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
};

import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  glow?: 'none' | 'purple' | 'amber' | 'emerald';
  hoverEffect?: boolean;
  contentClassName?: string;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glow = 'none',
  hoverEffect = true,
  contentClassName,
  whileHover,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['6deg', '-6deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-6deg', '6deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || !hoverEffect) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const glowStyles = {
    none: 'hover:border-purple-300 dark:hover:border-purple-500/40 hover:shadow-xl',
    purple: 'hover:shadow-[0_20px_40px_-10px_rgba(91,54,245,0.25)] hover:border-purple-500',
    amber: 'hover:shadow-[0_20px_40px_-10px_rgba(217,119,6,0.25)] hover:border-amber-500',
    emerald: 'hover:shadow-[0_20px_40px_-10px_rgba(13,148,136,0.25)] hover:border-emerald-500',
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={hoverEffect ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      whileHover={hoverEffect ? (whileHover || { y: -6 }) : undefined}
      transition={{ duration: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
      className={cn(
        'glass-card rounded-2xl p-6 sm:p-8 transition-all duration-300 relative overflow-hidden group',
        glowStyles[glow],
        className
      )}
      {...props}
    >
      {/* Light Sheen Reflection on Hover */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-2xl z-0"
        style={{
          background: `radial-gradient(450px circle at center, rgba(255,255,255,0.1), transparent 40%)`,
        }}
      />
      <div className={cn('relative z-10', contentClassName)}>{children}</div>
    </motion.div>
  );
};


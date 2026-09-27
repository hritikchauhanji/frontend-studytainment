import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { fadeUp } from '@/lib/utils';

interface SectionHeadingProps {
  badge?: string;
  badgeVariant?: 'purple' | 'amber' | 'emerald' | 'outline';
  badgeIcon?: React.ReactNode;
  title: React.ReactNode;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  darkTitle?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  align = 'center',
  className,
}) => {
  const alignStyles = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={fadeUp(0, 0.6)}
      className={cn('flex flex-col max-w-3xl mb-6 sm:mb-8', alignStyles[align], className)}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 dark:text-white leading-[1.15]">
        {title}
      </h2>

      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: '56px', opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="h-1 rounded-full bg-gradient-to-r from-purple-600 via-amber-500 to-emerald-500 mt-4"
      />

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg text-slate-700 dark:text-slate-300 font-medium leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};


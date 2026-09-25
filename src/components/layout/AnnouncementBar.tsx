import React from 'react';
import { ANNOUNCEMENT } from '@/constants/content';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 dark:bg-slate-950 text-white text-xs sm:text-sm py-2 px-4 border-b border-purple-500/20 relative z-50 overflow-hidden">
      {/* Background glow line */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-amber-500/10 to-emerald-500/10 pointer-events-none" />

      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 sm:gap-3 text-center">
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold text-[11px] tracking-wide border border-purple-500/30">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          {ANNOUNCEMENT.liveTag}
        </span>

        <span className="text-slate-300 font-medium">
          {ANNOUNCEMENT.message}
        </span>

        <a
          href={ANNOUNCEMENT.href}
          className="inline-flex items-center gap-1 font-semibold text-amber-400 hover:text-amber-300 transition-colors underline-offset-4 hover:underline ml-1"
        >
          <span>{ANNOUNCEMENT.ctaText}</span>
        </a>
      </div>
    </div>
  );
};

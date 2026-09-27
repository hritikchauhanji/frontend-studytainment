import React from 'react';
import { cn } from '@/lib/utils';
import { ShieldCheck, Lock } from 'lucide-react';

interface BrowserMockupProps {
  children: React.ReactNode;
  url?: string;
  className?: string;
  _title?: string;
}

export const BrowserMockup: React.FC<BrowserMockupProps> = ({
  children,
  url = 'app.studytainment.com',
  className,
}) => {
  return (
    <div
      className={cn(
        'rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-2xl overflow-hidden transition-all duration-300',
        className
      )}
    >
      {/* Top Window Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-100/90 dark:bg-slate-900/90 border-b border-slate-200/60 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-amber-400/80"></div>
          <div className="w-3 h-3 rounded-full bg-emerald-400/80"></div>
        </div>

        {/* URL Bar */}
        <div className="flex items-center justify-center gap-1.5 px-3 py-1 bg-white/80 dark:bg-slate-800/80 rounded-lg text-xs font-mono text-slate-500 dark:text-slate-400 border border-slate-200/50 dark:border-slate-700/50 max-w-xs sm:max-w-md w-full mx-4 shadow-inner">
          <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
          <span className="truncate">{url}</span>
        </div>

        <div className="flex items-center gap-1 text-slate-400 text-xs font-sans">
          <ShieldCheck className="w-4 h-4 text-purple-500" />
        </div>
      </div>

      {/* Main Viewport Content */}
      <div className="relative bg-slate-50/50 dark:bg-slate-950/60 p-4 sm:p-6">
        {children}
      </div>
    </div>
  );
};

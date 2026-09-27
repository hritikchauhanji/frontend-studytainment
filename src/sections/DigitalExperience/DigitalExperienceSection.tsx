import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BrowserMockup } from '@/components/ui/BrowserMockup';
import { DEMO_PROGRESS_DATA } from '@/constants/content';
import { Bot, TrendingUp, Video, Target, Sparkles, Bell, Search } from 'lucide-react';
import { fadeUp } from '@/lib/utils';

export const DigitalExperienceSection: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot':
        return <Bot className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'TrendingUp':
        return <TrendingUp className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      case 'Video':
        return <Video className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
      case 'Target':
        return <Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="digital-preview" className="py-10 sm:py-14 bg-slate-200/50 dark:bg-slate-950/40 relative overflow-hidden border-y border-slate-300/70 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          title={
            <>
              Your Journey. Your Growth.{' '}
              <span className="text-gradient-primary">Always Within Reach.</span>
            </>
          }
          subtitle="Experience a modern, intuitive SaaS dashboard built to simplify learning, track comprehensive progress, and connect guidance seamlessly."
        />

        {/* Dashboard SaaS Mockup Showcase */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp(0, 0.5)}
          className="max-w-5xl mx-auto"
        >
          <BrowserMockup url="https://app.studytainment.com/dashboard">
            {/* Top Bar Header inside App */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 sm:pb-6 mb-6 border-b border-slate-300 dark:border-slate-800">
              <div className="flex items-center gap-3 min-w-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-purple-600 to-amber-500 p-0.5 shrink-0 shadow-md">
                  <div className="w-full h-full rounded-full bg-slate-950 flex items-center justify-center text-white font-extrabold text-xs sm:text-sm">
                    AR
                  </div>
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-lg sm:text-xl font-extrabold text-slate-950 dark:text-white flex items-center gap-2 truncate">
                    Good morning
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400 font-semibold truncate">
                    Welcome back, {DEMO_PROGRESS_DATA.studentName} ({DEMO_PROGRESS_DATA.grade})
                  </p>
                </div>
              </div>

              {/* Action Icons */}
              <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                <div className="relative flex-1 sm:w-64 min-w-0">
                  <input
                    type="text"
                    placeholder="Search topics, courses..."
                    readOnly
                    className="w-full pl-3.5 pr-8 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-900 dark:text-slate-300 border border-slate-300 dark:border-slate-700 focus:outline-none truncate"
                  />
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute right-3 top-1/2 -translate-y-1/2" />
                </div>
                <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-800 dark:text-slate-300 relative cursor-pointer border border-slate-300 dark:border-slate-700 shrink-0">
                  <Bell className="w-4 h-4" />
                  <span className="w-2 h-2 rounded-full bg-amber-500 absolute top-1.5 right-1.5" />
                </div>
              </div>
            </div>

            {/* Dashboard Progress Stats Row */}
            <div className="mb-6 sm:mb-8">
              <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-1 mb-3 sm:mb-4">
                <h5 className="text-sm font-extrabold text-slate-950 dark:text-white">
                  Your Learning Journey
                </h5>
                <span className="text-xs font-extrabold text-purple-700 dark:text-purple-400">
                  Weekly Goal: 92% Complete
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {DEMO_PROGRESS_DATA.subjects.map((sub) => (
                  <div
                    key={sub.name}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-sm"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-extrabold text-slate-950 dark:text-slate-200">
                        {sub.name}
                      </span>
                      <span className={`text-base font-black ${sub.text}`}>
                        {sub.score}%
                      </span>
                    </div>
                    <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full ${sub.color} rounded-full`}
                        style={{ width: `${sub.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4 Feature SaaS Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              {DEMO_PROGRESS_DATA.features.map((feat) => (
                <div
                  key={feat.title}
                  className="p-3.5 sm:p-4 rounded-2xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 hover:border-purple-500 transition-all duration-300 shadow-xs"
                >
                  <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-3">
                    {getCardIcon(feat.icon)}
                  </div>
                  <h6 className="text-sm font-extrabold text-slate-950 dark:text-white mb-1">
                    {feat.title}
                  </h6>
                  <p className="text-xs text-slate-700 dark:text-slate-400 font-medium leading-relaxed">
                    {feat.desc}
                  </p>
                </div>
              ))}
            </div>
          </BrowserMockup>
        </motion.div>
      </Container>
    </section>
  );
};

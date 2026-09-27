import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { OPA_STAGES } from '@/constants/content';
import type { TimelineStage } from '@/constants/content';
import {
  Sparkles,
  Rocket,
  Award,
  CheckCircle2,
  Heart,
  Shield,
  Compass,
  ArrowRight,
  UserCheck,
} from 'lucide-react';

export const OwnPaceSection: React.FC = () => {
  const [activeStage, setActiveStage] = useState<TimelineStage>(OPA_STAGES[0]);

  const getStageIcon = (id: string) => {
    switch (id) {
      case 'foundation':
        return <Sparkles className="w-5 h-5 text-amber-400 dark:text-amber-400" />;
      case 'rising-star':
        return <Rocket className="w-5 h-5 text-purple-600 dark:text-purple-400" />;
      case 'career-success':
        return <Award className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />;
    }
  };

  return (
    <section id="own-pace-academy" className="py-20 sm:py-32 relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          badge="Signature Lifelong Journey"
          badgeVariant="amber"
          badgeIcon={<Compass className="w-4 h-4" />}
          title={
            <>
              Learning Is Only One Part of{' '}
              <span className="text-gradient-amber">Growing Up.</span>
            </>
          }
          subtitle="Own Pace Academy is a dedicated human-development framework supporting students, parents, and young adults with emotional well-being, life skills, and long-term career direction."
        />

        {/* 6 Beyond-Academics Core Pillars Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {[
            { title: 'Emotional Well-Being', icon: <Heart className="w-4 h-4 text-pink-600 dark:text-pink-400" /> },
            { title: 'Confidence Building', icon: <Shield className="w-4 h-4 text-purple-600 dark:text-purple-400" /> },
            { title: 'Life Skills', icon: <Sparkles className="w-4 h-4 text-amber-600 dark:text-amber-400" /> },
            { title: 'Parenting Support', icon: <UserCheck className="w-4 h-4 text-indigo-600 dark:text-indigo-400" /> },
            { title: 'Career Direction', icon: <Compass className="w-4 h-4 text-emerald-600 dark:text-emerald-400" /> },
            { title: 'Long-Term Guidance', icon: <Award className="w-4 h-4 text-cyan-600 dark:text-cyan-400" /> },
          ].map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white dark:bg-slate-900 p-4 rounded-2xl flex flex-col items-center text-center justify-center border-2 border-slate-200 dark:border-slate-800 hover:border-amber-500 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-2">
                {pillar.icon}
              </div>
              <span className="text-xs font-extrabold text-slate-950 dark:text-slate-200 leading-tight">
                {pillar.title}
              </span>
            </div>
          ))}
        </div>

        {/* Interactive Timeline Navigation */}
        <div className="relative mb-12">
          {/* Animated Connecting Timeline Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-slate-300 dark:bg-slate-800 -translate-y-1/2 z-0 hidden md:block" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {OPA_STAGES.map((stage) => {
              const isSelected = activeStage.id === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage)}
                  className={`w-full text-left p-6 rounded-3xl transition-all duration-300 cursor-pointer border-2 relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-950 dark:bg-slate-900 text-white shadow-2xl border-amber-400 scale-105'
                      : 'bg-white dark:bg-slate-900 text-slate-950 dark:text-slate-200 border-slate-300 dark:border-slate-800 hover:border-amber-400 shadow-md'
                  }`}
                >
                  {/* Stage Top Tag & Age */}
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isSelected
                          ? 'bg-amber-400 text-slate-950'
                          : 'bg-amber-100 dark:bg-slate-800 text-amber-950 dark:text-amber-400'
                      }`}
                    >
                      {stage.badge}
                    </span>
                    <span className="text-xs font-extrabold text-amber-600 dark:text-amber-400 font-mono">
                      {stage.ageRange}
                    </span>
                  </div>

                  <h4 className="text-xl font-extrabold mb-1">
                    {stage.title}
                  </h4>
                  <p className={`text-xs font-semibold mb-4 ${isSelected ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
                    {stage.subTitle}
                  </p>

                  {/* Actions Chips */}
                  <div className="flex flex-wrap gap-1.5">
                    {stage.actions.map((act) => (
                      <span
                        key={act}
                        className={`text-[10px] font-extrabold px-2.5 py-0.5 rounded-full ${
                          isSelected
                            ? 'bg-white/10 text-slate-200'
                            : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-300'
                        }`}
                      >
                        • {act}
                      </span>
                    ))}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Stage Detail Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <GlassCard glow="amber" className="p-8 sm:p-10 border-2 border-amber-500/40 bg-white dark:bg-slate-900">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-2 mb-3">
                    {getStageIcon(activeStage.id)}
                    <span className="text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                      {activeStage.badge} Stage ({activeStage.ageRange})
                    </span>
                  </div>

                  <h3 className="text-3xl font-extrabold text-slate-950 dark:text-white mb-3">
                    {activeStage.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-relaxed mb-6">
                    {activeStage.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeStage.features.map((feat) => (
                      <div
                        key={feat}
                        className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-100 dark:bg-slate-800/70 text-sm font-extrabold text-slate-950 dark:text-slate-200 border border-slate-300 dark:border-slate-700"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-gradient-to-br from-amber-500/15 via-purple-500/10 to-transparent border-2 border-amber-400/30">
                  <div className="w-16 h-16 rounded-full bg-amber-600 dark:bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/30 mb-4">
                    {getStageIcon(activeStage.id)}
                  </div>
                  <h4 className="text-lg font-extrabold text-slate-950 dark:text-white mb-2">
                    Start {activeStage.badge} Guidance
                  </h4>
                  <p className="text-xs text-slate-700 dark:text-slate-400 font-semibold mb-4 max-w-xs">
                    Empowering long-term growth across critical life milestones.
                  </p>
                  <a
                    href="#footer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-950 dark:bg-white text-white dark:text-slate-900 text-sm font-extrabold shadow-md hover:scale-105 transition-transform"
                  >
                    <span>Explore OPA Seminars</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  );
};

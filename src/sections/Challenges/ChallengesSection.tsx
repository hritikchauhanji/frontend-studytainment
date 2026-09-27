import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { CHALLENGES } from '@/constants/content';
import type { ChallengeItem } from '@/constants/content';
import { XCircle, CheckCircle2, ArrowRight, RefreshCw, AlertCircle, Sparkles } from 'lucide-react';
import { fadeUp } from '@/lib/utils';

export const ChallengesSection: React.FC = () => {
  const [activeChallenge, setActiveChallenge] = useState<ChallengeItem>(CHALLENGES[0]);
  const detailRef = useRef<HTMLDivElement>(null);

  const handleSelectChallenge = (challenge: ChallengeItem) => {
    setActiveChallenge(challenge);
    if (typeof window !== 'undefined' && window.innerWidth < 1024) {
      setTimeout(() => {
        if (detailRef.current) {
          const yOffset = -90;
          const y = detailRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 50);
    }
  };

  return (
    <section id="challenges" className="py-10 sm:py-14 bg-slate-200/50 dark:bg-slate-950/40 relative overflow-hidden border-y border-slate-300/70 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          title={
            <>
              Education is changing.{' '}
              <span className="text-gradient-amber">Learning should too.</span>
            </>
          }
          subtitle="Traditional education systems face systemic pressures. See how Studytainment turns legacy friction into empowering learner growth."
        />

        {/* Interactive Comparison Transformation Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp(0, 0.6)}
          className="mb-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 shadow-xl"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* OLD WAY */}
            <div className="flex-1 w-full p-5 rounded-2xl bg-red-100/60 dark:bg-red-500/10 border-2 border-red-300 dark:border-red-500/30 text-center sm:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-red-700 dark:text-red-400 flex items-center justify-center sm:justify-start gap-1.5 mb-2">
                <XCircle className="w-4 h-4 shrink-0" /> Traditional Trap
              </span>
              <h4 className="text-lg font-extrabold text-slate-950 dark:text-white">
                {activeChallenge.oldWay}
              </h4>
              <p className="text-xs text-slate-700 dark:text-slate-400 mt-1 font-semibold">
                Passive, stress-inducing, rigid one-size pace.
              </p>
            </div>

            {/* TRANSFORMATION ARROW */}
            <div className="shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-amber-500/20 text-amber-700 dark:text-amber-400 border-2 border-amber-400/40 shadow-md">
              <RefreshCw className="w-5 h-5 animate-spin-slow" />
            </div>

            {/* STUDYTAINMENT WAY */}
            <div className="flex-1 w-full p-5 rounded-2xl bg-purple-100/80 dark:bg-purple-500/20 border-2 border-purple-300 dark:border-purple-500/40 text-center sm:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-purple-900 dark:text-purple-300 flex items-center justify-center sm:justify-start gap-1.5 mb-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" /> Studytainment Paradigm
              </span>
              <h4 className="text-lg font-extrabold text-slate-950 dark:text-white">
                {activeChallenge.studytainmentWay}
              </h4>
              <p className="text-xs text-slate-800 dark:text-slate-300 mt-1 font-semibold">
                Active understanding, personalized pace & resilience.
              </p>
            </div>
          </div>
        </motion.div>

        {/* 7 Challenges Interactive Selector Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Challenge List */}
          <div className="lg:col-span-6 space-y-3">
            {CHALLENGES.map((challenge) => {
              const isSelected = activeChallenge.id === challenge.id;
              return (
                <button
                  key={challenge.id}
                  onClick={() => handleSelectChallenge(challenge)}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 flex items-center justify-between border-2 cursor-pointer ${
                    isSelected
                      ? 'bg-purple-700 text-white shadow-xl shadow-purple-600/30 border-purple-700'
                      : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-200 border-slate-200 dark:border-slate-800 hover:border-purple-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 rounded-full text-xs font-extrabold flex items-center justify-center ${
                        isSelected
                          ? 'bg-white/20 text-white'
                          : 'bg-slate-200 dark:bg-slate-800 text-slate-800 dark:text-slate-300'
                      }`}
                    >
                      {challenge.id}
                    </span>
                    <span className="text-sm font-extrabold tracking-tight">
                      {challenge.title}
                    </span>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? 'translate-x-1 text-amber-300' : 'opacity-50 text-slate-500'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Active Challenge Detail Focus Card */}
          <div ref={detailRef} className="lg:col-span-6 sticky top-28 scroll-mt-24 min-h-[360px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeChallenge.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard glow="purple" className="border-2 border-purple-400/40 p-8 bg-white dark:bg-slate-900">
                  <div className="flex items-center gap-2 mb-4 text-xs font-extrabold uppercase tracking-widest text-amber-700 dark:text-amber-400">
                    <AlertCircle className="w-4 h-4" />
                    Challenge #{activeChallenge.id} Deep Dive
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mb-4">
                    {activeChallenge.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-relaxed mb-8">
                    {activeChallenge.description}
                  </p>

                  {/* Flow chart illustration */}
                  <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
                    <div className="text-xs font-extrabold text-slate-700 dark:text-slate-400 uppercase tracking-wider mb-3">
                      The Shift
                    </div>
                    <div className="grid grid-cols-2 gap-3 text-center text-xs font-bold">
                      <div className="p-3 rounded-lg bg-red-100 text-red-900 dark:bg-red-500/10 dark:text-red-400 border border-red-200 dark:border-red-500/20">
                        {activeChallenge.oldWay}
                      </div>
                      <div className="p-3 rounded-lg bg-emerald-100 text-emerald-950 dark:bg-emerald-500/10 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20 flex items-center justify-center gap-1">
                        <Sparkles className="w-3.5 h-3.5 shrink-0" />
                        {activeChallenge.studytainmentWay}
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};

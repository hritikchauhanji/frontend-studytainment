import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HeroVisual } from './HeroVisual';
import { HERO_CONTENT } from '@/constants/content';
import { fadeUp, fadeIn } from '@/lib/utils';
import { ArrowRight, Compass } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const headerOffset = 95;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative pt-4 pb-8 sm:pt-6 sm:pb-10 overflow-hidden flex items-center"
    >
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] bg-gradient-to-tr from-purple-500/25 via-indigo-500/15 to-amber-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Text Narrative */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp(0, 0.7)}
            className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            {/* Giant Modern Typography Headline with Staggered Word Reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-slate-950 dark:text-white tracking-tight leading-[1.08] mb-6 flex flex-wrap justify-center lg:justify-start gap-x-3 gap-y-1">
              {HERO_CONTENT.headlineLine1.split(' ').map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 25, rotateX: 30 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.2, 0.65, 0.3, 0.9] }}
                  className="inline-block"
                >
                  {word}
                </motion.span>
              ))}
              <span className="text-gradient-primary inline-flex flex-wrap gap-x-3">
                {HERO_CONTENT.headlineLine2.split(' ').map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 25, rotateX: 30 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: (HERO_CONTENT.headlineLine1.split(' ').length + i) * 0.08,
                      ease: [0.2, 0.65, 0.3, 0.9],
                    }}
                    className="inline-block"
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-900 dark:text-slate-200 font-semibold leading-relaxed max-w-2xl mb-8">
              {HERO_CONTENT.supportingText}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <Button
                variant="primary"
                size="lg"
                onClick={() => handleScrollTo('#what-is-studytainment')}
                iconRight={<ArrowRight className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                {HERO_CONTENT.primaryCta}
              </Button>

              <Button
                variant="amber"
                size="lg"
                onClick={() => handleScrollTo('#own-pace-academy')}
                iconLeft={<Compass className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                {HERO_CONTENT.secondaryCta}
              </Button>
            </div>

            {/* Subtle Ecosystem Trust Points */}
            <div className="mt-8 pt-6 border-t-2 border-slate-300 dark:border-slate-800/80 flex items-center gap-6 text-xs sm:text-sm text-slate-950 dark:text-slate-200 font-extrabold">
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 dark:bg-emerald-500" />
                Adaptive Learning
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600 dark:bg-purple-500" />
                Own Pace Academy
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-600 dark:bg-amber-500" />
                Human Mentorship
              </span>
            </div>
          </motion.div>

          {/* Right Interactive Visual */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn(0.2, 0.8)}
            className="lg:col-span-5 flex justify-center"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

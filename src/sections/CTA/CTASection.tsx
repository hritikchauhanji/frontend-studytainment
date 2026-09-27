import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight, Compass } from 'lucide-react';
import { fadeUp } from '@/lib/utils';

export const CTASection: React.FC = () => {
  const handleScrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="cta" className="py-24 sm:py-36 relative overflow-hidden">
      {/* Background Glowing Mesh Canvas */}
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-100/60 via-slate-100 to-indigo-100/60 dark:from-slate-950 dark:via-purple-950/50 dark:to-slate-950 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-purple-500/20 via-amber-400/20 to-emerald-500/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={fadeUp(0, 0.6)}
          className="max-w-4xl mx-auto text-center flex flex-col items-center p-8 sm:p-14 rounded-3xl bg-white/95 dark:bg-slate-900/80 border-2 border-purple-500/40 shadow-2xl backdrop-blur-xl"
        >
          <Badge variant="amber" pulse className="mb-6">
            Start Exploring Today
          </Badge>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 dark:text-white tracking-tight leading-[1.1] mb-6">
            Ready to Change the Way{' '}
            <span className="text-gradient-primary">You Learn?</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-700 dark:text-slate-300 font-medium max-w-2xl mb-10 leading-relaxed">
            Discover a smarter, more engaging learning journey with Studytainment. Where education, technology, guidance, and human growth come together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleScrollTo('#what-is-studytainment')}
              iconRight={<ArrowRight className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Start Your Journey
            </Button>

            <Button
              variant="amber"
              size="lg"
              onClick={() => handleScrollTo('#own-pace-academy')}
              iconLeft={<Compass className="w-5 h-5" />}
              className="w-full sm:w-auto"
            >
              Explore Own Pace Academy
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { FOCUS_PILLARS } from '@/constants/content';
import { Lightbulb, UserCheck, Compass, Heart, CheckCircle2 } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/utils';

export const FocusSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-amber-600 dark:text-amber-500" />;
      case 'UserCheck':
        return <UserCheck className="w-6 h-6 text-purple-600 dark:text-purple-500" />;
      case 'Compass':
        return <Compass className="w-6 h-6 text-cyan-600 dark:text-cyan-500" />;
      case 'Heart':
        return <Heart className="w-6 h-6 text-pink-600 dark:text-pink-500" />;
      default:
        return <CheckCircle2 className="w-6 h-6 text-emerald-600 dark:text-emerald-500" />;
    }
  };

  return (
    <section id="our-focus" className="py-10 sm:py-14 relative overflow-hidden">
      <Container>
        <SectionHeading
          title={
            <>
              Our Focus.{' '}
              <span className="text-gradient-primary">Their Future.</span>
            </>
          }
          subtitle="Guided by foundational principles that prioritize conceptual clarity, emotional resilience, curiosity, and individual potential."
        />

        {/* 4 Pillars Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {FOCUS_PILLARS.map((pillar) => (
            <motion.div key={pillar.title} variants={fadeUp(0, 0.5)}>
              <GlassCard
                glow="purple"
                className="p-8 border border-slate-200 dark:border-slate-800 flex items-start gap-6 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {getPillarIcon(pillar.icon)}
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-2 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

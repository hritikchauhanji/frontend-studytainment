import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { APPROACH_PILLARS } from '@/constants/content';
import { Sparkles, HeartHandshake, Layers, ShieldCheck, Clock } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/utils';

export const ApproachSection: React.FC = () => {
  const getPillarIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-6 h-6 text-amber-600 dark:text-amber-400" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />;
      case 'Clock':
        return <Clock className="w-6 h-6 text-pink-600 dark:text-pink-400" />;
      default:
        return <Sparkles className="w-6 h-6 text-purple-600 dark:text-purple-400" />;
    }
  };

  return (
    <section id="approach" className="py-20 sm:py-28 relative overflow-hidden">
      <Container>
        <SectionHeading
          title={
            <>
              A More Connected Way to Learn,{' '}
              <span className="text-gradient-primary">Grow and Move Forward.</span>
            </>
          }
          subtitle="Our methodology bridges academic excellence with emotional intelligence, personal pace, and purposeful tech enablement."
        />

        {/* 5 Pillars Visual Layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer(0.12)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {APPROACH_PILLARS.map((pillar, idx) => {
            return (
              <motion.div
                key={pillar.title}
                variants={fadeUp(0, 0.5)}
              >
                <GlassCard
                  glow="purple"
                  className="h-full flex flex-col justify-between border border-slate-200 dark:border-slate-800 p-8 group"
                >
                  <div>
                    {/* Top Pillar Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300">
                        {getPillarIcon(pillar.icon)}
                      </div>
                      <span className="text-2xl font-black text-slate-400 dark:text-slate-600">
                        0{idx + 1}
                      </span>
                    </div>

                    <h3 className="text-xl font-extrabold text-slate-950 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                      {pillar.title}
                    </h3>

                    <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="mt-8 pt-4 border-t border-slate-200 dark:border-slate-800/80">
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-600 to-amber-500 group-hover:w-full transition-all duration-500" />
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
};

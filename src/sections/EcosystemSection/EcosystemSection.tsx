import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { ECOSYSTEM_CARDS } from '@/constants/content';
import { BookOpen, Cpu, Compass, TrendingUp, ArrowRight } from 'lucide-react';
import { staggerContainer, fadeUp } from '@/lib/utils';

export const EcosystemSection: React.FC = () => {
  const getCardIcon = (iconName: string) => {
    switch (iconName) {
      case 'BookOpen':
        return <BookOpen className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'TrendingUp':
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <section id="what-is-studytainment" className="py-10 sm:py-14 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <SectionHeading
          title={
            <>
              One Ecosystem.{' '}
              <span className="text-gradient-primary">Many Ways to Grow.</span>
            </>
          }
          subtitle="Studytainment unites core academics, intelligent adaptive technology, human guidance, and lifelong personal development into a seamlessly connected ecosystem."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {ECOSYSTEM_CARDS.map((card) => (
            <motion.div key={card.id} variants={fadeUp(0, 0.5)}>
              <GlassCard
                glow={card.id === 'learning' ? 'purple' : card.id === 'guidance' ? 'amber' : 'emerald'}
                className="h-full flex flex-col justify-between group border-2 border-slate-300 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md"
              >
                <div>
                  {/* Top Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 ${card.iconColor} flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                      {getCardIcon(card.icon)}
                    </div>
                  </div>

                  {/* Card Title */}
                  <h3 className="text-xl font-black text-slate-950 dark:text-white mb-3 group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                    {card.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-slate-900 dark:text-slate-300 text-sm font-semibold leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                {/* Subtle Action Hover Arrow */}
                <div className="pt-4 border-t-2 border-slate-200 dark:border-slate-800/80 flex items-center justify-between text-xs font-black text-slate-950 dark:text-slate-400 group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

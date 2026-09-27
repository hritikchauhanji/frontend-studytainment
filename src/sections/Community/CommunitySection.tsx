import React from 'react';
import { motion } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { GlassCard } from '@/components/ui/GlassCard';
import { Button } from '@/components/ui/Button';
import { COMMUNITY_CARDS } from '@/constants/content';
import { MessageSquare, ArrowRight, CheckCircle2 } from 'lucide-react';
import { InstagramIcon } from '@/components/ui/SocialIcons';
import { staggerContainer, fadeUp } from '@/lib/utils';

export const CommunitySection: React.FC = () => {
  const getCommunityIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare':
        return <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />;
      case 'Instagram':
        return <InstagramIcon className="w-8 h-8 text-pink-600 dark:text-pink-400" />;
      default:
        return <MessageSquare className="w-8 h-8 text-emerald-600 dark:text-emerald-400" />;
    }
  };

  return (
    <section id="community" className="py-10 sm:py-14 bg-slate-200/50 dark:bg-slate-950/40 relative overflow-hidden border-y border-slate-300/70 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          title={
            <>
              Stay Connected.{' '}
              <span className="text-gradient-amber">Keep Growing.</span>
            </>
          }
          subtitle="Join active discussions, receive event updates, and explore parenting and educational insights with our connected community."
        />

        {/* 2 Premium Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          variants={staggerContainer(0.15)}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {COMMUNITY_CARDS.map((card) => (
            <motion.div key={card.title} variants={fadeUp(0, 0.5)}>
              <GlassCard
                glow={card.buttonVariant === 'emerald' ? 'emerald' : 'purple'}
                className="h-full flex flex-col justify-between p-8 sm:p-10 border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900"
              >
                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center shadow-inner">
                      {getCommunityIcon(card.icon)}
                    </div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-800 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-3.5 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                      {card.type}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-slate-950 dark:text-white mb-3">
                    {card.title}
                  </h3>

                  <p className="text-slate-700 dark:text-slate-300 text-sm font-medium leading-relaxed mb-6">
                    {card.description}
                  </p>

                  <div className="space-y-2 mb-8">
                    {['Program updates & seminars', 'Parenting & learning insights', 'Active student discussions'].map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs font-bold text-slate-900 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  <Button
                    variant={card.buttonVariant === 'emerald' ? 'amber' : 'primary'}
                    size="md"
                    fullWidth
                    iconRight={<ArrowRight className="w-4 h-4" />}
                  >
                    {card.cta}
                  </Button>
                </a>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

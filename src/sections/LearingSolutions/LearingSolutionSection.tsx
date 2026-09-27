import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { BrowserMockup } from '@/components/ui/BrowserMockup';
import { PRODUCTS, DEMO_PROGRESS_DATA } from '@/constants/content';
import {
  CheckCircle2,
  Play,
  Users,
  MessageSquare,
  Award,
} from 'lucide-react';
import { fadeUp } from '@/lib/utils';

export const LearningSolutionsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'classroom' | 'smart-study' | 'online-classes'>('smart-study');

  return (
    <section id="learning-ecosystem" className="py-10 sm:py-14 bg-slate-200/50 dark:bg-slate-950/40 relative overflow-hidden border-y border-slate-300/70 dark:border-slate-800/60">
      <Container>
        <SectionHeading
          title={
            <>
              Learning, <span className="text-gradient-primary">Wherever It Happens.</span>
            </>
          }
          subtitle="Explore the three technology-driven environments empowering students inside school classrooms, at home, and in live digital spaces."
        />

        {/* Product Selection Tab Bar */}
        <div className="flex items-center justify-center gap-3 mb-8 flex-wrap">
          {PRODUCTS.map((prod) => {
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id as 'classroom' | 'smart-study' | 'online-classes')}
                className={`px-5 py-2.5 rounded-full text-sm font-extrabold transition-all duration-300 flex items-center gap-2 cursor-pointer border-2 ${
                  isActive
                    ? 'bg-purple-700 text-white shadow-lg shadow-purple-600/30 border-purple-700'
                    : 'bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-300 border-slate-300 dark:border-slate-800 hover:border-purple-400 shadow-xs'
                }`}
              >
                <span>{prod.num}.</span>
                <span>{prod.title}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Showcase Viewport */}
        <AnimatePresence mode="wait">
          {PRODUCTS.filter((p) => p.id === activeTab).map((product) => (
            <motion.div
              key={product.id}
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={fadeUp(0, 0.4)}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              {/* Left Column: Product Info */}
              <div className="lg:col-span-5 flex flex-col items-start">
                <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-950 dark:text-white mb-4">
                  {product.title}
                </h3>

                <p className="text-lg font-extrabold text-purple-700 dark:text-purple-400 mb-4">
                  "{product.tagline}"
                </p>

                <p className="text-slate-700 dark:text-slate-300 text-base font-medium leading-relaxed mb-8">
                  {product.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-3 w-full mb-8">
                  {product.highlights.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm font-extrabold text-slate-900 dark:text-slate-200">
                      <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Browser UI Mockup Demonstration */}
              <div className="lg:col-span-7">
                <BrowserMockup url={`https://app.studytainment.com/${product.id}`}>
                  {product.id === 'smart-study' && (
                    <div className="space-y-6">
                      {/* Dashboard Header */}
                      <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
                        <div>
                          <span className="text-xs text-slate-500 font-bold">Learner Dashboard</span>
                          <h4 className="text-lg font-extrabold text-slate-950 dark:text-white">
                            {DEMO_PROGRESS_DATA.studentName}
                          </h4>
                          <span className="text-xs text-purple-700 dark:text-purple-400 font-extrabold">{DEMO_PROGRESS_DATA.grade}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-900 dark:text-emerald-400 px-3.5 py-1.5 rounded-full text-xs font-extrabold border border-emerald-300 dark:border-emerald-500/20">
                          <Award className="w-4 h-4 shrink-0" />
                          <span>On Track</span>
                        </div>
                      </div>

                      {/* Subject Progress Bars */}
                      <div className="space-y-4">
                        <span className="text-xs font-extrabold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                          Subject Mastery Progress
                        </span>
                        {DEMO_PROGRESS_DATA.subjects.map((sub) => (
                          <div key={sub.name} className="space-y-1.5">
                            <div className="flex justify-between text-xs font-extrabold text-slate-900 dark:text-slate-200">
                              <span>{sub.name}</span>
                              <span className={sub.text}>{sub.score}%</span>
                            </div>
                            <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
                              <div
                                className={`h-full ${sub.color} rounded-full transition-all duration-1000`}
                                style={{ width: `${sub.score}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Quick Action Badges */}
                      <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-500/10 border border-purple-300 dark:border-purple-500/20 text-xs font-extrabold text-purple-900 dark:text-purple-300">
                          ⚡ Next Session: Physics Concepts
                        </div>
                        <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/20 text-xs font-extrabold text-amber-950 dark:text-amber-300">
                          🎯 Streak: 14 Days Active
                        </div>
                      </div>
                    </div>
                  )}

                  {product.id === 'classroom' && (
                    <div className="space-y-4">
                      {/* Smart Classroom Interface Mockup */}
                      <div className="aspect-video rounded-xl bg-slate-950 text-white p-4 flex flex-col justify-between relative overflow-hidden border border-slate-800">
                        <div className="flex justify-between items-center z-10">
                          <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse" />
                            <span className="text-xs font-bold">Interactive SmartBoard • Room 3B</span>
                          </div>
                          <span className="text-[11px] bg-purple-600 px-2.5 py-0.5 rounded-full font-extrabold">
                            Classroom Sync
                          </span>
                        </div>

                        {/* Interactive Board Visual representation */}
                        <div className="my-auto text-center py-6">
                          <span className="text-xs text-amber-400 font-mono">Formula Visualizer: Pythagorean Theorem</span>
                          <h5 className="text-2xl font-black text-white mt-1">a² + b² = c²</h5>
                          <p className="text-xs text-slate-300 font-medium mt-2">
                            Real-time 3D Triangle Rotation • 28 Active Students Connected
                          </p>
                        </div>

                        <div className="flex justify-between items-center text-xs text-slate-300 z-10 pt-2 border-t border-slate-800">
                          <span>Educator: Prof. Sharma</span>
                          <span className="text-emerald-400 font-bold">● Interactive Quiz Live</span>
                        </div>
                      </div>
                    </div>
                  )}

                  {product.id === 'online-classes' && (
                    <div className="space-y-4">
                      {/* Live Video Classroom Mockup */}
                      <div className="aspect-video rounded-xl bg-slate-950 p-4 relative overflow-hidden border border-slate-800 flex flex-col justify-between">
                        <div className="flex items-center justify-between z-10">
                          <span className="px-2.5 py-1 rounded-full bg-red-600 text-white text-[11px] font-bold tracking-wide flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-white animate-ping" />
                            LIVE MASTERCLASS
                          </span>
                          <span className="text-xs text-slate-300 font-mono">142 Participants</span>
                        </div>

                        {/* Stream Center Play */}
                        <div className="flex flex-col items-center justify-center z-10 my-auto text-center">
                          <div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center shadow-lg shadow-purple-600/50 mb-2 cursor-pointer hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 fill-current ml-1" />
                          </div>
                          <span className="text-sm font-extrabold text-white">
                            Advanced Physics & Intuitive Geometry
                          </span>
                          <span className="text-xs text-slate-300">Streamed in 1080p Ultra HD</span>
                        </div>

                        {/* Bottom Video Controls */}
                        <div className="flex justify-between items-center text-xs text-slate-300 z-10">
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4 text-purple-400" />
                            <MessageSquare className="w-4 h-4 text-amber-400" />
                          </div>
                          <span className="text-emerald-400 font-bold">Q&A Open</span>
                        </div>
                      </div>
                    </div>
                  )}
                </BrowserMockup>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </Container>
    </section>
  );
};

export interface ChallengeItem {
  id: number;
  title: string;
  oldWay: string;
  studytainmentWay: string;
  description: string;
}

export const ANNOUNCEMENT = {
  liveTag: 'LIVE',
  message: 'Own Pace Academy is now live',
  ctaText: 'Explore OPA →',
  href: '#own-pace-academy',
};

export const HERO_CONTENT = {
  badge: 'Reimagining Human Development & Learning',
  headlineLine1: 'Learning Should Never',
  headlineLine2: 'Feel Like a Burden.',
  supportingText:
    'Studytainment is building a connected learning and human-development ecosystem where education, technology, guidance and growth come together.',
  primaryCta: 'Explore Studytainment',
  secondaryCta: 'Discover Own Pace Academy',
  floatingNodes: [
    { label: 'AI Learning', color: 'from-purple-500 to-indigo-500', pos: 'top-left' },
    { label: 'Growth', color: 'from-amber-500 to-orange-500', pos: 'top-right' },
    { label: 'Confidence', color: 'from-emerald-500 to-teal-500', pos: 'right-mid' },
    { label: 'Creativity', color: 'from-pink-500 to-rose-500', pos: 'left-mid' },
    { label: 'Future Skills', color: 'from-cyan-500 to-blue-500', pos: 'bottom-left' },
    { label: 'Progress', color: 'from-violet-500 to-purple-600', pos: 'bottom-right' },
    { label: 'Guidance', color: 'from-amber-400 to-yellow-500', pos: 'top-mid' },
  ],
};

export const ECOSYSTEM_CARDS = [
  {
    id: 'learning',
    title: 'Learning',
    badge: 'Core Foundation',
    description: 'Interactive concept clarity, application-based modules, and tailored pathways designed for intuitive understanding.',
    icon: 'BookOpen',
    gradient: 'from-purple-500/20 via-indigo-500/10 to-transparent',
    borderColor: 'group-hover:border-purple-500/40',
    iconColor: 'text-purple-600 dark:text-purple-400',
  },
  {
    id: 'technology',
    title: 'Technology',
    badge: 'Smart Enablement',
    description: 'Purpose-driven AI guidance, real-time analytics, and connected digital spaces supporting human learners.',
    icon: 'Cpu',
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    borderColor: 'group-hover:border-cyan-500/40',
    iconColor: 'text-cyan-600 dark:text-cyan-400',
  },
  {
    id: 'guidance',
    title: 'Guidance',
    badge: 'Human Direction',
    description: 'Mentorship, emotional well-being frameworks, parenting dialogues, and long-term career orientation.',
    icon: 'Compass',
    gradient: 'from-amber-500/20 via-orange-500/10 to-transparent',
    borderColor: 'group-hover:border-amber-500/40',
    iconColor: 'text-amber-600 dark:text-amber-400',
  },
  {
    id: 'growth',
    title: 'Growth',
    badge: 'Lifelong Potential',
    description: 'Confidence building, critical thinking, adaptability, and life skills for life beyond academics.',
    icon: 'TrendingUp',
    gradient: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    borderColor: 'group-hover:border-emerald-500/40',
    iconColor: 'text-emerald-600 dark:text-emerald-400',
  },
];

export const CHALLENGES: ChallengeItem[] = [
  {
    id: 1,
    title: 'Rote learning over real understanding',
    oldWay: 'Rote Memorization',
    studytainmentWay: 'Deep Conceptual Understanding',
    description: 'Moving away from cramming facts for exams towards exploring real-world applications and genuine comprehension.',
  },
  {
    id: 2,
    title: 'One approach for every learner',
    oldWay: 'One-Size-Fits-All Pace',
    studytainmentWay: 'Personalized Adaptive Pathways',
    description: 'Recognizing that every student absorbs knowledge uniquely, allowing learners to thrive at their own rhythm.',
  },
  {
    id: 3,
    title: 'Rising academic pressure',
    oldWay: 'Exam Anxiety & Stress',
    studytainmentWay: 'Balanced & Motivating Growth',
    description: 'Replacing high-stakes fear with constructive curiosity, emotional resilience, and engaging learning experiences.',
  },
  {
    id: 4,
    title: 'Difficulty with independent learning',
    oldWay: 'Passive Helplessness',
    studytainmentWay: 'Self-Driven Confidence',
    description: 'Empowering students with smart toolkits, guided practice, and habits to become self-reliant learners.',
  },
  {
    id: 5,
    title: 'Passive digital learning',
    oldWay: 'Isolated Screen Time',
    studytainmentWay: 'Interactive & Social Engagement',
    description: 'Transforming boring lecture videos into active problem-solving, collaborative tasks, and dynamic feedback.',
  },
  {
    id: 6,
    title: 'The gap beyond academics',
    oldWay: 'Marks-Only Focus',
    studytainmentWay: 'Holistic Life & Skill Readiness',
    description: 'Integrating emotional well-being, communication, leadership, and critical thinking into daily development.',
  },
  {
    id: 7,
    title: 'Fragmented guidance while growing up',
    oldWay: 'Confusing & Isolated Advice',
    studytainmentWay: 'Connected Ecosystem Mentorship',
    description: 'Uniting parents, educators, and mentors around the learner across every critical age transition.',
  },
];

export const APPROACH_PILLARS = [
  {
    title: 'Understanding Before Memorising',
    description: 'Make concepts easier to understand, explore and apply through visualization and active problem-solving.',
    icon: 'Sparkles',
  },
  {
    title: 'Technology With a Human Purpose',
    description: 'Technology should support people rather than replace meaningful human connection and mentorship.',
    icon: 'HeartHandshake',
  },
  {
    title: 'Learning Across Environments',
    description: 'Classroom, self-study and online learning should work seamlessly together in a unified ecosystem.',
    icon: 'Layers',
  },
  {
    title: 'Development Beyond Academics',
    description: 'Confidence, emotional well-being, life skills and future readiness matter just as much as grades.',
    icon: 'ShieldCheck',
  },
  {
    title: 'Every Journey Deserves Its Own Pace',
    description: 'Every learner has a unique pace, potential and way of understanding that deserves respect.',
    icon: 'Clock',
  },
  {
    title: 'Continuous Curiosity & Real-World Impact',
    description: 'Transform passive learning into active exploration that inspires lifelong passion and real-world problem-solving.',
    icon: 'Compass',
  },
];
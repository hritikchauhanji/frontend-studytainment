export interface ChallengeItem {
  id: number;
  title: string;
  oldWay: string;
  studytainmentWay: string;
  description: string;
}

export interface ProductItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
}

export interface TimelineStage {
  id: string;
  badge: string;
  ageRange: string;
  title: string;
  subTitle: string;
  actions: string[];
  description: string;
  features: string[];
  iconName: string;
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

export const PRODUCTS: ProductItem[] = [
  {
    id: 'classroom',
    num: '01',
    title: 'Studytainment Classroom',
    tagline: 'Transforming the way learning happens inside the classroom.',
    description: 'Empowering educators and students with interactive smart tools, collaborative whiteboards, and real-time concept visualization.',
    highlights: ['Interactive smart boards', 'Seamless educator tools', 'Active peer collaboration', 'Real-time concept drills'],
  },
  {
    id: 'smart-study',
    num: '02',
    title: 'Smart Study',
    tagline: 'Helping learners become more confident and independent.',
    description: 'A personalized learning companion that adapts to individual mastery levels, tracks progress, and provides instant targeted practice.',
    highlights: ['Adaptive practice engines', 'Progress analytics', 'Personalized review cards', 'Interactive self-testing'],
  },
  {
    id: 'online-classes',
    num: '03',
    title: 'Online Classroom',
    tagline: 'Meaningful learning, beyond physical boundaries.',
    description: 'Engaging, live interactive sessions with expert mentors, active discussions, instant Q&A, and high-definition learning streams.',
    highlights: ['Live interactive sessions', 'Instant doubt resolution', 'Recorded masterclasses', 'Global peer discussions'],
  },
];

export const DEMO_PROGRESS_DATA = {
  studentName: 'Alex Rivera',
  grade: 'Class X • Smart Learner',
  subjects: [
    { name: 'Mathematics', score: 87, color: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400' },
    { name: 'Science', score: 78, color: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
    { name: 'Communication', score: 94, color: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
  ],
  features: [
    { title: 'AI Guidance', desc: 'Real-time personalized study suggestions & topic suggestions.', icon: 'Bot' },
    { title: 'Learning Progress', desc: 'Visual milestone tracking across all active subjects.', icon: 'TrendingUp' },
    { title: 'Expert Sessions', desc: 'Direct live access to top mentors and guidance counsellors.', icon: 'Video' },
    { title: 'Growth Tracking', desc: 'Holistic feedback beyond academic grades.', icon: 'Target' },
  ],
};

export const OPA_STAGES: TimelineStage[] = [
  {
    id: 'foundation',
    badge: 'FOUNDATION',
    ageRange: 'Age 3–12',
    title: 'Foundation Journey',
    subTitle: 'Sparking Curiosity & Building Character',
    actions: ['Learn', 'Explore', 'Build Confidence'],
    description: 'Early years focus on building natural curiosity, foundational literacy, emotional safety, creative expression, and core confidence.',
    features: ['Curiosity-first exploration', 'Emotional well-being basics', 'Creative expression modules', 'Parent-child bonding tools'],
    iconName: 'Sparkle',
  },
  {
    id: 'rising-star',
    badge: 'RISING STAR',
    ageRange: 'Age 13–20',
    title: 'Rising Star Journey',
    subTitle: 'Navigating Identity & Future Readiness',
    actions: ['Discover', 'Develop', 'Prepare'],
    description: 'Teenage and young adult years centered on self-discovery, academic mastery, emotional resilience, skill building, and career exploration.',
    features: ['Career pathway discovery', 'Stress & emotional management', 'Life skills & communication', 'Mentorship & peer circles'],
    iconName: 'Rocket',
  },
  {
    id: 'career-success',
    badge: 'CAREER SUCCESS',
    ageRange: 'Age 21–30',
    title: 'Career & Life Success',
    subTitle: 'Translating Potential into Lasting Impact',
    actions: ['Choose', 'Build', 'Grow'],
    description: 'Young professional years focused on strategic career execution, leadership growth, continuous learning, and adult well-being.',
    features: ['Professional skill acceleration', 'Mentorship & leadership', 'Personal growth & balance', 'Career transition guidance'],
    iconName: 'Award',
  },
];

export const FOCUS_PILLARS = [
  {
    title: 'Meaningful Learning',
    description: 'Understand concepts deeply, not just memorize answers for a single test.',
    icon: 'Lightbulb',
  },
  {
    title: 'Learner-Centred Growth',
    description: 'Every learner has a unique pace, potential, and individual strength.',
    icon: 'UserCheck',
  },
  {
    title: 'Engagement & Curiosity',
    description: 'Learning should encourage open exploration, inquiry, and delight.',
    icon: 'Compass',
  },
  {
    title: 'Growth Beyond Academics',
    description: 'Confidence, well-being, and life skills matter just as much as marks.',
    icon: 'Heart',
  },
];

export const COMMUNITY_CARDS = [
  {
    title: 'WhatsApp Community',
    type: 'Updates & Discussions',
    description: 'Get live program updates, seminars & events announcements, and exclusive learning & parenting insights.',
    cta: 'Join Community',
    href: 'https://chat.whatsapp.com/',
    icon: 'MessageSquare',
    bgColor: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    buttonVariant: 'emerald' as const,
  },
  {
    title: 'Instagram Community',
    type: 'Content & Inspiration',
    description: 'Engaging educational reels, insightful parenting conversations, student spotlights, and daily updates.',
    cta: 'Follow Us',
    href: 'https://www.instagram.com/studytainment24/',
    icon: 'Instagram',
    bgColor: 'from-pink-500/10 via-purple-500/5 to-transparent',
    buttonVariant: 'primary' as const,
  },
];

export const SOCIAL_LINKS = [
  { name: 'Instagram', href: 'https://www.instagram.com/studytainment24/', icon: 'Instagram' },
  { name: 'Facebook', href: 'https://www.facebook.com/people/Studytainment/61592715103557/?sk=directory_links', icon: 'Facebook' },
  { name: 'YouTube', href: 'https://www.youtube.com/@Studytainmentofficial', icon: 'Youtube' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/studytainment/', icon: 'Linkedin' },
];

export const FOOTER_NAVIGATION = {
  platform: [
    { name: 'Studytainment Classroom', href: '#learning-ecosystem' },
    { name: 'Smart Study', href: '#learning-ecosystem' },
    { name: 'Online Classes', href: '#learning-ecosystem' },
    { name: 'Own Pace Academy', href: '#own-pace-academy' },
  ],
  company: [
    { name: 'About Studytainment', href: '#what-is-studytainment' },
    { name: 'Our Approach', href: '#approach' },
    { name: 'Our Focus', href: '#our-focus' },
    { name: 'Careers', href: '#footer' },
    { name: 'Contact Us', href: '#footer' },
  ],
  resources: [
    { name: 'Seminars & Events', href: '#own-pace-academy' },
    { name: 'Community Discussions', href: '#community' },
    { name: 'Parenting Insights', href: '#community' },
    { name: 'Student Growth Kit', href: '#digital-preview' },
  ],
};
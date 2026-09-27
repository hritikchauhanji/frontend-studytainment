import React, { useState } from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { Sparkles, Send, CheckCircle2 } from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon } from '@/components/ui/SocialIcons';
import { FOOTER_NAVIGATION, SOCIAL_LINKS } from '@/constants/content';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const getSocialIcon = (name: string) => {
    switch (name) {
      case 'Instagram':
        return <InstagramIcon className="w-4 h-4" />;
      case 'Facebook':
        return <FacebookIcon className="w-4 h-4" />;
      case 'Youtube':
        return <YoutubeIcon className="w-4 h-4" />;
      case 'Linkedin':
        return <LinkedinIcon className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  return (
    <footer id="footer" className="bg-slate-100 dark:bg-slate-950 text-slate-800 dark:text-slate-300 pt-10 pb-6 border-t border-slate-300 dark:border-slate-800 relative overflow-hidden transition-colors duration-300">
      {/* Background glow effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <Container>
        {/* Newsletter Callout Banner */}
        <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border-2 border-purple-500/30 dark:border-purple-500/20 shadow-xl dark:shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7">
              <span className="text-amber-600 dark:text-amber-400 text-xs font-extrabold uppercase tracking-widest">
                Newsletter
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 dark:text-white mt-1">
                Stay connected with Studytainment.
              </h3>
              <p className="text-slate-700 dark:text-slate-400 text-sm font-medium mt-2 max-w-xl">
                Receive weekly insights on adaptive learning, parenting guidance, Own Pace Academy updates, and educational innovation.
              </p>
            </div>

            <div className="lg:col-span-5">
              {subscribed ? (
                <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-500/15 border-2 border-emerald-500/40 text-emerald-800 dark:text-emerald-300">
                  <CheckCircle2 className="w-5 h-5 shrink-0" />
                  <span className="text-sm font-bold">Thank you! You have subscribed to Studytainment updates.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 rounded-full bg-slate-100 dark:bg-slate-800/90 border-2 border-slate-300 dark:border-slate-700 text-slate-950 dark:text-white placeholder:text-slate-500 dark:placeholder:text-slate-400 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/30 text-sm font-medium transition-all"
                  />
                  <Button
                    type="submit"
                    variant="amber"
                    size="md"
                    className="shrink-0"
                    iconRight={<Send className="w-4 h-4" />}
                  >
                    Subscribe
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-300 dark:border-slate-800">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#hero" className="inline-block mb-4">
              <img
                src="https://cdn.studytainment.in/images/header_logo_20250902031422.png"
                alt="Studytainment Logo"
                className="h-12 w-auto object-contain"
              />
            </a>

            <p className="text-slate-700 dark:text-slate-400 text-sm font-medium leading-relaxed mb-6 max-w-sm">
              Studytainment is an education platform providing learning resources, courses, career guidance, classrooms, seminars and educational opportunities for students, parents, and educators.
            </p>

            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="w-9 h-9 rounded-full bg-white dark:bg-slate-800 hover:bg-purple-600 dark:hover:bg-purple-600 text-slate-700 dark:text-slate-300 hover:text-white dark:hover:text-white flex items-center justify-center border border-slate-300 dark:border-slate-700 transition-all duration-300 shadow-xs"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Platform */}
          <div>
            <h4 className="text-slate-950 dark:text-white font-extrabold text-sm tracking-wider uppercase mb-4">
              Platform
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {FOOTER_NAVIGATION.platform.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-700 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="text-slate-950 dark:text-white font-extrabold text-sm tracking-wider uppercase mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {FOOTER_NAVIGATION.company.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-700 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-slate-950 dark:text-white font-extrabold text-sm tracking-wider uppercase mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-sm font-medium">
              {FOOTER_NAVIGATION.resources.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-slate-700 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-600 dark:text-slate-400">
          <p>© 2026 Studytainment. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#footer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#footer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
              Terms & Conditions
            </a>
            <a href="#footer" className="hover:text-slate-950 dark:hover:text-white transition-colors">
              Cookie Preferences
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

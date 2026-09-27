import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuthModal } from '@/context/useAuthModal';
import { Button } from './Button';
import {
  X,
  Mail,
  Lock,
  User,
  CheckCircle2,
  Eye,
  EyeOff,
  ArrowRight,
  ShieldCheck,
  UserCheck,
  GraduationCap,
} from 'lucide-react';

export const AuthModal: React.FC = () => {
  const { isOpen, mode, closeModal, setMode } = useAuthModal();
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState<'student' | 'parent' | 'educator'>('student');
  const [submitted, setSubmitted] = useState(false);

  // Form state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');

  // Handle ESC key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, closeModal]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      closeModal();
    }, 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-lg bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-slate-300 dark:border-slate-800 z-10 my-8 overflow-hidden"
          >
            {/* Top Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-slate-200 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <img
                src="https://cdn.studytainment.in/images/header_logo_20250902031422.png"
                alt="Studytainment Logo"
                className="h-12 w-auto object-contain mb-3"
              />
              <p className="text-xs text-slate-700 dark:text-slate-400 font-extrabold">
                {mode === 'login' ? 'Welcome back to your learning portal' : 'Start your personalized growth journey'}
              </p>
            </div>

            {/* Mode Tab Switcher */}
            <div className="flex bg-slate-100 dark:bg-slate-800/80 p-1.5 rounded-2xl mb-6 border border-slate-200 dark:border-slate-700">
              <button
                type="button"
                onClick={() => setMode('login')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  mode === 'login'
                    ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-md'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-950'
                }`}
              >
                Login to Portal
              </button>
              <button
                type="button"
                onClick={() => setMode('join')}
                className={`flex-1 py-2.5 rounded-xl text-xs font-black transition-all cursor-pointer ${
                  mode === 'join'
                    ? 'bg-purple-700 text-white shadow-md'
                    : 'text-slate-700 dark:text-slate-400 hover:text-slate-950'
                }`}
              >
                Join Now (Free)
              </button>
            </div>

            {/* Success Submission Feedback */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 rounded-2xl bg-emerald-100 dark:bg-emerald-500/20 border-2 border-emerald-300 dark:border-emerald-500/40 text-center flex flex-col items-center justify-center my-6"
              >
                <CheckCircle2 className="w-12 h-12 text-emerald-600 dark:text-emerald-400 mb-3" />
                <h4 className="text-lg font-black text-emerald-950 dark:text-white">
                  {mode === 'login' ? 'Login Successful!' : 'Account Created!'}
                </h4>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 font-bold mt-1">
                  Redirecting to your Studytainment dashboard...
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Full Name Input (Join Mode only) */}
                {mode === 'join' && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-extrabold text-slate-950 dark:text-slate-300">
                      Full Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your name"
                        className="w-full px-4 py-3 pl-10 rounded-2xl bg-slate-50 dark:bg-slate-800 text-sm font-extrabold text-slate-950 dark:text-white border-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:border-purple-600"
                      />
                      <User className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    </div>
                  </div>
                )}

                {/* Email / Phone Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-300">
                    Email Address or Phone Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="student@studytainment.com"
                      className="w-full px-4 py-3 pl-10 rounded-2xl bg-slate-50 dark:bg-slate-800 text-sm font-extrabold text-slate-950 dark:text-white border-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:border-purple-600"
                    />
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>

                {/* Password Input */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label className="text-xs font-extrabold text-slate-950 dark:text-slate-300">
                      Password
                    </label>
                    {mode === 'login' && (
                      <a href="#modal" className="text-[11px] font-black text-purple-700 dark:text-purple-400 hover:underline">
                        Forgot password?
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="w-full px-4 py-3 pl-10 pr-10 rounded-2xl bg-slate-50 dark:bg-slate-800 text-sm font-extrabold text-slate-950 dark:text-white border-2 border-slate-300 dark:border-slate-700 focus:outline-none focus:border-purple-600"
                    />
                    <Lock className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-800 cursor-pointer"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Role Selector Chips */}
                <div className="space-y-1.5 pt-1">
                  <label className="text-xs font-extrabold text-slate-950 dark:text-slate-300">
                    I am joining as a
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: 'student', label: 'Student', icon: <GraduationCap className="w-3.5 h-3.5" /> },
                      { id: 'parent', label: 'Parent', icon: <UserCheck className="w-3.5 h-3.5" /> },
                      { id: 'educator', label: 'Educator', icon: <ShieldCheck className="w-3.5 h-3.5" /> },
                    ].map((role) => (
                      <button
                        key={role.id}
                        type="button"
                        onClick={() => setSelectedRole(role.id as 'student' | 'parent' | 'educator')}
                        className={`py-2 px-2.5 rounded-xl text-xs font-extrabold flex items-center justify-center gap-1.5 cursor-pointer border-2 transition-all ${
                          selectedRole === role.id
                            ? 'bg-purple-100 dark:bg-purple-500/20 text-purple-950 dark:text-purple-300 border-purple-600'
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-purple-300'
                        }`}
                      >
                        {role.icon}
                        <span>{role.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms Checkbox */}
                <div className="flex items-center gap-2 pt-2">
                  <input
                    type="checkbox"
                    id="terms"
                    required
                    className="w-4 h-4 rounded-md border-slate-300 text-purple-600 focus:ring-purple-500 cursor-pointer"
                  />
                  <label htmlFor="terms" className="text-xs font-semibold text-slate-700 dark:text-slate-300 cursor-pointer">
                    I agree to the <span className="font-extrabold text-purple-700 underline">Terms of Service</span> & <span className="font-extrabold text-purple-700 underline">Privacy Policy</span>
                  </label>
                </div>

                {/* Submit Action Button */}
                <div className="pt-2">
                  <Button
                    type="submit"
                    variant={mode === 'join' ? 'amber' : 'primary'}
                    size="lg"
                    fullWidth
                    iconRight={<ArrowRight className="w-5 h-5" />}
                  >
                    {mode === 'login' ? 'Login to Studytainment' : 'Create Free Account & Join'}
                  </Button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

import { type ClassValue, clsx } from "clsx";
import type { Variants } from "framer-motion";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Framer Motion standard animation variants
export const fadeIn = (delay: number = 0, duration: number = 0.5): Variants => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});

export const fadeUp = (delay: number = 0, duration: number = 0.6): Variants => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      delay,
      ease: "easeOut",
    },
  },
});
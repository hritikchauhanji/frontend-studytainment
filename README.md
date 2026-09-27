# Studytainment

> **Reimagining Human Development & Learning**  
> *Where Education, Technology, Guidance, and Growth Converge.*

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-6.0-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## Overview

**Studytainment** is a modern, next-generation human development and learning ecosystem. Built on the belief that **"Learning Should Never Feel Like a Burden"**, Studytainment integrates interactive technology, tailored guidance, concept-focused learning, and holistic growth into a unified digital experience.

---

## Ecosystem Pillars

| Pillar | Focus | Highlights |
|---|---|---|
| **Learning** | Core Foundation | Concept clarity, application-focused modules, and personalized pathways. |
| **Technology** | Smart Enablement | Purpose-driven AI guidance, real-time progress analytics, interactive digital spaces. |
| **Guidance** | Human Direction | Mentorship, emotional well-being frameworks, parenting dialogues & career orientation. |
| **Growth** | Lifelong Potential | Critical thinking, confidence building, adaptability, and real-world life skills. |

---

## Key Features

- **Modern Glassmorphic UI**: Ultra-sleek dark/light theme support with dynamic backdrop blurs and fluid gradients.
- **Interactive 3D Hero Section**: Built using Three.js & React Three Fiber featuring interactive floating node elements.
- **Own Pace Academy (OPA) Timeline**: Interactive age-bracket roadmap showcasing tailored learning stages from early exploration to career mastery.
- **Smooth Micro-Animations**: Powered by Framer Motion and Lenis smooth scrolling for premium interactive feedback.
- **Auth Modal System**: Dynamic Sign In / Sign Up modal with tab switching, form state handling, and social login mockups.
- **Dynamic Theme Switcher**: Context-driven dark and light mode toggle with smooth theme transitions.
- **Fully Responsive**: Optimized experience across mobile, tablet, and desktop screens.
- **Quality-Assured Codebase**: Integrated ESLint 10, Husky pre-commit hooks, and Lint-staged for strict TypeScript standards.

---

## Tech Stack & Architecture

### Core Technologies
- **Frontend Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript 6](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Routing**: [React Router v7](https://reactrouter.com/)

### Libraries & Utilities
- **3D & Graphics**: `@react-three/fiber`, `@react-three/drei`, `three`
- **Animations**: `framer-motion`, `canvas-confetti`, `lenis`
- **Iconography**: `lucide-react`
- **Utility Helpers**: `clsx`, `tailwind-merge`, `class-variance-authority`

---

## Project Structure

```
frontend-studytainment/
├── public/                 # Static public assets
├── src/
│   ├── assets/             # Images, graphics, and brand media
│   ├── components/         # Reusable UI & layout components
│   │   ├── layout/         # AnnouncementBar, Navbar, Footer, MobileMenu
│   │   └── ui/             # AuthModal, Button, GlassCard, ThemeToggle, etc.
│   ├── constants/          # Content constants, data models & feature configs
│   ├── context/            # Global React Context providers (ThemeContext)
│   ├── lib/                # Shared utilities & helper functions
│   ├── pages/              # Main page views (Home.tsx)
│   ├── sections/           # Modular landing page sections
│   │   ├── Approach/       # Methodologies & learning philosophy
│   │   ├── Challenges/     # Traditional vs Studytainment comparison
│   │   ├── DigitalExperience/ # Tech & smart tool showcases
│   │   ├── EcosystemSection/ # Four core ecosystem pillars
│   │   ├── Hero/           # 3D Hero scene & main CTAs
│   │   ├── OwnPace/        # Own Pace Academy age timeline
│   │   └── ...             # Community, Focus, LearningSolutions, CTA
│   ├── App.tsx             # Application root with router & context
│   ├── index.css           # Global CSS variables & Tailwind imports
│   └── main.tsx            # Application entry point
├── package.json            # Project dependencies & scripts
├── eslint.config.js        # ESLint flat configuration
└── vite.config.ts          # Vite build configuration
```

---

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: `v18.0.0` or higher
- **npm**: `v9.0.0` or higher

### Installation

1. **Clone the Repository**
   ```bash
   git clone https://github.com/hritikchauhanji/frontend-studytainment.git
   cd frontend-studytainment
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Development Server**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

---

## Available Scripts

In the project directory, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Launches the Vite development server with HMR. |
| `npm run build` | Compiles TypeScript and builds the production bundle in `dist/`. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs ESLint to check for code style & TypeScript errors. |
| `npm run lint:fix` | Automatically fixes auto-fixable ESLint errors. |
| `npm run prepare` | Sets up Husky pre-commit git hooks. |

---

## Code Quality & Pre-Commit Hooks

This project enforces strict code quality and formatting rules:
- **Husky & lint-staged**: Runs ESLint automatically on staged files before each commit.
- **TypeScript Strict Mode**: Ensures type safety across all components and constants.

---

## License

This project is licensed under the [MIT License](LICENSE).


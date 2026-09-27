import React from 'react';
import { useLenis } from '@/lib/useLenis';
import { Home } from '@/pages/Home';
import { ThemeProvider } from  '@/context/ThemeProvider';
import { AuthModalProvider } from '@/context/AuthModalProvider';
import { AuthModal } from '@/components/ui/AuthModal';

const AppContent: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      <Home />
      <AuthModal />
    </>
  );
};

function App() {

  return (
    <ThemeProvider>
      <AuthModalProvider>
        <AppContent />
      </AuthModalProvider>
    </ThemeProvider>
  )
}

export default App

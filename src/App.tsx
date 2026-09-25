import React from 'react';
import { useLenis } from '@/lib/useLenis';
import { Home } from '@/pages/Home';
import { ThemeProvider } from  '@/context/ThemeProvider';

const AppContent: React.FC = () => {
  // Initialize Lenis smooth scroll
  useLenis();

  return (
    <>
      <Home />
    </>
  );
};

function App() {

  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App

import React from 'react';
import { useLenis } from '@/lib/useLenis';
import { Home } from '@/pages/Home';

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
    <>
      <AppContent />
    </>
  )
}

export default App

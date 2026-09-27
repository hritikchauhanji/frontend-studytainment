import React, { useState } from 'react';
import {
  AuthModalContext,
  type ModalMode,
} from './AuthModalContext';

interface AuthModalProviderProps {
  children: React.ReactNode;
}

export const AuthModalProvider: React.FC<AuthModalProviderProps> = ({
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setModeState] = useState<ModalMode>('login');

  const openLoginModal = () => {
    setModeState('login');
    setIsOpen(true);
  };

  const openJoinModal = () => {
    setModeState('join');
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const setMode = (newMode: ModalMode) => {
    setModeState(newMode);
  };

  return (
    <AuthModalContext.Provider
      value={{
        isOpen,
        mode,
        openLoginModal,
        openJoinModal,
        closeModal,
        setMode,
      }}
    >
      {children}
    </AuthModalContext.Provider>
  );
};
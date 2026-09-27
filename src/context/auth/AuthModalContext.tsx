import { createContext } from 'react';

export type ModalMode = 'login' | 'join';

export interface AuthModalContextType {
  isOpen: boolean;
  mode: ModalMode;
  openLoginModal: () => void;
  openJoinModal: () => void;
  closeModal: () => void;
  setMode: (mode: ModalMode) => void;
}

export const AuthModalContext =
  createContext<AuthModalContextType | undefined>(undefined);
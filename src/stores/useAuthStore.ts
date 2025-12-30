import type { AuthState } from '@/types/auth';
import { create } from 'zustand';

export const useAuthStore = create<AuthState>((set, get) => ({
  token: null,
  setToken: (t) => {
    set({ token: t });
  },
  clear: () => {
    set({ token: null });
  },
  isAuthenticated: () => !!get().token,
}));

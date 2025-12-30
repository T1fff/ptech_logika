import type { AuthState } from '@/types/auth';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      token: null,
      setToken: (t) => set({ token: t }),
      clear: () => set({ token: null }),
      isAuthenticated: () => !!get().token,
    }),
    {
      name: 'auth-storage', // para el localStorage
    },
  ),
);
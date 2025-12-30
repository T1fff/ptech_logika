/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useEffect, useState } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import type { AuthContextType } from '@/types/auth';
import { useNavigate } from 'react-router';
import { loginRequest } from '@/services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);
const STORAGE_KEY = 'auth-token';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAuthStore((s) => s.token);
  const setToken = useAuthStore((s) => s.setToken);
  const clear = useAuthStore((s) => s.clear);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        setToken(stored);
      }
    } catch (err) {
      console.warn('[AuthProvider] error leyendo localStorage', err);
    }
  }, []);

  async function signin(email: string, password: string) {
    setLoading(true);
    try {
      const data = await loginRequest(email, password);
      const tokenReturned = data;
      if (!tokenReturned) throw new Error('No token returned from login');
      setToken(tokenReturned);
      localStorage.setItem(STORAGE_KEY, tokenReturned);
      navigate('/dashboard/home', { replace: true });
      return data;
    } finally {
      setLoading(false);
    }
  }

  async function signout() {
    setLoading(true);
    clear();
    localStorage.removeItem(STORAGE_KEY);
    navigate('/login', { replace: true });
    setLoading(false);
  }

  const ctx: AuthContextType = {
    token,
    signin,
    signout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

// Hook para consumir el contexto
export const useAuth = (): AuthContextType => {
  const ctx = React.useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

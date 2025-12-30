import { createContext, useCallback } from 'react';
import { useAuthStore } from '@/stores/useAuthStore';
import type { AuthContextType } from '@/types/auth';
import { useNavigate } from 'react-router';
import { loginRequest, logoutRequest } from '@/services/authService';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = useAuthStore((s) => s.token);
  const setToken = useAuthStore((s) => s.setToken);
  const clear = useAuthStore((s) => s.clear);
  const navigate = useNavigate(); 

  const signin = useCallback(
    async (email: string, password: string) => {
      const data = await loginRequest(email, password);
      setToken(data.token);
      navigate('/dashboard/home', { replace: true });
    },
    [setToken, navigate],
  );

  const signout = useCallback(async () => {
    await logoutRequest();
    clear();
    navigate('/login', { replace: true });
  }, [clear, navigate]);

  const ctx: AuthContextType = {
    token,
    signin,
    signout,
    isAuthenticated: !!token,
  };

  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

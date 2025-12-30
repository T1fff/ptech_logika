
import api from "@/api/axios";
import type { LoginResponse } from "@/types/auth";

export const loginRequest = async (email: string, password: string) => {
  const res = await api.post<LoginResponse>('/auth/login', { email, password });
  return res.data; // { token }
};

export const logoutRequest = async () => {
  return Promise.resolve();
};

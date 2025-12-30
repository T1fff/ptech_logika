
import api from "@/api/axios";

export const loginRequest = async (username: string, password: string) => {
  const res = await api.post<string>('/Authentication/Login', { username, password });
  return res.data; // { token }
};

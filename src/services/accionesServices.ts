/* eslint-disable @typescript-eslint/no-explicit-any */
import api2 from '@/api/axios2';
import { useAuthStore } from '@/stores/useAuthStore';
import type { AxiosResponse } from 'axios';
const STORAGE_KEY = 'auth-token';
export const getAcciones = async (page = 1, pageSize = 10): Promise<AxiosResponse<any>> => {
  const pageNumber = page; // usa page directamente (1-based)

  const token = localStorage.getItem(STORAGE_KEY);
  if (!token) {
    throw new Error('No auth token available');
  }

  const res = await api2.get('/v1/actions/admin-list', {
    params: { pageNumber, pageSize },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

/* eslint-disable @typescript-eslint/no-explicit-any */
import api2 from '@/api/axios2';
import type { AxiosResponse } from 'axios';
const STORAGE_KEY = 'auth-token';

export const getAcciones = async (page = 1, pageSize = 10): Promise<AxiosResponse<any>> => {
  const pageNumber = page; 

  const token = localStorage.getItem(STORAGE_KEY);

  const res = await api2.get('/v1/actions/admin-list', {
    params: { pageNumber, pageSize },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
};

export const createAccion = async (formData: FormData): Promise<AxiosResponse<any>> => {
  const token = localStorage.getItem(STORAGE_KEY);
  const res = await api2.post('/v1/actions/admin-add', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

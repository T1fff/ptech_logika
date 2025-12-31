import axios from 'axios';

const apiAcciones = axios.create({
  baseURL: import.meta.env.VITE_API_BASE2 || '',
  headers: { 'Content-Type': 'application/json' },
});

export default apiAcciones


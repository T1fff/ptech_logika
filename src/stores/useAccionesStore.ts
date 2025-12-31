import type { AccionesState } from '@/types/acciones';
import { create } from 'zustand';

export const useAccionesStore = create<AccionesState>((set, get) => ({
  items: [],
  loading: false,
  error: null,

  setItems: (items) =>
    set({
      items: Array.isArray(items) ? items : [],
      error: null,
    }),

  addItem: (item) =>
    set((state) => ({
      items: [item, ...state.items],
    })),

  updateItem: (id, patch) =>
    set((state) => ({
      items: state.items.map((it) => (it.id === id ? { ...it, ...patch } : it)),
    })),

  removeItem: (id) =>
    set((state) => ({
      items: state.items.filter((it) => it.id !== id),
    })),

  clear: () =>
    set({
      items: [],
      error: null,
      loading: false,
    }),
}));

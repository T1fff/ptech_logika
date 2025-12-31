export type Accion = {
  id: string;
  name: string;
  description?: string;
  icon?: string; // url
  color?: string;
  status?: number; // 0/1
  createdAt?: string;
};

export type Pagination = {
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
};

export type AccionesState = {
  items: Accion[];
  loading: boolean;
  error: string | null;

  // operaciones básicas
  setItems: (items: Accion[]) => void;
  addItem: (item: Accion) => void;
  updateItem: (id: string, patch: Partial<Accion>) => void;
  removeItem: (id: string) => void;
  clear: () => void;
};
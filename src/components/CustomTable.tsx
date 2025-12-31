/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/ActionsTable.tsx

import { useEffect, useState } from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
  Spinner,
  Image,
  Input,
} from '@heroui/react';
import { getAcciones } from '@/services/accionesServices';
import { useAccionesStore } from '@/stores/useAccionesStore';
import type { Accion } from '@/types/acciones';
import editIcon from '@assets/table/edit.svg';
import deleteIcon from '@assets/table/delete.svg';
import physical_therapy from '@assets/table/physical_therapy.svg';

const ROWS_PER_PAGE_OPTIONS = [5, 10, 20];

const formatDate = (iso?: string) => {
  if (!iso) return '-';
  try {
    const d = new Date(iso);
    return d.toLocaleDateString() + ' ' + d.toLocaleTimeString();
  } catch {
    return iso;
  }
};

const CustomTable = () => {
  const setItems = useAccionesStore((s) => s.setItems);
  const items = useAccionesStore((s) => s.items);
  const addItem = useAccionesStore((s) => s.addItem);
  const updateItem = useAccionesStore((s) => s.updateItem);
  const removeItem = useAccionesStore((s) => s.removeItem);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [page, setPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const [editing, setEditing] = useState<Accion | null>(null);
  const [creating, setCreating] = useState(false);

  const [formValues, setFormValues] = useState<Partial<Accion>>({});

  useEffect(() => {
    (async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await getAcciones(page, rowsPerPage);

        const data = res && (res as any).data ? (res as any).data : res;
        setItems(data.data);
        setTotalItems(data.totalElements);
        setTotalPages(data.totalPages);
      } catch (err: any) {
        console.error('getAcciones error', err);
        setError(err?.message ?? 'Error al cargar acciones');
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, rowsPerPage]);

  const handleDelete = (id: string) => {
    removeItem(id);
  };

  const openEdit = (item: Accion) => {
    setEditing(item);
    setFormValues({ ...item });
  };

  const closeEditor = () => {
    setEditing(null);
    setCreating(false);
    setFormValues({});
  };

  const handleSaveEdit = () => {
    if (!editing) return;
    updateItem(editing.id, {
      name: formValues.name ?? editing.name,
      description: formValues.description ?? editing.description,
      icon: formValues.icon ?? editing.icon,
      color: formValues.color ?? editing.color,
      status: formValues.status ?? editing.status,
    });
    closeEditor();
  };

  const handleCreate = () => {
    const newItem: Accion = {
      id: String(Date.now()),
      name: (formValues.name as string) ?? 'Nueva acción',
      description: (formValues.description as string) ?? '',
      icon: (formValues.icon as string) ?? '',
      color: formValues.color ?? '#dddddd',
      status: Number(formValues.status ?? 1),
      createdAt: new Date().toISOString(),
    };
    addItem(newItem);
    closeEditor();
  };

  const filteredItems = searchQuery
    ? items.filter((item) => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : items;

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">Acciones</h2>

        <div className="flex items-center gap-3">
          <button
            className="px-3 py-1 rounded bg-blue-900 text-white"
            onClick={() => {
              setCreating(true);
              setFormValues({
                name: '',
                description: '',
                status: 1,
              });
            }}
          >
            Crear acción
          </button>
        </div>
      </div>

      <div className="my-4">
        <Input
          placeholder="Filtrar por nombre"
          value={searchQuery}
          labelPlacement="outside"
          onChange={(e) => {
            setSearchQuery(e.target.value); // ← Actualizar el estado
          }}
          startContent={
            <Image
              src="https://cdn.iconscout.com/icon/free/png-256/search-1768073-1502246.png"
              className="w-4 h-4"
            />
          }
        />
      </div>

      {error && <div className="text-red-600 p-2">{error}</div>}

      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Spinner size="lg" label="Cargando acciones..." />
        </div>
      ) : (
        <>
          <div className="rounded overflow-hidden">
            <Table aria-label="Acciones table">
              <TableHeader>
                <TableColumn key="name">Nombre</TableColumn>
                <TableColumn key="category">Categoria</TableColumn>
                <TableColumn key="icon">Icono</TableColumn>
                <TableColumn key="description">Descripción</TableColumn>
                <TableColumn key="status">Estado</TableColumn>
                <TableColumn key="createdAt">Creado</TableColumn>
                <TableColumn key="actions">Acciones</TableColumn>
              </TableHeader>

              <TableBody items={filteredItems}>
                {(item: Accion) => (
                  <TableRow key={item.id} className="hover:bg-gray-50">
                    {(columnKey) => {
                      if (columnKey === 'icon') {
                        return (
                          <TableCell>
                            {item.icon ? (
                              item.icon.startsWith('http') ? (
                                <img
                                  src={item.icon}
                                  alt={item.name}
                                  className="w-8 h-8 rounded object-cover"
                                />
                              ) : (
                                <span className="text-xl">{item.icon}</span>
                              )
                            ) : (
                              <div className="w-8 h-8 bg-gray-100 rounded flex items-center justify-center">
                                —
                              </div>
                            )}
                          </TableCell>
                        );
                      }

                      if (columnKey === 'category') {
                        return (
                          <TableCell>
                            <div
                              className="inline-flex items-center justify-center px-3 py-1 rounded"
                              style={{ backgroundColor: item.color || '#888888' }}
                            >
                              <Image src={physical_therapy} className="w-4 h-4" />
                            </div>
                          </TableCell>
                        );
                      }

                      if (columnKey === 'status') {
                        const isActive = item.status === 1;
                        return (
                          <TableCell>
                            <span
                              className={`px-4 py-1 rounded text-sm  ${isActive ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-700'}`}
                            >
                              {isActive ? 'Activo' : 'Inactivo'}
                            </span>
                          </TableCell>
                        );
                      }

                      if (columnKey === 'createdAt') {
                        return <TableCell>{formatDate(item.createdAt)}</TableCell>;
                      }

                      if (columnKey === 'actions') {
                        return (
                          <TableCell>
                            <div className="flex gap-3">
                              <button
                                onClick={() => openEdit(item)}
                                className="text-sm text-blue-700 hover:underline hover:scale-150 transition delay-150 duration-300 "
                                type="button"
                              >
                                <Image src={editIcon} />
                              </button>
                              <button
                                onClick={() => handleDelete(item.id)}
                                className="text-sm text-red-600 hover:underline hover:scale-150 transition delay-150 duration-300 "
                                type="button"
                              >
                                <Image src={deleteIcon} />
                              </button>
                            </div>
                          </TableCell>
                        );
                      }

                      if (columnKey === 'name') return <TableCell>{item.name}</TableCell>;
                      if (columnKey === 'description')
                        return (
                          <TableCell className="max-w-[50px] truncate">
                            {item.description}
                          </TableCell>
                        );

                      return <TableCell>{(item as any)[columnKey]}</TableCell>;
                    }}
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>

          <div className="my-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <label className="text-sm text-gray-600">Resultados por página</label>
              <select
                value={rowsPerPage}
                onChange={(e) => {
                  setRowsPerPage(Number(e.target.value));
                  setPage(1); // Resetear a página 1 al cambiar el tamaño
                }}
                className="border px-2 py-1 rounded"
              >
                {ROWS_PER_PAGE_OPTIONS.map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
            </div>

            <Pagination
              isCompact
              showControls
              showShadow
              color="secondary"
              page={page}
              total={totalPages}
              onChange={(p) => setPage(p)}
            />

            <div className="text-sm text-gray-600">
              Mostrando {Math.min((page - 1) * rowsPerPage + 1, totalItems)}-
              {Math.min(page * rowsPerPage, totalItems)} de {totalItems}
            </div>
          </div>
        </>
      )}

      {(editing || creating) && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded shadow-lg w-[720px] max-w-full p-6">
            <h3 className="text-lg font-semibold mb-4">
              {creating ? 'Crear acción' : 'Editar acción'}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm block mb-1">Nombre</label>
                <input
                  value={formValues.name ?? ''}
                  onChange={(e) => setFormValues((s: any) => ({ ...s, name: e.target.value }))}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Icono (emoji o URL)</label>
                <input
                  value={formValues.icon ?? ''}
                  onChange={(e) => setFormValues((s: any) => ({ ...s, icon: e.target.value }))}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>

              <div className="col-span-2">
                <label className="text-sm block mb-1">Descripción</label>
                <textarea
                  value={formValues.description ?? ''}
                  onChange={(e) =>
                    setFormValues((s: any) => ({ ...s, description: e.target.value }))
                  }
                  className="w-full border px-3 py-2 rounded"
                  rows={3}
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Color (hex)</label>
                <input
                  value={formValues.color ?? ''}
                  onChange={(e) => setFormValues((s: any) => ({ ...s, color: e.target.value }))}
                  className="w-full border px-3 py-2 rounded"
                  placeholder="#ff5667"
                />
              </div>

              <div>
                <label className="text-sm block mb-1">Estado</label>
                <select
                  value={String(formValues.status ?? 1)}
                  onChange={(e) =>
                    setFormValues((s: any) => ({ ...s, status: Number(e.target.value) }))
                  }
                  className="w-full border px-3 py-2 rounded"
                >
                  <option value={1}>Activo</option>
                  <option value={0}>Inactivo</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button onClick={closeEditor} className="px-4 py-2 rounded border">
                Cancelar
              </button>

              {creating ? (
                <button onClick={handleCreate} className="px-4 py-2 rounded bg-blue-900 text-white">
                  Crear
                </button>
              ) : (
                <button
                  onClick={handleSaveEdit}
                  className="px-4 py-2 rounded bg-blue-900 text-white"
                >
                  Guardar
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomTable;

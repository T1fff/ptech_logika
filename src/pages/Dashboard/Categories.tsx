import DashContainer from '@/components/DashContainer';
import { categoriasAccionesMockData } from '@/constants/mockData';
import { Tag, TrendingUp } from 'lucide-react';
import { useState } from 'react';

const Categories = () => {
  const [expandedCategory, setExpandedCategory] = useState<number | null>(null);

  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Categorias</h1>
        <p className="mb-4 opacity-75">
          Estas son las categorias que manejamos actualmente. Siéntete libre de explorarlas y
          conocer más sobre cada una.
        </p>
        <div className="grid grid-cols-2 gap-4">
          {categoriasAccionesMockData?.map((category) => (
            <div
              key={category.id}
              className="bg-slate-200/50 backdrop-blur-sm border border-slate-300 rounded-xl overflow-hidden"
            >
              <div
                className="p-6 cursor-pointer hover:bg-slate-300/30 transition-all"
                onClick={() =>
                  setExpandedCategory(expandedCategory === category.id ? null : category.id)
                }
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4 flex-1">
                    <div
                      className="w-16 h-16 rounded-xl flex items-center justify-center text-3xl"
                      style={{
                        backgroundColor: `${category.color}20`,
                        border: `2px solid ${category.color}`,
                      }}
                    >
                      {category.name.charAt(0)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded">
                          {category.trend}
                        </span>
                      </div>
                      <p className="text-slate-400 text-sm mb-4">{category.description}</p>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-2xl font-bold" style={{ color: category.color }}>
                            {category.actionsCount}
                          </p>
                          <p className="text-xs text-slate-400">Acciones</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold" style={{ color: category.color }}>
                            {category.activeUsers.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-400">Usuarios Activos</p>
                        </div>
                        <div>
                          <p className="text-2xl font-bold" style={{ color: category.color }}>
                            {category.totalImpact.toLocaleString()}
                          </p>
                          <p className="text-xs text-slate-400">Impacto Total</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button className="text-slate-400 hover:text-white transition-colors">
                    {expandedCategory === category.id ? '▼' : '▶'}
                  </button>
                </div>
              </div>

              {/* Expanded Content */}
              {expandedCategory === category.id && (
                <div className="border-t border-slate-400 p-6 bg-slate-100/10">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Subcategories */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <Tag size={16} style={{ color: category.color }} />
                        Subcategorías
                      </h4>
                      <div className="space-y-2">
                        {category.subcategories.map((sub) => (
                          <div
                            key={sub.id}
                            className="flex items-center justify-between p-3 bg-white rounded-lg hover:bg-slate-300/50 transition-all"
                          >
                            <span className="text-sm">{sub.name}</span>
                            <span className="text-xs px-2 py-1 bg-gray-200 rounded">
                              {sub.count} acciones
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Top Actions */}
                    <div>
                      <h4 className="font-semibold mb-3 flex items-center gap-2">
                        <TrendingUp size={16} style={{ color: category.color }} />
                        Acciones Más Populares
                      </h4>
                      <div className="space-y-3">
                        {category.topActions.map((action, idx) => (
                          <div
                            key={idx}
                            className="p-3 bg-white rounded-lg hover:bg-slate-300/50 transition-all "
                          >
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm font-semibold">{action.name}</span>
                              <span className="text-xs text-slate-400">
                                {action.participants} pers.
                              </span>
                            </div>
                            <div className="w-full bg-slate-400 rounded-full h-2">
                              <div
                                className="h-2 rounded-full transition-all"
                                style={{
                                  width: `${(action.participants / category.activeUsers) * 100}%`,
                                  backgroundColor: category.color,
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </DashContainer>
  );
};

export default Categories;

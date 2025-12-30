import DashContainer from '@/components/DashContainer';
import { useState } from 'react';
import { marketplaceMockData } from '@/constants/mockData';
import { Filter, Star } from 'lucide-react';

const Marketplace = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredProducts =
    selectedCategory === 'all'
      ? marketplaceMockData?.featured
      : marketplaceMockData?.featured.filter((p) => p.category === selectedCategory);
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Marketplace</h1>
        <p className="mb-4 opacity-75">
          Apoya nuestras iniciativas adquiriendo los productos fabricados por nuestros
          beneficiarios.
        </p>

        {/* Categories Filter */}
        <div className="backdrop-blur-sm border border-slate-100 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter size={18} className="text-slate-400" />
            <h3 className="font-semibold">Categorías</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-blue-500 text-white'
                  : 'bg-slate-400/50 hover:bg-slate-400'
              }`}
            >
              Todos (6)
            </button>
            {marketplaceMockData?.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.name)}
                className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                  selectedCategory === cat.name
                    ? 'bg-blue-400 text-white'
                    : 'bg-slate-300/50 hover:bg-slate-300'
                }`}
              >
                {cat.name} ({cat.count})
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts?.map((product) => (
            <div
              key={product?.id}
              className="bg-slate-100/50 backdrop-blur-sm border border-slate-300 rounded-xl overflow-hidden hover:border-slate-600 transition-all group"
            >
              <div className="relative h-14 bg-blue-950 flex items-center justify-center">
                {product?.discount > 0 && (
                  <div className="absolute top-3 right-3 bg-red-500/55 text-white px-3 py-1 rounded-full text-sm font-bold">
                    -{product?.discount}%
                  </div>
                )}
                
                <div className="absolute top-3 left-3 bg-blue-500/40 text-white px-2 py-1 rounded text-xs">
                  {product?.badge}
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-bold text-lg mb-1 line-clamp-1">{product?.name}</h3>
                <p className="text-sm text-slate-400 mb-3">{product?.vendor}</p>

                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{product?.rating}</span>
                  </div>
                  <span className="text-slate-400 text-sm">({product?.reviews} reseñas)</span>
                </div>

                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 mb-4">
                  <p className="text-xs text-green-800">{product?.impact}</p>
                </div>

                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-bold text-green-600">
                      ${product?.price.toLocaleString()}
                    </div>
                    {product?.originalPrice && (
                      <div className="text-sm text-slate-500 line-through">
                        ${product?.originalPrice.toLocaleString()}
                      </div>
                    )}
                  </div>
                  <button
                    disabled={!product?.inStock}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                      product?.inStock
                        ? 'bg-blue-500 hover:bg-blue-600 text-white'
                        : 'bg-slate-700 text-slate-500 cursor-not-allowed'
                    }`}
                  >
                    {product?.inStock ? 'Comprar' : 'Agotado'}
                  </button>
                </div>

                <div className="mt-3 pt-3 border-t border-slate-700 text-xs text-slate-400">
                  {product?.sold} vendidos
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashContainer>
  );
};

export default Marketplace;

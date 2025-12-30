import DashContainer from '@/components/DashContainer';
import { contenidosMockData } from '@/constants/mockData';
import { Clock, Eye, Heart, MessageCircle } from 'lucide-react';

const Contents = () => {
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Contenidos</h1>
        <p className="mb-4 opacity-75">
          Explora nuevos contenidos educativos dise;ados para mejorar tu proyecto.
        </p>
        <div className="grid grid-cols-4 gap-6">
          {contenidosMockData.map((article) => (
            <div
              key={article.id}
              className="bg-slate-200/50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden hover:border-slate-600 transition-all group"
            >
              

              <div className="p-5">
                <span className="text-xs px-2 py-1 bg-slate-600/20 rounded text-slate-500 mb-3 inline-block">
                  {article.category}
                </span>

                <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-slate-500 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-500 mb-4 line-clamp-2">{article.excerpt}</p>

                <div className="flex items-center gap-3 mb-4 pb-4 border-b border-slate-700">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-gray-500 flex items-center justify-center text-sm">
                    {article.author.name.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-xs truncate">{article.author.name}</p>
                    <p className="text-xs text-slate-500 truncate">{article.author.role}</p>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Eye size={12} />
                      {article.views}
                    </span>
                    <span className="flex items-center gap-1">
                      <Heart size={12} />
                      {article.likes}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle size={12} />
                      {article.comments}
                    </span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Clock size={12} />
                    {article.readTime} min
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashContainer>
  );
};

export default Contents;

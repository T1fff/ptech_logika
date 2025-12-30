import DashContainer from '@/components/DashContainer';
import { sponsorsMockData } from '@/constants/mockData';
import { Calendar, ExternalLink } from 'lucide-react';

const Sponsors = () => {
  const getTierColor = (tier: string) => {
    switch (tier) {
      case 'Platino':
        return 'from-slate-300 to-slate-400';
      case 'Oro':
        return 'from-yellow-300 to-yellow-500';
      case 'Plata':
        return 'from-gray-300 to-gray-400';
      case 'Bronce':
        return 'from-orange-400 to-orange-600';
      default:
        return 'from-blue-400 to-blue-600';
    }
  };

  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Sponsors</h1>
        <p className="mb-4 opacity-75">
          Espacio dedicado a destacar a nuestros patrocinadores y colaboradores que hacen posible
          nuestras iniciativas.
        </p>
        <div className="grid grid-cols-3 gap-4">
          {sponsorsMockData.map((sponsor) => (
            <div
              key={sponsor.id}
              className="bg-slate-100/50 backdrop-blur-sm border border-slate-200 rounded-xl overflow-hidden hover:border-slate-600 transition-all group"
            >
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{sponsor.name}</h3>
                    <span
                      className={`text-xs px-2 py-1 bg-blue-500/20 text-blue-900 rounded-full bg-gradient-to-br ${getTierColor(sponsor.tier)}`}
                    >
                      {sponsor.tier}
                    </span>
                  </div>
                </div>

                <p className="text-slate-500 text-sm mb-4 line-clamp-2">{sponsor.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Contribución:</span>
                    <span className="font-semibold text-green-400">
                      ${sponsor.contribution.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Beneficiarios:</span>
                    <span className="font-semibold">{sponsor.beneficiaries.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-500">Proyectos:</span>
                    <span className="font-semibold">{sponsor.projects}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-slate-700">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Calendar size={14} />
                    Desde {sponsor.since}
                  </div>
                  <a
                    href="#"
                    className="text-blue-400 hover:text-blue-300 transition-colors flex items-center gap-1 text-sm"
                  >
                    <ExternalLink size={14} />
                    Visitar
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </DashContainer>
  );
};

export default Sponsors;

import DashContainer from '@/components/DashContainer';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { impactoMockData } from '@/constants/mockData';

const SocialImpact = () => {
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Impacto Social</h1>
        <p className="mb-4 opacity-75">
          Aquí podrás consultar cuál ha sido el impacto en los distintos frentes.
        </p>
        <div className="space-y-6">
          {/* Impact by Category */}
          <div className="backdrop-blur-sm border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Impacto por Categoría</h3>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={impactoMockData.impactByCategory}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="category" stroke="#717C8E" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip
                  contentStyle={{
                    border: '1px solid #475569',
                    borderRadius: '8px',
                    fontSize: '14px',
                  }}
                />
                <Legend />
                <Bar dataKey="beneficiarios" fill="#07409C" />
                <Bar dataKey="voluntarios" fill="#096C4B" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Regional Distribution */}
          <div className="backdrop-blur-sm border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4">Distribución Regional</h3>
            <div className="space-y-4">
              {impactoMockData.regionalDistribution.map((region, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{region.region}</span>
                    <span className="text-slate-400">
                      {region.value.toLocaleString()} personas ({region.percentage}%)
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 h-3 rounded-full transition-all"
                      style={{ width: `${region.percentage}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DashContainer>
  );
};

export default SocialImpact;

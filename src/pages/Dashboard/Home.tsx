import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { TrendingUp, Users, Heart, Award, Calendar, Target, Activity } from 'lucide-react';

import DashContainer from '@/components/DashContainer';
import { homeMockData } from '@/constants/mockData';

export const Home = () => {
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Welcome Back!</h1>
        <p className='mb-4 opacity-75'>Aquí podrás consultar una visión general del proyecto.</p>
        <div className="space-y-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 animate-[pulse_1s_ease-in-out]">
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Target size={24} className="text-blue-400" />
                <span className="text-blue-700 text-sm">+12%</span>
              </div>
              <h3 className="text-3xl font-bold">
                {homeMockData.stats.totalActions.toLocaleString()}
              </h3>
              <p className="text-slate-600 text-sm mt-1">Acciones Totales</p>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 backdrop-blur-sm border border-green-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Users size={24} className="text-green-700" />
                <span className="text-green-700 text-sm">+24%</span>
              </div>
              <h3 className="text-3xl font-bold">
                {homeMockData.stats.activeUsers.toLocaleString()}
              </h3>
              <p className="text-slate-600 text-sm mt-1">Usuarios Activos</p>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 backdrop-blur-sm border border-purple-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Heart size={24} className="text-purple-400" />
                <span className="text-purple-700 text-sm">+31%</span>
              </div>
              <h3 className="text-3xl font-bold">
                {homeMockData.stats.socialImpact.toLocaleString()}
              </h3>
              <p className="text-slate-600 text-sm mt-1">Personas Impactadas</p>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/20 backdrop-blur-sm border border-orange-500/30 rounded-xl p-6">
              <div className="flex items-center justify-between mb-2">
                <Award size={24} className="text-orange-400" />
                <span className="text-orange-700 text-sm">+8%</span>
              </div>
              <h3 className="text-3xl font-bold">{homeMockData.stats.activeBakanas}</h3>
              <p className="text-slate-600 text-sm mt-1">Bakanas Activas</p>
            </div>
          </div>

          {/* Charts Row */}
          <div className="grid grid-cols-2 gap-6">
            {/* Growth Chart */}
            <div className="backdrop-blur-md border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <TrendingUp size={20} className="text-blue-400" />
                Crecimiento Mensual
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={homeMockData.monthlyGrowth}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="month" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip
                    contentStyle={{
                      border: '1px solid #475569',
                      borderRadius: '8px',
                      fontSize: '14px',
                    }}
                  />
                  <Legend />
                  <Line type="monotone" dataKey="usuarios" stroke="#07409C" strokeWidth={2} />
                  <Line type="monotone" dataKey="acciones" stroke="#096C4B" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Categories Pie Chart */}
            <div className="backdrop-blur-sm border border-slate-200 rounded-xl p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Activity size={20} className="text-purple-400" />
                Top Categorías
              </h3>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={homeMockData.topCategories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent = 0 }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {homeMockData.topCategories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      border: '1px solid #475569',
                      borderRadius: '8px',
                      fontSize: '14px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Recent Activity */}
          <div className=" backdrop-blur-sm border border-slate-200 rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <Calendar size={20} className="text-green-700" />
              Actividad Reciente
            </h3>
            <div className="space-y-3">
              {homeMockData.recentActivity.map((activity) => (
                <div
                  key={activity.id}
                  className="flex items-center justify-between p-4 bg-slate-100/50 rounded-lg hover:bg-slate-300/50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                      {activity.user.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold">{activity.user}</p>
                      <p className="text-sm text-slate-600">{activity.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-600">{activity.time}</p>
                    <p className="text-sm text-green-700">+{activity.impact} pts</p>
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

export default Home;

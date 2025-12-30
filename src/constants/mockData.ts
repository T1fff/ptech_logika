// types.ts
export interface StatCard {
  totalActions: number;
  activeUsers: number;
  socialImpact: number;
  activeBakanas: number;
}

export interface RecentActivity {
  id: number;
  user: string;
  action: string;
  time: string;
  impact: number;
}

export interface MonthlyGrowth {
  month: string;
  usuarios: number;
  acciones: number;
  impacto: number;
}

export interface TopCategory {
  name: string;
  value: number;
  color: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export interface HomeMockData {
  stats: StatCard;
  recentActivity: RecentActivity[];
  monthlyGrowth: MonthlyGrowth[];
  topCategories: TopCategory[];
}

export interface ImpactOverview {
  totalBeneficiaries: number;
  volunteersHours: number;
  resourcesDonated: number;
  communitiesImpacted: number;
}

export interface ImpactByCategory {
  category: string;
  beneficiarios: number;
  recursos: number;
  voluntarios: number;
}

export interface TimelineImpact {
  mes: string;
  beneficiarios: number;
  voluntarios: number;
}

export interface RegionalDistribution {
  region: string;
  percentage: number;
  value: number;
}

export interface Testimonial {
  id: number;
  name: string;
  community: string;
  text: string;
}

export interface ImpactoMockData {
  overview: ImpactOverview;
  impactByCategory: ImpactByCategory[];
  timelineImpact: TimelineImpact[];
  regionalDistribution: RegionalDistribution[];
  testimonials: Testimonial[];
}

// mockData.ts
export const homeMockData: HomeMockData = {
  stats: {
    totalActions: 1247,
    activeUsers: 8934,
    socialImpact: 15678,
    activeBakanas: 43,
  },
  recentActivity: [
    {
      id: 1,
      user: 'María González',
      action: 'Donación de alimentos',
      time: 'Hace 5 min',
      impact: 50,
    },
    { id: 2, user: 'Carlos Ruiz', action: 'Limpieza de playas', time: 'Hace 12 min', impact: 120 },
    { id: 3, user: 'Ana Martínez', action: 'Clases gratuitas', time: 'Hace 1 hora', impact: 85 },
    { id: 4, user: 'Luis Torres', action: 'Reforestación', time: 'Hace 2 horas', impact: 200 },
  ],
  monthlyGrowth: [
    { month: 'Ene', usuarios: 2400, acciones: 1200, impacto: 3200 },
    { month: 'Feb', usuarios: 3200, acciones: 1800, impacto: 4100 },
    { month: 'Mar', usuarios: 4100, acciones: 2400, impacto: 5600 },
    { month: 'Abr', usuarios: 5200, acciones: 3100, impacto: 7200 },
    { month: 'May', usuarios: 6800, acciones: 4200, impacto: 9800 },
    { month: 'Jun', usuarios: 8934, acciones: 5847, impacto: 15678 },
  ],
  topCategories: [
    { name: 'Educación', value: 320, color: '#07409C' },
    { name: 'Medio Ambiente', value: 280, color: '#096C4B' },
    { name: 'Alimentación', value: 240, color: '#F59E0B' },
    { name: 'Salud', value: 180, color: '#EF4444' },
    { name: 'Otros', value: 120, color: '#8B5CF6' },
  ],
};

export const impactoMockData: ImpactoMockData = {
  overview: {
    totalBeneficiaries: 45230,
    volunteersHours: 12456,
    resourcesDonated: 234567,
    communitiesImpacted: 127,
  },
  impactByCategory: [
    { category: 'Educación', beneficiarios: 12500, recursos: 45000, voluntarios: 320 },
    { category: 'Medio Ambiente', beneficiarios: 8900, recursos: 67000, voluntarios: 450 },
    { category: 'Alimentación', beneficiarios: 15600, recursos: 89000, voluntarios: 280 },
    { category: 'Salud', beneficiarios: 5430, recursos: 23000, voluntarios: 190 },
    { category: 'Vivienda', beneficiarios: 2800, recursos: 10567, voluntarios: 95 },
  ],
  timelineImpact: [
    { mes: 'Ene', beneficiarios: 5200, voluntarios: 850 },
    { mes: 'Feb', beneficiarios: 6800, voluntarios: 1100 },
    { mes: 'Mar', beneficiarios: 8400, voluntarios: 1450 },
    { mes: 'Abr', beneficiarios: 11200, voluntarios: 1890 },
    { mes: 'May', beneficiarios: 15600, voluntarios: 2340 },
    { mes: 'Jun', beneficiarios: 18900, voluntarios: 2780 },
    { mes: 'Jul', beneficiarios: 22300, voluntarios: 3210 },
    { mes: 'Ago', beneficiarios: 28700, voluntarios: 3890 },
    { mes: 'Sep', beneficiarios: 34200, voluntarios: 4560 },
    { mes: 'Oct', beneficiarios: 38900, voluntarios: 5120 },
    { mes: 'Nov', beneficiarios: 42100, voluntarios: 5680 },
    { mes: 'Dic', beneficiarios: 45230, voluntarios: 6200 },
  ],
  regionalDistribution: [
    { region: 'Costa Atlántica', percentage: 35, value: 15830 },
    { region: 'Región Andina', percentage: 28, value: 12664 },
    { region: 'Región Pacífica', percentage: 18, value: 8141 },
    { region: 'Amazonía', percentage: 12, value: 5428 },
    { region: 'Orinoquía', percentage: 7, value: 3167 },
  ],
  testimonials: [
    {
      id: 1,
      name: 'Sofía Ramírez',
      community: 'Cartagena',
      text: 'Gracias a las iniciativas de educación, 50 niños ahora tienen acceso a clases de refuerzo',
    },
    {
      id: 2,
      name: 'Roberto Díaz',
      community: 'Barranquilla',
      text: 'La campaña de reforestación ha plantado más de 5,000 árboles en nuestra comunidad',
    },
  ],
};

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
  impactByCategory: ImpactByCategory[];
  regionalDistribution: RegionalDistribution[];
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
  impactByCategory: [
    { category: 'Educación', beneficiarios: 12500, recursos: 45000, voluntarios: 320 },
    { category: 'Medio Ambiente', beneficiarios: 8900, recursos: 67000, voluntarios: 450 },
    { category: 'Alimentación', beneficiarios: 15600, recursos: 89000, voluntarios: 280 },
    { category: 'Salud', beneficiarios: 5430, recursos: 23000, voluntarios: 190 },
    { category: 'Vivienda', beneficiarios: 2800, recursos: 10567, voluntarios: 95 },
  ],

  regionalDistribution: [
    { region: 'Costa Atlántica', percentage: 35, value: 15830 },
    { region: 'Región Andina', percentage: 28, value: 12664 },
    { region: 'Región Pacífica', percentage: 18, value: 8141 },
    { region: 'Amazonía', percentage: 12, value: 5428 },
    { region: 'Orinoquía', percentage: 7, value: 3167 },
  ],
};

export const testimonialsMockData: Testimonial[] = [
  {
    id: 1,
    name: 'Sofía Ramírez',
    community: 'Fundación Manos Amigas',
    text: 'Gracias a las Bakanas, hemos podido llegar a más comunidades y hacer una diferencia real en sus vidas.',
  },
  {
    id: 2,
    name: 'Javier López',
    community: 'EcoVida',
    text: 'La plataforma nos ha facilitado la organización de nuestras actividades y la movilización de voluntarios.',
  },
  {
    id: 3,
    name: 'Camila Fernández',
    community: 'Alimentos para Todos',
    text: 'Hemos incrementado nuestras donaciones y el impacto social gracias al apoyo de las Bakanas.',
  },
  {
    id: 4,
    name: 'Diego Martínez',
    community: 'Salud y Vida',
    text: 'La visibilidad que hemos ganado nos ha permitido colaborar con más aliados y expandir nuestro alcance.',
  },
  {
    id: 5,
    name: 'Valentina Gómez',
    community: 'Jardines Comunitarios',
    text: 'Ser parte de esta iniciativa nos ha dado las herramientas para crear un cambio sostenible en nuestra comunidad.',
  },
];

export interface Sponsor {
  id: number;
  name: string;
  logo: string;
  tier: 'Platino' | 'Oro' | 'Plata' | 'Bronce';
  category: string;
  since: string;
  contribution: number;
  beneficiaries: number;
  projects: number;
  description: string;
  website: string;
  color: string;
}

export const sponsorsMockData: Sponsor[] = [
  {
    id: 1,
    name: 'Fundación Banco de Alimentos',
    logo: '🏛️',
    tier: 'Platino',
    category: 'Alimentación',
    since: '2023',
    contribution: 150000,
    beneficiaries: 12500,
    projects: 24,
    description:
      'Principal aliado en la lucha contra el hambre, distribuyendo alimentos a comunidades vulnerables',
    website: 'www.bancodealimentos.org',
    color: '#E5E7EB',
  },
  {
    id: 2,
    name: 'EcoVerde Colombia',
    logo: '🌿',
    tier: 'Oro',
    category: 'Medio Ambiente',
    since: '2024',
    contribution: 85000,
    beneficiaries: 8900,
    projects: 15,
    description: 'Comprometidos con la reforestación y conservación de ecosistemas naturales',
    website: 'www.ecoverde.co',
    color: '#FDE047',
  },
  {
    id: 3,
    name: 'TechEducate',
    logo: '💻',
    tier: 'Oro',
    category: 'Educación',
    since: '2023',
    contribution: 72000,
    beneficiaries: 6700,
    projects: 18,
    description: 'Brindando acceso a educación tecnológica para jóvenes de bajos recursos',
    website: 'www.techeducate.org',
    color: '#FDE047',
  },
];

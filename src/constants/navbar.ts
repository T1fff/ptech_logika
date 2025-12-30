import home from '@assets/navbar/home.svg';
import insights from '@assets/navbar/insights.svg';
import community from '@assets/navbar/community.svg';
import money from '@assets/navbar/moneylogo.svg';
import storefront from '@assets/navbar/storefront.svg';
import contentCopy from '@assets/navbar/content_copy.svg';
import category from '@assets/navbar/category.svg';
import bakanes from '@assets/navbar/workspace_premium.svg';

export const OPTIONSMENU: MenuItem[] = [
  {
    id: 0,
    label: 'Home',
    icon: home,
    route: '/dashboard/home',
  },
  {
    id: 1,
    label: 'Impacto Social',
    icon: insights,
    route: '/dashboard/impacto-social',
  },
  {
    id: 2,
    label: 'Comunidad',
    icon: community,
    route: '/dashboard/comunidad',
  },
  {
    id: 3,
    label: 'Sponsors',
    icon: money,
    route: '/dashboard/sponsors',
  },
  {
    id: 4,
    label: 'Bakanes',
    icon: bakanes,
    route: '/dashboard/bakanes',
  },
  {
    id: 5,
    label: 'Marketplace',
    icon: storefront,
    route: '/dashboard/marketplace',
  },
  {
    id: 6,
    label: 'Contenidos',
    icon: contentCopy,
    route: '/dashboard/contenidos',
  },
  {
    id: 7,
    label: 'Categorías de acciones',
    icon: category,
    route: '/dashboard/categorias',
  },
];

export type MenuItem = {
  id: number; // clave inmutable/para tests
  label: string; // si usas i18n, aquí puede ser a11yKey en vez del texto
  icon: string; // path importado o nombre de icono
  route?: string;
};

export default OPTIONSMENU;

import { Navigate, Outlet, Route, Routes } from 'react-router';
import Login from '@pages/Login/Login';
import Home from './pages/Dashboard/Home';
import SocialImpact from './pages/Dashboard/SocialImpact';
import Community from './pages/Dashboard/Community';
import Sponsors from './pages/Dashboard/Sponsors';
import Categories from './pages/Dashboard/Categories';
import Contents from './pages/Dashboard/Contents';
import Marketplace from './pages/Dashboard/Marketplace';
import { useAuth } from '@/hooks/useAuth';

import type { ReactNode } from 'react';
import Bakanes from './pages/Dashboard/Bakanes';

type Props = {
  children: ReactNode;
};
const STORAGE_KEY = 'auth-token';

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  // lectura sincrónica del token en localStorage para evitar redirección prematura
  const tokenFromStorage = typeof window !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;

  // autenticado si el contexto dice true OR si hay token en localStorage
  const isAuth = Boolean(isAuthenticated || tokenFromStorage);

  return isAuth ? <>{children}</> : <Navigate to="/login" replace />;
};


function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <Outlet />
          </PrivateRoute>
        }
      >
        <Route index element={<Navigate to="home" replace />} />

        <Route path="home" element={<Home />} />
        <Route path="impacto-social" element={<SocialImpact />} />
        <Route path="community" element={<Community />} />
        <Route path="sponsors" element={<Sponsors />} />
        <Route path='bakanes' element={<Bakanes />} />
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="contents" element={<Contents />} />
        <Route path="categories" element={<Categories />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;

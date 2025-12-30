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

type Props = {
  children: ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" replace />;
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
        <Route path="marketplace" element={<Marketplace />} />
        <Route path="contents" element={<Contents />} />
        <Route path="categories" element={<Categories />} />
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AppRoutes;

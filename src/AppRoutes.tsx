import { Navigate, Route, Routes } from 'react-router';
import Login from '@pages/Login/Login';
import Home from './pages/Dashboard/Home';
import SocialImpact from './pages/Dashboard/SocialImpact';
import Community from './pages/Dashboard/Community';
import Sponsors from './pages/Dashboard/Sponsors';
import Categories from './pages/Dashboard/Categories';
import Contents from './pages/Dashboard/Contents';
import Marketplace from './pages/Dashboard/Marketplace';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/impacto-social" element={<SocialImpact />} />
      <Route path="/dashboard/community" element={<Community />} />
      <Route path="/dashboard/sponsors" element={<Sponsors />} />
      <Route path="/dashboard/marketplace" element={<Marketplace />} />
      <Route path="/dashboard/contents" element={<Contents />} />
      <Route path="/dashboard/categories" element={<Categories />} />

      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;

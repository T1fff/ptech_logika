import { Navigate, Route, Routes } from 'react-router';
import Login from '@pages/Login/Login';
import Home from './pages/Dashboard/Home';
import SocialImpact from './pages/Dashboard/SocialImpact';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard/home" element={<Home />} />
      <Route path="/dashboard/impacto-social" element={<SocialImpact />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;

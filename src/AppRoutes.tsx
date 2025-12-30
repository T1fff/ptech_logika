import { Navigate, Route, Routes } from 'react-router';
import Login from '@pages/Login/Login';
import Dashboard from '@/pages/Dashboard/Dashboard';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<div>404 Not Found</div>} />
    </Routes>
  );
}

export default AppRoutes;

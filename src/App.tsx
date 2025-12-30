import AppRoutes from './AppRoutes';
import { AuthProvider } from '@/hooks/useAuth';


function App() {
  return (
    <>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </>
  );
}

export default App;

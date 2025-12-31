import CustomTable from './CustomTable';
import DashContainer from '@/components/DashContainer';

const Bakanes = () => {
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Tabla de Acciones</h1>
        <p className="mb-4 opacity-75">Aquí podrás manejar tus acciones bakanas.</p>
        <CustomTable />
      </div>
    </DashContainer>
  );
};

export default Bakanes;

import Navbar from '@/components/Navbar';
import { Image } from '@heroui/react';
import logoBlanco from '@assets/navbar/Blanco.svg';

export const Dashboard = () => {
  return (
    <>
      <div className="mainContainer w-screen h-screen grid grid-rows-18">
        <div className="row-span-1 bg-blue-950 p-4 px-6">
          <Image src={logoBlanco} className="h-[25px]"></Image>
        </div>
        <Navbar />
      </div>
    </>
  );
};
export default Dashboard;

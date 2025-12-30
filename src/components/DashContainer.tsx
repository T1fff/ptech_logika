import Navbar from '@/components/Navbar';
import { Image } from '@heroui/react';
import logoBlanco from '@assets/navbar/Blanco.svg';
import type { ReactNode } from 'react';

export const DashContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div className="w-screen min-h-screen grid" style={{ gridTemplateRows: '64px 1fr' }}>
        <div className="bg-blue-950 px-8 flex items-center">
          <Image src={logoBlanco} className="h-[35px]" alt="logo" />
        </div>

        <div className="flex">
          <Navbar />
          <div className="">{children}</div>
        </div>
      </div>
    </>
  );
};
export default DashContainer;

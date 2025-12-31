import Navbar from '@/components/Navbar';
import { Image } from '@heroui/react';
import logoBlanco from '@assets/navbar/blanco.svg';
import type { ReactNode } from 'react';

export const DashContainer = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <div
        className="w-screen min-h-screen max-h-screen overflow-hidden grid"
        style={{ gridTemplateRows: '64px 1fr' }}
      >
        <div className="bg-blue-950 px-8 flex items-center">
          <Image src={logoBlanco} className="h-[35px]" alt="logo" />
        </div>

        <div className="flex h-full min-h-0">
        <aside className="w-[230px] h-full">
          <Navbar />
        </aside>

        <main className="flex-1 min-h-0 overflow-y-auto">
          {children}
        </main>
      </div>
      </div>
    </>
  );
};
export default DashContainer;

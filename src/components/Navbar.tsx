import { useState } from 'react';
import { Image } from '@heroui/react';
import logoNavbar from '@assets/navbar/navBarLogo.svg';
import logout from '@assets/navbar/logout.svg';

import OPTIONSMENU from '@/constants/navbar';
import { useNavigate } from 'react-router';

const Navbar = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const navigate = useNavigate();

  const handleOnClick = (index: number, path: string) => {
    setSelectedIndex(index);
    navigate(path);
  };
  return (
    <>
      <div className="flex flex-col justify-between w-[230px] h-full">
        <div className="">
          <Image src={logoNavbar} className="w-full rounded-none" />
          <div className="flex flex-col">
            {OPTIONSMENU.map((op) => {
              const isSelected = op.id === selectedIndex;
              return (
                <div
                  key={op.label}
                  role="button"
                  tabIndex={0}
                  aria-current={isSelected ? 'page' : undefined}
                  onClick={() => handleOnClick(op.id, op.route || '/')}
                  className={
                    'p-4 flex items-center w-full gap-2 hover:bg-blue-100/75 transition delay-100 duration-200 ease-in-out ' +
                    (isSelected ? 'bg-blue-100 font-semibold' : 'font-normal')
                  }
                >
                  <Image src={op.icon} className="w-[19px] rounded-none" />
                  <p className="text-base">{op.label}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="p-6 flex mb-5 items-center justify-center w-full gap-2">
          <Image src={logout} className="h-[20px]" alt="logo" />
          <p>Cerrar sesión</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;

import { Button, Card, CardBody, Image } from '@heroui/react';
import logoPrincipal from '@assets/mainLogo.svg';
import emailIcon from '@assets/login/emailIcon.svg';
import lockIcon from '@assets/login/lockIcon.svg';
import eyeOffIcon from '@assets/login/eyeOff.svg';
import eyeOnIcon from '@assets/login/eyeOn.svg';

import { useState } from 'react';
import { useNavigate } from 'react-router';
import CustomInput from '@/components/customInput';

const Login = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="w-screen h-screen grid place-content-center bg-[url(@assets/mainbg.svg)]">
        <Card>
          <CardBody className="grid p-6 justify-items-center text-center max-w-lg">
            <Image src={logoPrincipal} className="m-5 w-[217px] "></Image>
            <p className="text-xl m-4">¡Empieza a conectar tu comunidad ante buenas acciones!</p>
            <div className="form w-100">
              <CustomInput
                customLabel="Correo Electrónico"
                customPlaceholder="Ingresar correo"
                customStart={<Image src={emailIcon} className="text-3xl shrink-0"></Image>}
                customType="email"
                isRequired
              />
              <CustomInput
                customLabel="Contraseña"
                customPlaceholder="Ingresa tu contraseña"
                customStart={<Image src={lockIcon} className="text-3xl shrink-0"></Image>}
                customFinish={
                  <button onClick={() => setShow(!show)}>
                    {show ? (
                      <Image src={eyeOffIcon} className="text-2xl shrink-0"></Image>
                    ) : (
                      <Image src={eyeOnIcon} className="text-2xl shrink-0"></Image>
                    )}
                  </button>
                }
                customType={show ? 'text' : 'password'}
                isRequired
              />
              <p
                onClick={() => console.log('Abrir modal!')}
                className="text-blue-900 text-base font-medium underline my-4"
              >
                Recuperar Contraseña
              </p>
            </div>

            <Button
              onClick={() => navigate('/dashboard')}
              className="w-60 mt-8 mb-5 bg-blue-950 text-blue-100 rounded-sm"
            >
              Ingresar
            </Button>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Login;

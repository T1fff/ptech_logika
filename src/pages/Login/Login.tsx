import { Button, Card, CardBody, Image, Form, Spinner } from '@heroui/react';
import logoPrincipal from '@assets/mainLogo.svg';
import emailIcon from '@assets/login/emailIcon.svg';
import lockIcon from '@assets/login/lockIcon.svg';
import eyeOffIcon from '@assets/login/eyeOff.svg';
import eyeOnIcon from '@assets/login/eyeOn.svg';

import { useState } from 'react';
import CustomInput from '@/components/CustomInput';
import { useForm } from 'react-hook-form';
import type { FormValues } from '@/types/auth';
import { useAuth } from '@/hooks/useAuth';

const Login = () => {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signin } = useAuth();
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: { username: '', password: '' },
  });

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    try {
      await signin(data.username, data.password);
    } catch (err: any) {
      const msg = err?.response?.data?.message ?? err?.message ?? 'Error al iniciar sesión';
      alert(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-screen h-screen grid place-content-center bg-[url(@assets/mainbg.svg)]">
        <Card>
          <CardBody className="grid p-6 justify-items-center text-center max-w-lg">
            <Image src={logoPrincipal} className="m-5 w-[217px] "></Image>
            <p className="text-xl m-4">¡Empieza a conectar tu comunidad ante buenas acciones!</p>
            <Form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col items-center">
              <CustomInput
                customLabel="Correo Electrónico"
                customPlaceholder="Ingresar correo"
                customStart={<Image src={emailIcon} className="text-3xl shrink-0"></Image>}
                customType="email"
                isRequired
                control={control}
                name="username"
                rules={{
                  required: 'El correo es obligatorio',
                  pattern: { value: /^\S+@\S+\.\S+$/, message: 'Formato de correo inválido' },
                }}
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
                control={control}
                name="password"
                rules={{
                  required: 'La contraseña es obligatoria',
                  minLength: { value: 8, message: 'Mínimo 8 caracteres' },
                }}
              />
              <p
                onClick={() => console.log('Abrir modal!')}
                className="text-blue-900 text-base font-medium underline my-4"
              >
                Recuperar Contraseña
              </p>

              <Button
                type="submit"
                className="w-60 mt-8 mb-5 bg-blue-950 text-blue-100 rounded-sm disabled:bg-gray-700"
                disabled={loading}
              >
                {loading ? (
                  <span className="inline-flex items-center gap-4">
                    <Spinner className="w-3 h-3 mr-2" size="sm" variant="spinner" color="white" />{' '}
                    Cargando
                  </span>
                ) : (
                  'Ingresar'
                )}
              </Button>
            </Form>
          </CardBody>
        </Card>
      </div>
    </>
  );
};

export default Login;

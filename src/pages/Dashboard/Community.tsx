import DashContainer from '@/components/DashContainer';
import { testimonialsMockData } from '@/constants/mockData';
import { Divider } from '@heroui/react';

const Community = () => {
  return (
    <DashContainer>
      <div className="p-8">
        <h1 className="font-semibold text-4xl mb-4">Comunidad</h1>
        <p className="mb-4 opacity-75">
          Aquí podrás revisar como se sienten los beneficiarios de las distintas iniciativas.
        </p>
        <div className=" backdrop-blur-sm border border-slate-200 rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">Actividad Reciente</h3>
          <div className="space-y-3">
            {testimonialsMockData.map((testimonial) => (
              <div key={testimonial.id} className="brounded-lg p-5 py-2 ">
                {testimonial.id > 1 && <Divider className="mb-3" />}

                <p className="text-slate-700 italic mb-3">"{testimonial.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.community}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashContainer>
  );
};

export default Community;

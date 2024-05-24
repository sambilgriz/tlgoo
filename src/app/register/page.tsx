import RegisterForm from './register-form';
import { GradientBack } from '@/src/components';
import images from '@/src/assets/images';

export default async function RegisterPage() {
  return (
    <>
      <GradientBack image={images.registerBack} />
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex max-w-sm w-full flex-col gap-4 rounded-xl bg-gradient-to-b from-orange-500/80 to-yellow-300/80 p-8 text-black shadow-lg shadow-md shadow-gray-500/50">
          <div className="flex flex-col items-center justify-center mb-4">
            <div className='w-full'>
              <h1 className='text-4xl xl:text-6xl text-center font-[600] text-ct-yellow-600 mb-4'>
                Welcome to TLGoober!
              </h1>
              <h2 className='text-lg text-center mb-4 text-ct-dark-200'>
                Sign Up To Get Started!
              </h2>
            </div>
            <RegisterForm />
          </div>
        </div>
      </section>
    </>
  );
}

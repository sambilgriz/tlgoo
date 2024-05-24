import LoginForm from './login-form';
import { GradientBack, LogoFormBlock } from '@/src/components';
import images from '@/src/assets/images';

const LoginPage = () => {
  return (
    <>
      <GradientBack image={images.loginBackground} />
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex max-w-sm w-full flex-col gap-4 rounded-xl bg-gradient-to-b from-orange-500/80 to-yellow-300/80 p-8 text-black shadow-lg shadow-md shadow-gray-500/50">
          <LogoFormBlock />
          <LoginForm />
        </div>
      </section>
    </>
  );
}

export default LoginPage
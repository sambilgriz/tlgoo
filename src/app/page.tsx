import { GradientBack } from '@/src/components';
import images from '@/src/assets/images';
import { getAuthUser } from '@/src/utils/get-auth-user';
import { redirect } from 'next/dist/server/api-utils';

export default async function Home() {
  const user = await getAuthUser({ shouldRedirect: false });


  return (
    <>
      <GradientBack image={images.homeBackground} />
      <section className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="flex flex-col items-center justify-center mb-4">
          <div className='w-full'>
            <div className="bg-black bg-opacity-60 p-4 rounded-lg">
              <h1 className='text-5xl xl:text-7xl text-center font-bold text-white mb-4 text-shadow-[0 0 6px rgba(255,215,0,0.9), 0 0 10px black]'>
                Welcome to TLGoober!
              </h1>
              {!user ? (
              <h2 className='text-xl text-center mb-4 text-white text-shadow-[0 0 6px rgba(255,215,0,0.9), 0 0 10px black]'>
                <a href="/register" className="text-blue-500 hover:underline">
                  Sign Up To Get Started!
                </a>
                </h2>) : (
                <h2 className='text-xl text-center mb-4 text-white text-shadow-[0 0 6px rgba(255,215,0,0.9), 0 0 10px black]'>
                    <a href="/profile" className="text-blue-500 hover:underline">
                    Profile
                  </a>
                </h2>) }
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

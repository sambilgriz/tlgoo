/* eslint-disable @next/next/no-img-element */
import Header from '@/src/components/header';
import { getAuthUser } from '@/src/utils/get-auth-user';

export default async function ProfilePage() {
  const user = await getAuthUser();
  const avatar = user.avatar || '/anon.png';

  return (
    <>
      <Header />
      <section className='bg-ct-blue-600  min-h-screen pt-20'>
        <div className='max-w-4xl mx-auto bg-ct-dark-100 rounded-md h-[25rem] flex justify-center items-center'>
          <div>
            <p className='mb-3 text-5xl text-center font-semibold'>
              Profile Page
            </p>
            <div className="flex flex-col items-center justify-center mb-4">
              <img src={avatar} alt="user avatar" width={60} height={60} />
              <p className='mb-3'>Id: {user?.id}</p>
              <p className='mb-3'>Role: {user?.role}</p>
              <p className='mb-3'>Name: {user?.name}</p>
              <p className='mb-3'>Phone: {user?.phone}</p>
              <p className='mb-3'>Email: {user?.email}</p>
              <p className='mb-3'>Role: {user?.role}</p>
              <p className='mb-3'>Verified: {String(user?.verified)}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

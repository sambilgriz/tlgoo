'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { trpc } from '@/src/utils/trpc/trpc';

export default function AuthMenu() {
  const router = useRouter();
  const { mutate: logoutFn } = trpc.logoutUser.useMutation({
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success('Logout successful');
      router.push('/login');
    },
  });

  const handleLogout = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    logoutFn();
  };

  return (
    <>
      <li>
        <Link href="/profile" className="text-ct-dark-600">
          Profile
        </Link>
      </li>
      <li>
        <button onClick={handleLogout} className="text-ct-dark-600">
          Logout
        </button>
      </li>
    </>
  );
}

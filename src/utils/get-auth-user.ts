'use server';

import { createAsyncCaller } from '@/src/app/api/trpc/trpc-router';
import { redirect } from 'next/navigation';

export const getAuthUser = async ({
  shouldRedirect = true,
}: {
  shouldRedirect?: boolean;
} = {}) => {
  const caller = await createAsyncCaller();
  return caller
    .getMe(undefined)
    .then((result: { data: { user: any; }; }) => result.data.user)
    .catch((e: { code: string; }) => {
      if (e.code === 'UNAUTHORIZED' && shouldRedirect) {
        redirect('/login');
      }

      return null;
    });
};

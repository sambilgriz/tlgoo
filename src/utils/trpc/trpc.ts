import type { AppRouter } from '@/src/app/api/trpc/trpc-router';
import { createTRPCReact } from '@trpc/react-query';

export const trpc = createTRPCReact<AppRouter>();

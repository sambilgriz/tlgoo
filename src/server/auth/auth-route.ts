import { TRPCError } from '@trpc/server';
import { createUserSchema, loginUserSchema } from '@/src/lib/user-schema';
import { protectedProcedure, pubicProcedure, t } from '@/src/utils/trpc/trpc-server';
import {
  loginHandler,
  logoutHandler,
  registerHandler,
} from './auth-controller';

const authRouter = t.router({
  registerUser: pubicProcedure
    .input(createUserSchema)
    .mutation(async ({ input }) => {
      try {
        console.log('authRouter.registerUser: ok');
        return await registerHandler({ input });
      } catch (error) {
        console.error('authRouter.registerUser:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'authRouter.registerUser: Internal Server Error',
        });
      }
    }),
  loginUser: pubicProcedure
    .input(loginUserSchema)
    .mutation(async ({ input }) => {
      try {
        console.log('authRouter.loginUser: ok');
        return await loginHandler({ input });
      } catch (error) {
        console.error('authRouter.loginUser:', error);
        throw new TRPCError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'authRouter.loginUser: Internal Server Error',
        });
      }
    }),
  logoutUser: protectedProcedure.mutation(() => logoutHandler()),
});

export default authRouter;

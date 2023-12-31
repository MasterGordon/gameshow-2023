import { router, publicProcedure } from '../trpc';
import { gameRouter } from './game';

export const appRouter = router({
  healthcheck: publicProcedure.query(() => 'yay!'),
  game: gameRouter,
});

export type AppRouter = typeof appRouter;

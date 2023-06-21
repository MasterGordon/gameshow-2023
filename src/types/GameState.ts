import { z } from 'zod';

export const playerSchema = z.object({
  name: z.string(),
  score: z.number(),
  answer: z.string(),
});

export const gameStateSchema = z.object({
  round: z.number(),
  players: z.array(playerSchema),
});

export type GameState = z.infer<typeof gameStateSchema>;

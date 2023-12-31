import { z } from 'zod';

export const screen = z.union([
  z.literal('welcome'),
  z.literal('getting-ready'),
  z.literal('question'),
  z.literal('overview'),
  z.literal('question-preview'),
  z.literal('finish'),
]);

export type ScreenType = z.infer<typeof screen>;

export const playerSchema = z.object({
  name: z.string(),
  score: z.number(),
  answer: z.string(),
  showAnswer: z.boolean(),
  pb: z.number(),
});

export const gameStateSchema = z.object({
  confetti: z.boolean(),
  round: z.number(),
  category: z.number(),
  players: z.array(playerSchema),
  showCorrectAnswer: z.boolean(),
  lockAnswers: z.boolean(),
  screen,
});

export type GameState = z.infer<typeof gameStateSchema>;

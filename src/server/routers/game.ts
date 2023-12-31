import { z } from 'zod';
import { EventEmitter } from 'events';
import { publicProcedure, router } from '../trpc';
import { GameState, gameStateSchema } from '../../types/GameState';
import { observable } from '@trpc/server/observable';
import { getGameState, setGameState } from '../gameStateStore';

interface GameEvents {
  update: (state: GameState) => void;
}

declare interface GameEventEmitter {
  on<U extends keyof GameEvents>(event: U, listener: GameEvents[U]): this;
  off<U extends keyof GameEvents>(event: U, listener: GameEvents[U]): this;
  emit<U extends keyof GameEvents>(
    event: U,
    ...args: Parameters<GameEvents[U]>
  ): boolean;
  once<U extends keyof GameEvents>(event: U, listener: GameEvents[U]): this;
}

class GameEventEmitter extends EventEmitter {}

const gameEventEmitter = new GameEventEmitter();

export const gameRouter = router({
  update: publicProcedure.input(gameStateSchema).mutation(({ input }) => {
    setGameState(input);
    gameEventEmitter.emit('update', input);
  }),
  get: publicProcedure.query(() => {
    return getGameState();
  }),
  onUpdate: publicProcedure.subscription(() => {
    return observable<GameState>((emit) => {
      const onUpdate = (state: GameState) => emit.next(state);
      gameEventEmitter.on('update', onUpdate);
      return () => gameEventEmitter.off('update', onUpdate);
    });
  }),
  sendAnswer: publicProcedure
    .input(
      z.object({
        answer: z.string(),
        playerName: z.string(),
      }),
    )
    .mutation(({ input }) => {
      const gameState = getGameState();
      const players = gameState.players.map((player) => {
        if (player.name === input.playerName) {
          return {
            ...player,
            answer: input.answer,
          };
        }
        return player;
      });
      setGameState({ ...gameState, players });
      gameEventEmitter.emit('update', { ...gameState, players });
    }),
});

import {
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { GameState } from 'types/GameState';
import { trpc } from 'utils/trpc';
import merge from 'ts-deepmerge';

type DeepPartial<T> = T extends object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

const useGameStateSync = () => {
  const [gameState, setGameState] = useState<GameState | undefined>(undefined);
  const gameStateQuery = trpc.game.get.useQuery();
  const mutation = trpc.game.update.useMutation();
  trpc.game.onUpdate.useSubscription(undefined, {
    onData: (data) => {
      setGameState(data);
    },
  });
  useEffect(() => {
    if (gameStateQuery.data) {
      setGameState(gameStateQuery.data);
    }
  }, [gameStateQuery.data]);
  const updateGameState = (newGameState: DeepPartial<GameState>) => {
    if (gameState)
      mutation.mutateAsync(
        merge.withOptions(
          {
            mergeArrays: false,
          },
          gameState,
          newGameState,
        ) as any,
      );
  };
  return { gameState, updateGameState };
};

const gameStateContext = createContext<
  ReturnType<typeof useGameStateSync> | undefined
>(undefined);

export const GameStateProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const value = useGameStateSync();
  return (
    <gameStateContext.Provider value={value}>
      {children}
    </gameStateContext.Provider>
  );
};

export const useGameState = () => {
  const context = useContext(gameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a GameStateProvider');
  }
  return context;
};

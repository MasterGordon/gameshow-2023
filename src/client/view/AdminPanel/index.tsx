import { HStack, Heading } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { GameState } from 'types/GameState';
import { trpc } from 'utils/trpc';
import CountInput from './components/CountInput';

export const AdminPanel = () => {
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
  if (!gameState) return null;

  return (
    <HStack alignItems="start">
      <Heading>Gameshow Admin Panel</Heading>
      <CountInput
        value={gameState.round}
        onChange={(value) => {
          mutation.mutate({ ...gameState, round: value });
        }}
      />
    </HStack>
  );
};

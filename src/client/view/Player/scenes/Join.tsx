import { useState } from 'react';
import { usePlayerName } from '../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import {
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  VStack,
} from '@chakra-ui/react';

export const Join: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const { gameState, updateGameState } = useGameState();
  const [, setPlayerNameAtom] = usePlayerName();
  const onSubmit = () => {
    setPlayerNameAtom(playerName);
    if (!gameState) return;
    if (gameState?.players.some((player) => player.name === playerName)) return;
    updateGameState({
      players: [
        ...gameState.players,
        { name: playerName, answer: '', score: 0, showAnswer: false },
      ],
    });
  };
  return (
    <VStack padding="2">
      <Heading>Beitreten</Heading>
      <FormControl>
        <FormLabel>Team Name</FormLabel>
        <Input
          value={playerName}
          onChange={(e) => setPlayerName(e.target.value)}
        />
      </FormControl>
      <Button onClick={onSubmit}>Beitreten</Button>
    </VStack>
  );
};

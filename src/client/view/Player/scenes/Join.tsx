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
  Image,
  Flex,
} from '@chakra-ui/react';

const pbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export const Join: React.FC = () => {
  const [playerName, setPlayerName] = useState('');
  const [selectedPb, setSelectedPb] = useState(-1);
  const { gameState, updateGameState } = useGameState();
  const [, setPlayerNameAtom] = usePlayerName();
  const onSubmit = () => {
    setPlayerNameAtom(playerName);
    if (!gameState) return;
    if (gameState?.players.some((player) => player.name === playerName)) return;
    updateGameState({
      players: [
        ...gameState.players,
        {
          name: playerName,
          answer: '',
          score: 0,
          showAnswer: false,
          pb: selectedPb,
        },
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
          maxLength={15}
          onChange={(e) => setPlayerName(e.target.value)}
        />
        <Heading size="lg" paddingY="16px">
          Profilbild auswählen
        </Heading>
        <Flex
          justifyContent="space-around"
          paddingY="32px"
          flexWrap="wrap"
          gap="12px"
        >
          {pbs.map((pb) => (
            <Image
              key={pb}
              src={`/pb/${pb}.jpeg`}
              borderRadius="full"
              boxSize="150px"
              outline={selectedPb === pb ? '3px solid' : undefined}
              outlineColor="orange.600"
              onClick={() => setSelectedPb(pb)}
            />
          ))}
        </Flex>
      </FormControl>
      <Button isDisabled={selectedPb === -1 || !playerName} onClick={onSubmit}>
        Beitreten
      </Button>
    </VStack>
  );
};

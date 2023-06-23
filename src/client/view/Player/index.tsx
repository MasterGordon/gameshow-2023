import { useGameState } from 'client/hooks/useGameState';
import { usePlayerName } from './playerAtom';
import { Join } from './scenes/Join';
import { questions } from 'questions';
import Question from './scenes/Question';
import { Center, Heading } from '@chakra-ui/react';
import { ConfettiCanvas } from 'react-raining-confetti';

export const Player: React.FC = () => {
  const [playerName] = usePlayerName();
  const { gameState } = useGameState();

  if (!gameState) return null;

  const currentQuestion = questions[gameState.category][gameState.round];

  return (
    <>
      {playerName ? (
        gameState.screen === 'question' ? (
          <Question question={currentQuestion} />
        ) : (
          <Center minWidth="100vw" minHeight="100vh">
            <Heading>Hier gibt es noch nichts zu sehen.</Heading>
          </Center>
        )
      ) : (
        <Join />
      )}
      {gameState.confetti && <ConfettiCanvas />}
    </>
  );
};

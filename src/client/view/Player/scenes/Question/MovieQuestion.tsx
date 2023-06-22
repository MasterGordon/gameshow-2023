import { Input, Heading, VStack } from '@chakra-ui/react';
import { MovieQuestion } from 'types/Question';
import { usePlayer } from '../../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import { useIsCanvas } from 'client/view/canvasContext';

const MovieQuestionComponent: React.FC<{
  question: MovieQuestion;
}> = ({ question }) => {
  const { sendAnswer } = usePlayer();
  const { gameState } = useGameState();
  const isCanvas = useIsCanvas();

  return (
    <VStack padding="32px" flexDir="column" gap="32px">
      <Heading size="md" textAlign="center">
        {question.description}
      </Heading>
      {isCanvas && gameState?.showCorrectAnswer ? (
        <Heading size="md" color="orange.600">
          {question.movie}
        </Heading>
      ) : (
        <>
          {!isCanvas && (
            <Input
              placeholder="Antwort"
              onChange={(event) => sendAnswer(event.target.value)}
              disabled={gameState?.lockAnswers}
            />
          )}
        </>
      )}
    </VStack>
  );
};

export default MovieQuestionComponent;

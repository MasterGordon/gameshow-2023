import { Input, Heading, VStack } from '@chakra-ui/react';
import { EstimationQuestion } from 'types/Question';
import { usePlayer } from '../../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import { useIsCanvas } from 'client/view/canvasContext';

const EstimationQuestionComponent: React.FC<{
  question: EstimationQuestion;
}> = ({ question }) => {
  const { sendAnswer } = usePlayer();
  const { gameState } = useGameState();
  const isCanvas = useIsCanvas();

  return (
    <VStack padding="32px" flexDir="column" gap="32px">
      <Heading size="md">{question.question}</Heading>
      {isCanvas && gameState?.showCorrectAnswer ? (
        <Heading size="md" color="orange.600">
          {question.rightAnswer}
        </Heading>
      ) : (
        <>
          {!isCanvas && (
            <Input
              maxWidth="600px"
              placeholder="Antwort"
              onChange={(event) => sendAnswer(event.target.value)}
              isDisabled={gameState?.lockAnswers}
            />
          )}
        </>
      )}
    </VStack>
  );
};

export default EstimationQuestionComponent;

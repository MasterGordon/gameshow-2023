import { Button, VStack } from '@chakra-ui/react';
import { LawQuestion } from 'types/Question';
import { usePlayer } from '../../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import { useIsCanvas } from 'client/view/canvasContext';

const letters = ['A', 'B'];

const LawQuestionComponent: React.FC<{
  question: LawQuestion;
}> = ({ question }) => {
  const { sendAnswer, player } = usePlayer();
  const { gameState } = useGameState();
  const isCanvas = useIsCanvas();

  return (
    <VStack padding="32px" flexDir="column" gap="32px">
      {question.laws.map((law, index) => (
        <Button
          key={law}
          onClick={() => sendAnswer(letters[index])}
          width="100%"
          padding="8px"
          whiteSpace="normal"
          isDisabled={!isCanvas && gameState?.lockAnswers}
          height="fit-content"
          backgroundColor={
            (isCanvas &&
              gameState?.showCorrectAnswer &&
              question.rightAnswer === letters[index]) ||
            player?.answer === letters[index]
              ? 'blue.600'
              : undefined
          }
          _hover={{ backgroundColor: 'blue.600' }}
        >
          {`${letters[index]}: ${law}`}
        </Button>
      ))}
    </VStack>
  );
};

export default LawQuestionComponent;

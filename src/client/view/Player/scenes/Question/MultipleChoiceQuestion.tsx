import { Button, Flex, Heading, VStack } from '@chakra-ui/react';
import { MultipleChoiceQuestion } from 'types/Question';
import { usePlayer } from '../../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import { useIsCanvas } from 'client/view/canvasContext';

const letters = ['A', 'B', 'C', 'D'];

const MultipleChoiceQuestionComponent: React.FC<{
  question: MultipleChoiceQuestion;
}> = ({ question }) => {
  const { sendAnswer, player } = usePlayer();
  const { gameState } = useGameState();
  const isCanvas = useIsCanvas();

  return (
    <VStack padding="32px" flexDir="column" gap="32px">
      <Heading size="md">{question.question}</Heading>
      <Flex flexWrap="wrap" gap="16px" justifyContent="center">
        {question.choices.map((choice, index) => (
          <Button
            key={choice}
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
            {`${letters[index]}: ${choice}`}
          </Button>
        ))}
      </Flex>
    </VStack>
  );
};

export default MultipleChoiceQuestionComponent;

import { Input, Image, VStack, Heading } from '@chakra-ui/react';
import { FlagQuestion } from 'types/Question';
import { usePlayer } from '../../playerAtom';
import { useGameState } from 'client/hooks/useGameState';
import { useIsCanvas } from 'client/view/canvasContext';

const FlagQuestionComponent: React.FC<{
  question: FlagQuestion;
}> = ({ question }) => {
  const { sendAnswer } = usePlayer();
  const { gameState } = useGameState();
  const isCanvas = useIsCanvas();

  return (
    <VStack padding="32px" flexDir="column" gap="32px">
      <Image
        src={question.image}
        height="auto"
        width="600px"
        border="1px solid grey"
      />
      {isCanvas && gameState?.showCorrectAnswer ? (
        <Heading size="md" color="orange.600">
          {question.rightAnswer}
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

export default FlagQuestionComponent;

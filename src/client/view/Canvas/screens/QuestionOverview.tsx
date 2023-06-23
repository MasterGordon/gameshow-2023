import { Center, Heading, Img } from '@chakra-ui/react';
import { useGameState } from 'client/hooks/useGameState';

const categoryToName = [
  'Allgemeinwissen Multiple Choice',
  'Allgemeinwissen Schätzfrage',
  'Spaß mit Flaggen',
  'Erkenne das Gesetz',
  'Filme schlecht erklärt',
];

const QuestionOverview: React.FC = () => {
  const { gameState } = useGameState();
  return (
    <Center h="100vh" w="100vw">
      <Heading>{categoryToName[gameState?.category || 0]}</Heading>
    </Center>
  );
};

export default QuestionOverview;

import { Flex, Grid, Heading } from '@chakra-ui/react';
import { useGameState } from 'client/hooks/useGameState';
import Question from 'client/view/Player/scenes/Question';
import { questions } from 'questions';

const QuestionScreen: React.FC = () => {
  const { gameState } = useGameState();
  if (!gameState) return null;
  const currentQuestion = questions[gameState.category][gameState.round];

  // const players = [
  //   {
  //     name: 'Team Döhlings e',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Team Döhnliners',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Alle Freunde ls',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Gorrila Gen Z +',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'SupaDupa Dinger',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Fingriger kek',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Team Döhlings2',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Team Döhnliner2',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Alle Freunde2',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  //   {
  //     name: 'Gorrila Gen Z2',
  //     score: 0,
  //     showAnswer: true,
  //     answer: 'Die Schöne und das Biest',
  //   },
  // ];
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      justifyContent="space-around"
    >
      <Question question={currentQuestion} />
      <Grid
        justifyContent="space-around"
        padding="64px"
        flexWrap="wrap"
        templateColumns="repeat(auto-fit,minmax(300px,1fr));"
        gap="24px 8px"
      >
        {gameState.players.map((player) => (
          <Flex
            justifySelf="center"
            width="300px"
            key={player.name}
            flexDirection="column"
            alignItems="center"
            paddingX="8px"
          >
            <Heading
              size="sm"
              color="orange.600"
              whiteSpace="normal"
              textAlign="center"
            >
              {player.name}
            </Heading>
            <Heading size="sm">{player.score} Punkte</Heading>
            {player.showAnswer && <Heading size="sm">{player.answer}</Heading>}
          </Flex>
        ))}
      </Grid>
    </Flex>
  );
};

export default QuestionScreen;

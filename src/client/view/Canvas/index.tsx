import { useGameState } from 'client/hooks/useGameState';
import Welcome from './screens/Welcome';
import { CanvasProvider } from '../canvasContext';
import { questions } from 'questions';
import Question from '../Player/scenes/Question';
import { Flex, Grid, Heading } from '@chakra-ui/react';

const Canvas: React.FC = () => {
  const { gameState } = useGameState();

  if (!gameState) return null;
  const currentQuestion = questions[gameState.category][gameState.round];
  return (
    <>
      <CanvasProvider>
        {gameState.screen === 'welcome' ? (
          <Welcome />
        ) : (
          <Flex
            flexDirection="column"
            minHeight="100vh"
            justifyContent="space-between"
          >
            <Question question={currentQuestion} />
            <Grid
              justifyContent="space-between"
              padding="64px"
              flexWrap="wrap"
              templateColumns="repeat(auto-fit,minmax(300px,1fr));"
              gap="32px"
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
                  {player.showAnswer && (
                    <Heading size="sm">{player.answer}</Heading>
                  )}
                </Flex>
              ))}
            </Grid>
          </Flex>
        )}
      </CanvasProvider>
      <style>{`html {font-size: 32px; overflow: hidden}`}</style>
    </>
  );
};

export default Canvas;

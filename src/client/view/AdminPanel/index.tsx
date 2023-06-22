import {
  Button,
  Card,
  CardBody,
  CardHeader,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Select,
  Switch,
  VStack,
  chakra,
  Text,
} from '@chakra-ui/react';
import CountInput from './components/CountInput';
import { useGameState } from 'client/hooks/useGameState';
import { questions } from 'questions';
import { ScreenType, screen } from 'types/GameState';

export const AdminPanel = () => {
  const { gameState, updateGameState } = useGameState();
  if (!gameState) return null;

  const clearAll = () => {
    const players = gameState.players.map((p) => {
      return { ...p, answer: '' };
    });
    updateGameState({ players });
  };

  return (
    <VStack alignItems="start" padding="2">
      <Heading>Gameshow Admin Panel</Heading>
      <FormControl>
        <FormLabel>Screen</FormLabel>
        <Select
          value={gameState.screen}
          onChange={(e) =>
            updateGameState({ screen: e.target.value as ScreenType })
          }
        >
          {screen._def.options.map((o) => (
            <chakra.option
              key={o._def.value as string}
              value={o._def.value as string}
            >
              {o._def.value as string}
            </chakra.option>
          ))}
        </Select>
      </FormControl>
      <FormControl>
        <FormLabel>Catagory</FormLabel>
        <CountInput
          value={gameState.category}
          onChange={(value) => {
            const players = gameState.players.map((p) => {
              return { ...p, answer: '' };
            });
            updateGameState({
              players,
              category: value,
              round: 0,
              showCorrectAnswer: false,
            });
          }}
          max={questions.length - 1}
        />
      </FormControl>
      <FormControl>
        <FormLabel>Round</FormLabel>
        <CountInput
          value={gameState.round}
          onChange={(value) => {
            const players = gameState.players.map((p) => {
              return { ...p, answer: '' };
            });
            updateGameState({
              players,
              round: value,
              showCorrectAnswer: false,
            });
          }}
          max={questions[gameState.category].length - 1}
        />
      </FormControl>
      <FormControl>
        <Text fontWeight="bold">Show Answer</Text>
        <Switch
          isChecked={gameState.showCorrectAnswer}
          onChange={() => {
            updateGameState({
              showCorrectAnswer: !gameState.showCorrectAnswer,
            });
          }}
        />
      </FormControl>
      <FormControl>
        <Text fontWeight="bold">Lock Answers</Text>
        <Switch
          isChecked={gameState.lockAnswers}
          onChange={() => {
            updateGameState({
              lockAnswers: !gameState.lockAnswers,
            });
          }}
        />
      </FormControl>
      <Button onClick={clearAll}>Clear All Answers</Button>
      <HStack>
        {gameState.players.map((player) => (
          <Card key={player.name}>
            <CardHeader>{player.name}</CardHeader>
            <CardBody gap="1em" display="flex" flexDirection="column">
              <FormControl>
                <FormLabel>Answer</FormLabel>
                <Input value={player.answer} isDisabled />
              </FormControl>
              <FormControl>
                <FormLabel>Score</FormLabel>
                <CountInput
                  value={player.score}
                  onChange={(value) => {
                    const players = gameState.players.map((p) => {
                      if (p.name === player.name) {
                        return { ...p, score: value };
                      }
                      return p;
                    });
                    updateGameState({ players });
                  }}
                />
              </FormControl>
              <Button
                onClick={() => {
                  const players = gameState.players.filter(
                    (p) => p.name !== player.name,
                  );
                  updateGameState({ players });
                }}
              >
                Delete
              </Button>

              <FormControl>
                <Text fontWeight="bold">Show Answer</Text>
                <Switch
                  isChecked={player.showAnswer}
                  onChange={() => {
                    const players = gameState.players.map((p) => {
                      if (p.name === player.name) {
                        return { ...p, showAnswer: !p.showAnswer };
                      }
                      return p;
                    });
                    updateGameState({
                      players,
                    });
                  }}
                />
              </FormControl>
            </CardBody>
          </Card>
        ))}
      </HStack>
      <pre>
        {JSON.stringify(
          questions[gameState.category][gameState.round],
          undefined,
          2,
        )}
      </pre>
    </VStack>
  );
};

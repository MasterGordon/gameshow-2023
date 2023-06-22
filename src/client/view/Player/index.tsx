import { useGameState } from 'client/hooks/useGameState';
import { usePlayerName } from './playerAtom';
import { Join } from './scenes/Join';
import { questions } from 'questions';
import Question from './scenes/Question';

export const Player: React.FC = () => {
  const [playerName] = usePlayerName();
  const { gameState } = useGameState();

  if (!gameState) return null;

  const currentQuestion = questions[gameState.category][gameState.round];

  return playerName ? <Question question={currentQuestion} /> : <Join />;
};

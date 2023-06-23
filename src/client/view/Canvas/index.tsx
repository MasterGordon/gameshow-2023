import { useGameState } from 'client/hooks/useGameState';
import Welcome from './screens/Welcome';
import { CanvasProvider } from '../canvasContext';
import { ScreenType } from 'types/GameState';
import QuestionScreen from './screens/QuestionScreen';
import GettingReady from './screens/GettingReady';
import Overview from './screens/Overview';
import QuestionOverview from './screens/QuestionOverview';
import { ConfettiCanvas } from 'react-raining-confetti';
import Finish from './screens/Finish';

const screenMap: Record<ScreenType, React.FC> = {
  welcome: Welcome,
  question: QuestionScreen,
  'getting-ready': GettingReady,
  overview: Overview,
  'question-preview': QuestionOverview,
  finish: Finish,
};

const Canvas: React.FC = () => {
  const { gameState } = useGameState();
  if (!gameState) return null;
  const Screen = screenMap[gameState.screen];

  return (
    <>
      <CanvasProvider>
        <Screen />
        <ConfettiCanvas active={gameState.confetti} />
      </CanvasProvider>
      <style>{`html {font-size: 32px; overflow: hidden}`}</style>
    </>
  );
};

export default Canvas;

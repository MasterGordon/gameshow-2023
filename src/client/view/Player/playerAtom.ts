import { useGameState } from 'client/hooks/useGameState';
import { atom, useAtom } from 'jotai';
import { trpc } from 'utils/trpc';

export const playerNameAtom = atom('');
export const usePlayerName = () => {
  return useAtom(playerNameAtom);
};

export const usePlayer = () => {
  const { gameState, updateGameState } = useGameState();
  const sendAnswerMutation = trpc.game.sendAnswer.useMutation();
  const [playerName] = usePlayerName();
  const player = gameState?.players.find((p) => p.name === playerName);
  const sendAnswer = (answer: string) => {
    sendAnswerMutation.mutate({
      answer,
      playerName,
    });
  };
  return { player, sendAnswer };
};

import { useGameState } from 'client/hooks/useGameState';
import { atom, useAtom } from 'jotai';

export const playerNameAtom = atom('');
export const usePlayerName = () => {
  return useAtom(playerNameAtom);
};

export const usePlayer = () => {
  const { gameState, updateGameState } = useGameState();
  const [playerName] = usePlayerName();
  const player = gameState?.players.find((p) => p.name === playerName);
  const sendAnswer = (answer: string) => {
    if (!player) return;
    player.answer = answer;
    const players = gameState?.players.map((p) => {
      if (p.name === playerName) {
        return player;
      }
      return p;
    });
    updateGameState({ players });
  };
  return { player, sendAnswer };
};

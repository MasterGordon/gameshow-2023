import fs from 'fs-extra';
import { GameState } from 'types/GameState';

const initialState: GameState = {
  round: 0,
  players: [],
};

export const getGameState = (): GameState => {
  try {
    return fs.readJSONSync('gameState.json');
  } catch (_) {
    return initialState;
  }
};

export const setGameState = (state: GameState) => {
  return fs.writeJSONSync('gameState.json', state);
};

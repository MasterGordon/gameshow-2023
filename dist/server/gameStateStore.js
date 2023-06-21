"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.setGameState = exports.getGameState = void 0;
const fs_extra_1 = __importDefault(require("fs-extra"));
const initialState = {
    round: 0,
    players: [],
};
const getGameState = () => {
    try {
        return fs_extra_1.default.readJSONSync('gameState.json');
    }
    catch (_) {
        return initialState;
    }
};
exports.getGameState = getGameState;
const setGameState = (state) => {
    return fs_extra_1.default.writeJSONSync('gameState.json', state);
};
exports.setGameState = setGameState;

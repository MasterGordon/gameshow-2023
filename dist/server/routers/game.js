"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameRouter = void 0;
const events_1 = require("events");
const trpc_1 = require("../trpc");
const GameState_1 = require("types/GameState");
const observable_1 = require("@trpc/server/observable");
const gameStateStore_1 = require("server/gameStateStore");
class GameEventEmitter extends events_1.EventEmitter {
}
const gameEventEmitter = new GameEventEmitter();
exports.gameRouter = (0, trpc_1.router)({
    update: trpc_1.publicProcedure.input(GameState_1.gameStateSchema).mutation(({ input }) => {
        (0, gameStateStore_1.setGameState)(input);
        gameEventEmitter.emit('update', input);
    }),
    get: trpc_1.publicProcedure.query(() => {
        return (0, gameStateStore_1.getGameState)();
    }),
    onUpdate: trpc_1.publicProcedure.subscription(() => {
        return (0, observable_1.observable)((emit) => {
            const onUpdate = (state) => emit.next(state);
            gameEventEmitter.on('update', onUpdate);
            return () => gameEventEmitter.off('update', onUpdate);
        });
    }),
});

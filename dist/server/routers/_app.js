"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const trpc_1 = require("../trpc");
const game_1 = require("./game");
exports.appRouter = (0, trpc_1.router)({
    healthcheck: trpc_1.publicProcedure.query(() => 'yay!'),
    game: game_1.gameRouter,
});

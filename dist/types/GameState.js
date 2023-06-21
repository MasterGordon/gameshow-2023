"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameStateSchema = exports.playerSchema = void 0;
const zod_1 = require("zod");
exports.playerSchema = zod_1.z.object({
    name: zod_1.z.string(),
    score: zod_1.z.number(),
    answer: zod_1.z.string(),
});
exports.gameStateSchema = zod_1.z.object({
    round: zod_1.z.number(),
    players: zod_1.z.array(exports.playerSchema),
});

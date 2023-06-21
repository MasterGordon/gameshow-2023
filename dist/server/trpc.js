"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeRouters = exports.middleware = exports.publicProcedure = exports.router = void 0;
const server_1 = require("@trpc/server");
const superjson_1 = __importDefault(require("superjson"));
const t = server_1.initTRPC.context().create({
    transformer: superjson_1.default,
    errorFormatter({ shape }) {
        return shape;
    },
});
exports.router = t.router;
exports.publicProcedure = t.procedure;
exports.middleware = t.middleware;
exports.mergeRouters = t.mergeRouters;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminPanel = void 0;
const react_1 = require("@chakra-ui/react");
const react_2 = require("react");
const trpc_1 = require("utils/trpc");
const CountInput_1 = __importDefault(require("./components/CountInput"));
const AdminPanel = () => {
    const [gameState, setGameState] = (0, react_2.useState)(undefined);
    const gameStateQuery = trpc_1.trpc.game.get.useQuery();
    const mutation = trpc_1.trpc.game.update.useMutation();
    trpc_1.trpc.game.onUpdate.useSubscription(undefined, {
        onData: (data) => {
            setGameState(data);
        },
    });
    (0, react_2.useEffect)(() => {
        if (gameStateQuery.data) {
            setGameState(gameStateQuery.data);
        }
    }, [gameStateQuery.data]);
    if (!gameState)
        return null;
    return (<react_1.HStack alignItems="start">
      <react_1.Heading>Gameshow Admin Panel</react_1.Heading>
      <CountInput_1.default value={gameState.round} onChange={(value) => {
            mutation.mutate({ ...gameState, round: value });
        }}/>
    </react_1.HStack>);
};
exports.AdminPanel = AdminPanel;

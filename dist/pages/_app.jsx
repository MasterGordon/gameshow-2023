"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("@chakra-ui/react");
const trpc_1 = require("utils/trpc");
const MyApp = ({ Component, pageProps }) => {
    return (<react_1.ChakraProvider>
      <Component {...pageProps}/>
    </react_1.ChakraProvider>);
};
exports.default = trpc_1.trpc.withTRPC(MyApp);

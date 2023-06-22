import { ChakraProvider } from '@chakra-ui/react';
import { GameStateProvider } from 'client/hooks/useGameState';
import { theme } from 'client/theme';
import type { AppType } from 'next/app';
import { trpc } from 'utils/trpc';

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <GameStateProvider>
        <Component {...pageProps} />
      </GameStateProvider>
    </ChakraProvider>
  );
};

export default trpc.withTRPC(MyApp);

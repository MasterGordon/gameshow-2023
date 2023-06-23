import {
  defineStyleConfig,
  extendTheme,
  withDefaultColorScheme,
} from '@chakra-ui/react';

export const theme = extendTheme(
  {
    config: {
      initialColorMode: 'light',
      useSystemColorMode: false,
    },
    components: {
      Heading: defineStyleConfig({
        baseStyle: {
          textAlign: 'center',
        },
      }),
    },
  },
  withDefaultColorScheme({ colorScheme: 'orange' }),
);

import { Center, Grid, HStack, Heading, Img } from '@chakra-ui/react';
import { useGameState } from 'client/hooks/useGameState';
import { config } from 'config';
import QRCode from 'react-qr-code';
import { generateWiFiQRString } from 'utils/wifi-qr';

const GettingReady: React.FC = () => {
  const { gameState } = useGameState();
  return (
    <Grid
      h="100vh"
      w="100vw"
      templateColumns="1fr 1fr 1fr"
      templateRows="1fr 1fr 5fr 1fr"
    >
      <Heading gridColumnStart="1" gridColumnEnd="4">
        Vorbereitung
      </Heading>
      <Heading size="md">1. Team Finden</Heading>
      <Heading size="md">2. Wifi Verbinden</Heading>
      <Heading size="md">3. Team Anmelden</Heading>
      <Center>
        <Img src="/team-finden.jpeg" boxSize="500px" />
      </Center>
      <Center>
        <QRCode
          value={generateWiFiQRString({
            ssid: config.ssid,
            password: config.password,
            encryption: 'WPA',
            hiddenSSID: config.hiddenSSID,
          })}
          width={500}
          height={500}
        />
      </Center>
      <Center>
        <QRCode
          value={'http://' + config.ip + ':' + config.port}
          width="500px"
          height="500px"
        />
      </Center>
      <HStack
        gridColumnStart="1"
        gridColumnEnd="4"
        justifyContent="space-around"
      >
        {gameState?.players.map((player) => (
          <Heading size="sm" key={player.name}>
            {player.name}
          </Heading>
        ))}
      </HStack>
    </Grid>
  );
};

export default GettingReady;

import {
  Center,
  Flex,
  Grid,
  Heading,
  Img,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
  VStack,
} from '@chakra-ui/react';
import { useGameState } from 'client/hooks/useGameState';

const Overview: React.FC = () => {
  const { gameState } = useGameState();
  if (!gameState) return null;

  const players1 = gameState.players.slice(
    0,
    Math.ceil(gameState.players.sort((a, b) => b.score - a.score).length / 2),
  );
  const players2 = gameState.players.slice(
    Math.ceil(gameState.players.sort((a, b) => b.score - a.score).length / 2),
  );

  return (
    <Center h="100vh">
      <VStack spacing="3" justifyItems="center" alignItems="center">
        <Heading>Punkte Übersicht</Heading>
        <Flex gap="40px">
          {[players1, players2].map((players, i) => (
            <TableContainer key={i}>
              <Table>
                <Tbody>
                  {players.map((player) => (
                    <Tr key={player.name}>
                      <Td fontSize="26">
                        {gameState.players
                          .sort((a, b) => b.score - a.score)
                          .findIndex((p) => p.name === player.name) + 1}
                        .
                      </Td>
                      <Td padding="0.5">
                        <Img
                          src={`/pb/${player.pb}.jpeg`}
                          borderRadius="full"
                          boxSize="110px"
                        />
                      </Td>
                      <Td fontSize="26px">{player.name}</Td>
                      <Td fontSize="26px">{player.score} Punkte</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </TableContainer>
          ))}
        </Flex>
      </VStack>
    </Center>
  );
};

export default Overview;

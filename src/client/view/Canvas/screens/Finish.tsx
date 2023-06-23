import { Box, Flex, Heading, Img, VStack } from '@chakra-ui/react';
import { useGameState } from 'client/hooks/useGameState';

const Finish: React.FC = () => {
  const { gameState } = useGameState();
  if (!gameState) return null;
  const playersByScore = gameState?.players.sort((a, b) => b.score - a.score);
  const p1 = playersByScore[0];
  const p2 = playersByScore[1];
  const p3 = playersByScore[2];
  return (
    <>
      <Heading marginTop="2">Gewinner</Heading>
      <Flex
        alignItems="end"
        justifyContent="center"
        marginTop="100px"
        gap="30px"
      >
        <VStack>
          <Img src={`/pb/${p2.pb}.jpeg`} borderRadius="full" boxSize="400px" />
          <Heading size="md">{p2.name}</Heading>
          <Heading size="sm">{p2.score} Punkte</Heading>
          <Flex
            bg="silver"
            width="100%"
            height="200px"
            justifyContent="center"
            alignItems="end"
          >
            2.
          </Flex>
        </VStack>
        <VStack>
          <Img src={`/pb/${p1.pb}.jpeg`} borderRadius="full" boxSize="400px" />
          <Heading size="md">{p1.name}</Heading>
          <Heading size="sm">{p1.score} Punkte</Heading>
          <Flex
            bg="gold"
            width="100%"
            height="300px"
            justifyContent="center"
            alignItems="end"
          >
            1.
          </Flex>
        </VStack>
        <VStack>
          <Img src={`/pb/${p3.pb}.jpeg`} borderRadius="full" boxSize="400px" />
          <Heading size="md">{p3.name}</Heading>
          <Heading size="sm">{p3.score} Punkte</Heading>
          <Flex
            bg="#cd7f32"
            width="100%"
            height="100px"
            justifyContent="center"
            alignItems="end"
          >
            3.
          </Flex>
        </VStack>
      </Flex>
    </>
  );
};

export default Finish;

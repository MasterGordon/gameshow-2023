import { Center, Heading, Img, keyframes } from '@chakra-ui/react';

const animation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  25% {
    transform: rotate(-10deg);
  }
  75% {
    transform: rotate(10deg);
  }
  0% {
    transform: rotate(0deg);
  }
`;

const animation2 = keyframes`
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-10deg);
  }
  60% {
    transform: rotate(0deg) scaleX(-1);
  }
  80% {
    transform: rotate(10deg) scaleX(-1);
  }
  100% {
    transform: rotate(0deg) scaleX(1);
  }
`;

const Welcome: React.FC = () => {
  return (
    <Center h="100vh" w="100vw">
      <Heading>Willkommen zur Gameshow!</Heading>
      <Img
        position="absolute"
        src="/thomas.png"
        animation={`${animation} 2s infinite`}
        left="0"
      />
      <Img
        position="absolute"
        src="/thomas.png"
        animation={`${animation2} 2s infinite`}
        right="0"
        transform="scaleX(-1)"
      />
    </Center>
  );
};

export default Welcome;

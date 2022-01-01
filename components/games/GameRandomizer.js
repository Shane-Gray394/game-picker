import { Flex, Button, Box, Heading, Text } from '@chakra-ui/react';
import { useState } from 'react';

const GameRandomizer = (props) => {
  const [randomGames, setRandomGame] = useState('');
  const games = props.games;

  const handleRandom = () => {
    for (let i = 0; i < games.length; i++) {
      let random = -Math.ceil(Math.random() * (0 - games.length) + 0);
    }
    setRandomGame(games[random].title);
  };

  return (
    <Flex align="flex-start">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center" pb={5}>
          <Heading>Randomizer</Heading>
        </Box>
        <Box textAlign="center">
          <Box>
            <Text></Text>
          </Box>
        </Box>
        <Button colorScheme="linkedin" onClick={handleRandom} width="full">
          Random Game
        </Button>
        <Box textAlign="center" pt={4}>
          <Text fontSize="3xl">{randomGames}</Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default GameRandomizer;

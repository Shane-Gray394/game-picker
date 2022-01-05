import { Button, Box, Text } from '@chakra-ui/react';
import { useState } from 'react';

export const GameRandomizer = (props) => {
  const [randomGames, setRandomGame] = useState('');
  const games = props.games;

  const handleRandom = () => {
    for (let i = 0; i < games.length; i++) {
      let random = -Math.ceil(Math.random() * (0 - games.length) + 0);
    }
    setRandomGame(games[random].title);
  };

  return (
    <Box
      backgroundColor="#faf9f9"
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      width="50%"
      mt={10}
    >
      <Box textAlign="center" pb={5}>
        <Text fontSize="4xl" fontWeight="bold">
          Randomizer
        </Text>
        <Button
          colorScheme="linkedin"
          onClick={handleRandom}
          width="auto"
          p="0 4%"
          mt="8"
        >
          Random Game
        </Button>
      </Box>
      <Box textAlign="center" pt={4}>
        <Text fontSize="3xl">{randomGames}</Text>
      </Box>
    </Box>
  );
};

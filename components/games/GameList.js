import { GameItem } from './GameItem';
import { Box, Heading, Text, SimpleGrid } from '@chakra-ui/react';

export const GameList = (props) => {
  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      backgroundColor="#faf9f9"
      height="70vh"
      overflow="scroll"
      className="scroll"
    >
      <Box textAlign="center" pb={5}>
        <Text fontSize="4xl" fontWeight="bold">
          Games Library
        </Text>
      </Box>
      {props.games.length === 0 ? (
        <Text fontSize="xl" pb={8}>
          No added games
        </Text>
      ) : (
        <SimpleGrid spacing="4" textAlign="center" columns={{ lg: 3, sm: 1 }}>
          {props.games.map((game, i) => (
            <GameItem
              key={i}
              id={game._id}
              title={game.title}
              description={game.description}
            />
          ))}
        </SimpleGrid>
      )}
    </Box>
  );
};

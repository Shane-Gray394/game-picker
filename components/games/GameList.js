import GameItem from './GameItem';
import { Flex, Button, Box, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';

const GameList = (props) => {
  return (
    <Flex width="full">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center" pb={5}>
          <Heading>Games Library</Heading>
        </Box>
        <Box textAlign="center">
          {props.games.length === 0 ? (
            <Text fontSize="xl" pb={8}>
              No added games
            </Text>
          ) : (
            <Box>
              {props.games.map((game, i) => (
                <GameItem
                  key={i}
                  id={game._id}
                  title={game.title}
                  description={game.description}
                />
              ))}
            </Box>
          )}
        </Box>
        <Link passHref href="/add-game">
          <Button colorScheme="facebook" width="full">
            Add New Game
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default GameList;

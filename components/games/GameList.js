import { GameItem } from './GameItem';
import {
  Flex,
  Button,
  Box,
  Heading,
  Text,
  SimpleGrid,
  Container,
} from '@chakra-ui/react';
import Link from 'next/link';

export const GameList = (props) => {
  return (
    <Box
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      backgroundColor="lightgray"
      overflow="scroll"
      className="scroll"
    >
      <Box textAlign="center" pb={5}>
        <Heading>Games Library</Heading>
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

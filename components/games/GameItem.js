import { Flex, Stack, Button, Box, Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useState } from 'react';

const GameItem = (props) => {
  const [deleting, setDeleting] = useState(false);
  const router = useRouter();

  const onDeleteGame = async (gameId) => {
    setDeleting(true);
    try {
      await fetch('/api/games', {
        method: 'DELETE',
        body: gameId,
      });
      setDeleting(false);
      return router.push(router.asPath);
    } catch (error) {
      return setDeleting(false);
    }
  };

  return (
    <Flex mt={2} mb={2}>
      <Box p={4} borderWidth={1} borderRadius={8} w="100%">
        <Stack spacing={3}>
          <Text fontSize="3xl">{props.title}</Text>
          <Text fontSize="lg">{props.description}</Text>
          <Button
            colorScheme="whatsapp"
            type="button"
            onClick={() => onDeleteGame(props.id)}
          >
            {deleting ? 'Deleting' : 'Delete'}
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
};

export default GameItem;

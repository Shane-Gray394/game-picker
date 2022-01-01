import { useRef } from 'react';
import {
  Input,
  Flex,
  Stack,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  Heading,
} from '@chakra-ui/react';

const GameForm = (props) => {
  const titleInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const gameData = {
      title: enteredTitle,
      description: enteredDescription,
    };

    props.onAddgame(gameData);
  };

  return (
    <Flex width="full" align="center" justifyContent="center">
      <Box
        p={8}
        maxWidth="500px"
        borderWidth={1}
        borderRadius={8}
        boxShadow="lg"
      >
        <Box textAlign="center">
          <Heading>Add New Game</Heading>
        </Box>
        <Box my={4} textAlign="left">
          <form onSubmit={submitHandler} align="center">
            <Stack spacing={4}>
              <FormControl isRequired>
                <FormLabel>Title</FormLabel>
                <Input
                  placeholder="Title..."
                  required
                  type="text"
                  ref={titleInputRef}
                  id="title"
                />
              </FormControl>
              <FormControl mt={6}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  placeholder="Description..."
                  type="text"
                  ref={descriptionInputRef}
                  id="description"
                />
              </FormControl>
              <Button colorScheme="linkedin" width="full" mt={4} type="submit">
                Submit
              </Button>
            </Stack>
          </form>
        </Box>
      </Box>
    </Flex>
  );
};

export default GameForm;

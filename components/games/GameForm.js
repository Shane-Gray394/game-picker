import { useRef } from 'react';
import {
  Input,
  Stack,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';

export const GameForm = (props) => {
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
    <Accordion
      p={8}
      backgroundColor="#faf9f9"
      borderWidth={1}
      borderRadius={8}
      boxShadow="md"
      width="80%"
      allowToggle
    >
      <AccordionItem>
        <AccordionButton id={props.id}>
          <Box flex="1" textAlign="left">
            <Heading>Add New Game</Heading>
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
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
                <Button
                  colorScheme="linkedin"
                  width="full"
                  mt={4}
                  type="submit"
                >
                  Submit
                </Button>
              </Stack>
            </form>
          </Box>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

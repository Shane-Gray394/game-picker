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
  Flex,
} from '@chakra-ui/react';

const AddToWishList = () => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const companyInputRef = useRef();
  const descriptionInputRef = useRef();

  const addGameHandler = async (enteredGameData) => {
    const response = await fetch('/api/wishlist', {
      method: 'POST',
      body: JSON.stringify(enteredGameData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    window;
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredCompany = companyInputRef.current.value;

    const gameData = {
      title: enteredTitle,
      image: enteredImage,
      description: enteredDescription,
      company: enteredCompany,
    };

    addGameHandler(gameData);
  };
  return (
    <Flex justify="center">
      <Box
        className="scroll"
        backgroundColor="white"
        p={8}
        mt={20}
        borderWidth={1}
        borderRadius={8}
        boxShadow="md"
        width="40%"
        height="65vh"
      >
        <Box>
          <Heading>Add To Wishlist Database</Heading>
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
              <FormControl isRequired>
                <FormLabel>Image</FormLabel>
                <Input
                  placeholder="Image..."
                  required
                  type="text"
                  ref={imageInputRef}
                  id="image"
                />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Company</FormLabel>
                <Input
                  placeholder="Company..."
                  required
                  type="text"
                  ref={companyInputRef}
                  id="company"
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

export default AddToWishList;

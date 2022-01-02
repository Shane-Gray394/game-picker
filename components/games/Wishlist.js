import {
  Flex,
  Button,
  Box,
  Heading,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useAccordion,
  useAccordionItem,
} from '@chakra-ui/react';
// import { useState } from 'react';
import Image from 'next/image';

export const Wishlist = (props) => {
  // const [wishlist, setWishlist] = useState('');

  // const onFetch = () => {
  //   setWishlist(props.wishlist);
  //   console.log(wishlist);
  // };
  return (
    <Box
      backgroundColor="lightgray"
      p={8}
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
      width="40%"
    >
      <Box textAlign="center" pb={5}>
        <Heading>Wishlist</Heading>
      </Box>
      <Box textAlign="center">
        {'' === 0 ? (
          <Text fontSize="xl" pb={8}>
            No added games
          </Text>
        ) : (
          <Box></Box>
        )}
      </Box>
      <Text>{props.wishlist[0].title}</Text>
      <Image
        width="200px"
        height="100px"
        src={
          'https://www.logolynx.com/images/logolynx/ff/ffe58a33af337f340634f7e5c9e5d7eb.png'
        }
        alt="game"
      />
      <Accordion allowToggle>
        <AccordionItem>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontSize="x-large">Add To Wishlist</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel>
            <Text width="50%">{props.wishlist[0].description}</Text>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Button colorScheme="facebook" width="full">
        Add New Game
      </Button>
    </Box>
  );
};

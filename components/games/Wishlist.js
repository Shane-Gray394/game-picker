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
  Input,
} from '@chakra-ui/react';
import classes from './Wishlist.module.css';
import Image from 'next/image';
import { useState } from 'react';

export const Wishlist = (props) => {
  const [userWishlist, setUserWishlist] = useState([]);
  const [wishlist, setWishlist] = useState(props.wishlist);
  const [searchTerm, setSearchTerm] = useState('');

  const addToWishlist = (game) => {
    setUserWishlist([
      ...userWishlist,
      {
        title: game.title,
        description: game.description,
      },
    ]);
  };

  const removeFromWishlist = (game) => {
    userWishlist.splice(game, 1);
    setUserWishlist([...userWishlist]);
  };

  return (
    <Flex justify="space-around" id="wishlist">
      <Box
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="md"
        height="77vh"
        width="40%"
        backgroundColor="#faf9f9"
        className="scroll"
      >
        <Box textAlign="center" pb={5}>
          <Text fontSize="4xl" fontWeight="bold">
            Search for a Game
          </Text>
        </Box>
        <Input
          variant="unstyled"
          pb="4"
          placeholder="Search by title"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <Box>
          {wishlist
            .filter((game) => {
              // if (searchTerm === '') {
              //   return game;
              // } else
              if (
                `${game.title}`.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return game;
              }
            })
            .map((game) => (
              <Box key={game.id} className={classes.boxItem}>
                <Flex direction="column">
                  <Accordion allowToggle>
                    <AccordionItem>
                      <AccordionButton>
                        <Box flex="1" textAlign="left">
                          <Text fontSize="xx-large">{game.title}</Text>
                        </Box>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <Text>{game.description}</Text>
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                  <Box alignSelf="center">
                    <Button variant="ghost" onClick={() => addToWishlist(game)}>
                      Add to Wishlist
                    </Button>
                  </Box>
                </Flex>
              </Box>
            ))}
        </Box>
      </Box>
      <Box
        className="scroll"
        backgroundColor="#faf9f9"
        p={8}
        borderWidth={1}
        borderRadius={8}
        boxShadow="md"
        width="40%"
        height="77vh"
      >
        <Box textAlign="center" pb={5}>
          <Text fontSize="4xl" fontWeight="bold">
            Wishlist
          </Text>
        </Box>
        {userWishlist.length === 0 ? (
          <Box fontSize="x-large" textAlign="center">
            <Text>No Games Added</Text>
          </Box>
        ) : (
          userWishlist.map((game) => (
            <Box key={game.id} className={classes.boxItem}>
              <Flex direction="column">
                <Accordion allowToggle>
                  <AccordionItem>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <Text fontSize="xx-large">{game.title}</Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel>
                      <Text>{game.description}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
                <Box alignSelf="center">
                  <Button
                    variant="ghost"
                    onClick={() => removeFromWishlist(game)}
                  >
                    Remove
                  </Button>
                </Box>
              </Flex>
            </Box>
          ))
        )}
      </Box>
    </Flex>
  );
};

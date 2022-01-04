import { Flex, ButtonGroup, Button } from '@chakra-ui/react';
import Link from 'next/link';

export const NavBar = () => {
  return (
    <Flex
      justify="center"
      className="scroll-snap-child"
      backgroundColor="#faf9f9"
      borderWidth="full"
      borderRadius={3}
      boxShadow="md"
      w="100%"
      pt="10"
      pb="10"
    >
      <ButtonGroup spacing={8}>
        <Link passHref href="#home">
          <Button variant="link">Home</Button>
        </Link>
        <Link passHref href="#wishlist">
          <Button variant="link">Wishlist</Button>
        </Link>
      </ButtonGroup>
    </Flex>
  );
};

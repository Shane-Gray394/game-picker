import { Button, Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Flex as="header" w="100%" backgroundColor="black" pt="10" pb="10">
      <Box pl="6">
        <Heading color="white">Family Game Picker</Heading>
      </Box>
      <Spacer />
      <Box pr="6">
        <Link passHref href="/">
          <Button>Home</Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

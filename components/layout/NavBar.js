import { Button, Flex, Spacer, Box, Heading } from '@chakra-ui/react';
import Link from 'next/link';

const NavBar = () => {
  return (
    <Flex
      borderWidth={1}
      borderRadius={3}
      boxShadow="md"
      w="100%"
      pt="10"
      pb="10"
    >
      <Box pl="20">
        <Heading color="black">Family Game Picker</Heading>
      </Box>
      <Spacer />
      <Box pr="20">
        <Link passHref href="/">
          <Button color="black" variant="link">
            Home
          </Button>
        </Link>
      </Box>
    </Flex>
  );
};

export default NavBar;

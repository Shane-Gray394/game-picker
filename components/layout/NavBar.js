import { Flex, ButtonGroup, Button, Spacer } from '@chakra-ui/react';
import Link from 'next/link';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';

export const NavBar = (props) => {
  const router = useRouter();
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
      <Spacer />
      <ButtonGroup spacing={8}>
        <Link passHref href="#home">
          <Button variant="link">Home</Button>
        </Link>
        <Link passHref href="#wishlist">
          <Button variant="link">Wishlist</Button>
        </Link>
      </ButtonGroup>
      <Spacer />
      {props.logged && (
        <Button
          pr={10}
          variant="link"
          onClick={() => {
            cookie.remove('token');
          }}
        >
          Logout
        </Button>
      )}
      {!props.logged && (
        <Button
          pr={10}
          variant="link"
          onClick={() => {
            router.push('/');
          }}
        >
          Login
        </Button>
      )}
    </Flex>
  );
};

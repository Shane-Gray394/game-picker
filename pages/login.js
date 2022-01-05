import React, { useState } from 'react';
import {
  Box,
  Text,
  Stack,
  Input,
  Flex,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import Router from 'next/router';
import cookie from 'js-cookie';
import Link from 'next/link';

const Login = (props) => {
  const [loginError, setLoginError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    //call api
    fetch('/api/user/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data && data.error) {
          setLoginError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, { expires: 2 });
          Router.push('/');
        }
      });
  }
  return (
    <Flex justify="center" backgroundColor="#4895ef" height="100vh">
      <Box
        my={4}
        textAlign="center"
        p={8}
        backgroundColor="#faf9f9"
        borderWidth={1}
        borderRadius={8}
        boxShadow="md"
        height="50vh"
        minWidth="500px"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <Text fontSize="4xl" fontWeight="bold">
              Login
            </Text>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            <Input
              alignSelf="center"
              width="100px"
              type="submit"
              value="Submit"
            />
            <Box>
              <Text>Not a user?</Text>
              <Button onClick={() => props.setSignup(true)} variant="link">
                Signup
              </Button>
            </Box>
            {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Login;

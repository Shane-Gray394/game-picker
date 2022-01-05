import React, { useState } from 'react';
import {
  Box,
  Text,
  Stack,
  Input,
  Flex,
  FormControl,
  FormLabel,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import cookie from 'js-cookie';

const Signup = (props) => {
  const [signupError, setSignupError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    props.setSignup(false);
    fetch('/api/user/users', {
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
          setSignupError(data.message);
        }
        if (data && data.token) {
          //set cookie
          cookie.set('token', data.token, { expires: 2 });
          router.push('/');
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
        height="45vh"
        minWidth="500px"
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <Text fontSize="4xl" fontWeight="bold">
              Sign Up
            </Text>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Password</FormLabel>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
              />
            </FormControl>
            <Input
              alignSelf="center"
              width="100px"
              type="submit"
              value="Submit"
            />
            {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default Signup;

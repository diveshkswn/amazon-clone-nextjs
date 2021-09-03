import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,
  FormErrorMessage,
  SlideFade,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import { signup } from '../../context/AuthContext';
//
export default function Signup({ signupState, setLoginState, setSignupState }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const emailRef = useRef();
  const nameRef = useRef();
  const passswordRef = useRef();
  const router = useRouter();

  async function handleSubmit(event) {
    setLoading(true);
    try {
      event.preventDefault();
      const user = await signup(emailRef.current.value, passswordRef.current.value);
      await user.user.updateProfile({ displayName: nameRef.current.value });
      router.push('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  }

  function handleFormChange() {
    setLoginState((v) => !v);
    setSignupState((v) => !v);
  }

  return (
    <SlideFade in={signupState} offsetY="100px">
      <div className="SignupMainContainer">
        <Text fontSize="3xl" align="center">Sign Up</Text>
        <form onSubmit={handleSubmit}>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" id="email_id" ref={emailRef} />
            <FormHelperText color="white">We will never share your email.</FormHelperText>
          </FormControl>
          <FormControl isRequired>
            <FormLabel marginTop="20px">Name</FormLabel>
            <Input type="text" id="name_id" ref={nameRef} isRequired />
          </FormControl>
          <FormControl isRequired>
            <FormLabel marginTop="20px">Password</FormLabel>
            <Input type="password" id="password_id" ref={passswordRef} isRequired />

          </FormControl>

          <FormControl isInvalid={error}>
            <Button
              onSubmit={handleSubmit}
              mt={10}
              variant="solid"
              _hover={{ backgroundColor: 'var(--amazon-yellow-dark)' }}
              bgColor="var(--amazon-yellow)"
              width="100%"
              _focus={{ outline: 'none' }}
              isLoading={loading}
              type="submit"
            >
              Submit
            </Button>
            <FormErrorMessage fontSize="sm" fontWeight="bold" color="black">{error}</FormErrorMessage>
          </FormControl>
        </form>
        <Text fontSize="xl" align="center">
          Already have an account?
          <Text color="blue" display="inline" cursor="pointer" onClick={() => handleFormChange()}> Login</Text>
        </Text>
      </div>
    </SlideFade>

  );
}

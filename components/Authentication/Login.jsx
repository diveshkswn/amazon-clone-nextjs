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
import styles from '../../styles/Login.module.css';
import { login } from '../../context/AuthContext';

export default function Login({ loginState, setLoginState, setSignupState }) {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const router = useRouter();

  async function handleSubmit(event) {
    setLoading(true);
    try {
      setError('');

      event.preventDefault();
      await login(emailRef.current.value, passwordRef.current.value);
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
    <SlideFade in={loginState} offsetY="100px">
      <div className={styles.LoginMainContainer}>
        <Text fontSize="3xl" align="center">Login</Text>
        <form onSubmit={handleSubmit}>
          <FormControl>
            <FormLabel>Email address</FormLabel>
            <Input type="email" id="email_id" ref={emailRef} />
            <FormHelperText color="white">We will never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel marginTop="20px">Password</FormLabel>
            <Input type="password" id="password_id" ref={passwordRef} isRequired />
          </FormControl>
          <FormControl isInvalid={error}>
            <Button
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
        <Text fontSize="xl" align="center" mt={10}>
          Dont have an account? Create new one

          <Text color="blue" display="inline" cursor="pointer" onClick={() => handleFormChange()}> Signup</Text>

        </Text>
      </div>
    </SlideFade>
  );
}

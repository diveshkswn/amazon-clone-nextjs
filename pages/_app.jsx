/* eslint-disable react/jsx-props-no-spreading */
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'react-redux';
import Layout from '../components/Layout';
import AuthProvider from '../context/AuthContext';
import { store } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <AuthProvider>
        <Provider store={store}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </Provider>
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

function MyApp({ Component, pageProps }: AppProps) {

  // TODO: Change theme here!
  const theme = extendTheme({
    fonts: {
      heading: 'Inter',
      body: 'Inter',
    }
  });

  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp

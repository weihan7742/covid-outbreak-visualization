import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, extendTheme, ColorModeScript } from '@chakra-ui/react';
import '@fontsource/bebas-neue/400.css';
import '@fontsource/montserrat/400.css';

function MyApp({ Component, pageProps }: AppProps) {

  // TODO: Change theme here!
  const theme = extendTheme({
    fonts: {
      heading: 'Bebas Neue',
      body: 'Montserrat',
    }
  });

  return (
  <ChakraProvider theme={theme}>
    <ColorModeScript initialColorMode="dark" />
    <Component {...pageProps} />
  </ChakraProvider>)
}

export default MyApp

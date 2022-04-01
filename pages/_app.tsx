import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { ethers } from 'ethers';
import { Provider as WagmiProvider } from 'wagmi';
import '@fontsource/poppins';

const provider = ethers.providers.getDefaultProvider('http://localhost:8545');

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider autoConnect provider={provider}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </WagmiProvider>
  );
}

export default MyApp;

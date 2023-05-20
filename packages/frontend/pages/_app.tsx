import * as React from 'react';
import type { AppProps } from 'next/app';
import NextHead from 'next/head';
import '../styles/globals.css';

import { ChakraProvider } from '@chakra-ui/react';

import { createClient, WagmiConfig, configureChains } from 'wagmi';
import {
  goerli, optimismGoerli
} from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';
import { getDefaultWallets, RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { useIsMounted } from '../hooks';
import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `'Open Sans', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
})

const { chains, provider, webSocketProvider } = configureChains(
  [goerli, optimismGoerli],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: 'Cross-Chain Messaging',
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
  webSocketProvider,
});

const App = ({ Component, pageProps }: AppProps) => {
  const isMounted = useIsMounted();

  if (!isMounted) return null;
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider coolMode chains={chains}>
        <NextHead>
          <title>Cross-Chain Messaging</title>
        </NextHead>
        <ChakraProvider theme={theme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default App;

import React from 'react';
import { ChakraUIProvider } from './chakra-provider';
import { fontVariables } from '../components/Fonts';
import Animated from './animate-prescence';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>
          <Animated>
          {children}
          </Animated>
          </ChakraUIProvider>
      </body>
    </html>
  );
}
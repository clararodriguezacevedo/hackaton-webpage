import React from 'react';
import { ChakraUIProvider } from './chakra-provider';
import Animated from './animate-prescence';


export default function RootLayout({
  children,
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
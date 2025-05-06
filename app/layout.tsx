import React from 'react';
import { ChakraUIProvider } from './chakra-provider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ChakraUIProvider>{children}</ChakraUIProvider>
      </body>
    </html>
  );
}
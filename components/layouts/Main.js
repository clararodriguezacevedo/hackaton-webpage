import React from "react";
import { Container, Flex, Spacer } from "@chakra-ui/react";
import NewNavbar from "../NewNavbar";
import Footer from "../Footer";

export const metadata = {
  title: "HackITBA",
  authors: [{ name: "Juan Pablo Oriana" }],
  description:
    "HackIT-BA es una hackathon de 36hs desde el 28 al 30 marzo, enmarcada en 3 categorías principales: Salud, Sustentabilidad y Educacion.",
  openGraph: {
    type: "website",
    url: "https://hackitba.com.ar",
    title: "HackIT-BA! by Computer Society ITBA, IEEE Student Chapter",
    description:
      "HackIT-BA es una hackathon de 36hs desde el 28 al 30 marzo, enmarcada en 3 categorías principales: Salud, Sustentabilidad y Educacion.",
    images: [
      {
        url: "https://hackitba.vercel.app/images/newFlyer.jpeg",
        alt: "HackITBA Flyer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "HackIT-BA! by Computer Society ITBA, IEEE Student Chapter",
    description:
      "HackIT-BA es una hackathon de 36hs desde el 28 al 30 marzo, enmarcada en 3 categorías principales: Salud, Sustentabilidad y Educacion.",
    images: ["https://hackitba.vercel.app/images/newFlyer.jpeg"],
  },
  metadataBase: new URL("https://hackitba.com.ar"),
};

const Main = ({ children }) => {
  return (
    // Es feo usar vh, pero con 100% o full no funciona
    <Flex as="main" overflow="hidden" direction="column" minH="100vh">
      <NewNavbar />
      <Container maxW="full" paddingX={0} pt={16}>
        { children }
      </Container>
      <Spacer />
      {/* Por que no funciona el spacer!!! */}
      <Footer />
    </Flex>
  );
};

export default Main;


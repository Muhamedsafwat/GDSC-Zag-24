import { Container, Flex } from "@chakra-ui/react";
import { useState } from "react";

import { Header, PhotoGallery, DeatailsSection, Carousel } from "../components";

function App() {
  const [cartAmount, setCartAmount] = useState(0);

  return (
    <Container p={0} maxW="1440px">
      <Header cartAmount={cartAmount} setCartAmount={setCartAmount} />
      <Flex
        direction={{ base: "column", lg: "row" }}
        minH="90vh"
        justify="center"
        align="center"
        gap={{ base: 0, lg: "4rem" }}
        as="main"
      >
        <Carousel />
        <PhotoGallery />
        <DeatailsSection setCartAmount={setCartAmount} />
      </Flex>
    </Container>
  );
}

export default App;

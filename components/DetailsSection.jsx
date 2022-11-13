import React, { useState } from "react";

import {
  Flex,
  Text,
  Heading,
  Box,
  HStack,
  IconButton,
  Image,
  Button,
} from "@chakra-ui/react";

const DetailsSection = ({ setCartAmount }) => {
  //cart buttons functionality
  const [amount, setAmount] = useState(0);

  const increaseAmount = () => {
    setAmount((amount) => amount + 1);
  };
  const decreaseAmount = () => {
    setAmount((amount) => amount - 1);
  };

  const submit = () => {
    setCartAmount(amount);
    setAmount(0);
  };
  return (
    <Flex
      p={5}
      gap={3}
      flexDir="column"
      alignItems="flex-start"
      w={{ base: "full", lg: "40%" }}
      as="section"
    >
      <Heading
        letterSpacing={2}
        color="orange"
        size="sm"
        textTransform="uppercase"
      >
        sneaker company
      </Heading>
      <Heading size="2xl" textTransform="capitalize">
        fall limited edition sneakers
      </Heading>
      <Text my={4} fontSize="lg" color="gray">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather can offer.
      </Text>
      <HStack spacing={5} align="center">
        <Heading size="lg">$125.00</Heading>
        <Box bg="orange.100" p={1} rounded="md">
          <Text color="orange" fontWeight="bold" fontSize="sm">
            50%
          </Text>
        </Box>
      </HStack>
      <Text as="del" color="gray">
        $250.00
      </Text>
      {/* Cart buttons */}
      <Flex w="full" mt={5} gap={5}>
        <HStack
          maxW="10rem"
          flexBasis="35%"
          rounded="lg"
          overflow="hidden"
          spacing={0}
        >
          <IconButton
            flexBasis="35%"
            size="lg"
            disabled={!amount}
            onClick={decreaseAmount}
            rounded="none"
            icon={<Image src="./images/icon-minus.svg" />}
          />
          <Flex
            h="full"
            align="center"
            justify="center"
            flexBasis="30%"
            bg="gray.100"
            cursor="default"
          >
            <Text fontWeight="bold">{amount}</Text>
          </Flex>
          <IconButton
            flexBasis="35%"
            size="lg"
            disabled={amount == 9}
            onClick={increaseAmount}
            rounded="none"
            icon={<Image src="./images/icon-plus.svg" />}
          />
        </HStack>
        <Button
          disabled={!amount}
          onClick={submit}
          flexGrow={1}
          size="lg"
          colorScheme="orange"
        >
          <Image mr={4} src="./images/icon-cart.svg" /> Add to cart
        </Button>
      </Flex>
    </Flex>
  );
};

export default DetailsSection;

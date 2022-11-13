import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  Image,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Text,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Links = ["Collections", "Men", "Women", "About", "Contact"];

const NavLink = ({ children }) => (
  <Flex
    position="relative"
    bottom="-2px"
    h="full"
    align="center"
    justify="center"
    color="gray.500"
    _hover={{
      textDecoration: "none",
      color: "black",
      borderBottomColor: "orange",
      borderBottomWidth: 2,
    }}
  >
    <Link
      _hover={{
        textDecoration: "none",
      }}
      px={2}
      href={"#"}
    >
      {children}
    </Link>
  </Flex>
);

export default function Header({ cartAmount, setCartAmount }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const clearCart = () => setCartAmount(0);

  return (
    <>
      <Box
        position="relative"
        zIndex={99}
        as="header"
        h={90}
        borderBottomColor="gray.200"
        borderBottomWidth={2}
      >
        <Flex
          px={{ base: 3, lg: 4 }}
          zIndex={99}
          h="full"
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack h="full" spacing={8} alignItems={"center"}>
            <Image src="./images/logo.svg" />
            <HStack
              h="full"
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <Popover>
              <PopoverTrigger>
                <IconButton
                  bg="transparent"
                  mr={5}
                  icon={<Image src="./images/icon-cart-header.svg" />}
                />
              </PopoverTrigger>
              <PopoverContent minW="20rem" w="max-content">
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>Cart</PopoverHeader>
                <PopoverBody p={5}>
                  {cartAmount ? (
                    <>
                      <HStack>
                        <Image
                          rounded="md"
                          w="3.5rem"
                          src="./images/image-product-1-thumbnail.jpg"
                        />
                        <Box>
                          <Text color="gray">
                            Fall Limited Edition Sneakers
                          </Text>
                          <Flex>
                            <Text color="gray">$125 x{cartAmount}</Text>
                            <Text ml={3} fontWeight="bold">
                              ${125 * cartAmount}
                            </Text>
                          </Flex>
                        </Box>
                        <IconButton
                          onClick={clearCart}
                          bg="transparent"
                          icon={<Image src="./images/icon-delete.svg" />}
                        />
                      </HStack>
                      <Button mt={6} colorScheme="orange" w="full">
                        Checkout
                      </Button>
                    </>
                  ) : (
                    <Text py="3rem" textAlign="center">
                      Your cart is empty!
                    </Text>
                  )}
                </PopoverBody>
              </PopoverContent>
            </Popover>

            <Avatar
              borderWidth={2}
              borderColor="orange"
              src={"./images/image-avatar.png"}
            />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box bg="white" zIndex={99} pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}

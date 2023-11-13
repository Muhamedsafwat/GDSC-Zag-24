import React, { useState } from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Image,
  VStack,
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";

const thumbnails = [
  "image-product-1-thumbnail.jpg",
  "image-product-2-thumbnail.jpg",
  "image-product-3-thumbnail.jpg",
  "image-product-4-thumbnail.jpg",
];

const images = [
  "image-product-1.jpg",
  "image-product-2.jpg",
  "image-product-3.jpg",
  "image-product-4.jpg",
];

const PhotoGallery = () => {
  //photos modal functionality
  const [selectedImg, setSelectedImg] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box as="section" display={{ base: "none", lg: "block" }} w="35%">
      <Tabs defaultIndex={selectedImg} variant="unstyled">
        <VStack maxH="full">
          <TabPanels>
            {images.map((img, index) => (
              <TabPanel key={index}>
                <Image onClick={onOpen} rounded="xl" src={`./images/${img}`} />
              </TabPanel>
            ))}
          </TabPanels>
          <TabList>
            {thumbnails.map((img, index) => (
              <Tab
                onClick={() => setSelectedImg(index)}
                boxSizing="border-box"
                overflow="hidden"
                rounded="xl"
                mx={5}
                p={0}
                _selected={{
                  opacity: ".4",
                  shadow: "lg",
                }}
                key={index}
              >
                <Image rounded="xl" src={`./images/${img}`} />
              </Tab>
            ))}
          </TabList>
        </VStack>
      </Tabs>
      {/* photos modal */}
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        size="xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent shadow="none" bg="transparent">
          <ModalBody>
            <Tabs defaultIndex={selectedImg} variant="unstyled">
              <VStack maxH="full">
                <TabPanels>
                  {images.map((img, index) => (
                    <TabPanel key={index}>
                      <Image
                        onClick={onOpen}
                        rounded="xl"
                        src={`./images/${img}`}
                      />
                    </TabPanel>
                  ))}
                </TabPanels>
                <TabList>
                  {thumbnails.map((img, index) => (
                    <Tab
                      boxSizing="border-box"
                      overflow="hidden"
                      rounded="xl"
                      mx={5}
                      p={0}
                      _selected={{
                        opacity: ".4",
                        shadow: "lg",
                      }}
                      key={index}
                    >
                      <Image rounded="xl" src={`./images/${img}`} />
                    </Tab>
                  ))}
                </TabList>
              </VStack>
            </Tabs>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default PhotoGallery;

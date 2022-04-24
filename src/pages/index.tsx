import { Box, Flex } from "@chakra-ui/react";
import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";

export default function Home() {
  return (
    <Flex direction="column" h="100vh">
      <Header/>
      <Box h={368.21}>
        <Banner />
      </Box>
      <Flex
       w={1160}
       h={145}
       mt={80.74}
       mx="auto"
       justifyContent="space-between"
       >
        <TravelType srcImage="/images/cocktail.svg" text="Vida noturna" />
        <TravelType srcImage="/images/surf.svg" text="praia" />
        <TravelType srcImage="/images/building.svg" text="moderno" />
        <TravelType srcImage="/images/museum.svg" text="clássico" />
        <TravelType srcImage="/images/earth.svg" text="e mais..." />
      </Flex>
    </Flex>
  ) 
}

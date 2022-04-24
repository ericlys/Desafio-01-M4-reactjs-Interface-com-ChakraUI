import { Box, Divider, Flex, Text } from "@chakra-ui/react";
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
        flexDirection="column"
        w="100%"
        maxWidth={1160}
        mx="auto"
      >
      <Flex
        flex="1"
        h={145}
        mt={80.74}
        justifyContent="space-between"
       >
        <TravelType srcImage="/images/cocktail.svg" text="Vida noturna" />
        <TravelType srcImage="/images/surf.svg" text="praia" />
        <TravelType srcImage="/images/building.svg" text="moderno" />
        <TravelType srcImage="/images/museum.svg" text="clássico" />
        <TravelType srcImage="/images/earth.svg" text="e mais..." />
      </Flex>

      <Divider 
        borderColor="gray.600" 
        border={2}
        w={90}
        mx="auto"
        mt="20"
        mb="3.25rem"
      />

      <Text textAlign="center" fontSize="4xl" fontWeight={500}>
        Vamos nessa?<br/>Então escolha seu continente
      </Text>



      </Flex>

    </Flex>
  ) 
}

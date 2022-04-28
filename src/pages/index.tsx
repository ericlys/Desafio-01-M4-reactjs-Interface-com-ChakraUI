import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import internal from "stream";
import { Banner } from "../components/Banner";
import { Carrousel } from "../components/Carrousel";
import { Header } from "../components/Header";
import { TravelType } from "../components/TravelType";
import { api } from "../services/api";

interface Continent {
  id: number;
  image: string;
  name: string;
  known: string;
}

interface HomeProps {
  continents: Continent[];
}

export default function Home( { continents }: HomeProps) {

  return (
    <Flex direction="column">
      <Header/>
      <Box h={368.21}>
        <Banner amountContinents={continents.length} />
      </Box>

      <Flex
        flexDirection="column"
        w="100%"
        maxWidth={1240}
        mx="auto"
        mt={114}
      >
      <Flex
        flex="1"
        h={145}
        px="10"
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

      <Flex
        flex="1"
        maxWidth={1240}
        maxHeight={480}
        mt="3.25rem"
        mb={10}
      >
        <Carrousel continents={continents} />
      </Flex>


      </Flex>

    </Flex>
  ) 
}

export const getStaticProps: GetStaticProps = async () => {

  const response = await api.get('continents');

  const continents: Continent[] = response.data;

  return{
    revalidate: 60 * 60 * 24,
    props: {
      continents
    }
  }
}

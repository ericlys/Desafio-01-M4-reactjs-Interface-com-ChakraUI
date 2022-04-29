import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { Banner } from "../components/Banner";
import { Carrousel } from "../components/Carrousel";
import { Header } from "../components/Header";
import { TravelTypes } from "../components/TravelTypes";
import { api } from "../services/api";

type Country = {
  id: number,
  name: string,
  flag: string,
  capital: string,
  image: string,
}

interface Continent {
  id: number;
  name: string;
  known: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  carrouselImage: string;
  jumbotronImage: string;
  countries: Country[];
}

interface HomeProps {
  continents: Continent[];
}

export default function Home( { continents }: HomeProps) {

  return (
    <Flex direction="column">
      <Header/>
      <Box maxH={[163, 368.21]}>
        <Banner amountContinents={continents.length} />
      </Box>

      <Flex
        flexDirection="column"
        w="100%"
        maxWidth={1240}
        mx="auto"
        mt={["36px", 114]}
      >
    
      <TravelTypes />

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

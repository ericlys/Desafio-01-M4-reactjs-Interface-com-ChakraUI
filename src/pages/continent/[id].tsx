import { Box, GridItem, HStack, Text, VStack, Grid, SimpleGrid } from "@chakra-ui/react"
import { GetStaticPaths, GetStaticProps } from "next"
import { CityCard } from "../../components/CityCard"
import { Header } from "../../components/Header"
import { Info } from "../../components/Info"
import { api } from "../../services/api"

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

interface ContinentProps {
  continent: Continent;
}

export default function Continent( {continent}: ContinentProps){

  return(
    <Box>
      <Header backHref="/"/>

      <Box
        h="500px"
        maxHeight="500px"
        bgImage={continent.jumbotronImage}
        bgSize="cover"
        bgPos="center"
        position="relative"
      >
        <Text
          color="white"
          fontWeight="semibold"
          fontSize="5xl" 
          pos="absolute"
          bottom="0"
          margin="59px 140px" 
         >{continent.name}</Text>
      </Box>

      <VStack
        spacing={20}
        flexDir="column"
        flex="1"
        w="100%"
        maxW={1160}
        mx="auto"
        mt={20}
        >

        <Grid templateColumns='52% 48%' gap={70}>
          <GridItem>
            <Text 
              fontSize="2xl"
              lineHeight="9"
              align="justify"
              >
              {continent.text}
            </Text>
          </GridItem>
          <GridItem display="flex" alignItems="center">
          <HStack spacing={10}>
            <Info amount={continent.numberOfCountries} text="países"/>
            <Info amount={continent.numberOfLanguages} text="línguas"/>
            <Info amount={continent.countries.length} text="cidades +100" tooltipInfo="Cidades disponiveis"/>
          </HStack>
          </GridItem>
        </Grid>
        
        <Box
          w="100%"
          pb={35}
        >
            <Text 
              as="h2"
              fontWeight="medium"
              fontSize="4xl"
              align="left"
            >
                Cidades +100
            </Text>

            <SimpleGrid 
              mt={10}
              columns={4}
              minW='256px'
              spacingX='45px'
              spacingY='48px'
              >
              { continent.countries && continent.countries.map( country => (
                <Box key={country.id} height='279px'>
                  <CityCard capital={country.capital} cityImage={country.image} flagImage={country.flag} country={country.name}/>
                </Box>
              ))}
            </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  )
}

export const getStaticPaths : GetStaticPaths = () => {
  return {
    paths: [],
    fallback:'blocking'
  }
 }

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const { id } = params;

  const response = await api.get(`continents/${id}`);

  const continent: Continent = response.data;

  return{
    revalidate: 60 * 60 * 24,
    props: {
      continent
    }
  }
}
import { Box, GridItem, Text, Stack, Grid, VStack, SimpleGrid } from "@chakra-ui/react"
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
        h={[150, 300, 500]}
        maxHeight="500px"
        bgImage={continent.jumbotronImage}
        bgSize="cover"
        bgPos="center"
        position="relative"
        display={["flex", "block"]}
        alignItems="center"
        justifyContent="center"
      >
        <Text
          color="white"
          fontWeight="semibold"
          fontSize={["2xl", "5xl"]}
          pos="absolute"
          bottom={["", "0"]}
          margin={["", "59px 140px"]} 
         >{continent.name}</Text>
      </Box>
      
      <Box w="100%" 
        maxW={1160}
        mx="auto"
        px={6}
        mb={[4, 35]}
      >
        <VStack
          spacing={[8, 12, 20]}
          flex="1"
          mx="auto"
          mt={[6, 12, 20]}
        >

          <Grid templateColumns={[,,"52% 48%"]}>
            <GridItem>
              <Text 
                fontSize={["sm", "lg", "2xl"]}
                lineHeight="9"
                align="justify"
                >
                {continent.text}
              </Text>
            </GridItem>
            <GridItem display="flex" alignItems="center" justifyContent={"center"}>
            <Stack direction={["row", ,"column", "row"]} spacing={10} mt={[4,,, 0]}>
              <Info amount={continent.numberOfCountries} text="países"/>
              <Info amount={continent.numberOfLanguages} text="línguas"/>
              <Info amount={continent.countries.length} text="cidades +100" tooltipInfo="Cidades disponiveis"/>
            </Stack>
            </GridItem>
          </Grid>
          
          <Box
            w="100%"
          >
              <Text 
                as="h2"
                fontWeight="medium"
                fontSize={["2xl", "4xl"]}
                align="left"
              >
                  Cidades +100
              </Text>

              <SimpleGrid 
                mt={[5,10]}
                columns={[1, 2, 3, 4]}
                minW='256px'
                spacingX='45px'
                spacingY={["20px","48px"]}
                >
                { continent.countries && continent.countries.map( country => (
                  <Box key={country.id} height='279px' w="100%" maxW={256} mx="auto">
                    <CityCard capital={country.capital} cityImage={country.image} flagImage={country.flag} country={country.name}/>
                  </Box>
                ))}
              </SimpleGrid>
          </Box>
        </VStack>
      </Box>
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
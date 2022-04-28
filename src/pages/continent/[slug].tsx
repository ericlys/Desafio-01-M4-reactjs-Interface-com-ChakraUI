import { Box, Flex, GridItem, HStack, Text, VStack, Grid, SimpleGrid } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { CityCard } from "../../components/CityCard"
import { Header } from "../../components/Header"
import { Info } from "../../components/Info"

export default function Continent(){
  const router = useRouter()
  const { slug } = router.query
  return(
    <Box>
      <Header backHref="/"/>

      <Box
        h="500px"
        maxHeight="500px"
        bgImage="https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=820&q=80"
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
         >{slug}</Text>
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
              A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
            </Text>
          </GridItem>
          <GridItem display="flex" alignItems="center">
          <HStack spacing={10}>
            <Info amount={50} text="países"/>
            <Info amount={60} text="línguas"/>
            <Info amount={27} text="cidades +100" tooltipInfo="veja a lista completa logo abaixo"/>
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
              minChildWidth='256px' 
              spacingX='45px'
              spacingY='48px'
              >
              <Box height='279px'>
                <CityCard/>
              </Box>
              <Box height='279px'>
                <CityCard/>
              </Box>
              <Box height='279px'>
                <CityCard/>
              </Box>
              <Box height='279px'>
                <CityCard/>
              </Box>
              <Box height='279px'>
                <CityCard/>
              </Box>
              <Box height='279px'>
                <CityCard/>
              </Box>
            </SimpleGrid>
        </Box>
      </VStack>
    </Box>
  )
}
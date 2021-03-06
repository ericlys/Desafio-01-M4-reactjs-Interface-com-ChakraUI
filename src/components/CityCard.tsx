import { Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  country: string;
  capital: string;
  cityImage: string;
  flagImage: string;
}

export function CityCard({ country, capital, cityImage, flagImage }: CityCardProps){
  return(
    <Grid
      h="100%"
      templateRows="62% 38%"
      templateColumns="repeat(2, 1fr)"
      bg="white"
      border="1px solid rgba(255, 186, 8, 0.5);"
      borderRadius="base"
    >
      <GridItem
        rowSpan={1}
        colSpan={2}
        borderRadius={"4px 4px 0 0"}
        bgImage={cityImage}
        bgSize={"cover"}
      />
      <GridItem 
        rowSpan={1} 
        colSpan={1}
        borderRadius={"0 0 0 4px"} 
        display="flex"
        flexDir="column"
        justifyContent="center"
        paddingLeft={6}
      >
        <Stack spacing={3}>
          <Heading
            fontFamily="Barlow"
            fontSize="xl"
            fontWeight="semibold"
            >
              {capital}
          </Heading>
          <Text
            fontFamily="Barlow"
            fontSize="md"
            fontWeight="semibold"
            color="dark.200"
            >
            {country}
          </Text>
        </Stack>
      </GridItem>
      <GridItem 
        rowSpan={1} 
        colSpan={1} 
        borderRadius={"0 0 4px 0"}
        display="flex"
        justifyContent="right"
        alignItems="center"
        paddingRight={6}
      >
        <Image 
          src={flagImage}
          alt="flat" 
          w="30px"
          h="30px"
          borderRadius="15px"
        />
      </GridItem>
    </Grid>
  )
}
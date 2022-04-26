import { Grid, GridItem, Heading, Image, Stack, Text } from "@chakra-ui/react";

interface CityCardProps {
  country?: string;
  capital?: string;
  cityImage?: string;
  flagImage?: string;
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
        bgImage="https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80"
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
              Roma
          </Heading>
          <Text
            fontFamily="Barlow"
            fontSize="md"
            fontWeight="semibold"
            color="dark.200"
            >
            Itália
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
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/800px-Flag_of_Italy.svg.png" 
          alt="flat" 
          w="30px"
          h="30px"
          borderRadius="15px"
        />
      </GridItem>
    </Grid>
  )
}
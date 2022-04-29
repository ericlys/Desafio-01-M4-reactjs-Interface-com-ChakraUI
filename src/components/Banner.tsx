import { Box, Image, SimpleGrid, Text, useBreakpointValue } from "@chakra-ui/react";

interface BannerProps {
  amountContinents?: number;
}

export function Banner( { amountContinents = 5 }: BannerProps){

  const isWideVersion = useBreakpointValue({
    base: false,
    md: true,
  })

  return(
    <Box 
      h={[163,335]}
      bgImage="https://images.unsplash.com/photo-1495344517868-8ebaf0a2044a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=653&q=80"
      bgRepeat="no-repeat"
      bgSize={["auto", "cover"]}
      bgPos={[ "0% 34%", "0% 5%","0% 24.4%"]}
      >
        {!isWideVersion && (
          <Box 
            display="flex"
            justifyContent="center"
            flexDir="column"
            h="100%"
            px="4"
            mx="auto"
          >
            <Text 
              color="white" 
              fontSize="xl"
              fontWeight="500" 
              maxWidth={238}
            >
              {amountContinents} Continentes,<br/> infinitas possibilidades.
            </Text>
            <Text 
              mt={2}
              fontSize="sm"
              color="light.500"
              maxWidth={525}
            >
              Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
            </Text>
          </Box>
        )}

      { isWideVersion && (
            <SimpleGrid h={368.21} columns={2}>
              <Box 
                display="flex"
                justifyContent="center"
                flexDir="column"
                px="2"
                mx="auto"
              >
                <Text 
                  color="white" 
                  fontSize="4xl"
                  fontWeight="500" 
                  maxWidth={426}
                >
                  {amountContinents} Continentes,<br/> infinitas possibilidades.
                </Text>
                <Text 
                  mt={"20px"}
                  fontSize="20px"
                  color="light.500"
                  maxWidth={525}
                >
                  Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
              </Box>
              <Box 
                display="flex"
                justifyContent="end"
                alignItems="end"
                mx="auto"
              >
                <Image
                h={270}
                src="images/airplane.svg" 
                alt="airplane"
                />
              </Box>
            </SimpleGrid>
          )
      }


    </Box>
  )
}
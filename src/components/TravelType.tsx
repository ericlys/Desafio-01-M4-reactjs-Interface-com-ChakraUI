import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";

interface TravelTypeProps{
  srcImage: string;
  text: string;
}

export function TravelType({ srcImage, text }: TravelTypeProps) {
  const isWideVersion = useBreakpointValue({
    base: false,
    sm: true,
  })

  return(
      <Flex 
        flexDirection={["row", "column"]}
        justify="center"
        alignItems="center"
        pt={[0, 2, 0]}
        >
        {isWideVersion ? <Image maxHeight={[12, 16, 85]} src={srcImage} alt="" /> : <Text color="yellow.400" fontSize="4xl" mr="2">•</Text>}
        <Text 
          mt={["0","2", "6"]}
          fontWeight="600" 
          fontSize={["md", "xl","2xl"]}
         >
          {text}
        </Text>
      </Flex>
  )
}
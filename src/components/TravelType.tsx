import { Flex, Image, Text } from "@chakra-ui/react";

interface TravelTypeProps{
  srcImage: string;
  text: string;
}

export function TravelType({ srcImage, text }: TravelTypeProps) {
  return(
    <Flex 
      flexDirection="column"
      maxH={145}
      alignItems="center"
    >
      <Image maxHeight={85} src={srcImage} alt="" />
      <Text 
        mt="6" 
        fontWeight="600" 
        fontSize="2xl"
      >
        {text}
      </Text>
    </Flex>
  )
}
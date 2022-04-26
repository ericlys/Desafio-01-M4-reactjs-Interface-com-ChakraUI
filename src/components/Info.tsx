import { Flex, Text } from "@chakra-ui/react";

interface InfoProps{
  amount: number;
  text: string;
}

export function Info({ amount, text }: InfoProps){
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      lineHeight={"10"}
    >
      <Text
        fontWeight="semibold"
        fontSize={48}
        color="yellow.300"
      >
        {amount}
      </Text>
      <Text
        fontWeight="semibold"
        fontSize={24}
      >
        {text}
      </Text>
    </Flex>
  )
}
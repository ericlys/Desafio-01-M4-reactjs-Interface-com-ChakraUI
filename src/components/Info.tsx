import {  Flex, HStack, Icon, Text, Tooltip} from "@chakra-ui/react";
import { RiInformationLine } from "react-icons/ri";

interface InfoProps{
  amount: number;
  text: string;
  tooltipInfo?: string;
}

export function Info({ amount, text, tooltipInfo }: InfoProps){
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
      <HStack spacing="5px">
        <Text
          fontWeight="semibold"
          fontSize={24}
        >
          {text}
        </Text>

        { !!tooltipInfo && (
          <Tooltip label={tooltipInfo}>
            <span>
             <Icon cursor="pointer" color="rgba(153, 153, 153, 0.5);" as={RiInformationLine} fontSize="md" />
            </span>
         </Tooltip>
        )}

      </HStack>
    </Flex>
  )
}
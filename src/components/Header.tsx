import { Box, Flex, Icon, Link as ChakraLink, SimpleGrid } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'
import Link from "next/link";

import { RiArrowLeftSLine } from 'react-icons/ri';

interface HeaderProps {
  backHref?: string;
}

export function Header({ backHref }: HeaderProps){
  return(
    <Flex
      as="header"
      w="100%"
      maxWidth={1440}
      h={["12", "24"]}
      mx="auto"
      px={["4","6"]}
    >
      <SimpleGrid flex="1" columns={3}>
      <Box
        display="flex"
        alignItems="center"
        ml={[ 0, 0, 0,"172"]}
      >
      {!!backHref && (
        <Link href={backHref} passHref>
          <ChakraLink display="flex" alignItems="center">
            <Icon as={RiArrowLeftSLine}  fontSize={["16","32"]} />
          </ChakraLink>
        </Link>
      )}
      </Box>
      <Box
       justifyItems={"center"}
       display="flex"
       alignItems="center"
       justifyContent="center"
      >
        <Image w={[81, 184]} h="auto"src="/images/logo.svg" alt="logo"/>
      </Box>
      </SimpleGrid>
    </Flex>
  )
}
import { SimpleGrid } from "@chakra-ui/react";
import { TravelType } from "./TravelType";

export function TravelTypes() {

  return(
    <SimpleGrid minChildWidth='158px' px={4} column={2} >
      <TravelType srcImage="/images/cocktail.svg" text="Vida noturna" />
      <TravelType srcImage="/images/surf.svg" text="praia" />
      <TravelType srcImage="/images/building.svg" text="moderno" />
      <TravelType srcImage="/images/museum.svg" text="clássico" />
      <TravelType srcImage="/images/earth.svg" text="e mais..." />
    </SimpleGrid >
  )
}
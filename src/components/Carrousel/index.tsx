import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper , SwiperSlide } from 'swiper/react';

import { Flex, Text } from '@chakra-ui/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from './carrousel.module.scss';
import Link from "next/link";

interface Continent {
  id: number;
  name: string;
  known: string;
  carrouselImage: string;
}

interface CarroselProps {
  continents: Continent[]
}

export function Carrousel({ continents }: CarroselProps){
  return(
    <Swiper 
      autoplay={{
        delay: 60*60*2,
        disableOnInteraction: false,
      }}
      pagination={true} 
      navigation={true}
      modules={[Autoplay, Navigation, Pagination]}
      className={styles.container}>

      {continents.map(continent => (
        <SwiperSlide key={continent.id}>
          <Link href={`/continent/${continent.id}`} passHref>
            <Flex
              bgImage={continent.carrouselImage}
              bgSize="cover"
              w="100%" 
              h="100%"
              cursor="pointer"
            >
              <Flex
                bg="#1C140159"
                flex="1"
                flexDir="column"
                alignItems="center"
                justifyContent="center"
                >
                <Text
                  color="white" 
                  fontSize="5xl"
                  fontWeight="bold"
                  >
                  {continent.name}
                </Text>              
                <Text
                  color="white" 
                  fontSize="2xl"
                  fontWeight="bold"
                  >
                  {continent.known}
                </Text>              
              </Flex>
            </Flex>
          </Link>
        </SwiperSlide>
      ))}     
  
    </Swiper>
  )
}
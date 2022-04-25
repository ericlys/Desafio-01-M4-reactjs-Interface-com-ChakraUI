import { Navigation, Pagination } from "swiper";
import { Swiper , SwiperSlide } from 'swiper/react';

import { Flex, Text } from '@chakra-ui/react';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


import styles from './carrouseu.module.scss';

export function Carrouseu(){
  return(
    <Swiper 
      pagination={true} 
      navigation={true}
      modules={[Navigation, Pagination]}
      className={styles.container}>
      <SwiperSlide>
        <Flex
          bgImage={"https://images.unsplash.com/photo-1529180184525-78f99adb8e98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
          bgSize="cover"
          w="100%" 
          h="100%"
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
              Europa
            </Text>              
            <Text
              color="white" 
              fontSize="2xl"
              fontWeight="bold"
            >
              O continente mais antigo.
            </Text>              
          </Flex>
        </Flex>
      </SwiperSlide>
      
      <SwiperSlide>
        <Flex
          bgImage={"https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
          bgSize="cover"
          w="100%" 
          h="100%"
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
              América do Sul
            </Text>              
            <Text
              color="white" 
              fontSize="2xl"
              fontWeight="bold"
            >
              O Novo Mundo.
            </Text>              
          </Flex>
        </Flex>
      </SwiperSlide>
    </Swiper>
  )
}
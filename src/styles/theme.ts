import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    light: {
      100: "#F5F8FA"
    },
    gray: {
      600: "#47585B"
    }
  },
  styles: {
    global: {
      body:{
        bg: 'light.100',
        color: 'gray.600'
      }
    }
  }
})
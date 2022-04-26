import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors:{
    light: {
      100: "#F5F8FA",
      500: "#DADADA"
    },
    gray: {
      600: "#47585B"
    },
    yellow: {
      300: "#FFBA08"
    }
  },
  fonts:{
    heading: 'Poppins',
    body: 'Poppins',
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
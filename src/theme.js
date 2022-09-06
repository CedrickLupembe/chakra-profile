
import { extendTheme } from '@chakra-ui/react'
import '@fontsource/heebo'



const breakpoints = {
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1440px',
}

const theme = extendTheme({
  fonts: {
    body: `'Heebo', sans-serif`,
  },
  breakpoints
})

export default theme
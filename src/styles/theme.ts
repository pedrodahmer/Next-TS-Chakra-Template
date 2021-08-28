import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    colors: {
        pink: {
            "500": '#EA5C6B'
        },

        fonts: {
            heading: 'Roboto',
            body: 'Roboto'
        },

        styles: {
            global: {
                body: {
                    bg: 'white',
                    color: 'black'
                }
            }
        }
    }
})
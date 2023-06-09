'use client'

import { ThemeProvider } from '@mui/material/styles'
import theme from '../src/theme'
import './globals.css'
import {ToastyProvider} from '../src/contexts/Toasty'


export const metadata = {
  title: 'Next JS',
  description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
  return (
    
    <ThemeProvider theme={theme}>
       

        <html lang="pt-br">

        <title>{metadata.title}</title>
        <body>
          <ToastyProvider>
            {children}
          </ToastyProvider>
        </body>
        </html>
      
    </ThemeProvider>
    
  )
}

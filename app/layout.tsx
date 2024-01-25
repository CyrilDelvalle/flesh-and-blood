import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
// import './globals.css'
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navigation from "./components/NavBar";


const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>
        <Theme appearance='dark'>
          <Navigation />
          {children}
        </Theme>
      </body>
    </html>
  )
}

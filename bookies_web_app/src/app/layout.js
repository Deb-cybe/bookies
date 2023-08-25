import Nav from '@/components/nav/nav';
import { Inter } from 'next/font/google';
import './globals.css';
import Footer from '@/components/footer/footer';
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

    <>
        <Nav/>
    <body className={inter.className}>
        {/* <Nav/> */}
        {children}
        </body>
      <Footer/>
    </>
  )
}

import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar'

const space_grotesk = Space_Grotesk({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Pierre P Baptiste - Front End Developer | Portfolio',
  description: 'Passionate Front End Developer with expertise in web development. Explore my portfolio for projects and skills in JavaScript, React, and more.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth'>
      <body className={space_grotesk.className}>
        <div className='flex flex-col items-center'>
          <Navbar />
        </div>

        {children}
      </body>
    </html>
  )
}

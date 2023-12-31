import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from './shared/NavBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'My Movie Database',
  description: 'IMDB like clone built with next js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className + " bg-zinc-900"}>
        <NavBar />
        {children}
        </body>
    </html>
  )
}

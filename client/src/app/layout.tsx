import 'bootstrap/dist/css/bootstrap.css'
import './globals.scss'
import { Inter } from 'next/font/google'
import SearchBar from './shared/components/SearchBar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Challenge MeLi',
  description: 'Proyecto para challenge Front-End de Mercado Libre',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <SearchBar />
        {children}
      </body>
    </html>
  )
}

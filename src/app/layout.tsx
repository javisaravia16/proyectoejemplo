import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'
import { CartProvider } from '@/context/CartContext'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import CartDrawer from '@/components/CartDrawer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Momo Madroña — Boutique de Moda Femenina',
  description: 'Descubre nuestra colección de moda femenina. Piezas únicas que combinan elegancia, calidad y femineidad.',
  keywords: 'moda femenina, boutique, vestidos, blusas, accesorios, momo madrona',
  openGraph: {
    title: 'Momo Madroña',
    description: 'Boutique de moda femenina — Elegancia y sofisticación',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${playfair.variable} ${inter.variable}`}>
      <body>
        <CartProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
        </CartProvider>
      </body>
    </html>
  )
}

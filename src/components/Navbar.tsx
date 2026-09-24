'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/shop', label: 'Tienda' },
  { href: '/shop?category=conjuntos', label: 'Conjuntos' },
  { href: '/shop?category=accesorios', label: 'Accesorios' },
  { href: '/sobre-mi', label: 'Sobre Mí' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { totalItems, openCart } = useCart()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-off-white/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(0,0,0,0.06)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Left nav links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors duration-200"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Center logo */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2">
              <div
                className={`relative w-36 h-[72px] transition-all duration-500 ${
                  !scrolled ? 'bg-white/95' : 'bg-off-white'
                }`}
              >
                <Image
                  src="/images/logo.jpg"
                  alt="Momo Madroña"
                  fill
                  className="object-contain"
                  priority
                  sizes="144px"
                />
              </div>
            </Link>

            {/* Right nav links & icons */}
            <div className="flex items-center gap-8">
              <nav className="hidden lg:flex items-center gap-8">
                {navLinks.slice(2).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs font-sans font-medium tracking-[0.15em] uppercase text-charcoal/70 hover:text-charcoal transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="flex items-center gap-4">
                <button
                  className="p-1.5 text-charcoal/60 hover:text-charcoal transition-colors duration-200"
                  aria-label="Buscar"
                >
                  <Search size={18} strokeWidth={1.5} />
                </button>

                <button
                  onClick={openCart}
                  className="relative p-1.5 text-charcoal/60 hover:text-charcoal transition-colors duration-200"
                  aria-label="Carrito"
                >
                  <ShoppingBag size={18} strokeWidth={1.5} />
                  {totalItems > 0 && (
                    <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-charcoal text-off-white text-[9px] font-medium rounded-full flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </button>

                <button
                  onClick={() => setMobileOpen(true)}
                  className="lg:hidden p-1.5 text-charcoal/60 hover:text-charcoal"
                  aria-label="Menú"
                >
                  <Menu size={20} strokeWidth={1.5} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-charcoal/40 z-50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-off-white z-50 flex flex-col"
            >
              <div className="flex items-center justify-between p-6 border-b border-sand">
                <span className="font-serif text-lg tracking-wider">Menú</span>
                <button onClick={() => setMobileOpen(false)} className="p-1 text-charcoal/60">
                  <X size={20} strokeWidth={1.5} />
                </button>
              </div>
              <nav className="flex-1 flex flex-col gap-0 p-6">
                {navLinks.map((link, i) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="py-4 text-sm font-sans tracking-[0.12em] uppercase text-charcoal/70 hover:text-charcoal border-b border-sand/50 transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

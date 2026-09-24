'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end pb-16 lg:pb-24 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=1920&q=85"
          alt="Momo Madroña colección"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
          className="max-w-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-off-white/70 text-xs font-sans tracking-[0.3em] uppercase mb-4"
          >
            Nueva Colección — Otoño 2025
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="font-serif text-5xl lg:text-7xl text-off-white leading-[1.05] mb-6"
          >
            La elegancia<br />
            <em className="not-italic text-gold">es un estado</em><br />
            del alma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-off-white/80 text-base font-light leading-relaxed mb-10 max-w-sm"
          >
            Piezas cuidadosamente seleccionadas que celebran la femineidad contemporánea.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="flex items-center gap-5"
          >
            <Link
              href="/shop"
              className="group inline-flex items-center gap-3 bg-off-white text-charcoal px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold hover:text-off-white transition-colors duration-400"
            >
              Descubrir Colección
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/shop?category=novedades"
              className="text-off-white/80 text-xs tracking-[0.15em] underline underline-offset-4 hover:text-off-white transition-colors"
            >
              Ver novedades
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 right-10 hidden lg:flex flex-col items-center gap-3"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-off-white/40"
        />
        <span className="text-off-white/50 text-[9px] tracking-[0.3em] uppercase rotate-90 origin-center">Scroll</span>
      </motion.div>
    </section>
  )
}

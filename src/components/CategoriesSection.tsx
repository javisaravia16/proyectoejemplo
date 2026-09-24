'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { categories } from '@/lib/products'
import { ArrowRight } from 'lucide-react'

export default function CategoriesSection() {
  return (
    <section className="bg-cream py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-20">
          <p className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3">Explorar por</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">Categorías</h2>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Link href={cat.href} className="group block relative aspect-[4/5] overflow-hidden rounded-sm">
                {/* Image */}
                <Image
                  src={cat.image}
                  alt={cat.name}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-transparent to-transparent" />

                {/* Text */}
                <div className="absolute bottom-0 left-0 right-0 p-7">
                  <h3 className="font-serif text-2xl text-off-white mb-1">{cat.name}</h3>
                  <p className="text-off-white/70 text-xs tracking-wider mb-4">{cat.description}</p>
                  <span className="inline-flex items-center gap-2 text-off-white/80 text-xs tracking-[0.15em] uppercase border-b border-off-white/30 pb-0.5 group-hover:text-gold group-hover:border-gold transition-colors duration-300">
                    Explorar
                    <ArrowRight size={11} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

const pillars = [
  { title: 'Ropa de moda', desc: 'Piezas únicas y actuales seleccionadas con mimo y criterio.' },
  { title: 'Complementos artesanales', desc: 'Bisutería y accesorios hechos a mano con mucho encanto.' },
  { title: 'Pantallas para lámparas', desc: 'Creaciones únicas y artesanales que dan luz y personalidad a tu hogar.' },
]

export default function BrandBanner() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Brand quote — real description */}
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-2xl lg:text-3xl text-charcoal leading-relaxed italic"
        >
          "Ropa de moda, complementos, bisutería y pantallas para lámparas hechas a mano con mucho encanto."
        </motion.blockquote>
        <p className="mt-4 text-xs text-warm-gray tracking-[0.2em]">— Momo Madroña</p>
      </div>

      {/* Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-sand pt-16">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <div className="w-8 h-px bg-gold mx-auto mb-5" />
            <h3 className="font-serif text-lg text-charcoal mb-2">{p.title}</h3>
            <p className="text-sm text-warm-gray leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Store info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-20 bg-cream rounded-sm p-8 lg:p-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
      >
        <div className="flex flex-col items-center gap-3">
          <MapPin size={20} strokeWidth={1.5} className="text-gold" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Dónde encontrarnos</p>
            <p className="text-sm text-charcoal font-medium">C. Regina, 16</p>
            <p className="text-sm text-warm-gray">Casco Antiguo, 41003 Sevilla</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Clock size={20} strokeWidth={1.5} className="text-gold" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Horario</p>
            <p className="text-sm text-charcoal font-medium">Mañanas: hasta las 13:45</p>
            <p className="text-sm text-warm-gray">Tardes: desde las 17:45</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Phone size={20} strokeWidth={1.5} className="text-gold" />
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-warm-gray mb-1">Teléfono</p>
            <a
              href="tel:656951406"
              className="text-sm text-charcoal font-medium hover:text-gold transition-colors"
            >
              656 95 14 06
            </a>
            <p className="text-[10px] text-warm-gray/60 mt-1">⭐ 5,0 en Google · 6 reseñas</p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

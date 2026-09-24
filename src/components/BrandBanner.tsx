'use client'

import { motion } from 'framer-motion'

const pillars = [
  { title: 'Calidad Artesanal', desc: 'Cada pieza seleccionada con mimo y atención al detalle.' },
  { title: 'Envío Gratuito', desc: 'En pedidos superiores a 100€ a toda la península.' },
  { title: 'Devolución Fácil', desc: '30 días para cambios y devoluciones sin complicaciones.' },
]

export default function BrandBanner() {
  return (
    <section className="py-20 lg:py-28 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Quote */}
      <div className="text-center mb-20 max-w-2xl mx-auto">
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="font-serif text-2xl lg:text-3xl text-charcoal leading-relaxed italic"
        >
          "La moda pasa, el estilo permanece."
        </motion.blockquote>
        <p className="mt-4 text-xs text-warm-gray tracking-[0.2em]">— Coco Chanel</p>
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
    </section>
  )
}

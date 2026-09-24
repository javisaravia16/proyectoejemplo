'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Instagram, Phone, Heart } from 'lucide-react'

const values = [
  {
    title: 'Pasión por la moda',
    desc: 'Más de dos décadas rodeada de tejidos, colores y tendencias han convertido la moda en el lenguaje de Mariola.',
  },
  {
    title: 'Piezas con alma',
    desc: 'Cada prenda que entra en Momo Madroña ha sido elegida a mano, buscando calidad, originalidad y ese "algo especial" que la hace única.',
  },
  {
    title: 'Accesorios artesanales',
    desc: 'Bolsos, collares y complementos hechos a mano con materiales seleccionados y mucho cariño — pequeñas obras de arte cotidianas.',
  },
]

export default function SobreMiPage() {
  return (
    <div className="pt-20 min-h-screen">
      {/* Hero header */}
      <div className="bg-cream py-16 px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3"
        >
          La persona detrás de la marca
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-4xl lg:text-6xl text-charcoal"
        >
          Sobre Mí
        </motion.h1>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative aspect-[4/5] bg-beige rounded-sm overflow-hidden">
              <Image
                src="/images/logo.jpg"
                alt="Mariola, fundadora de Momo Madroña"
                fill
                className="object-contain p-10"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-sand rounded-sm -z-10" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="w-8 h-px bg-gold mb-8" />

            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight mb-2">
              Hola, soy Mariola
            </h2>
            <p className="text-sm text-warm-gray tracking-wider mb-8">Fundadora & alma de Momo Madroña</p>

            <div className="space-y-5 text-[15px] text-warm-gray leading-relaxed">
              <p>
                Con 56 años y una vida entera enamorada de la moda, decidí hacer realidad el sueño que llevaba años
                guardando: abrir mi propio espacio donde cada mujer pudiera encontrar prendas tan especiales como ella.
                Así nació <span className="text-charcoal font-medium">Momo Madroña</span>.
              </p>
              <p>
                Para mí, la moda siempre ha sido mucho más que ropa. Es una forma de expresión, de confianza, de
                contarte al mundo quién eres sin decir una sola palabra. Por eso cuido con tanto mimo cada pieza que
                entra en la tienda: busco colores, texturas y diseños que tengan personalidad, que no se vean en
                cualquier sitio.
              </p>
              <p>
                Además de ropa, en Momo Madroña encontrarás accesorios y complementos hechos a mano — bolsos,
                collares, pendientes — porque creo que son los pequeños detalles los que terminan de construir un look
                verdaderamente especial.
              </p>
              <p className="text-charcoal italic font-serif text-lg leading-snug">
                "Mi mayor satisfacción es cuando una clienta sale por la puerta sintiéndose guapa y feliz.
                Ese momento lo es todo."
              </p>
            </div>

            {/* Contact */}
            <div className="mt-10 pt-8 border-t border-sand flex flex-col gap-3">
              <p className="text-xs text-warm-gray tracking-[0.2em] uppercase mb-1">Encuéntrame aquí</p>
              <a
                href="https://www.instagram.com/momomadrona/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-charcoal transition-colors group"
              >
                <Instagram size={16} strokeWidth={1.5} className="text-gold" />
                @momomadrona
              </a>
              <a
                href="tel:656351406"
                className="flex items-center gap-3 text-sm text-charcoal/70 hover:text-charcoal transition-colors"
              >
                <Phone size={16} strokeWidth={1.5} className="text-gold" />
                656 351 406
              </a>
            </div>
          </motion.div>
        </div>

        {/* Values section */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-14">
            <p className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3">Lo que nos define</p>
            <h2 className="font-serif text-3xl lg:text-4xl text-charcoal">Los pilares de Momo Madroña</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center px-4"
              >
                <div className="w-8 h-px bg-gold mx-auto mb-6" />
                <Heart size={20} strokeWidth={1} className="text-gold mx-auto mb-4" />
                <h3 className="font-serif text-xl text-charcoal mb-3">{v.title}</h3>
                <p className="text-sm text-warm-gray leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-cream rounded-sm p-10 lg:p-16 text-center"
        >
          <p className="text-xs tracking-[0.25em] text-warm-gray uppercase mb-4">Sígueme en Instagram</p>
          <h3 className="font-serif text-2xl lg:text-3xl text-charcoal mb-4">
            Cada día hay algo nuevo en la tienda
          </h3>
          <p className="text-sm text-warm-gray mb-8 max-w-md mx-auto">
            Novedades, looks del día, complementos artesanales y mucho más. ¡Únete a nuestra comunidad de mujeres con estilo!
          </p>
          <a
            href="https://www.instagram.com/momomadrona/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-charcoal text-off-white px-8 py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-gold transition-colors duration-300"
          >
            <Instagram size={14} strokeWidth={1.5} />
            Seguir @momomadrona
          </a>
        </motion.div>
      </div>
    </div>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const reviews = [
  {
    name: 'Fernando Medina J.',
    rating: 5,
    date: 'Hace 9 meses',
    text: 'Fuimos por un trabajo del instituto. Ropa muy chula y huele muy bien. Mariola es tela de maja, y el servicio es la leche. ¡¡Gracias, Mariola!!',
  },
  {
    name: 'Patricia Rodríguez García',
    rating: 5,
    date: 'Hace 3 meses',
    text: 'La variedad de ropa y artículos y la amabilidad de Mariola son invencibles 🥰',
  },
  {
    name: 'Laura Pérez García',
    rating: 5,
    date: 'Hace un año',
    text: 'Ropa monísima y con una relación calidad precio super buena. Mariola y Julia te dan una atención maravillosa, son un encanto.',
  },
  {
    name: 'Bárbara Rosa Hernández',
    rating: 5,
    date: 'Hace un año',
    text: 'Unas chicas muy amables y una ropa ideal!! La recomiendo muchísimo 🫶',
  },
  {
    name: 'Lydia Gramstad',
    rating: 5,
    date: 'Hace un año',
    text: 'Beautiful clothes at very reasonable prices for the high quality!',
  },
]

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={12} className="fill-gold text-gold" />
      ))}
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3">
            Lo que dicen nuestras clientas
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-charcoal mb-4">Reseñas</h2>
          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-off-white border border-sand px-5 py-3 rounded-sm">
            <Stars count={5} />
            <span className="font-serif text-2xl text-charcoal">5,0</span>
            <span className="text-xs text-warm-gray">en Google · 6 reseñas</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-off-white p-7 flex flex-col gap-4 border border-sand/60"
            >
              {/* Stars & date */}
              <div className="flex items-center justify-between">
                <Stars count={review.rating} />
                <span className="text-[10px] text-warm-gray/70 tracking-wide">{review.date}</span>
              </div>

              {/* Text */}
              <p className="text-sm text-warm-gray leading-relaxed flex-1 italic">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-sand/60">
                <div className="w-8 h-8 rounded-full bg-beige flex items-center justify-center shrink-0">
                  <span className="font-serif text-sm text-charcoal/60">
                    {review.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-xs font-medium text-charcoal">{review.name}</p>
                  <p className="text-[10px] text-warm-gray/60 tracking-wide">Reseña de Google</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Google */}
        <div className="text-center mt-10">
          <a
            href="https://maps.app.goo.gl/momomadrona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-sans text-warm-gray tracking-[0.15em] uppercase border-b border-warm-gray/40 pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
          >
            Ver todas las reseñas en Google
          </a>
        </div>
      </div>
    </section>
  )
}

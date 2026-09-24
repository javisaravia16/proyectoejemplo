import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import ProductCard from './ProductCard'
import { getFeaturedProducts } from '@/lib/products'

export default function NewArrivals() {
  const products = getFeaturedProducts()

  return (
    <section className="py-20 lg:py-32 px-6 lg:px-10 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-end justify-between mb-12 lg:mb-16">
        <div>
          <p className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3">Recién llegados</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-charcoal">Novedades</h2>
        </div>
        <Link
          href="/shop"
          className="hidden sm:inline-flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-warm-gray hover:text-gold border-b border-warm-gray/40 hover:border-gold pb-0.5 transition-colors duration-200 group"
        >
          Ver todo
          <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8">
        {products.slice(0, 4).map((product, i) => (
          <ProductCard key={product.id} product={product} index={i} />
        ))}
      </div>

      <div className="mt-10 text-center sm:hidden">
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-xs font-sans tracking-[0.15em] uppercase text-charcoal border-b border-charcoal/40 pb-0.5"
        >
          Ver toda la colección
          <ArrowRight size={12} />
        </Link>
      </div>
    </section>
  )
}

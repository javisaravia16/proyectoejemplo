'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart } from 'lucide-react'
import type { Product } from '@/lib/products'
import { useCart } from '@/context/CartContext'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const { addItem, openCart } = useCart()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    addItem({
      product,
      quantity: 1,
      size: product.sizes[0],
      color: product.colors[0],
    })
    openCart()
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <Link href={`/product/${product.id}`} className="group block">
        {/* Image container */}
        <div className="relative aspect-[3/4] bg-beige overflow-hidden rounded-sm">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />

          {/* Badge */}
          {product.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-off-white text-charcoal text-[10px] font-medium tracking-[0.15em] uppercase px-2.5 py-1">
                {product.badge}
              </span>
            </div>
          )}

          {/* Wishlist */}
          <button
            onClick={(e) => e.preventDefault()}
            className="absolute top-3 right-3 w-8 h-8 bg-off-white/90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-off-white"
            aria-label="Guardar en favoritos"
          >
            <Heart size={14} strokeWidth={1.5} className="text-charcoal" />
          </button>

          {/* Quick add overlay */}
          <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[cubic-bezier(0.25,0.46,0.45,0.94)]">
            <button
              onClick={handleQuickAdd}
              className="w-full bg-charcoal/95 text-off-white text-xs font-medium tracking-[0.2em] uppercase py-3.5 flex items-center justify-center gap-2 hover:bg-charcoal transition-colors duration-200"
            >
              <ShoppingBag size={13} strokeWidth={1.5} />
              Añadir al carrito
            </button>
          </div>
        </div>

        {/* Product info */}
        <div className="mt-4 px-0.5">
          <h3 className="font-serif text-sm text-charcoal group-hover:text-gold transition-colors duration-200">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-sm font-medium text-charcoal">{product.price} €</span>
            {product.originalPrice && (
              <span className="text-xs text-warm-gray line-through">{product.originalPrice} €</span>
            )}
          </div>
          <p className="text-xs text-warm-gray mt-1 line-clamp-1">{product.description}</p>
        </div>
      </Link>
    </motion.div>
  )
}

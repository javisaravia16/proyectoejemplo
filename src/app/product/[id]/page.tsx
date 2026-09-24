'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ShoppingBag, Heart, ArrowLeft, Check } from 'lucide-react'
import { getProductById, products, type Size } from '@/lib/products'
import { useCart } from '@/context/CartContext'
import ProductCard from '@/components/ProductCard'

interface PageProps {
  params: { id: string }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductById(params.id)
  if (!product) notFound()

  const [selectedSize, setSelectedSize] = useState<Size>(product.sizes[0])
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [added, setAdded] = useState(false)
  const { addItem, openCart } = useCart()

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  const handleAddToCart = () => {
    addItem({ product, quantity: 1, size: selectedSize, color: selectedColor })
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
    setTimeout(() => openCart(), 400)
  }

  return (
    <div className="pt-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10 lg:py-16">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-10 text-xs text-warm-gray tracking-wide">
          <Link href="/" className="hover:text-charcoal transition-colors">Inicio</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-charcoal transition-colors">Tienda</Link>
          <span>/</span>
          <span className="text-charcoal capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-charcoal">{product.name}</span>
        </nav>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative aspect-[4/5] bg-beige rounded-sm overflow-hidden"
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {product.badge && (
              <div className="absolute top-5 left-5">
                <span className="bg-off-white text-charcoal text-[10px] font-medium tracking-[0.15em] uppercase px-3 py-1.5">
                  {product.badge}
                </span>
              </div>
            )}
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col justify-center"
          >
            <p className="text-xs text-warm-gray tracking-[0.2em] uppercase mb-3">
              {product.category}
            </p>

            <h1 className="font-serif text-3xl lg:text-4xl text-charcoal leading-tight mb-4">
              {product.name}
            </h1>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="text-2xl font-medium text-charcoal">{product.price} €</span>
              {product.originalPrice && (
                <span className="text-base text-warm-gray line-through">{product.originalPrice} €</span>
              )}
              {product.originalPrice && (
                <span className="text-xs text-gold font-medium">
                  -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                </span>
              )}
            </div>

            <p className="text-sm text-warm-gray leading-relaxed mb-8">
              {product.longDescription}
            </p>

            {/* Color selector */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal">Color</span>
                <span className="text-xs text-warm-gray">{selectedColor}</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 text-xs border rounded-sm transition-all duration-200 ${
                      selectedColor === color
                        ? 'border-charcoal bg-charcoal text-off-white'
                        : 'border-sand text-warm-gray hover:border-charcoal/50'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Size selector */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-medium tracking-[0.15em] uppercase text-charcoal">Talla</span>
                <button className="text-xs text-warm-gray underline underline-offset-2 hover:text-charcoal transition-colors">
                  Guía de tallas
                </button>
              </div>
              <div className="flex gap-2 flex-wrap">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 text-xs font-medium border rounded-sm transition-all duration-200 ${
                      selectedSize === size
                        ? 'border-charcoal bg-charcoal text-off-white'
                        : 'border-sand text-charcoal hover:border-charcoal/50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to cart */}
            <div className="flex gap-3">
              <button
                onClick={handleAddToCart}
                className={`flex-1 py-4 text-xs font-medium tracking-[0.2em] uppercase flex items-center justify-center gap-3 transition-all duration-400 ${
                  added
                    ? 'bg-gold text-off-white'
                    : 'bg-charcoal text-off-white hover:bg-charcoal/90'
                }`}
              >
                {added ? (
                  <>
                    <Check size={14} />
                    Añadido
                  </>
                ) : (
                  <>
                    <ShoppingBag size={14} strokeWidth={1.5} />
                    Añadir al carrito
                  </>
                )}
              </button>

              <button className="w-14 h-14 border border-sand flex items-center justify-center text-warm-gray hover:text-charcoal hover:border-charcoal/40 transition-colors rounded-sm">
                <Heart size={16} strokeWidth={1.5} />
              </button>
            </div>

            {/* Shipping info */}
            <div className="mt-8 pt-8 border-t border-sand/60 space-y-2">
              <p className="text-xs text-warm-gray flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                Envío gratuito en pedidos superiores a 100€
              </p>
              <p className="text-xs text-warm-gray flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                Devoluciones gratuitas en 30 días
              </p>
              <p className="text-xs text-warm-gray flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gold shrink-0" />
                Entrega estimada: 2-4 días hábiles
              </p>
            </div>
          </motion.div>
        </div>

        {/* Related products */}
        {related.length > 0 && (
          <div className="mt-24 lg:mt-32">
            <div className="flex items-center gap-4 mb-12">
              <div className="flex-1 h-px bg-sand" />
              <h2 className="font-serif text-2xl text-charcoal whitespace-nowrap px-4">También te puede gustar</h2>
              <div className="flex-1 h-px bg-sand" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { X, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext'

export default function CartDrawer() {
  const { state, closeCart, removeItem, updateQuantity, totalPrice, totalItems } = useCart()

  return (
    <AnimatePresence>
      {state.isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-charcoal/30 backdrop-blur-sm z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-off-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-sand">
              <div>
                <h2 className="font-serif text-xl text-charcoal">Mi Carrito</h2>
                <p className="text-xs text-warm-gray mt-0.5 tracking-wider">
                  {totalItems} {totalItems === 1 ? 'artículo' : 'artículos'}
                </p>
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-charcoal/50 hover:text-charcoal transition-colors rounded-full hover:bg-sand/50"
              >
                <X size={20} strokeWidth={1.5} />
              </button>
            </div>

            {/* Items */}
            <div className="flex-1 overflow-y-auto">
              {state.items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-6 px-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-sand/50 flex items-center justify-center">
                    <ShoppingBag size={28} strokeWidth={1} className="text-warm-gray" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-charcoal">Tu carrito está vacío</p>
                    <p className="text-sm text-warm-gray mt-2">Descubre nuestra colección y añade tus piezas favoritas.</p>
                  </div>
                  <button
                    onClick={closeCart}
                    className="mt-2 text-sm font-medium tracking-wider underline underline-offset-4 text-charcoal hover:text-gold transition-colors"
                  >
                    Explorar colección
                  </button>
                </div>
              ) : (
                <ul className="divide-y divide-sand/60">
                  {state.items.map((item) => (
                    <li key={`${item.product.id}-${item.size}-${item.color}`} className="px-8 py-6">
                      <div className="flex gap-4">
                        {/* Product image */}
                        <div className="relative w-20 h-24 bg-beige rounded overflow-hidden shrink-0">
                          <Image
                            src={item.product.image}
                            alt={item.product.name}
                            fill
                            className="object-cover"
                            sizes="80px"
                          />
                        </div>

                        {/* Details */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between gap-2">
                            <Link
                              href={`/product/${item.product.id}`}
                              onClick={closeCart}
                              className="font-serif text-sm text-charcoal hover:text-gold transition-colors line-clamp-2"
                            >
                              {item.product.name}
                            </Link>
                            <button
                              onClick={() => removeItem(item.product.id, item.size, item.color)}
                              className="shrink-0 p-0.5 text-charcoal/30 hover:text-charcoal transition-colors"
                            >
                              <X size={14} />
                            </button>
                          </div>

                          <div className="flex items-center gap-3 mt-1.5">
                            <span className="text-xs text-warm-gray">Talla: {item.size}</span>
                            <span className="text-warm-gray/40">·</span>
                            <span className="text-xs text-warm-gray">{item.color}</span>
                          </div>

                          <div className="flex items-center justify-between mt-3">
                            {/* Quantity */}
                            <div className="flex items-center border border-sand rounded">
                              <button
                                onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity - 1)}
                                className="w-7 h-7 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors"
                              >
                                <Minus size={12} />
                              </button>
                              <span className="w-8 text-center text-xs font-medium">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.product.id, item.size, item.color, item.quantity + 1)}
                                className="w-7 h-7 flex items-center justify-center text-charcoal/50 hover:text-charcoal transition-colors"
                              >
                                <Plus size={12} />
                              </button>
                            </div>

                            <span className="font-medium text-sm text-charcoal">
                              {(item.product.price * item.quantity).toFixed(2)} €
                            </span>
                          </div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Footer */}
            {state.items.length > 0 && (
              <div className="border-t border-sand px-8 py-6 bg-cream">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm text-warm-gray">Subtotal</span>
                  <span className="font-medium text-charcoal">{totalPrice.toFixed(2)} €</span>
                </div>
                <p className="text-xs text-warm-gray/70 mb-6">Envío calculado en el checkout</p>

                {/* CTA */}
                <button className="w-full bg-charcoal text-off-white py-4 text-xs font-medium tracking-[0.2em] uppercase hover:bg-charcoal/90 transition-colors duration-300 flex items-center justify-center gap-3 group">
                  Finalizar Compra
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform duration-200" />
                </button>

                <button
                  onClick={closeCart}
                  className="w-full mt-3 py-3 text-xs text-warm-gray tracking-wider hover:text-charcoal transition-colors"
                >
                  Continuar comprando
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

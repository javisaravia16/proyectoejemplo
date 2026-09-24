'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { SlidersHorizontal, X } from 'lucide-react'
import { products, type Category } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

const categoryOptions: { value: string; label: string }[] = [
  { value: 'todos', label: 'Todos' },
  { value: 'conjuntos', label: 'Conjuntos' },
  { value: 'faldas', label: 'Faldas' },
  { value: 'accesorios', label: 'Accesorios' },
  { value: 'pantalones', label: 'Pantalones' },
]

const priceRanges = [
  { value: 'all', label: 'Todos los precios' },
  { value: '0-100', label: 'Menos de 100€' },
  { value: '100-200', label: '100€ – 200€' },
  { value: '200+', label: 'Más de 200€' },
]

export default function ShopPage() {
  const [category, setCategory] = useState('todos')
  const [priceRange, setPriceRange] = useState('all')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catOk = category === 'todos' || p.category === category
      let priceOk = true
      if (priceRange === '0-100') priceOk = p.price < 100
      else if (priceRange === '100-200') priceOk = p.price >= 100 && p.price <= 200
      else if (priceRange === '200+') priceOk = p.price > 200
      return catOk && priceOk
    })
  }, [category, priceRange])

  return (
    <div className="pt-20 min-h-screen">
      {/* Page header */}
      <div className="bg-cream py-16 px-6 lg:px-10 text-center">
        <p className="text-xs font-sans text-warm-gray tracking-[0.25em] uppercase mb-3">Momo Madroña</p>
        <h1 className="font-serif text-4xl lg:text-6xl text-charcoal">Tienda</h1>
        <p className="mt-4 text-sm text-warm-gray max-w-md mx-auto leading-relaxed">
          {filtered.length} {filtered.length === 1 ? 'pieza' : 'piezas'} disponibles
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12">
        {/* Filters bar */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-sand">
          {/* Category tabs */}
          <div className="hidden md:flex items-center gap-1">
            {categoryOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setCategory(opt.value)}
                className={`px-4 py-2 text-xs font-medium tracking-[0.12em] uppercase transition-colors duration-200 rounded-sm ${
                  category === opt.value
                    ? 'bg-charcoal text-off-white'
                    : 'text-warm-gray hover:text-charcoal hover:bg-sand/50'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>

          {/* Right side: price filter & mobile filter button */}
          <div className="flex items-center gap-4 ml-auto">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="text-xs font-sans text-charcoal bg-transparent border-b border-charcoal/30 pb-1 pr-6 focus:outline-none focus:border-charcoal cursor-pointer appearance-none tracking-wide"
            >
              {priceRanges.map((r) => (
                <option key={r.value} value={r.value}>{r.label}</option>
              ))}
            </select>

            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="md:hidden flex items-center gap-2 text-xs tracking-wider text-warm-gray hover:text-charcoal"
            >
              <SlidersHorizontal size={14} />
              Filtros
            </button>
          </div>
        </div>

        {/* Mobile category filters */}
        {filtersOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden flex flex-wrap gap-2 mb-8"
          >
            {categoryOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => { setCategory(opt.value); setFiltersOpen(false) }}
                className={`px-4 py-2 text-xs tracking-wider rounded-full border transition-colors ${
                  category === opt.value
                    ? 'bg-charcoal text-off-white border-charcoal'
                    : 'border-sand text-warm-gray hover:border-charcoal/30'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </motion.div>
        )}

        {/* Active filters */}
        {(category !== 'todos' || priceRange !== 'all') && (
          <div className="flex items-center gap-2 mb-8">
            <span className="text-xs text-warm-gray tracking-wider">Filtros activos:</span>
            {category !== 'todos' && (
              <span className="flex items-center gap-1 bg-sand/60 text-xs px-3 py-1.5 rounded-full">
                {categoryOptions.find(c => c.value === category)?.label}
                <button onClick={() => setCategory('todos')} className="ml-1 hover:text-charcoal">
                  <X size={10} />
                </button>
              </span>
            )}
            {priceRange !== 'all' && (
              <span className="flex items-center gap-1 bg-sand/60 text-xs px-3 py-1.5 rounded-full">
                {priceRanges.find(r => r.value === priceRange)?.label}
                <button onClick={() => setPriceRange('all')} className="ml-1 hover:text-charcoal">
                  <X size={10} />
                </button>
              </span>
            )}
          </div>
        )}

        {/* Product grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 lg:gap-8">
            {filtered.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="font-serif text-xl text-charcoal mb-3">No se encontraron piezas</p>
            <p className="text-sm text-warm-gray">Prueba a ajustar los filtros para ver más resultados.</p>
            <button
              onClick={() => { setCategory('todos'); setPriceRange('all') }}
              className="mt-6 text-xs tracking-widest uppercase underline underline-offset-4 text-warm-gray hover:text-charcoal transition-colors"
            >
              Limpiar filtros
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

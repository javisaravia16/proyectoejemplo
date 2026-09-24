import Link from 'next/link'
import Image from 'next/image'
import { Instagram, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-off-white/70">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Main footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 py-16">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <div className="relative w-28 h-14 bg-white/95 rounded-sm p-1.5">
              <Image
                src="/images/logo.jpg"
                alt="Momo Madroña"
                fill
                className="object-contain"
                sizes="112px"
              />
            </div>
            <p className="text-sm font-light leading-relaxed max-w-xs">
              Tienda de ropa y decoración. Complementos y accesorios hechos a mano con cariño y dedicación.
            </p>
            <div className="flex flex-col gap-2 mt-4">
              <a
                href="https://www.instagram.com/momomadrona/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm hover:text-gold transition-colors duration-200"
              >
                <Instagram size={15} strokeWidth={1.5} />
                @momomadrona
              </a>
              <a
                href="tel:656951406"
                className="flex items-center gap-2 text-sm hover:text-gold transition-colors duration-200"
              >
                <Phone size={15} strokeWidth={1.5} />
                656 95 14 06
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-off-white">Colecciones</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Todo', cat: 'todos' },
                { label: 'Conjuntos', cat: 'conjuntos' },
                { label: 'Faldas', cat: 'faldas' },
                { label: 'Accesorios', cat: 'accesorios' },
              ].map((item) => (
                <Link
                  key={item.cat}
                  href={`/shop?category=${item.cat}`}
                  className="text-sm hover:text-off-white transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Info */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-medium tracking-[0.2em] uppercase text-off-white">Información</h4>
            <nav className="flex flex-col gap-3">
              {[
                { label: 'Sobre Mí', href: '/sobre-mi' },
                { label: 'Contacto', href: 'tel:656951406' },
                { label: 'Instagram', href: 'https://www.instagram.com/momomadrona/' },
              ].map((item) => (
                <a key={item.label} href={item.href} className="text-sm hover:text-off-white transition-colors duration-200">
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom bar */}
        {/* Address bar */}
        <div className="border-t border-off-white/10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs tracking-wide text-off-white/50">
            C. Regina, 16, Casco Antiguo, 41003 Sevilla — ⭐ 5,0 en Google
          </p>
          <p className="text-xs text-off-white/30">
            © {new Date().getFullYear()} Momo Madroña
          </p>
        </div>
      </div>
    </footer>
  )
}

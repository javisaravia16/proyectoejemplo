export type Size = 'XS' | 'S' | 'M' | 'L' | 'XL'
export type Category = 'conjuntos' | 'blusas' | 'faldas' | 'accesorios' | 'pantalones'

export interface Product {
  id: string
  name: string
  price: number
  originalPrice?: number
  description: string
  longDescription: string
  category: Category
  image: string
  images: string[]
  sizes: Size[]
  colors: string[]
  isNew?: boolean
  isFeatured?: boolean
  badge?: string
}

// Imágenes reales de @momomadrona en Instagram
const IG = {
  conjunto_rayas:  'https://scontent.cdninstagram.com/v/t51.82787-15/810813873_17975070591136205_354830255123724833_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=111&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=xfDDBAq6kNMQ7kNvwEYLE5r&_nc_oc=AdrlcOfIGt0NSvmmL7i6Oo6qIKY5s-TI57Ow3vXWUa28Qd__ROSLLZcZLCbK5JDTzII&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQIbLT1WwDTAtvQ3y7Nz1c2z9-bBmqEBdpafwEXpHAAGcg&oe=6ABAA208',
  vichy_noir:      'https://scontent.cdninstagram.com/v/t51.82787-15/806397402_17973556569136205_6003381898309607151_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=8JdBkfB0q_AQ7kNvwG_igoy&_nc_oc=Adqt-VSJWi0YACsO5HYgnT-ChF2W8mN1Jv7PwxfqO9DOv4ES-csC3DBSXDFnWp81zRM&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQJ-5Az2PXMClB18gRbp5qUS4MzzphYoKr39Qz3pR7ouug&oe=6ABAA21C',
  floral_naranja:  'https://scontent.cdninstagram.com/v/t51.82787-15/802596448_17973153585136205_279850988586380012_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=1-TP9HzQeKsQ7kNvwEpteBZ&_nc_oc=Adpj4q40AusFFwm_1nxlQjmKagLoL_OXnME7qxORSWFbH69YdNKOrv_FLh_UVxo9CZk&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQLHtdcDTIhBrAHNq10tqcr1BEiFim7WEtQYvbip_kTR1A&oe=6ABABFAF',
  militar_cuadros: 'https://scontent.cdninstagram.com/v/t51.82787-15/799486970_17972730684136205_6801138483206626189_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=101&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=VBvaxC0GaTsQ7kNvwFJgX4n&_nc_oc=Adr_ZbAc1E3IAXcNtgPJcEZiFeRafEc4x4TkiL-cSoEqeHROaD2JeBRw_i-gEHKa-Wc&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQLIHMSsm9kVtgx_XyCf7wxPp0a2wzvUr_WhxUBRKxxNog&oe=6ABAA69B',
  girasol_vaquero: 'https://scontent.cdninstagram.com/v/t51.82787-15/790993449_17971961331136205_5773667967743514735_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=ABm0gW86z1cQ7kNvwEsuVNl&_nc_oc=AdoOKDHROI_Ud0ewH9xLVYHzhT1cUwjGNUrhLw6XEahjMRWiteaPGzh6vZ-n1Kb6qjU&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQLB3Fl-_Nv5rKWp9-fab46jRcpwY4Ht0nthxe9BTgK3Bg&oe=6ABABEA0',
  verde_floral:    'https://scontent.cdninstagram.com/v/t51.82787-15/788073227_17971539333136205_7995548951924779112_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=102&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=bcaLMvvAB_kQ7kNvwHSUsoT&_nc_oc=Adqi0t8w6KeAkPcH9-e_3Zx_mArJOnEw36B02Z-5VEgTcQQnPEJ3W0GEOCafJfE1YAw&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQL1XNVV536nRISxpyEfan2LSuV-vuVMcAtOF2jmqwodWw&oe=6ABAA92B',
  beige_mani:      'https://scontent.cdninstagram.com/v/t51.82787-15/760689714_17966969187136205_4125579020799417550_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=108&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=0qWRLlAaAVMQ7kNvwFowqgh&_nc_oc=Adr44N29rwsXkk9CqEADJ_NXx7TLxrlW_vMKXq4_KJHw_qOdpOY5BMT3WOylZ_SzZ6o&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQJ2z3KmM8kieowLbZKMhMdLMUKW2wvfpLCKcG57SRpq-g&oe=6ABAAD43',
  negro_turquesa:  'https://scontent.cdninstagram.com/v/t51.82787-15/756661511_17966149935136205_8350772670355994546_n.jpg?stp=dst-jpg_e35_s640x640_tt6&_nc_cat=105&ccb=7-5&_nc_sid=18de74&efg=eyJlZmdfdGFnIjoiQ0FST1VTRUxfSVRFTS5iZXN0X2ltYWdlX3VybGdlbi5DMyJ9&_nc_ohc=1oAPfcBbxIcQ7kNvwHJRZ2P&_nc_oc=Ado11ZT2zr1wNpjoE6lZlc-J7yubbvJKcr4sVMGjAAm3o7ZLjiSmqmzDdV3s7aGot04&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&oh=00_AQLtR5YKg5k3iHUB8GMCezXPcAV-v0C94ikQp2U_Z4aZVg&oe=6ABAB1F4',
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Conjunto Rayas Arena',
    price: 79,
    description: 'Blusa y falda a rayas en tonos beige y arena, con lazo decorativo.',
    longDescription: 'Un conjunto de dos piezas articulado en finas rayas verticales en tonos arena y crema. La blusa de manga ancha con lazo en el escote y la falda recta de tiro medio crean una silueta clásica y refinada. Tejido fluido que aporta comodidad y elegancia en cualquier ocasión.',
    category: 'conjuntos',
    image: IG.conjunto_rayas,
    images: [IG.conjunto_rayas],
    sizes: ['S', 'M', 'L'],
    colors: ['Arena / Crema'],
    isNew: true,
    isFeatured: true,
    badge: 'Nuevo',
  },
  {
    id: '2',
    name: 'Falda Vichy Noir',
    price: 55,
    description: 'Falda con estampado vichy en blanco y negro, atemporal y versátil.',
    longDescription: 'El vichy nunca pasa de moda. Esta falda con el clásico estampado de cuadros en negro y blanco es una pieza cápsula que combina con todo. Su corte midi y tejido estructurado aportan elegancia a cualquier conjunto casual o formal.',
    category: 'faldas',
    image: IG.vichy_noir,
    images: [IG.vichy_noir],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Negro / Blanco'],
    isFeatured: true,
  },
  {
    id: '3',
    name: 'Conjunto Floral y Naranja',
    price: 95,
    description: 'Blusa estampado floral multicolor y pantalón ancho terracota.',
    longDescription: 'La combinación perfecta entre vibrante y sofisticado. La blusa con estampado floral en tonos rosados, rojos y naranjas se acompaña de un pantalón palazzo en color terracota que alarga la figura. Un look completo lleno de personalidad para los días especiales.',
    category: 'conjuntos',
    image: IG.floral_naranja,
    images: [IG.floral_naranja],
    sizes: ['S', 'M', 'L'],
    colors: ['Multicolor / Terracota'],
    isFeatured: true,
    isNew: true,
    badge: 'Nuevo',
  },
  {
    id: '4',
    name: 'Look Militar Cuadros',
    price: 110,
    description: 'Chaqueta estilo militar beige, falda cuadros y camiseta marinera.',
    longDescription: 'Un conjunto de tres piezas de lo más completo: chaqueta de corte militar en tono beige con detalles dorados, falda midi en estampado de cuadros escoceses y camiseta de rayas marineras. Piezas que puedes combinar de mil maneras distintas.',
    category: 'conjuntos',
    image: IG.militar_cuadros,
    images: [IG.militar_cuadros],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Beige / Cuadros'],
    isFeatured: true,
  },
  {
    id: '5',
    name: 'Conjunto Vaquero Girasol',
    price: 89,
    description: 'Blusa vaquera con lazo y pantalón ancho estampado girasoles.',
    longDescription: 'Denim reinventado. La blusa de tela vaquera con lazo al cuello se empareja con un pantalón de pata ancha en estampado de girasoles sobre fondo oscuro. Un look alegre y fresco perfecto para la temporada de verano. Se completa con collar de perlas de fantasía.',
    category: 'conjuntos',
    image: IG.girasol_vaquero,
    images: [IG.girasol_vaquero],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Denim / Girasoles'],
    isNew: true,
    badge: 'Nuevo',
  },
  {
    id: '6',
    name: 'Top Nudo Verde + Falda Floral',
    price: 72,
    description: 'Top verde oliva con nudo frontal y falda con estampado floral multicolor.',
    longDescription: 'El verde oliva se convierte en protagonista con este top de manga larga y nudo frontal que define la cintura. Se combina con una falda de estampado floral en tonos rosa, malva y verde que aporta feminidad y color. Una combinación armoniosa para llevar de día a noche.',
    category: 'conjuntos',
    image: IG.verde_floral,
    images: [IG.verde_floral],
    sizes: ['S', 'M', 'L'],
    colors: ['Verde Oliva / Floral'],
  },
  {
    id: '7',
    name: 'Conjunto Beige Wide Leg',
    price: 85,
    description: 'Top drapeado en beige con pantalón ancho de tiro alto, estilo minimal.',
    longDescription: 'Minimalismo elegante. El top drapeado en tono beige cálido con detalle asimétrico se combina con un pantalón de pierna ancha de tiro alto en el mismo tono. Una silueta monocromática que alarga y estiliza. Perfecto para una tarde de compras o una cena íntima.',
    category: 'conjuntos',
    image: IG.beige_mani,
    images: [IG.beige_mani],
    sizes: ['XS', 'S', 'M', 'L'],
    colors: ['Beige'],
    isFeatured: true,
  },
  {
    id: '8',
    name: 'Look Negro + Turquesa',
    price: 92,
    description: 'Top negro sin mangas y pantalón ancho azul turquesa con collar largo.',
    longDescription: 'El contraste perfecto. Un top negro liso sin mangas, sencillo y elegante, se combina con un pantalón de pata ancha en vibrante azul turquesa. El largo collar de perlas completa el look con un toque retro-chic irresistible. Una apuesta de estilo para eventos o salidas especiales.',
    category: 'conjuntos',
    image: IG.negro_turquesa,
    images: [IG.negro_turquesa],
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Negro / Turquesa'],
    isFeatured: true,
  },
]

export const categories = [
  {
    id: 'conjuntos',
    name: 'Conjuntos',
    description: 'Piezas que cuentan historias',
    image: IG.floral_naranja,
    href: '/shop?category=conjuntos',
  },
  {
    id: 'faldas',
    name: 'Faldas',
    description: 'Diseños únicos y atemporales',
    image: IG.vichy_noir,
    href: '/shop?category=faldas',
  },
  {
    id: 'accesorios',
    name: 'Accesorios',
    description: 'Hechos a mano con amor',
    image: IG.verde_floral,
    href: '/shop?category=accesorios',
  },
]

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (!category || category === 'todos') return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.isFeatured)
}

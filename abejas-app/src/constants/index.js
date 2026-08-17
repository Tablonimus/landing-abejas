/* ═══════════════════════════════════════════════════════════
   CONSTANTES — navegación, etiquetas, diseño
   ═══════════════════════════════════════════════════════════ */

export const NAV_ITEMS = [
  { label: 'Inicio', path: '/', icon: 'Home' },
  { label: 'El Vuelo', path: '/tiempo', icon: 'History' },
  { label: 'Museo', path: '/museo', icon: 'Award' },
  { label: 'Camisetas', path: '/camisetas', icon: 'Award' },
  { label: 'Crónicas', path: '/cronicas', icon: 'Newspaper' },
  { label: 'Jugadores', path: '/jugadores', icon: 'Users' },
  { label: 'Frases', path: '/frases', icon: 'Quote' },
  { label: 'Diarios', path: '/diarios', icon: 'FileText' },
  { label: 'Tercer Tiempo', path: '/tercer-tiempo', icon: 'Beer' },
  { label: 'Entrevistas', path: '/entrevistas', icon: 'Users' },
  { label: 'Datos', path: '/datos', icon: 'BarChart' },
]

// Nota: /escudos existe y sigue enrutada (ver AppRoutes), pero queda
// fuera de NAV_ITEMS hasta tener contenido real — ver data/mocks.js `escudos`.

export const ROUTES = {
  HOME: '/',
  TIEMPO: '/tiempo',
  MUSEO: '/museo',
  CRONICAS: '/cronicas',
  JUGADORES: '/jugadores',
  FRASES: '/frases',
  DIARIOS: '/diarios',
  TERCER_TIEMPO: '/tercer-tiempo',
  CAMISETAS: '/camisetas',
  ESCUDOS: '/escudos',
  ENTREVISTAS: '/entrevistas',
  DATOS: '/datos',
}

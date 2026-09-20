# Header.tsx

Componente encargado de renderizar la cabecera principal de la aplicación y controlar la navegación responsive.

Incluye:

- Logo.
- Navegación principal.
- Navegación móvil.
- Indicador de página activa.
- Menú hamburguesa para dispositivos móviles.
- Cierre automático del menú móvil al navegar.
- Selector de tema claro/oscuro.
- Comportamiento `fixed` en móvil y `sticky` en escritorio.

---

# 1. ¿Qué hace?

`Header.tsx` es el componente responsable de la **navegación global** de la aplicación.

Su comportamiento cambia dependiendo del tamaño de pantalla.

### En dispositivos móviles

El header permanece fijo en la parte inferior:

```text id="8j4r2c"
┌─────────────────────────────┐
│                             │
│        Contenido            │
│                             │
│                             │
├─────────────────────────────┤
│ Logo     ☰          ◐       │
└─────────────────────────────┘
```

Al pulsar el botón central se abre el menú:

```text id="n8q4pm"
┌─────────────────────────────┐
│                             │
│        Contenido            │
│                             │
├─────────────────────────────┤
│          Inicio             │
│       Componentes           │
│         Contacto            │
├─────────────────────────────┤
│ Logo     ✕          ◐       │
└─────────────────────────────┘
```

### En escritorio

El header pasa a la parte superior y permanece `sticky`:

```text id="4cvn3x"
┌─────────────────────────────────────────────┐
│ Logo    Inicio  Componentes  Contacto   ◐  │
└─────────────────────────────────────────────┘
```

---

# 2. Dependencias

El componente utiliza:

```tsx id="8r6x0p"
import { useState } from 'react'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

import { Logo } from '../ui/Logo'

import { ThemeToggle } from '../ui/ThemeToggle'

import Container from './Container'
```

| Dependencia | Función |
|---|---|
| `useState` | Controla la apertura del menú móvil |
| `next/link` | Navegación entre páginas |
| `usePathname` | Obtiene la ruta actual |
| `Logo` | Renderiza el logo |
| `ThemeToggle` | Cambia entre temas |
| `Container` | Controla el ancho del contenido |

---

# 3. ¿Por qué utiliza `'use client'`?

El componente comienza con:

```tsx id="9k2p8a"
'use client'
```

Es necesario porque `Header.tsx` utiliza APIs de React y Next.js que requieren ejecución en el cliente.

Concretamente:

```tsx id="9h3n5q"
useState()
```

y:

```tsx id="q5zv7d"
usePathname()
```

`useState` controla el estado del menú móvil, mientras que `usePathname` permite determinar qué página está activa.

Además, el botón del menú utiliza un evento:

```tsx id="5f1m7k"
onClick={() => setIsMenuOpen(...)}
```

Por estas razones el componente debe ser un Client Component.

---

# 4. Lista de enlaces

Los enlaces de navegación se definen al comienzo del archivo:

```tsx id="k6v3sp"
const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Componentes', href: '/componentes' },
  { label: 'Contacto', href: '/contacto' },
]
```

Esta estructura permite generar automáticamente tanto la navegación de escritorio como la navegación móvil.

La información de cada enlace contiene:

| Propiedad | Tipo | Descripción |
|---|---|---|
| `label` | `string` | Texto mostrado al usuario |
| `href` | `string` | Ruta de navegación |

Por ejemplo:

```tsx id="r9m4qt"
{
  label: 'Componentes',
  href: '/componentes',
}
```

genera:

```text
Componentes → /componentes
```

---

# 5. Ventaja de utilizar un array de enlaces

En lugar de escribir cada enlace manualmente, el componente utiliza:

```tsx id="w3y7qa"
links.map(...)
```

Esto permite reutilizar la misma configuración para:

- navegación desktop;
- navegación móvil.

La arquitectura es:

```text id="c8p2mz"
links
  │
  ├── Desktop Navigation
  │
  └── Mobile Navigation
```

Por lo tanto, si se agrega un enlace al array:

```tsx id="7t5r2x"
{
  label: 'Servicios',
  href: '/servicios',
}
```

aparecerá automáticamente en ambas navegaciones.

---

# 6. Estado del menú móvil

El componente utiliza:

```tsx id="j2v6fd"
const [isMenuOpen, setIsMenuOpen] = useState(false)
```

El estado representa si el menú móvil está abierto.

### Estado inicial

```text id="m1q7zx"
isMenuOpen = false
```

El menú permanece cerrado.

### Después de pulsar el botón

```text id="c4h8nk"
isMenuOpen = true
```

El menú se muestra.

---

# 7. Apertura y cierre del menú

El botón utiliza:

```tsx id="5x9r3v"
onClick={() => setIsMenuOpen((prev) => !prev)}
```

Esto invierte el estado anterior.

```text id="r7d2hm"
false → true
true  → false
```

Por lo tanto, el mismo botón sirve para abrir y cerrar el menú.

---

# 8. Accesibilidad del botón

El botón incluye:

```tsx id="v5k9pd"
aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
```

El texto accesible cambia dependiendo del estado.

### Menú cerrado

```text id="z4x2qa"
Abrir menú
```

### Menú abierto

```text id="s8n6kw"
Cerrar menú
```

También utiliza:

```tsx id="b2m7rc"
aria-expanded={isMenuOpen}
```

Esto informa a tecnologías de asistencia si el menú está abierto o cerrado.

---

# 9. Icono del menú

El componente no utiliza una librería externa de iconos para el botón del menú.

Utiliza directamente elementos SVG.

### Menú cerrado

Se muestra el icono hamburguesa:

```tsx id="k4p8zs"
<svg ...>
  <path d='M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z' />
</svg>
```

Visualmente:

```text
☰
```

### Menú abierto

Se muestra el icono de cierre:

```tsx id="v6q3nd"
<svg ...>
  <path d='m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' />
</svg>
```

Visualmente:

```text
✕
```

El cambio se realiza mediante:

```tsx id="f3y8wk"
{isMenuOpen ? (...) : (...)}
```

---

# 10. Detección de la ruta actual

El componente obtiene la ruta actual mediante:

```tsx id="n7c2vx"
const pathname = usePathname()
```

Por ejemplo:

```text id="h4m8qs"
/ 
/componentes
/componentes/boton
/contacto
```

Esto permite determinar qué enlace debe marcarse como activo.

---

# 11. Función `isActive`

La función:

```tsx id="p6r2kt"
const isActive = (href: string) => {
  if (href === '/') return pathname === '/'

  return pathname === href || pathname.startsWith(`${href}/`)
}
```

determina si un enlace corresponde a la página actual.

---

# 12. Tratamiento especial de `/`

La ruta raíz tiene una condición especial:

```tsx id="j9s4cx"
if (href === '/') return pathname === '/'
```

Esto evita que `/` sea considerado activo para cualquier otra ruta.

Por ejemplo:

```text id="2f8qmk"
pathname = '/componentes'

href = '/'

Resultado = false
```

Mientras que:

```text id="q7v3ds"
pathname = '/'

href = '/'

Resultado = true
```

---

# 13. Rutas principales y subrutas

Para el resto de las rutas se utiliza:

```tsx id="y5n8wr"
pathname === href || pathname.startsWith(`${href}/`)
```

Esto permite considerar activo un enlace también cuando el usuario está dentro de una subruta.

Por ejemplo:

```text id="t3c7mx"
/componentes
/componentes/boton
/componentes/input
/componentes/card
```

Con:

```tsx id="a8v4kp"
href='/componentes'
```

todas esas rutas pueden considerarse parte de la sección `Componentes`.

---

# 14. `aria-current`

Los enlaces utilizan:

```tsx id="x2m6qh"
aria-current={isActive(link.href) ? 'page' : undefined}
```

Cuando el enlace corresponde a la página actual:

```html
aria-current="page"
```

Cuando no corresponde:

```html
aria-current
```

no se renderiza.

Esto mejora la accesibilidad indicando cuál es la página actual dentro de la navegación.

---

# 15. Header responsive

El elemento principal es:

```tsx id="b7q3wm"
<header className='fixed bottom-0 left-0 z-50 w-full border-t border-border bg-background text-brand lg:sticky lg:top-0 lg:border-b lg:border-t-0'>
```

Su comportamiento cambia mediante Tailwind.

### Móvil

```tsx id="d4k9sp"
fixed bottom-0
```

El header queda fijado en la parte inferior.

### Desktop

```tsx id="m6x2qr"
lg:sticky lg:top-0
```

Desde `lg`, el header pasa a la parte superior y permanece sticky durante el desplazamiento.

---

# 16. Z-index

El header utiliza:

```tsx id="w8n3vf"
z-50
```

Esto garantiza que permanezca por encima del contenido normal de la página.

El menú móvil utiliza:

```tsx id="c5r7yx"
z-40
```

De esta manera:

```text id="p2m9vk"
Header       z-50
Menú móvil   z-40
Contenido    z-normal
```

---

# 17. Container

El contenido del header está envuelto en:

```tsx id="x8q4mn"
<Container>
  ...
</Container>
```

Esto permite que el header respete el sistema de ancho máximo utilizado por la aplicación.

---

# 18. Layout del header móvil

El contenedor interno utiliza:

```tsx id="v7s2kc"
grid h-16 grid-cols-3 items-center lg:flex lg:justify-between
```

En móvil:

```text id="q4m8zs"
┌────────┬────────┬────────┐
│  Logo  │  Menu  │  Tema  │
└────────┴────────┴────────┘
```

Se utilizan tres columnas:

```tsx id="j3n6rx"
grid-cols-3
```

Cada elemento ocupa su posición.

---

# 19. Logo

El logo utiliza:

```tsx id="u5c8mw"
<div className='justify-self-start'>
  <Logo className='transition-opacity hover:opacity-50' />
</div>
```

El logo queda alineado al comienzo.

También posee:

```tsx id="q7d3kn"
hover:opacity-50
```

que genera un efecto visual al pasar el cursor sobre él.

---

# 20. ThemeToggle en móvil

En móvil aparece:

```tsx id="r9k5vp"
<div className='justify-self-end lg:hidden'>
  <ThemeToggle />
</div>
```

La clase:

```tsx id="f2m8xz"
lg:hidden
```

hace que desaparezca desde `lg`.

Por lo tanto:

```text
Móvil       → visible
Desktop     → oculto
```

En escritorio existe otra instancia dentro de la navegación desktop.

---

# 21. Navegación desktop

La navegación desktop comienza con:

```tsx id="n3v7kc"
<div className='hidden items-center gap-10 lg:flex'>
```

Inicialmente:

```tsx id="h6p2qy"
hidden
```

y desde `lg`:

```tsx id="k8r4mx"
lg:flex
```

Por lo tanto:

```text
Móvil       → navegación desktop oculta
Desktop     → navegación desktop visible
```

---

# 22. Enlaces desktop

Los enlaces se generan mediante:

```tsx id="w6c2nt"
{links.map((link) => (
  <Link
    key={link.href}
    href={link.href}
    ...
  >
    {link.label}
  </Link>
))}
```

Cada elemento del array genera un `Link`.

Ejemplo:

```text id="b8r4vz"
Inicio
Componentes
Contacto
```

---

# 23. Estilo del enlace activo

El `className` contiene:

```tsx id="m5q9kc"
${isActive(link.href) ? 'bg-muted' : ''}
```

Cuando el enlace está activo recibe:

```tsx id="v4n8px"
bg-muted
```

Por ejemplo:

```text
Inicio       ← activo
Componentes
Contacto
```

El enlace activo tendrá el fondo `muted`.

---

# 24. Hover de los enlaces

Los enlaces utilizan:

```tsx id="k2s7mx"
hover:bg-muted
```

Esto permite que el fondo cambie cuando el usuario pasa el cursor sobre el enlace.

También utilizan:

```tsx id="x6p3qw"
transition-all duration-300
```

para suavizar la transición visual.

---

# 25. Menú móvil

La navegación móvil está definida como:

```tsx id="v8m4rd"
<nav
  aria-label='Navegación móvil'
  className={`
    fixed
    bottom-16
    left-0
    z-40
    w-full
    border-t
    border-border
    bg-background
    transition-all
    duration-300
    lg:hidden
    ...
  `}
>
```

El menú se coloca inmediatamente encima del header móvil:

```text id="x4k7pz"
┌─────────────────────────┐
│      Menú móvil         │
├─────────────────────────┤
│ Logo    ☰        Tema   │
└─────────────────────────┘
```

La posición:

```tsx id="s3n8qy"
bottom-16
```

corresponde a la altura del header móvil:

```tsx id="r5v2mk"
h-16
```

---

# 26. Animación de apertura

El menú utiliza:

```tsx id="c9q4tw"
transition-all duration-300
```

y alterna:

```tsx id="a7m2vx"
pointer-events-auto opacity-100
```

con:

```tsx id="p6k8zs"
pointer-events-none opacity-0
```

### Menú abierto

```text id="n4r7cx"
opacity-100
pointer-events-auto
```

### Menú cerrado

```text id="y8v3qm"
opacity-0
pointer-events-none
```

Esto permite ocultar visualmente el menú y, al mismo tiempo, impedir que pueda recibir interacciones cuando está cerrado.

---

# 27. Cierre automático del menú

Los enlaces móviles tienen:

```tsx id="q5m8vx"
onClick={() => setIsMenuOpen(false)}
```

Por lo tanto, cuando el usuario selecciona una opción:

```text id="j7c3rz"
Usuario pulsa enlace
        ↓
Navega
        ↓
setIsMenuOpen(false)
        ↓
Menú cerrado
```

Esto evita que el menú permanezca abierto después de navegar.

---

# 28. Diferencias entre navegación desktop y móvil

| Característica | Desktop | Móvil |
|---|---|---|
| Posición Header | `sticky top-0` | `fixed bottom-0` |
| Navegación | Horizontal | Vertical |
| Menú hamburguesa | No | Sí |
| ThemeToggle | Derecha | Derecha |
| Navegación desplegable | No | Sí |
| Cierre automático | — | Sí |
| `lg:hidden` | — | Sí |
| Indicador activo | Sí | Sí |

---

# 29. Props

`Header.tsx` no recibe props.

```tsx id="c8n4my"
export default function Header() {
```

Su API es:

| Prop | Tipo | Requerida | Descripción |
|---|---|---:|---|
| — | — | — | No recibe props |

La configuración de navegación se encuentra dentro del propio componente mediante `links`.

---

# 30. Componentes reutilizados

El header delega responsabilidades a otros componentes:

```text id="v2m8qc"
Header
│
├── Logo
│
├── ThemeToggle
│
└── Container
```

Esto evita que `Header.tsx` tenga que implementar directamente:

- el logo;
- el selector de tema;
- la lógica de ancho del contenido.

---

# 31. Flujo del componente

El funcionamiento general es:

```text id="q4v8ns"
Header
 │
 ├── Obtiene pathname actual
 │
 ├── Comprueba enlaces activos
 │
 ├── Renderiza Logo
 │
 ├── Renderiza navegación desktop
 │
 ├── Renderiza ThemeToggle
 │
 └── Renderiza navegación móvil
       │
       ├── Menú cerrado
       │      ↓
       │   opacity 0
       │
       └── Menú abierto
              ↓
          opacity 100
```

---

# 32. Flujo del menú móvil

```text id="r8m3cx"
isMenuOpen = false
        │
        ▼
Usuario pulsa ☰
        │
        ▼
isMenuOpen = true
        │
        ▼
Se muestra el menú
        │
        ▼
Usuario selecciona una ruta
        │
        ├── Navega a la ruta
        │
        └── setIsMenuOpen(false)
                │
                ▼
           Menú cerrado
```

---

# 33. Flujo del enlace activo

```text id="w5k9pz"
usePathname()
      │
      ▼
Obtiene pathname
      │
      ▼
isActive(href)
      │
      ▼
¿Coincide con la ruta?
      │
   ┌──┴──┐
   │     │
  Sí     No
   │     │
   ▼     ▼
bg-muted  normal
aria      aria
current   current
```

---

# 34. Características principales

| Característica | Implementación |
|---|---|
| Navegación global | `next/link` |
| Ruta actual | `usePathname()` |
| Menú móvil | `useState()` |
| Responsive | Tailwind CSS |
| Logo | `Logo` |
| Tema | `ThemeToggle` |
| Layout | `Container` |
| Indicador activo | `isActive()` |
| Accesibilidad | `aria-label`, `aria-expanded`, `aria-current` |
| Menú móvil fijo | `fixed bottom-0` |
| Header desktop | `sticky top-0` |
| Animación | `transition-all duration-300` |
| Props | Ninguna |

---

# 35. Ejemplo de uso

El componente puede utilizarse directamente:

```tsx id="m7q4vz"
import Header from '@/components/layout/Header'

export default function Layout() {
  return (
    <>
      <Header />

      <main>
        {/* contenido */}
      </main>
    </>
  )
}
```

En un layout global:

```tsx id="x3k8np"
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />

      <main>
        {children}
      </main>
    </>
  )
}
```

---

# 36. Ejemplo de expansión de navegación

Para agregar una nueva página:

```tsx id="q8v2mc"
const links = [
  { label: 'Inicio', href: '/' },
  { label: 'Componentes', href: '/componentes' },
  { label: 'Contacto', href: '/contacto' },
  { label: 'Servicios', href: '/servicios' },
]
```

No es necesario modificar los dos menús.

El nuevo enlace aparecerá automáticamente tanto en:

```text id="n6r4pz"
Navegación desktop
```

como en:

```text id="b3m8qx"
Navegación móvil
```

---

# 37. Arquitectura del componente

La arquitectura puede representarse así:

```text id="k5v9rx"
Header
│
├── Estado
│   └── isMenuOpen
│
├── Ruta
│   └── pathname
│
├── Lógica
│   └── isActive()
│
├── Desktop
│   ├── Logo
│   ├── Links
│   └── ThemeToggle
│
└── Mobile
    ├── Logo
    ├── Menu Button
    ├── ThemeToggle
    └── Mobile Navigation
```

---

# 38. Responsabilidades

`Header.tsx` concentra las responsabilidades relacionadas con la navegación global:

### Responsabilidades

- Renderizar el header.
- Mostrar el logo.
- Mostrar navegación.
- Determinar la ruta activa.
- Controlar el menú móvil.
- Mostrar el selector de tema.
- Adaptar el layout a móvil y desktop.
- Gestionar accesibilidad básica de la navegación.

### No es responsabilidad del Header

- Renderizar el contenido de las páginas.
- Gestionar autenticación.
- Gestionar datos de usuario.
- Realizar peticiones a APIs.
- Gestionar el tema directamente.
- Implementar el componente `Logo`.
- Implementar el componente `ThemeToggle`.

Estas responsabilidades están delegadas a sus respectivos componentes.

---

# 39. Resumen

`Header.tsx` es el **componente principal de navegación de la aplicación**.

Su funcionamiento se basa en cuatro piezas principales:

```text id="v6m2qx"
links
  ↓
Configuración de navegación

usePathname()
  ↓
Detección de página activa

useState()
  ↓
Control del menú móvil

Tailwind responsive
  ↓
Desktop / Mobile
```

### En móvil

```text id="p4r8nk"
Header fijo abajo
        +
Logo
        +
Menú hamburguesa
        +
ThemeToggle
        +
Menú desplegable
```

### En desktop

```text id="x8q3mv"
Header sticky arriba
        +
Logo
        +
Navegación horizontal
        +
ThemeToggle
```

El componente además reutiliza la misma configuración `links` para ambas versiones de navegación, mantiene la ruta activa mediante `aria-current="page"` y cierra automáticamente el menú móvil después de seleccionar una ruta.
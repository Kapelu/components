# Footer.tsx

Componente reutilizable encargado de renderizar el pie de página de la aplicación. Contiene el logo, información de copyright, enlace al desarrollador y enlaces a las políticas legales del sitio.

---

# 1. ¿Qué hace?

`Footer.tsx` representa el **footer global** de la aplicación.

Su contenido está dividido en tres zonas principales:

1. **Logo**
2. **Información central**
3. **Enlaces legales**

Además, adapta su distribución dependiendo del tamaño de pantalla mediante Tailwind CSS.

La estructura visual es:

```text
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  Logo              Copyright / Autor          Privacidad     │
│                                               Cookies        │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

En dispositivos pequeños los elementos se muestran verticalmente, mientras que desde `md` se organizan en tres columnas.

---

# 2. Dependencias

El componente utiliza tres elementos principales:

```tsx
import Link from 'next/link'

import { Logo } from '../ui/Logo'

import Container from './Container'
```

| Dependencia | Función |
|---|---|
| `next/link` | Navegación interna y enlaces externos |
| `Logo` | Renderiza el logo de la aplicación |
| `Container` | Controla el ancho y alineación del contenido |

No necesita dependencias adicionales.

---

# 3. Uso de `next/link`

El componente utiliza `Link` de Next.js tanto para enlaces internos como externos.

### Enlaces internos

```tsx
<Link href='/privacidad'>
  Política de privacidad
</Link>
```

Estos enlaces navegan dentro de la aplicación:

```text
/privacidad
/cookies
```

### Enlace externo

```tsx
<Link
  href='https://danielcalderon.vercel.app/'
  target='_blank'
  rel='noopener noreferrer'
>
  @KWS
</Link>
```

El enlace:

- abre una nueva pestaña;
- utiliza `target='_blank'`;
- utiliza `rel='noopener noreferrer'` por seguridad.

---

# 4. Año dinámico

El componente obtiene automáticamente el año actual:

```tsx
const year = new Date().getFullYear()
```

Esto permite mostrar:

```text
2023 - 2026 All Rights Reserved
```

sin tener que modificar manualmente el código cada año.

Por ejemplo:

```tsx
<p>2023 - {year} All Rights Reserved</p>
```

Cuando cambie el año, `{year}` se actualizará automáticamente.

---

# 5. Estructura principal

El componente utiliza:

```tsx
<footer>
  <Container>
    <div>
      ...
    </div>
  </Container>
</footer>
```

La estructura conceptual es:

```text
Footer
│
└── Container
    │
    └── Grid / Flex principal
        │
        ├── Logo
        │
        ├── Información
        │
        └── Enlaces legales
```

---

# 6. Elemento `<footer>`

El elemento principal es:

```tsx
<footer
  className='
    border-t
    border-border
    bg-background
    pt-3
    pb-(--mobile-header-height)
    text-title
    lg:pb-0
  '
>
```

### Funciones principales

| Clase | Función |
|---|---|
| `border-t` | Agrega borde superior |
| `border-border` | Utiliza el color de borde del sistema |
| `bg-background` | Utiliza el fondo global |
| `pt-3` | Padding superior |
| `pb-(--mobile-header-height)` | Espacio inferior en móvil |
| `text-title` | Color de texto principal |
| `lg:pb-0` | Elimina el padding inferior en pantallas grandes |

El uso de:

```tsx
pb-(--mobile-header-height)
```

permite compensar la altura del header móvil cuando este permanece fijo en la parte inferior de la pantalla.

---

# 7. Contenedor

El footer utiliza el componente:

```tsx
<Container>
  ...
</Container>
```

Esto permite mantener el mismo sistema de ancho y espaciado utilizado por el resto de la aplicación.

El `Footer` no controla directamente el ancho máximo de su contenido.

Esa responsabilidad pertenece a `Container`.

---

# 8. Distribución responsive

El contenedor interno utiliza:

```tsx
<div
  className='
    flex
    flex-col
    gap-4
    pb-1
    md:grid
    md:grid-cols-3
    md:items-center
  '
>
```

### En móvil

```text
flex
flex-col
```

Los elementos aparecen uno debajo del otro:

```text
Logo

Copyright
Autor

Privacidad
Cookies
```

### Desde `md`

```tsx
md:grid md:grid-cols-3
```

Se transforma en tres columnas:

```text
┌────────────┬────────────┬────────────┐
│    Logo    │ Información │   Links    │
└────────────┴────────────┴────────────┘
```

---

# 9. Sección del Logo

La primera sección contiene:

```tsx
<div className='flex justify-center md:justify-start'>
  <Logo className='transition-opacity hover:opacity-50' />
</div>
```

En móvil:

```tsx
justify-center
```

El logo queda centrado.

En escritorio:

```tsx
md:justify-start
```

El logo se alinea hacia la izquierda.

Además:

```tsx
transition-opacity hover:opacity-50
```

genera un efecto visual cuando el usuario pasa el cursor sobre el logo.

---

# 10. Información central

La segunda sección contiene:

```tsx
<div className='text-center text-sm text-title'>
```

Su contenido es:

```tsx
<p>2023 - {year} All Rights Reserved</p>

<p>
  Realizado con 💛 por{' '}
  <Link ...>
    @KWS
  </Link>
</p>
```

La sección está centrada mediante:

```tsx
text-center
```

y utiliza un tamaño de texto pequeño:

```tsx
text-sm
```

---

# 11. Copyright

El copyright se genera mediante:

```tsx
<p>2023 - {year} All Rights Reserved</p>
```

El año inicial es fijo:

```text
2023
```

Mientras que el año final es dinámico:

```tsx
{year}
```

Por lo tanto, no es necesario modificar el componente anualmente.

---

# 12. Autor / desarrollador

El footer muestra:

```text
Realizado con 💛 por @KWS
```

El nombre:

```tsx
@KWS
```

es un enlace externo.

```tsx
<Link
  href='https://danielcalderon.vercel.app/'
  target='_blank'
  rel='noopener noreferrer'
  className='font-semibold text-link hover:underline'
>
  @KWS
</Link>
```

Visualmente utiliza:

```tsx
font-semibold
text-link
hover:underline
```

Esto hace que el enlace tenga mayor peso visual y muestre subrayado al pasar el cursor.

---

# 13. Enlaces legales

La tercera sección contiene:

```tsx
<div className='flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end'>
```

Los enlaces son:

```tsx
<Link href='/privacidad'>
  Política de privacidad
</Link>

<Link href='/cookies'>
  Política de cookies
</Link>
```

Los destinos son:

```text
/privacidad
/cookies
```

---

# 14. Comportamiento responsive de los enlaces

En móvil:

```tsx
justify-center
```

Los enlaces aparecen centrados.

Además:

```tsx
flex-wrap
```

permite que los enlaces pasen a otra línea si no existe suficiente espacio horizontal.

En escritorio:

```tsx
md:justify-end
```

los enlaces se alinean hacia la derecha.

---

# 15. Espaciado entre enlaces

La separación se controla mediante:

```tsx
gap-4
```

Por lo tanto:

```text
Política de privacidad    Política de cookies
```

mantiene una separación consistente sin necesidad de utilizar márgenes individuales.

---

# 16. Props

`Footer.tsx` no recibe props.

Su declaración es:

```tsx
export default function Footer() {
```

Por lo tanto, su API es:

| Prop | Tipo | Requerida | Descripción |
|---|---|---:|---|
| — | — | — | El componente no recibe props |

El contenido está definido directamente dentro del componente.

---

# 17. `'use client'`

Este componente **no necesita**:

```tsx
'use client'
```

La razón es que no utiliza:

- `useState`
- `useEffect`
- eventos de usuario
- APIs del navegador
- hooks de React

El cálculo:

```tsx
new Date().getFullYear()
```

puede ejecutarse normalmente.

Además, `next/link` y los componentes utilizados pueden renderizarse desde un Server Component siempre que sus propias implementaciones lo permitan.

---

# 18. Uso del componente

Normalmente se utiliza como parte del layout global:

```tsx
import Footer from '@/components/layout/Footer'

export default function Layout() {
  return (
    <>
      <main>
        {/* contenido */}
      </main>

      <Footer />
    </>
  )
}
```

De esta forma el footer puede aparecer en todas las páginas que compartan ese layout.

---

# 19. Uso dentro de un layout de Next.js

Una implementación habitual sería:

```tsx
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

      <Footer />
    </>
  )
}
```

El resultado conceptual sería:

```text
Layout
│
├── Header
│
├── Main
│   └── Página actual
│
└── Footer
```

---

# 20. Responsabilidades del componente

`Footer.tsx` tiene responsabilidades muy concretas:

### Responsabilidades

- Mostrar el logo.
- Mostrar copyright.
- Mostrar el año actual.
- Mostrar información del desarrollador.
- Mostrar enlaces legales.
- Adaptar la distribución a diferentes tamaños de pantalla.

### No es responsabilidad del Footer

- Gestionar navegación principal.
- Gestionar autenticación.
- Gestionar datos de usuario.
- Gestionar formularios.
- Realizar llamadas a APIs.
- Gestionar estados globales.

Esto mantiene al componente enfocado exclusivamente en la presentación del pie de página.

---

# 21. Flujo del componente

El flujo es muy simple:

```text
Footer
  │
  ├── Obtiene año actual
  │
  ├── Renderiza Logo
  │
  ├── Renderiza copyright
  │
  ├── Renderiza enlace al desarrollador
  │
  ├── Renderiza Política de privacidad
  │
  └── Renderiza Política de cookies
```

No existe flujo de datos complejo ni interacción con APIs.

---

# 22. Arquitectura visual

El footer utiliza tres bloques:

```text
┌───────────────────────────────────────────────┐
│                    Footer                     │
│                                               │
│  ┌──────────┐ ┌──────────────┐ ┌───────────┐ │
│  │   Logo   │ │  Copyright   │ │  Legal    │ │
│  │          │ │  @KWS        │ │  Cookies  │ │
│  └──────────┘ └──────────────┘ └───────────┘ │
│                                               │
└───────────────────────────────────────────────┘
```

En móvil:

```text
┌─────────────────────────┐
│          Logo           │
│                         │
│       Copyright         │
│          @KWS           │
│                         │
│ Privacidad   Cookies    │
└─────────────────────────┘
```

---

# 23. Características principales

| Característica | Implementación |
|---|---|
| Responsive | Tailwind CSS |
| Logo | `Logo` |
| Contenedor | `Container` |
| Navegación | `next/link` |
| Año automático | `new Date().getFullYear()` |
| Enlaces internos | `Link` |
| Enlace externo | `target="_blank"` |
| Seguridad externa | `rel="noopener noreferrer"` |
| Grid desktop | `md:grid-cols-3` |
| Layout móvil | `flex-col` |
| Sin estado | Sí |
| Sin API | Sí |
| Sin props | Sí |

---

# 24. Ejemplo completo

```tsx
import Link from 'next/link'

import { Logo } from '../ui/Logo'

import Container from './Container'

const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className='border-t border-border bg-background pt-3 pb-(--mobile-header-height) text-title lg:pb-0'>
      <Container>
        <div className='flex flex-col gap-4 pb-1 md:grid md:grid-cols-3 md:items-center'>

          {/* Logo */}
          <div className='flex justify-center md:justify-start'>
            <Logo className='transition-opacity hover:opacity-50' />
          </div>

          {/* Centro */}
          <div className='text-center text-sm text-title'>
            <p>2023 - {year} All Rights Reserved</p>

            <p>
              Realizado con 💛 por{' '}
              <Link
                href='https://danielcalderon.vercel.app/'
                target='_blank'
                rel='noopener noreferrer'
                className='font-semibold text-link hover:underline'>
                @KWS
              </Link>
            </p>
          </div>

          {/* Links */}
          <div className='flex flex-wrap items-center justify-center gap-4 text-sm md:justify-end'>
            <Link
              href='/privacidad'
              className='font-semibold text-link hover:underline'>
              Política de privacidad
            </Link>

            <Link
              href='/cookies'
              className='font-semibold text-link hover:underline'>
              Política de cookies
            </Link>
          </div>

        </div>
      </Container>
    </footer>
  )
}
```

---

# 25. Resumen

`Footer.tsx` es el componente encargado del **pie de página global** de la aplicación.

Sus tres bloques principales son:

```text
Logo
  +
Información / Copyright / Autor
  +
Políticas legales
```

Utiliza:

- `next/link` para navegación;
- `Logo` para la identidad visual;
- `Container` para mantener el sistema de layout;
- Tailwind CSS para responsive design;
- `new Date().getFullYear()` para mantener actualizado automáticamente el año.

Su comportamiento responsive es:

```text
Móvil
  ↓
Flex vertical + contenido centrado

Desktop
  ↓
Grid de 3 columnas
```

Es un componente **sin props, sin estado y sin lógica compleja**, pensado para ser utilizado directamente en los layouts globales de la aplicación.
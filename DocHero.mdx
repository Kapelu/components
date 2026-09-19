# Hero.tsx

Componente reutilizable encargado de renderizar un **fondo Hero responsive y compatible con modo claro/oscuro**.

Permite combinar:

- Imagen diferente para modo claro y oscuro.
- Color de fondo diferente para cada tema.
- Opacidad independiente para cada imagen.
- `next/image` para optimización de imágenes.
- Posicionamiento absoluto para utilizarlo como fondo.
- Personalización mediante `className`.
- Compatibilidad directa con Tailwind CSS y `next-themes`/clases `dark`.

---

# 1. ¿Qué hace?

`Hero.tsx` funciona como un **background visual para secciones Hero**.

No contiene contenido como títulos, botones o textos. Su responsabilidad es exclusivamente proporcionar el fondo visual.

Conceptualmente:

```text
┌──────────────────────────────────────────────┐
│                                              │
│              CONTENIDO DEL HERO              │
│                                              │
│        Título / Texto / Botones              │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │            Hero.tsx                   │  │
│  │       Fondo + Imagen + Overlay        │  │
│  └────────────────────────────────────────┘  │
│                                              │
└──────────────────────────────────────────────┘
```

El componente se posiciona detrás del contenido mediante:

```tsx
className='absolute inset-0 -z-10 overflow-hidden'
```

Por lo tanto, está pensado para colocarse dentro de un elemento padre que controle el contexto de posicionamiento.

---

# 2. Dependencias

El componente utiliza:

```tsx
import Image from 'next/image'

import clsx from 'clsx'
```

| Dependencia | Función |
|---|---|
| `next/image` | Renderizado y optimización de imágenes |
| `clsx` | Composición dinámica de clases CSS |

---

# 3. `HeroProps`

El componente define el siguiente tipo:

```tsx
type HeroProps = {
  imageLight?: `/${string}`
  imageDark?: `/${string}`
  backgroundLight?: string
  backgroundDark?: string
  alt?: string
  opacityLight?: number
  opacityDark?: number
  className?: string
}
```

Las propiedades permiten controlar completamente el fondo visual.

---

# 4. API de Props

| Prop | Tipo | Default | Descripción |
|---|---|---|---|
| `imageLight` | `` `/${string}` `` | `undefined` | Imagen utilizada en modo claro |
| `imageDark` | `` `/${string}` `` | `undefined` | Imagen utilizada en modo oscuro |
| `backgroundLight` | `string` | `undefined` | Color de fondo del modo claro |
| `backgroundDark` | `string` | `undefined` | Color de fondo del modo oscuro |
| `alt` | `string` | `''` | Texto alternativo de las imágenes |
| `opacityLight` | `number` | `0.95` | Opacidad de la imagen clara |
| `opacityDark` | `number` | `0.5` | Opacidad de la imagen oscura |
| `className` | `string` | `undefined` | Clases adicionales para el contenedor |

Todas las propiedades son opcionales.

---

# 5. Imágenes para Light y Dark

El componente permite utilizar imágenes diferentes dependiendo del tema.

### Modo claro

```tsx
imageLight='/images/hero-light.jpg'
```

### Modo oscuro

```tsx
imageDark='/images/hero-dark.jpg'
```

La lógica utiliza las clases de Tailwind:

```tsx
dark:hidden
```

y:

```tsx
hidden dark:block
```

Por lo tanto:

```text
Light
  ↓
imageLight visible
imageDark ocultada

Dark
  ↓
imageLight ocultada
imageDark visible
```

---

# 6. `imageLight`

La propiedad:

```tsx
imageLight?: `/${string}`
```

representa la imagen que se utilizará cuando el sitio esté en modo claro.

Ejemplo:

```tsx
<Hero
  imageLight='/images/hero-light.webp'
/>
```

La restricción:

```tsx
`/${string}`
```

obliga a que la ruta comience con `/`.

Ejemplos válidos:

```tsx
'/images/hero.jpg'
'/assets/background.webp'
'/hero/light.png'
```

Ejemplos que no cumplen el tipo:

```tsx
'images/hero.jpg'
'https://example.com/image.jpg'
```

---

# 7. `imageDark`

Funciona de la misma manera:

```tsx
imageDark?: `/${string}`
```

Ejemplo:

```tsx
<Hero
  imageDark='/images/hero-dark.webp'
/>
```

Esto permite utilizar una composición visual diferente para el tema oscuro.

---

# 8. Fondos de color

Además de imágenes, el componente permite definir colores de fondo.

### Light

```tsx
backgroundLight='#ffffff'
```

### Dark

```tsx
backgroundDark='#111111'
```

El color se aplica mediante:

```tsx
style={{
  backgroundColor: backgroundLight,
}}
```

y:

```tsx
style={{
  backgroundColor: backgroundDark,
}}
```

Esto permite que exista un color de fondo incluso cuando no se proporciona una imagen.

---

# 9. Fondo del modo claro

El fondo claro se renderiza mediante:

```tsx
<div
  className='absolute inset-0 dark:hidden'
  style={{
    backgroundColor: backgroundLight,
  }}
/>
```

Durante el modo claro:

```text
backgroundLight
      ↓
visible
```

Durante el modo oscuro:

```text
backgroundLight
      ↓
hidden
```

---

# 10. Fondo del modo oscuro

El fondo oscuro utiliza:

```tsx
<div
  className='absolute inset-0 hidden dark:block'
  style={{
    backgroundColor: backgroundDark,
  }}
/>
```

Durante el modo claro:

```text
hidden
```

Durante el modo oscuro:

```text
dark:block
```

Por lo tanto, únicamente se muestra cuando existe la clase `dark` en el contexto correspondiente.

---

# 11. Renderizado condicional de imágenes

Las imágenes se renderizan únicamente si fueron proporcionadas.

Para `imageLight`:

```tsx
{imageLight && (
  <Image
    ...
  />
)}
```

Para `imageDark`:

```tsx
{imageDark && (
  <Image
    ...
  />
)}
```

Esto significa que una imagen no es obligatoria.

Por ejemplo, es válido utilizar solamente un color:

```tsx
<Hero
  backgroundLight='#ffffff'
  backgroundDark='#111111'
/>
```

También es posible proporcionar solamente una imagen:

```tsx
<Hero
  imageLight='/images/hero.jpg'
/>
```

---

# 12. Uso de `next/image`

Las imágenes utilizan:

```tsx
<Image
  src={imageLight}
  alt={alt}
  fill
  priority
  sizes='(max-width: 768px) 100vw, 1280px'
  ...
/>
```

Se utiliza el componente `Image` de Next.js en lugar de un `<img>` convencional.

---

# 13. Propiedad `fill`

La propiedad:

```tsx
fill
```

hace que la imagen ocupe todo el espacio disponible de su contenedor.

En combinación con:

```tsx
className='object-cover'
```

la imagen funciona como un background.

Conceptualmente:

```text
Contenedor
┌─────────────────────────────┐
│                             │
│       Imagen fill           │
│                             │
│       object-cover          │
│                             │
└─────────────────────────────┘
```

---

# 14. `object-cover`

Las imágenes utilizan:

```tsx
object-cover
```

Esto hace que la imagen cubra completamente el área disponible manteniendo sus proporciones.

Si las proporciones de la imagen y del contenedor son diferentes, parte de la imagen puede quedar recortada.

Es el comportamiento habitual para fondos Hero.

---

# 15. `priority`

El componente utiliza:

```tsx
priority
```

Esto indica que la imagen tiene prioridad de carga.

Tiene sentido en este caso porque una imagen Hero suele encontrarse en la parte superior de la página y forma parte del contenido visual principal.

---

# 16. `sizes`

Se utiliza:

```tsx
sizes='(max-width: 768px) 100vw, 1280px'
```

Esto informa al navegador sobre el tamaño esperado de la imagen según el viewport.

La lógica es:

```text
Viewport ≤ 768px
        ↓
100vw

Viewport > 768px
        ↓
1280px
```

Esto permite que Next.js seleccione una versión apropiada de la imagen.

---

# 17. Opacidad independiente

El componente permite controlar la opacidad de cada imagen.

### Light

```tsx
opacityLight = 0.95
```

### Dark

```tsx
opacityDark = 0.5
```

Los valores predeterminados son diferentes.

```text
Light → 95%
Dark  → 50%
```

---

# 18. `opacityLight`

La imagen clara utiliza:

```tsx
style={{ opacity: opacityLight }}
```

Por defecto:

```tsx
opacityLight = 0.95
```

Por ejemplo:

```tsx
<Hero
  imageLight='/images/hero-light.jpg'
  opacityLight={0.7}
/>
```

La imagen se mostrará con una opacidad del `70%`.

---

# 19. `opacityDark`

La imagen oscura utiliza:

```tsx
style={{ opacity: opacityDark }}
```

Por defecto:

```tsx
opacityDark = 0.5
```

Ejemplo:

```tsx
<Hero
  imageDark='/images/hero-dark.jpg'
  opacityDark={0.35}
/>
```

La imagen se mostrará con una opacidad del `35%`.

---

# 20. Prop `alt`

La propiedad:

```tsx
alt?: string
```

se utiliza para las dos imágenes.

Por defecto:

```tsx
alt = ''
```

Por ejemplo:

```tsx
<Hero
  imageLight='/images/hero.jpg'
  alt='Paisaje de montaña'
/>
```

La información será utilizada por:

```tsx
<Image
  alt={alt}
/>
```

---

# 21. Overlay negro

Al final del componente existe una capa adicional:

```tsx
<div className='absolute inset-0 bg-black/10' />
```

Esta capa funciona como un **overlay global** sobre el fondo.

Su opacidad es:

```text
10%
```

Conceptualmente:

```text
┌───────────────────────────┐
│ Imagen / Background       │
│                           │
│ ────────────────────────  │
│      Overlay negro        │
│          10%              │
└───────────────────────────┘
```

Esto proporciona una ligera capa de oscurecimiento sobre la composición.

---

# 22. Orden de las capas

El componente construye las capas en este orden:

```text
Hero
│
├── Background Light
│
├── Image Light
│
├── Background Dark
│
├── Image Dark
│
└── Black Overlay
```

El overlay aparece después de las imágenes, por lo que queda visualmente encima de ellas.

---

# 23. Sistema Light / Dark

El funcionamiento completo puede representarse así:

```text
                    Hero
                     │
          ┌──────────┴──────────┐
          │                     │
       LIGHT                  DARK
          │                     │
          ▼                     ▼
backgroundLight          backgroundDark
          │                     │
     imageLight             imageDark
          │                     │
          └──────────┬──────────┘
                     │
                     ▼
                Black Overlay
```

---

# 24. `className`

El componente acepta:

```tsx
className?: string
```

y utiliza `clsx`:

```tsx
<div
  className={clsx(
    'absolute inset-0 -z-10 overflow-hidden',
    className
  )}
>
```

Esto permite añadir clases adicionales sin modificar las clases base.

Por ejemplo:

```tsx
<Hero
  className='rounded-3xl'
/>
```

El resultado combina:

```text
absolute
inset-0
-z-10
overflow-hidden
rounded-3xl
```

---

# 25. ¿Por qué utiliza `clsx`?

`clsx` permite combinar de manera segura:

```tsx
'absolute inset-0 -z-10 overflow-hidden'
```

con:

```tsx
className
```

En lugar de construir manualmente una cadena:

```tsx
`absolute inset-0 -z-10 overflow-hidden ${className}`
```

el componente utiliza:

```tsx
clsx(...)
```

Esto simplifica la composición de clases dinámicas.

---

# 26. Posicionamiento absoluto

El contenedor principal utiliza:

```tsx
absolute inset-0
```

Esto significa que ocupa todo el espacio de su elemento padre posicionado.

Por ejemplo:

```tsx
<section className='relative'>
  <Hero />
  
  <div>
    Contenido del Hero
  </div>
</section>
```

La estructura resultante es:

```text
section relative
│
├── Hero
│   └── absolute inset-0
│
└── Contenido
```

El `relative` del padre proporciona el contexto de posicionamiento.

---

# 27. `-z-10`

El contenedor utiliza:

```tsx
-z-10
```

Esto coloca el Hero detrás del contenido normal.

Es especialmente útil para implementar fondos visuales.

Conceptualmente:

```text
Contenido
   ↑
z normal
   │
   │
Hero
z -10
```

---

# 28. `overflow-hidden`

El contenedor utiliza:

```tsx
overflow-hidden
```

Esto evita que cualquier parte de las imágenes o capas que sobresalga del área del Hero sea visible.

Es especialmente útil junto con:

```tsx
fill
object-cover
```

---

# 29. Formas de uso

## Solo color

```tsx
<Hero
  backgroundLight='#ffffff'
  backgroundDark='#111111'
/>
```

---

## Solo imagen

```tsx
<Hero
  imageLight='/images/hero.jpg'
/>
```

---

## Imagen para ambos temas

```tsx
<Hero
  imageLight='/images/hero-light.jpg'
  imageDark='/images/hero-dark.jpg'
/>
```

---

## Imagen + color de respaldo

```tsx
<Hero
  imageLight='/images/hero-light.jpg'
  backgroundLight='#f5f5f5'
/>
```

Si la imagen no está presente, el color funciona como fondo.

---

## Control de opacidad

```tsx
<Hero
  imageLight='/images/hero-light.jpg'
  imageDark='/images/hero-dark.jpg'
  opacityLight={0.8}
  opacityDark={0.4}
/>
```

---

## Texto alternativo

```tsx
<Hero
  imageLight='/images/mountains.jpg'
  imageDark='/images/mountains-dark.jpg'
  alt='Montañas al atardecer'
/>
```

---

## Clase personalizada

```tsx
<Hero
  imageLight='/images/hero.jpg'
  className='rounded-2xl'
/>
```

---

# 30. Uso dentro de una sección Hero

El uso más habitual sería:

```tsx
<section className='relative min-h-screen overflow-hidden'>
  <Hero
    imageLight='/images/hero-light.jpg'
    imageDark='/images/hero-dark.jpg'
    backgroundLight='#ffffff'
    backgroundDark='#111111'
    alt='Imagen principal'
  />

  <div className='relative z-10'>
    <h1>Bienvenido</h1>

    <p>
      Contenido principal del Hero.
    </p>
  </div>
</section>
```

La estructura es:

```text
section
│
├── Hero
│   ├── Background
│   ├── Image
│   └── Overlay
│
└── Content
    ├── Heading
    ├── Paragraph
    └── Buttons
```

---

# 31. Compatibilidad con temas

El componente no gestiona directamente el estado del tema.

No utiliza:

```tsx
useTheme()
```

ni:

```tsx
useState()
```

para controlar Light/Dark.

En cambio, se apoya en las clases CSS:

```tsx
dark:hidden
```

y:

```tsx
hidden dark:block
```

Por lo tanto, la responsabilidad de establecer el modo oscuro pertenece al sistema de temas de la aplicación.

`Hero.tsx` simplemente reacciona al estado `dark` existente.

---

# 32. Props completas

La API completa del componente es:

```tsx
type HeroProps = {
  imageLight?: `/${string}`
  imageDark?: `/${string}`
  backgroundLight?: string
  backgroundDark?: string
  alt?: string
  opacityLight?: number
  opacityDark?: number
  className?: string
}
```

Y el componente puede utilizarse así:

```tsx
<Hero
  imageLight='/images/hero-light.jpg'
  imageDark='/images/hero-dark.jpg'
  backgroundLight='#ffffff'
  backgroundDark='#111111'
  alt='Imagen del Hero'
  opacityLight={0.95}
  opacityDark={0.5}
  className='custom-class'
/>
```

---

# 33. Características principales

| Característica | Implementación |
|---|---|
| Imagen optimizada | `next/image` |
| Imagen Light | `imageLight` |
| Imagen Dark | `imageDark` |
| Background Light | `backgroundLight` |
| Background Dark | `backgroundDark` |
| Opacidad Light | `opacityLight` |
| Opacidad Dark | `opacityDark` |
| Tema oscuro | Clases `dark:*` |
| Overlay | `bg-black/10` |
| Posicionamiento | `absolute inset-0` |
| Profundidad | `-z-10` |
| Recorte | `overflow-hidden` |
| Ajuste de imagen | `object-cover` |
| Carga prioritaria | `priority` |
| Tamaños responsive | `sizes` |
| Clases personalizadas | `className` |
| Props obligatorias | Ninguna |

---

# 34. Responsabilidades

`Hero.tsx` tiene una responsabilidad específica: **renderizar el fondo visual de un Hero**.

### Responsabilidades

- Renderizar imágenes.
- Seleccionar imagen según el tema.
- Renderizar colores de fondo.
- Aplicar opacidad.
- Aplicar overlay.
- Cubrir completamente el contenedor.
- Optimizar las imágenes mediante `next/image`.

### No es responsabilidad del Hero

- Renderizar títulos.
- Renderizar botones.
- Gestionar navegación.
- Gestionar el tema.
- Gestionar estado.
- Realizar llamadas a APIs.
- Renderizar contenido de la página.

Esto permite utilizarlo como una pieza visual independiente.

---

# 35. Flujo del componente

El flujo general es:

```text
Hero recibe props
       │
       ▼
Comprueba tema actual
       │
   ┌───┴───┐
   │       │
 LIGHT    DARK
   │       │
   ▼       ▼
Background  Background
Light       Dark
   │       │
   ▼       ▼
Image       Image
Light       Dark
   │       │
   └───┬───┘
       │
       ▼
 Black Overlay
       │
       ▼
 Fondo final
```

---

# 36. Resumen

`Hero.tsx` es un componente especializado para crear **fondos Hero visuales, responsive y compatibles con Light/Dark mode**.

Su arquitectura se basa en:

```text
Hero
│
├── Background Light
├── Image Light
│
├── Background Dark
├── Image Dark
│
└── Overlay
```

Sus principales ventajas son:

- permite imágenes diferentes por tema;
- permite colores diferentes por tema;
- permite controlar independientemente la opacidad;
- utiliza `next/image`;
- soporta imágenes `fill`;
- utiliza `object-cover`;
- incorpora overlay;
- permite clases personalizadas;
- no mantiene estado;
- no controla directamente el tema;
- puede reutilizarse en cualquier sección Hero.

El patrón de uso más importante es:

```tsx
<section className='relative'>
  <Hero
    imageLight='/images/hero-light.jpg'
    imageDark='/images/hero-dark.jpg'
    backgroundLight='#ffffff'
    backgroundDark='#111111'
  />

  <div className='relative z-10'>
    {/* contenido del Hero */}
  </div>
</section>
```

De esta manera, `Hero.tsx` queda completamente separado del contenido y funciona como una **capa visual de fondo reutilizable**.
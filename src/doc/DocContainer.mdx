# Container.tsx

Componente reutilizable encargado de controlar el **ancho máximo, centrado y espaciado horizontal** del contenido de la aplicación.

Su objetivo es proporcionar un contenedor común para mantener una estructura visual consistente en páginas y componentes como `Header`, `Footer`, Hero, secciones, grids y otros elementos de la interfaz.

---

# 1. ¿Qué hace?

`Container.tsx` crea un contenedor horizontal responsive.

Su función principal es:

```text
Contenido
    ↓
Container
    ↓
Ancho máximo + padding responsive
    ↓
Contenido centrado
```

Visualmente:

```text
┌──────────────────────────────────────────────────────────┐
│                    viewport                              │
│                                                          │
│     ┌──────────────────────────────────────────────┐     │
│     │                  Container                   │     │
│     │                                              │     │
│     │              Contenido                       │     │
│     │                                              │     │
│     └──────────────────────────────────────────────┘     │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

El componente evita tener que repetir en cada sección las mismas clases de ancho, centrado y padding.

---

# 2. Dependencias

El componente utiliza:

```tsx id="p4v8ns"
import clsx from 'clsx'

import { twMerge } from 'tailwind-merge'
```

| Dependencia | Función |
|---|---|
| `clsx` | Construcción/combinación de clases CSS |
| `tailwind-merge` | Resolución de conflictos entre clases Tailwind |

---

# 3. `ContainerProps`

El componente define:

```tsx id="m8q3rx"
interface ContainerProps {
  children?: React.ReactNode
  className?: string
}
```

Dispone de solamente dos propiedades.

| Prop | Tipo | Requerida | Descripción |
|---|---|---:|---|
| `children` | `React.ReactNode` | No | Contenido que se renderiza dentro del Container |
| `className` | `string` | No | Clases Tailwind adicionales |

---

# 4. `children`

La propiedad:

```tsx id="r7c2mv"
children?: React.ReactNode
```

representa todo el contenido que se quiere colocar dentro del contenedor.

Por ejemplo:

```tsx id="k5n9pz"
<Container>
  <h1>Mi título</h1>
  <p>Contenido de la página.</p>
</Container>
```

El resultado conceptual es:

```text
Container
│
├── h1
│
└── p
```

Puede contener prácticamente cualquier elemento React:

- texto;
- títulos;
- imágenes;
- componentes;
- grids;
- formularios;
- secciones;
- navegación.

---

# 5. `className`

La propiedad:

```tsx id="x4m7qc"
className?: string
```

permite extender o modificar las clases del contenedor.

Ejemplo:

```tsx id="n8v3kp"
<Container className='max-w-4xl'>
  ...
</Container>
```

El componente combina las clases predeterminadas con las proporcionadas mediante `className`.

---

# 6. Clases base

El Container utiliza:

```tsx id="q2k6mx"
'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'
```

Estas clases son las responsables de su comportamiento responsive.

---

# 7. `mx-auto`

```tsx id="f8v4ny"
mx-auto
```

Centra horizontalmente el contenedor cuando existe un ancho máximo disponible.

Conceptualmente:

```text
┌────────────────────────────────────────────┐
│                                            │
│       ┌────────────────────────────┐       │
│       │         Container           │       │
│       └────────────────────────────┘       │
│                                            │
└────────────────────────────────────────────┘
```

El margen horizontal automático distribuye el espacio sobrante de forma equivalente.

---

# 8. `w-full`

```tsx id="t3q8vm"
w-full
```

Hace que el Container ocupe todo el ancho disponible de su elemento padre.

Sin embargo, este ancho queda limitado posteriormente por:

```tsx id="v6m2kp"
max-w-6xl
```

Por lo tanto:

```text
Ancho disponible
       ↓
w-full
       ↓
max-w-6xl
       ↓
Ancho final
```

---

# 9. `max-w-6xl`

```tsx id="k9r5cx"
max-w-6xl
```

establece un ancho máximo aproximado de:

```text
1152 px
```

Esto permite que en pantallas grandes el contenido no se extienda indefinidamente.

Conceptualmente:

```text
Pantalla pequeña
       ↓
Container ocupa el ancho disponible

Pantalla grande
       ↓
Container crece
       ↓
llega a 1152 px aproximadamente
       ↓
deja espacio lateral
```

---

# 10. `px-4`

```tsx id="d7m3vq"
px-4
```

Agrega padding horizontal de:

```text
16 px
```

Es el comportamiento base, utilizado principalmente en móviles.

Conceptualmente:

```text
┌──────────────────────────────┐
│  ← 16px → Contenido ← 16px → │
└──────────────────────────────┘
```

Esto evita que el contenido quede pegado a los bordes de la pantalla.

---

# 11. `sm:px-6`

```tsx id="n5q8cz"
sm:px-6
```

Desde el breakpoint `sm`, el padding horizontal pasa a:

```text
24 px
```

La progresión es:

```text
Móvil
16 px

≥ 640 px
24 px
```

---

# 12. `lg:px-8`

```tsx id="w3r7mx"
lg:px-8
```

Desde el breakpoint `lg`, el padding horizontal pasa a:

```text
32 px
```

La progresión completa es:

```text
< 640 px
16 px

≥ 640 px
24 px

≥ 1024 px
32 px
```

---

# 13. Sistema responsive completo

Las clases del Container producen:

```text
┌──────────────────────────────────────────────┐
│ MÓVIL                                        │
│ px-4 → 16px                                  │
│                                              │
│  ┌────────────────────────────────────────┐  │
│  │              Contenido                 │  │
│  └────────────────────────────────────────┘  │
└──────────────────────────────────────────────┘
```

En `sm`:

```text
┌────────────────────────────────────────────────┐
│ TABLET                                         │
│ px-6 → 24px                                    │
│                                                │
│    ┌────────────────────────────────────────┐   │
│    │              Contenido                 │   │
│    └────────────────────────────────────────┘   │
└────────────────────────────────────────────────┘
```

En `lg`:

```text
┌─────────────────────────────────────────────────────────┐
│ DESKTOP                                                 │
│                                                         │
│   ┌───────────────────────────────────────────────┐     │
│   │             Container                       │     │
│   │             max-w-6xl                       │     │
│   └───────────────────────────────────────────────┘     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

# 14. Combinación de `clsx` y `twMerge`

El componente utiliza:

```tsx id="j6p4vx"
className={twMerge(
  clsx(
    'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
    className
  )
)}
```

El flujo es:

```text
className base
      +
className personalizado
      ↓
     clsx
      ↓
twMerge
      ↓
className final
```

---

# 15. ¿Qué hace `clsx`?

Es una librería chiquita para armar strings de clases de forma condicional. En este caso lo estás usando de forma simple (solo concatenar dos strings), pero su verdadero poder se ve cuando tenés lógica condicional, por ejemplo:

tsx

```
clsx('base-class', {
'text-red-500': hasError,
'text-green-500': !hasError,
})
```

Te evita tener que hacer concatenaciones manuales tipo `\`base ${hasError ? 'text-red-500' : ''}\`` que se vuelven ilegibles rápido.


---

# 16. ¿Qué hace `tailwind-merge`?

Este es el que resuelve un problema específico de Tailwind: **cuando combinás clases que compiten entre sí, Tailwind no sabe cuál "gana"** porque para el CSS son solo strings, y el orden en el HTML final determina cuál se aplica.

Ejemplo del problema: si tu componente base tiene `px-4` y alguien te pasa `className="px-8"` desde afuera, si simplemente concatenás los strings (`"px-4 px-8"`), terminás con ambas clases en el HTML. Dependiendo del orden en que Tailwind las genere en el CSS final, podría "ganar" cualquiera de las dos, con resultados impredecibles.

`twMerge` soluciona esto: entiende la semántica de Tailwind (sabe que `px-4` y `px-8` afectan la misma propiedad) y se queda solo con la última, eliminando el conflicto.

---
### Por qué se usan juntos: `twMerge(clsx(...))`

Es un patrón muy usado en proyectos con Tailwind:

1. `clsx(...)` arma el string final de clases combinando las de base con las condicionales/externas
2. `twMerge(...)` toma ese string y limpia los conflictos, dejando solo la clase "ganadora" de cada propiedad

Así, si alguien usa tu `Container` así:

tsx

```
<Container className="max-w-4xl">...</Container>
```

El resultado final va a tener `max-w-4xl` (el que vino de afuera) en vez de `max-w-6xl` (el que trae el componente por defecto), sin que queden los dos pegoteados generando comportamiento raro. Esto es justamente lo que hace que este patrón de componente sea tan reutilizable: podés sobreescribir estilos puntuales sin pelear contra las clases internas.

---

# 17. Personalización del ancho

Aunque el Container utiliza por defecto:

```tsx id="k4p9cx"
max-w-6xl
```

puede utilizarse un ancho diferente.

### `max-w-5xl`

```tsx id="q7v2mx"
<Container className='max-w-5xl'>
  ...
</Container>
```

Aproximadamente:

```text
1024 px
```

Adecuado para:

- portfolios;
- grids;
- landing pages;
- contenido general.

### `max-w-4xl`

```tsx id="n3c8vr"
<Container className='max-w-4xl'>
  ...
</Container>
```

Aproximadamente:

```text
896 px
```

Adecuado para:

- artículos;
- blogs;
- documentación;
- contenido principalmente textual.

### `max-w-6xl`

```tsx id="x6m4pz"
<Container className='max-w-6xl'>
  ...
</Container>
```

Aproximadamente:

```text
1152 px
```

Adecuado para:

- dashboards;
- galerías;
- grids amplios;
- layouts con mucho contenido horizontal.

---

# 18. Uso básico

La forma más sencilla de utilizarlo es:

```tsx id="j9v3qm"
<Container>
  <h1>Mi página</h1>
</Container>
```

El componente se encarga automáticamente de:

```text
Centrar
   +
Ancho completo
   +
Ancho máximo
   +
Padding responsive
```

---

# 19. Uso con una sección

```tsx id="w5k8rx"
<section>
  <Container>
    <h2>Servicios</h2>

    <p>
      Información sobre nuestros servicios.
    </p>
  </Container>
</section>
```

La sección mantiene su propio contexto mientras `Container` controla el ancho del contenido.

---

# 20. Uso con un grid

```tsx id="v2m6qc"
<Container>
  <div className='grid gap-6 md:grid-cols-3'>
    <Card />
    <Card />
    <Card />
  </div>
</Container>
```

El `Container` controla el ancho externo y el grid controla la distribución interna.

Conceptualmente:

```text
Container
│
└── Grid
    │
    ├── Card
    ├── Card
    └── Card
```

---

# 21. Uso en Header

El `Header` puede utilizarlo de esta forma:

```tsx id="p7n4xm"
<header>
  <Container>
    ...
  </Container>
</header>
```

Esto permite que el contenido del header mantenga exactamente el mismo sistema horizontal que el resto de la aplicación.

---

# 22. Uso en Footer

El `Footer` también puede utilizar:

```tsx id="r8m3vk"
<footer>
  <Container>
    ...
  </Container>
</footer>
```

De esta forma:

```text
Header
  ↓
Container

Contenido
  ↓
Container

Footer
  ↓
Container
```

todos comparten la misma estructura de ancho y padding.

---

# 23. Uso en Hero

También puede utilizarse dentro de un Hero:

```tsx id="c5q8nz"
<section className='relative'>
  <Hero />

  <Container>
    <div className='relative z-10'>
      <h1>Bienvenido</h1>
    </div>
  </Container>
</section>
```

Aquí cada componente tiene una responsabilidad diferente:

```text
Hero
  ↓
Fondo visual

Container
  ↓
Ancho y espaciado

Contenido
  ↓
Información del Hero
```

---

# 24. No necesita `sizes`, `center` ni lógica adicional

El componente ya resuelve sus responsabilidades mediante Tailwind:

```tsx id="f8v2mq"
mx-auto
w-full
max-w-6xl
px-4
sm:px-6
lg:px-8
```

No necesita props como:

```text
sizes
center
width
padding
```

ni lógica JavaScript para determinar el ancho.

El comportamiento responsive queda delegado a CSS/Tailwind.

---

# 25. Props opcionales

Todas las props son opcionales.

Esto permite incluso utilizar:

```tsx id="n5c9rx"
<Container />
```

aunque su uso habitual será proporcionar contenido:

```tsx id="v4m8kp"
<Container>
  ...
</Container>
```

También puede personalizarse:

```tsx id="s7q3mz"
<Container className='max-w-4xl'>
  ...
</Container>
```

---

# 26. Arquitectura del componente

La arquitectura es deliberadamente pequeña:

```text id="p9k4vx"
Container
│
├── Props
│   ├── children
│   └── className
│
├── clsx
│   └── Combina clases
│
├── twMerge
│   └── Resuelve conflictos Tailwind
│
└── div
    └── children
```

No contiene:

- estado;
- efectos;
- eventos;
- llamadas a API;
- lógica de negocio;
- dependencias externas de datos.

---

# 27. Responsabilidades

`Container.tsx` tiene una responsabilidad muy concreta:

> **Controlar el ancho y espaciado horizontal del contenido.**

### Responsabilidades

- Centrar contenido.
- Establecer ancho completo.
- Limitar ancho máximo.
- Aplicar padding responsive.
- Permitir personalización mediante `className`.
- Resolver conflictos entre clases Tailwind.

### No es responsabilidad del Container

- Crear layouts internos.
- Controlar grids.
- Gestionar navegación.
- Gestionar estado.
- Gestionar responsive mediante JavaScript.
- Renderizar contenido específico.

---

# 28. Características principales

| Característica | Implementación |
|---|---|
| Centrado | `mx-auto` |
| Ancho completo | `w-full` |
| Ancho máximo | `max-w-6xl` |
| Padding móvil | `px-4` |
| Padding `sm` | `sm:px-6` |
| Padding `lg` | `lg:px-8` |
| Clases dinámicas | `clsx` |
| Resolución de conflictos | `twMerge` |
| Contenido | `children` |
| Personalización | `className` |
| Estado | Ninguno |
| Props obligatorias | Ninguna |

---

# 29. Flujo del componente

El flujo es:

```text id="c6v9mx"
Container recibe props
        │
        ├── children
        │
        └── className
                │
                ▼
              clsx
                │
                ▼
            twMerge
                │
                ▼
        className final
                │
                ▼
             <div>
                │
                ▼
             children
```

---

# 30. Ejemplo completo

```tsx id="m8q5vr"
import clsx from 'clsx'

import { twMerge } from 'tailwind-merge'

interface ContainerProps {
  children?: React.ReactNode
  className?: string
}

export default function Container({
  children,
  className,
}: ContainerProps) {
  return (
    <div
      className={twMerge(
        clsx(
          'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8',
          className
        )
      )}
    >
      {children}
    </div>
  )
}
```

---

# 31. Resumen

`Container.tsx` es el componente encargado de establecer el **sistema horizontal común de la aplicación**.

Su configuración predeterminada:

```tsx id="q4n7cx"
'mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8'
```

significa:

```text
mx-auto
↓
Contenido centrado

w-full
↓
Ocupa el ancho disponible

max-w-6xl
↓
Máximo aproximado de 1152px

px-4
↓
16px en móvil

sm:px-6
↓
24px desde 640px

lg:px-8
↓
32px desde 1024px
```

La arquitectura final es:

```text
Container
│
├── Ancho
│   ├── w-full
│   └── max-w-6xl
│
├── Centrado
│   └── mx-auto
│
├── Espaciado
│   ├── px-4
│   ├── sm:px-6
│   └── lg:px-8
│
└── Personalización
    ├── clsx
    └── twMerge
```

Es un componente base de layout que permite que `Header`, `Footer`, Hero, páginas y secciones compartan **el mismo sistema de ancho, centrado y espaciado**, manteniendo una estructura visual consistente en toda la aplicación.
# ContactCard.tsx

Componente reutilizable para representar información de contacto dentro de una tarjeta visual.

Está diseñado para mostrar:

- Un título.
- Un valor de contacto.
- Un icono.
- Un enlace externo.
- Contenido personalizado mediante `children`.

El componente utiliza `next/link` para convertir automáticamente el valor en un enlace cuando se proporciona `href`.

---

# 1. ¿Qué hace?

`ContactCard` representa un bloque de información de contacto.

La estructura visual general es:

```text
┌──────────────────────────────┐
│                              │
│            ICONO             │
│                              │
│           TÍTULO             │
│                              │
│            VALOR             │
│                              │
└──────────────────────────────┘
```

Por ejemplo:

```tsx
<ContactCard
  title="Teléfono"
  value="+54 9 261 123 4567"
  icon={<PhoneIcon className="h-6 w-6" />}
/>
```

---

# 2. Props

El componente utiliza la siguiente interfaz:

```ts
type ContactCardProps = {
  title: string
  value?: string
  href?: string
  icon: ReactNode
  children?: ReactNode
}
```

Dispone de cinco propiedades:

| Prop | Tipo | Obligatoria | Descripción |
|---|---|---|---|
| `title` | `string` | Sí | Título de la tarjeta |
| `value` | `string` | No | Valor que se muestra |
| `href` | `string` | No | URL del enlace |
| `icon` | `ReactNode` | Sí | Icono de la tarjeta |
| `children` | `ReactNode` | No | Contenido personalizado |

---

# 3. `title`

La propiedad:

```ts
title: string
```

es obligatoria.

Representa el título de la información.

Ejemplo:

```tsx
<ContactCard
  title="Teléfono"
  icon={<PhoneIcon />}
/>
```

El título aparece como:

```text
TELÉFONO
```

El componente aplica:

```text
text-sm
font-bold
tracking-widest
text-title
uppercase
```

Por lo tanto, el título se muestra en mayúsculas y con espaciado entre caracteres.

---

# 4. `value`

La propiedad:

```ts
value?: string
```

representa el valor asociado al título.

Ejemplo:

```tsx
<ContactCard
  title="Teléfono"
  value="+54 9 261 123 4567"
  icon={<PhoneIcon />}
/>
```

Visualmente:

```text
TELÉFONO

+54 9 261 123 4567
```

`value` es opcional porque el componente también puede utilizar `children` para proporcionar contenido personalizado.

---

# 5. `icon`

La propiedad:

```ts
icon: ReactNode
```

es obligatoria.

Permite introducir cualquier elemento React como icono.

Por ejemplo:

```tsx
import { PhoneIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Teléfono"
  value="+54 9 261 123 4567"
  icon={<PhoneIcon className="h-6 w-6" />}
/>
```

El icono aparece encima del título.

El contenedor del icono utiliza:

```text
text-primary
```

Por lo tanto, el color del icono proviene de la variable de diseño `primary`.

---

# 6. Uso con Heroicons

El componente es especialmente adecuado para utilizarse con Heroicons.

Ejemplo:

```tsx
import { MapPinIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Dirección"
  value="Mendoza, Argentina"
  icon={<MapPinIcon className="h-6 w-6" />}
/>
```

Otro ejemplo:

```tsx
import { EnvelopeIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Email"
  value="contacto@empresa.com"
  icon={<EnvelopeIcon className="h-6 w-6" />}
/>
```

---

# 7. `href`

La propiedad:

```ts
href?: string
```

permite convertir el valor en un enlace.

Cuando `href` existe, el componente utiliza:

```tsx
<Link>
```

de Next.js.

Ejemplo:

```tsx
<ContactCard
  title="Email"
  value="contacto@empresa.com"
  href="mailto:contacto@empresa.com"
  icon={<EnvelopeIcon className="h-6 w-6" />}
/>
```

En este caso el valor:

```text
contacto@empresa.com
```

se convierte en un enlace.

---

# 8. Enlaces externos

El componente configura automáticamente:

```tsx
target="_blank"
rel="noopener noreferrer"
```

cuando utiliza `href`.

Por ejemplo:

```tsx
<ContactCard
  title="Google Maps"
  value="Ver ubicación"
  href="https://maps.google.com"
  icon={<MapPinIcon className="h-6 w-6" />}
/>
```

El enlace se abrirá en una nueva pestaña.

---

# 9. Comportamiento sin `href`

Si no se proporciona:

```ts
href
```

el valor no será un enlace.

Ejemplo:

```tsx
<ContactCard
  title="Horario"
  value="Lunes a viernes, 08:00 - 18:00"
  icon={<ClockIcon className="h-6 w-6" />}
/>
```

El componente renderiza:

```tsx
<p>
  Lunes a viernes, 08:00 - 18:00
</p>
```

Por lo tanto:

```text
href
  │
  ├── existe
  │     ↓
  │   Link
  │
  └── no existe
        ↓
      <p>
```

---

# 10. `children`

La propiedad:

```ts
children?: ReactNode
```

permite reemplazar completamente el contenido que normalmente mostraría `value`.

La lógica es:

```tsx
{children ? (
  children
) : href ? (
  <Link>
    {value}
  </Link>
) : (
  <p>
    {value}
  </p>
)}
```

Por lo tanto, `children` tiene prioridad.

---

# 11. Prioridad de contenido

El componente sigue este orden:

```text
children
   ↓
href + value
   ↓
value
```

Más exactamente:

### Caso 1

Existe `children`:

```tsx
<ContactCard
  title="Redes sociales"
  icon={<ShareIcon />}
>
  ...
</ContactCard>
```

Se muestra `children`.

### Caso 2

No existe `children`, pero existe `href`:

```tsx
<ContactCard
  title="Sitio web"
  value="Visitar sitio"
  href="https://example.com"
  icon={<GlobeAltIcon />}
/>
```

Se muestra:

```tsx
<Link>
  Visitar sitio
</Link>
```

### Caso 3

No existe `children` ni `href`:

```tsx
<ContactCard
  title="Horario"
  value="08:00 - 18:00"
  icon={<ClockIcon />}
/>
```

Se muestra:

```tsx
<p>
  08:00 - 18:00
</p>
```

---

# 12. Uso con contenido personalizado

`children` permite crear contenido más complejo que un simple texto.

Por ejemplo:

```tsx
<ContactCard
  title="Redes sociales"
  icon={<ShareIcon className="h-6 w-6" />}
>
  <div className="flex gap-3">
    <a href="#">
      Facebook
    </a>

    <a href="#">
      Instagram
    </a>
  </div>
</ContactCard>
```

En este caso no es necesario utilizar `value`.

---

# 13. Uso con varios elementos

También puede utilizarse para mostrar información estructurada:

```tsx
<ContactCard
  title="Atención al cliente"
  icon={<UserGroupIcon className="h-6 w-6" />}
>
  <div className="space-y-1">
    <p>Ventas</p>
    <p>Administración</p>
    <p>Soporte</p>
  </div>
</ContactCard>
```

Esto demuestra que `ContactCard` no está limitado a texto simple.

---

# 14. Estilos de la tarjeta

El elemento principal es:

```tsx
<article>
```

y utiliza:

```text
flex
flex-col
items-center
rounded-xl
border
border-border
bg-background
p-6
text-center
shadow-sm
transition
hover:-translate-y-1
hover:shadow-md
```

Esto proporciona:

- Layout vertical.
- Contenido centrado.
- Bordes redondeados.
- Borde del sistema.
- Fondo del sistema.
- Espaciado interno.
- Texto centrado.
- Sombra.
- Animación al pasar el cursor.

---

# 15. Efecto hover

Cuando el usuario coloca el cursor sobre la tarjeta:

```text
hover:-translate-y-1
hover:shadow-md
```

La tarjeta:

1. Se desplaza ligeramente hacia arriba.
2. Aumenta su sombra.

Visualmente produce un efecto de elevación.

---

# 16. Color del icono

El contenedor del icono utiliza:

```text
text-primary
```

Ejemplo:

```tsx
<div className="mb-4 text-primary">
  {icon}
</div>
```

Esto significa que el color del icono está controlado por el sistema de colores del proyecto.

---

# 17. Uso para teléfono

```tsx
import { PhoneIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Teléfono"
  value="+54 9 261 123 4567"
  href="tel:+5492611234567"
  icon={<PhoneIcon className="h-6 w-6" />}
/>
```

Al utilizar:

```text
tel:
```

el usuario puede iniciar una llamada desde dispositivos compatibles.

---

# 18. Uso para email

```tsx
import { EnvelopeIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Email"
  value="contacto@empresa.com"
  href="mailto:contacto@empresa.com"
  icon={<EnvelopeIcon className="h-6 w-6" />}
/>
```

El enlace abre el cliente de correo correspondiente.

---

# 19. Uso para dirección

```tsx
import { MapPinIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Ubicación"
  value="Mendoza, Argentina"
  href="https://maps.google.com"
  icon={<MapPinIcon className="h-6 w-6" />}
/>
```

---

# 20. Uso para horario

Cuando no se necesita un enlace:

```tsx
import { ClockIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Horario"
  value="Lunes a viernes · 08:00 - 18:00"
  icon={<ClockIcon className="h-6 w-6" />}
/>
```

En este caso el valor se representa como:

```tsx
<p>
  Lunes a viernes · 08:00 - 18:00
</p>
```

---

# 21. Uso para redes sociales

Mediante `children`:

```tsx
import { ShareIcon } from '@heroicons/react/24/outline'

<ContactCard
  title="Redes sociales"
  icon={<ShareIcon className="h-6 w-6" />}
>
  <div className="flex gap-4">
    <a href="#">
      Facebook
    </a>

    <a href="#">
      Instagram
    </a>

    <a href="#">
      LinkedIn
    </a>
  </div>
</ContactCard>
```

---

# 22. Uso dentro de un grid

El componente está diseñado para poder utilizarse dentro de layouts con múltiples tarjetas.

Por ejemplo:

```tsx
<div className="grid gap-6 md:grid-cols-3">
  <ContactCard
    title="Teléfono"
    value="+54 9 261 123 4567"
    href="tel:+5492611234567"
    icon={<PhoneIcon className="h-6 w-6" />}
  />

  <ContactCard
    title="Email"
    value="contacto@empresa.com"
    href="mailto:contacto@empresa.com"
    icon={<EnvelopeIcon className="h-6 w-6" />}
  />

  <ContactCard
    title="Ubicación"
    value="Mendoza, Argentina"
    href="https://maps.google.com"
    icon={<MapPinIcon className="h-6 w-6" />}
  />
</div>
```

El `ContactCard` se encarga de la tarjeta individual, mientras que el contenedor controla la distribución.

---

# 23. Estructura conceptual

La estructura interna es:

```text
ContactCard
│
└── article
    │
    ├── Icon
    │
    ├── Title
    │
    └── Content
        │
        ├── children
        │
        ├── Link + value
        │
        └── p + value
```

---

# 24. Lógica de contenido

La parte principal del componente puede representarse conceptualmente como:

```text
¿Existe children?
       │
      Sí
       ↓
Mostrar children

       No
       ↓
¿Existe href?
       │
      Sí
       ↓
Mostrar Link con value

       No
       ↓
Mostrar p con value
```

Esto permite utilizar la tarjeta tanto para información estática como para información interactiva.

---

# 25. API del componente

```ts
type ContactCardProps = {
  title: string
  value?: string
  href?: string
  icon: ReactNode
  children?: ReactNode
}
```

### `title`

```ts
title: string
```

Título obligatorio de la tarjeta.

### `value`

```ts
value?: string
```

Texto o valor principal.

### `href`

```ts
href?: string
```

Convierte `value` en un enlace mediante `next/link`.

### `icon`

```ts
icon: ReactNode
```

Icono obligatorio.

### `children`

```ts
children?: ReactNode
```

Permite reemplazar el contenido estándar por contenido personalizado.

---

# 26. Casos de uso

El componente puede utilizarse para:

| Caso | `value` | `href` | `children` |
|---|---:|---:|---:|
| Teléfono | ✓ | ✓ | — |
| Email | ✓ | ✓ | — |
| Dirección | ✓ | ✓ | — |
| Horario | ✓ | — | — |
| Sitio web | ✓ | ✓ | — |
| Redes sociales | — | — | ✓ |
| Información personalizada | — | — | ✓ |
| Datos de contacto | ✓ | opcional | — |

---

# 27. Resumen

`ContactCard` es un componente especializado para presentar información de contacto de manera consistente.

Sus principales características son:

- Tarjeta visual reutilizable.
- Icono configurable.
- Título obligatorio.
- Valor opcional.
- Enlaces mediante `next/link`.
- Apertura de enlaces en nueva pestaña.
- Soporte para `children`.
- Contenido completamente personalizable.
- Diseño responsive mediante el layout donde se coloque.
- Efecto hover.
- Integración con las variables visuales del proyecto.
- Compatible con Heroicons.

El uso más simple es:

```tsx
<ContactCard
  title="Teléfono"
  value="+54 9 261 123 4567"
  icon={<PhoneIcon className="h-6 w-6" />}
/>
```

Como enlace:

```tsx
<ContactCard
  title="Email"
  value="contacto@empresa.com"
  href="mailto:contacto@empresa.com"
  icon={<EnvelopeIcon className="h-6 w-6" />}
/>
```

Y para contenido personalizado:

```tsx
<ContactCard
  title="Redes sociales"
  icon={<ShareIcon className="h-6 w-6" />}
>
  <div className="flex gap-3">
    <a href="#">Facebook</a>
    <a href="#">Instagram</a>
  </div>
</ContactCard>
```
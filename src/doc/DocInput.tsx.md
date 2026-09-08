# Input.tsx

Componente reutilizable de entrada de datos para aplicaciones **Next.js + React + TypeScript + Tailwind CSS**.

El componente permite manejar diferentes tipos de entradas mediante una única API, incluyendo:

- Inputs normales.
- Inputs con `label`.
- Inputs con `label` flotante.
- Inputs con iconos.
- Inputs de contraseña.
- Textareas.
- Campos obligatorios.
- Personalización de estilos.
- Control del número de filas del textarea.
- Eventos `onChange`.
- Estados `disabled`.
- Tipos HTML estándar.

El componente utiliza `'use client'` porque administra estado interno mediante `useState`.

---

# 1. ¿Qué hace?

`Input` es un componente reutilizable para construir campos de formularios.

Su principal característica es que puede funcionar como:

```tsx
<input>
```

o como:

```tsx
<textarea>
```

dependiendo de la propiedad:

```tsx
multiline
```

Por defecto:

```tsx
multiline = false
```

Por lo tanto:

```tsx
<Input />
```

crea un `<input>`.

Mientras que:

```tsx
<Input multiline />
```

crea un `<textarea>`.

---

# 2. Característica principal: Input o Textarea

## Input normal

```tsx
<Input />
```

Renderiza:

```html
<input>
```

## Textarea

```tsx
<Input multiline />
```

Renderiza:

```html
<textarea>
```

Esto permite utilizar un único componente para diferentes necesidades de formularios.

---

# 3. Label normal

La propiedad:

```ts
label?: string
```

permite mostrar un label encima del campo.

Ejemplo:

```tsx
<Input label="Nombre" />
```

Visualmente:

```text
Nombre
┌──────────────────────┐
│                      │
└──────────────────────┘
```

El label solamente aparece de esta manera cuando:

```tsx
floating={false}
```

que es el valor predeterminado.

---

# 4. Label flotante

El componente permite utilizar labels flotantes mediante:

```tsx
floating
```

Ejemplo:

```tsx
<Input
  label="Nombre"
  floating
/>
```

El label inicialmente aparece dentro del campo.

Cuando el usuario enfoca el campo o introduce contenido, el label se desplaza hacia la parte superior.

Conceptualmente:

```text
┌──────────────────────┐
│ Nombre               │
│                      │
└──────────────────────┘
```

Al enfocar o escribir:

```text
┌─Nombre───────────────┐
│ Juan                 │
└──────────────────────┘
```

El efecto se consigue mediante las clases Tailwind:

```text
peer-focus:top-0
peer-focus:text-xs
peer-focus:font-semibold
peer-not-placeholder-shown:top-0
peer-not-placeholder-shown:text-xs
peer-not-placeholder-shown:font-semibold
```

---

# 5. Iconos

El componente permite agregar un icono mediante:

```ts
icon?: ReactNode
```

Por ejemplo:

```tsx
import { UserIcon } from '@heroicons/react/24/outline'

<Input
  label="Usuario"
  icon={<UserIcon className="h-5 w-5" />}
/>
```

El icono aparece dentro del lado izquierdo del campo.

Cuando existe un icono, el componente automáticamente agrega espacio para evitar que el texto se superponga:

```text
pl-12
```

Sin icono:

```text
pl-4
```

Con icono:

```text
pl-12
```

---

# 6. Uso con Heroicons

El componente está preparado para trabajar con `ReactNode`, por lo que puede utilizarse directamente con Heroicons.

Ejemplo:

```tsx
import { UserIcon } from '@heroicons/react/24/outline'

<Input
  label="Usuario"
  icon={<UserIcon className="h-5 w-5" />}
/>
```

Otro ejemplo:

```tsx
import { EnvelopeIcon } from '@heroicons/react/24/outline'

<Input
  label="Email"
  type="email"
  icon={<EnvelopeIcon className="h-5 w-5" />}
/>
```

---

# 7. Campo de contraseña

El componente tiene soporte específico para:

```tsx
type="password"
```

Ejemplo:

```tsx
<Input
  label="Contraseña"
  type="password"
/>
```

Cuando el tipo es `password`, aparece automáticamente un botón con un icono de ojo.

Utiliza:

```tsx
EyeIcon
```

y:

```tsx
EyeSlashIcon
```

de:

```text
@heroicons/react/24/outline
```

---

# 8. Mostrar y ocultar contraseña

El componente mantiene internamente:

```tsx
const [showPassword, setShowPassword] = useState(false)
```

Inicialmente:

```text
showPassword = false
```

Por lo tanto:

```tsx
type="password"
```

permanece oculto.

Cuando el usuario pulsa el botón:

```tsx
setShowPassword((prev) => !prev)
```

el tipo cambia entre:

```text
password
```

y:

```text
text
```

La lógica es:

```tsx
const inputType =
  isPassword && showPassword
    ? 'text'
    : type
```

---

# 9. Iconos de contraseña

Cuando la contraseña está oculta:

```tsx
<EyeIcon />
```

Cuando está visible:

```tsx
<EyeSlashIcon />
```

También cambia automáticamente el atributo:

```tsx
aria-label
```

entre:

```text
Mostrar contraseña
```

y:

```text
Ocultar contraseña
```

Esto proporciona una descripción accesible para el control.

---

# 10. Textarea

Para crear un textarea:

```tsx
<Input
  multiline
  label="Descripción"
/>
```

El componente renderiza:

```html
<textarea>
```

---

# 11. Número de filas del textarea

La propiedad:

```ts
textareaRows?: number
```

permite definir la cantidad inicial de filas.

Por defecto:

```tsx
textareaRows = 4
```

Ejemplo:

```tsx
<Input
  multiline
  label="Descripción"
  textareaRows={6}
/>
```

Esto genera conceptualmente:

```html
<textarea rows="6">
```

---

# 12. Redimensionamiento del textarea

El textarea utiliza:

```text
resize-y
```

Esto permite al usuario cambiar verticalmente su tamaño.

También tiene:

```text
min-h-32
max-h-64
```

Por lo tanto, existe un tamaño mínimo y máximo.

Además utiliza:

```text
overflow-y-auto
```

para permitir desplazamiento vertical cuando el contenido supera el espacio disponible.

---

# 13. Placeholder

El componente soporta:

```tsx
placeholder
```

Ejemplo:

```tsx
<Input
  label="Usuario"
  placeholder="Ingrese su usuario"
/>
```

Cuando no se utiliza `floating`, el placeholder se muestra normalmente.

---

# 14. Placeholder con `floating`

Cuando:

```tsx
floating
```

está habilitado, el componente utiliza:

```tsx
placeholder=" "
```

Esto es intencional.

El espacio permite que funcionen correctamente las variantes Tailwind:

```text
peer-placeholder-shown
```

El texto visible del label flotante proviene de:

```tsx
label || placeholder
```

Por ejemplo:

```tsx
<Input
  floating
  label="Usuario"
/>
```

utiliza:

```text
Usuario
```

como label.

---

# 15. Campo obligatorio

La propiedad:

```ts
required?: boolean
```

permite marcar el campo como obligatorio.

Ejemplo:

```tsx
<Input
  label="Nombre"
  required
/>
```

Además del atributo HTML:

```html
required
```

el componente muestra:

```text
*
```

junto al label.

---

# 16. Label obligatorio normal

Con:

```tsx
<Input
  label="Nombre"
  required
/>
```

el label muestra:

```text
Nombre *
```

El asterisco utiliza:

```text
text-red-500
```

y tiene:

```text
title="Campo obligatorio"
```

---

# 17. Label flotante obligatorio

También funciona con:

```tsx
<Input
  label="Nombre"
  floating
  required
/>
```

El label flotante mostrará:

```text
Nombre *
```

---

# 18. Tipos de input

Como `InputProps` extiende:

```ts
InputHTMLAttributes<HTMLInputElement>
```

el componente admite los tipos HTML habituales.

Por ejemplo:

### Texto

```tsx
<Input type="text" />
```

### Email

```tsx
<Input type="email" />
```

### Contraseña

```tsx
<Input type="password" />
```

### Número

```tsx
<Input type="number" />
```

### Fecha

```tsx
<Input type="date" />
```

### Hora

```tsx
<Input type="time" />
```

### Teléfono

```tsx
<Input type="tel" />
```

### URL

```tsx
<Input type="url" />
```

---

# 19. Uso con formularios

Puede utilizarse directamente dentro de un formulario:

```tsx
<form>
  <Input
    label="Nombre"
    name="nombre"
    required
  />

  <Input
    label="Email"
    name="email"
    type="email"
    required
  />

  <Input
    label="Contraseña"
    name="password"
    type="password"
    required
  />
</form>
```

---

# 20. `onChange`

El componente redefine `onChange` para aceptar tanto inputs como textareas:

```ts
onChange?: ChangeEventHandler<
  HTMLInputElement | HTMLTextAreaElement
>
```

Por ejemplo:

```tsx
<Input
  label="Nombre"
  onChange={(event) => {
    console.log(event.target.value)
  }}
/>
```

Con `multiline` también funciona:

```tsx
<Input
  multiline
  label="Descripción"
  onChange={(event) => {
    console.log(event.target.value)
  }}
/>
```

Esto permite utilizar el mismo patrón de evento para ambos elementos.

---

# 21. Personalización del contenedor

La propiedad:

```ts
className?: string
```

se aplica al contenedor principal:

```tsx
<div className={className}>
```

Por ejemplo:

```tsx
<Input
  label="Nombre"
  className="w-full max-w-md"
/>
```

También:

```tsx
<Input
  label="Nombre"
  className="mt-4"
/>
```

---

# 22. Personalización del input

La propiedad:

```ts
inputClassName?: string
```

se aplica directamente al:

```tsx
<input>
```

o:

```tsx
<textarea>
```

Ejemplo:

```tsx
<Input
  label="Nombre"
  inputClassName="rounded-lg"
/>
```

Esto permite personalizar el campo sin modificar el contenedor.

---

# 23. Personalización del label

La propiedad:

```ts
labelClassName?: string
```

permite modificar el estilo del label normal.

Ejemplo:

```tsx
<Input
  label="Nombre"
  labelClassName="uppercase"
/>
```

Esto se aplica al `<label>` cuando:

```tsx
floating={false}
```

---

# 24. Diferencia entre `className` e `inputClassName`

Es importante distinguir ambas propiedades.

### `className`

Modifica el contenedor:

```tsx
<div>
```

Ejemplo:

```tsx
<Input className="mt-4" />
```

### `inputClassName`

Modifica el campo:

```tsx
<input>
```

o:

```tsx
<textarea>
```

Ejemplo:

```tsx
<Input inputClassName="rounded-full" />
```

Conceptualmente:

```text
className
    ↓
┌───────────────────────────────┐
│                               │
│   inputClassName              │
│   ↓                           │
│   ┌───────────────────────┐   │
│   │       Input           │   │
│   └───────────────────────┘   │
│                               │
└───────────────────────────────┘
```

---

# 25. Estilos base

Todos los inputs y textareas comparten:

```text
peer
w-full
border
border-border
bg-background
text-muted
text-sm
outline-none
transition-colors
disabled:pointer-events-none
disabled:opacity-50
focus:border-primary
focus:ring-1
focus:ring-primary
```

Esto proporciona una apariencia consistente entre todos los campos.

---

# 26. Estado `disabled`

Como hereda las propiedades estándar de:

```ts
InputHTMLAttributes<HTMLInputElement>
```

puede utilizar:

```tsx
<Input
  label="Nombre"
  disabled
/>
```

El campo queda deshabilitado y utiliza:

```text
disabled:pointer-events-none
disabled:opacity-50
```

---

# 27. Input con icono

Ejemplo completo:

```tsx
import { UserIcon } from '@heroicons/react/24/outline'

<Input
  label="Usuario"
  placeholder="Ingrese su usuario"
  icon={<UserIcon className="h-5 w-5" />}
/>
```

---

# 28. Input con label flotante e icono

```tsx
import { UserIcon } from '@heroicons/react/24/outline'

<Input
  label="Usuario"
  floating
  icon={<UserIcon className="h-5 w-5" />}
/>
```

Cuando existe el icono, el label flotante se posiciona automáticamente utilizando:

```text
left-12
```

En ausencia de icono:

```text
left-4
```

---

# 29. Input de contraseña completo

```tsx
import { LockClosedIcon } from '@heroicons/react/24/outline'

<Input
  label="Contraseña"
  type="password"
  required
  icon={<LockClosedIcon className="h-5 w-5" />}
/>
```

El componente se encarga automáticamente del botón para mostrar/ocultar la contraseña.

---

# 30. Textarea completo

```tsx
<Input
  multiline
  label="Descripción"
  placeholder="Ingrese una descripción"
  textareaRows={6}
/>
```

---

# 31. Textarea con icono

```tsx
import { DocumentTextIcon } from '@heroicons/react/24/outline'

<Input
  multiline
  label="Descripción"
  icon={<DocumentTextIcon className="h-5 w-5" />}
/>
```

En este caso el icono se coloca en la parte superior del textarea:

```text
┌────────────────────────────┐
│  📝                        │
│                            │
│  Descripción...            │
│                            │
│                            │
└────────────────────────────┘
```

Esto ocurre porque el posicionamiento del icono cambia según:

```tsx
multiline
```

Para un input:

```text
top-1/2 -translate-y-1/2
```

Para un textarea:

```text
top-4
```

---

# 32. Ejemplo de formulario completo

```tsx
import {
  EnvelopeIcon,
  LockClosedIcon,
  UserIcon,
} from '@heroicons/react/24/outline'

<form>
  <Input
    label="Usuario"
    name="usuario"
    required
    icon={<UserIcon className="h-5 w-5" />}
  />

  <Input
    label="Email"
    name="email"
    type="email"
    required
    icon={<EnvelopeIcon className="h-5 w-5" />}
  />

  <Input
    label="Contraseña"
    name="password"
    type="password"
    required
    icon={<LockClosedIcon className="h-5 w-5" />}
  />

  <Input
    multiline
    label="Observaciones"
    name="observaciones"
    textareaRows={5}
  />
</form>
```

---

# 33. Ejemplo con labels flotantes

```tsx
<Input
  label="Nombre"
  floating
/>

<Input
  label="Apellido"
  floating
/>

<Input
  label="Email"
  type="email"
  floating
/>
```

---

# 34. Ejemplo con diferentes tipos

```tsx
<Input
  label="Nombre"
  type="text"
/>

<Input
  label="Edad"
  type="number"
/>

<Input
  label="Fecha de nacimiento"
  type="date"
/>

<Input
  label="Teléfono"
  type="tel"
/>

<Input
  label="Email"
  type="email"
/>
```

---

# 35. API del componente

## Props propias

| Prop | Tipo | Predeterminado | Descripción |
|---|---|---|---|
| `label` | `string` | — | Texto del label |
| `floating` | `boolean` | `false` | Activa el label flotante |
| `icon` | `ReactNode` | — | Icono dentro del campo |
| `className` | `string` | — | Clase del contenedor |
| `inputClassName` | `string` | — | Clase del input/textarea |
| `labelClassName` | `string` | — | Clase del label |
| `multiline` | `boolean` | `false` | Convierte el input en textarea |
| `textareaRows` | `number` | `4` | Filas iniciales del textarea |
| `onChange` | `ChangeEventHandler<HTMLInputElement \| HTMLTextAreaElement>` | — | Evento de cambio |

---

# 36. Props HTML heredadas

El componente hereda las propiedades de:

```ts
InputHTMLAttributes<HTMLInputElement>
```

exceptuando:

```ts
className
```

y:

```ts
onChange
```

porque el componente define sus propias versiones.

Esto permite utilizar propiedades como:

```tsx
name
id
value
defaultValue
placeholder
required
disabled
readOnly
autoComplete
min
max
step
pattern
maxLength
minLength
type
```

entre otras propiedades HTML compatibles.

---

# 37. Estructura conceptual

El componente tiene esta estructura:

```text
Input
│
├── Contenedor
│
├── Label normal
│
└── Relative
    │
    ├── Icono
    │
    ├── Input
    │     └── Password toggle
    │
    ├── o Textarea
    │
    └── Floating label
```

---

# 38. Comportamiento de `multiline`

La propiedad:

```tsx
multiline
```

es la que determina qué elemento HTML se utiliza.

```text
multiline = false
        ↓
     <input>
```

Mientras:

```text
multiline = true
        ↓
    <textarea>
```

Además modifica automáticamente:

- Posición del icono.
- Padding.
- Altura.
- Redimensionamiento.
- Overflow.
- Comportamiento del label flotante.

---

# 39. Comportamiento de contraseña

La detección se realiza mediante:

```tsx
const isPassword =
  !multiline && type === 'password'
```

Esto significa que el comportamiento especial de contraseña solamente existe cuando:

```text
multiline = false
```

y:

```text
type = password
```

Por lo tanto:

```tsx
<Input type="password" />
```

activa el botón de mostrar/ocultar.

Mientras:

```tsx
<Input
  multiline
  type="password"
/>
```

no activa dicho comportamiento.

---

# 40. Resumen

`Input.tsx` es un componente de formulario reutilizable que centraliza diferentes tipos de campos.

Sus principales capacidades son:

- Input HTML.
- Textarea.
- Label normal.
- Label flotante.
- Iconos.
- Password con mostrar/ocultar.
- Campos obligatorios.
- Estados disabled.
- Placeholders.
- Eventos `onChange`.
- Diferentes tipos HTML.
- Personalización del contenedor.
- Personalización del campo.
- Personalización del label.
- Control de filas del textarea.
- Integración con Heroicons.
- Integración con formularios React.

La utilización más básica es:

```tsx
<Input label="Nombre" />
```

Con icono:

```tsx
<Input
  label="Usuario"
  icon={<UserIcon className="h-5 w-5" />}
/>
```

Con label flotante:

```tsx
<Input
  label="Usuario"
  floating
/>
```

Como contraseña:

```tsx
<Input
  label="Contraseña"
  type="password"
/>
```

Como textarea:

```tsx
<Input
  label="Descripción"
  multiline
/>
```

Por lo tanto, el componente puede cubrir prácticamente todos los campos de entrada básicos del sistema utilizando una única API consistente.
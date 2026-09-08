# Button.tsx

Componente reutilizable de botón para aplicaciones **Next.js + React + TypeScript + Tailwind CSS**.

El componente permite representar tanto un `<button>` HTML como un enlace de Next.js mediante una única API.

---

## 1. ¿Qué hace?

`Button` es un componente reutilizable que centraliza la apariencia y el comportamiento de botones y enlaces.

Puede utilizarse para:

- Botones normales.
- Botones de formularios.
- Acciones.
- Enlaces internos.
- Enlaces externos.
- Botones de navegación.
- Botones con estado de carga.
- Botones con diferentes tamaños.
- Botones con estilos personalizados.
- Elementos de menú.

La característica principal es que el componente determina automáticamente qué elemento HTML renderizar.

### Sin `href`

Renderiza:

```tsx
<button>
```

### Con `href`

Renderiza:

```tsx
<Link>
```

Por lo tanto, no es necesario crear un componente separado para botones y enlaces.

---

# 2. Variantes disponibles

El componente dispone de cuatro variantes:

```ts
type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'menu'
```

Las variantes son:

| Variante | Uso principal |
|---|---|
| `primary` | Acción principal |
| `secondary` | Acción secundaria |
| `ghost` | Acción discreta |
| `menu` | Elemento de menú |

---

# 3. Variante `primary`

Es la variante predeterminada.

```tsx
<Button>
  Guardar
</Button>
```

También puede especificarse explícitamente:

```tsx
<Button variant="primary">
  Guardar
</Button>
```

Utiliza:

```text
rounded-full
bg-background
px-4
py-1
text-title
hover:bg-muted
hover:text-link
```

## Usos recomendados

Ideal para acciones principales como:

- Guardar.
- Crear.
- Confirmar.
- Continuar.
- Enviar.
- Iniciar.
- Acceder.

Ejemplo:

```tsx
<Button variant="primary">
  Guardar empleado
</Button>
```

---

# 4. Variante `secondary`

Está pensada para acciones secundarias.

```tsx
<Button variant="secondary">
  Cancelar
</Button>
```

Utiliza:

```text
rounded-lg
bg-muted
text-link
hover:border-secondary
hover:brightness-105
```

## Usos recomendados

Por ejemplo:

- Cancelar.
- Volver.
- Ver detalles.
- Filtrar.
- Opciones secundarias.
- Acciones complementarias.

Ejemplo:

```tsx
<div className="flex gap-2">
  <Button variant="primary">
    Guardar
  </Button>

  <Button variant="secondary">
    Cancelar
  </Button>
</div>
```

---

# 5. Variante `ghost`

Es una variante más discreta.

```tsx
<Button variant="ghost">
  Editar
</Button>
```

Utiliza:

```text
rounded-lg
bg-background
text-foreground
hover:border-secondary
hover:bg-muted
hover:text-link
```

## Usos recomendados

Es apropiada para acciones que no deberían tener tanto peso visual:

- Editar.
- Ver.
- Más opciones.
- Volver.
- Acciones secundarias.
- Controles auxiliares.

Ejemplo:

```tsx
<Button variant="ghost">
  Ver detalles
</Button>
```

---

# 6. Variante `menu`

Está diseñada específicamente para elementos de navegación o menús.

```tsx
<Button variant="menu">
  Empleados
</Button>
```

Utiliza:

```text
block
w-full
p-4
text-center
text-xl
font-bold
text-title
transition
hover:bg-muted
```

## Usos recomendados

Por ejemplo:

```tsx
<nav>
  <Button variant="menu">
    Inicio
  </Button>

  <Button variant="menu">
    Empleados
  </Button>

  <Button variant="menu">
    Viajes
  </Button>
</nav>
```

También puede utilizarse con `href`:

```tsx
<Button
  variant="menu"
  href="/rrhh/empleados"
>
  Empleados
</Button>
```

En este caso se renderiza como un `Link`.

---

# 7. Tamaños

El componente tiene tres tamaños:

```ts
type ButtonSize = 'sm' | 'md' | 'lg'
```

| Tamaño | Altura | Texto |
|---|---:|---|
| `sm` | 32px | `text-sm` |
| `md` | 40px | `text-sm` |
| `lg` | 48px | `text-base` |

---

## 7.1 `sm`

```tsx
<Button size="sm">
  Editar
</Button>
```

Clases:

```text
h-8
px-3
text-sm
```

Ideal para:

- Tablas.
- Acciones pequeñas.
- Controles compactos.
- Botones dentro de tarjetas.

---

## 7.2 `md`

Es el tamaño predeterminado.

```tsx
<Button size="md">
  Guardar
</Button>
```

Ideal para la mayoría de las acciones de la aplicación.

---

## 7.3 `lg`

```tsx
<Button size="lg">
  Crear empleado
</Button>
```

Clases:

```text
h-12
px-6
text-base
```

Ideal para:

- Acciones importantes.
- Formularios.
- CTA.
- Pantallas donde el botón necesita mayor presencia visual.

---

# 8. Estado `loading`

El componente soporta un estado de carga mediante:

```tsx
loading
```

Ejemplo:

```tsx
<Button loading>
  Guardar
</Button>
```

Cuando `loading` es `true`:

1. El botón queda deshabilitado.
2. Se agrega `cursor-wait`.
3. Se agrega `opacity-70`.
4. El contenido se reemplaza por:

```text
Cargando...
```

Internamente:

```tsx
disabled={disabled || loading}
```

Por lo tanto:

```tsx
<Button loading>
  Guardar
</Button>
```

produce visualmente:

```text
Cargando...
```

y evita que el usuario vuelva a ejecutar la acción mientras está cargando.

---

# 9. Botón deshabilitado

Puede utilizarse la prop estándar de HTML:

```tsx
<Button disabled>
  Guardar
</Button>
```

El componente aplica automáticamente:

```text
disabled:pointer-events-none
disabled:opacity-50
```

Esto hace que el botón:

- No pueda interactuar.
- Se vea atenuado.

---

# 10. Uso con eventos

Como `ButtonProps` extiende:

```ts
React.ButtonHTMLAttributes<HTMLButtonElement>
```

permite utilizar las propiedades estándar de un botón HTML.

Por ejemplo:

```tsx
<Button onClick={() => console.log('Click')}>
  Presionar
</Button>
```

También:

```tsx
<Button
  onClick={handleSave}
>
  Guardar
</Button>
```

---

# 11. Uso con formularios

Puede utilizarse como botón de envío:

```tsx
<form onSubmit={handleSubmit}>
  <Button type="submit">
    Guardar
  </Button>
</form>
```

También puede utilizarse para cancelar:

```tsx
<Button type="button">
  Cancelar
</Button>
```

Esto es importante porque el tipo predeterminado de un `<button>` HTML dentro de un formulario puede comportarse como `submit`.

---

# 12. Uso como enlace interno

Si se proporciona:

```tsx
href
```

el componente utiliza `next/link`.

Ejemplo:

```tsx
<Button href="/empleados">
  Empleados
</Button>
```

Conceptualmente renderiza:

```tsx
<Link href="/empleados">
  Empleados
</Link>
```

Esto permite utilizar el componente para navegación interna sin crear otro componente.

---

# 13. Enlaces con variantes

Las variantes funcionan también con `href`.

Por ejemplo:

```tsx
<Button
  href="/rrhh/empleados"
  variant="primary"
>
  Empleados
</Button>
```

O:

```tsx
<Button
  href="/rrhh/empleados"
  variant="secondary"
>
  Ver empleados
</Button>
```

También:

```tsx
<Button
  href="/rrhh/empleados"
  variant="menu"
>
  Empleados
</Button>
```

---

# 14. Enlaces externos

El componente acepta:

```ts
target?: string
rel?: string
```

Por ejemplo:

```tsx
<Button
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
>
  Sitio web
</Button>
```

Esto permite utilizar el componente también para enlaces externos.

---

# 15. Descargas

También soporta:

```ts
download?: string
```

Ejemplo:

```tsx
<Button
  href="/documentos/manual.pdf"
  download="manual.pdf"
>
  Descargar manual
</Button>
```

---

# 16. Clases personalizadas

El componente permite agregar clases mediante:

```tsx
className
```

Ejemplo:

```tsx
<Button className="w-full">
  Guardar
</Button>
```

También:

```tsx
<Button className="mt-4 w-full">
  Continuar
</Button>
```

Las clases proporcionadas por el usuario se combinan con las clases internas mediante `clsx`.

---

# 17. Color de fondo personalizado

Existe una prop específica:

```ts
backgroundColor?: string
```

Ejemplo:

```tsx
<Button backgroundColor="#dc2626">
  Eliminar
</Button>
```

Esto genera internamente:

```tsx
style={{
  backgroundColor: '#dc2626'
}}
```

También puede utilizar valores CSS:

```tsx
<Button backgroundColor="var(--color-brand)">
  Acción
</Button>
```

---

# 18. Tamaño de texto personalizado

También existe:

```ts
textSize?: string
```

Ejemplo:

```tsx
<Button textSize="20px">
  Continuar
</Button>
```

Internamente:

```tsx
style={{
  fontSize: '20px'
}}
```

También acepta valores CSS como:

```tsx
<Button textSize="1.25rem">
  Continuar
</Button>
```

---

# 19. Combinación de propiedades

Las diferentes propiedades pueden combinarse.

Ejemplo:

```tsx
<Button
  variant="primary"
  size="lg"
  loading
>
  Guardar cambios
</Button>
```

Otro ejemplo:

```tsx
<Button
  variant="secondary"
  size="sm"
  className="w-full"
>
  Cancelar
</Button>
```

---

# 20. Uso con iconos

El componente acepta cualquier `React.ReactNode` como `children`.

Por lo tanto, puede utilizarse con iconos.

Ejemplo:

```tsx
<Button>
  <Icon />
  Guardar
</Button>
```

También:

```tsx
<Button>
  Editar
  <Icon />
</Button>
```

Y:

```tsx
<Button>
  <Icon />
  Nuevo empleado
</Button>
```

La clase base:

```text
inline-flex items-center justify-center
```

permite alinear correctamente los elementos internos.

---

# 21. Uso con contenido complejo

Como `children` es:

```ts
React.ReactNode
```

puede contener diferentes elementos React.

Ejemplo:

```tsx
<Button>
  <span>+</span>
  <span>Nuevo empleado</span>
</Button>
```

También:

```tsx
<Button>
  <p>Guardar</p>
</Button>
```

El componente base contiene reglas específicas para elementos `<p>`:

```text
[&>p]:m-0
[&>p]:leading-none
```

Esto elimina el margen del párrafo y normaliza su altura de línea.

---

# 22. Ejemplo completo

Una página podría utilizar las diferentes variantes de esta manera:

```tsx
<div className="flex gap-2">
  <Button variant="primary">
    Guardar
  </Button>

  <Button variant="secondary">
    Cancelar
  </Button>

  <Button variant="ghost">
    Editar
  </Button>

  <Button variant="menu">
    Menú
  </Button>
</div>
```

---

# 23. Ejemplo de formulario

```tsx
<form onSubmit={handleSubmit}>
  <div className="flex gap-2">
    <Button
      type="submit"
      variant="primary"
      loading={loading}
    >
      Guardar empleado
    </Button>

    <Button
      type="button"
      variant="secondary"
      onClick={handleCancel}
    >
      Cancelar
    </Button>
  </div>
</form>
```

---

# 24. Ejemplo de navegación

```tsx
<nav>
  <Button
    href="/"
    variant="menu"
  >
    Inicio
  </Button>

  <Button
    href="/rrhh/empleados"
    variant="menu"
  >
    Empleados
  </Button>

  <Button
    href="/logistica/viajes"
    variant="menu"
  >
    Viajes
  </Button>
</nav>
```

---

# 25. API del componente

## Props propias

| Prop | Tipo | Predeterminado | Descripción |
|---|---|---|---|
| `variant` | `'primary' \| 'secondary' \| 'ghost' \| 'menu'` | `'primary'` | Variante visual |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Tamaño |
| `loading` | `boolean` | `false` | Estado de carga |
| `href` | `string` | — | Convierte el componente en `Link` |
| `target` | `string` | — | Target del enlace |
| `rel` | `string` | — | Relación del enlace |
| `download` | `string` | — | Descarga del recurso |
| `backgroundColor` | `string` | — | Color de fondo personalizado |
| `textSize` | `string` | — | Tamaño de texto personalizado |
| `children` | `React.ReactNode` | requerido | Contenido |

---

# 26. Props heredadas de HTML

Al extender:

```ts
React.ButtonHTMLAttributes<HTMLButtonElement>
```

también permite propiedades estándar de `<button>` como:

```tsx
type
disabled
onClick
onFocus
onBlur
name
value
form
aria-*
data-*
```

Por ejemplo:

```tsx
<Button
  type="submit"
  name="action"
  value="save"
  disabled={false}
>
  Guardar
</Button>
```

---

# 27. Comportamiento según `href`

La lógica principal es:

```tsx
if (href) {
  return <Link ... />
}

return <button ... />
```

Por lo tanto:

### Sin `href`

```tsx
<Button>
  Guardar
</Button>
```

Resultado:

```html
<button>
  Guardar
</button>
```

### Con `href`

```tsx
<Button href="/empleados">
  Empleados
</Button>
```

Resultado conceptual:

```tsx
<Link href="/empleados">
  Empleados
</Link>
```

---

# 28. Arquitectura visual

El componente construye sus clases mediante:

```tsx
const classes = clsx(
  base,
  variants[variant],
  sizes[size],
  loading && 'cursor-wait opacity-70',
  className,
)
```

Esto significa que las clases finales se construyen a partir de cuatro niveles:

```text
base
  ↓
variant
  ↓
size
  ↓
loading
  ↓
className personalizado
```

Por ejemplo:

```tsx
<Button
  variant="primary"
  size="lg"
  className="w-full"
>
  Guardar
</Button>
```

combina:

```text
base
+
primary
+
lg
+
w-full
```

---

# 29. Resumen

`Button.tsx` es un componente de propósito general que permite centralizar botones y enlaces dentro de la aplicación.

Sus principales capacidades son:

- 4 variantes visuales.
- 3 tamaños.
- Estado `loading`.
- Estado `disabled`.
- Eventos de React.
- Integración con formularios.
- Navegación mediante `next/link`.
- Enlaces externos.
- Descargas.
- Clases Tailwind personalizadas.
- Color de fondo personalizado.
- Tamaño de texto personalizado.
- Contenido React arbitrario.
- Soporte para iconos.

La API básica puede resumirse así:

```tsx
<Button
  variant="primary"
  size="md"
  loading={false}
>
  Guardar
</Button>
```

Y para navegación:

```tsx
<Button
  href="/empleados"
  variant="secondary"
>
  Empleados
</Button>
```

De esta manera, un único componente puede cubrir la mayoría de los casos de uso de botones y enlaces de la interfaz.
# ContactForm.tsx

Componente de formulario de contacto para aplicaciones **Next.js + React + TypeScript + Tailwind CSS**.

Su función principal es recopilar:

- Nombre.
- Email.
- Mensaje.

y enviarlos mediante una petición `POST` a:

```text
/api/contact
```

Además, administra:

- Estado de envío.
- Estado de éxito.
- Estado de error.
- Limpieza del formulario.
- Modal de confirmación.
- Mensaje de error.
- Botón de envío.
- Integración con los componentes `Input`, `Button` y `Modal`.

El componente utiliza `'use client'` porque necesita manejar estado y eventos del formulario mediante React.

---

# 1. ¿Qué hace?

`ContactForm` proporciona un formulario completo para que un usuario pueda enviar un mensaje.

El flujo general es:

```text
Usuario completa formulario
        ↓
Pulsa "Enviar mensaje"
        ↓
handleSubmit()
        ↓
Se activa loading
        ↓
Se recopilan los datos
        ↓
POST /api/contact
        ↓
      ¿OK?
      /   \
    Sí     No
    ↓       ↓
Reset    Error
    ↓
Success
    ↓
Modal
```

---

# 2. Campos del formulario

El formulario contiene tres datos principales:

```text
Nombre
Email
Mensaje
```

Los campos `Nombre` y `Email` utilizan el componente reutilizable:

```tsx
<Input />
```

Mientras que `Mensaje` utiliza directamente:

```tsx
<textarea>
```

---

# 3. Estados internos

El componente utiliza cuatro estados:

```tsx
const [modalOpen, setModalOpen] = useState(false)

const [loading, setLoading] = useState(false)

const [success, setSuccess] = useState(false)

const [error, setError] = useState(false)
```

Cada uno tiene una responsabilidad específica.

---

# 4. `modalOpen`

```tsx
const [modalOpen, setModalOpen] = useState(false)
```

Controla si el modal de confirmación está abierto.

Inicialmente:

```text
modalOpen = false
```

Cuando el formulario se envía correctamente:

```tsx
setModalOpen(true)
```

Esto abre el modal.

Cuando el usuario lo cierra:

```tsx
setModalOpen(false)
```

---

# 5. `loading`

```tsx
const [loading, setLoading] = useState(false)
```

Representa el estado de envío del formulario.

Inicialmente:

```text
loading = false
```

Cuando comienza el envío:

```tsx
setLoading(true)
```

Cuando termina:

```tsx
setLoading(false)
```

Esto permite mostrar:

```text
Enviando...
```

en lugar de:

```text
Enviar mensaje
```

---

# 6. `success`

```tsx
const [success, setSuccess] = useState(false)
```

Indica que el formulario se envió correctamente.

Cuando la API responde correctamente:

```tsx
setSuccess(true)
```

Esto permite renderizar:

```tsx
<Modal />
```

---

# 7. `error`

```tsx
const [error, setError] = useState(false)
```

Indica que ocurrió un error durante el envío.

Si la petición falla:

```tsx
setError(true)
```

Se muestra:

```text
Error al enviar el mensaje.
```

---

# 8. `handleSubmit`

La función principal del componente es:

```tsx
async function handleSubmit(
  e: React.FormEvent<HTMLFormElement>
)
```

Esta función controla todo el proceso de envío.

---

# 9. Evitar el comportamiento predeterminado

Lo primero que realiza:

```tsx
e.preventDefault()
```

Esto evita que el navegador recargue la página al enviar el formulario.

En lugar de realizar un envío HTML tradicional, React controla el proceso mediante JavaScript.

---

# 10. Inicio del envío

Antes de realizar la petición:

```tsx
setLoading(true)

setSuccess(false)

setError(false)
```

Esto garantiza que:

- El formulario pasa a estado de carga.
- Se elimina un estado de éxito anterior.
- Se elimina un estado de error anterior.

---

# 11. Obtención del formulario

Se obtiene el formulario mediante:

```tsx
const form = e.currentTarget
```

`e.currentTarget` representa el elemento:

```html
<form>
```

que originó el evento.

---

# 12. Obtención de datos

Luego se crea:

```tsx
const formData = new FormData(form)
```

`FormData` recopila automáticamente los campos del formulario que poseen `name`.

Por ejemplo:

```tsx
<Input
  name="name"
/>
```

y:

```tsx
<Input
  name="email"
/>
```

así como:

```tsx
<textarea
  name="message"
/>
```

---

# 13. Datos enviados

La petición envía un objeto JSON:

```tsx
{
  name: formData.get('name'),
  email: formData.get('email'),
  message: formData.get('message'),
}
```

Por lo tanto, la API recibe:

```json
{
  "name": "Juan Pérez",
  "email": "juan@example.com",
  "message": "Hola, quisiera realizar una consulta."
}
```

---

# 14. Petición a la API

El componente utiliza:

```tsx
fetch('/api/contact', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  }),
})
```

La petición utiliza:

```text
POST
```

contra:

```text
/api/contact
```

---

# 15. Método HTTP

El formulario utiliza:

```text
POST
```

porque está enviando información al servidor.

La ruta:

```text
/api/contact
```

debe encargarse de procesar los datos enviados.

---

# 16. `Content-Type`

La petición especifica:

```tsx
headers: {
  'Content-Type': 'application/json',
}
```

Esto informa al servidor que el cuerpo de la petición está codificado como JSON.

---

# 17. Conversión a JSON

Los datos obtenidos mediante `FormData` se convierten utilizando:

```tsx
JSON.stringify()
```

Por ejemplo:

```tsx
JSON.stringify({
  name: formData.get('name'),
  email: formData.get('email'),
  message: formData.get('message'),
})
```

---

# 18. Comprobación de respuesta

Después del `fetch`:

```tsx
if (!response.ok) {
  throw new Error('Error al enviar el formulario')
}
```

`response.ok` permite comprobar si la respuesta HTTP fue satisfactoria.

Si la respuesta no es correcta:

```text
response.ok === false
```

se lanza un error.

---

# 19. Envío exitoso

Si la respuesta es correcta:

```tsx
form.reset()

setSuccess(true)

setModalOpen(true)
```

Se realizan tres acciones.

### 1. Limpiar formulario

```tsx
form.reset()
```

### 2. Marcar éxito

```tsx
setSuccess(true)
```

### 3. Abrir modal

```tsx
setModalOpen(true)
```

---

# 20. Limpieza del formulario

Después de un envío exitoso:

```tsx
form.reset()
```

restablece los campos a sus valores iniciales.

Por lo tanto, después de enviar correctamente:

```text
Nombre    → vacío
Email     → vacío
Mensaje   → vacío
```

---

# 21. Modal de éxito

Cuando:

```tsx
success === true
```

se renderiza:

```tsx
<Modal
  open={modalOpen}
  title="¡Muchas gracias!"
  message="Te responderemos lo antes posible."
  onClose={() => setModalOpen(false)}
  autoClose={5000}
/>
```

El modal informa al usuario que el mensaje fue enviado correctamente.

---

# 22. Contenido del modal

El modal utiliza:

```text
Título:
¡Muchas gracias!
```

y:

```text
Mensaje:
Te responderemos lo antes posible.
```

---

# 23. Cierre automático del modal

La propiedad:

```tsx
autoClose={5000}
```

indica que el modal debe cerrarse automáticamente después de:

```text
5000 ms
```

equivalentes a:

```text
5 segundos
```

---

# 24. Cierre manual del modal

También se proporciona:

```tsx
onClose={() => setModalOpen(false)}
```

Esto permite cerrar el modal manualmente.

---

# 25. Estado de error

Si ocurre un error:

```tsx
catch {
  setError(true)
}
```

se activa:

```text
error = true
```

y se muestra:

```text
Error al enviar el mensaje.
```

---

# 26. Mensaje de error

El mensaje utiliza:

```tsx
<div className="mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-600">
  Error al enviar el mensaje.
</div>
```

Visualmente funciona como una alerta debajo del botón.

---

# 27. `finally`

Finalmente se ejecuta:

```tsx
finally {
  setLoading(false)
}
```

Esto ocurre independientemente de que:

- La petición sea exitosa.
- La petición falle.
- Se produzca una excepción.

Por lo tanto, el estado de carga siempre vuelve a:

```text
false
```

---

# 28. Campo Nombre

El campo utiliza:

```tsx
<Input
  id="name"
  name="name"
  type="text"
  required
  className="h-12 rounded-lg"
/>
```

Sus características son:

- `id="name"`
- `name="name"`
- `type="text"`
- obligatorio.
- altura personalizada.
- bordes redondeados.

El label asociado es:

```html
<label htmlFor="name">
```

con:

```text
Tú Nombre
```

---

# 29. Campo Email

El campo utiliza:

```tsx
<Input
  id="email"
  name="email"
  type="email"
  required
  className="h-12 rounded-lg"
/>
```

Sus características son:

- `id="email"`
- `name="email"`
- `type="email"`
- obligatorio.
- validación HTML de email.
- altura personalizada.
- bordes redondeados.

El label asociado es:

```text
Tú e-mail
```

---

# 30. Campo Mensaje

El mensaje utiliza directamente:

```tsx
<textarea
  id="message"
  name="message"
  required
  rows={8}
/>
```

A diferencia de Nombre y Email, no utiliza el componente `Input`.

---

# 31. Filas del textarea

El mensaje utiliza:

```tsx
rows={8}
```

por lo que inicialmente dispone de ocho filas.

Además:

```text
resize-none
```

impide que el usuario cambie manualmente el tamaño del textarea.

---

# 32. Diseño del formulario

El formulario principal utiliza:

```text
mx-auto
flex
max-w-3xl
flex-col
items-center
text-sm
```

Esto permite:

- Centrar el formulario.
- Utilizar layout flex.
- Organizar los elementos verticalmente.
- Limitar el ancho máximo.
- Centrar los elementos.
- Utilizar un tamaño de texto pequeño.

---

# 33. Nombre y Email

Nombre y Email están agrupados:

```tsx
<div className="flex w-full flex-col gap-8 md:flex-row">
```

En dispositivos pequeños:

```text
Nombre
Email
```

aparecen verticalmente.

Desde `md`:

```text
Nombre       Email
```

aparecen en una misma fila.

---

# 34. Espaciado

El formulario utiliza diferentes clases para separar sus elementos.

Por ejemplo:

```text
gap-8
```

para Nombre y Email.

El mensaje utiliza:

```text
mt-6
```

y el botón:

```text
mt-6
```

Esto genera una separación visual consistente.

---

# 35. Botón de envío

El formulario utiliza el componente reutilizable:

```tsx
<Button
  variant="primary"
  type="submit"
  disabled={loading}
  className="mt-6 h-12 w-56 rounded-lg"
>
  {loading ? 'Enviando...' : 'Enviar mensaje'}
</Button>
```

---

# 36. Variante del botón

Utiliza:

```tsx
variant="primary"
```

por lo que utiliza la variante principal definida por `Button.tsx`.

---

# 37. Estado del botón

Cuando:

```text
loading = false
```

muestra:

```text
Enviar mensaje
```

Cuando:

```text
loading = true
```

muestra:

```text
Enviando...
```

---

# 38. Botón deshabilitado durante el envío

El botón utiliza:

```tsx
disabled={loading}
```

Esto evita que el usuario pueda realizar múltiples envíos mientras la petición está en curso.

El flujo es:

```text
Click
 ↓
loading = true
 ↓
Botón disabled
 ↓
POST /api/contact
 ↓
Respuesta
 ↓
loading = false
 ↓
Botón habilitado
```

---

# 39. Componentes reutilizados

`ContactForm` utiliza tres componentes internos:

```tsx
import Modal from '@/components/ui/Modal'

import Button from '@/components/ui/Button'

import Input from '@/components/ui/Input'
```

Cada uno tiene una responsabilidad diferente.

```text
ContactForm
│
├── Input
│   ├── Nombre
│   └── Email
│
├── textarea
│   └── Mensaje
│
├── Button
│   └── Enviar mensaje
│
└── Modal
    └── Confirmación
```

---

# 40. Flujo completo

El comportamiento completo puede representarse de esta manera:

```text
                    FORMULARIO
                        │
                        ↓
               Usuario completa datos
                        │
                        ↓
                "Enviar mensaje"
                        │
                        ↓
                 handleSubmit()
                        │
                        ↓
                  loading = true
                        │
                        ↓
                 FormData(form)
                        │
                        ↓
                POST /api/contact
                        │
                  ┌─────┴─────┐
                  ↓           ↓
                Éxito        Error
                  │           │
                  ↓           ↓
             form.reset()   error = true
                  │
                  ↓
             success = true
                  │
                  ↓
            modalOpen = true
                  │
                  ↓
                 Modal
                  │
                  ↓
             AutoClose 5s
```

---

# 41. Validación HTML

Los campos principales utilizan:

```tsx
required
```

Esto hace que el navegador impida el envío si están vacíos.

El email utiliza además:

```tsx
type="email"
```

lo que activa la validación HTML correspondiente.

---

# 42. API esperada

El componente espera que exista una API:

```text
POST /api/contact
```

que pueda recibir:

```json
{
  "name": "Nombre",
  "email": "email@example.com",
  "message": "Mensaje"
}
```

La API debe devolver una respuesta HTTP considerada exitosa para que:

```tsx
response.ok
```

sea `true`.

---

# 43. Uso del componente

El componente no necesita props.

Simplemente puede utilizarse:

```tsx
<ContactForm />
```

Por ejemplo:

```tsx
export default function ContactPage() {
  return (
    <main>
      <ContactForm />
    </main>
  )
}
```

---

# 44. API del componente

`ContactForm` no define props:

```ts
ContactFormProps
```

ni recibe parámetros externos.

Su utilización es:

```tsx
<ContactForm />
```

Toda la lógica necesaria se encuentra encapsulada dentro del componente.

---

# 45. Dependencias internas

El componente depende de:

```text
React
  └── useState

Modal
  └── @/components/ui/Modal

Button
  └── @/components/ui/Button

Input
  └── @/components/ui/Input
```

También utiliza la API nativa del navegador:

```text
FormData
fetch
```

---

# 46. Resumen

`ContactForm.tsx` es un componente completo de formulario de contacto.

Sus principales responsabilidades son:

- Mostrar campos de contacto.
- Validar campos obligatorios mediante HTML.
- Recopilar datos mediante `FormData`.
- Enviar datos mediante `fetch`.
- Realizar una petición `POST`.
- Comunicarse con `/api/contact`.
- Mostrar estado de carga.
- Deshabilitar el botón durante el envío.
- Limpiar el formulario después de un envío exitoso.
- Mostrar un modal de confirmación.
- Cerrar automáticamente el modal después de 5 segundos.
- Mostrar un mensaje cuando ocurre un error.

Su estructura general es:

```text
ContactForm
│
├── Nombre
│   └── Input
│
├── Email
│   └── Input
│
├── Mensaje
│   └── textarea
│
├── Enviar
│   └── Button
│
├── Éxito
│   └── Modal
│
└── Error
    └── Alert
```

El uso básico del componente es:

```tsx
<ContactForm />
```

Y su flujo principal es:

```text
Formulario
    ↓
FormData
    ↓
POST /api/contact
    ↓
Respuesta
    ├── Éxito → reset + Modal
    └── Error → mensaje de error
```
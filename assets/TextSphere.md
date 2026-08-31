---
source: https://chatgpt.com/c/6a73bf2f-a6b0-83e9-8df2-8221a7ac8f09
date: 2026-08-05T22:56:44.388Z
---

# Uso del componente TextSphere

## User

 me indicarias como debo usar este componente

---

## Assistant

Sí. El componente está diseñado para que simplemente lo importes y le pases las propiedades (props) que quieras modificar. El resto tiene valores por defecto.

### Uso básico

TypeScript

```javascript
import TextSphere from "@/components/TextSphere";

export default function Home() {
  return (
    <div className="h-[600px] w-full">
      <TextSphere />
    </div>
  );
}
```

---

### Personalizando el texto

TypeScript

```html
<TextSphere
  word="KWS • KWS • KWS • KWS • KWS • "
/>
```

---

### Cambiando el color

TypeScript

```html
<TextSphere
  word="KWS • "
  color="#22c55e"
/>
```

---

### Cambiando la fuente

TypeScript

```html
<TextSphere
  word="KWS • "
  font={{
    fontFamily: "Ubuntu",
    fontWeight: 700,
    fontSize: 18,
  }}
/>
```

> La fuente debe estar cargada en tu proyecto (por ejemplo con `next/font/google` o mediante CSS).

---

### Velocidad de rotación

TypeScript

```html
<TextSphere
  speed={1}     // lento
/>
```

TypeScript

```html
<TextSphere
  speed={4}     // rápido
/>
```

---

### Sentido de giro

Horario:

TypeScript

```html
<TextSphere
  rotationSide="clockwise"
/>
```

Antihorario:

TypeScript

```html
<TextSphere
  rotationSide="counterclockwise"
/>
```

---

### Cantidad de torsión (efecto espiral)

TypeScript

```
<TextSphere
  twist={20}
```

o

TypeScript

```html
<TextSphere
  twist={80}
/>
```

Cuanto mayor es el valor, más se "retuercen" las líneas de texto alrededor de la esfera.

---

### Separación entre letras

TypeScript

```html
<TextSphere
  letterSpacing={180}
/>
```

Valores más grandes separan más los caracteres.

---

### Estilo del contenedor

El componente acepta un `style` que se aplica al `<div>` contenedor.

TypeScript

```html
<TextSphere
  style={{
    width: 500,
    height: 500,
  }}
/>
```

o

TypeScript

```html
<div className="w-[500px] h-[500px]">
    <TextSphere />
</div>
```

Esta segunda opción suele ser la más cómoda cuando usas Tailwind.

---

## Ejemplo completo

TypeScript

```javascript
import TextSphere from "@/components/TextSphere";

export default function Hero() {
  return (
    <div className="w-full h-[700px]">
      <TextSphere
        word="KWS • Full Stack Developer • React • Next.js • TypeScript • "
        color="#7fd67f"
        speed={2}
        rotationSide="clockwise"
        twist={45}
        letterSpacing={220}
        font={{
          fontFamily: "Ubuntu",
          fontWeight: 700,
          fontSize: 18,
        }}
      />
    </div>
  );
}
```

### Props disponibles

| Prop | Tipo | Descripción |
| --- | --- | --- |
| word | string | Texto que forma la esfera. |
| color | string | Color de las letras (hex, rgb, etc.). |
| font | object | Configuración de la fuente (fontFamily, fontWeight, fontSize, etc.). |
| speed | number | Velocidad de rotación. |
| rotationSide | "clockwise" \| "counterclockwise" | Dirección del giro. |
| twist | number | Cantidad de torsión de las bandas de texto. |
| letterSpacing | number | Espaciado entre caracteres sobre la esfera. |
| style | React.CSSProperties | Estilos del contenedor del componente. |

Un detalle importante de este componente es que **necesita que su contenedor tenga un ancho y una altura definidos**. Si el padre no tiene altura (por ejemplo, `h-screen`, `h-[500px]`, etc.), el `<canvas>` se renderizará con altura `0` y la esfera no será visible.

---

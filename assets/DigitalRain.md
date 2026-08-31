# DigitalRain - Guía de uso

## Importación

``` tsx
import DigitalRain from "@/components/ui/DigitalRain";
```

------------------------------------------------------------------------

## Uso mínimo

``` tsx
<div className="h-[500px] w-full">
  <DigitalRain />
</div>
```

> El componente necesita que el contenedor tenga un ancho y una altura
> definidos.

------------------------------------------------------------------------

## Cambiar colores

``` tsx
<DigitalRain
  headColor="var(--cyan)"
  trailColor="var(--green)"
/>
```

Con tu `global.css` también puedes usar:

-   `var(--primary)`
-   `var(--secondary)`
-   `var(--accent)`
-   `var(--blue)`
-   `var(--cyan)`
-   `var(--green)`
-   `var(--yellow)`
-   `var(--orange)`
-   `var(--red)`
-   `var(--magenta)`
-   `var(--violet)`

------------------------------------------------------------------------

## Tamaño de los caracteres

``` tsx
<DigitalRain glyphSize={12} />
```

------------------------------------------------------------------------

## Velocidad

``` tsx
<DigitalRain speed={2} />
```

Más lento.

``` tsx
<DigitalRain speed={8} />
```

Más rápido.

------------------------------------------------------------------------

## Ángulo

``` tsx
<DigitalRain angle={-15} />
```

``` tsx
<DigitalRain angle={20} />
```

------------------------------------------------------------------------

## Densidad

``` tsx
<DigitalRain density={35} />
```

Menos columnas.

``` tsx
<DigitalRain density={50} />
```

Más columnas.

------------------------------------------------------------------------

## Largo de la estela

``` tsx
<DigitalRain trail={50} />
```

------------------------------------------------------------------------

## Caracteres

``` tsx
<DigitalRain
  glyphs="KWS0123456789"
/>
```

------------------------------------------------------------------------

## Mezclar caracteres

``` tsx
<DigitalRain shuffle />
```

o

``` tsx
<DigitalRain shuffle={false} />
```

------------------------------------------------------------------------

## Ejemplo como fondo

``` tsx
<section className="relative h-screen overflow-hidden">

  <div className="absolute inset-0 opacity-20">
    <DigitalRain
      headColor="var(--cyan)"
      trailColor="var(--green)"
      glyphSize={8}
      speed={4}
      density={45}
      trail={40}
    />
  </div>

  <div className="relative z-10 flex h-full items-center justify-center">
    <h1>Bienvenido</h1>
  </div>

</section>
```

------------------------------------------------------------------------

## Props

  ------------------------------------------------------------------------
  Prop              Tipo              Descripción
  ----------------- ----------------- ------------------------------------
  `headColor`       `string`          Color del primer carácter de cada
                                      columna.

  `trailColor`      `string`          Color del resto de la estela.

  `glyphSize`       `number`          Tamaño de los caracteres.

  `speed`           `number`          Velocidad de caída.

  `angle`           `number`          Inclinación en grados.

  `density`         `number`          Cantidad de columnas.

  `trail`           `number`          Longitud de la estela.

  `glyphs`          `string`          Caracteres disponibles.

  `shuffle`         `boolean`         Cambia caracteres durante la
                                      animación.

  `shuffleGlyphs`   `string`          Conjunto usado cuando `shuffle` está
                                      activo.

  `style`           `CSSProperties`   Estilos del contenedor.
  ------------------------------------------------------------------------

## Valores predeterminados

``` ts
headColor: "#FFFFFF"
trailColor: "#00FF41"
glyphSize: 8
speed: 4
density: 50
trail: 40
angle: 0
shuffle: true
```

'use client';

/*
* ThinkingOrb.tsx
*
* Indicador animado tipo "orbe pensante" para UIs de IA/agentes.
* Renderizado 100% en canvas 2D (sin WebGL, sin filtros), monocromo,
* con 9 estados, 2 tamaños optimizados (64 / 20) y tema auto/dark/light.
*
* NOTA IMPORTANTE:
* No pude descargar el código fuente real del componente desde
* github.com/Jakubantalik/Libraries (GitHub bloquea el acceso automatizado
* a esa ruta y el archivo fuente de ThinkingOrb no apareció en ningún
* resultado accesible). Lo que sí pude leer completo fue el README público
* del paquete "thinking-orbs" del mismo autor, que documenta la API exacta
* que pediste (state, size, speed, paused, theme, aria-label, etc.).
*
* Este archivo es una reimplementación propia, escrita desde cero, que
* cumple esa misma API y ese mismo comportamiento documentado (9 estados,
* 2 presets de tamaño, tema automático, reduced-motion, pausa quantum
* fuera de pantalla, etc.). No es una copia del código propietario del
* autor original.
*/

import {
  useEffect,
  useMemo,
  useRef,
  type CanvasHTMLAttributes,
} from 'react';

/* ---------- Tipos públicos ---------- */

export type ThinkingOrbState =
  | 'working'
  | 'searching'
  | 'solving'
  | 'listening'
  | 'connecting'
  | 'weaving'
  | 'composing'
  | 'breathing'
  | 'shaping';

export type ThinkingOrbTheme = 'auto' | 'dark' | 'light';

export interface ThinkingOrbProps
  extends Omit<CanvasHTMLAttributes<HTMLCanvasElement>, 'width' | 'height'> {
  /* Qué está "pensando" el orbe. Por defecto: "working". */
  state?: ThinkingOrbState;
  /* Preset de tamaño en px. Se recomienda 64 (avatar de chat) o 20 (inline). */
  size?: number;
  /* Multiplicador sobre la velocidad base del preset. */
  speed?: number;
  /* Congela la animación en el frame actual. */
  paused?: boolean;
  /* 'auto' detecta el tema del proyecto; 'dark'/'light' lo fuerzan. */
  theme?: ThinkingOrbTheme;
  'aria-label'?: string;
}

/* ---------- Reloj compartido (todas las instancias laten en fase) ---------- */

type TickFn = (elapsedMs: number) => void;

const ticker = (() => {
  const subs = new Set<TickFn>();
  let rafId: number | null = null;
  let start: number | null = null;

  const loop = (now: number) => {
    if (start === null) start = now;
    const elapsed = now - start;
    subs.forEach((fn) => fn(elapsed));
    rafId = requestAnimationFrame(loop);
  };

  return {
    subscribe(fn: TickFn) {
      subs.add(fn);
      if (rafId === null) rafId = requestAnimationFrame(loop);
      return () => {
        subs.delete(fn);
        if (subs.size === 0 && rafId !== null) {
          cancelAnimationFrame(rafId);
          rafId = null;
          start = null;
        }
      };
    },
  };
})();

/* ---------- Presets de tamaño ---------- */

interface Preset {
  dotCount: number;
  dotRadius: number;
  baseSpeed: number; // ciclos completos por segundo (referencia)
}

function getPreset(size: number): Preset {
  /* Dos diseños afinados a mano (64 y 20), no un simple escalado. */
  const big: Preset = { dotCount: 42, dotRadius: 1.6, baseSpeed: 0.16 };
  const small: Preset = { dotCount: 20, dotRadius: 1.1, baseSpeed: 0.22 };
  const preset = size >= 42 ? big : small;
  const scale = size / (size >= 42 ? 64 : 20);
  return {
    dotCount: preset.dotCount,
    dotRadius: preset.dotRadius * scale,
    baseSpeed: preset.baseSpeed,
  };
}

/* ---------- Tema: auto / dark / light ---------- */

function resolveIsDark(): boolean {
  if (typeof document === 'undefined') return true;
  const el = document.documentElement;
  const attr = el.getAttribute('data-theme');
  if (attr === 'dark') return true;
  if (attr === 'light') return false;
  if (el.classList.contains('dark')) return true;
  if (el.classList.contains('light')) return false;
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  return true;
}

function useIsDark(theme: ThinkingOrbTheme): boolean {
  const ref = useRef(theme === 'dark' ? true : theme === 'light' ? false : resolveIsDark());

  useEffect(() => {
    if (theme !== 'auto') {
      ref.current = theme === 'dark';
      return;
    }
    ref.current = resolveIsDark();

    const mq =
      typeof window !== 'undefined' && window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)')
        : null;
    const onMedia = () => {
      ref.current = resolveIsDark();
    };
    mq?.addEventListener('change', onMedia);

    const observer = new MutationObserver(() => {
      ref.current = resolveIsDark();
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme', 'class'],
    });

    return () => {
      mq?.removeEventListener('change', onMedia);
      observer.disconnect();
    };
  }, [theme]);

  return ref.current;
}

/* ---------- aria-label por defecto según el estado ---------- */

const DEFAULT_LABEL: Record<ThinkingOrbState, string> = {
  working: 'Working…',
  searching: 'Searching…',
  solving: 'Solving…',
  listening: 'Listening…',
  connecting: 'Connecting…',
  weaving: 'Weaving…',
  composing: 'Composing…',
  breathing: 'Breathing…',
  shaping: 'Shaping…',
};

/* ---------- Dibujado por estado ---------- */
/*
* Cada función recibe:
*   ctx        - contexto 2D
*   cx, cy     - centro del orbe
*   r          - radio útil del orbe
*   t          - tiempo en segundos, ya multiplicado por speed
*   color      - color base de los puntos (sin alpha)
*   dotR       - radio de cada punto
*   dotCount   - cantidad de puntos "base" del preset
*/

function dot(
  ctx: CanvasRenderingContext2D,
  x: number,
  y: number,
  radius: number,
  color: string,
  alpha: number,
) {
  ctx.beginPath();
  ctx.fillStyle = color;
  ctx.globalAlpha = Math.max(0, Math.min(1, alpha));
  ctx.arc(x, y, Math.max(0.3, radius), 0, Math.PI * 2);
  ctx.fill();
}

type Drawer = (
  ctx: CanvasRenderingContext2D,
  cx: number,
  cy: number,
  r: number,
  t: number,
  color: string,
  dotR: number,
  dotCount: number,
) => void;

const drawWorking: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Partículas sobre órbitas elípticas inclinadas. */
  const orbits = 3;
  const perOrbit = Math.max(4, Math.round(dotCount / orbits));
  for (let o = 0; o < orbits; o++) {
    const tilt = (Math.PI / 4) * o + Math.PI / 6;
    const rx = r * (0.55 + o * 0.16);
    const ry = rx * 0.42;
    const dir = o % 2 === 0 ? 1 : -1;
    for (let i = 0; i < perOrbit; i++) {
      const a = (i / perOrbit) * Math.PI * 2 + dir * t * (1.1 + o * 0.2);
      const ex = Math.cos(a) * rx;
      const ey = Math.sin(a) * ry;
      const x = cx + ex * Math.cos(tilt) - ey * Math.sin(tilt);
      const y = cy + ex * Math.sin(tilt) + ey * Math.cos(tilt);
      const depth = (Math.sin(a) + 1) / 2;
      dot(ctx, x, y, dotR * (0.6 + depth * 0.6), color, 0.25 + depth * 0.65);
    }
  }
};

const drawSearching: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Globo punteado + un meridiano de escaneo que barre. */
  const rows = 7;
  for (let row = 0; row < rows; row++) {
    const lat = (row / (rows - 1)) * Math.PI - Math.PI / 2;
    const ringR = r * Math.cos(lat);
    const y = cy + Math.sin(lat) * r;
    const perRow = Math.max(3, Math.round((dotCount / rows) * Math.cos(lat) + 3));
    for (let i = 0; i < perRow; i++) {
      const lon = (i / perRow) * Math.PI * 2;
      const x = cx + Math.cos(lon) * ringR;
      dot(ctx, x, y, dotR * 0.75, color, 0.14);
    }
  }
  const sweep = (t * 0.6) % (Math.PI * 2);
  for (let row = 0; row < rows; row++) {
    const lat = (row / (rows - 1)) * Math.PI - Math.PI / 2;
    const ringR = r * Math.cos(lat);
    const y = cy + Math.sin(lat) * r;
    const x = cx + Math.cos(sweep) * ringR;
    dot(ctx, x, y, dotR * 1.3, color, 0.95);
  }
};

const drawSolving: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Bandas horizontales que se "descolocan" y encajan cíclicamente. */
  const bands = 6;
  const perBand = Math.max(4, Math.round(dotCount / bands));
  const cycle = t % 3.2;
  const settleAt = 2.4;
  const scramble = cycle < settleAt ? cycle / settleAt : 1;
  const ease = 1 - Math.pow(1 - Math.min(1, scramble), 3);
  for (let b = 0; b < bands; b++) {
    const y = cy - r + (r * 2 * (b + 0.5)) / bands;
    const width = Math.sqrt(Math.max(0, r * r - (y - cy) * (y - cy)));
    const noiseSeed = b * 13.37;
    for (let i = 0; i < perBand; i++) {
      const targetX = cx - width + (width * 2 * (i + 0.5)) / perBand;
      const jitter =
        Math.sin(noiseSeed + i * 2.1 + t * 4) * width * 0.6 * (1 - ease);
      const x = targetX + jitter;
      const snapPulse = ease > 0.97 ? (1 - (1 - ease) * 30) : 1;
      dot(ctx, x, y, dotR * snapPulse, color, 0.35 + 0.5 * ease);
    }
  }
};

const drawListening: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Forma de onda que recorre anillos concéntricos. */
  const rings = 3;
  const perRing = Math.max(10, Math.round(dotCount / rings));
  for (let ri = 0; ri < rings; ri++) {
    const baseR = r * (0.4 + ri * 0.28);
    for (let i = 0; i < perRing; i++) {
      const a = (i / perRing) * Math.PI * 2;
      const wave = Math.sin(a * 5 + t * 3 - ri * 1.2) * r * 0.08;
      const x = cx + Math.cos(a) * (baseR + wave);
      const y = cy + Math.sin(a) * (baseR + wave);
      dot(ctx, x, y, dotR * 0.85, color, 0.3 + 0.4 * (0.5 + wave / (r * 0.16)));
    }
  }
};

const drawConnecting: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Constelación de puntos fijos que se "cablea" a sí misma. */
  const n = Math.max(8, Math.round(dotCount * 0.5));
  const pts: { x: number; y: number }[] = [];
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2 + i * 0.7;
    const rr = r * (0.35 + 0.55 * Math.abs(Math.sin(i * 12.9898)));
    pts.push({ x: cx + Math.cos(a) * rr, y: cy + Math.sin(a) * rr });
  }
  const cycle = (t * 0.35) % 1;
  ctx.lineWidth = Math.max(0.5, dotR * 0.5);
  for (let i = 0; i < n; i++) {
    const j = (i + 1 + (i % 3)) % n;
    const distProgress = ((i * 0.61803398875) % 1);
    const drawn = cycle > distProgress;
    if (!drawn) continue;
    const alpha = 0.5;
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.globalAlpha = alpha;
    ctx.moveTo(pts[i].x, pts[i].y);
    ctx.lineTo(pts[j].x, pts[j].y);
    ctx.stroke();
  }
  for (const p of pts) {
    dot(ctx, p.x, p.y, dotR, color, 0.85);
  }
};

const drawWeaving: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Tres hebras trenzadas alrededor de un eje vertical. */
  const strands = 3;
  const perStrand = Math.max(6, Math.round(dotCount / strands));
  for (let s = 0; s < strands; s++) {
    const phase = (s / strands) * Math.PI * 2;
    for (let i = 0; i < perStrand; i++) {
      const p = i / perStrand;
      const y = cy - r + p * r * 2;
      const a = p * Math.PI * 4 + t * 2 + phase;
      const depth = Math.cos(a);
      const x = cx + Math.sin(a) * r * 0.5;
      dot(ctx, x, y, dotR * (0.6 + (depth + 1) * 0.35), color, 0.25 + (depth + 1) * 0.35);
    }
  }
};

const drawComposing: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Franja multibanda ondulante. */
  const bands = 4;
  const perBand = Math.max(6, Math.round(dotCount / bands));
  for (let b = 0; b < bands; b++) {
    const yOffset = (b - (bands - 1) / 2) * (r * 0.32);
    const phase = b * 0.9;
    for (let i = 0; i < perBand; i++) {
      const p = i / (perBand - 1);
      const x = cx - r + p * r * 2;
      const wave = Math.sin(p * Math.PI * 3 + t * 2.4 + phase) * r * 0.18;
      const y = cy + yOffset + wave;
      const inside = Math.abs(x - cx) < r * 0.98;
      if (!inside) continue;
      dot(ctx, x, y, dotR * 0.9, color, 0.4);
    }
  }
};

const drawBreathing: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Un anillo que respira: radio y tamaño de punto pulsan suavemente. */
  const breath = (Math.sin(t * 1.1) + 1) / 2; // 0..1
  const ringR = r * (0.45 + breath * 0.35);
  const n = Math.max(12, dotCount);
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const x = cx + Math.cos(a) * ringR;
    const y = cy + Math.sin(a) * ringR;
    dot(ctx, x, y, dotR * (0.7 + breath * 0.5), color, 0.35 + breath * 0.45);
  }
};

const drawShaping: Drawer = (ctx, cx, cy, r, t, color, dotR, dotCount) => {
  /* Contorno punteado que interpola: círculo -> triángulo -> cuadrado -> círculo. */
  const shapes = 3; // 0 circle, 1 triangle, 2 square
  const cycleLen = 4.5;
  const cyclePos = (t % (cycleLen * shapes)) / cycleLen;
  const shapeIndex = Math.floor(cyclePos);
  const localT = cyclePos - shapeIndex;
  const ease = localT < 0.7 ? 0 : (localT - 0.7) / 0.3; // aguanta la forma y luego mezcla

  const pointOnShape = (shape: number, a: number): { x: number; y: number } => {
    if (shape === 0) {
      return { x: Math.cos(a) * r, y: Math.sin(a) * r };
    }
    if (shape === 1) {
      const sides = 3;
      const seg = (Math.PI * 2) / sides;
      const idx = Math.floor(a / seg);
      const localA = (a - idx * seg) / seg;
      const p0 = ((idx * seg + Math.PI / 2) as number);
      const a0 = p0;
      const a1 = p0 + seg;
      const R = r * 1.15;
      const x0 = Math.cos(a0) * R;
      const y0 = Math.sin(a0) * R;
      const x1 = Math.cos(a1) * R;
      const y1 = Math.sin(a1) * R;
      return { x: x0 + (x1 - x0) * localA, y: y0 + (y1 - y0) * localA };
    }
    const sides = 4;
    const seg = (Math.PI * 2) / sides;
    const idx = Math.floor(a / seg);
    const localA = (a - idx * seg) / seg;
    const a0 = idx * seg + Math.PI / 4;
    const a1 = a0 + seg;
    const R = r;
    const x0 = Math.cos(a0) * R;
    const y0 = Math.sin(a0) * R;
    const x1 = Math.cos(a1) * R;
    const y1 = Math.sin(a1) * R;
    return { x: x0 + (x1 - x0) * localA, y: y0 + (y1 - y0) * localA };
  };

  const n = Math.max(16, dotCount);
  const nextShape = (shapeIndex + 1) % shapes;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const p0 = pointOnShape(shapeIndex, a);
    const p1 = pointOnShape(nextShape, a);
    const x = cx + p0.x + (p1.x - p0.x) * ease;
    const y = cy + p0.y + (p1.y - p0.y) * ease;
    dot(ctx, x, y, dotR, color, 0.75);
  }
};

const DRAWERS: Record<ThinkingOrbState, Drawer> = {
  working: drawWorking,
  searching: drawSearching,
  solving: drawSolving,
  listening: drawListening,
  connecting: drawConnecting,
  weaving: drawWeaving,
  composing: drawComposing,
  breathing: drawBreathing,
  shaping: drawShaping,
};

/* ---------- Componente ---------- */

export function ThinkingOrb({
  state = 'working',
  size = 64,
  speed = 1,
  paused = false,
  theme = 'auto',
  className,
  style,
  'aria-label': ariaLabel,
  ...rest
}: ThinkingOrbProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const visibleRef = useRef(true);
  const frozenT = useRef(0);
  const runningT = useRef(0);
  const lastElapsed = useRef(0);

  const isDark = useIsDark(theme);
  const preset = useMemo(() => getPreset(size), [size]);
  const drawer = DRAWERS[state];

  const prefersReducedMotion =
    typeof window !== 'undefined' && window.matchMedia
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(2, typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1);
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.scale(dpr, dpr);

    const cx = size / 2;
    const cy = size / 2;
    const r = size * 0.38;
    const color = isDark ? '#ffffff' : '#000000';

    const render = (tSeconds: number) => {
      ctx.clearRect(0, 0, size, size);
      ctx.globalAlpha = 1;
      drawer(ctx, cx, cy, r, tSeconds, color, preset.dotRadius, preset.dotCount);
      ctx.globalAlpha = 1;
    };

    if (prefersReducedMotion) {
      /* Frame estático representativo, sin animación. */
      render(0.6);
      return;
    }

    let intersecting = true;
    const io =
      typeof IntersectionObserver !== 'undefined'
        ? new IntersectionObserver(
            ([entry]) => {
              intersecting = entry.isIntersecting;
            },
            { threshold: 0.01 },
          )
        : null;
    io?.observe(canvas);

    const onVisibility = () => {
      visibleRef.current = document.visibilityState !== 'hidden';
    };
    document.addEventListener('visibilitychange', onVisibility);

    const unsubscribe = ticker.subscribe((elapsedMs) => {
      const deltaMs = elapsedMs - lastElapsed.current;
      lastElapsed.current = elapsedMs;

      const shouldAnimate = !paused && intersecting && visibleRef.current;
      if (shouldAnimate) {
        runningT.current += (deltaMs / 1000) * (preset.baseSpeed * Math.PI * 2) * speed;
        frozenT.current = runningT.current;
      }
      render(frozenT.current);
    });

    return () => {
      unsubscribe();
      io?.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, [state, size, speed, paused, isDark, preset, drawer, prefersReducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label={ariaLabel ?? DEFAULT_LABEL[state]}
      className={className}
      style={{ display: 'inline-block', width: size, height: size, ...style }}
      {...rest}
    />
  );
}

export default ThinkingOrb;

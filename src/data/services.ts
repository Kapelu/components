import {
  ArchiveBoxIcon,
  BuildingOffice2Icon,
  CubeIcon,
  MapPinIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'

export type Service = {
  slug: string
  title: string
  description: string
  content: string[]
  icon: ComponentType<SVGProps<SVGSVGElement>>
}

export const services: Service[] = [
  {
    slug: 'transporte',
    title: 'Transporte',
    description:
      'Servicio de transporte de cargas pensado para garantizar entregas seguras y eficientes, adaptándonos a las necesidades de cada operación.',
    content: [
      'Coordinamos operaciones de transporte de cargas priorizando la seguridad, el cumplimiento y la trazabilidad de cada recorrido.',
      'Nuestro objetivo es adaptar cada servicio a las características de la carga, los destinos y los tiempos requeridos por nuestros clientes.',
    ],
    icon: TruckIcon,
  },
  {
    slug: 'distribucion',
    title: 'Distribución',
    description:
      'Coordinamos la distribución de mercaderías para optimizar cada etapa del recorrido y asegurar que los envíos lleguen a destino.',
    content: [
      'Planificamos la distribución de mercaderías considerando recorridos, destinos y necesidades operativas.',
      'Buscamos reducir tiempos y mejorar la coordinación de cada entrega para acompañar la operación de nuestros clientes.',
    ],
    icon: MapPinIcon,
  },
  {
    slug: 'servicio-expreso',
    title: 'Servicio Expreso',
    description:
      'Soluciones de transporte para operaciones que requieren rapidez y cumplimiento de tiempos, priorizando la eficiencia en cada envío.',
    content: [
      'Ofrecemos alternativas para operaciones que requieren atención prioritaria y coordinación de tiempos de entrega.',
      'Cada servicio se organiza de acuerdo con las características del envío y las necesidades específicas de la operación.',
    ],
    icon: CubeIcon,
  },
  {
    slug: 'almacenamiento',
    title: 'Almacenamiento',
    description:
      'Servicios de almacenamiento y gestión de mercaderías para acompañar las necesidades logísticas de nuestros clientes.',
    content: [
      'Integramos almacenamiento dentro de la operación logística para facilitar la coordinación de mercaderías y movimientos.',
      'El servicio permite acompañar operaciones que necesitan una etapa intermedia entre recepción, preparación y distribución.',
    ],
    icon: ArchiveBoxIcon,
  },
  {
    slug: 'operaciones-portuarias',
    title: 'Operaciones Portuarias',
    description:
      'Coordinación y gestión de operaciones vinculadas al movimiento de cargas en terminales y puntos portuarios.',
    content: [
      'Acompañamos operaciones vinculadas al movimiento de cargas en terminales y puntos portuarios.',
      'La coordinación del transporte y de las etapas operativas busca mantener continuidad y previsibilidad en cada movimiento.',
    ],
    icon: BuildingOffice2Icon,
  },
  {
    slug: 'asesoramiento',
    title: 'Asesoramiento',
    description:
      'Asesoramiento para encontrar soluciones de transporte y logística adecuadas a las características y necesidades de cada envío.',
    content: [
      'Analizamos las características de cada operación para orientar la elección de alternativas de transporte y logística.',
      'Nuestro enfoque busca encontrar soluciones prácticas que respondan a los requerimientos de cada cliente.',
    ],
    icon: WrenchScrewdriverIcon,
  },
]

export function getService(slug: string) {
  return services.find((service) => service.slug === slug)
}

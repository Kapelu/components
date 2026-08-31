import type { Metadata } from 'next'
import Componentes from '@/components/pages/Componentes'
import { Container } from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import { AppConfig } from '@/lib/AppConfig'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Componentes reutilizables creados en mis proyectos.',
  alternates: { canonical: `${AppConfig.url}/contacto` },
  openGraph: {
    title: 'Contacto | Kapelu - Componentes',
    description: 'Componentes reutilizables creados en mis proyectos.',
    url: `${AppConfig.url}/contacto`,
    type: 'website',
  },
}

export default function Page() {
  return (
    <section className='relative min-h-screen px-4 py-16 lg:py-20'>
      <Hero
        backgroundLight='#960000'
        backgroundDark='#960000'
        opacityLight={0.18}
        opacityDark={0.18}
      />
      <Container>
        <Componentes />
      </Container>
    </section>
  )
}

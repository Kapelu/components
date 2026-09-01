import type { Metadata } from 'next'
import Contacto from '@/components/pages/Contacto'
import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import { AppConfig } from '@/lib/AppConfig'

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Contactá a Daniel Calderon - Kapelu.',
  alternates: { canonical: `${AppConfig.url}/contacto` },
  openGraph: {
    title: 'Contacto | Transporte Libertador',
    description: 'Contactá a Daniel Calderon - Kapelu.',
    url: `${AppConfig.url}/contacto`,
    type: 'website',
  },
}

export default function Page() {
  return (
    <section className='relative min-h-screen px-4 py-16 lg:py-20'>
      <Hero
        imageLight='/images/bg-dark.svg'
        imageDark='/images/bg-dark.svg'
        alt='Background Starry'
        opacityLight={1}
        opacityDark={0.2}
      />
      <Container>
        <Contacto />
      </Container>
    </section>
  )
}

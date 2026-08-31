import { Container } from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Acerca from '@/components/pages/Acerca'
import Contact from '@/components/pages/Contacto'
import Inicio from '@/components/pages/Inicio'
import Servicios from '@/components/pages/Servicios'
import Ubicacion from '@/components/pages/Ubicacion'

export default function Home() {
  return (
    <>
      <section
        id='inicio'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Hero
          backgroundLight='#960000'
          backgroundDark='#960000'
          alt='Transporte Libertador'
          opacityLight={1}
          opacityDark={0.2}
        />
        <Container>
          <Inicio />
        </Container>
      </section>

      <section
        id='acerca'
        className='scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Container>
          <Acerca />
        </Container>
      </section>

      <section
        id='servicios'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Hero
          imageLight='/images/camion01.webp'
          imageDark='/images/camion01.webp'
          alt='Camión de Transporte Libertador'
          className='rounded-2xl object-cover opacity-50 shadow-xl'
        />
        <Container>
          <Servicios />
        </Container>
      </section>

      <section
        id='ubicacion'
        className='scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Container>
          <Ubicacion />
        </Container>
      </section>

      <section
        id='contacto'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Hero
          backgroundLight='#960000'
          backgroundDark='#960000'
          alt='Transporte Libertador'
          opacityLight={0.5}
          opacityDark={0.5}
        />
        <Container>
          <Contact />
        </Container>
      </section>
    </>
  )
}

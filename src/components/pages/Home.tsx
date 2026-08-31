import { Container } from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Inicio from '@/components/pages/Inicio'


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
        id='servicios'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Hero
          imageLight='/images/bg-light.svg'
          imageDark='/images/bg-light.svg'
          alt=''
          className='rounded-2xl object-cover opacity-50 shadow-xl'
        />
        <Container>
          <h2 className='text-center'>Sección 2 </h2>
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
          <h2 className='text-center text-surface'>Sección 3 </h2>
        </Container>
      </section>
    </>
  )
}

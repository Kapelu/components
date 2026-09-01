import Container from '@/components/layout/Container'
import Hero from '@/components/layout/Hero'
import Contact from '@/components/pages/Contacto'
import Inicio from '@/components/pages/Inicio'

export default function Home() {
  return (
    <>
      <section
        id='inicio'
        className='relative scroll-mt-(--section-offset) min-h-screen px-4 py-2'>
        <Hero
          imageLight='/images/bg-dark.svg'
          imageDark='/images/bg-dark.svg'
          alt='Background Starry'
          opacityLight={1}
          opacityDark={0.2}
        />
        <Container>
          <Inicio />
        </Container>
      </section>

      {/* 
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
      */}
    </>
  )
}

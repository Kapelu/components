import TextSphere from '@/components/ui/global'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function Inicio() {
  return (
    <section className='relative flex min-h-[90vh] items-center justify-center overflow-hidden'>
      <div className='absolute left-1/2 top-1/2 aspect-square w-[clamp(18rem,40vh,52rem)] -translate-x-1/2 -translate-y-1/2 opacity-50 md:w-[clamp(36rem,104vh,104rem)]'>
        <TextSphere
          word='Transporte • Libertador • Logística • Rapidez • Seguridad • Responsabilidad • Cobertura • Confianza  • '
          color='#FF0512'
          speed={1}
          twist={50}
          rotationSide='counterclockwise'
          letterSpacing={300}
          font={{
            fontFamily: 'Ubuntu',
            fontWeight: 700,
            fontSize: 8,
          }}
        />
      </div>

      <div className='relative z-10 flex min-h-[90vh] flex-col items-center justify-center px-4 text-center'>
        <header>
          <h1 className='text-muted font-bold'>Bienvenid@s</h1>
          <Image
            src='/logo.webp'
            alt='Transporte Libertador | Logística Total'
            width={960}
            height={160}
            priority
            className='mx-auto mb-6 h-auto w-auto'
          />
        </header>

        <div className='mt-12'>
          <Button
            href='/contacto'
            variant='secondary'
            backgroundColor='var(--muted)'
            textSize='20px'
            size='lg'>
            Contactarnos
          </Button>
        </div>
      </div>
    </section>
  )
}

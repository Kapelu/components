import Link from 'next/link'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Hero from '@/components/layout/Hero'
import { Container } from '@/components/layout/Container'
import { getService } from '@/data/services'

type ServicioDetalleProps = {
  slug: string
}

export default function ServicioDetalle({ slug }: ServicioDetalleProps) {
  const service = getService(slug)

  if (!service) return null

  const Icon = service.icon

  return (
    <section className='relative min-h-screen overflow-hidden px-4 py-16 lg:py-20'>
      <Hero
        imageLight='/images/camion01.webp'
        imageDark='/images/camion01.webp'
        alt='Transporte Libertador'
        className='opacity-20'
      />

      <Container>
        <div className='mx-auto max-w-4xl'>
          <Link
            href='/servicios'
            className='mb-12 inline-flex items-center gap-2 font-semibold text-primary no-underline'>
            <ArrowLeftIcon className='size-5' />
            Volver a servicios
          </Link>

          <header className='rounded-3xl border border-border bg-background/85 p-8 shadow-xl backdrop-blur-sm md:p-12'>
            <Icon className='size-16 text-primary' aria-hidden='true' />

            <h1 className='mt-8 text-4xl font-bold text-title md:text-6xl'>
              {service.title}
            </h1>

            <p className='mt-6 text-xl leading-relaxed text-foreground'>
              {service.description}
            </p>
          </header>

          <article className='mt-10 rounded-3xl border border-border bg-background/90 p-8 shadow-lg backdrop-blur-sm md:p-12'>
            <h2 className='text-3xl font-bold text-title'>
              Soluciones para cada operación
            </h2>

            <div className='mt-8 space-y-6 text-lg leading-relaxed text-foreground'>
              {service.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <Link
              href='/contacto'
              className='mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-white no-underline transition hover:bg-primary-hover'>
              Consultar este servicio
              <ArrowRightIcon className='size-5' />
            </Link>
          </article>
        </div>
      </Container>
    </section>
  )
}

import Link from 'next/link'
import ServiceCard from '@/components/ui/cards/ServiceCard'
import { Title } from '@/components/ui/Title'
import { services } from '@/data/services'

export default function Servicios() {
  return (
    <>
      <header className='mb-16'>
        <Title title='Nuestros Servicios' />

        <p className='mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-text'>
          Soluciones integrales de transporte y logística para acompañar cada
          operación de manera efectiva, rápida, segura y responsable.
        </p>
      </header>

      <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
        {services.map((service) => {
          const Icon = service.icon

          return (
            <Link
              key={service.slug}
              href={`/servicios/${service.slug}`}
              className='group no-underline'>
              <ServiceCard
                title={service.title}
                description={service.description}
                className='h-full transition-transform duration-300 group-hover:-translate-y-1'>
                <Icon className='h-14 w-14 text-primary' aria-hidden='true' />
              </ServiceCard>
            </Link>
          )
        })}
      </div>
    </>
  )
}

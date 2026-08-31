import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeftIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Container } from '@/components/layout/Container'
import { getLocation } from '@/data/locations'

type Props = { slug: string }

export default function UbicacionDetalle({ slug }: Props) {
  const location = getLocation(slug)

  if (!location) return null

  return (
    <section className='min-h-screen px-4 py-16 lg:py-20'>
      <Container>
        <div className='mx-auto max-w-5xl'>
          <Link
            href='/ubicaciones'
            className='mb-10 inline-flex items-center gap-2 font-semibold text-primary no-underline'>
            <ArrowLeftIcon className='size-5' />
            Volver a ubicaciones
          </Link>

          <div className='overflow-hidden rounded-3xl border border-border bg-background shadow-xl'>
            <div className='relative h-72 md:h-96'>
              <Image
                src={location.image}
                alt={`${location.city}, ${location.province} - Transporte Libertador`}
                fill
                priority
                className='object-cover'
                sizes='(max-width: 768px) 100vw, 1024px'
              />
            </div>

            <article className='p-8 md:p-12'>
              <p className='font-semibold uppercase tracking-widest text-primary'>
                Transporte Libertador
              </p>

              <h1 className='mt-3 text-4xl font-bold text-title md:text-5xl'>
                {location.city}, {location.province}
              </h1>

              <p className='mt-6 text-lg leading-relaxed text-foreground'>
                {location.description}
              </p>

              <div className='mt-10 grid gap-5 md:grid-cols-2'>
                <div className='rounded-2xl border border-border bg-muted/30 p-5'>
                  <MapPinIcon className='size-7 text-primary' />
                  <h2 className='mt-3 font-bold text-title'>Dirección</h2>
                  <p className='mt-1 text-foreground'>{location.address}</p>
                </div>

                <div className='rounded-2xl border border-border bg-muted/30 p-5'>
                  <PhoneIcon className='size-7 text-primary' />
                  <h2 className='mt-3 font-bold text-title'>Teléfono</h2>
                  <a
                    href={`tel:${location.phone}`}
                    className='mt-1 block text-foreground no-underline'>
                    {location.phone}
                  </a>
                </div>
              </div>

              <a
                href={location.mapUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-white no-underline transition hover:bg-primary-hover'>
                Ver ubicación en Google Maps
              </a>
            </article>
          </div>
        </div>
      </Container>
    </section>
  )
}

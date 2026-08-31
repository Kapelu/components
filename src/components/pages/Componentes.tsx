import Image from 'next/image'
import { Blockfooter } from '@/components/ui/Blockfooter'

export default function Componentes() {
  return (
    <section className='mt-20 grid gap-16 lg:grid-cols-3'>
      <article>
        <header className='mb-8'>
          <h3 className='text-4xl font-bold text-title'>Nuestra Misión</h3>
          <p className='mt-2 text-2xl text-text'>
            Transporte y soluciones logísticas
          </p>
        </header>

        <div className='space-y-6 text-lg leading-relaxed text-text'>
          <p>
            En Transporte Libertador conectamos empresas, personas y destinos
            mediante soluciones de transporte y logística pensadas para cada
            necesidad.
          </p>

          <p>
            Brindamos servicios de transporte, distribución, logística,
            almacenamiento, operaciones portuarias y asesoramiento para envíos,
            acompañando cada operación con compromiso, experiencia y una visión
            integral.
          </p>

          <p>
            Trabajamos para que cada envío llegue a destino de manera
            <strong className='text-title'> efectiva, rápida y segura</strong>,
            construyendo relaciones de confianza a largo plazo con nuestros
            clientes y colaboradores.
          </p>
        </div>
      </article>

      <article className='flex flex-col items-center'>
        <Image
          width={620}
          height={320}
          src='/images/acerca.jpg'
          alt='Transporte Libertador'
          priority
          className='rounded-2xl object-cover shadow-xl'
        />
      </article>

      <article className='flex flex-col'>
        <header className='mb-8'>
          <h3 className='text-4xl font-bold text-title'>Nuestra visión</h3>
        </header>

        <div className='space-y-6 text-lg leading-relaxed text-text'>
          <p>
            Ser un referente en transporte y logística, reconocido por la
            confiabilidad de nuestros servicios, la eficiencia de nuestras
            operaciones y el compromiso de nuestro equipo.
          </p>

          <p>
            Buscamos crecer junto a nuestros clientes, fortaleciendo nuestra
            capacidad operativa y ofreciendo soluciones que respondan a las
            necesidades de una industria logística cada vez más dinámica.
          </p>
        </div>

        <Blockfooter>
          <p>“Efectividad, rapidez, seguridad y responsabilidad.”</p>
        </Blockfooter>
      </article>
    </section>
  )
}
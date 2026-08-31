import Link from 'next/link'
import ProjectCard from '@/components/ui/cards/ProjectCard'
import { Title } from '@/components/ui/Title'
import { projects } from '@/data/projects'

export default function Ubicacion() {
  return (
    <>
      <header className='mb-16 text-center'>
        <Title title='Ubicación' />

        <p className='mx-auto max-w-3xl text-lg leading-relaxed text-text'>
          Contamos con nuestra base de operaciones en San Luis y centros logísticos en las ciudades más importantes del país.
        </p>
      </header>

      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3' aria-label='Nuestra ubicación'>
        {projects.map((project) => (
          <Link key={project.id} href={`/ubicaciones/${project.slug}`} className='block no-underline'>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>

      <div className='mt-10 text-center'>
        <Link href='/ubicaciones' className='font-semibold text-primary no-underline hover:underline'>
          Ver todas las ubicaciones
        </Link>
      </div>
    </>
  )
}

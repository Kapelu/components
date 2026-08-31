import Image from 'next/image'
import type { Project } from '@/data/projects'

type Props = {
  project: Project
}

export default function ProjectCard({ project }: Props) {
  return (
    <article className='group block h-80 overflow-hidden rounded-xl border border-border/50 bg-muted shadow-sm backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg'>
      <div className='relative h-55 w-full overflow-hidden border-b border-border/40'>
        <Image
          src={project.image}
          alt={`${project.provincia} - Transporte Libertador`}
          fill
          className='object-cover transition duration-900 group-hover:scale-125'
          sizes='(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw'
        />
      </div>

      <div className='mt-1 px-1 text-center text-xl text-foreground'>
        <p>{project.calle}</p>
        <p>{project.provincia}</p>
        <p>{project.celular}</p>
      </div>
    </article>
  )
}

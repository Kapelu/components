import type { ReactNode } from 'react'
import clsx from 'clsx'

type ServiceCardProps = {
  title: string
  description: string
  children: ReactNode
  className?: string
}
export default function ServiceCard({
  title,
  description,
  children,
  className,
}: ServiceCardProps) {
  return (
    <article
      className={clsx(
        'rounded-2xl border border-border bg-muted/80 p-6 shadow-sm backdrop-blur-xs',
        className,
      )}>
      <div className='flex flex-col items-center text-center'>
        <div className='mb-5 flex justify-center'> {children} </div>
        {/* Icono */}
        <h3 className='mb-3 text-xl font-bold text-title'> {title} </h3>
        {/* Título */}
        <p className='leading-relaxed text-foreground'> {description} </p>
        {/* Descripción */}
      </div>
    </article>
  )
}

{/* USO CON UNA IMAGEN
  <ServiceCard 
    title='Diseño Web' 
    description='Interfaces modernas, accesibles y responsivas.' 
    > 
    <Image 
      src='/icons/design.svg' 
      alt='Diseño Web' 
      width={48} 
      height={48} 
    /> 
  </ServiceCard>
*/}

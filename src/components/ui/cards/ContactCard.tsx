import Link from 'next/link'

import { ReactNode } from 'react'

type ContactCardProps = {
  title: string
  value?: string
  href?: string
  icon: ReactNode
  children?: ReactNode
}

export default function ContactCard({
  title,
  value,
  href,
  icon,
  children,
}: ContactCardProps) {
  return (
    <article
      className='flex flex-col items-center rounded-xl border border-border
      bg-background p-6 text-center shadow-sm transition
      hover:-translate-y-1 hover:shadow-md'>
      <div className='mb-4 text-primary'>{icon}</div>

      <h3 className='mb-2 text-sm font-bold tracking-widest text-title uppercase'>
        {title}
      </h3>

      {children ? (
        children
      ) : href ? (
        <Link
          href={href}
          target='_blank'
          rel='noopener noreferrer'
          className='text-foreground hover:text-primary'>
          {value}
        </Link>
      ) : (
        <p className='text-text'>{value}</p>
      )}
    </article>
  )
}

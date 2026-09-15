import type { ComponentCatalogItem } from '../../../lib/types'

interface ComponentesNavProps {
  items: ComponentCatalogItem[]
}

export default function ComponentesNav({ items }: ComponentesNavProps) {
  return (
    <aside className='lg:sticky lg:top-24 lg:h-fit'>
      <nav
        aria-label='Navegación de componentes'
        className='flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:gap-4 lg:overflow-visible lg:pb-0'>
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className='shrink-0 rounded-lg border border-border bg-surface px-4 py-2 text-xl font-medium text-foreground transition-colors hover:border-primary hover:text-primary lg:shrink lg:px-3 lg:py-2'>
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

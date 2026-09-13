import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'

import Title from '@/components/ui/Title'
import ComponentesNav from '@/components/pages/componentes/ComponentesNav'
import ComponenteArticle from '@/components/pages/componentes/ComponenteArticle'
import { componentsCatalog } from '@/data/components-catalog'
import Button from '../ui/Button'

export default function Componentes() {
  const catalog = componentsCatalog.map((item) => ({
    ...item,
    code: readFileSync(
      resolve(
        process.cwd(),
        'src',
        'components',
        'ui',
        item.sourcePath.split('/').pop()!,
      ),
      'utf8',
    ),
  }))

  return (
    <>
      {/* <header className='mb-1 text-center text-service'>
        <Title title='Componentes' />
      </header> */}

      <div className='mx-auto mt-1 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]'>
        <ComponentesNav items={catalog} />

        <main className='flex flex-col gap-16'>
          {catalog.map((item) => (
            <ComponenteArticle key={item.id} item={item} />
          ))}
        </main>
      </div>
    </>
  )
}

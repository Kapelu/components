import StyleMarkdown from '../../../lib/StyleMarkdown'
import type { ComponentCatalogItem } from '../../../lib/types'
import ComponenteDocModal from './ComponenteDocModal'
import ComponentePreview from './ComponentePreview'

interface ComponenteArticleProps {
  item: ComponentCatalogItem
}

export default function ComponenteArticle({ item }: ComponenteArticleProps) {
  return (
    <article
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className='scroll-mt-24 rounded-xl border border-border bg-surface p-6'>
      {' '}
      <div className=' grid grid-cols-1 gap-4 lg:grid-cols-1'>
        <ComponentePreview code={item.code}>{item.render}</ComponentePreview>
      </div>
      <h3
        id={`${item.id}-title`}
        className='mt-6 text-center text-lg font-semibold text-heading'>
        {item.label}
      </h3>
      {item.description && (
        <StyleMarkdown className='mb-4'>{item.description}</StyleMarkdown>
      )}
      <ComponenteDocModal docPath={item.docPath} />
    </article>
  )
}

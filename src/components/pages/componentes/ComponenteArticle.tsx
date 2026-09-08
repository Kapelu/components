import type { ComponentCatalogItem } from './types'
import ComponentePreview from './ComponentePreview'
import ComponenteUsage from './ComponenteUsage'
import StyleMarkdown from './StyleMarkdown'
import ComponenteDocButton from './ComponenteDocButton'


interface ComponenteArticleProps {
  item: ComponentCatalogItem
}

export default function ComponenteArticle({ item }: ComponenteArticleProps) {
  return (
    <article
      id={item.id}
      aria-labelledby={`${item.id}-title`}
      className='scroll-mt-24 rounded-xl border border-border bg-surface p-6'>
      <header className='mb-6'>
        <h3
          id={`${item.id}-title`}
          className='text-lg font-semibold text-heading'>
          {item.label}
        </h3>

        {item.description && (
          <StyleMarkdown className='mb-4'>
            {item.description}
          </StyleMarkdown>
        )}
        <ComponenteDocButton docPath={item.docPath} />
      </header>

      <div className=' grid grid-cols-1 gap-4 lg:grid-cols-1'>
        <ComponentePreview code={item.code}>{item.render}</ComponentePreview>
      </div>

      {/* <ComponenteUsage usages={item.usages} /> */}
    </article>
  )
}

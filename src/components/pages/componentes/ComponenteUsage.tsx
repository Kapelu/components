import type { UsageExample } from './types'

interface ComponenteUsageProps {
  usages: UsageExample[]
}

export default function ComponenteUsage({ usages }: ComponenteUsageProps) {
  if (usages.length === 0) return null

  return (
    <section aria-label='Formas de uso' className='mt-6'>
      <h4 className='mb-3 text-sm font-semibold text-heading'>
        Formas de uso
      </h4>

      <div className='flex flex-col gap-4'>
        {usages.map((usage) => (
          <div
            key={usage.title}
            className='rounded-lg border border-border bg-background'>
            <p className='border-b border-border px-4 py-2 text-xs font-medium text-muted'>
              {usage.title}
            </p>

            <pre className='overflow-auto p-4 text-xs leading-relaxed text-foreground'>
              <code>{usage.code}</code>
            </pre>
          </div>
        ))}
      </div>
    </section>
  )
}

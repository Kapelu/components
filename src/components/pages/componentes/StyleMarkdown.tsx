import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface StyleMarkdownProps {
  children: string
  className?: string
}

export default function StyleMarkdown({
  children,
  className = '',
}: StyleMarkdownProps) {
  return (
    <div className={className}>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children }) => (
            <p className='mb-4 leading-7 text-base text-foreground last:mb-0'>
              {children}
            </p>
          ),

          ul: ({ children }) => (
            <ul className='my-6 text-base space-y-3'>{children}</ul>
          ),

          ol: ({ children }) => (
            <ol className='mb-4 ml-6 text-base list-decimal space-y-2'>
              {children}
            </ol>
          ),

          li: (props) => (
            <li className='flex items-start gap-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                className='mt-1 h-5 w-5 shrink-0 text-green-500'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M5 13l4 4L19 7'
                />
              </svg>

              <span>{props.children}</span>
            </li>
          ),

          strong: ({ children }) => (
            <strong className='font-semibold text-heading'>{children}</strong>
          ),

          em: ({ children }) => (
            <em className='italic text-muted'>{children}</em>
          ),

          code: ({ children }) => (
            <code className='rounded px-1.5 py-0.5 font-mono text-primary'>
              {children}
            </code>
          ),

          h1: ({ children }) => (
            <h1 className='mb-6 mt-10 text-center text-4xl font-bold tracking-tight'>
              {children}
            </h1>
          ),

          h2: ({ children }) => (
            <h2 className='mb-3 text-xl font-semibold text-heading'>
              {children}
            </h2>
          ),

          h3: ({ children }) => (
            <h3 className='mb-2 text-lg font-semibold text-heading'>
              {children}
            </h3>
          ),

          h4: ({ children }) => (
            <h4 className='mb-2 text-base font-semibold text-heading'>
              {children}
            </h4>
          ),

          blockquote: ({ children }) => (
            <blockquote className='my-6 border-l-4 border-primary pl-4 italic text-muted'>
              {children}
            </blockquote>
          ),

          a: ({ children, href }) => {
            const isExternal =
              href?.startsWith('http://') || href?.startsWith('https://')

            return (
              <a
                href={href}
                className='text-brand underline underline-offset-4 hover:opacity-80'
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}>
                {children}
              </a>
            )
          },

          hr: () => (
            <hr className='my-10 border-neutral-300 dark:border-neutral-700' />
          ),

          table: ({ children }) => (
            <div className='my-6 w-full overflow-x-auto'>
              <table className='w-full border-collapse border border-border text-sm'>
                {children}
              </table>
            </div>
          ),

          thead: ({ children }) => (
            <thead className='bg-muted'>{children}</thead>
          ),

          tbody: ({ children }) => <tbody>{children}</tbody>,

          tr: ({ children }) => (
            <tr className='border-b border-border last:border-b-0'>
              {children}
            </tr>
          ),

          th: ({ children }) => (
            <th className='border-r border-border px-4 py-3 text-left font-semibold text-heading last:border-r-0'>
              {children}
            </th>
          ),

          td: ({ children }) => (
            <td className='border-r border-border px-4 py-3 text-muted last:border-r-0'>
              {children}
            </td>
          ),
        }}>
        {children}
      </ReactMarkdown>
    </div>
  )
}

import ReactMarkdown from 'react-markdown'

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
        components={{
          p: ({ children }) => (
            <p className='mb-4 leading-7 text-muted last:mb-0'> {children} </p>
          ),
          ul: ({ children }) => (
            <ul className='mb-4 ml-6 list-disc space-y-2'> {children} </ul>
          ),
          ol: ({ children }) => (
            <ol className='mb-4 ml-6 list-decimal space-y-2'> {children} </ol>
          ),
          li: ({ children }) => (
            <li className='leading-7 text-muted'> {children} </li>
          ),
          strong: ({ children }) => (
            <strong className='font-semibold text-heading'> {children} </strong>
          ),
          em: ({ children }) => (
            <em className='italic text-muted'> {children} </em>
          ),
          code: ({ children }) => (
            <code className='rounded  px-1.5 py-0.5 font-mono text-primary'>
              {' '}
              {children}{' '}
            </code>
          ),
          h1: ({ children }) => (
            <h1 className='mb-4 text-2xl font-bold text-heading'>
              {' '}
              {children}{' '}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className='mb-3 text-xl font-semibold text-heading'>
              {' '}
              {children}{' '}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className='mb-2 text-lg font-semibold text-heading'>
              {' '}
              {children}{' '}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className='mb-2 text-base font-semibold text-heading'>
              {' '}
              {children}{' '}
            </h4>
          ),
          blockquote: ({ children }) => (
            <blockquote className='my-4 border-l-4 border-border pl-4 italic text-muted'>
              {' '}
              {children}{' '}
            </blockquote>
          ),
          a: ({ children, href }) => (
            <a
              href={href}
              className='text-brand underline underline-offset-4 hover:opacity-80'
              target='_blank'
              rel='noopener noreferrer'>
              {' '}
              {children}{' '}
            </a>
          ),
          hr: () => <hr className='my-6 border-border' />,
        }}>
        {children}
      </ReactMarkdown>
    </div>
  )
}

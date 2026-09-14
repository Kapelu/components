'use client'

import { CodeBracketIcon } from '@heroicons/react/24/outline'

import { useModal } from '@/components/layout/ModalProvider'

interface ComponentePreviewProps {
  children: React.ReactNode
  code: string
  codeLanguage?: string
}

export default function ComponentePreview({
  children,
  code,
  codeLanguage = 'tsx',
}: ComponentePreviewProps) {
  const { showModal } = useModal()

  function handleShowCode() {
    showModal({
      icon: 'info',
      code,
      codeLanguage,
      buttonText: 'Cerrar',
    })
  }

  return (
    <section
      aria-label='Vista previa del componente'
      className='relative flex min-h-48 items-center justify-center rounded-lg border border-border bg-background p-6'>
      <button
        type='button'
        onClick={handleShowCode}
        aria-label='Ver código del componente'
        title='Ver código'
        className='absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-md border border-border bg-surface text-muted transition-colors hover:bg-muted hover:text-surface'>
        <CodeBracketIcon className='h-5 w-5' />
      </button>

      {children}
    </section>
  )
}

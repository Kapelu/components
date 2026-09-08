'use client'

import type { ComponentType } from 'react'

import { useEffect, useState } from 'react'
import { createHighlighter } from 'shiki'

import StyleMarkdown from '@/components/pages/componentes/StyleMarkdown'

type Props = {
  open: boolean
  onClose: () => void
  autoClose?: number
  title?: string
  message?: string
  icon?: ComponentType<{ className?: string }>
  messages?: string[]
  code?: string | null
  markdown?: string | null
  codeLanguage?: string
  redirectTo?: string | null
  redirectSeconds?: number
  buttonText?: string
}

export default function Modal({
  open,
  onClose,
  autoClose = 0,
  title,
  message,
  icon: Icon,
  messages = [],
  code = null,
  markdown = null,
  codeLanguage = 'tsx',
  redirectTo = null,
  redirectSeconds = 5,
  buttonText = 'Aceptar',
}: Props) {
  const [visible, setVisible] = useState(false)
  const [seconds, setSeconds] = useState(redirectSeconds)
  const [highlightedCode, setHighlightedCode] = useState('')

  const isCodeModal = Boolean(code)
  const isMarkdownModal = Boolean(markdown)
  const isDocumentModal = isCodeModal || isMarkdownModal

  useEffect(() => {
    if (!open) {
      setVisible(false)
      return
    }

    const frame = requestAnimationFrame(() => {
      setVisible(true)
    })

    return () => cancelAnimationFrame(frame)
  }, [open])

  useEffect(() => {
    if (!open) return

    function handleEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEsc)

    const timer =
      autoClose > 0
        ? setTimeout(() => {
            handleClose()
          }, autoClose)
        : null

    return () => {
      document.removeEventListener('keydown', handleEsc)

      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [open, autoClose])

  useEffect(() => {
    if (!open || !redirectTo) return

    setSeconds(redirectSeconds)

    if (redirectSeconds <= 0) {
      window.location.href = redirectTo
      return
    }

    const interval = window.setInterval(() => {
      setSeconds((current) => {
        if (current <= 1) {
          window.clearInterval(interval)
          window.location.href = redirectTo
          return 0
        }

        return current - 1
      })
    }, 1000)

    return () => window.clearInterval(interval)
  }, [open, redirectTo, redirectSeconds])

  useEffect(() => {
    if (!isCodeModal || !code) {
      setHighlightedCode('')
      return
    }

    const sourceCode = code

    let cancelled = false

    async function highlightCode() {
      const highlighter = await createHighlighter({
        themes: ['solarized-dark'],
        langs: ['tsx', 'ts'],
      })

      const language =
        codeLanguage.toLowerCase() === 'typescript'
          ? 'ts'
          : codeLanguage.toLowerCase()

      const supportedLanguage =
        language === 'tsx' || language === 'ts' ? language : 'tsx'

      const html = highlighter.codeToHtml(sourceCode, {
        lang: supportedLanguage,
        theme: 'solarized-dark',
      })

      if (!cancelled) {
        setHighlightedCode(html)
      }

      highlighter.dispose()
    }

    highlightCode()

    return () => {
      cancelled = true
    }
  }, [code, codeLanguage, isCodeModal])

  function handleClose() {
    setVisible(false)

    window.setTimeout(() => {
      onClose()
    }, 300)
  }

  if (!open) return null

  return (
    <div
      className='fixed inset-0 z-999 flex items-center justify-center p-4'
      role='dialog'
      aria-modal='true'>
      <div
        onClick={handleClose}
        className={`absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
          visible ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`relative z-10 w-full ${
          isDocumentModal ? 'max-w-5xl' : 'max-w-md'
        } rounded-3xl border border-border bg-background p-6 shadow-lg transition-all duration-300 md:p-8 ${
          visible ? 'scale-100 opacity-100' : 'scale-90 opacity-0'
        }`}>
        <button
          type='button'
          onClick={handleClose}
          aria-label='Cerrar'
          className='absolute top-4 right-4 z-20 flex h-8 w-8 items-center justify-center rounded-full text-foreground transition hover:bg-muted hover:text-title'>
          <span aria-hidden='true' className='text-lg leading-none'>
            ×
          </span>
        </button>

        {isCodeModal ? (
          <div className='pt-2'>
            <div className='mb-4 flex items-center gap-3'>
              {Icon && <Icon className='h-6 w-6 text-primary' />}

              <div>
                <h2 className='text-xl font-bold text-title'>
                  Código del componente
                </h2>

                <p className='text-sm text-muted'>
                  {codeLanguage.toUpperCase()}
                </p>
              </div>
            </div>

            <div className='overflow-hidden rounded-xl border border-[#586e75] bg-[#002b36]'>
              <pre
                className='max-h-[70vh] overflow-auto p-5 text-left text-sm leading-relaxed'
                tabIndex={0}
                dangerouslySetInnerHTML={{
                  __html:
                    highlightedCode ||
                    '<code class="text-[#839496]">Cargando código...</code>',
                }}
              />
            </div>

            <button
              type='button'
              onClick={handleClose}
              className='mt-5 flex h-11 w-full items-center justify-center rounded-lg border border-secondary bg-background px-4 font-medium text-title transition-colors hover:bg-muted'>
              {buttonText}
            </button>
          </div>
        ) : isMarkdownModal ? (
          <div className='pt-2'>
            <div className='mb-5 flex items-center gap-3'>
              {Icon && <Icon className='h-6 w-6 text-primary' />}

              <h2 className='text-xl font-bold text-title'>
                {title ?? 'Documentación del componente'}
              </h2>
            </div>

            <div className='max-h-[70vh] overflow-auto rounded-xl border border-border bg-surface p-5 text-sm'>
              <StyleMarkdown>{markdown ?? ''}</StyleMarkdown>
            </div>

            <button
              type='button'
              onClick={handleClose}
              className='mt-5 flex h-11 w-full items-center justify-center rounded-lg border border-secondary bg-background px-4 font-medium text-title transition-colors hover:bg-muted'>
              {buttonText}
            </button>
          </div>
        ) : (
          <>
            {Icon ? (
              <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
                <Icon className='h-12 w-12 text-primary' />
              </div>
            ) : (
              <div className='mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-muted'>
                <svg
                  className='h-12 w-12 text-[#859900]'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='3'
                  strokeLinecap='round'
                  strokeLinejoin='round'>
                  <path
                    d='M5 13l4 4L19 7'
                    className='animate-[draw_0.6s_ease_forwards]'
                    style={{
                      strokeDasharray: 30,
                      strokeDashoffset: 30,
                    }}
                  />
                </svg>
              </div>
            )}

            {title && (
              <h2 className='mt-6 text-center text-2xl font-bold text-title'>
                {title}
              </h2>
            )}

            {message && (
              <p className='mt-3 text-center text-foreground'>{message}</p>
            )}

            {messages.map((item, index) => (
              <p
                key={`${item}-${index}`}
                className='mt-3 text-center text-foreground'>
                {item}
              </p>
            ))}

            {redirectTo && redirectSeconds > 0 && (
              <p className='mt-4 text-center text-sm text-muted'>
                Redirigiendo en {seconds}{' '}
                {seconds === 1 ? 'segundo' : 'segundos'}...
              </p>
            )}

            {!title && !message && messages.length > 0 && (
              <button
                type='button'
                onClick={handleClose}
                className='mt-6 flex h-11 w-full items-center justify-center rounded-lg border border-secondary bg-background px-4 font-medium text-title transition-colors hover:bg-muted'>
                {buttonText}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  )
}
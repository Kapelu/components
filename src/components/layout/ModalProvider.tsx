'use client'

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  ExclamationTriangleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

import Modal from '@/components/ui/Modal'

export type ModalIcon = 'error' | 'warning' | 'success' | 'info'

export interface ModalOptions {
  icon?: ModalIcon
  messages?: string[]
  code?: string | null
  markdown?: string | null
  mdx?: string | null
  codeLanguage?: string
  redirectTo?: string | null
  redirectSeconds?: number
  buttonText?: string
  title?: string
  className?: string
  onClose?: () => void
}

interface ModalContextType {
  showModal: (options: ModalOptions) => void
  closeModal: () => void
}

const ModalContext = createContext<ModalContextType | null>(null)

const icons = {
  error: ExclamationCircleIcon,
  warning: ExclamationTriangleIcon,
  success: CheckCircleIcon,
  info: InformationCircleIcon,
}

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const [options, setOptions] = useState({
    icon: 'info' as ModalIcon,
    messages: [] as string[],
    code: null as string | null,
    markdown: null as string | null,
    mdx: null as string | null,
    codeLanguage: 'tsx',
    redirectTo: null as string | null,
    redirectSeconds: 5,
    /* buttonText: 'Aceptar', */
    title: undefined as string | undefined,
    className: undefined as string | undefined,
  })

  const [onCloseCallback, setOnCloseCallback] = useState<
    (() => void) | undefined
  >()

  const showModal = useCallback((modal: ModalOptions) => {
    setOptions({
      icon: modal.icon ?? 'info',
      messages: modal.messages ?? [],
      code: modal.code ?? null,
      markdown: modal.markdown ?? null,
      mdx: modal.mdx ?? null,
      codeLanguage: modal.codeLanguage ?? 'tsx',
      redirectTo: modal.redirectTo ?? null,
      redirectSeconds: modal.redirectSeconds ?? 5,
      /* buttonText: modal.buttonText ?? 'Aceptar', */
      title: modal.title,
      className: modal.className,
    })

    setOnCloseCallback(() => modal.onClose)
    setIsOpen(true)
  }, [])

  const closeModal = useCallback(() => {
    setIsOpen(false)

    if (onCloseCallback) {
      onCloseCallback()
      setOnCloseCallback(undefined)
    }
  }, [onCloseCallback])

  const value = useMemo(
    () => ({
      showModal,
      closeModal,
    }),
    [showModal, closeModal],
  )

  const Icon = icons[options.icon]

  return (
    <ModalContext.Provider value={value}>
      {children}

      <Modal
        open={isOpen}
        onClose={closeModal}
        icon={Icon}
        messages={options.messages}
        code={options.code}
        markdown={options.markdown}
        mdx={options.mdx}
        title={options.title}
        codeLanguage={options.codeLanguage}
        redirectTo={options.redirectTo}
        redirectSeconds={options.redirectSeconds}
        className={options.className}
        /* buttonText={options.buttonText} */
      />
    </ModalContext.Provider>
  )
}

export function useModal() {
  const context = useContext(ModalContext)

  if (!context) {
    throw new Error('useModal debe utilizarse dentro de un ModalProvider.')
  }

  return context
}

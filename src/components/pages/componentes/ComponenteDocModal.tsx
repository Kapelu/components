'use client'

import { useState } from 'react'

import { useModal } from '@/components/layout/ModalProvider'
import Button from '@/components/ui/Button'

interface ComponenteDocModalProps {
  docPath: string
}

export default function ComponenteDocModal({
  docPath,
}: ComponenteDocModalProps) {
  const { showModal } = useModal()
  const [loading, setLoading] = useState(false)

  async function handleShowDocumentation() {
    if (loading) return

    setLoading(true)

    try {
      const response = await fetch(
        `/api/component-doc?path=${encodeURIComponent(docPath)}`,
      )

      if (!response.ok) {
        throw new Error('No se pudo cargar la documentación.')
      }

      const documentation = await response.text()

      showModal({
        icon: 'info',
        title: 'Documentación del componente',
        mdx: documentation,
        buttonText: 'Cerrar',
        className: 'bg-heading',
      })
    } catch {
      showModal({
        icon: 'error',
        messages: ['No se pudo cargar la documentación del componente.'],
        buttonText: 'Cerrar',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <Button
      variant='menu'
      onClick={handleShowDocumentation}
      disabled={loading}>
      {loading ? 'Cargando...' : '+Info & Usos'}
    </Button>
  )
}

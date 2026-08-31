'use client'

import { useState } from 'react'

import Modal from '@/components/ui/Modal'
import { Button } from '@/components/ui/buttons/Button'
import Input from '@/components/ui/Input'

export default function ContactForm() {
  const [modalOpen, setModalOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    setLoading(true)
    setSuccess(false)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      if (!response.ok) {
        throw new Error('Error al enviar el formulario')
      }

      form.reset()

      setSuccess(true)
      setModalOpen(true)
    } catch {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='mx-auto flex max-w-3xl flex-col items-center text-sm'>
      {/* Nombre y Email */}
      <div className='flex w-full flex-col gap-8 md:flex-row'>
        <div className='w-full'>
          <label
            htmlFor='name'
            className='mb-2 block text-sm text-service'>
            Tú Nombre
          </label>

          <Input
            id='name'
            name='name'
            type='text'
            required
            className='h-12 rounded-lg'
          />
        </div>

        <div className='w-full'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm text-service'>
            Tú e-mail
          </label>

          <Input
            id='email'
            name='email'
            type='email'
            required
            className='h-12 rounded-lg'
          />
        </div>
      </div>

      {/* Mensaje */}
      <div className='mt-6 w-full'>
        <label
          htmlFor='message'
          className='mb-2 block text-sm text-service'>
          Tú Mensaje
        </label>

        <textarea
          id='message'
          name='message'
          required
          rows={8}
          className='peer w-full resize-none rounded-lg border border-border bg-background p-3 text-sm text-muted outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary disabled:pointer-events-none disabled:opacity-50'
        />
      </div>

      {/* Botón */}
      <Button
        variant='primary'
        type='submit'
        disabled={loading}
        className='mt-6 h-12 w-56 rounded-lg'>
        {loading ? 'Enviando...' : 'Enviar mensaje'}
      </Button>

      {/* Modal de éxito */}
      {success && (
        <Modal
          open={modalOpen}
          title='¡Muchas gracias!'
          message='Te responderemos lo antes posible.'
          onClose={() => setModalOpen(false)}
          autoClose={5000}
        />
      )}

      {/* Error */}
      {error && (
        <div className='mt-4 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-red-600'>
          Error al enviar el mensaje.
        </div>
      )}
    </form>
  )
}

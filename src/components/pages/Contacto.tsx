import Link from 'next/link'

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  QrCodeIcon,
} from '@heroicons/react/24/outline'

import ContactForm from '@/components/ui/cards/ContactForm'
import ContactCard from '@/components/ui/cards/ContactCard'
import { contact } from '@/data/contact'
import { Title } from '@/components/ui/Title'

export default function Contacto() {
  return (
    <>
      <header className='mb-5 text-center text-service'>
        <Title title='Contacto' />

        <p>¿Necesitás hacer tu cotización online?</p>
      </header>

      <div className='grid gap-5 md:grid-cols-2 lg:grid-cols-4'>
        <ContactCard
          title='Ubicación'
          value={contact.location}
          icon={<MapPinIcon className='size-9' />}
        />

        <ContactCard
          title='Teléfono'
          value={contact.phone}
          href={`tel:${contact.phone}`}
          icon={<PhoneIcon className='size-9' />}
        />

        <ContactCard
          title='Email'
          value={contact.email}
          href={`mailto:${contact.email}`}
          icon={<EnvelopeIcon className='size-9' />}
        />
        <ContactCard
          title='Social Media'
            icon={<QrCodeIcon className='size-9' />}>
          <div className='flex items-center justify-center gap-5'>
            <Link
              href={contact.facebook}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'>
                <path
                  fill='#1877F2'
                  d='M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.006 10.125 11.927v-8.432H7.078v-3.495h3.047V9.41c0-3.037 1.791-4.713 4.533-4.713 1.313 0 2.686.236 2.686.236v2.977h-1.515c-1.491 0-1.954.93-1.954 1.886v2.277h3.328l-.532 3.495h-2.796V24C19.612 23.079 24 18.092 24 12.073z'
                />
              </svg>
            </Link>
            <Link
              href={contact.instagram}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='30'
                height='30'
                viewBox='0 0 24 24'>
                <defs>
                  <linearGradient
                    id='instagram-gradient'
                    x1='0%'
                    y1='100%'
                    x2='100%'
                    y2='0%'>
                    <stop offset='0%' stopColor='#FFDC80' />
                    <stop offset='25%' stopColor='#FCAF45' />
                    <stop offset='50%' stopColor='#F77737' />
                    <stop offset='75%' stopColor='#E1306C' />
                    <stop offset='100%' stopColor='#833AB4' />
                  </linearGradient>
                </defs>

                <rect
                  width='20'
                  height='20'
                  x='2'
                  y='2'
                  rx='5'
                  fill='none'
                  stroke='url(#instagram-gradient)'
                  strokeWidth='2'
                />

                <circle
                  cx='12'
                  cy='12'
                  r='4'
                  fill='none'
                  stroke='url(#instagram-gradient)'
                  strokeWidth='2'
                />

                <circle cx='17.5' cy='6.5' r='1' fill='#E1306C' />
              </svg>
            </Link>

            <Link
              href={contact.linkedin}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='LinkedIn'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='35'
                height='35'
                viewBox='0 0 24 24'>
                <path
                  fill='#1877F2'
                  d='M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM8.339 18.337H5.667v-8.59h2.672v8.59zM7.003 8.574a1.548 1.548 0 1 1 0-3.096 1.548 1.548 0 0 1 0 3.096zM18.338 18.337h-2.669V14.16c0-.996-.018-2.277-1.388-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248h-2.667v-8.59h2.56v1.174h.037c.355-.675 1.227-1.387 2.524-1.387 2.704 0 3.203 1.778 3.203 4.092z'
                />
              </svg>
            </Link>
          </div>
        </ContactCard>
      </div>

      <article
        aria-labelledby='contact-form-title'
        className='mx-auto mt-5 max-w-3xl'>
        <header className='mb-4 text-center text-service'>
          <h2
            id='contact-form-title'
            className='text-2xl font-semibold text-title'>
            Envíanos un mensaje
          </h2>

          <p>Completa el formulario y te responderemos a la brevedad.</p>
        </header>

        <ContactForm />
      </article>
    </>
  )
}

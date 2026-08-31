import { AppConfig } from '@/lib/AppConfig'
import { contact } from '@/data/contact'

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Transporte Libertador',
    url: AppConfig.url,
    logo: `${AppConfig.url}/logo.png`,
    email: contact.email,
    telephone: contact.phone,
    sameAs: [contact.facebook, contact.instagram, contact.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'San Luis',
      addressCountry: 'AR',
    },
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

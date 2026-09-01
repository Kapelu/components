import { AppConfig } from '@/lib/AppConfig'
import { contact } from '@/data/contact'

export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Components by Kapelu',
    url: AppConfig.url,
    logo: `${AppConfig.url}/logo.png`,
    email: contact.email,
    telephone: contact.phone,
    sameAs: [contact.facebook, contact.instagram, contact.linkedin],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Mendoza',
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

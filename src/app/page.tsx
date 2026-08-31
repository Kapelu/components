import type { Metadata } from 'next'
import Home from '@/components/pages/Home'
import { AppConfig } from '@/lib/AppConfig'

export const metadata: Metadata = {
  title: AppConfig.title,
  description: 'Componentes reutilizables creados en mis proyectos.',
  alternates: { canonical: AppConfig.url },
  openGraph: {
    title: AppConfig.title,
    description: 'Componentes reutilizables creados en mis proyectos.',
    url: AppConfig.url,
    type: 'website',
  },
}

export default function Page() {
  return <Home />
}

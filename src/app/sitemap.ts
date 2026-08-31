import type { MetadataRoute } from 'next'
import { AppConfig } from '@/lib/AppConfig'
import { services } from '@/data/services'
import { locations } from '@/data/locations'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: AppConfig.url, lastModified: now, changeFrequency: 'weekly', priority: 1 },
    { url: `${AppConfig.url}/empresa`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${AppConfig.url}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${AppConfig.url}/ubicaciones`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${AppConfig.url}/contacto`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
  ]

  const serviceRoutes = services.map((service) => ({
    url: `${AppConfig.url}/servicios/${service.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  const locationRoutes = locations.map((location) => ({
    url: `${AppConfig.url}/ubicaciones/${location.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [...staticRoutes, ...serviceRoutes, ...locationRoutes]
}

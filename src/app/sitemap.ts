import { MetadataRoute } from 'next'
import { services } from '@/lib/services'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://laspaces.co'

  const servicePages = services.map((service) => ({
    url: `${base}/servicios/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...servicePages,
  ]
}

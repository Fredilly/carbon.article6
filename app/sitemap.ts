import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://carbon.article6.org',
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://carbon.article6.org/contact',
      changeFrequency: 'monthly',
      priority: 0.5,
    },
  ];
}

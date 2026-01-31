import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Mambaus - Full Stack Developer Portfolio',
    short_name: 'Mambaus',
    description: 'Full Stack Developer specializing in web development, business strategy, and technical consulting.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#212529',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  }
}

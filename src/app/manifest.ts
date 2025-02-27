import type { MetadataRoute } from 'next'
 
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Want a burger? PWA',
    short_name: 'Burger?',
    description: 'A Progressive Web App built with Next.js',
    start_url: '/',
    id: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#000000',
    screenshots: [
      {
       "src": "/placeholder.png",
        "sizes": "464x973",
        "type": "image/png",
        "form_factor": "wide",
        "label": "Wonder Widgets"
      },
      {
        "src": "/placeholder.png",
         "sizes": "464x973",
         "type": "image/png",
         "form_factor": "narrow",
         "label": "Wonder Widgets"
       }
    ],
    icons: [
      {
        src: '/food_192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/food.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
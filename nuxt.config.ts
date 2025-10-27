// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  modules: ['@nuxt/eslint'],

  css: [
    '~/assets/css/tailwind.css'
  ],

  vite: {
    plugins: [
      tailwindcss()
    ]
  },

  // Configuración SSG - prerenderizar todas las rutas
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/servicios',
        '/casos',
        '/sobre-mi',
        '/blog',
        '/contacto'
      ]
    }
  },

  routeRules: {
    '/**': { prerender: true }
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'es'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap' }
      ]
    }
  }
})

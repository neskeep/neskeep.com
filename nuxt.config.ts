// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',

  future: {
    compatibilityVersion: 4
  },

  devtools: { enabled: true },

  modules: ['@nuxt/eslint', 'nuxt-umami', 'nuxt-module-hotjar'],

  css: [
    '~/assets/css/tailwind.css'
  ],

  umami: {
    id: process.env.NUXT_PUBLIC_UMAMI_ID,
    host: process.env.NUXT_PUBLIC_UMAMI_HOST,
    autoTrack: true,
    // proxy: 'cloak',
    useDirective: true,
    ignoreLocalhost: false,
    // excludeQueryParams: false,
    // domains: ['localhost:3000', 'neskeep.com'],
    // customEndpoint: '/my-custom-endpoint',
    // enabled: false,
    // logErrors: true,
  },

  hotjar: {
    hotjarId: 402984,
    scriptVersion: 6,
    debug: process.env.NODE_ENV !== 'production' // Debug solo en desarrollo
  },

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
        '/privacidad',
        '/terminos'
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
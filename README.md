# Neskeep - Sitio Web Estático

> Menos promesas, más código.

Sitio web corporativo de Neskeep construido con Nuxt 4 y Tailwind CSS v4.1. Diseño moderno inspirado en [buildmyagent.io](https://buildmyagent.io) con generación estática completa (SSG) para máximo rendimiento.

## Stack Tecnológico

- **Framework:** Nuxt 4.2.0
- **CSS:** Tailwind CSS v4.1
- **Runtime:** Vue 3
- **Tipo:** 100% Estático (SSG)
- **Tipografía:** Inter (Google Fonts)
- **Linting:** ESLint + Prettier

## Características

✅ **SSG Completo** - Todas las rutas pre-renderizadas
✅ **SEO Optimizado** - Meta tags, Open Graph, Twitter Cards
✅ **Accesibilidad** - Roles ARIA, focus visible, contraste alto
✅ **Rendimiento** - Core Web Vitals optimizado
✅ **Responsive** - Mobile-first design
✅ **Paleta Personalizada** - Colores brand: Neocyan, Quantum Blue, Pulse Green
✅ **Componentes Reutilizables** - Sistema de diseño modular
✅ **Animaciones Avanzadas** - Particles.js, transitions, scroll reveals
✅ **Bento Grid System** - Layout modular tipo dashboard
✅ **Page Transitions** - Transiciones suaves entre páginas
✅ **Section Transitions** - Curvas de easing tipo Spline
✅ **3D Effects** - Perspective transforms y spotlight interactivo

## Estructura del Proyecto

```
neskeep.com/
├── app/
│   ├── assets/
│   │   └── css/
│   │       └── tailwind.css          # Estilos globales + theme Tailwind
│   ├── components/
│   │   ├── ui/                       # Componentes UI base
│   │   │   ├── Button.vue
│   │   │   ├── Card.vue
│   │   │   ├── Container.vue
│   │   │   └── Section.vue
│   │   ├── Nav.vue                   # Navegación
│   │   ├── Footer.vue                # Footer
│   │   ├── Hero.vue                  # Hero sections
│   │   ├── ServiceCard.vue           # Cards de servicios
│   │   ├── CaseCard.vue              # Cards de casos
│   │   └── Testimonial.vue           # Testimonios
│   ├── composables/
│   │   └── useSeo.js                 # Helper para SEO
│   ├── layouts/
│   │   ├── default.vue               # Layout con Nav + Footer
│   │   └── minimal.vue               # Layout sin header/footer
│   ├── pages/
│   │   ├── index.vue                 # Home
│   │   ├── servicios/
│   │   │   ├── index.vue             # Lista de servicios
│   │   │   └── [slug].vue            # Detalle de servicio
│   │   ├── casos/
│   │   │   ├── index.vue             # Lista de casos
│   │   │   └── [slug].vue            # Detalle de caso
│   │   ├── blog/
│   │   │   ├── index.vue             # Lista de artículos
│   │   │   └── [slug].vue            # Artículo individual
│   │   ├── sobre-mi.vue              # Sobre mí
│   │   └── contacto.vue              # Contacto
│   └── app.vue                       # App root
├── public/
│   ├── favicon.ico
│   ├── robots.txt                    # SEO
│   ├── sitemap.xml                   # Sitemap demo
│   └── og.svg                        # Open Graph image (placeholder)
├── nuxt.config.ts                    # Configuración Nuxt
├── eslint.config.mjs                 # Configuración ESLint
├── .prettierrc                       # Configuración Prettier
└── package.json
```

## Instalación

### Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Setup

1. **Clonar el repositorio** (o usar este directorio)

2. **Instalar dependencias:**

```bash
pnpm install
```

3. **Iniciar servidor de desarrollo:**

```bash
pnpm dev
```

El sitio estará disponible en `http://localhost:3000`

## Scripts Disponibles

```bash
# Desarrollo
pnpm dev                    # Servidor de desarrollo

# Producción
pnpm build                  # Build para producción
pnpm generate               # Generar sitio estático (SSG)
pnpm preview                # Preview del build

# Calidad de código
pnpm lint                   # Ejecutar ESLint
pnpm lint:fix               # Auto-fix errores de ESLint
pnpm format                 # Formatear con Prettier
```

## Despliegue

### Netlify (Recomendado)

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command:** `pnpm generate`
   - **Publish directory:** `.output/public`
3. Deploy automático en cada push

### Vercel

1. Conecta tu repositorio a Vercel
2. Vercel detecta Nuxt automáticamente
3. Deploy automático

### Cloudflare Pages

1. Conecta tu repositorio
2. Configuración:
   - **Build command:** `pnpm generate`
   - **Build output directory:** `.output/public`

### Servidor estático genérico

```bash
pnpm generate
```

Los archivos estáticos estarán en `.output/public/`. Súbelos a cualquier hosting estático.

## Personalización

### Colores de Marca

Edita las variables CSS en `app/assets/css/tailwind.css`:

```css
:root {
  --color-neocyan: #00C9D4;
  --color-quantum-blue: #0C0F1C;
  --color-pulse-green: #A6FF3A;
}
```

### Contenido

El contenido actual es demo. Para usar contenido real:

1. **Opción 1 - Hard-coded:** Edita directamente los archivos `.vue` en `pages/`
2. **Opción 2 - CMS:** Integra un headless CMS (Strapi, Contentful, etc.)
3. **Opción 3 - Markdown:** Usa `@nuxt/content` para contenido en Markdown

### SEO

- **Favicon:** Reemplaza `public/favicon.ico`
- **OG Image:** Crea `public/og.png` (1200x630px) para reemplazar el SVG placeholder
- **Sitemap:** Genera sitemap dinámico o usa `@nuxtjs/sitemap`
- **Meta tags:** Edita `useSeoMeta` en cada página

### Rutas Pre-renderizadas

Agrega/modifica rutas en `nuxt.config.ts`:

```ts
nitro: {
  prerender: {
    routes: ['/', '/servicios', '/casos', ...]
  }
}
```

## Integración con Analytics

Para agregar Google Analytics, Plausible, etc.:

1. Agrega tu script en `nuxt.config.ts`:

```ts
app: {
  head: {
    script: [
      {
        src: 'https://your-analytics-script.js',
        async: true,
        defer: true
      }
    ]
  }
}
```

2. O usa módulos Nuxt como `@nuxtjs/google-analytics` o `nuxt-simple-sitemap`

## Formulario de Contacto

El formulario actual es demo (no envía emails). Para hacerlo funcional:

**Opción 1 - Servicio Third-party:**
- Formspree
- Netlify Forms
- Getform

**Opción 2 - API Propia:**
- Crea un endpoint en `server/api/contact.post.js`
- Integra con servicio de email (SendGrid, Mailgun, etc.)

**Opción 3 - Email directo:**
- Usa `mailto:` link (menos profesional)

## Performance

El sitio está optimizado para:

- **First Contentful Paint (FCP):** < 1s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3s

Recomendaciones adicionales:

1. Optimiza imágenes (usa WebP/AVIF)
2. Agrega CDN (Cloudflare, Bunny, etc.)
3. Habilita compresión Brotli/Gzip
4. Implementa lazy loading para imágenes
5. Usa `@nuxt/image` para responsive images

## Accesibilidad

El sitio cumple con WCAG 2.1 AA:

- ✅ Contraste de color suficiente (4.5:1 mínimo)
- ✅ Navegación por teclado
- ✅ Roles ARIA apropiados
- ✅ Focus visible en elementos interactivos
- ✅ Alt text en imágenes (pendiente agregar imágenes reales)

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari 14+
- iOS Safari 14+
- Android Chrome (últimas 2 versiones)

## Documentación Adicional

Este proyecto incluye documentación detallada sobre características específicas:

- **[INTERACTIVE-FEATURES.md](INTERACTIVE-FEATURES.md)** - Guía completa de animaciones, particles.js, scroll reveals y efectos interactivos
- **[BENTO-AND-TRANSITIONS.md](BENTO-AND-TRANSITIONS.md)** - Sistema Bento Grid, page transitions y section transitions con curvas tipo Spline

### Características Destacadas

#### 🎨 Bento Grid System
Layout modular tipo dashboard con items de diferentes tamaños y animaciones internas:
- Stats con contadores animados
- Features con spotlight 3D
- Items con perspective transform
- Auto-responsive y auto-flow dense

#### 🎬 Transiciones Avanzadas
- **Page Transitions:** Slide, scale y fade entre páginas
- **Section Transitions:** Curvas de easing suaves (smooth, elastic, bounce, spring)
- **Scroll Reveals:** IntersectionObserver con delays configurables

#### ✨ Efectos Interactivos
- Particles.js con 80+ partículas interactivas
- Card spotlight que sigue el cursor
- Hero con typing effect animado
- Mesh gradients rotatorios
- Animaciones con 11+ keyframes personalizados

## Recursos

- [Nuxt 4 Docs](https://nuxt.com)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Vue 3 Docs](https://vuejs.org)
- [tsparticles Docs](https://particles.js.org)

## Licencia

Código propietario © 2024 Neskeep. Todos los derechos reservados.

---

**Desarrollado con ❤️ y código limpio**

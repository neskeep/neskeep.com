# Neskeep - Sitio Web

> Menos promesas, más código.

Sitio web corporativo de Neskeep construido con Nuxt 4 y Tailwind CSS v4.1. Diseño moderno con generación estática completa (SSG) para máximo rendimiento y adquisición de leads.

## Stack Tecnológico

- **Framework:** Nuxt 4.2.0
- **CSS:** Tailwind CSS v4.1
- **Runtime:** Vue 3.5.22
- **Tipo:** 100% Estático (SSG)
- **Email:** Resend API
- **Analytics:** Umami + Hotjar
- **Efectos:** tsparticles (particles.js)
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
✅ **Formulario de Contacto** - Integrado con Resend, validación completa
✅ **Analytics Completo** - Umami (eventos) + Hotjar (heatmaps/recordings)

## Estructura del Proyecto

```
neskeep.com/
├── app/
│   ├── assets/css/
│   │   └── tailwind.css                # Estilos globales + theme custom
│   ├── components/
│   │   ├── ui/                         # Componentes UI base
│   │   │   ├── AnimatedNumber.vue      # Contador animado
│   │   │   ├── Container.vue           # Container responsive
│   │   │   ├── CustomSelect.vue        # Select personalizado
│   │   │   └── Section.vue             # Sección base
│   │   ├── AnimatedTypewriter.vue      # Efecto de máquina de escribir
│   │   ├── CasesCarousel.vue           # Carrusel de casos
│   │   ├── FAQSection.vue              # Acordeón de FAQs
│   │   ├── Footer.vue                  # Footer del sitio
│   │   ├── Hero.vue                    # Hero sections
│   │   ├── Logo.vue                    # Logo SVG
│   │   ├── Nav.vue                     # Navegación + menú mobile
│   │   ├── ParticlesBackground.vue     # Fondo animado
│   │   ├── SectionTransition.vue       # Transiciones entre secciones
│   │   └── TestimonialsVertical.vue    # Testimonios con scroll
│   ├── composables/
│   │   ├── useActiveSection.js         # Tracking de sección activa
│   │   ├── useClickOutside.js          # Detectar clicks externos
│   │   ├── useMouseGlow.js             # Efecto glow con mouse
│   │   ├── useNumberCounter.ts         # Contador animado
│   │   ├── useScrollReveal.js          # Animaciones on scroll
│   │   └── useSeo.js                   # Helper para SEO
│   ├── layouts/
│   │   └── default.vue                 # Layout principal (Nav + Footer)
│   ├── pages/
│   │   ├── index.vue                   # Home (landing completa)
│   │   ├── privacidad.vue              # Política de privacidad
│   │   └── terminos.vue                # Términos y condiciones
│   └── app.vue                         # App root
├── server/
│   ├── api/
│   │   └── contact.post.ts             # Endpoint de contacto
│   └── utils/
│       └── email-template.ts           # Template HTML del email
├── public/
│   ├── favicon.ico                     # Favicon
│   ├── logo.png                        # Logo PNG
│   ├── isotipo-logo.png                # Isotipo
│   ├── og.svg                          # Open Graph image
│   ├── robots.txt                      # SEO robots
│   └── sitemap.xml                     # Sitemap XML
├── .env                                # Variables de entorno (NO COMMITEAR)
├── .env.example                        # Template de variables
├── nuxt.config.ts                      # Configuración Nuxt
├── package.json                        # Dependencias
└── README.md                           # Este archivo
```

## Instalación

### Requisitos

- Node.js 18+
- pnpm (recomendado) o npm

### Setup

1. **Instalar dependencias:**

```bash
pnpm install
```

2. **Configurar variables de entorno:**

```bash
cp .env.example .env
```

Edita `.env` y configura:
- `RESEND_API_KEY` - Tu API key de Resend
- `NUXT_PUBLIC_UMAMI_ID` - ID de tu sitio en Umami
- `NUXT_PUBLIC_UMAMI_HOST` - URL de tu instancia Umami

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

## Analytics Stack

### Umami (Event Tracking)
- Eventos custom en todas las interacciones
- Privacy-first, sin cookies
- Panel: Configurado vía `NUXT_PUBLIC_UMAMI_HOST`

### Hotjar (Behavior Analytics)
- Heatmaps de clicks
- Session recordings
- ID: 402984 (configurado en nuxt.config.ts)
- Panel: https://insights.hotjar.com/sites/402984/

## Despliegue

### Vercel (Actual)

El sitio está desplegado en Vercel. Para actualizar:

1. Push a `main` branch
2. Vercel detecta y despliega automáticamente

**Variables de entorno en Vercel:**
- `RESEND_API_KEY`
- `NUXT_PUBLIC_UMAMI_ID`
- `NUXT_PUBLIC_UMAMI_HOST`

### Netlify (Alternativa)

1. Conecta tu repositorio a Netlify
2. Configuración de build:
   - **Build command:** `pnpm generate`
   - **Publish directory:** `.output/public`
3. Agrega las variables de entorno
4. Deploy automático en cada push

### Cloudflare Pages (Alternativa)

1. Conecta tu repositorio
2. Configuración:
   - **Build command:** `pnpm generate`
   - **Build output directory:** `.output/public`
3. Agrega las variables de entorno

## Personalización

### Colores de Marca

Edita las variables CSS en `app/assets/css/tailwind.css`:

```css
:root {
  --color-neocyan: #00C9D4;        /* Cyan vibrante */
  --color-quantum-blue: #0C0F1C;   /* Azul oscuro profundo */
  --color-pulse-green: #A6FF3A;    /* Verde neón */
}
```

### Contenido

El contenido actual incluye ejemplos de:
- 3 servicios principales
- 6 casos destacados (demo)
- 6 testimonios (demo)
- 6 FAQs

Para usar contenido real, edita directamente `app/pages/index.vue`.

### SEO

- **Favicon:** Reemplaza `public/favicon.ico`
- **OG Image:** Convierte `public/og.svg` a `og.png` (1200x630px) para mejor compatibilidad
- **Meta tags:** Usa composable `useSeo()` en cada página

## Formulario de Contacto

### Configuración Resend

1. Crea cuenta en [resend.com](https://resend.com)
2. Obtén tu API key
3. Configura en `.env`: `RESEND_API_KEY=re_xxx`
4. (Opcional) Verifica tu dominio para email personalizado

### Cambiar Email de Destino

Edita `server/api/contact.post.ts`:

```typescript
to: ['tu-email@neskeep.com'], // Línea ~57
```

## Performance

Objetivos actuales:

- **First Contentful Paint (FCP):** < 1s
- **Largest Contentful Paint (LCP):** < 2.5s
- **Cumulative Layout Shift (CLS):** < 0.1
- **Time to Interactive (TTI):** < 3s

## Accesibilidad

Cumple con WCAG 2.1 AA:

- ✅ Contraste de color 4.5:1 mínimo
- ✅ Navegación por teclado
- ✅ Roles ARIA apropiados
- ✅ Focus visible en elementos interactivos

## Soporte de Navegadores

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari 14+
- iOS Safari 14+
- Android Chrome (últimas 2 versiones)

## Roadmap (Futuro)

Páginas planificadas para futuras versiones:

- `/servicios` - Lista y detalle de servicios
- `/casos` - Casos de estudio completos
- `/blog` - Blog técnico con @nuxt/content
- `/sobre-mi` - Página de perfil personal

## Recursos

- [Nuxt 4 Docs](https://nuxt.com)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs/v4-beta)
- [Vue 3 Docs](https://vuejs.org)
- [Resend Docs](https://resend.com/docs)
- [Umami Docs](https://umami.is/docs)
- [Hotjar Docs](https://help.hotjar.com/)

## Licencia

Código propietario © 2024 Neskeep. Todos los derechos reservados.

---

**Desarrollado con ❤️ y código limpio**

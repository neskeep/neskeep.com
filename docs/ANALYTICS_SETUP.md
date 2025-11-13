# Stack de Analytics - Neskeep.com

> Documentación completa de la integración de analytics y tracking de eventos

## 📊 Stack Implementado

### 1. Umami (Event Tracking)
- **Propósito:** Tracking de eventos custom y analytics privacy-first
- **Configuración:** [nuxt.config.ts:19-31](nuxt.config.ts#L19-L31)
- **Variables requeridas:**
  - `NUXT_PUBLIC_UMAMI_ID` - ID del sitio en Umami
  - `NUXT_PUBLIC_UMAMI_HOST` - URL de instancia Umami (ej: https://analytics.umami.is)

### 2. Hotjar (Behavior Analytics)
- **Propósito:** Heatmaps, session recordings, behavior insights
- **Configuración:** [nuxt.config.ts:33-37](nuxt.config.ts#L33-L37)
- **ID:** 402984 (ya configurado)
- **Panel:** https://insights.hotjar.com/sites/402984/
- **Debug:** Activado solo en desarrollo

---

## ✅ Implementación Completada

### Fase 1: Correcciones Críticas (100%)

1. ✅ **Sitemap.xml actualizado**
   - Eliminadas 5 URLs inexistentes
   - Solo URLs reales: `/`, `/privacidad`, `/terminos`
   - Fecha actualizada: 2024-11-13

2. ✅ **Open Graph image**
   - Referencia actualizada a `/og.svg`
   - TODO futuro: Convertir a og.png (1200x630) para mejor compatibilidad

3. ✅ **Prerenderización completa**
   - Rutas configuradas: `/`, `/privacidad`, `/terminos`
   - SSG 100% funcional

4. ✅ **Fechas corregidas**
   - privacidad.vue y terminos.vue: "Octubre 2024"

5. ✅ **.env.example actualizado**
   - Todas las variables documentadas
   - Comentarios explicativos
   - Referencias a paneles y docs

6. ✅ **.gitignore verificado**
   - `.env` excluido correctamente
   - Seguridad garantizada

7. ✅ **README.md limpio**
   - Solo estructura real del proyecto
   - Referencias a páginas futuras en sección Roadmap
   - Documentación de analytics stack

8. ✅ **Hotjar configurado**
   - Debug mode condicional (solo dev)
   - ID configurado: 402984

9. ✅ **Zona horaria corregida**
   - Email template: América/Santo_Domingo (GMT-4)
   - República Dominicana

### Fase 2: Composable de Tracking (100%)

10. ✅ **[useUmamiTracking.ts](app/composables/useUmamiTracking.ts) creado**
    - 40+ métodos de tracking
    - TypeScript con types declarados
    - Documentación inline completa

**Métodos disponibles:**
- `trackEvent(name, data)` - Método base
- Navegación: `trackNavClick`, `trackLogoClick`, `trackMobileMenuToggle`
- CTAs: `trackCtaClick`
- Servicios: `trackServiceClick`, `trackServiceHover`
- Casos: `trackCaseNavigation`, `trackCaseClick`, `trackCarouselPause`
- Testimonios: `trackTestimonialView`, `trackTestimonialsPause`
- FAQs: `trackFaqToggle`
- Formulario: `trackFormStart`, `trackFormFieldComplete`, `trackFormBudgetSelect`, `trackFormSubmitAttempt`, `trackFormSuccess`, `trackFormError`, `trackFormAbandonment`
- Footer: `trackFooterClick`
- Globales: `trackScrollDepth`, `trackTimeOnPage`, `trackEngagement`, `trackExitIntent`, `trackPerformance`

### Fase 3: Tracking en Componentes (Parcial)

#### ✅ [Nav.vue](app/components/Nav.vue) - 8 eventos

**Eventos implementados:**
1. Click en logo (header)
2. Click en link "Servicios" (desktop)
3. Click en link "Casos" (desktop)
4. Click en link "Testimonios" (desktop)
5. Click en link "FAQs" (desktop)
6. Click en botón "Contacto" (desktop)
7. Clicks en navigation (mobile) - 4 links
8. Click en botón "Contacto" (mobile)
9. Toggle menú mobile (open/close)

**Propiedades trackeadas:**
- `section` - Sección clickeada
- `device` - mobile/desktop
- `action` - open/close (para menú)

#### ✅ [index.vue](app/pages/index.vue) - 18 eventos

**Eventos Hero (2):**
1. Click CTA "Cuéntame tu proyecto"
2. Click CTA "Ver casos"

**Propiedades:** `location`, `cta_text`, `section`

**Eventos Servicios (3):**
1. Click en "Desarrollo Web"
2. Click en "Automatización"
3. Click en "Marketing de Datos"

**Propiedades:** `service`, `position`

**Eventos Formulario (13):**
1. Form start (primer focus)
2. Campo nombre completado
3. Campo email completado
4. Campo teléfono completado
5. Campo empresa completado
6. Campo mensaje completado
7. Presupuesto seleccionado
8. Submit attempt
9. Submit success
10. Error de servidor
11. Error de red

**Propiedades formulario:**
- `field` - Campo completado
- `budget` - Presupuesto seleccionado
- `has_phone` - boolean
- `has_company` - boolean
- `error_type` - Tipo de error
- `fields_count` - Campos completados

---

## 📋 Componentes Pendientes de Tracking

### 1. CasesCarousel.vue (6 eventos pendientes)

**Eventos a implementar:**
```javascript
// En el script
const { trackCaseNavigation, trackCaseClick, trackCarouselPause } = useUmamiTracking()

// Eventos:
trackCaseNavigation('prev', currentIndex)  // Click botón anterior
trackCaseNavigation('next', currentIndex)  // Click botón siguiente
trackCaseNavigation('dot', clickedIndex)   // Click en dot
trackCaseNavigation('auto', newIndex)      // Auto-advance
trackCaseClick(caseTitle, caseIndex)       // Click en case card
trackCarouselPause(currentIndex)           // Pause on hover
```

### 2. TestimonialsVertical.vue (3 eventos pendientes)

**Eventos a implementar:**
```javascript
const { trackTestimonialView, trackTestimonialsPause } = useUmamiTracking()

// Eventos:
trackTestimonialView(testimonialName, columnNumber)  // Cuando visible (IntersectionObserver)
trackTestimonialsPause()  // Cuando se pausa scroll por hover
```

### 3. FAQSection.vue (3 eventos pendientes)

**Eventos a implementar:**
```javascript
const { trackFaqToggle } = useUmamiTracking()

// Eventos:
trackFaqToggle(question, index, 'open')   // Al abrir
trackFaqToggle(question, index, 'close', timeOpen)  // Al cerrar con tiempo
```

### 4. Footer.vue (5 eventos pendientes)

**Eventos a implementar:**
```javascript
const { trackFooterClick, trackLogoClick } = useUmamiTracking()

// Eventos:
trackLogoClick('footer')  // Click en logo
trackFooterClick('email', 'hello@neskeep.com')  // Click en email
trackFooterClick('whatsapp', 'phone_number')  // Click en WhatsApp
trackFooterClick('legal', 'privacidad')  // Click en Privacidad
trackFooterClick('legal', 'terminos')  // Click en Términos
```

### 5. Tracking Global de Scroll (10 eventos pendientes)

**Implementar en layout o composable global:**
```javascript
// En app.vue o default.vue layout
const {
  trackScrollDepth,
  trackTimeOnPage,
  trackEngagement,
  trackExitIntent,
  trackPerformance
} = useUmamiTracking()

onMounted(() => {
  // Scroll depth tracking
  const handleScroll = () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100

    if (scrollPercent >= 25 && !scrollTracked[25]) {
      trackScrollDepth(25)
      scrollTracked[25] = true
    }
    // Repetir para 50%, 75%, 100%
  }

  // Time on page
  const intervals = [5, 30, 60, 180]  // 5s, 30s, 1min, 3min
  intervals.forEach(seconds => {
    setTimeout(() => trackTimeOnPage(seconds), seconds * 1000)
  })

  // Exit intent
  document.addEventListener('mouseleave', (e) => {
    if (e.clientY <= 0) trackExitIntent()
  })

  // Performance
  trackPerformance()  // Automático con PerformanceObserver
})
```

---

## 🔧 Variables de Entorno Necesarias

### Para Desarrollo (.env)
```bash
# Resend (Email)
RESEND_API_KEY=re_PNiMb8yE_MAjqiLMPDadvhPnrq21TWYeB

# Umami Analytics
NUXT_PUBLIC_UMAMI_ID=your_website_id
NUXT_PUBLIC_UMAMI_HOST=https://your-umami-instance.com
```

### Para Producción (Vercel/Netlify/Cloudflare)
Configurar las mismas variables en el panel de hosting:
- `RESEND_API_KEY`
- `NUXT_PUBLIC_UMAMI_ID`
- `NUXT_PUBLIC_UMAMI_HOST`

**Hotjar no requiere variables** (ID hard-coded en nuxt.config.ts)

---

## 📊 Eventos Implementados vs Planificados

| Categoría | Implementados | Planificados | Total | % Completado |
|-----------|--------------|--------------|-------|--------------|
| Navegación | 8 | 0 | 8 | 100% |
| Hero/CTAs | 2 | 0 | 2 | 100% |
| Servicios | 3 | 0 | 3 | 100% |
| Casos (Carrusel) | 0 | 6 | 6 | 0% |
| Testimonios | 0 | 3 | 3 | 0% |
| FAQs | 0 | 3 | 3 | 0% |
| Formulario | 11 | 0 | 11 | 100% |
| Footer | 0 | 5 | 5 | 0% |
| Scroll/Engagement | 0 | 10 | 10 | 0% |
| **TOTAL** | **24** | **27** | **51** | **47%** |

---

## 🚀 Checklist de Deploy

### Antes de Deployar

- [x] Hotjar configurado (ID: 402984)
- [x] .env.example actualizado
- [x] .gitignore incluye .env
- [x] Sitemap solo con URLs existentes
- [ ] Configurar Umami ID y HOST en Vercel/hosting
- [ ] Probar formulario de contacto
- [ ] Verificar Hotjar recordings en panel
- [ ] Verificar eventos Umami en dashboard

### Configuración en Vercel

1. Ir a Project Settings → Environment Variables
2. Agregar:
   ```
   RESEND_API_KEY = [tu key de Resend]
   NUXT_PUBLIC_UMAMI_ID = [tu ID de Umami]
   NUXT_PUBLIC_UMAMI_HOST = [tu host de Umami]
   ```
3. Redeploy

---

## 📈 Dashboards y Paneles

### Umami Analytics
- **URL:** Tu instancia configurada en `NUXT_PUBLIC_UMAMI_HOST`
- **Qué ver:**
  - Eventos custom por categoría
  - Páginas más visitadas
  - Fuentes de tráfico
  - Embudos de conversión (formulario)

### Hotjar
- **URL:** https://insights.hotjar.com/sites/402984/
- **Qué ver:**
  - Heatmaps (dónde hacen click)
  - Recordings (sesiones completas)
  - Funnels (flujo de navegación)
  - Feedback polls (si configuras)

### Resend
- **URL:** https://resend.com/emails
- **Qué ver:**
  - Emails enviados/fallidos
  - Bounces y complaints
  - Uso del plan (100 emails/día en free)

---

## 🎯 Próximos Pasos Recomendados

### Corto Plazo (Esta semana)
1. Configurar variables Umami en Vercel
2. Probar tracking en producción
3. Implementar tracking en CasesCarousel
4. Implementar tracking en Footer

### Mediano Plazo (2-4 semanas)
1. Implementar tracking global de scroll
2. Completar tracking en Testimonios y FAQs
3. Analizar primeros datos de Umami
4. Optimizar basado en heatmaps de Hotjar

### Largo Plazo (1-3 meses)
1. Crear embudos de conversión en Umami
2. A/B testing de CTAs
3. Optimización basada en datos
4. Integrar con CRM (Notion/HubSpot)

---

## 🐛 Troubleshooting

### Umami no trackea eventos

**Verificar:**
1. Variables de entorno configuradas correctamente
2. `window.umami` está disponible en console del browser
3. ID del sitio es correcto
4. Host tiene CORS configurado

**Debug:**
```javascript
// En browser console
console.log(window.umami)  // Debe existir
window.umami.track('test-event', { test: true })  // Debe aparecer en dashboard
```

### Hotjar no graba sesiones

**Verificar:**
1. ID 402984 es correcto
2. Script se carga (ver Network tab)
3. No hay bloqueadores de ads/tracking
4. Sesiones se procesan con delay (~1 min)

### Formulario no envía emails

**Verificar:**
1. `RESEND_API_KEY` configurada
2. Email de destino actualizado en [server/api/contact.post.ts:57](server/api/contact.post.ts#L57)
3. Límite de emails no excedido (100/día en free)
4. Logs del servidor para errores

---

## 📚 Recursos

- [Nuxt Umami Module](https://nuxt.com/modules/umami)
- [Nuxt Hotjar Module](https://nuxt.com/modules/hotjar)
- [Umami Docs](https://umami.is/docs)
- [Hotjar Help Center](https://help.hotjar.com/)
- [Resend Docs](https://resend.com/docs)

---

**Última actualización:** 2024-11-13
**Stack:** Umami + Hotjar + Resend
**Framework:** Nuxt 4.2.0

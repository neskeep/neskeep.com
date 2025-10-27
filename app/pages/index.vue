<script setup>
useSeoMeta({
  title: 'Neskeep - Menos promesas, más código',
  description: 'Desarrollo web, automatización y marketing impulsado por datos. Construimos ecosistemas digitales medibles y rentables.',
  ogTitle: 'Neskeep - Menos promesas, más código',
  ogDescription: 'Desarrollo web, automatización y marketing impulsado por datos.',
  ogImage: '/og.png',
  ogUrl: 'https://neskeep.com',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Neskeep - Menos promesas, más código',
  twitterDescription: 'Desarrollo web, automatización y marketing impulsado por datos.',
  twitterImage: '/og.png'
})

const { setupReveal } = useScrollReveal()
setupReveal()

const featuredCases = [
  {
    category: 'E-commerce',
    title: 'Plataforma de venta B2B',
    description: 'Migración completa de sistema legacy a stack moderno. Reducción del 65% en tiempo de carga y aumento del 40% en conversión.',
    metrics: [
      { value: '+40%', label: 'Conversión' },
      { value: '-65%', label: 'Carga' }
    ],
    tags: ['Nuxt', 'Tailwind', 'API REST']
  },
  {
    category: 'SaaS',
    title: 'Dashboard de analítica',
    description: 'Panel de control en tiempo real para gestión de campañas digitales con visualización avanzada de datos.',
    metrics: [
      { value: '500K', label: 'Eventos/día' },
      { value: '<2s', label: 'Response' }
    ],
    tags: ['Vue 3', 'D3.js', 'WebSockets']
  },
  {
    category: 'Automatización',
    title: 'Pipeline de contenido',
    description: 'Sistema automatizado de generación, optimización y publicación de contenido en múltiples canales.',
    metrics: [
      { value: '10h', label: 'Ahorradas/sem' },
      { value: '95%', label: 'Precisión' }
    ],
    tags: ['Node.js', 'AI', 'N8N']
  },
  {
    category: 'Fintech',
    title: 'Plataforma de pagos',
    description: 'Sistema de procesamiento de pagos multi-moneda con reconciliación automática y reportes en tiempo real.',
    metrics: [
      { value: '99.9%', label: 'Uptime' },
      { value: '1.2s', label: 'Processing' }
    ],
    tags: ['Stripe', 'Node.js', 'PostgreSQL']
  },
  {
    category: 'Marketing',
    title: 'Sistema de email campaigns',
    description: 'Plataforma de automatización de marketing con segmentación avanzada y A/B testing integrado.',
    metrics: [
      { value: '+180%', label: 'Open Rate' },
      { value: '3.5M', label: 'Emails/mes' }
    ],
    tags: ['Vue', 'SendGrid', 'Redis']
  },
  {
    category: 'EdTech',
    title: 'Portal educativo',
    description: 'Plataforma de e-learning con sistema de gestión de cursos, evaluaciones interactivas y certificaciones.',
    metrics: [
      { value: '50K+', label: 'Estudiantes' },
      { value: '4.8/5', label: 'Rating' }
    ],
    tags: ['Nuxt', 'Video.js', 'MongoDB']
  }
]

const testimonials = [
  {
    quote: 'El ROI fue visible desde el primer mes. No solo entregaron código, sino una estrategia completa de crecimiento digital.',
    author: 'María González',
    role: 'CEO',
    company: 'TechFlow SaaS'
  },
  {
    quote: 'Transformaron nuestro proceso manual de 8 horas en un workflow automatizado de 15 minutos. Simplemente espectacular.',
    author: 'Carlos Ruiz',
    role: 'Director de Operaciones',
    company: 'Digital Ventures'
  },
  {
    quote: 'La migración de nuestra plataforma fue impecable. Cero downtime y resultados inmediatos en performance.',
    author: 'Sofía Martínez',
    role: 'CTO',
    company: 'EcommPlat'
  },
  {
    quote: 'Profesionalismo y entrega de principio a fin. Realmente entienden las necesidades del negocio.',
    author: 'Luis Hernández',
    role: 'Product Manager',
    company: 'InnovateTech'
  },
  {
    quote: 'Excelente comunicación y soporte post-lanzamiento. Un verdadero partner tecnológico.',
    author: 'Ana Torres',
    role: 'Head of Digital',
    company: 'MarketFlow'
  },
  {
    quote: 'Superaron nuestras expectativas en cada milestone. Altamente recomendados.',
    author: 'Roberto Sánchez',
    role: 'Founder',
    company: 'StartupHub'
  }
]

const faqs = [
  {
    question: '¿Cuánto tiempo toma desarrollar un proyecto?',
    answer: 'Depende de la complejidad del proyecto. Un MVP funcional puede estar listo en 4-6 semanas, mientras que proyectos más complejos pueden tomar 3-6 meses. Siempre trabajamos con sprints de 2 semanas para entregarte valor constantemente.'
  },
  {
    question: '¿Ofrecen soporte después del lanzamiento?',
    answer: 'Sí, todos nuestros proyectos incluyen un período de garantía y ofrecemos paquetes de mantenimiento mensual que cubren actualizaciones, monitoreo, optimización y soporte técnico continuo.'
  },
  {
    question: '¿Trabajan con startups o solo con empresas establecidas?',
    answer: 'Trabajamos con ambos. Tenemos experiencia ayudando a startups a lanzar sus MVPs y escalando soluciones para empresas establecidas. Adaptamos nuestro enfoque según la etapa y necesidades de tu negocio.'
  },
  {
    question: '¿Qué tecnologías utilizan?',
    answer: 'Nos especializamos en Vue.js, Nuxt, Node.js y tecnologías modernas del ecosistema JavaScript. Elegimos el stack técnico basándonos en las necesidades específicas de cada proyecto, priorizando escalabilidad y mantenibilidad.'
  },
  {
    question: '¿Cómo es el proceso de trabajo?',
    answer: 'Trabajamos con metodología ágil: reunión inicial de discovery, sprints de 2 semanas con entregas incrementales, revisiones regulares y comunicación constante vía Slack. Recibes acceso al proyecto desde el día uno.'
  },
  {
    question: '¿Cuál es la inversión mínima para empezar?',
    answer: 'No tenemos un mínimo fijo, cada proyecto es único. Después de entender tus necesidades, te presentamos propuestas con diferentes alcances y precios. Nuestro objetivo es maximizar el ROI de tu inversión.'
  }
]

// Contact form
const formData = ref({
  name: '',
  email: '',
  phone: '',
  company: '',
  message: '',
  budget: ''
})

const budgetOptions = [
  { value: '', label: 'Selecciona un rango' },
  { value: '< $5,000', label: 'Menos de $5,000' },
  { value: '$5,000 - $15,000', label: '$5,000 - $15,000' },
  { value: '$15,000 - $30,000', label: '$15,000 - $30,000' },
  { value: '> $30,000', label: 'Más de $30,000' }
]

const isSubmitting = ref(false)
const submitStatus = ref(null)

const submitForm = async () => {
  isSubmitting.value = true
  submitStatus.value = null

  try {
    // Aquí integrarías con tu backend o servicio de email
    await new Promise(resolve => setTimeout(resolve, 1500))
    submitStatus.value = 'success'
    formData.value = { name: '', email: '', phone: '', company: '', message: '', budget: '' }
  } catch (error) {
    submitStatus.value = 'error'
  } finally {
    isSubmitting.value = false
  }
}
</script>

<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <UiContainer class="relative z-10">
        <div class="text-center space-y-8">
          <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight" data-reveal>
            Menos promesas,<br >
            más <span class="text-gradient"><AnimatedTypewriter :words="['código', 'resultados', 'impacto', 'datos']" /></span>
          </h1>

          <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto" data-reveal data-delay="100ms">
            Construimos ecosistemas digitales medibles y rentables
          </p>

          <div class="flex flex-wrap gap-4 justify-center pt-6" data-reveal data-delay="200ms">
            <a href="#contacto" class="inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none rounded-xl px-8 py-4 text-lg btn-glow text-bg shadow-lg hover:shadow-xl">
              Cuéntame tu proyecto
            </a>
            <a href="#casos" class="inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none rounded-xl px-8 py-4 text-lg border-2 border-brand text-brand hover:bg-brand hover:text-bg">
              Ver casos
            </a>
          </div>
        </div>
      </UiContainer>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>

    <div class="relative z-20">
      <!-- Services Section -->
      <SectionTransition id="servicios" curve="smooth">
        <UiSection spacing="xl">
          <UiContainer max-width="7xl">
            <div class="text-center mb-16" data-reveal>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Servicios que <span class="text-gradient">escalan</span>
              </h2>
              <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                Soluciones técnicas diseñadas para crecer con tu negocio
              </p>
            </div>

            <!-- Bento Grid -->
            <div class="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]" data-reveal>
              <!-- Desarrollo Web -->
              <div class="md:col-span-6 lg:col-span-8 lg:row-span-2">
                <div class="card-glow rounded-3xl h-full p-8 md:p-12 relative overflow-hidden bg-linear-to-br from-brand/10 via-surface/50 to-surface/30 group">
                  <div class="relative z-10 h-full flex flex-col justify-between">
                    <div>
                      <div class="text-6xl mb-6 float">🚀</div>
                      <h3 class="text-3xl md:text-4xl font-bold text-white mb-4">
                        Desarrollo Web
                      </h3>
                      <p class="text-gray-300 text-lg leading-relaxed mb-6">
                        Aplicaciones modernas y escalables con Vue, Nuxt y las tecnologías más eficientes del mercado
                      </p>
                      <ul class="space-y-2 text-gray-400">
                        <li class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          SPAs y PWAs de alto rendimiento
                        </li>
                        <li class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          E-commerce y plataformas SaaS
                        </li>
                        <li class="flex items-center gap-2">
                          <svg class="w-5 h-5 text-brand" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                          </svg>
                          APIs RESTful y GraphQL
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="absolute -bottom-20 -right-20 w-64 h-64 bg-brand/20 rounded-full blur-3xl group-hover:bg-brand/30 transition-all duration-700" />
                </div>
              </div>

              <!-- Stats -->
              <div class="md:col-span-3 lg:col-span-4 lg:row-span-1">
                <div class="card-glow rounded-3xl h-full p-8 bg-linear-to-br from-accent/10 to-surface/50">
                  <div class="text-5xl mb-4 opacity-50 float">⚡</div>
                  <div class="text-4xl md:text-5xl font-bold text-gradient-static mb-2">
                    <UiAnimatedNumber :value="50" suffix="+" />
                  </div>
                  <div class="text-gray-400">Proyectos entregados</div>
                </div>
              </div>

              <div class="md:col-span-3 lg:col-span-4 lg:row-span-1">
                <div class="card-glow rounded-3xl h-full p-8 bg-gradient-to-br from-purple-500/10 to-surface/50">
                  <div class="text-5xl mb-4 opacity-50 float">⭐</div>
                  <div class="text-4xl md:text-5xl font-bold text-gradient-static mb-2">
                    <UiAnimatedNumber :value="98" suffix="%" />
                  </div>
                  <div class="text-gray-400">Satisfacción</div>
                </div>
              </div>

              <!-- Automatización -->
              <div class="md:col-span-3 lg:col-span-6 lg:row-span-1">
                <div class="card-glow rounded-3xl h-full p-8 bg-gradient-to-br from-accent/10 to-surface/30">
                  <div class="text-5xl mb-4 float">⚙️</div>
                  <h3 class="text-2xl font-bold text-white mb-3">
                    Automatización
                  </h3>
                  <p class="text-gray-400 mb-4">
                    Workflows inteligentes que liberan tiempo y reducen errores
                  </p>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li>• Integración de APIs y servicios</li>
                    <li>• Pipelines de CI/CD</li>
                    <li>• Procesos de negocio automatizados</li>
                  </ul>
                </div>
              </div>

              <!-- Marketing de Datos -->
              <div class="md:col-span-3 lg:col-span-6 lg:row-span-1">
                <div class="card-glow rounded-3xl h-full p-8 bg-gradient-to-br from-blue-500/10 to-surface/30">
                  <div class="text-5xl mb-4 float">📊</div>
                  <h3 class="text-2xl font-bold text-white mb-3">
                    Marketing de Datos
                  </h3>
                  <p class="text-gray-400 mb-4">
                    Estrategias basadas en métricas reales, no intuiciones
                  </p>
                  <ul class="space-y-2 text-sm text-gray-400">
                    <li>• Analytics y tracking personalizado</li>
                    <li>• Dashboards de KPIs</li>
                    <li>• Optimización basada en datos</li>
                  </ul>
                </div>
              </div>
            </div>
          </UiContainer>
        </UiSection>
      </SectionTransition>

      <!-- Cases Carousel -->
      <SectionTransition id="casos" curve="spring" :delay="100">
        <UiSection spacing="xl">
          <UiContainer max-width="7xl">
            <div class="text-center mb-16" data-reveal>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Casos <span class="text-gradient">destacados</span>
              </h2>
              <p class="text-xl text-gray-400 max-w-3xl mx-auto">
                Proyectos reales con resultados medibles
              </p>
            </div>

            <CasesCarousel :cases="featuredCases" />
          </UiContainer>
        </UiSection>
      </SectionTransition>

      <!-- Testimonials -->
      <SectionTransition id="testimonios" curve="elastic" :delay="100">
        <UiSection spacing="xl">
          <UiContainer max-width="7xl">
            <div class="text-center mb-16" data-reveal>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Qué dicen nuestros <span class="text-gradient">clientes</span>
              </h2>
              <p class="text-xl text-gray-400">
                Más de 50 proyectos exitosos respaldan nuestro trabajo
              </p>
            </div>

            <TestimonialsVertical :testimonials="testimonials" />
          </UiContainer>
        </UiSection>
      </SectionTransition>

      <!-- FAQs -->
      <SectionTransition id="faqs" curve="smooth" :delay="100">
        <UiSection spacing="xl">
          <UiContainer max-width="7xl">
            <div class="text-center mb-16" data-reveal>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-4">
                Preguntas <span class="text-gradient">frecuentes</span>
              </h2>
              <p class="text-xl text-gray-400">
                Todo lo que necesitas saber antes de empezar
              </p>
            </div>

            <FAQSection :faqs="faqs" />
          </UiContainer>
        </UiSection>
      </SectionTransition>

      <!-- Contact Form -->
      <SectionTransition id="contacto" curve="bounce">
        <UiSection spacing="xl" background="gradient">
          <UiContainer max-width="7xl">
            <div class="text-center mb-12" data-reveal>
              <h2 class="text-4xl md:text-5xl font-bold text-white mb-6">
                ¿Listo para <span class="text-gradient">transformar</span> tu negocio?
              </h2>
              <p class="text-xl text-gray-300">
                Cuéntanos sobre tu proyecto y nos pondremos en contacto contigo
              </p>
            </div>

            <div class="card-glow rounded-3xl p-8 md:p-12 bg-surface/30" data-reveal>
              <form class="space-y-6" @submit.prevent="submitForm">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="name" class="block text-sm font-medium text-gray-300 mb-2">
                      Nombre completo *
                    </label>
                    <input
                      id="name"
                      v-model="formData.name"
                      type="text"
                      required
                      class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="Juan Pérez"
                    >
                  </div>

                  <div>
                    <label for="email" class="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      id="email"
                      v-model="formData.email"
                      type="email"
                      required
                      class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="juan@empresa.com"
                    >
                  </div>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label for="phone" class="block text-sm font-medium text-gray-300 mb-2">
                      Teléfono
                    </label>
                    <input
                      id="phone"
                      v-model="formData.phone"
                      type="tel"
                      class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="+1 809 222 5466"
                    >
                  </div>

                  <div>
                    <label for="company" class="block text-sm font-medium text-gray-300 mb-2">
                      Empresa
                    </label>
                    <input
                      id="company"
                      v-model="formData.company"
                      type="text"
                      class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all"
                      placeholder="Mi Empresa SRL"
                    >
                  </div>
                </div>

                <div>
                  <label for="budget" class="block text-sm font-medium text-gray-300 mb-2">
                    Presupuesto estimado
                  </label>
                  <UiCustomSelect
                    id="budget"
                    v-model="formData.budget"
                    :options="budgetOptions"
                    placeholder="Selecciona un rango"
                  />
                </div>

                <div>
                  <label for="message" class="block text-sm font-medium text-gray-300 mb-2">
                    Cuéntanos sobre tu proyecto *
                  </label>
                  <textarea
                    id="message"
                    v-model="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all resize-none"
                    placeholder="Describe brevemente tu proyecto, objetivos y plazos..."
                  />
                </div>

                <div v-if="submitStatus === 'success'" class="p-4 rounded-xl bg-green-500/10 border border-green-500/50 text-green-400">
                  ¡Mensaje enviado! Te contactaremos pronto.
                </div>

                <div v-if="submitStatus === 'error'" class="p-4 rounded-xl bg-red-500/10 border border-red-500/50 text-red-400">
                  Hubo un error. Por favor intenta de nuevo o escríbenos a isenior@neskeep.com
                </div>

                <button
                  type="submit"
                  :disabled="isSubmitting"
                  class="w-full inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:pointer-events-none rounded-xl px-8 py-4 text-lg btn-glow text-bg shadow-lg hover:shadow-xl"
                >
                  <span v-if="!isSubmitting">Enviar mensaje</span>
                  <span v-else>Enviando...</span>
                </button>

                <p class="text-center text-sm text-gray-400">
                  O escríbenos directamente a <a href="mailto:isenior@neskeep.com" class="text-brand hover:underline">isenior@neskeep.com</a>
                  o WhatsApp <a href="https://wa.me/18092225466" class="text-brand hover:underline">+1 809 222 5466</a>
                </p>
              </form>
            </div>
          </UiContainer>
        </UiSection>
      </SectionTransition>
    </div>
  </div>
</template>

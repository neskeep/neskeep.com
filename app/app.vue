<script setup>
useSeoMeta({
  title: 'Neskeep - Estamos construyendo algo grande',
  description: 'Desarrollo web, automatización y marketing impulsado por datos. Algo grande viene en camino.',
  ogTitle: 'Neskeep - Estamos construyendo algo grande',
  ogDescription: 'Desarrollo web, automatización y marketing impulsado por datos. Algo grande viene en camino.',
  ogImage: '/og.png',
  ogUrl: 'https://neskeep.com',
  robots: 'noindex, nofollow'
})

// Floating particles (client-only to avoid hydration mismatch)
const particles = ref([])

onMounted(() => {
  particles.value = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 5
  }))
})

// Services pillars
const pillars = [
  {
    label: 'Desarrollo Web',
    description: 'Apps modernas con tecnologías que escalan con tu negocio.',
    gradient: 'from-brand/15 to-brand/5'
  },
  {
    label: 'Automatización',
    description: 'Workflows inteligentes que eliminan tareas repetitivas y reducen errores.',
    gradient: 'from-accent/10 to-accent/5'
  },
  {
    label: 'AI Operativa',
    description: 'IA aplicada sobre procesos definidos y digitalizados para maximizar la utilidad operativa.',
    gradient: 'from-blue-500/10 to-blue-500/5'
  },
  {
    label: 'Marketing de Datos',
    description: 'Estrategias basadas en métricas reales, no en suposiciones.',
    gradient: 'from-purple-500/10 to-purple-500/5'
  }
]

// Mouse tracking for glow effect
const mouseX = ref(50)
const mouseY = ref(50)

const handleMouseMove = (e) => {
  const rect = e.currentTarget.getBoundingClientRect()
  mouseX.value = ((e.clientX - rect.left) / rect.width) * 100
  mouseY.value = ((e.clientY - rect.top) / rect.height) * 100
}
</script>

<template>
  <div
    class="min-h-dvh lg:h-dvh lg:max-h-dvh relative overflow-x-hidden overflow-y-auto lg:overflow-hidden flex flex-col"
    @mousemove="handleMouseMove"
  >
    <!-- Animated floating particles -->
    <div class="fixed inset-0 pointer-events-none z-0">
      <div
        v-for="p in particles"
        :key="p.id"
        class="absolute rounded-full"
        :style="{
          width: p.size + 'px',
          height: p.size + 'px',
          left: p.x + '%',
          top: p.y + '%',
          background: p.id % 3 === 0 ? 'var(--color-neocyan)' : p.id % 3 === 1 ? 'var(--color-pulse-green)' : 'rgba(255,255,255,0.3)',
          opacity: 0.4,
          animation: `uc-float-particle ${p.duration}s ease-in-out ${p.delay}s infinite`
        }"
      />
    </div>

    <!-- Interactive glow that follows mouse -->
    <div
      class="fixed pointer-events-none z-0 w-[600px] h-[600px] rounded-full transition-all duration-700 ease-out"
      :style="{
        left: mouseX + '%',
        top: mouseY + '%',
        transform: 'translate(-50%, -50%)',
        background: 'radial-gradient(circle, rgba(0,201,212,0.08) 0%, transparent 70%)'
      }"
    />

    <!-- Top bar: Logo + Status -->
    <header class="relative z-10 px-6 lg:px-10 pt-6 lg:pt-8">
      <div class="w-full max-w-7xl mx-auto flex items-center justify-between">
        <img
          src="/logo.png"
          alt="Neskeep"
          class="h-7 md:h-9 opacity-90"
        >
        <div class="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-brand/20 bg-brand/5 backdrop-blur-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
            <span class="relative inline-flex rounded-full h-2 w-2 bg-brand" />
          </span>
          <span class="text-brand text-xs font-semibold tracking-widest uppercase">Building</span>
        </div>
      </div>
    </header>

    <!-- Main content -->
    <main class="relative z-10 flex-1 flex items-center px-6 lg:px-10">
      <div class="w-full max-w-7xl mx-auto">
        <!-- Hero area -->
        <div class="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <!-- Left: Copy -->
          <div class="lg:col-span-7 space-y-4 lg:space-y-6">
            <div class="space-y-3">
              <p class="text-brand font-semibold tracking-wide text-xs lg:text-sm uppercase">
                Menos promesas, más código
              </p>
              <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] tracking-tight">
                Estamos<br>
                construyendo<br>
                algo <span class="text-shimmer">grande</span>
              </h1>
            </div>

            <p class="text-sm sm:text-base lg:text-lg text-gray-400 leading-relaxed max-w-xl">
              Nuestro nuevo ecosistema digital está en camino.
              Si tienes un proyecto en mente, no esperes al lanzamiento.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/573142313921"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-3 font-semibold rounded-2xl px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base btn-glow text-bg transition-all duration-300"
              >
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos por WhatsApp
              </a>
              <a
                href="mailto:hola@neskeep.com"
                class="group inline-flex items-center justify-center gap-3 font-semibold rounded-2xl px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-base btn-outline transition-all duration-300"
              >
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hola@neskeep.com
              </a>
            </div>
          </div>

          <!-- Right: Visual element (hidden on mobile) -->
          <div class="hidden lg:flex lg:col-span-5 justify-center">
            <div class="relative w-full max-w-xs xl:max-w-sm aspect-square">
              <!-- Orbital rings -->
              <div class="absolute inset-0 border border-brand/10 rounded-full" style="animation: uc-spin 25s linear infinite" />
              <div class="absolute inset-4 border border-brand/15 rounded-full" style="animation: uc-spin 20s linear infinite reverse" />
              <div class="absolute inset-10 border border-brand/10 rounded-full" style="animation: uc-spin 30s linear infinite" />

              <!-- Orbital dots -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand shadow-glow-sm" style="animation: uc-spin 25s linear infinite" />
              <div class="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-accent" style="animation: uc-spin 20s linear infinite reverse" />
              <div class="absolute top-10 left-10 w-2 h-2 rounded-full bg-white/50" style="animation: uc-spin 30s linear infinite" />

              <!-- Center card -->
              <div class="absolute inset-14 xl:inset-12 rounded-3xl bg-surface/60 border border-border backdrop-blur-xl flex flex-col items-center justify-center gap-4 p-5">
                <!-- Animated progress ring -->
                <div class="relative w-14 h-14">
                  <svg class="w-full h-full -rotate-90" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="28" fill="none" stroke="var(--color-border)" stroke-width="3" />
                    <circle
                      cx="32" cy="32" r="28" fill="none"
                      stroke="url(#uc-gradient)"
                      stroke-width="3"
                      stroke-linecap="round"
                      stroke-dasharray="176"
                      stroke-dashoffset="44"
                      style="animation: uc-progress 3s ease-in-out infinite"
                    />
                    <defs>
                      <linearGradient id="uc-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stop-color="var(--color-neocyan)" />
                        <stop offset="100%" stop-color="var(--color-pulse-green)" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div class="absolute inset-0 flex items-center justify-center">
                    <span class="text-brand text-base font-bold">N</span>
                  </div>
                </div>

                <div class="text-center">
                  <p class="text-white font-semibold text-sm">En progreso</p>
                  <p class="text-gray-500 text-xs mt-0.5">neskeep.com v2</p>
                </div>

                <!-- Animated bars -->
                <div class="w-full space-y-1.5 px-2">
                  <div class="h-1.5 bg-border rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-gradient-to-r from-brand to-accent" style="width: 75%; animation: uc-bar-pulse 2s ease-in-out infinite" />
                  </div>
                  <div class="h-1 bg-border rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-brand/50" style="width: 55%; animation: uc-bar-pulse 2.5s ease-in-out 0.3s infinite" />
                  </div>
                  <div class="h-1 bg-border rounded-full overflow-hidden">
                    <div class="h-full rounded-full bg-brand/30" style="width: 35%; animation: uc-bar-pulse 3s ease-in-out 0.6s infinite" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Service pillars -->
        <div class="grid grid-cols-4 gap-2 md:gap-5 mt-6 lg:mt-14">
          <div
            v-for="(pillar, index) in pillars"
            :key="pillar.label"
            class="group relative card-glow rounded-xl lg:rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 text-center sm:text-left transition-all duration-500 hover:border-brand/30 overflow-hidden"
          >
            <!-- Background gradient -->
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br"
              :class="pillar.gradient"
            />

            <div class="relative z-10">
              <!-- Icon -->
              <div class="w-9 h-9 lg:w-11 lg:h-11 mx-auto sm:mx-0 mb-2 sm:mb-3 lg:mb-4 rounded-lg lg:rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center transition-all duration-300 group-hover:bg-brand/20 group-hover:scale-110 group-hover:shadow-glow-sm">
                <!-- Desarrollo Web -->
                <svg v-if="index === 0" class="w-4 h-4 lg:w-5 lg:h-5 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                </svg>
                <!-- Automatización -->
                <svg v-else-if="index === 1" class="w-4 h-4 lg:w-5 lg:h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.431.992a7.723 7.723 0 010 .255c-.007.378.138.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <!-- AI Operativa -->
                <svg v-else-if="index === 2" class="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                </svg>
                <!-- Marketing de Datos -->
                <svg v-else class="w-4 h-4 lg:w-5 lg:h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                </svg>
              </div>

              <!-- Text -->
              <h3 class="text-white font-bold text-xs sm:text-sm lg:text-base sm:mb-1 truncate">
                {{ pillar.label }}
              </h3>
              <p class="text-gray-500 text-xs lg:text-sm leading-relaxed hidden md:block">
                {{ pillar.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 px-6 lg:px-10 pb-5 pt-2">
      <div class="max-w-7xl mx-auto text-center text-xs text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} Neskeep. Todos los derechos reservados.</p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
@keyframes uc-float-particle {
  0%, 100% {
    transform: translateY(0) translateX(0) scale(1);
    opacity: 0.3;
  }
  25% {
    transform: translateY(-30px) translateX(15px) scale(1.2);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-60px) translateX(-10px) scale(0.8);
    opacity: 0.2;
  }
  75% {
    transform: translateY(-30px) translateX(20px) scale(1.1);
    opacity: 0.5;
  }
}

@keyframes uc-spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@keyframes uc-progress {
  0% { stroke-dashoffset: 176; }
  50% { stroke-dashoffset: 30; }
  100% { stroke-dashoffset: 176; }
}

@keyframes uc-bar-pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
</style>

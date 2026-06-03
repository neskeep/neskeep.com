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

// Floating particles
const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 15 + 10,
  delay: Math.random() * 5
}))

// Services pillars
const pillars = [
  { icon: '{ }', label: 'Desarrollo Web' },
  { icon: '< />', label: 'Automatización' },
  { icon: '# _', label: 'Marketing de Datos' }
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
    class="min-h-screen relative overflow-hidden flex flex-col"
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

    <!-- Main content -->
    <main class="relative z-10 flex-1 flex items-center justify-center px-6 py-16">
      <div class="w-full max-w-5xl mx-auto">
        <!-- Top bar: Logo + Status -->
        <div class="flex items-center justify-between mb-16 md:mb-24">
          <img
            src="/logo.png"
            alt="Neskeep"
            class="h-8 md:h-10 opacity-90"
          >
          <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-brand/20 bg-brand/5 backdrop-blur-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75" />
              <span class="relative inline-flex rounded-full h-2 w-2 bg-brand" />
            </span>
            <span class="text-brand text-xs font-semibold tracking-widest uppercase">Building</span>
          </div>
        </div>

        <!-- Hero area -->
        <div class="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <!-- Left: Copy -->
          <div class="lg:col-span-7 space-y-8">
            <div class="space-y-4">
              <p class="text-brand font-semibold tracking-wide text-sm uppercase">
                Menos promesas, mas codigo
              </p>
              <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] tracking-tight">
                Estamos<br>
                construyendo<br>
                algo <span class="text-shimmer">grande</span>
              </h1>
            </div>

            <p class="text-lg md:text-xl text-gray-400 leading-relaxed max-w-xl">
              Nuestro nuevo ecosistema digital esta en camino.
              Si tienes un proyecto en mente, no esperes al lanzamiento.
            </p>

            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="https://wa.me/573142313921"
                target="_blank"
                rel="noopener noreferrer"
                class="group inline-flex items-center justify-center gap-3 font-semibold rounded-2xl px-8 py-4 text-base btn-glow text-bg transition-all duration-300"
              >
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Hablemos por WhatsApp
              </a>
              <a
                href="mailto:hola@neskeep.com"
                class="group inline-flex items-center justify-center gap-3 font-semibold rounded-2xl px-8 py-4 text-base btn-outline transition-all duration-300"
              >
                <svg class="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                hola@neskeep.com
              </a>
            </div>
          </div>

          <!-- Right: Visual element -->
          <div class="lg:col-span-5 flex justify-center">
            <div class="relative w-full max-w-sm aspect-square">
              <!-- Orbital rings -->
              <div class="absolute inset-0 uc-orbit-ring border border-brand/10 rounded-full" style="animation: uc-spin 25s linear infinite" />
              <div class="absolute inset-4 uc-orbit-ring border border-brand/15 rounded-full" style="animation: uc-spin 20s linear infinite reverse" />
              <div class="absolute inset-10 uc-orbit-ring border border-brand/10 rounded-full" style="animation: uc-spin 30s linear infinite" />

              <!-- Orbital dots -->
              <div class="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-brand shadow-glow-sm" style="animation: uc-spin 25s linear infinite" />
              <div class="absolute bottom-4 right-4 w-2.5 h-2.5 rounded-full bg-accent" style="animation: uc-spin 20s linear infinite reverse" />
              <div class="absolute top-10 left-10 w-2 h-2 rounded-full bg-white/50" style="animation: uc-spin 30s linear infinite" />

              <!-- Center card -->
              <div class="absolute inset-16 md:inset-14 rounded-3xl bg-surface/60 border border-border backdrop-blur-xl flex flex-col items-center justify-center gap-5 p-6">
                <!-- Animated progress ring -->
                <div class="relative w-16 h-16">
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
                    <span class="text-brand text-lg font-bold">N</span>
                  </div>
                </div>

                <div class="text-center">
                  <p class="text-white font-semibold text-sm">En progreso</p>
                  <p class="text-gray-500 text-xs mt-1">neskeep.com v2</p>
                </div>

                <!-- Animated bars -->
                <div class="w-full space-y-2 px-2">
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
        <div class="grid grid-cols-3 gap-4 md:gap-6 mt-20 md:mt-28">
          <div
            v-for="pillar in pillars"
            :key="pillar.label"
            class="group card-glow rounded-2xl p-6 md:p-8 text-center transition-all duration-500 hover:border-brand/30"
          >
            <div class="text-2xl md:text-3xl font-mono text-brand mb-3 transition-transform duration-300 group-hover:scale-110">
              {{ pillar.icon }}
            </div>
            <p class="text-xs md:text-sm text-gray-400 font-medium tracking-wide uppercase">
              {{ pillar.label }}
            </p>
          </div>
        </div>
      </div>
    </main>

    <!-- Footer -->
    <footer class="relative z-10 px-6 py-8">
      <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-600">
        <p>&copy; {{ new Date().getFullYear() }} Neskeep. Todos los derechos reservados.</p>
        <p class="text-gray-500">Santo Domingo, DR</p>
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

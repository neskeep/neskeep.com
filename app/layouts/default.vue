<script setup>
const { setupMouseGlow } = useMouseGlow()

let cleanup = null

onMounted(() => {
  cleanup = setupMouseGlow()
})

onBeforeUnmount(() => {
  if (cleanup) {
    cleanup()
  }
})
</script>

<template>
  <div class="min-h-screen flex flex-col relative">
    <Nav />

    <main class="flex-1 relative">
      <slot />
    </main>

    <!-- Global Particles Background -->
    <ClientOnly>
      <ParticlesBackground />
    </ClientOnly>

    <Footer class="relative" />
  </div>
</template>

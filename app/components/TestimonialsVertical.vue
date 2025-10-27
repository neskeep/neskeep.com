<script setup>
const props = defineProps({
  testimonials: {
    type: Array,
    required: true
  }
})

// Dividir testimonios en columnas
const columns = computed(() => {
  const colCount = 3
  const cols = Array.from({ length: colCount }, () => [])

  props.testimonials.forEach((testimonial, index) => {
    cols[index % colCount].push(testimonial)
  })

  return cols
})

// Animation speeds for each column (different speeds for variety)
const speeds = [30, 25, 35] // seconds
</script>

<template>
  <div class="overflow-hidden">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="(column, colIndex) in columns"
        :key="colIndex"
        class="testimonials-column"
      >
        <div
          class="testimonials-track"
          :style="{
            animationDuration: `${speeds[colIndex]}s`,
            animationDirection: colIndex % 2 === 0 ? 'normal' : 'reverse'
          }"
        >
          <!-- Duplicate items for seamless loop -->
          <div
            v-for="testimonial in [...column, ...column]"
            :key="`${testimonial.author}-${Math.random()}`"
            class="testimonial-card card-glow rounded-2xl p-6 mb-6 bg-surface/50"
          >
            <div class="flex items-center gap-3 mb-4">
              <div class="w-12 h-12 rounded-full bg-gradient-to-br from-brand to-accent flex items-center justify-center text-white font-bold text-lg">
                {{ testimonial.author.charAt(0) }}
              </div>
              <div>
                <h4 class="font-semibold text-white">{{ testimonial.author }}</h4>
                <p class="text-sm text-gray-400">
                  {{ testimonial.role }} {{ testimonial.company ? `· ${testimonial.company}` : '' }}
                </p>
              </div>
            </div>

            <p class="text-gray-300 leading-relaxed">
              "{{ testimonial.quote }}"
            </p>

            <div class="flex gap-1 mt-4">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-4 h-4 text-brand"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.testimonials-column {
  height: 600px;
  overflow: hidden;
  position: relative;
  mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    transparent 0%,
    black 10%,
    black 90%,
    transparent 100%
  );
}

.testimonials-track {
  animation: scroll-vertical linear infinite;
  display: flex;
  flex-direction: column;
}

.testimonials-track:hover {
  animation-play-state: paused;
}

@keyframes scroll-vertical {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-50%);
  }
}

.testimonial-card {
  transition: transform 0.3s ease;
}

.testimonial-card:hover {
  transform: scale(1.02);
}
</style>

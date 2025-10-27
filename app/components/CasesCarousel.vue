<script setup>
const props = defineProps({
  cases: {
    type: Array,
    required: true
  }
})

const currentIndex = ref(0)
const isAnimating = ref(false)

// Calculate slides (2 items per slide)
const slides = computed(() => {
  const result = []
  for (let i = 0; i < props.cases.length; i += 2) {
    result.push(props.cases.slice(i, i + 2))
  }
  return result
})

const nextSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const prevSlide = () => {
  if (isAnimating.value) return
  isAnimating.value = true
  currentIndex.value = currentIndex.value === 0 ? slides.value.length - 1 : currentIndex.value - 1
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

const goToSlide = (index) => {
  if (isAnimating.value || index === currentIndex.value) return
  isAnimating.value = true
  currentIndex.value = index
  setTimeout(() => {
    isAnimating.value = false
  }, 500)
}

// Auto-advance carousel
let autoAdvanceInterval
onMounted(() => {
  autoAdvanceInterval = setInterval(() => {
    nextSlide()
  }, 6000)
})

onUnmounted(() => {
  if (autoAdvanceInterval) {
    clearInterval(autoAdvanceInterval)
  }
})
</script>

<template>
  <div class="relative">
    <!-- Carousel Container -->
    <div class="overflow-hidden rounded-3xl">
      <div
        class="flex transition-transform duration-500 ease-out"
        :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
      >
        <div
          v-for="(slide, slideIndex) in slides"
          :key="slideIndex"
          class="w-full shrink-0"
        >
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 py-10">
            <div
              v-for="(caseItem, index) in slide"
              :key="index"
              class="card-glow rounded-3xl p-8 md:p-10 bg-gradient-to-br from-surface/50 to-surface/30 min-h-[420px] flex flex-col justify-between"
            >
              <div>
                <div class="flex items-center gap-3 mb-6">
                  <span class="px-4 py-2 rounded-full bg-brand/20 text-brand font-semibold text-sm">
                    {{ caseItem.category }}
                  </span>
                </div>

                <h3 class="text-3xl font-bold text-white mb-4">
                  {{ caseItem.title }}
                </h3>

                <p class="text-gray-300 text-lg leading-relaxed mb-6">
                  {{ caseItem.description }}
                </p>

                <!-- Metrics -->
                <div class="grid grid-cols-2 gap-4 mb-6">
                  <div
                    v-for="metric in caseItem.metrics"
                    :key="metric.label"
                    class="text-center p-4 rounded-xl bg-surface/50"
                  >
                    <div class="text-2xl md:text-3xl font-bold text-gradient-static mb-1">
                      {{ metric.value }}
                    </div>
                    <div class="text-gray-400 text-sm">
                      {{ metric.label }}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tag in caseItem.tags"
                  :key="tag"
                  class="px-3 py-1 rounded-full bg-brand/10 text-brand text-sm font-medium"
                >
                  {{ tag }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Dots Navigation -->
    <div v-if="slides.length > 1" class="flex justify-center gap-2 mt-8">
      <button
        v-for="(_, index) in slides"
        :key="index"
        @click="goToSlide(index)"
        :class="[
          'w-3 h-3 rounded-full transition-all',
          index === currentIndex
            ? 'bg-brand w-8'
            : 'bg-gray-600 hover:bg-gray-500'
        ]"
        :aria-label="`Go to slide ${index + 1}`"
      />
    </div>
  </div>
</template>

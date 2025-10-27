<script setup>
const props = defineProps({
  curve: {
    type: String,
    default: 'smooth',
    validator: (value) => ['smooth', 'elastic', 'bounce', 'spring'].includes(value)
  },
  delay: {
    type: Number,
    default: 0
  }
})

const sectionRef = ref(null)
const isVisible = ref(false)

const curves = {
  smooth: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
  elastic: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
  bounce: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  spring: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
}

onMounted(() => {
  if (typeof window === 'undefined') return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            isVisible.value = true
          }, props.delay)
          observer.unobserve(entry.target)
        }
      })
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }
  )

  if (sectionRef.value) {
    observer.observe(sectionRef.value)
  }

  onUnmounted(() => {
    if (sectionRef.value) {
      observer.unobserve(sectionRef.value)
    }
  })
})
</script>

<template>
  <div
    ref="sectionRef"
    :class="[
      'section-transition',
      !isVisible && 'section-enter',
      isVisible && 'section-enter-active'
    ]"
    :style="{
      transitionTimingFunction: curves[curve]
    }"
  >
    <slot />
  </div>
</template>

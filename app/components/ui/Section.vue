<script setup>
defineProps({
  spacing: {
    type: String,
    default: 'lg',
    validator: (value) => ['sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  background: {
    type: String,
    default: 'transparent',
    validator: (value) => ['transparent', 'surface', 'gradient'].includes(value)
  }
})

const spacingClasses = {
  sm: 'py-12',
  md: 'py-16',
  lg: 'py-20 md:py-24',
  xl: 'py-24 md:py-32',
  '2xl': 'py-32 md:py-40'
}

const backgroundClasses = {
  transparent: '',
  surface: 'bg-surface/30',
  gradient: 'bg-gradient-to-b from-surface/20 to-transparent'
}
</script>

<template>
  <section
    :class="[
      spacingClasses[spacing],
      backgroundClasses[background]
    ]"
  >
    <slot />
  </section>
</template>

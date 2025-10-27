<script setup>
const props = defineProps({
  value: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 2000
  },
  suffix: {
    type: String,
    default: ''
  },
  prefix: {
    type: String,
    default: ''
  }
})

const { count, elementRef } = useNumberCounter(props.value, props.duration)
</script>

<template>
  <span ref="elementRef">{{ prefix }}{{ count }}{{ suffix }}</span>
</template>

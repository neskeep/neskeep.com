<script setup>
const props = defineProps({
  words: {
    type: Array,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 100
  },
  deletingSpeed: {
    type: Number,
    default: 50
  },
  pauseTime: {
    type: Number,
    default: 2000
  }
})

const currentText = ref('')
const currentWordIndex = ref(0)
const isDeleting = ref(false)

let timeout = null

const typeEffect = () => {
  const currentWord = props.words[currentWordIndex.value]

  if (!isDeleting.value) {
    // Typing
    if (currentText.value.length < currentWord.length) {
      currentText.value = currentWord.substring(0, currentText.value.length + 1)
      timeout = setTimeout(typeEffect, props.typingSpeed)
    } else {
      // Pause before deleting
      timeout = setTimeout(() => {
        isDeleting.value = true
        typeEffect()
      }, props.pauseTime)
    }
  } else {
    // Deleting
    if (currentText.value.length > 0) {
      currentText.value = currentWord.substring(0, currentText.value.length - 1)
      timeout = setTimeout(typeEffect, props.deletingSpeed)
    } else {
      // Move to next word
      isDeleting.value = false
      currentWordIndex.value = (currentWordIndex.value + 1) % props.words.length
      timeout = setTimeout(typeEffect, 200)
    }
  }
}

onMounted(() => {
  typeEffect()
})

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})
</script>

<template>
  <span class="typewriter">
    {{ currentText }}<span class="cursor">|</span>
  </span>
</template>

<style scoped>
.cursor {
  animation: blink 1s infinite;
  opacity: 1;
}

@keyframes blink {
  0%, 49% {
    opacity: 1;
  }
  50%, 100% {
    opacity: 0;
  }
}
</style>

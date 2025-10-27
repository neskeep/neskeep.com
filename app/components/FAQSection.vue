<script setup>
const props = defineProps({
  faqs: {
    type: Array,
    required: true
  }
})

const openIndex = ref(0) // First item open by default

const toggle = (index) => {
  openIndex.value = openIndex.value === index ? null : index
}
</script>

<template>
  <div class="space-y-4">
    <div
      v-for="(faq, index) in faqs"
      :key="index"
      class="card-glow rounded-2xl overflow-hidden bg-surface/30 transition-all duration-300"
      :class="{ 'ring-2 ring-brand/50': openIndex === index }"
    >
      <button
        @click="toggle(index)"
        class="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-surface/20 transition-colors"
        :aria-expanded="openIndex === index"
      >
        <span class="text-lg font-semibold text-white pr-8">
          {{ faq.question }}
        </span>
        <svg
          class="w-6 h-6 text-brand flex-shrink-0 transition-transform duration-300"
          :class="{ 'rotate-180': openIndex === index }"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="max-h-0 opacity-0"
        enter-to-class="max-h-96 opacity-100"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="max-h-96 opacity-100"
        leave-to-class="max-h-0 opacity-0"
      >
        <div v-if="openIndex === index" class="overflow-hidden">
          <div class="px-6 pb-5 text-gray-300 leading-relaxed">
            {{ faq.answer }}
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>

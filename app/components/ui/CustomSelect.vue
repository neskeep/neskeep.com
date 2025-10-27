<script setup>
const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  options: {
    type: Array,
    required: true,
    // Array de objetos: [{ value: 'value', label: 'Label' }]
  },
  placeholder: {
    type: String,
    default: 'Selecciona una opción'
  },
  id: {
    type: String,
    default: null
  }
})

const emit = defineEmits(['update:modelValue'])

const isOpen = ref(false)
const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue)
})

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isOpen.value = false
}

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

// Cerrar el dropdown al hacer clic fuera
const dropdownRef = ref(null)
onClickOutside(dropdownRef, () => {
  isOpen.value = false
})
</script>

<template>
  <div ref="dropdownRef" class="relative">
    <button
      type="button"
      :id="id"
      class="w-full px-4 py-3 rounded-xl bg-surface border border-border text-white text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all hover:border-brand/40"
      @click="toggleDropdown"
    >
      <span :class="selectedOption ? 'text-white' : 'text-gray-500'">
        {{ selectedOption ? selectedOption.label : placeholder }}
      </span>

      <!-- Icono de flecha -->
      <svg
        class="w-5 h-5 text-gray-400 transition-transform duration-300"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute z-50 w-full mt-2 rounded-xl bg-surface border border-border shadow-xl overflow-hidden"
      >
        <div class="max-h-60 overflow-y-auto custom-scrollbar">
          <button
            v-for="option in options"
            :key="option.value"
            type="button"
            class="w-full px-4 py-3 text-left text-white hover:bg-brand/10 transition-colors flex items-center justify-between group"
            :class="{
              'bg-brand/20 text-brand': option.value === modelValue
            }"
            @click="selectOption(option)"
          >
            <span>{{ option.label }}</span>

            <!-- Checkmark para opción seleccionada -->
            <svg
              v-if="option.value === modelValue"
              class="w-5 h-5 text-brand"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: transparent;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background: color-mix(in srgb, var(--color-brand), transparent 60%);
  border-radius: 3px;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: color-mix(in srgb, var(--color-brand), transparent 40%);
}
</style>

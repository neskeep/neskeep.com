import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Tu configuración personalizada aquí
  {
    rules: {
      'vue/multi-word-component-names': 'off',
      'vue/no-v-html': 'off' // Necesario para contenido de blog
    }
  }
)

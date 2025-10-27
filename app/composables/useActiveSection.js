export const useActiveSection = () => {
  const activeSection = ref('')

  const setupActiveSection = () => {
    if (import.meta.client) {
      const observerOptions = {
        root: null,
        rootMargin: '-20% 0px -70% 0px', // Trigger cuando la sección está en el 20% superior del viewport
        threshold: 0
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id')
            if (id) {
              activeSection.value = id
            }
          }
        })
      }, observerOptions)

      // Observar todas las secciones con id
      const observeSections = () => {
        const sections = document.querySelectorAll('section[id], div[id^="servicios"], div[id^="casos"], div[id^="testimonios"], div[id^="faqs"], div[id^="contacto"]')
        sections.forEach((section) => {
          observer.observe(section)
        })
      }

      // Esperar a que el DOM esté listo
      setTimeout(observeSections, 100)

      // Re-observar cuando se agregan nuevas secciones
      const mutationObserver = new MutationObserver(observeSections)
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Cleanup
      return () => {
        observer.disconnect()
        mutationObserver.disconnect()
      }
    }
  }

  return { activeSection, setupActiveSection }
}

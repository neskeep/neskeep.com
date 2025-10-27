export const useMouseGlow = () => {
  const setupMouseGlow = () => {
    if (import.meta.client) {
      // Función para actualizar la posición del mouse en un elemento específico
      const updateMousePosition = (e, element) => {
        const rect = element.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        // Calcular posición como porcentaje
        const xPercent = (x / rect.width) * 100
        const yPercent = (y / rect.height) * 100

        // Actualizar variables CSS
        element.style.setProperty('--mouse-x', `${xPercent}%`)
        element.style.setProperty('--mouse-y', `${yPercent}%`)
      }

      // Usar event delegation para mejor performance
      const handleMouseMove = (e) => {
        // Encontrar el elemento .card-glow más cercano
        const target = e.target.closest('.card-glow')
        if (target) {
          updateMousePosition(e, target)
        }
      }

      // Observer para detectar nuevos elementos .card-glow agregados dinámicamente
      const observer = new MutationObserver(() => {
        const cards = document.querySelectorAll('.card-glow')
        cards.forEach(card => {
          // Asegurar que cada card tenga los event listeners
          if (!card.dataset.mouseGlowInit) {
            card.dataset.mouseGlowInit = 'true'

            card.addEventListener('mousemove', (e) => {
              updateMousePosition(e, card)
            })

            card.addEventListener('mouseleave', () => {
              card.style.setProperty('--mouse-x', '50%')
              card.style.setProperty('--mouse-y', '50%')
            })
          }
        })
      })

      // Inicializar cards existentes
      const initializeCards = () => {
        const cards = document.querySelectorAll('.card-glow')
        cards.forEach(card => {
          if (!card.dataset.mouseGlowInit) {
            card.dataset.mouseGlowInit = 'true'

            card.addEventListener('mousemove', (e) => {
              updateMousePosition(e, card)
            })

            card.addEventListener('mouseleave', () => {
              card.style.setProperty('--mouse-x', '50%')
              card.style.setProperty('--mouse-y', '50%')
            })
          }
        })
      }

      // Inicializar inmediatamente
      initializeCards()

      // Observar cambios en el DOM
      observer.observe(document.body, {
        childList: true,
        subtree: true
      })

      // Cleanup function
      return () => {
        observer.disconnect()
        const cards = document.querySelectorAll('.card-glow')
        cards.forEach(card => {
          delete card.dataset.mouseGlowInit
        })
      }
    }
  }

  return { setupMouseGlow }
}

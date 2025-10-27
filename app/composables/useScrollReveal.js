/**
 * Composable para revelar elementos al hacer scroll
 * Similar a AOS (Animate On Scroll)
 */
export const useScrollReveal = () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  }

  const observe = (elements) => {
    if (typeof window === 'undefined') return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal')
          entry.target.style.animationDelay = entry.target.dataset.delay || '0ms'
        }
      })
    }, observerOptions)

    elements.forEach((el) => {
      if (el) observer.observe(el)
    })

    return observer
  }

  const setupReveal = (selector = '[data-reveal]', delay = 0) => {
    onMounted(() => {
      nextTick(() => {
        const elements = document.querySelectorAll(selector)
        observe(elements)
      })
    })
  }

  return {
    observe,
    setupReveal
  }
}

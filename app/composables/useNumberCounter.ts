/**
 * Composable for animating numbers from 0 to target value
 * Triggers when element enters viewport
 */
export function useNumberCounter(target: number, duration: number = 2000) {
  const count = ref(0)
  const elementRef = ref<HTMLElement | null>(null)
  const hasAnimated = ref(false)

  const animate = () => {
    if (hasAnimated.value) return

    const startTime = performance.now()
    const startValue = 0

    const updateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      // Easing function (ease-out quad)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      count.value = Math.floor(startValue + (target - startValue) * easeOut)

      if (progress < 1) {
        requestAnimationFrame(updateCount)
      } else {
        count.value = target
        hasAnimated.value = true
      }
    }

    requestAnimationFrame(updateCount)
  }

  onMounted(() => {
    if (!elementRef.value) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate()
          }
        })
      },
      { threshold: 0.5 }
    )

    observer.observe(elementRef.value)

    onUnmounted(() => {
      observer.disconnect()
    })
  })

  return {
    count,
    elementRef
  }
}

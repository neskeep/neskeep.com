export const onClickOutside = (target, handler) => {
  if (import.meta.client) {
    const listener = (event) => {
      const el = target.value
      if (!el || el === event.target || el.contains(event.target)) {
        return
      }
      handler(event)
    }

    onMounted(() => {
      window.addEventListener('click', listener)
    })

    onBeforeUnmount(() => {
      window.removeEventListener('click', listener)
    })
  }
}

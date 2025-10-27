<script setup>
const currentYear = new Date().getFullYear()

const footerLinks = {
  legal: [
    { name: 'Privacidad', href: '/privacidad' },
    { name: 'Términos', href: '/terminos' }
  ]
}
</script>

<template>
  <footer class="border-t border-border/50 bg-surface/20 relative">
    <UiContainer>
      <div class="py-12 md:py-16">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          <!-- Brand Column -->
          <div class="md:col-span-2">
            <NuxtLink to="/" class="text-2xl font-bold text-gradient inline-block mb-4">
              <Logo class="h-10 w-auto" />
            </NuxtLink>
            <p class="text-gray-400 mb-6 max-w-md">
              Menos promesas, más código. Construimos ecosistemas digitales medibles y rentables.
            </p>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="font-semibold text-white mb-4">Contacto</h3>
            <div class="space-y-2 text-gray-400 text-sm">
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:hello@neskeep.com" class="hover:text-brand transition-colors">
                  hello@neskeep.com
                </a>
              </p>
              <!-- <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="https://wa.me/18092225466" target="_blank" rel="noopener noreferrer" class="hover:text-brand transition-colors">
                  +1 809 222 5466
                </a>
              </p> -->
              <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                República Dominicana
              </p>
              <!-- <p class="flex items-center gap-2">
                <svg class="w-4 h-4 text-brand" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Lun - Vie, 8AM - 6PM
              </p> -->
            </div>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p class="text-gray-500 text-sm">
            &copy; {{ currentYear }} Neskeep. Todos los derechos reservados.
          </p>
          <div class="flex items-center gap-4 text-gray-500 text-sm">
            <p>Hecho con <span class="text-brand">código</span> y datos.</p>
            <span class="text-gray-600">|</span>
            <NuxtLink to="/privacidad" class="hover:text-brand transition-colors">
              Privacidad
            </NuxtLink>
            <span class="text-gray-600">|</span>
            <NuxtLink to="/terminos" class="hover:text-brand transition-colors">
              Términos
            </NuxtLink>
          </div>
        </div>
      </div>
    </UiContainer>
  </footer>
</template>

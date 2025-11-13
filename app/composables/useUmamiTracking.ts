/**
 * Composable para tracking de eventos con Umami
 * Proporciona helpers para trackear eventos de forma consistente
 */

interface UmamiEventData {
  [key: string]: string | number | boolean
}

export const useUmamiTracking = () => {
  /**
   * Track un evento personalizado en Umami
   * @param eventName - Nombre del evento (ej: 'cta_click', 'form_submit')
   * @param eventData - Datos adicionales del evento (opcional)
   */
  const trackEvent = (eventName: string, eventData?: UmamiEventData) => {
    if (process.client) {
      // Esperar a que el script de Umami se cargue
      if (typeof window !== 'undefined' && window.umami) {
        console.log('[Umami] Tracking event:', eventName, eventData)
        window.umami.track(eventName, eventData)
      } else {
        console.warn('[Umami] Script not loaded yet. Event queued:', eventName, eventData)
        // Reintentar después de un delay
        setTimeout(() => {
          if (window.umami) {
            console.log('[Umami] Retry - Tracking event:', eventName, eventData)
            window.umami.track(eventName, eventData)
          }
        }, 1000)
      }
    }
  }

  // ========================================
  // EVENTOS DE NAVEGACIÓN
  // ========================================

  const trackNavClick = (section: string, device: 'mobile' | 'desktop') => {
    trackEvent('nav_click', {
      section,
      device,
    })
  }

  const trackLogoClick = (location: 'header' | 'footer') => {
    trackEvent('logo_click', {
      location,
    })
  }

  const trackMobileMenuToggle = (action: 'open' | 'close') => {
    trackEvent('mobile_menu', {
      action,
    })
  }

  // ========================================
  // EVENTOS DE CTA (Call to Action)
  // ========================================

  const trackCtaClick = (
    location: string,
    ctaText: string,
    section?: string
  ) => {
    trackEvent('cta_click', {
      location,
      cta_text: ctaText,
      ...(section && { section }),
    })
  }

  // ========================================
  // EVENTOS DE SERVICIOS
  // ========================================

  const trackServiceClick = (serviceName: string, position: number) => {
    trackEvent('service_click', {
      service: serviceName,
      position,
    })
  }

  const trackServiceHover = (serviceName: string, dwellTime: number) => {
    trackEvent('service_hover', {
      service: serviceName,
      dwell_seconds: dwellTime,
    })
  }

  // ========================================
  // EVENTOS DE CASOS (CARRUSEL)
  // ========================================

  const trackCaseNavigation = (
    method: 'prev' | 'next' | 'dot' | 'auto',
    caseIndex: number
  ) => {
    trackEvent('case_navigation', {
      method,
      case_index: caseIndex,
    })
  }

  const trackCaseClick = (caseTitle: string, caseIndex: number) => {
    trackEvent('case_click', {
      case_title: caseTitle,
      case_index: caseIndex,
    })
  }

  const trackCarouselPause = (caseIndex: number) => {
    trackEvent('carousel_pause', {
      case_index: caseIndex,
    })
  }

  // ========================================
  // EVENTOS DE TESTIMONIOS
  // ========================================

  const trackTestimonialView = (
    testimonialName: string,
    column: number
  ) => {
    trackEvent('testimonial_view', {
      name: testimonialName,
      column,
    })
  }

  const trackTestimonialsPause = () => {
    trackEvent('testimonials_pause')
  }

  // ========================================
  // EVENTOS DE FAQs
  // ========================================

  const trackFaqToggle = (
    question: string,
    questionIndex: number,
    action: 'open' | 'close',
    timeOpen?: number
  ) => {
    trackEvent('faq_toggle', {
      question: question.substring(0, 50), // Limitar longitud
      question_index: questionIndex,
      action,
      ...(timeOpen && { time_open_seconds: timeOpen }),
    })
  }

  // ========================================
  // EVENTOS DE FORMULARIO
  // ========================================

  const trackFormStart = () => {
    trackEvent('form_start')
  }

  const trackFormFieldComplete = (fieldName: string) => {
    trackEvent('form_field_complete', {
      field: fieldName,
    })
  }

  const trackFormBudgetSelect = (budget: string) => {
    trackEvent('form_budget_select', {
      budget,
    })
  }

  const trackFormSubmitAttempt = (fieldsCompleted: string[]) => {
    trackEvent('form_submit_attempt', {
      fields_count: fieldsCompleted.length,
    })
  }

  const trackFormSuccess = (budget: string, hasPhone: boolean, hasCompany: boolean) => {
    trackEvent('form_submit_success', {
      budget,
      has_phone: hasPhone,
      has_company: hasCompany,
    })
  }

  const trackFormError = (errorType: string, errorField?: string) => {
    trackEvent('form_error', {
      error_type: errorType,
      ...(errorField && { error_field: errorField }),
    })
  }

  const trackFormAbandonment = (
    fieldsCompleted: string[],
    timeSpent: number
  ) => {
    trackEvent('form_abandonment', {
      fields_count: fieldsCompleted.length,
      time_spent_seconds: timeSpent,
    })
  }

  // ========================================
  // EVENTOS DE FOOTER
  // ========================================

  const trackFooterClick = (linkType: string, destination: string) => {
    trackEvent('footer_click', {
      link_type: linkType,
      destination,
    })
  }

  // ========================================
  // EVENTOS GLOBALES
  // ========================================

  const trackScrollDepth = (percentage: number) => {
    trackEvent('scroll_depth', {
      percentage,
    })
  }

  const trackTimeOnPage = (seconds: number) => {
    trackEvent('time_on_page', {
      seconds,
    })
  }

  const trackEngagement = (
    scrollDepth: number,
    timeSpent: number,
    interactions: number
  ) => {
    trackEvent('engagement', {
      scroll_depth: scrollDepth,
      time_spent: timeSpent,
      interactions,
    })
  }

  const trackExitIntent = () => {
    trackEvent('exit_intent')
  }

  // ========================================
  // EVENTOS DE PERFORMANCE (OPCIONAL)
  // ========================================

  const trackPerformance = () => {
    if (process.client && 'PerformanceObserver' in window) {
      // Track Core Web Vitals
      try {
        const observer = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            const metricName = entry.name
            const metricValue = Math.round(entry.value)

            trackEvent('web_vital', {
              metric: metricName,
              value: metricValue,
            })
          }
        })

        observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
      } catch (e) {
        // Performance API not available
        console.warn('Performance tracking not available')
      }
    }
  }

  return {
    // Core tracking
    trackEvent,

    // Navegación
    trackNavClick,
    trackLogoClick,
    trackMobileMenuToggle,

    // CTAs
    trackCtaClick,

    // Servicios
    trackServiceClick,
    trackServiceHover,

    // Casos
    trackCaseNavigation,
    trackCaseClick,
    trackCarouselPause,

    // Testimonios
    trackTestimonialView,
    trackTestimonialsPause,

    // FAQs
    trackFaqToggle,

    // Formulario
    trackFormStart,
    trackFormFieldComplete,
    trackFormBudgetSelect,
    trackFormSubmitAttempt,
    trackFormSuccess,
    trackFormError,
    trackFormAbandonment,

    // Footer
    trackFooterClick,

    // Globales
    trackScrollDepth,
    trackTimeOnPage,
    trackEngagement,
    trackExitIntent,
    trackPerformance,
  }
}

// Type declaration for window.umami
declare global {
  interface Window {
    umami?: {
      track: (eventName: string, eventData?: UmamiEventData) => void
    }
  }
}

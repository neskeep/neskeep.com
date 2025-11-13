import { Resend } from 'resend'
import { generateEmailTemplate } from '../utils/email-template'

export default defineEventHandler(async (event) => {
  try {
    // Leer el body de la petición
    const body = await readBody(event)

    // Validación de campos requeridos
    if (!body.name || !body.email || !body.message || !body.budget) {
      return {
        success: false,
        error: 'Por favor completa todos los campos requeridos'
      }
    }

    // Validación de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return {
        success: false,
        error: 'Por favor ingresa un email válido'
      }
    }

    // Validación de longitud de mensaje
    if (body.message.length < 10) {
      return {
        success: false,
        error: 'El mensaje debe tener al menos 10 caracteres'
      }
    }

    // Inicializar Resend
    const resendApiKey = process.env.RESEND_API_KEY

    if (!resendApiKey) {
      console.error('RESEND_API_KEY no está configurada')
      return {
        success: false,
        error: 'Error de configuración del servidor'
      }
    }

    const resend = new Resend(resendApiKey)

    // Preparar datos del email
    const emailData = {
      name: body.name,
      email: body.email,
      phone: body.phone || undefined,
      company: body.company || undefined,
      budget: body.budget,
      message: body.message
    }

    // Generar template HTML
    const htmlContent = generateEmailTemplate(emailData)

    // Enviar email usando Resend
    const { data, error } = await resend.emails.send({
      from: 'Neskeep Contacto <hello@neskeep.com>',
      to: ['hello@neskeep.com'],
      subject: `Nuevo mensaje de contacto - ${body.name}`,
      html: htmlContent,
      replyTo: body.email
    })

    if (error) {
      console.error('Error al enviar email:', error)
      return {
        success: false,
        error: 'Error al enviar el mensaje. Por favor intenta nuevamente.'
      }
    }

    // Respuesta exitosa
    return {
      success: true,
      message: 'Tu mensaje ha sido enviado exitosamente. Te contactaremos pronto.',
      emailId: data?.id
    }

  } catch (error) {
    console.error('Error en el endpoint de contacto:', error)
    return {
      success: false,
      error: 'Error inesperado al procesar tu solicitud'
    }
  }
})

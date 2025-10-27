interface EmailData {
  name: string
  email: string
  phone?: string
  company?: string
  budget: string
  message: string
}

export function generateEmailTemplate(data: EmailData): string {
  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje de contacto - Neskeep</title>
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #0C0F1C;">
  <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 100%;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; max-width: 600px; margin: 0 auto; background: linear-gradient(180deg, #1A1E2A 0%, #0C0F1C 100%); border-radius: 16px; overflow: hidden; box-shadow: 0 20px 60px rgba(0, 201, 212, 0.2);">

          <!-- Header con efecto glow -->
          <tr>
            <td style="background: linear-gradient(135deg, #00C9D4 0%, #A6FF3A 100%); padding: 2px;">
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; background: #1A1E2A;">
                <tr>
                  <td style="padding: 40px 30px; text-align: center;">
                    <!-- Logo SVG -->
                    <div style="margin: 0 auto 20px; max-width: 200px;">
                      <img src:"https://www.neskeep.com/logo.png" />
                    </div>
                    <p style="margin: 12px 0 0 0; color: #A8B2D1; font-size: 14px; font-weight: 500; letter-spacing: 2px; text-transform: uppercase;">
                      Nuevo mensaje de contacto
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Contenido principal -->
          <tr>
            <td style="padding: 40px 30px;">

              <!-- Información del contacto -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%; margin-bottom: 30px;">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="display: inline-block; padding: 8px 16px; background: rgba(0, 201, 212, 0.1); border-radius: 8px; border: 1px solid rgba(0, 201, 212, 0.3);">
                      <span style="color: #00C9D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                        Datos del cliente
                      </span>
                    </div>
                  </td>
                </tr>

                <!-- Nombre -->
                <tr>
                  <td style="padding: 16px; background: rgba(26, 30, 42, 0.6); border-radius: 12px; margin-bottom: 12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 6px;">
                          <span style="color: #A8B2D1; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                            Nombre
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="color: #FFFFFF; font-size: 16px; font-weight: 600;">
                            ${data.name}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr><td style="height: 12px;"></td></tr>

                <!-- Email -->
                <tr>
                  <td style="padding: 16px; background: rgba(26, 30, 42, 0.6); border-radius: 12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 6px;">
                          <span style="color: #A8B2D1; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                            Email
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="mailto:${data.email}" style="color: #00C9D4; font-size: 16px; font-weight: 600; text-decoration: none;">
                            ${data.email}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                ${data.phone ? `
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 16px; background: rgba(26, 30, 42, 0.6); border-radius: 12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 6px;">
                          <span style="color: #A8B2D1; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                            Teléfono
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <a href="tel:${data.phone}" style="color: #A6FF3A; font-size: 16px; font-weight: 600; text-decoration: none;">
                            ${data.phone}
                          </a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}

                ${data.company ? `
                <tr><td style="height: 12px;"></td></tr>
                <tr>
                  <td style="padding: 16px; background: rgba(26, 30, 42, 0.6); border-radius: 12px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 6px;">
                          <span style="color: #A8B2D1; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                            Empresa
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="color: #FFFFFF; font-size: 16px; font-weight: 600;">
                            ${data.company}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                ` : ''}

                <tr><td style="height: 12px;"></td></tr>

                <!-- Budget con badge especial -->
                <tr>
                  <td style="padding: 16px; background: rgba(166, 255, 58, 0.05); border-radius: 12px; border: 1px solid rgba(166, 255, 58, 0.2);">
                    <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                      <tr>
                        <td style="padding-bottom: 6px;">
                          <span style="color: #A8B2D1; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                            Presupuesto
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span style="display: inline-block; padding: 6px 14px; background: rgba(166, 255, 58, 0.2); border-radius: 20px; color: #A6FF3A; font-size: 14px; font-weight: 700;">
                            ${data.budget}
                          </span>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- Mensaje -->
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td style="padding-bottom: 24px;">
                    <div style="display: inline-block; padding: 8px 16px; background: rgba(0, 201, 212, 0.1); border-radius: 8px; border: 1px solid rgba(0, 201, 212, 0.3);">
                      <span style="color: #00C9D4; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px;">
                        Mensaje
                      </span>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 24px; background: rgba(26, 30, 42, 0.6); border-radius: 12px; border-left: 3px solid #00C9D4;">
                    <p style="margin: 0; color: #FFFFFF; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">
${data.message}
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding: 30px; background: rgba(12, 15, 28, 0.8); border-top: 1px solid rgba(0, 201, 212, 0.2);">
              <table role="presentation" cellpadding="0" cellspacing="0" style="width: 100%;">
                <tr>
                  <td style="text-align: center; padding-bottom: 12px;">
                    <p style="margin: 0; color: #A8B2D1; font-size: 13px;">
                      Este mensaje fue enviado desde el formulario de contacto de
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center;">
                    <a href="https://neskeep.com" style="color: #00C9D4; font-size: 14px; font-weight: 600; text-decoration: none;">
                      neskeep.com
                    </a>
                  </td>
                </tr>
                <tr>
                  <td style="text-align: center; padding-top: 16px;">
                    <p style="margin: 0; color: #6B7280; font-size: 11px;">
                      ${new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim()
}

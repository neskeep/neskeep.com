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
                    <div style="margin: 0 auto 20px; max-width: 200px; height: 35px; width: 200px;">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 868.83 211.87" style="width: 100%; height: auto; display: block;">
                        <g fill="#00C9D4">
                          <path d="M92.6,211.87L8.95,163.57c-5.52-3.19-8.95-9.13-8.95-15.51V61.29c0-6.38,3.43-12.32,8.96-15.51L84.11,2.39c5.52-3.19,12.38-3.19,17.9,0l75.16,43.39c5.52,3.18,8.95,9.13,8.95,15.51v86.78c0,6.37-3.43,12.32-8.95,15.5l-33.91,19.58-50.65-31.42v60.14ZM29.22,141.53l34.17,19.73v-62.04l80.41,49.88,13.1-7.57v-73.71l-63.84-36.86-63.84,36.86v73.71Z"/>
                          <path d="M313.06,56.68v88.31c0,3.04-.92,5.64-2.76,7.8-1.84,2.16-4,3.24-6.49,3.24-6.35,0-11.55-3.68-15.59-11.04l-33.94-53.12v63.06h-19.18V56.68h18.49l40.29,64.3V56.68h19.18Z"/>
                          <path d="M397.65,154.92h-34.77c-11.04,0-18.79-1.91-23.25-5.73-4.46-3.82-6.69-10.56-6.69-20.21V56.68h64.71v17.11h-45.53v23.04h31.87l-1.38,17.11h-30.49v13.66c0,3.86.87,6.53,2.62,8,1.75,1.47,4.92,2.21,9.52,2.21h33.39v17.11Z"/>
                          <path d="M482.64,125.94c0,9.29-3.4,16.58-10.21,21.87-6.81,5.29-15.5,7.93-26.08,7.93-8.37,0-16.47-2.3-24.28-6.9-3.86-2.39-7.04-5.77-9.52-10.14-2.48-4.37-3.73-9.36-3.73-14.97l17.39-.83c0,4.97,2.12,8.83,6.35,11.59,4.23,2.76,8.92,4.14,14.07,4.14,11.5,0,17.25-4.05,17.25-12.14,0-6.62-3.91-10.53-11.73-11.73l-16.01-1.66c-8-1.19-14.35-4.05-19.04-8.55-4.69-4.51-7.04-10.99-7.04-19.46s3.36-15.45,10.07-20.97c6.71-5.52,15.2-8.28,25.46-8.28s18.51,2.6,24.77,7.8c6.25,5.2,9.38,11.89,9.38,20.08l-17.11.83c-1.57-8-6.95-12-16.14-12-5.61,0-10,1.2-13.18,3.59-3.17,2.39-4.76,5.22-4.76,8.49s1.15,5.84,3.45,7.73c2.3,1.89,5.15,3.06,8.55,3.52l15.73,1.66c17.57,2.39,26.35,11.87,26.35,28.42Z"/>
                        </g>
                        <g fill="#FFFFFF">
                          <path d="M845.76,70.72v-12.08h-4.65v-1.97h11.63v1.97h-4.69v12.08h-2.29Z"/>
                          <path d="M854.85,70.72v-14.04h3.58l2.72,8.52c.08.25.16.53.25.84.08.31.16.61.24.9.07.29.13.54.17.76h.16c.03-.2.07-.45.14-.74s.14-.59.21-.9c.07-.31.15-.61.24-.88l2.74-8.5h3.52v14.04h-2.27v-7.7c0-.52,0-1.06.02-1.62.01-.56.03-1.06.04-1.49.01-.44.02-.72.02-.84h-.16c-.03.15-.09.41-.19.77s-.21.75-.32,1.16-.21.76-.31,1.06l-2.85,8.66h-2.03l-2.85-8.64c-.08-.26-.17-.56-.27-.92s-.19-.72-.29-1.09-.18-.7-.25-1h-.16c.01.33.02.73.03,1.21,0,.48.02.96.03,1.44.01.48.02.92.02,1.3v7.7h-2.21Z"/>
                          <path d="M542.25,102.9l33.81,52.02h-22.35l-23.18-37.12-13.38,17.94v19.18h-19.18V56.68h19.18v54.92l37.12-54.92h19.32l-31.32,46.22Z"/>
                          <path d="M654.42,154.92h-34.77c-11.04,0-18.79-1.91-23.25-5.73-4.46-3.82-6.69-10.56-6.69-20.21V56.68h64.71v17.11h-45.53v23.04h31.87l-1.38,17.11h-30.49v13.66c0,3.86.87,6.53,2.62,8,1.75,1.47,4.92,2.21,9.52,2.21h33.39v17.11Z"/>
                          <path d="M737.9,154.92h-34.77c-11.04,0-18.79-1.91-23.25-5.73-4.46-3.82-6.69-10.56-6.69-20.21V56.68h64.71v17.11h-45.53v23.04h31.87l-1.38,17.11h-30.49v13.66c0,3.86.87,6.53,2.62,8,1.75,1.47,4.92,2.21,9.52,2.21h33.39v17.11Z"/>
                          <path d="M818.69,65.16c5.66,5.66,8.49,13.96,8.49,24.91s-2.83,19.25-8.49,24.9c-5.66,5.66-13.64,8.49-23.94,8.49h-18.9v31.46h-19.18V56.68h38.08c10.3,0,18.28,2.83,23.94,8.49ZM807.99,90.07c0-10.85-4.74-16.28-14.21-16.28h-17.94v32.43h17.94c4.6,0,8.12-1.24,10.56-3.73,2.44-2.48,3.66-6.62,3.66-12.42Z"/>
                        </g>
                      </svg>
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

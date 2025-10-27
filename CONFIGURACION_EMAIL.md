# Configuración del Sistema de Contacto con Resend

## Estado de la Integración

✅ **Completada** - El formulario de contacto está integrado con Resend

## Componentes Creados

### 1. Template de Email
**Ubicación:** `server/utils/email-template.ts`

Template HTML responsive con el diseño de la marca Neskeep:
- Colores: Neocyan (#00C9D4), Pulse Green (#A6FF3A), Quantum Blue (#0C0F1C)
- Diseño glassmorphism con efectos de glow
- Muestra todos los datos del formulario de manera elegante
- Compatible con todos los clientes de email

### 2. API Endpoint
**Ubicación:** `server/api/contact.post.ts`

Endpoint que:
- Valida los datos del formulario
- Genera el email con el template personalizado
- Envía el email usando Resend
- Retorna respuestas apropiadas

### 3. Integración del Formulario
**Ubicación:** `app/pages/index.vue`

El formulario ahora:
- Envía los datos al endpoint `/api/contact`
- Muestra estados de carga
- Maneja errores correctamente
- Resetea el formulario después de envío exitoso

---

## Configuración Necesaria

### ⚠️ IMPORTANTE: Configura estos 2 valores antes de usar en producción

#### 1. Email de Destino

Edita el archivo `server/api/contact.post.ts` en la línea ~57:

```typescript
to: ['tu-email@neskeep.com'], // 👈 Cambia esto por tu email real
```

**Cambia por:** El email donde quieres recibir los mensajes de contacto.

#### 2. Email de Remitente (Opcional pero Recomendado)

Por defecto usa: `onboarding@resend.dev`

Para usar tu dominio personalizado:

1. **Verifica tu dominio en Resend:**
   - Ve a: https://resend.com/domains
   - Agrega tu dominio
   - Configura los registros DNS (MX, TXT, CNAME)

2. **Actualiza el email "from" en** `server/api/contact.post.ts` línea ~56:
   ```typescript
   from: 'Neskeep Contacto <contacto@neskeep.com>', // 👈 Usa tu dominio verificado
   ```

---

## Variables de Entorno

El archivo `.env` ya está configurado con tu API key:

```bash
RESEND_API_KEY=re_PNiMb8yE_MAjqiLMPDadvhPnrq21TWYeB
```

⚠️ **Nunca compartas tu API key públicamente**

---

## Testing

### Prueba Local

1. Inicia el servidor de desarrollo:
   ```bash
   pnpm dev
   ```

2. Navega a: http://localhost:3000/#contacto

3. Completa el formulario y envíalo

4. Verifica que el email llegue a tu bandeja de entrada

### Ejemplo de Datos de Prueba

- **Nombre:** Juan Pérez
- **Email:** juan@ejemplo.com
- **Teléfono:** +52 55 1234 5678 (opcional)
- **Empresa:** Mi Empresa S.A. (opcional)
- **Presupuesto:** $15,000 - $30,000
- **Mensaje:** Me gustaría desarrollar una aplicación web...

---

## Límites de Resend

### Plan Gratuito
- **100 emails/día**
- **3,000 emails/mes**
- Perfecto para empezar y probar

### Si necesitas más
Considera actualizar a un plan de pago en: https://resend.com/pricing

---

## Solución de Problemas

### ❌ Error: "RESEND_API_KEY no está configurada"
- Verifica que el archivo `.env` existe en la raíz del proyecto
- Asegúrate de que contiene `RESEND_API_KEY=tu_key`
- Reinicia el servidor después de agregar variables de entorno

### ❌ Error: "Error al enviar email"
- Verifica que tu API key es válida en https://resend.com/api-keys
- Asegúrate de tener créditos disponibles
- Revisa la consola del servidor para más detalles

### ❌ El email no llega
- Revisa tu carpeta de spam
- Verifica que el email de destino es correcto
- Si usas dominio personalizado, verifica la configuración DNS

---

## Personalización del Template

Para modificar el diseño del email, edita: `server/utils/email-template.ts`

El template está construido con:
- HTML tables (compatible con todos los clientes de email)
- Inline CSS (necesario para compatibilidad)
- Colores de la marca Neskeep
- Diseño responsive

---

## Próximos Pasos Recomendados

1. ✅ Cambia el email de destino en el endpoint
2. ✅ Verifica tu dominio en Resend (opcional)
3. ✅ Prueba el formulario localmente
4. ✅ Despliega a producción
5. ✅ Monitorea los emails en el dashboard de Resend: https://resend.com/emails

---

¿Necesitas ayuda? Consulta la documentación de Resend: https://resend.com/docs

# Cómo Funciona la Integración con Go High Level

## ✅ Los Formularios YA Están Configurados

**Ambos formularios ya envían datos automáticamente a Go High Level:**

1. **Formulario de Entrada** (pop-up a los 3 segundos)
2. **Formulario de Cualificación** (el mismo que aparece al entrar)

## 📋 Datos que se Envían a GHL

Cuando un usuario completa el formulario, se envía automáticamente:

```json
{
  "nombre": "Carlos Martínez",
  "email": "carlos@empresa.com",
  "telefono": "+34 600 000 000",
  "facturacion": "500k-1M",
  "tipoNegocio": "saas",
  "nivelCompromiso": "ready",
  "source": "lead_form_modal",
  "timestamp": "2026-01-12T19:00:00Z",
  "url": "https://akbcapitalgroup.com"
}
```

## 🔧 Lo Único que Necesitas Hacer

### Paso 1: Crear Webhook en Go High Level

1. Accede a tu cuenta de Go High Level
2. Ve a **Settings** → **Workflows**
3. Click en **Create Workflow**
4. Selecciona **Webhook** como trigger
5. **Copia la URL del webhook** (algo como: `https://services.leadconnectorhq.com/hooks/ABC123XYZ`)

### Paso 2: Actualizar config.ts

Abre el archivo [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts) y pega tu URL:

```typescript
export const config = {
  goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',
  
  // 👇 PEGA AQUÍ TU URL DE WEBHOOK
  ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/TU_WEBHOOK_REAL',
  
  vslVideoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&rel=0',
  formSubmitUrl: '',
}
```

### Paso 3: Desplegar

```bash
git add .
git commit -m "Update GHL webhook URL"
git push origin main
```

Vercel desplegará automáticamente y los leads empezarán a llegar a GHL.

## 🧪 Cómo Probar Antes de Configurar GHL

### Opción 1: Usar webhook.site (Recomendado)

1. Ve a https://webhook.site
2. Copia la URL única que te dan
3. Pégala temporalmente en `config.ts`:
   ```typescript
   ghlWebhookUrl: 'https://webhook.site/tu-id-unico',
   ```
4. Completa el formulario en tu landing
5. Ve a webhook.site y verás los datos que se enviaron

### Opción 2: Revisar la Consola del Navegador

1. Abre tu landing page
2. Abre las DevTools (F12)
3. Ve a la pestaña **Console**
4. Completa el formulario
5. Verás los datos que se envían en la consola

## 🎯 Qué Pasa Cuando un Usuario Completa el Formulario

1. **Usuario completa el formulario** → Click en "Desbloquear Análisis"
2. **Datos se envían a GHL** → Automáticamente vía webhook
3. **Se guarda en localStorage** → Como backup
4. **Mensaje de éxito** → "¡Gracias! Mira el video..."
5. **Video se desbloquea** → Usuario puede verlo

## 🔄 Workflow Sugerido en Go High Level

Una vez que los datos lleguen a GHL, configura este workflow:

```
Webhook Recibido
    ↓
Crear/Actualizar Contacto
    ↓
Agregar Tags
  - "Landing AKB"
  - "Cualificado"
  - Facturación: "500k-1M" (ejemplo)
    ↓
Enviar Email de Bienvenida
    ↓
Asignar a Pipeline
  - "Nuevos Leads"
  - Etapa: "Contacto Inicial"
    ↓
Notificar al Equipo
  - Email a ventas
  - SMS al responsable
    ↓
Programar Seguimiento
  - Llamada en 24 horas
```

## ❓ Preguntas Frecuentes

**P: ¿Los datos se pierden si el webhook falla?**  
R: No, se guardan en localStorage del navegador como backup.

**P: ¿Puedo ver los datos antes de que lleguen a GHL?**  
R: Sí, usa webhook.site o revisa la consola del navegador.

**P: ¿Funciona con otros CRMs?**  
R: Sí, cualquier sistema que acepte webhooks (Zapier, Make, HubSpot, etc.)

**P: ¿Cómo sé si está funcionando?**  
R: Completa el formulario y verifica que el lead aparezca en GHL.

## 📞 Resumen

✅ **Los formularios YA funcionan** - Solo necesitas configurar la URL del webhook  
✅ **Los datos se envían automáticamente** - No necesitas código adicional  
✅ **Incluye toda la información** - Nombre, email, teléfono, cualificación completa  
✅ **Tiene fallback** - Se guarda localmente si el webhook falla  

**Solo te falta:** Crear el webhook en GHL y pegar la URL en `config.ts`

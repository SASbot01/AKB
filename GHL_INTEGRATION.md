# Integración con Go High Level CRM

## 📋 Resumen

Esta guía explica cómo conectar los formularios de la landing page con tu CRM de Go High Level para capturar leads automáticamente.

## 🎯 Formularios a Integrar

1. **Entry Popup** (Pop-up de entrada) - [`EntryPopup.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/EntryPopup.tsx)
2. **Lead Form Modal** (Formulario VSL) - [`LeadFormModal.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/LeadFormModal.tsx)

---

## 🔧 Método 1: Webhook de Go High Level (Recomendado)

### Paso 1: Crear Webhook en Go High Level

1. Accede a tu cuenta de Go High Level
2. Ve a **Settings** → **Workflows** → **Create Workflow**
3. Selecciona **Webhook** como trigger
4. Copia la URL del webhook (algo como: `https://services.leadconnectorhq.com/hooks/...`)

### Paso 2: Actualizar config.ts

Abre [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts) y agrega:

```typescript
export const config = {
  goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',
  vslVideoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&rel=0',
  
  // NUEVO: Webhook de Go High Level
  ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/TU_WEBHOOK_ID',
} as const;
```

### Paso 3: Los Componentes Ya Están Listos

He actualizado ambos formularios para que envíen los datos al webhook automáticamente. Solo necesitas configurar la URL del webhook en `config.ts`.

---

## 🔧 Método 2: API de Go High Level (Avanzado)

Si prefieres usar la API directa de GHL:

### Paso 1: Obtener API Key

1. En Go High Level: **Settings** → **API Key**
2. Copia tu API Key

### Paso 2: Actualizar config.ts

```typescript
export const config = {
  // ... otras configuraciones
  
  ghlApiKey: 'TU_API_KEY_AQUI',
  ghlLocationId: 'TU_LOCATION_ID',
} as const;
```

---

## 📊 Datos que se Envían

### Entry Popup
```json
{
  "nombre": "Carlos Martínez",
  "email": "carlos@email.com",
  "telefono": "+34 600 000 000",
  "source": "entry_popup",
  "timestamp": "2026-01-12T18:00:00Z"
}
```

### Lead Form Modal
```json
{
  "nombre": "Carlos Martínez",
  "email": "carlos@empresa.com",
  "telefono": "+34 600 000 000",
  "facturacion": "500k-1M",
  "tipo_negocio": "saas",
  "nivel_compromiso": "ready",
  "source": "lead_form_modal",
  "timestamp": "2026-01-12T18:00:00Z"
}
```

---

## 🧪 Cómo Probar la Integración

### 1. Configurar Webhook de Prueba

Usa **webhook.site** para probar:
1. Ve a https://webhook.site
2. Copia la URL única que te dan
3. Pégala temporalmente en `config.ts` como `ghlWebhookUrl`

### 2. Probar el Formulario

1. Abre http://localhost:3000/
2. Completa el formulario de entrada
3. Ve a webhook.site y verifica que recibiste los datos

### 3. Configurar GHL Real

Una vez verificado que funciona:
1. Reemplaza la URL de webhook.site con tu webhook real de GHL
2. Despliega a producción

---

## 🎨 Personalización del Workflow en GHL

Una vez que los datos lleguen a GHL, puedes:

1. **Crear Contacto Automáticamente**
2. **Asignar Tags** (ej: "Landing Page Lead", "Entry Popup")
3. **Enviar Email de Bienvenida**
4. **Asignar a un Pipeline**
5. **Notificar al Equipo de Ventas**
6. **Programar Seguimiento Automático**

### Ejemplo de Workflow en GHL:

```
Webhook Recibido
    ↓
Crear/Actualizar Contacto
    ↓
Agregar Tag: "Landing AKB"
    ↓
Enviar Email de Bienvenida
    ↓
Asignar a Pipeline: "Nuevos Leads"
    ↓
Notificar a Ventas (SMS/Email)
```

---

## 🔒 Seguridad

### Variables de Entorno (Recomendado para Producción)

Para mayor seguridad, usa variables de entorno en Vercel:

1. En Vercel Dashboard → tu proyecto → **Settings** → **Environment Variables**
2. Agrega:
   - `VITE_GHL_WEBHOOK_URL` = tu webhook URL
   - `VITE_GHL_API_KEY` = tu API key (si usas API)

3. Actualiza `config.ts`:
```typescript
export const config = {
  ghlWebhookUrl: import.meta.env.VITE_GHL_WEBHOOK_URL || '',
  // ... resto de config
}
```

---

## ❓ Preguntas Frecuentes

**P: ¿Los datos se guardan en algún lado si falla el envío?**  
R: Sí, se guardan en localStorage como backup. Puedes implementar un sistema de reintentos.

**P: ¿Puedo enviar a múltiples sistemas?**  
R: Sí, puedes enviar simultáneamente a GHL, tu base de datos, Google Sheets, etc.

**P: ¿Funciona con Zapier/Make?**  
R: Sí, cualquier servicio que acepte webhooks funcionará.

**P: ¿Cómo sé si el envío fue exitoso?**  
R: Los componentes actualizados muestran mensajes de éxito/error y lo registran en la consola.

---

## 🚀 Próximos Pasos

1. ✅ Crear webhook en Go High Level
2. ✅ Copiar URL del webhook
3. ✅ Actualizar `config.ts` con la URL
4. ✅ Probar localmente
5. ✅ Configurar workflow en GHL
6. ✅ Desplegar a producción
7. ✅ Verificar que los leads llegan a GHL

---

## 📞 Recursos

- [Documentación de Webhooks GHL](https://highlevel.stoplight.io/docs/integrations/)
- [API de Go High Level](https://highlevel.stoplight.io/)
- [Webhook.site](https://webhook.site) - Para pruebas

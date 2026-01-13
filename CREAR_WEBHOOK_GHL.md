# Guía Paso a Paso: Crear Webhook en Go High Level

## 📍 Cómo Encontrar y Crear el Webhook

### Paso 1: Acceder a Automations (Workflows)

1. **Inicia sesión** en tu cuenta de Go High Level
2. En el menú lateral izquierdo, busca **"Automations"** o **"Workflows"**
   - Puede aparecer como un icono de engranaje o rayo ⚡
3. Click en **"Automations"** o **"Workflows"**

### Paso 2: Crear Nuevo Workflow

1. Click en el botón **"+ New Workflow"** (esquina superior derecha)
2. Dale un nombre descriptivo, por ejemplo:
   - `Landing Page - Leads AKB`
   - `Formulario Web - Captura de Leads`

### Paso 3: Configurar el Trigger (Webhook)

1. En la pantalla de edición del workflow, verás **"Add Trigger"** o **"When this happens"**
2. Click en **"Add Trigger"**
3. Busca y selecciona **"Webhook"** o **"Inbound Webhook"**
   - Puede estar en la categoría "External" o "Integrations"

### Paso 4: Obtener la URL del Webhook

Una vez seleccionado el webhook, verás:

```
Webhook URL: https://services.leadconnectorhq.com/hooks/ABC123XYZ456...
```

1. **Copia esta URL completa** (hay un botón de copiar 📋)
2. **Guárdala** - la necesitarás para el siguiente paso

---

## 🔧 Configurar el Webhook en tu Landing Page

### Paso 5: Actualizar config.ts

1. Abre el archivo [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts)
2. Pega la URL del webhook que copiaste:

```typescript
export const config = {
    goHighLevelUrl: 'https://your-ghl-domain.com/booking-page',
    
    // 👇 PEGA AQUÍ LA URL QUE COPIASTE DE GHL
    ghlWebhookUrl: 'https://services.leadconnectorhq.com/hooks/ABC123XYZ456...',
    
    vslVideoUrl: 'https://www.youtube.com/embed/jfKfPfyJRdk?autoplay=1&controls=1&rel=0',
    formSubmitUrl: '',
} as const;
```

3. **Guarda el archivo**

---

## ⚙️ Configurar Acciones en el Workflow (Opcional pero Recomendado)

Después del trigger de webhook, agrega estas acciones:

### Acción 1: Create/Update Contact

1. Click en **"+"** debajo del webhook
2. Selecciona **"Create/Update Contact"**
3. Mapea los campos:
   - **First Name** → `{{webhook.nombre}}`
   - **Email** → `{{webhook.email}}`
   - **Phone** → `{{webhook.telefono}}`
   - **Custom Field: Facturación** → `{{webhook.facturacion}}`
   - **Custom Field: Tipo Negocio** → `{{webhook.tipoNegocio}}`
   - **Custom Field: Nivel Compromiso** → `{{webhook.nivelCompromiso}}`

### Acción 2: Add Tags

1. Click en **"+"**
2. Selecciona **"Add/Remove Tags"**
3. Agrega tags:
   - `Landing AKB`
   - `Cualificado`
   - `Nuevo Lead`

### Acción 3: Send Email (Opcional)

1. Click en **"+"**
2. Selecciona **"Send Email"**
3. Configura un email de bienvenida automático

### Acción 4: Add to Pipeline

1. Click en **"+"**
2. Selecciona **"Add to Opportunity/Pipeline"**
3. Selecciona tu pipeline de ventas
4. Asigna a la etapa inicial (ej: "Nuevo Lead")

### Acción 5: Internal Notification

1. Click en **"+"**
2. Selecciona **"Send Internal Notification"**
3. Notifica a tu equipo de ventas por email o SMS

---

## 🧪 Probar el Webhook

### Método 1: Desde Go High Level

1. En el editor del workflow, busca **"Test"** o **"Send Test"**
2. Click en el botón de test
3. Verás un ejemplo de datos que se enviarían

### Método 2: Desde tu Landing Page

1. Ve a tu landing page (local o producción)
2. Espera 3 segundos a que aparezca el formulario
3. Completa todos los campos
4. Click en "Desbloquear Análisis"
5. Ve a Go High Level → Contacts
6. Deberías ver el nuevo contacto creado

---

## 📊 Estructura de Datos que Recibirás

Cuando alguien complete el formulario, GHL recibirá:

```json
{
  "nombre": "Carlos Martínez",
  "email": "carlos@empresa.com",
  "telefono": "+34 600 000 000",
  "facturacion": "500k-1M",
  "tipoNegocio": "saas",
  "nivelCompromiso": "ready",
  "source": "lead_form_modal",
  "timestamp": "2026-01-13T02:00:00Z",
  "url": "https://akbcapitalgroup.com"
}
```

Puedes usar estos campos en tu workflow con:
- `{{webhook.nombre}}`
- `{{webhook.email}}`
- `{{webhook.telefono}}`
- etc.

---

## 🔍 Si No Encuentras "Automations" o "Workflows"

### Alternativa 1: Buscar en Settings

1. Ve a **Settings** (⚙️)
2. Busca **"Integrations"** o **"API & Webhooks"**
3. Puede haber una sección de **"Incoming Webhooks"**

### Alternativa 2: Usar la Búsqueda

1. En la barra superior, hay un campo de búsqueda 🔍
2. Escribe **"webhook"** o **"automation"**
3. Te mostrará dónde encontrarlo

### Alternativa 3: Menú Principal

Dependiendo de tu versión de GHL, puede estar en:
- **Marketing** → **Workflows**
- **Automation** → **Workflows**
- **Tools** → **Workflows**

---

## ❓ Solución de Problemas

### "No veo la opción de Webhook"

**Solución:** Puede que tu cuenta no tenga permisos. Verifica:
1. Que tienes rol de Admin o Agency
2. Que tu plan incluye Workflows/Automations
3. Contacta con el administrador de la cuenta

### "El webhook no recibe datos"

**Checklist:**
1. ✅ URL del webhook correctamente copiada en `config.ts`
2. ✅ Workflow está **activado** (toggle ON en GHL)
3. ✅ No hay errores en la consola del navegador
4. ✅ Formulario se completó correctamente

### "Los datos llegan pero no se crean contactos"

**Solución:**
1. Verifica que agregaste la acción "Create/Update Contact"
2. Revisa el mapeo de campos
3. Chequea los logs del workflow en GHL

---

## 🚀 Desplegar los Cambios

Una vez que hayas actualizado `config.ts` con la URL del webhook:

```bash
cd /Users/s4sf/Documents/akb-capital-group
git add config.ts
git commit -m "Update GHL webhook URL"
git push origin main
```

Vercel desplegará automáticamente en 1-2 minutos.

---

## 📞 Resumen Rápido

1. **GHL** → Automations → New Workflow
2. **Trigger** → Webhook → Copiar URL
3. **config.ts** → Pegar URL en `ghlWebhookUrl`
4. **Acciones** → Create Contact, Add Tags, etc.
5. **Activar** workflow
6. **Probar** completando el formulario
7. **Desplegar** → git push

---

## 🎯 Ubicaciones Comunes del Menú en GHL

Dependiendo de tu versión, busca en:

- **Sidebar izquierdo:**
  - Automations
  - Workflows  
  - Marketing → Workflows
  - Tools → Workflows

- **Si no lo ves:**
  - Settings → Integrations
  - Settings → API & Webhooks
  - Usa la búsqueda (🔍) y escribe "webhook"

---

¿Necesitas ayuda con algún paso específico? Puedo guiarte en tiempo real.

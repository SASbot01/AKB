# Guía de Configuración de Pixels de Tracking

## 📊 Resumen

Se ha integrado tracking de conversiones para Facebook Pixel y Google Ads. Cuando un usuario completa el formulario, se envían automáticamente eventos de conversión a ambas plataformas.

---

## 🔑 Claves/IDs Necesarios para el Equipo de Marketing

### 1. Facebook Pixel ID

**Dónde obtenerlo:**
1. Ve a [Facebook Events Manager](https://business.facebook.com/events_manager)
2. Selecciona tu Pixel
3. Copia el **Pixel ID** (número de 15-16 dígitos)

**Ejemplo:** `123456789012345`

**Dónde configurarlo:**
- Archivo: `config.ts`
- Variable: `facebookPixelId`
- Archivo: `index.html` (línea 96) - Reemplazar `YOUR_FACEBOOK_PIXEL_ID`

---

### 2. Google Ads Conversion ID

**Dónde obtenerlo:**
1. Ve a [Google Ads](https://ads.google.com)
2. Tools → Conversions → New Conversion Action
3. Copia el **Conversion ID** (formato: `AW-XXXXXXXXXX`)

**Ejemplo:** `AW-123456789`

**Dónde configurarlo:**
- Archivo: `config.ts`
- Variable: `googleAdsId`
- Archivo: `index.html` (línea 107, 111) - Reemplazar `AW-CONVERSION_ID`

---

### 3. Google Ads Lead Conversion Label

**Dónde obtenerlo:**
1. En la misma página de Conversions en Google Ads
2. Copia el **Conversion Label** para el evento de Lead

**Ejemplo:** `abc123XYZ456`

**Dónde configurarlo:**
- Archivo: `config.ts`
- Variable: `googleAdsLeadLabel`
- Archivo: `lib/tracking.ts` (línea 19) - Reemplazar `LEAD_CONVERSION_LABEL`

---

## 📝 Archivos a Actualizar

### 1. `/config.ts`

```typescript
// Tracking Pixels Configuration
facebookPixelId: '123456789012345', // ← Reemplazar con tu Pixel ID
googleAdsId: 'AW-123456789', // ← Reemplazar con tu Conversion ID
googleAdsLeadLabel: 'abc123XYZ456', // ← Reemplazar con tu Label
```

### 2. `/index.html`

**Línea 96:** Reemplazar `YOUR_FACEBOOK_PIXEL_ID` con tu Pixel ID
**Línea 107:** Reemplazar `AW-CONVERSION_ID` con tu Conversion ID
**Línea 111:** Reemplazar `AW-CONVERSION_ID` con tu Conversion ID

### 3. `/lib/tracking.ts`

**Línea 19:** Reemplazar `LEAD_CONVERSION_LABEL` con tu Label

---

## 🎯 Eventos que se Trackean

### Facebook Pixel

**Evento:** `Lead`
**Cuándo:** Cuando el usuario completa el formulario
**Datos enviados:**
- `content_name`: "Lead Form Submission"
- `content_category`: Tipo de negocio del lead
- `value`: Valor estimado del lead (basado en facturación)
- `currency`: EUR

### Google Ads

**Evento:** `conversion`
**Cuándo:** Cuando el usuario completa el formulario
**Datos enviados:**
- `send_to`: Tu Conversion ID + Label
- `value`: Valor estimado del lead
- `currency`: EUR

---

## 💰 Valoración de Leads

El sistema asigna automáticamente un valor a cada lead basado en su facturación:

| Facturación Anual | Valor del Lead |
|-------------------|----------------|
| < 100k€           | 50€            |
| 100k - 500k€      | 100€           |
| 500k - 1M€        | 200€           |
| 1M - 5M€          | 500€           |
| > 5M€             | 1,000€         |

---

## ✅ Verificación

### Comprobar Facebook Pixel

1. Instala [Facebook Pixel Helper](https://chrome.google.com/webstore/detail/facebook-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) (Chrome Extension)
2. Ve a tu landing page
3. Completa el formulario
4. Verifica que aparezca el evento "Lead" en la extensión

### Comprobar Google Ads

1. Ve a Google Ads → Tools → Conversions
2. Verifica que aparezcan conversiones en tiempo real
3. Puede tardar hasta 24 horas en aparecer en reportes

---

## 🔧 Configuración en Vercel (Producción)

**IMPORTANTE:** Los IDs también deben configurarse como variables de entorno en Vercel:

1. Ve a Vercel → Tu proyecto → Settings → Environment Variables
2. Agrega estas variables:

```
VITE_FACEBOOK_PIXEL_ID=123456789012345
VITE_GOOGLE_ADS_ID=AW-123456789
VITE_GOOGLE_ADS_LEAD_LABEL=abc123XYZ456
```

3. Redeploy el proyecto

---

## 📞 Resumen para el Equipo de Marketing

**Necesitamos 3 valores:**

1. **Facebook Pixel ID** (15-16 dígitos)
   - Obtener de: Facebook Events Manager
   
2. **Google Ads Conversion ID** (formato: AW-XXXXXXXXXX)
   - Obtener de: Google Ads → Conversions
   
3. **Google Ads Lead Label** (alfanumérico)
   - Obtener de: Google Ads → Conversions → Lead Action

**Enviar estos valores para configurarlos en:**
- Código fuente (`config.ts`, `index.html`, `lib/tracking.ts`)
- Variables de entorno de Vercel

---

## 🎉 Beneficios

✅ **Tracking automático** de todas las conversiones  
✅ **Optimización de campañas** con datos reales  
✅ **Retargeting** de usuarios que no convirtieron  
✅ **Valoración de leads** para ROI preciso  
✅ **Reportes en tiempo real** en Facebook y Google Ads  

---

## 📊 Datos que se Capturan

Cada vez que un usuario completa el formulario, se envía:
- Nombre
- Email
- Teléfono
- Facturación anual
- Tipo de negocio
- Nivel de compromiso
- Valor estimado del lead
- URL de origen

Estos datos permiten crear audiencias personalizadas y optimizar las campañas publicitarias.

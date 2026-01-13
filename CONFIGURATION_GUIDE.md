# Guía de Configuración - AKB Capital Group

## 🎯 Nuevas Funcionalidades Implementadas

### 1. Pop-up de Entrada Obligatorio
Al entrar a la web, los usuarios verán un pop-up que deben completar para acceder al contenido.

**Características:**
- ✅ Aparece automáticamente 0.5 segundos después de cargar la página
- ✅ Solo se muestra una vez (usa localStorage)
- ✅ Campos: Nombre, Email, Teléfono
- ✅ Diseño premium que coincide con la landing
- ✅ No se puede cerrar sin completar el formulario

**Resetear para pruebas:**
```javascript
// En la consola del navegador:
localStorage.removeItem('akb_entry_submitted');
// Recargar la página
```

---

### 2. Video VSL Configurable
El video de la landing ahora es configurable desde un archivo central.

**Cómo cambiar el video:**

1. Abre el archivo [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts)

2. Actualiza la URL del video:

```typescript
export const config = {
  // ... otras configuraciones
  
  // Para YouTube:
  vslVideoUrl: 'https://www.youtube.com/embed/TU_VIDEO_ID?autoplay=1&controls=1&rel=0',
  
  // Para Vimeo:
  vslVideoUrl: 'https://player.vimeo.com/video/TU_VIDEO_ID?autoplay=1',
  
  // Para video autoalojado:
  vslVideoUrl: '/ruta/al/video.mp4',
}
```

**Opciones de hosting recomendadas:**
- **YouTube** (Gratis, fácil) - Recomendado para empezar
- **Vimeo** (Profesional, sin anuncios) - Mejor para VSL profesionales
- **Wistia** (Analytics avanzados) - Para seguimiento detallado
- **Autoalojado** (Control total) - Requiere más configuración

---

### 3. Botón CTA Final - Go High Level

Un botón prominente al final de la página que redirige a tu sistema de reservas.

**Cómo configurar la URL de Go High Level:**

1. Abre el archivo [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts)

2. Actualiza la URL:

```typescript
export const config = {
  // Reemplaza con tu URL real de Go High Level
  goHighLevelUrl: 'https://tu-subdominio.gohighlevel.com/widget/booking/tu-calendario',
  
  // ... otras configuraciones
}
```

**Dónde encontrar tu URL de GHL:**
1. Accede a tu cuenta de Go High Level
2. Ve a **Calendarios** → Selecciona tu calendario
3. Click en **Compartir** o **Embed**
4. Copia la URL del calendario
5. Pégala en `config.ts`

---

## 📁 Archivos Modificados

### Nuevos Archivos
- [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts) - Configuración central
- [`components/EntryPopup.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/EntryPopup.tsx) - Pop-up de entrada
- [`components/FinalCTA.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/FinalCTA.tsx) - Botón CTA final

### Archivos Modificados
- [`App.tsx`](file:///Users/s4sf/Documents/akb-capital-group/App.tsx) - Integración del pop-up y CTA
- [`components/Hero.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/Hero.tsx) - Video configurable

---

## 🧪 Cómo Probar Localmente

### 1. Iniciar el servidor de desarrollo
```bash
cd /Users/s4sf/Documents/akb-capital-group
npm run dev
```

### 2. Abrir en el navegador
Visita: http://localhost:3000/

### 3. Probar el Pop-up de Entrada
- ✅ Debería aparecer automáticamente
- ✅ Completa el formulario
- ✅ Verifica que se cierra y no vuelve a aparecer
- ✅ Para probarlo de nuevo: Abre la consola (F12) y ejecuta:
  ```javascript
  localStorage.clear();
  location.reload();
  ```

### 4. Probar el Video VSL
- ✅ Después de completar el pop-up de entrada
- ✅ El video debería estar visible en la sección Hero
- ✅ Verifica que se reproduce correctamente

### 5. Probar el Botón CTA Final
- ✅ Desplázate hasta el final de la página
- ✅ Verifica que el botón "Si ya lo tienes claro, clica aquí" es visible
- ✅ Click en el botón
- ✅ Debería redirigir a la URL configurada en `config.ts`

---

## 🚀 Desplegar a Producción

### Paso 1: Configurar URLs de Producción

Antes de desplegar, asegúrate de actualizar [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts) con:
- ✅ URL real de Go High Level
- ✅ URL real del video VSL

### Paso 2: Commit y Push a GitHub

```bash
cd /Users/s4sf/Documents/akb-capital-group

# Agregar todos los cambios
git add .

# Crear commit
git commit -m "Add entry popup, VSL configuration, and GHL CTA button"

# Subir a GitHub
git push origin main
```

### Paso 3: Vercel Desplegará Automáticamente

Vercel detectará el push y desplegará automáticamente:
- ✅ Ve a https://vercel.com/dashboard
- ✅ Verifica que el deployment esté en progreso
- ✅ Espera a que termine (1-2 minutos)
- ✅ Visita https://akbcapitalgroup.com

---

## 🔧 Personalización Adicional

### Cambiar el Texto del Pop-up

Edita [`components/EntryPopup.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/EntryPopup.tsx):

```typescript
<h2 className="text-2xl font-display font-bold text-white mb-2">
  Acceso Exclusivo  {/* ← Cambia este texto */}
</h2>
<p className="text-akb-100 text-sm">
  Rellena tus datos para ponerte en contacto con nosotros  {/* ← Y este */}
</p>
```

### Cambiar el Texto del Botón CTA

Edita [`components/FinalCTA.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/FinalCTA.tsx):

```typescript
<span>Si ya lo tienes claro, clica aquí</span>  {/* ← Cambia este texto */}
```

### Cambiar el Delay del Pop-up

Edita [`App.tsx`](file:///Users/s4sf/Documents/akb-capital-group/App.tsx):

```typescript
setTimeout(() => {
  setShowEntryPopup(true);
}, 500);  // ← Cambia 500 (milisegundos) al delay que prefieras
```

---

## 📊 Integración con Sistemas Externos

### Conectar el Formulario a un CRM

Actualmente, los datos del formulario se guardan en localStorage. Para enviarlos a un CRM:

1. Abre [`components/EntryPopup.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/EntryPopup.tsx)

2. Modifica la función `handleSubmit`:

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  
  try {
    // Enviar a tu CRM/Webhook
    await fetch('https://tu-webhook-url.com/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    
    localStorage.setItem('akb_entry_submitted', 'true');
    alert("¡Bienvenido! Gracias por registrarte.");
    onSubmit();
  } catch (error) {
    alert("Error al enviar. Por favor, intenta de nuevo.");
  } finally {
    setLoading(false);
  }
};
```

### Servicios Compatibles
- ✅ Go High Level (Webhook)
- ✅ Zapier
- ✅ Make (Integromat)
- ✅ ActiveCampaign
- ✅ HubSpot
- ✅ Cualquier API REST

---

## ❓ Preguntas Frecuentes

**P: ¿El pop-up aparece en móviles?**  
R: Sí, está completamente responsive y se adapta a todos los dispositivos.

**P: ¿Puedo deshabilitar el pop-up temporalmente?**  
R: Sí, en [`App.tsx`](file:///Users/s4sf/Documents/akb-capital-group/App.tsx), comenta la línea:
```typescript
// <EntryPopup isOpen={showEntryPopup} onSubmit={handleEntrySubmit} />
```

**P: ¿Cómo cambio el video después de subir a producción?**  
R: Actualiza [`config.ts`](file:///Users/s4sf/Documents/akb-capital-group/config.ts), haz commit y push. Vercel desplegará automáticamente.

**P: ¿El botón CTA se puede personalizar más?**  
R: Sí, edita [`components/FinalCTA.tsx`](file:///Users/s4sf/Documents/akb-capital-group/components/FinalCTA.tsx) para cambiar colores, texto, iconos, etc.

---

## 📞 Soporte

Si necesitas ayuda adicional, revisa:
- Documentación de Vercel: https://vercel.com/docs
- Documentación de Go High Level: https://help.gohighlevel.com

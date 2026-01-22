# Configurar Variables de Entorno en Vercel

## 🚀 Paso Final para Producción

Vercel ya está desplegando automáticamente, pero necesita las variables de entorno de Supabase para que los formularios funcionen en producción.

---

## 📋 Pasos para Configurar

### 1. Acceder a Vercel

1. Ve a https://vercel.com
2. Inicia sesión
3. Selecciona tu proyecto **"akb-capital-group"** o **"AKB"**

### 2. Ir a Settings

1. Click en **"Settings"** (menú superior)
2. En el menú lateral, click en **"Environment Variables"**

### 3. Agregar Variables de Entorno

Agrega estas **DOS** variables:

#### Variable 1: VITE_SUPABASE_URL

- **Key**: `VITE_SUPABASE_URL`
- **Value**: `https://vssvmjwmacjwtgqtduwr.supabase.co`
- **Environments**: Selecciona **Production**, **Preview**, y **Development**
- Click en **"Save"**

#### Variable 2: VITE_SUPABASE_ANON_KEY

- **Key**: `VITE_SUPABASE_ANON_KEY`
- **Value**: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzc3ZtandtYWNqd3RncXRkdXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNTYwMjQsImV4cCI6MjA4MzgzMjAyNH0.qoO0AhRKwCkl7EF577RjF7HqiUEMhsvOZ2DDMoIIEbQ`
- **Environments**: Selecciona **Production**, **Preview**, y **Development**
- Click en **"Save"**

### 4. Redesplegar (Redeploy)

Después de agregar las variables:

1. Ve a la pestaña **"Deployments"**
2. Busca el deployment más reciente (commit: "Replace GHL with Supabase integration")
3. Click en los **tres puntos** (...) al lado derecho
4. Click en **"Redeploy"**
5. Confirma el redeploy

---

## ✅ Verificar que Funciona

Una vez que el redeploy termine (1-2 minutos):

### 1. Probar en Producción

1. Ve a https://akbcapitalgroup.com
2. Espera 3 segundos → Aparecerá el formulario
3. Completa todos los campos
4. Click en "Desbloquear Análisis"

### 2. Verificar en Supabase

1. Ve a Supabase → Table Editor → `leads`
2. Deberías ver el nuevo registro
3. Verifica que todos los campos se guardaron correctamente

---

## 🔍 Solución de Problemas

### "Supabase not configured" en Producción

**Causa:** Variables de entorno no configuradas o mal escritas  
**Solución:**
1. Verifica que los nombres sean exactos: `VITE_SUPABASE_URL` y `VITE_SUPABASE_ANON_KEY`
2. Verifica que seleccionaste "Production" en Environments
3. Haz un redeploy después de agregar las variables

### Los Datos No Llegan a Supabase

**Checklist:**
1. ✅ Variables de entorno agregadas en Vercel
2. ✅ Redeploy realizado después de agregar variables
3. ✅ Deployment completado exitosamente
4. ✅ No hay errores en la consola del navegador (F12)

---

## 📊 Resumen

**Variables a Agregar en Vercel:**

```
VITE_SUPABASE_URL=https://vssvmjwmacjwtgqtduwr.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZzc3ZtandtYWNqd3RncXRkdXdyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjgyNTYwMjQsImV4cCI6MjA4MzgzMjAyNH0.qoO0AhRKwCkl7EF577RjF7HqiUEMhsvOZ2DDMoIIEbQ
```

**Pasos:**
1. Vercel → Settings → Environment Variables
2. Agregar las dos variables
3. Seleccionar Production, Preview, Development
4. Guardar
5. Deployments → Redeploy el último deployment
6. Probar en https://akbcapitalgroup.com

---

¡Listo! Una vez configuradas las variables y redeployado, los formularios guardarán automáticamente en Supabase.

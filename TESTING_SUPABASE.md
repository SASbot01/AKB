# Cómo Probar la Integración con Supabase

## 🧪 Prueba Local (Recomendado)

### Paso 1: Reiniciar el Servidor de Desarrollo

El servidor necesita reiniciarse para cargar las nuevas variables de entorno:

```bash
# Detener el servidor actual (Ctrl+C en la terminal donde corre)
# Luego ejecutar:
npm run dev
```

### Paso 2: Probar el Formulario

1. **Abre** http://localhost:3000
2. **Espera 3 segundos** → Aparecerá el formulario
3. **Completa todos los campos**:
   - Nombre: Test Usuario
   - Email: test@test.com
   - Teléfono: +34 600 000 000
   - Facturación: 500k-1M
   - Tipo de Negocio: SaaS / Software
   - Nivel de Compromiso: Listo para actuar
4. **Click en "Desbloquear Análisis"**

### Paso 3: Verificar en Supabase

1. Ve a https://supabase.com
2. Abre tu proyecto "AKB Capital Group"
3. Click en **"Table Editor"** (menú lateral)
4. Click en la tabla **"leads"**
5. **Deberías ver** el registro que acabas de crear

### Paso 4: Verificar en la Consola del Navegador

1. Abre las DevTools (F12)
2. Ve a la pestaña **"Console"**
3. Deberías ver: `Lead saved to Supabase: [...]`

---

## ✅ Qué Esperar

### Si Todo Funciona Correctamente:

✅ Mensaje de éxito: "¡Gracias por rellenar el formulario!"  
✅ Video se desbloquea  
✅ En Supabase → Table Editor → `leads` → Nuevo registro visible  
✅ En consola: "Lead saved to Supabase"  

### Si Hay un Error:

⚠️ El formulario sigue funcionando (guarda en localStorage)  
⚠️ En consola verás: "Error saving to Supabase: [mensaje de error]"  
⚠️ Revisa que las credenciales en `.env.local` sean correctas  

---

## 🔍 Solución de Problemas

### Error: "Supabase not configured"

**Causa:** Variables de entorno no cargadas  
**Solución:** 
1. Verifica que `.env.local` existe
2. Reinicia el servidor (`npm run dev`)

### Error: "Failed to fetch" o "Network error"

**Causa:** Problema de conexión con Supabase  
**Solución:**
1. Verifica que la URL de Supabase es correcta
2. Verifica que tienes conexión a internet
3. Revisa en Supabase → Project Settings → API que la URL sea la correcta

### Error: "Row Level Security policy violation"

**Causa:** Las políticas RLS están bloqueando la inserción  
**Solución:**
1. Ve a Supabase → SQL Editor
2. Ejecuta:
```sql
-- Verificar que la política existe
SELECT * FROM pg_policies WHERE tablename = 'leads';

-- Si no existe, crearla:
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);
```

### Los Datos No Aparecen en Supabase

**Checklist:**
1. ✅ ¿Ejecutaste el SQL schema completo?
2. ✅ ¿La tabla `leads` existe?
3. ✅ ¿Las credenciales en `.env.local` son correctas?
4. ✅ ¿Reiniciaste el servidor después de crear `.env.local`?
5. ✅ ¿Ves algún error en la consola del navegador?

---

## 📊 Ver los Leads en Supabase

### Opción 1: Table Editor (Visual)

1. Supabase → **Table Editor** → **leads**
2. Verás todos los registros en una tabla
3. Puedes filtrar, ordenar, buscar
4. Click en cualquier fila para ver detalles

### Opción 2: SQL Editor (Consultas)

1. Supabase → **SQL Editor** → **New query**
2. Ejecuta consultas:

```sql
-- Ver todos los leads
SELECT * FROM leads ORDER BY created_at DESC;

-- Ver solo los leads de hoy
SELECT * FROM leads 
WHERE created_at::date = CURRENT_DATE
ORDER BY created_at DESC;

-- Ver leads urgentes
SELECT * FROM leads 
WHERE nivel_compromiso = 'urgent'
ORDER BY created_at DESC;

-- Ver resumen por día
SELECT * FROM leads_summary;
```

### Opción 3: Exportar a CSV

1. Table Editor → leads
2. Click en **"..."** (menú)
3. Click en **"Export to CSV"**
4. Se descargará un archivo CSV con todos los datos

---

## 🚀 Siguiente Paso: Desplegar a Producción

Una vez que confirmes que funciona localmente, necesitamos:

1. **Configurar variables de entorno en Vercel**
2. **Desplegar el código actualizado**

¿Quieres que proceda con el despliegue?

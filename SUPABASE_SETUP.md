# Guía de Configuración de Supabase

## 📋 Paso 1: Crear Proyecto en Supabase

### 1.1 Crear Cuenta
1. Ve a https://supabase.com
2. Click en **"Start your project"**
3. Inicia sesión con GitHub, Google, o email

### 1.2 Crear Nuevo Proyecto
1. Click en **"New Project"**
2. Completa los datos:
   - **Name**: `AKB Capital Group`
   - **Database Password**: Genera una contraseña segura (guárdala)
   - **Region**: Elige la más cercana a España (ej: `Europe West (London)`)
   - **Pricing Plan**: `Free` (suficiente para empezar)
3. Click en **"Create new project"**
4. Espera 2-3 minutos mientras se crea el proyecto

---

## 📊 Paso 2: Crear la Tabla de Leads

### 2.1 Acceder al SQL Editor
1. En el menú lateral, click en **"SQL Editor"**
2. Click en **"New query"**

### 2.2 Ejecutar el Script SQL
1. **Copia todo el contenido** del archivo [`supabase-schema.sql`](file:///Users/s4sf/Documents/akb-capital-group/supabase-schema.sql)
2. **Pégalo** en el editor SQL
3. Click en **"Run"** (esquina inferior derecha)
4. Deberías ver: `Success. No rows returned`

### 2.3 Verificar la Tabla
1. En el menú lateral, click en **"Table Editor"**
2. Deberías ver la tabla **`leads`** creada
3. Click en ella para ver su estructura

---

## 🔑 Paso 3: Obtener Credenciales

### 3.1 Acceder a Settings
1. En el menú lateral, click en **"Project Settings"** (icono de engranaje)
2. Click en **"API"**

### 3.2 Copiar Credenciales
Necesitas copiar estos dos valores:

**1. Project URL:**
```
https://tu-proyecto-id.supabase.co
```

**2. Anon/Public Key:**
```
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS...
```

⚠️ **IMPORTANTE**: Copia la **`anon` key** (la pública), NO la `service_role` key.

---

## 💻 Paso 4: Configurar en tu Proyecto

### 4.1 Crear Archivo de Variables de Entorno

Ya existe el archivo `.env.local`, vamos a actualizarlo:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=https://tu-proyecto-id.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

### 4.2 Instalar Dependencia de Supabase

Ejecuta en tu terminal:

```bash
cd /Users/s4sf/Documents/akb-capital-group
npm install @supabase/supabase-js
```

---

## ✅ Verificación

### Comprobar que Todo Funciona

1. **Tabla creada**: Ve a Supabase → Table Editor → `leads`
2. **Credenciales copiadas**: Verifica que tienes URL y Anon Key
3. **Variables configuradas**: Archivo `.env.local` actualizado
4. **Dependencia instalada**: `@supabase/supabase-js` en `package.json`

---

## 📊 Dashboard de Supabase

Una vez configurado, podrás:

- **Ver todos los leads** en tiempo real (Table Editor → leads)
- **Filtrar y buscar** por cualquier campo
- **Exportar a CSV** cuando quieras
- **Ver estadísticas** con la vista `leads_summary`
- **Configurar alertas** (opcional)

---

## 🔐 Seguridad

El schema incluye:

✅ **Row Level Security (RLS)** activado  
✅ **Políticas de acceso** configuradas  
✅ Solo inserciones públicas (para el formulario)  
✅ Solo lecturas autenticadas (para ti)  

Esto significa:
- ✅ Cualquiera puede enviar el formulario
- ❌ Nadie puede ver los leads sin autenticarse
- ❌ Nadie puede modificar o eliminar datos

---

## 📞 Resumen de lo que Necesito

Para continuar con la integración, necesito que me proporciones:

1. ✅ **VITE_SUPABASE_URL** (Project URL)
2. ✅ **VITE_SUPABASE_ANON_KEY** (Anon/Public Key)

Una vez tengas estos datos, los agregaré al código y desplegaremos.

---

## 🎯 Próximos Pasos

1. Crear proyecto en Supabase
2. Ejecutar SQL para crear tabla
3. Copiar credenciales (URL + Anon Key)
4. Pasarme las credenciales
5. Yo actualizo el código
6. Desplegamos
7. ¡Listo! Los formularios se guardarán automáticamente

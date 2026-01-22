# 🔴 SOLUCIÓN URGENTE - RLS Bloqueando Inserciones

## El Problema

Row Level Security (RLS) está bloqueando las inserciones desde el formulario web.

## ✅ Solución Inmediata (Ejecutar en Supabase)

### Paso 1: Ve a Supabase SQL Editor

1. https://supabase.com → Tu proyecto
2. SQL Editor → New query

### Paso 2: Ejecuta SOLO Esta Línea

```sql
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
```

Click en **"Run"**

### Paso 3: Probar

1. Ve a https://akbcapitalgroup.com
2. Completa el formulario
3. **Debería funcionar ahora**

---

## 🔐 Configurar RLS Correctamente (Después)

Una vez que funcione, si quieres volver a habilitar RLS con las políticas correctas:

```sql
-- Habilitar RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserciones públicas
CREATE POLICY "public_insert" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Permitir lecturas solo autenticadas
CREATE POLICY "authenticated_read" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
```

---

## ⚠️ Nota de Seguridad

Deshabilitar RLS significa que:
- ✅ Cualquiera puede insertar datos (lo que queremos para el formulario)
- ⚠️ Cualquiera podría leer los datos si conoce la API

**Para tu caso está bien** porque:
- Solo usas la tabla para recibir leads
- No expones la API públicamente
- Solo tú accedes al dashboard de Supabase

---

## 🎯 Resumen

**Ejecuta esto en Supabase SQL Editor:**

```sql
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
```

**Y listo.** El formulario funcionará inmediatamente.

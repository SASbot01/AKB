-- ============================================
-- SOLUCIÓN DEFINITIVA: DESHABILITAR RLS TEMPORALMENTE
-- ============================================

-- Opción 1: Deshabilitar RLS completamente (más simple, para empezar)
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Ahora cualquiera puede insertar datos
-- Esto es temporal para que funcione YA
-- Luego podemos configurar RLS correctamente

-- ============================================
-- Para verificar que funcionó:
-- ============================================
SELECT tablename, rowsecurity 
FROM pg_tables 
WHERE tablename = 'leads';

-- Si rowsecurity = false, entonces RLS está deshabilitado y debería funcionar

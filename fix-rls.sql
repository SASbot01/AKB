-- ============================================
-- ARREGLAR ROW LEVEL SECURITY
-- Ejecuta este SQL en Supabase para permitir inserciones públicas
-- ============================================

-- Paso 1: Eliminar políticas existentes (por si hay conflictos)
DROP POLICY IF EXISTS "Allow public inserts" ON leads;
DROP POLICY IF EXISTS "Allow authenticated reads" ON leads;
DROP POLICY IF EXISTS "Allow authenticated updates" ON leads;

-- Paso 2: Deshabilitar RLS temporalmente para verificar
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;

-- Paso 3: Volver a habilitar RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Paso 4: Crear política correcta para permitir inserciones públicas
CREATE POLICY "Enable insert for all users" ON leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Paso 5: Crear política para permitir lecturas solo a usuarios autenticados
CREATE POLICY "Enable read for authenticated users only" ON leads
  FOR SELECT
  TO authenticated
  USING (true);

-- Paso 6: Verificar que las políticas se crearon correctamente
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual, with_check
FROM pg_policies
WHERE tablename = 'leads';

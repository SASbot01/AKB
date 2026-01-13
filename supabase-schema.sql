-- ============================================
-- SUPABASE DATABASE SCHEMA
-- AKB Capital Group - Lead Capture System
-- ============================================

-- Crear tabla para almacenar leads
CREATE TABLE IF NOT EXISTS leads (
  -- Identificador único
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Datos del contacto
  nombre TEXT NOT NULL,
  email TEXT NOT NULL,
  telefono TEXT NOT NULL,
  
  -- Datos de cualificación
  facturacion TEXT,
  tipo_negocio TEXT,
  nivel_compromiso TEXT,
  
  -- Metadata
  source TEXT DEFAULT 'lead_form_modal',
  url TEXT,
  
  -- Timestamps
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ============================================
-- ÍNDICES para mejorar rendimiento
-- ============================================

-- Índice para búsquedas por email (evitar duplicados)
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);

-- Índice para ordenar por fecha de creación
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- Índice para filtrar por nivel de compromiso
CREATE INDEX IF NOT EXISTS idx_leads_nivel_compromiso ON leads(nivel_compromiso);

-- Índice para filtrar por facturación
CREATE INDEX IF NOT EXISTS idx_leads_facturacion ON leads(facturacion);

-- ============================================
-- ROW LEVEL SECURITY (RLS)
-- ============================================

-- Habilitar RLS en la tabla
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política: Permitir inserciones públicas (desde la landing page)
CREATE POLICY "Allow public inserts" ON leads
  FOR INSERT
  WITH CHECK (true);

-- Política: Permitir lecturas solo a usuarios autenticados
-- (para que solo tú puedas ver los leads desde el dashboard)
CREATE POLICY "Allow authenticated reads" ON leads
  FOR SELECT
  USING (auth.role() = 'authenticated');

-- Política: Permitir actualizaciones solo a usuarios autenticados
CREATE POLICY "Allow authenticated updates" ON leads
  FOR UPDATE
  USING (auth.role() = 'authenticated');

-- ============================================
-- FUNCIÓN para actualizar updated_at automáticamente
-- ============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Trigger para actualizar updated_at en cada UPDATE
CREATE TRIGGER update_leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- ============================================
-- VISTA para análisis de leads
-- ============================================

CREATE OR REPLACE VIEW leads_summary AS
SELECT 
  DATE(created_at) as fecha,
  COUNT(*) as total_leads,
  COUNT(DISTINCT email) as leads_unicos,
  COUNT(CASE WHEN nivel_compromiso = 'urgent' THEN 1 END) as urgentes,
  COUNT(CASE WHEN nivel_compromiso = 'ready' THEN 1 END) as listos,
  COUNT(CASE WHEN facturacion LIKE '%5M%' OR facturacion LIKE '%1M%' THEN 1 END) as alto_valor
FROM leads
GROUP BY DATE(created_at)
ORDER BY fecha DESC;

-- ============================================
-- COMENTARIOS en las columnas
-- ============================================

COMMENT ON TABLE leads IS 'Tabla principal para almacenar leads capturados desde la landing page';
COMMENT ON COLUMN leads.id IS 'Identificador único del lead';
COMMENT ON COLUMN leads.nombre IS 'Nombre completo del contacto';
COMMENT ON COLUMN leads.email IS 'Email del contacto (usado como identificador único)';
COMMENT ON COLUMN leads.telefono IS 'Número de teléfono o WhatsApp';
COMMENT ON COLUMN leads.facturacion IS 'Rango de facturación anual (100k-500k, 500k-1M, etc.)';
COMMENT ON COLUMN leads.tipo_negocio IS 'Tipo de negocio (saas, ecommerce, crypto, etc.)';
COMMENT ON COLUMN leads.nivel_compromiso IS 'Nivel de compromiso (info, considering, ready, urgent)';
COMMENT ON COLUMN leads.source IS 'Origen del lead (lead_form_modal, entry_popup, etc.)';
COMMENT ON COLUMN leads.url IS 'URL desde donde se envió el formulario';
COMMENT ON COLUMN leads.created_at IS 'Fecha y hora de creación del registro';
COMMENT ON COLUMN leads.updated_at IS 'Fecha y hora de última actualización';

-- ============================================
-- DATOS DE EJEMPLO (opcional - para testing)
-- ============================================

-- Descomentar para insertar datos de prueba
/*
INSERT INTO leads (nombre, email, telefono, facturacion, tipo_negocio, nivel_compromiso, url)
VALUES 
  ('Carlos Martínez', 'carlos@test.com', '+34 600 000 001', '500k-1M', 'saas', 'ready', 'https://akbcapitalgroup.com'),
  ('Ana García', 'ana@test.com', '+34 600 000 002', '1M-5M', 'ecommerce', 'urgent', 'https://akbcapitalgroup.com'),
  ('Luis Rodríguez', 'luis@test.com', '+34 600 000 003', '100k-500k', 'crypto', 'considering', 'https://akbcapitalgroup.com');
*/

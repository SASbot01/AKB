# Test del Webhook - Pasos Rápidos

## 🧪 Enviar Datos de Prueba al Webhook

### Opción 1: Desde tu Landing Page (Recomendado)

1. **Abre tu landing page**: https://akbcapitalgroup.com
2. **Espera 3 segundos** → Aparecerá el formulario
3. **Completa el formulario** con datos de prueba:
   - Nombre: Test Usuario
   - Email: test@test.com
   - Teléfono: +34 600 000 000
   - Facturación: 500k-1M
   - Tipo de Negocio: SaaS / Software
   - Nivel de Compromiso: Listo para actuar
4. **Click en "Desbloquear Análisis"**

### Opción 2: Usar cURL (Desde Terminal)

Si quieres enviar un test inmediato, ejecuta esto en tu terminal:

```bash
curl -X POST https://services.leadconnectorhq.com/hooks/Xnbqlch5urDqQ4LWzSY1/webhook-trigger/ab855ad0-e6ea-4d53-99d6-b293f6017c01 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Carlos Test",
    "email": "test@empresa.com",
    "telefono": "+34 600 000 000",
    "facturacion": "500k-1M",
    "tipoNegocio": "saas",
    "nivelCompromiso": "ready",
    "source": "test_manual",
    "timestamp": "2026-01-13T02:25:00Z",
    "url": "https://akbcapitalgroup.com"
  }'
```

---

## ✅ Después de Enviar el Test

1. **Vuelve a Go High Level** → Editar el webhook trigger
2. En **"Mapping Reference"**, click en **"Check for new requests"**
3. Deberías ver los datos que acabas de enviar
4. **Selecciona esos datos** como Mapping Reference
5. **Guarda** el trigger

---

## 🎯 Alternativa: Pegar JSON Manualmente

Si ves un campo de texto o botón "Add Custom Data":

1. Click en ese botón
2. Pega este JSON:

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

3. Guarda

---

**Recomendación:** Usa la **Opción 2 (cURL)** - es la más rápida para hacer el test ahora mismo.

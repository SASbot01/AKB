# Prompt para la IA de Go High Level

## 📋 Copia y Pega Este Prompt Exacto

```
Necesito configurar un workflow completo para capturar leads desde mi landing page web. El webhook ya está creado y recibiendo datos. Configura lo siguiente:

DATOS QUE RECIBO EN EL WEBHOOK:
- nombre (texto)
- email (email)
- telefono (teléfono)
- facturacion (texto: "100k-500k", "500k-1M", "1M-5M", etc.)
- tipoNegocio (texto: "saas", "ecommerce", "crypto", etc.)
- nivelCompromiso (texto: "info", "considering", "ready", "urgent")
- source (texto: "lead_form_modal")
- timestamp (fecha/hora)
- url (texto: URL de origen)

ACCIONES QUE NECESITO:

1. CREATE/UPDATE CONTACT:
   - First Name: usar campo "nombre"
   - Email: usar campo "email"
   - Phone: usar campo "telefono"
   - Crear campos personalizados para: facturacion, tipoNegocio, nivelCompromiso
   - Guardar source y timestamp como campos personalizados

2. ADD TAGS:
   - Tag: "Landing AKB"
   - Tag: "Lead Cualificado"
   - Tag dinámico basado en facturacion (ejemplo: si facturacion = "500k-1M" agregar tag "Facturación: 500k-1M")
   - Tag dinámico basado en nivelCompromiso (ejemplo: si nivelCompromiso = "ready" agregar tag "Listo para Actuar")

3. SEND EMAIL (Bienvenida):
   - Asunto: "Bienvenido a AKB Capital Group"
   - Mensaje: Email de bienvenida profesional agradeciendo su interés
   - Personalizar con el nombre del contacto

4. ADD TO PIPELINE:
   - Pipeline: "Ventas" (o crear uno nuevo llamado "Leads AKB")
   - Stage: "Nuevo Lead"
   - Valor de oportunidad: Calcular basado en facturacion

5. INTERNAL NOTIFICATION:
   - Enviar notificación por email al equipo de ventas
   - Incluir todos los datos del lead
   - Marcar como urgente si nivelCompromiso = "urgent"

6. WAIT 24 HOURS + SEND FOLLOW-UP EMAIL:
   - Esperar 24 horas
   - Enviar email de seguimiento si no ha sido contactado
   - Recordar los beneficios de AKB Capital Group

CONFIGURACIÓN ADICIONAL:
- Activar el workflow automáticamente
- Configurar notificaciones de errores
- Asegurar que no se creen contactos duplicados (usar email como identificador único)

Por favor, configura todo esto de forma automática y asegúrate de que el workflow quede activo y funcionando.
```

---

## 🎯 Instrucciones para Usar el Prompt

### Paso 1: Acceder a la IA de GHL

1. En Go High Level, busca el **asistente de IA** o **"AI Assistant"**
2. Puede estar en:
   - Esquina inferior derecha (icono de chat)
   - Menú superior → "AI Assistant"
   - Dentro del editor de workflows

### Paso 2: Pegar el Prompt

1. **Copia todo el prompt** de arriba (desde "Necesito configurar..." hasta "...activo y funcionando")
2. **Pégalo** en el chat de la IA
3. **Envía** el mensaje

### Paso 3: Revisar y Aprobar

La IA te mostrará lo que va a hacer:
1. **Revisa** las acciones propuestas
2. **Aprueba** o haz ajustes si es necesario
3. La IA configurará todo automáticamente

---

## ✅ Checklist Final - Qué Debe Quedar Configurado

Después de que la IA termine, verifica que tengas:

### En el Workflow:
- [x] **Trigger**: Inbound Webhook (ya está)
- [ ] **Acción 1**: Create/Update Contact
- [ ] **Acción 2**: Add Tags (4 tags mínimo)
- [ ] **Acción 3**: Send Email (Bienvenida)
- [ ] **Acción 4**: Add to Pipeline
- [ ] **Acción 5**: Internal Notification
- [ ] **Acción 6**: Wait 24h + Follow-up Email
- [ ] **Workflow activado** (toggle ON)

### Campos Personalizados Creados:
- [ ] facturacion
- [ ] tipoNegocio
- [ ] nivelCompromiso
- [ ] source
- [ ] timestamp

### Tags Creados:
- [ ] Landing AKB
- [ ] Lead Cualificado
- [ ] Tags dinámicos por facturación
- [ ] Tags dinámicos por nivel de compromiso

---

## 🚀 Alternativa: Configuración Manual Rápida

Si la IA no está disponible, aquí está el orden exacto de acciones a crear:

1. **Create/Update Contact** → Mapear todos los campos
2. **Add Tags** → "Landing AKB", "Lead Cualificado"
3. **Send Email** → Template de bienvenida
4. **Add to Pipeline** → Pipeline de ventas
5. **Send Internal Notification** → Notificar a ventas
6. **Wait** → 24 horas
7. **Send Email** → Follow-up automático

---

## 📞 Resumen

**Copia el prompt completo** → **Pégalo en la IA de GHL** → **Aprueba** → **Listo**

La IA configurará todo automáticamente en 1-2 minutos.

# Configuración DNS para akbcapitalgroup.com en IONOS

## ⚠️ Acción Requerida

Vercel recomienda usar la **nueva IP** para mejor rendimiento:

```
Tipo: A
Nombre: @
Valor: 216.198.79.1
```

## Pasos en IONOS

### 1. Acceder a IONOS
1. Ve a https://www.ionos.es
2. Inicia sesión
3. Ve a **Dominios y SSL**
4. Selecciona **akbcapitalgroup.com**
5. Click en **DNS** o **Configuración DNS**

### 2. Configurar el Registro A

#### Eliminar registro antiguo (si existe)
- Busca cualquier registro A existente para `@` o el dominio raíz
- Elimínalo

#### Agregar nuevo registro A
```
Tipo: A
Host/Nombre: @ (o déjalo vacío)
Valor/Apunta a: 216.198.79.1
TTL: 3600 (o automático)
```

### 3. Configurar www (Opcional pero Recomendado)

Para que `www.akbcapitalgroup.com` también funcione:

```
Tipo: CNAME
Host/Nombre: www
Valor/Apunta a: cname.vercel-dns.com
TTL: 3600 (o automático)
```

## Configuración Final en IONOS

Tu zona DNS debe quedar así:

| Tipo | Nombre | Valor | TTL |
|------|--------|-------|-----|
| A | @ | 216.198.79.1 | 3600 |
| CNAME | www | cname.vercel-dns.com | 3600 |

## Verificación

### Inmediatamente después de configurar:
1. Guarda los cambios en IONOS
2. Vuelve a Vercel → tu proyecto → Settings → Domains
3. Vercel debería mostrar "Valid Configuration" (puede tardar unos minutos)

### Verificar propagación DNS:
```bash
# Verificar registro A
dig akbcapitalgroup.com A +short
# Debería mostrar: 216.198.79.1

# Verificar www
dig www.akbcapitalgroup.com CNAME +short
# Debería mostrar: cname.vercel-dns.com
```

### Herramientas online:
- https://dnschecker.org/#A/akbcapitalgroup.com
- https://www.whatsmydns.net/#A/akbcapitalgroup.com

## Tiempos

- **Verificación en Vercel**: 1-5 minutos
- **Propagación DNS completa**: 5 minutos - 48 horas (normalmente 1-2 horas)
- **Certificado SSL**: Automático una vez verificado

## Notas Importantes

### ✅ IP Nueva (Recomendada)
- **216.198.79.1** ← Usa esta (mejor rendimiento)

### ⚠️ IPs Antiguas (Aún funcionan)
- 76.76.21.21 (antigua, pero funcional)
- cname.vercel-dns.com (antigua, pero funcional)

### 🔒 HTTPS/SSL
- Vercel configura automáticamente el certificado SSL
- No necesitas hacer nada adicional
- Se activará automáticamente cuando el DNS esté verificado

## Solución de Problemas

### "DNS Change Recommended" sigue apareciendo
- Espera 5-10 minutos después de guardar en IONOS
- Limpia caché: Click en "Refresh" en Vercel
- Verifica que la IP sea exactamente `216.198.79.1`

### El dominio no carga
1. Verifica que el proyecto esté desplegado en Vercel
2. Comprueba los registros DNS en IONOS
3. Espera más tiempo para la propagación
4. Revisa los logs en Vercel → Deployments

### Error de certificado SSL
- Espera a que Vercel termine de configurar el SSL (automático)
- Puede tardar hasta 24 horas después de la verificación DNS

## Checklist

- [ ] Acceder a IONOS → Dominios → akbcapitalgroup.com → DNS
- [ ] Eliminar registro A antiguo (si existe)
- [ ] Agregar registro A: @ → 216.198.79.1
- [ ] Agregar registro CNAME: www → cname.vercel-dns.com
- [ ] Guardar cambios en IONOS
- [ ] Esperar 5-10 minutos
- [ ] Verificar en Vercel que muestre "Valid Configuration"
- [ ] Probar accediendo a https://akbcapitalgroup.com
- [ ] Verificar que HTTPS funcione correctamente

---

**Estado Actual**: Vercel detectó el dominio pero necesita que actualices el DNS en IONOS con la nueva IP.

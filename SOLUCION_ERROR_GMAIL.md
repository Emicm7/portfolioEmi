# Solución al Error de Gmail: "insufficient authentication scopes"

Si te aparece el error **"412 Gmail_API: Request had insufficient authentication scopes"**, aquí tienes las soluciones:

## ✅ Solución 1: Usar el Servicio Directo de EmailJS (MÁS FÁCIL)

**Esta es la opción más recomendada** si solo quieres recibir emails sin complicaciones:

1. En EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. **Selecciona "EmailJS"** (el servicio nativo, NO selecciones Gmail)
4. Dale un nombre al servicio (ej: "Portfolio Contact")
5. **¡Listo!** No necesitas conectar ninguna cuenta

**Ventajas:**
- ✅ No necesitas conectar tu cuenta de Gmail
- ✅ Funciona inmediatamente sin problemas de permisos
- ✅ Los emails llegarán igual a tu correo (configúralo en el template)

---

## ✅ Solución 2: Reconectar Gmail Correctamente

Si realmente quieres usar Gmail, sigue estos pasos:

1. **Desconecta completamente:**
   - Haz clic en "Disconnect" en la configuración del servicio
   - Ve a tu cuenta de Google: https://myaccount.google.com/permissions
   - Busca "EmailJS" en las apps conectadas
   - Revoca los permisos de EmailJS

2. **Cierra sesión en EmailJS:**
   - Sal completamente de tu cuenta en EmailJS
   - Vuelve a iniciar sesión

3. **Reconecta Gmail:**
   - Ve a "Email Services" → "Add New Service" → "Gmail"
   - Cuando te pida permisos de Google, **asegúrate de aceptar TODOS**
   - Especialmente el permiso de **"Send email on your behalf"** o **"Enviar correo en tu nombre"**
   - No deshabilites ningún permiso durante la conexión

---

## ✅ Solución 3: Usar Outlook (Alternativa)

Si Gmail sigue dando problemas, usa Outlook:

1. Ve a "Email Services" → "Add New Service"
2. Selecciona **"Outlook"** en lugar de Gmail
3. Conecta tu cuenta de Outlook/Microsoft
4. Outlook generalmente tiene menos problemas de permisos

---

## 📝 Configuración del Template

Independientemente de qué servicio uses, en el **Email Template** configura:

**Subject:**
```
Nuevo mensaje de contacto desde tu portfolio
```

**Body:**
```
De: {{from_name}}
Email: {{from_email}}

Mensaje:
{{message}}

---
Este mensaje fue enviado desde tu formulario de contacto.
```

**IMPORTANTE:** En el campo "To Email" del template, pon tu dirección de email donde quieres recibir los mensajes (ej: emilianocastro97@gmail.com)

---

## 🎯 Recomendación Final

**Usa la Solución 1 (EmailJS directo)** si solo necesitas recibir emails simples desde tu formulario de contacto. Es la forma más rápida y sin complicaciones.


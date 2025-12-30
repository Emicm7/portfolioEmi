# Configuración de EmailJS

Para que el formulario de contacto funcione y puedas recibir emails, necesitas configurar EmailJS.

## Pasos para configurar:

1. **Crea una cuenta en EmailJS** (es gratis):
   - Ve a https://www.emailjs.com/
   - Regístrate o inicia sesión

2. **Crea un servicio de Email**:
   
   **Opción A: Usar el servicio directo de EmailJS (RECOMENDADO si tienes problemas con Gmail)**:
   - En el dashboard, ve a "Email Services"
   - Haz clic en "Add New Service"
   - Selecciona "EmailJS" (el servicio nativo, NO Gmail)
   - Este servicio te permite enviar emails sin conectar tu cuenta de Gmail
   - **Guarda el Service ID** que te dan
   
   **Opción B: Usar Gmail (si prefieres)**:
   - En el dashboard, ve a "Email Services"
   - Haz clic en "Add New Service"
   - Selecciona "Gmail"
   - Si te sale error de "insufficient authentication scopes":
     * Haz clic en "Disconnect" primero
     * Cierra sesión y vuelve a iniciar sesión en EmailJS
     * Vuelve a conectar Gmail
     * **IMPORTANTE**: Asegúrate de aceptar TODOS los permisos, especialmente "Send email on your behalf"
   - **Guarda el Service ID** que te dan
   
   **Opción C: Usar Outlook (alternativa a Gmail)**:
   - Selecciona "Outlook" en lugar de Gmail
   - Outlook suele tener menos problemas de permisos

3. **Crea un Template de Email**:
   - Ve a "Email Templates"
   - Haz clic en "Create New Template"
   - Usa este template como ejemplo:
   
   ```
   Subject: Nuevo mensaje de contacto desde tu portfolio
   
   De: {{from_name}}
   Email: {{from_email}}
   
   Mensaje:
   {{message}}
   
   ---
   Este mensaje fue enviado desde tu formulario de contacto.
   ```
   
   - **Guarda el Template ID**

4. **Obtén tu Public Key**:
   - Ve a "Account" → "General"
   - Encuentra tu "Public Key"
   - **Copia tu Public Key**

5. **Configura las variables**:
   
   Opción A: Usando archivo .env (recomendado)
   - Crea un archivo `.env` en la raíz del proyecto
   - Agrega estas líneas (reemplaza con tus valores):
   ```
   VITE_EMAILJS_SERVICE_ID=tu_service_id
   VITE_EMAILJS_TEMPLATE_ID=tu_template_id
   VITE_EMAILJS_PUBLIC_KEY=tu_public_key
   VITE_RECIPIENT_EMAIL=tu-email@ejemplo.com
   ```
   
   Opción B: Editar directamente el archivo de configuración
   - Abre `src/config/emailConfig.js`
   - Reemplaza los valores de 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_PUBLIC_KEY' y 'tu-email@ejemplo.com'

6. **¡Listo!** El formulario ahora enviará emails a tu dirección de correo.

## Nota importante:
Si usas variables de entorno (.env), recuerda que:
- No subas el archivo `.env` a GitHub (debe estar en .gitignore)
- Para producción, configura estas variables en tu plataforma de hosting (Vercel, Netlify, etc.)


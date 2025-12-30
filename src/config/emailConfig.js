// Configuración de EmailJS
// Para obtener estas credenciales:
// 1. Crea una cuenta en https://www.emailjs.com/
// 2. Crea un servicio de email (Gmail, Outlook, etc.)
// 3. Crea un template de email
// 4. Obtén tu Public Key desde la cuenta

export const emailConfig = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
  // Cambia esto por tu dirección de email
  recipientEmail: import.meta.env.VITE_RECIPIENT_EMAIL || 'tu-email@ejemplo.com'
};


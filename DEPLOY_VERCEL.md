# Guía para Desplegar en Vercel

Esta guía te ayudará a subir tu portfolio a Vercel paso a paso.

## Pre-requisitos:

1. ✅ Cuenta en GitHub (gratis): https://github.com
2. ✅ Cuenta en Vercel (gratis): https://vercel.com

---

## Paso 1: Subir tu código a GitHub

### 1.1 Inicializar Git (si aún no lo has hecho)

Abre una terminal en la carpeta de tu proyecto y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit"
```

### 1.2 Crear repositorio en GitHub

1. Ve a https://github.com y crea un nuevo repositorio
2. No marques "Add README" ni "Add .gitignore" (ya los tienes)
3. Copia la URL del repositorio (ej: `https://github.com/tu-usuario/portfolio.git`)

### 1.3 Subir tu código

En la terminal, ejecuta:

```bash
git remote add origin https://github.com/tu-usuario/portfolio.git
git branch -M main
git push -u origin main
```

---

## Paso 2: Desplegar en Vercel

### 2.1 Conectar con Vercel

1. Ve a https://vercel.com y inicia sesión (puedes usar tu cuenta de GitHub)
2. Haz clic en "Add New..." → "Project"
3. Selecciona tu repositorio de GitHub
4. Vercel detectará automáticamente que es un proyecto Vite

### 2.2 Configurar el proyecto

Vercel debería detectar automáticamente:
- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **Install Command**: `npm install`

No necesitas cambiar nada, solo haz clic en "Deploy"

### 2.3 Configurar Variables de Entorno

⚠️ **IMPORTANTE**: Antes de hacer deploy, necesitas configurar las variables de entorno para EmailJS.

En la pantalla de configuración del proyecto en Vercel, busca la sección **"Environment Variables"** y agrega:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id_aqui
VITE_EMAILJS_TEMPLATE_ID=tu_template_id_aqui
VITE_EMAILJS_PUBLIC_KEY=tu_public_key_aqui
VITE_RECIPIENT_EMAIL=emilianocastro97@gmail.com
```

**Importante**: Reemplaza los valores con tus credenciales reales de EmailJS.

### 2.4 Deploy

Haz clic en "Deploy" y espera a que termine (normalmente toma 1-2 minutos)

---

## Paso 3: ¡Listo!

Una vez terminado el deploy, Vercel te dará una URL como:
- `https://portfolio-tu-usuario.vercel.app`

Tu portfolio estará en línea y podrás compartirlo.

---

## Actualizaciones futuras

Cada vez que hagas `git push` a tu repositorio en GitHub, Vercel automáticamente:
- Detectará los cambios
- Hará un nuevo deploy
- Actualizará tu sitio

---

## Notas importantes:

1. **Variables de entorno**: Las variables de entorno solo funcionan si las configuras en Vercel. El archivo `.env` local NO se sube a GitHub (está en .gitignore)

2. **Dominio personalizado**: Si tienes un dominio propio, puedes configurarlo en Vercel en la sección "Domains"

3. **Build logs**: Si hay algún error durante el build, puedes verlo en el dashboard de Vercel en la sección "Deployments"


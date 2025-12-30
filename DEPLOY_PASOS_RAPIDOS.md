# Pasos Rápidos para Deploy en Vercel

## Opción 1: Desde la Terminal (Recomendado)

### 1. Inicializar Git y subir a GitHub

```bash
# Inicializar git
git init
git add .
git commit -m "Initial commit: Portfolio completo"

# Crear repositorio en GitHub primero, luego:
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

### 2. Desplegar en Vercel

**Opción A: Desde el Dashboard de Vercel (Más fácil)**
1. Ve a https://vercel.com
2. Login con GitHub
3. Click en "Add New..." → "Project"
4. Selecciona tu repositorio
5. En "Environment Variables", agrega:
   - `VITE_EMAILJS_SERVICE_ID`
   - `VITE_EMAILJS_TEMPLATE_ID`
   - `VITE_EMAILJS_PUBLIC_KEY`
   - `VITE_RECIPIENT_EMAIL`
6. Click en "Deploy"

**Opción B: Con Vercel CLI (Desde terminal)**
```bash
# Instalar Vercel CLI globalmente
npm i -g vercel

# Desplegar
vercel

# Sigue las instrucciones en pantalla
```

---

## Opción 2: Deploy Directo (Sin GitHub)

Si prefieres desplegar directamente sin GitHub:

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel

# Configura las variables de entorno cuando te lo pida
```

---

## ⚠️ IMPORTANTE: Variables de Entorno

No olvides configurar estas variables en Vercel:

```
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_RECIPIENT_EMAIL=emilianocastro97@gmail.com
```

Puedes configurarlas:
- En el dashboard de Vercel → Tu proyecto → Settings → Environment Variables
- O cuando usas `vercel` CLI, te las pedirá


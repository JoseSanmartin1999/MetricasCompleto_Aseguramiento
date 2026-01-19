# 📊 Sistema de Métricas y Evaluación de Calidad de Software

> **Plataforma integral para evaluar la calidad de software según estándares internacionales ISO y métricas personalizadas**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-ISC-green.svg)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg)
![React](https://img.shields.io/badge/react-19.2.0-61dafb.svg)

---

## 📋 Descripción

Sistema web desarrollado para ESPE (Escuela Politécnica del Ejército) que permite evaluar proyectos de software mediante tres enfoques complementarios:

- **📚 SIGB (Sistema Integrado de Gestión Bibliotecaria)**: Calculadora de métricas cuantitativas basadas en estándares ISO 29110, ISO 9001, ISO 25010, ISO 9241 y CISQ
- **🎖️ ISO 25010**: Evaluador de calidad del producto de software (8 características de calidad)
- **👤 ISO 25022**: Evaluador de calidad en uso desde la perspectiva del usuario (5 características)

## ✨ Características Principales

### 🎯 SIGB - Calculadora de Métricas
- **9 métricas cuantitativas** con fórmulas estándar
- Cálculo en tiempo real con interpretación
- Generación de reportes PDF individuales o completos
- Métricas incluidas:
  - Índice de Cumplimiento (ICP)
  - Índice de No Conformidades (NC)
  - MTBF - Tiempo Medio Entre Fallos
  - TPR - Tiempo Promedio de Respuesta
  - Índice de Vulnerabilidades Críticas (IVC)
  - Complejidad Ciclomática (CC)
  - Tasa de Éxito - Usabilidad
  - Índice de Portabilidad

### 📊 ISO 25010 - Calidad del Producto
- **85 preguntas** distribuidas en 8 características
- **27 subcaracterísticas** evaluables
- Sistema de puntuación ponderada (escala 1-5)
- Visualización gráfica de resultados
- Características evaluadas:
  - Adecuación Funcional
  - Eficiencia de Desempeño
  - Compatibilidad
  - Usabilidad
  - Fiabilidad
  - Seguridad
  - Mantenibilidad
  - Portabilidad

### 🎯 ISO 25022 - Calidad en Uso
- **50 preguntas** centradas en la experiencia del usuario
- **13 subcaracterísticas** de calidad en uso
- Evaluación desde contextos reales de uso
- Características evaluadas:
  - Efectividad
  - Eficiencia
  - Satisfacción
  - Ausencia de Riesgo
  - Cobertura del Contexto

### 📄 Generación de Reportes
- Reportes PDF profesionales con diseño moderno
- Reportes individuales por métrica (SIGB)
- Reporte completo con todas las métricas
- Estadísticas y gráficos visuales

## 🏗️ Arquitectura del Proyecto

```
MetricasCompleto_Aseguramiento/
├── frontend/                    # Aplicación React
│   ├── src/
│   │   ├── components/         # Componentes React
│   │   │   ├── ISO25010Evaluator.jsx
│   │   │   ├── ISO25010Evaluator.css
│   │   │   ├── ISO25022Evaluator.jsx
│   │   │   └── ISO25022Evaluator.css
│   │   ├── data/              # Modelos de datos
│   │   │   ├── metrics.js     # Métricas SIGB
│   │   │   ├── iso25010.js    # Datos ISO 25010
│   │   │   └── iso25022.js    # Datos ISO 25022
│   │   ├── App.jsx            # Componente principal
│   │   ├── App.css            # Estilos globales
│   │   └── main.jsx           # Punto de entrada
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── backend/                    # API Node.js/Express
│   ├── index.js               # Servidor Express
│   ├── template.html          # Template para PDF individual
│   ├── template-completo.html # Template para PDF completo
│   ├── package.json
│   └── .env                   # Variables de entorno
│
└── README.md                  # Este archivo
```

## 🚀 Tecnologías Utilizadas

### Frontend
- **React 19.2.0** - Framework UI
- **Vite 7.2.4** - Build tool y dev server
- **CSS3** - Estilos personalizados
- **Font Awesome** - Iconografía

### Backend
- **Node.js** - Runtime
- **Express 5.2.1** - Framework web
- **pdf-creator-node 2.3.5** - Generación de PDFs
- **CORS 2.8.5** - Manejo de CORS
- **Body Parser 2.2.2** - Parsing de JSON

## 📦 Instalación

### Prerrequisitos

- **Node.js** >= 18.0.0
- **npm** >= 9.0.0
- **Git** (para clonar el repositorio)

### Pasos de Instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/JoseSanmartin1999/MetricasCompleto_Aseguramiento.git
cd MetricasCompleto_Aseguramiento
```

2. **Instalar dependencias del Backend**
```bash
cd backend
npm install
```

3. **Instalar dependencias del Frontend**
```bash
cd ../frontend
npm install
```

## 🎮 Uso (Desarrollo)

### Iniciar el Backend

```bash
cd backend
node index.js
```

El servidor se iniciará en `http://localhost:5000`

### Iniciar el Frontend

En una nueva terminal:

```bash
cd frontend
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Uso de la Aplicación

1. **Acceder a la aplicación** en `http://localhost:5173`

2. **Navegación**:
   - Usar las pestañas superiores para cambiar entre vistas:
     - **SIGB**: Calculadora de métricas
     - **ISO 25010**: Evaluación de calidad del producto
     - **ISO 25022**: Evaluación de calidad en uso

3. **SIGB - Calculadora de Métricas**:
   - Seleccionar una métrica del grid
   - Ingresar valores en los campos
   - Ver resultado calculado en tiempo real
   - Hacer clic en "Descargar Reporte PDF" para generar reporte individual
   - Usar "Reporte Completo" en el header para generar PDF con todas las métricas

4. **ISO 25010 / ISO 25022**:
   - Seleccionar una característica
   - Responder preguntas usando escala 1-5
   - Observar progreso y puntuación en tiempo real
   - Al completar todas las preguntas, generar reporte PDF

## 📦 Construcción para Producción

### Frontend

```bash
cd frontend
npm run build
```

Los archivos compilados estarán en `frontend/dist/`

### Backend

El backend no requiere compilación especial, pero asegúrate de:

1. Configurar variables de entorno en `.env`
2. Usar `NODE_ENV=production`

## 🌐 Despliegue

### Opción 1: Despliegue Separado (Recomendado)

#### Frontend (Vercel / Netlify / GitHub Pages)

**Vercel:**
```bash
cd frontend
npm install -g vercel
vercel
```

**Netlify:**
```bash
cd frontend
npm run build
# Subir carpeta dist/ a Netlify
```

**GitHub Pages:**
```bash
# Configurar vite.config.js con base: '/nombre-repo/'
cd frontend
npm run build
# Usar gh-pages para desplegar dist/
```

#### Backend (Heroku / Railway / Render)

**Heroku:**
```bash
cd backend
# Crear Procfile:
echo "web: node index.js" > Procfile

heroku create nombre-app-backend
git push heroku main
```

**Railway:**
1. Conectar repositorio en Railway
2. Seleccionar carpeta `backend`
3. Railway detectará automáticamente Node.js
4. Configurar variables de entorno

**Render:**
1. Crear nuevo "Web Service"
2. Conectar repositorio
3. Configurar:
   - Build Command: `npm install`
   - Start Command: `node index.js`
   - Root Directory: `backend`

### Opción 2: Despliegue en el Mismo Servidor

#### VPS (DigitalOcean, Linode, AWS EC2)

1. **Instalar Node.js en el servidor**
```bash
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs
```

2. **Clonar repositorio**
```bash
git clone https://github.com/JoseSanmartin1999/MetricasCompleto_Aseguramiento.git
cd MetricasCompleto_Aseguramiento
```

3. **Configurar Backend**
```bash
cd backend
npm install
# Crear archivo .env con configuración de producción
```

4. **Build Frontend**
```bash
cd ../frontend
npm install
npm run build
```

5. **Configurar Nginx como proxy reverso**
```nginx
server {
    listen 80;
    server_name tu-dominio.com;

    # Frontend
    location / {
        root /ruta/a/MetricasCompleto_Aseguramiento/frontend/dist;
        try_files $uri $uri/ /index.html;
    }

    # Backend API
    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

6. **Usar PM2 para mantener el backend corriendo**
```bash
npm install -g pm2
cd backend
pm2 start index.js --name "metrics-backend"
pm2 startup
pm2 save
```

### Opción 3: Docker

**Crear Dockerfile para Backend:**
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 5000
CMD ["node", "index.js"]
```

**Crear Dockerfile para Frontend:**
```dockerfile
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  backend:
    build: ./backend
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
  
  frontend:
    build: ./frontend
    ports:
      - "80:80"
    depends_on:
      - backend
```

## 🔧 Configuración

### Variables de Entorno (Backend)

Crear archivo `.env` en la carpeta `backend`:

```env
PORT=5000
NODE_ENV=production
```

### Actualizar URL del Backend (Frontend)

Si Frontend y Backend están en diferentes dominios, actualizar las URLs en:
- `frontend/src/App.jsx` (líneas de fetch a `http://localhost:5000`)

Cambiar a tu URL de producción.

## 📝 Scripts Disponibles

### Frontend
- `npm run dev` - Servidor de desarrollo
- `npm run build` - Compilar para producción
- `npm run preview` - Previsualizar build de producción
- `npm run lint` - Ejecutar linter

### Backend
- `node index.js` - Iniciar servidor

## 🐛 Solución de Problemas

### Puerto 5000 ya en uso
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:5000 | xargs kill -9
```

### Error de CORS
Verificar que el backend tenga configurado CORS correctamente en `index.js`

### PDFs no generan
Verificar que existan los archivos:
- `backend/template.html`
- `backend/template-completo.html`

## 👥 Contribuir

1. Fork el proyecto
2. Crear rama de feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

ISC License

## 👨‍💻 Autor

**ESPE - Aseguramiento de la Calidad de Software**

---

## 🙏 Agradecimientos

- Estándares ISO (25010, 25022, 29110, 9001, 9241)
- CISQ (Consortium for Information & Software Quality)
- ESPE - Escuela Politécnica del Ejército

---

**Desarrollado con ❤️ para mejorar la calidad del software**
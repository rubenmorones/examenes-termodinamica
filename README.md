# Examen 2do Parcial - Termodinámica

Plataforma de evaluación en línea para estudiantes. Con interfaz Apple-like minimalist, animaciones SVG de ingeniería y integración con Supabase.

## Características

- **Fase 1:** 5 problemas termodinámicos con carga de pruebas (PDF/JPG)
- **Fase 2:** 10 preguntas de teoría con respuestas automáticas
- **Autenticación:** Matrícula de estudiante
- **Base de datos:** Supabase (almacenamiento de respuestas)
- **Diseño:** Dark mode Apple-like con animaciones SVG

## Matrícula de demo

Para pruebas: `111111` (acceso directo sin validación de BD)

## Instrucciones de Deploy a Netlify

### 1. Crear repositorio en GitHub

```bash
# En tu máquina local, desde la carpeta examenes-termodinamica:
git remote add origin https://github.com/TU_USUARIO/examenes-termodinamica.git
git branch -M main
git push -u origin main
```

(Reemplaza `TU_USUARIO` con tu usuario de GitHub)

### 2. Desplegar en Netlify

1. Ve a https://netlify.com
2. Sign up con tu cuenta de GitHub
3. Nuevo sitio → "New site from Git"
4. Selecciona tu repositorio `examenes-termodinamica`
5. Build command: (dejar vacío)
6. Publish directory: `.` (punto)
7. Deploy

¡Listo! Tu sitio estará disponible en una URL tipo: `https://xxxxx.netlify.app`

## Estructura

```
├── index.html          # Login de estudiantes
├── examen.html         # Fase 1: Problemas
├── teoria.html         # Fase 2: Teoría
├── admin.html          # Panel de administración
├── demo.html           # Demo sin Supabase
├── js/
│   ├── supabase-config.js    # Configuración BD
│   └── utils.js              # Funciones comunes
└── css/
    └── style.css       # Estilos (Apple-like dark theme)
```

## Configuración

Las credenciales de Supabase están en `js/supabase-config.js`. Ya están configuradas para el proyecto.

## Estudiantes con matrícula 111111

Tienen acceso directo sin validación de base de datos (útil para pruebas rápidas).

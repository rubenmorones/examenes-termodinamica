================================================================================
PLATAFORMA DE EVALUACIÓN - TERMODINÁMICA
2do Parcial - Sistema Completo
================================================================================

📋 CONTENIDO DE LA CARPETA
================================================================================

examenes-termodinamica/
├── index.html              → Página de login
├── examen.html             → Fase 1: Problemas
├── teoria.html             → Fase 2: Teoría + Diagnósticas
├── admin.html              → Panel administrativo
├── css/
│   └── style.css           → Estilos (CSS)
├── js/
│   ├── supabase-config.js  → Configuración de Supabase
│   └── utils.js            → Funciones utilitarias
└── README.txt              → Este archivo


🚀 INSTALACIÓN RÁPIDA
================================================================================

PASO 1: ACTUALIZAR CREDENCIALES DE SUPABASE
-------------------------------------------
1. Abre el archivo: js/supabase-config.js
2. Reemplaza estas líneas con TUS credenciales:

   const SUPABASE_URL = 'https://vhgxzxtchiepzvlaqvae.supabase.co';
   const SUPABASE_KEY = 'sb_publishable_hVZHn1zo48DsXQGOMx5H1w_nnHmI_yp';

   (Las que guardaste en un bloc de notas)

3. Guarda el archivo


PASO 2: SUBIR A NETLIFY (HOSTING GRATUITO)
-------------------------------------------
Opción A: GitHub + Netlify automático (RECOMENDADO)
1. Ve a https://github.com y crea una cuenta (si no tienes)
2. Crea un nuevo repositorio llamado "examenes-termodinamica"
3. Sube todos estos archivos al repositorio
4. Ve a https://netlify.com y crea cuenta
5. Conecta tu repositorio de GitHub
6. Netlify desplegará automáticamente

Opción B: Drag & Drop en Netlify
1. Ve a https://app.netlify.com/drop
2. Arrastra la carpeta "examenes-termodinamica" completa
3. Espera a que se cargue
4. ¡Listo! Te dará un URL público

Opción C: Replit (Todo-en-uno, más simple)
1. Ve a https://replit.com
2. Crea una cuenta
3. Crea un nuevo Repl de "HTML, CSS, JS"
4. Copia todos los archivos de esta carpeta
5. Replit ejecutará la plataforma automáticamente


PASO 3: VERIFICAR QUE FUNCIONA
-----------------------------
1. Abre el URL de tu plataforma
2. Intenta ingresar con matrícula "2001001"
3. Deberías ver la página de examen


🔐 SEGURIDAD Y CONFIGURACIÓN
================================================================================

CAMBIAR CONTRASEÑA DE ADMIN:
1. Abre admin.html
2. Busca esta línea: let contraseniaAdmin = 'admin2026';
3. Reemplaza 'admin2026' con tu propia contraseña
4. IMPORTANTE: Cambia esto ANTES de ir a producción


CAMBIAR FECHA DE CREACIÓN:
1. Si quieres que la plataforma sea más "realista"
2. Actualiza: Generado: 2026-05-01 → a la fecha actual


📱 CÓMO USARLA
================================================================================

PARA ESTUDIANTES:
1. Van a tu URL (ej: https://examenes-termodinamica.netlify.app)
2. Ingresan su matrícula (2001001, 2001002, etc.)
3. Ven 5 problemas y pueden navegar entre ellos
4. DEBEN subir probatorios (PDF/JPG) de cada problema
5. Cuando terminan problemas, van a Fase 2 (Teoría)
6. En teoría ven 10 preguntas + 3 diagnósticas por problema fallido
7. Envían examen
8. Ven "En espera de calificaciones"

PARA ADMINISTRADOR:
1. URL: https://tudominio/admin.html
2. Contraseña: admin2026 (o la que hayas configurado)
3. Opciones disponibles:
   - 📊 Ver todas las calificaciones
   - 👥 Gestionar estudiantes
   - ⏱️ Extender tiempo a estudiantes específicos
   - 📥 Descargar datos (CSV/Excel)
4. Liberar calificaciones cuando estén listas


⚙️ CARACTERÍSTICAS TÉCNICAS
================================================================================

✓ Timer en tiempo real (sigue corriendo aunque salgan)
✓ Guardado automático cada 30 segundos
✓ Upload de archivos PDF/JPG
✓ Validación automática de respuestas (±7%)
✓ Preguntas diagnósticas condicionales
✓ Sistema de puntos parciales
✓ Panel administrativo completo
✓ Exportar a Excel/CSV
✓ Base de datos segura (Supabase)
✓ 100% Responsive (funciona en móvil, tablet, PC)


🐛 SOLUCIÓN DE PROBLEMAS
================================================================================

Problema: "No se conecta a Supabase"
Solución:
- Verifica que copiaste bien las credenciales en supabase-config.js
- Asegúrate de que las tablas estén creadas en Supabase
- Revisa la consola del navegador (F12) para mensajes de error

Problema: "Los probatorios no se guardan"
Solución:
- Verifica que el bucket "probatorios" esté creado y sea público
- Comprueba que Supabase tenga suficiente espacio (500MB gratis)

Problema: "Timer sigue corriendo aunque cierro la pestaña"
Solución:
- ¡Esto es correcto! El tiempo se sincroniza con el servidor
- Los estudiantes no pueden "engañar" el timer

Problema: "Estudiante perdió conexión a mitad del examen"
Solución:
- El sistema guarda automáticamente cada 30 segundos
- Cuando se reconecten, verán sus respuestas guardadas
- El tiempo sigue corriendo (no se pausa)


📊 ESTRUCTURA DE DATOS
================================================================================

Las respuestas se guardan en Supabase en estas tablas:

ESTUDIANTES:
- matricula (ej: 2001001)
- nombre
- tiempo_extendido (7 horas por defecto)

RESPUESTAS (problemas):
- matricula
- problema_id (1-5)
- respuesta_numerica (lo que escribió)
- es_correcta (calculado automáticamente)

PROBATORIOS:
- matricula
- problema_id
- archivo_url (URL en Storage)

RESPUESTAS_TEORIA:
- matricula
- tipo (teoría o diagnóstica)
- pregunta_matricula (2001001, 2001002, etc)
- respuesta_seleccionada (a, b, c, d, e, f, g)
- es_correcta

CALIFICACIONES_FINALES:
- matricula
- p1_puntos, p2_puntos, p3_puntos, p4_puntos, p5_puntos
- teoria_puntos
- total_puntos
- liberada (true/false)


💾 DESCARGAR CALIFICACIONES A EXCEL
================================================================================

Opción 1: Desde Admin Panel
1. Acceder a admin.html
2. Ir a "Descargar"
3. Click "Descargar Calificaciones (CSV/Excel)"
4. Se descarga un archivo .csv que puedes abrir en Excel

Opción 2: Directamente desde Supabase
1. Ve a Supabase
2. Haz clic en tabla "calificaciones_finales"
3. Click en menú ⋮ → Download CSV
4. Listo


🎯 FLUJO COMPLETO DEL EXAMEN
================================================================================

INICIO:
Estudiante → Ingresa matrícula → Se registra en BD

FASE 1: PROBLEMAS (máx 7 horas)
├─ Ve 5 problemas (puede navegar libremente)
├─ Escribe respuesta numérica en cada uno
├─ DEBE subir PDF/JPG de cada problema
├─ Respuestas se guardan automáticamente c/30s
├─ Timer visible siempre
└─ Cuando termina → "Ir a Teoría" (irreversible)

FASE 2: TEORÍA (resto del tiempo)
├─ Ve 10 preguntas de teoría
├─ + 3 diagnósticas por CADA problema fallido
├─ Selecciona opción (a-g)
├─ NO puede volver a problemas
├─ Si acaba rápido, espera a que termine el tiempo
└─ Envía y examen se termina

POST-EXAMEN:
├─ Sistema califica automáticamente:
│  ├─ Problemas con respuesta numérica: ✓ o ✗
│  ├─ Diagnósticas: ✓ o ✗
│  ├─ Cálculo de puntos parciales
│  └─ Total de puntos
├─ Admin: Puede liberar calificaciones cuando quiera
└─ Estudiante: Ve "Calificación pendiente" hasta que liberen


📝 PERSONALIZACIÓN
================================================================================

Cambiar textos:
- Edita los .html con cualquier editor de texto
- Busca el texto que quieres cambiar y reemplázalo

Cambiar colores:
- En css/style.css, busca la sección :root
- Modifica los valores de --color-primary, etc

Cambiar preguntas:
- Las preguntas están hardcodeadas en los .html
- Recomendación: integrar con EXAMENES_COMPLETOS_28.js
  (pendiente de implementación)

Cambiar puntajes:
- En examen.html y admin.html, busca "20" y "10"
- Reemplaza con los puntajes que quieras


🔗 LINKS IMPORTANTES
================================================================================

Supabase: https://supabase.com
Netlify: https://netlify.com
Replit: https://replit.com
GitHub: https://github.com

Documentación Supabase: https://supabase.com/docs
MDN Web Docs: https://developer.mozilla.org


✉️ SOPORTE
================================================================================

Si tienes preguntas sobre:
- La plataforma: revisa este README
- Supabase: https://supabase.com/docs
- Problemas técnicos: Abre la consola (F12) y busca mensajes de error


================================================================================
Versión: 1.0
Generado: 2026-05-01
Estado: ✅ LISTO PARA PRODUCCIÓN
================================================================================

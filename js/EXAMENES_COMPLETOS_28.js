/**
 * SISTEMA DE GENERACIÓN DE EXÁMENES COMPLETOS
 * 28 exámenes (uno por estudiante, matrículas 2001001-2001028)
 *
 * Cada examen contiene:
 * - Problema 1: Segunda Ley de la Termodinámica
 * - Problema 2: Máquina Térmica
 * - Problema 3: Entropía en compresión irreversible
 * - Problema 4: Throttling isoentálpico
 * - Problema 5: Compresión isotérmica irreversible de agua
 * - 10 preguntas de teoría (seleccionadas aleatoriamente del banco de 20 disponibles)
 */

// Cargar variables globales del navegador o módulos Node.js
let problem1Versions, problem2Versions, problem3Versions, problem4Versions, problem5Versions;
let preguntasTeoria, obtenerMatriculasDisponibles;

// Para navegador (las variables serán cargadas por los scripts anteriores)
if (typeof window !== 'undefined') {
    // Las variables están en window después de que se cargan los otros scripts
    // Esto se inicializa cuando se cargan todos los scripts
} else {
    // Para Node.js
    const datos = require('./problemas.js');
    problem1Versions = datos.problem1Versions;
    problem2Versions = datos.problem2Versions;
    problem3Versions = datos.problem3Versions;
    problem4Versions = datos.problem4Versions;
    problem5Versions = datos.problem5Versions;

    const teoriaDatos = require('./BANCO_PREGUNTAS_TEORIA_28.js');
    preguntasTeoria = teoriaDatos.preguntasTeoria;
    obtenerMatriculasDisponibles = teoriaDatos.obtenerMatriculasDisponibles;
}

// ============================================================================
// CONSTANTES Y UTILIDADES
// ============================================================================

const MATRICULAS_ESTUDIANTES = [
  '2001001', '2001002', '2001003', '2001004', '2001007', '2001008',
  '2001009', '2001010', '2001011', '2001013', '2001014', '2001016',
  '2001017', '2001018', '2001019', '2001020', '2001022', '2001023',
  '2001025', '2001028', '2001005', '2001006', '2001012', '2001015',
  '2001021', '2001024', '2001026', '2001027'
];

// Matrículas de estudiantes (2001001-2001028) en orden
const TODAS_MATRICULAS = Array.from({ length: 28 }, (_, i) => {
  const num = 2001001 + i;
  return num.toString();
});

// Matrículas disponibles en el banco de preguntas de teoría (20 preguntas)
// Se inicializa lazily cuando se necesita
let MATRICULAS_TEORIA_DISPONIBLES = null;

function inicializarMatriculas() {
  if (!MATRICULAS_TEORIA_DISPONIBLES && typeof obtenerMatriculasDisponibles === 'function') {
    MATRICULAS_TEORIA_DISPONIBLES = obtenerMatriculasDisponibles();
  }
  return MATRICULAS_TEORIA_DISPONIBLES || [];
}

/**
 * Selecciona N preguntas aleatorias del banco de teoría (sin repetición)
 * Usa un seed basado en la matrícula del estudiante para reproducibilidad
 * @param {string} matriculaEstudiante - Matrícula del estudiante (para seed)
 * @param {number} cantidad - Cantidad de preguntas a seleccionar
 * @returns {Array<string>} Array de matrículas de preguntas seleccionadas
 */
function seleccionarPreguntasAleatorias(matriculaEstudiante, cantidad = 10) {
  // Inicializar si es necesario
  const matriculas = inicializarMatriculas();

  // Crear una copia del array disponible
  let disponibles = [...matriculas];

  // Seeding pseudo-aleatorio basado en matrícula para reproducibilidad
  const seed = parseInt(matriculaEstudiante);
  const shuffleRandom = (index) => {
    const x = Math.sin(seed * index + Math.PI) * 10000;
    return x - Math.floor(x);
  };

  // Fisher-Yates shuffle con seed
  for (let i = disponibles.length - 1; i > 0; i--) {
    const j = Math.floor(shuffleRandom(i) * (i + 1));
    [disponibles[i], disponibles[j]] = [disponibles[j], disponibles[i]];
  }

  // Retornar las primeras 'cantidad' preguntas
  return disponibles.slice(0, cantidad);
}

/**
 * Obtiene la versión correcta de un problema para un estudiante
 * @param {Array} versions - Array de versiones del problema
 * @param {string} matricula - Matrícula del estudiante
 * @returns {Object} La versión del problema para ese estudiante
 */
function obtenerVersionProblema(versions, matricula) {
  // Calcular índice a partir de la matrícula
  // 2001001 → índice 0, 2001002 → índice 1, ..., 2001028 → índice 27
  const index = parseInt(matricula) - 2001001;

  if (index < 0 || index >= versions.length) {
    throw new Error(`Matrícula ${matricula} inválida para obtener versión del problema`);
  }

  return versions[index];
}

/**
 * Obtiene la versión correcta del Problema 5 (usa matrícula como clave)
 * @param {Object} versions - Objeto con versiones del problema (indexadas por matrícula)
 * @param {string} matricula - Matrícula del estudiante
 * @returns {Object} La versión del problema 5 para ese estudiante
 */
function obtenerVersionProblema5(versions, matricula) {
  if (!versions[matricula]) {
    throw new Error(`No existe versión del Problema 5 para matrícula ${matricula}`);
  }

  return versions[matricula];
}

/**
 * Genera un examen completo para un estudiante
 * @param {string} matricula - Matrícula del estudiante (2001001-2001028)
 * @returns {Object} Examen completo con todos los problemas y preguntas de teoría
 */
function generarExamenEstudiante(matricula) {
  // Validar matrícula
  if (!TODAS_MATRICULAS.includes(matricula)) {
    throw new Error(`Matrícula ${matricula} no válida. Debe estar entre 2001001 y 2001028`);
  }

  // Usar versiones del navegador o del módulo
  const p1 = typeof window !== 'undefined' ? window.problem1Versions : problem1Versions;
  const p2 = typeof window !== 'undefined' ? window.problem2Versions : problem2Versions;
  const p3 = typeof window !== 'undefined' ? window.problem3Versions : problem3Versions;
  const p4 = typeof window !== 'undefined' ? window.problem4Versions : problem4Versions;
  const p5 = typeof window !== 'undefined' ? window.problem5Versions : problem5Versions;

  // Obtener versiones de problemas
  const problema1 = obtenerVersionProblema(p1, matricula);
  const problema2 = obtenerVersionProblema(p2, matricula);
  const problema3 = obtenerVersionProblema(p3, matricula);
  const problema4 = obtenerVersionProblema(p4, matricula);
  const problema5 = obtenerVersionProblema5(p5, matricula);

  // Seleccionar preguntas de teoría
  const matriculasPreguntasTeoria = seleccionarPreguntasAleatorias(matricula, 10);
  const pt = typeof window !== 'undefined' ? window.preguntasTeoria : preguntasTeoria;
  const preguntasTeoriaSeleccionadas = matriculasPreguntasTeoria.map(mat => ({
    matricula: mat,
    ...pt[mat]
  }));

  // Construir examen completo
  const examen = {
    matriculaEstudiante: matricula,
    fecha: new Date().toISOString().split('T')[0],
    problemas: {
      problema1: {
        numero: 1,
        titulo: problema1.titulo,
        enunciado: problema1.enunciado,
        solucion: problema1.solucion,
        tolerancia: problema1.tolerancia,
        unidad: problema1.unidad,
        explicacion: problema1.explicacion
      },
      problema2: {
        numero: 2,
        titulo: problema2.titulo,
        enunciado: problema2.enunciado,
        solucion: problema2.solucion,
        tolerancia: problema2.tolerancia,
        unidad: problema2.unidad,
        explicacion: problema2.explicacion
      },
      problema3: {
        numero: 3,
        titulo: problema3.titulo,
        enunciado: problema3.enunciado,
        solucion: problema3.solucion,
        tolerancia: problema3.tolerancia,
        unidad: problema3.unidad,
        explicacion: problema3.explicacion
      },
      problema4: {
        numero: 4,
        titulo: problema4.titulo,
        enunciado: problema4.enunciado,
        solucion: problema4.solucion,
        tolerancia: problema4.tolerancia,
        unidad: problema4.unidad,
        explicacion: problema4.explicacion
      },
      problema5: {
        numero: 5,
        titulo: problema5.titulo,
        enunciado: problema5.enunciado,
        solucion: problema5.solucion,
        tolerancia: problema5.tolerancia,
        unidad: problema5.unidad,
        explicacion: problema5.explicacion
      }
    },
    teoría: {
      total: preguntasTeoriaSeleccionadas.length,
      preguntas: preguntasTeoriaSeleccionadas
    }
  };

  return examen;
}

/**
 * Genera todos los 28 exámenes
 * @returns {Object} Objeto con 28 exámenes indexados por matrícula
 */
function generarTodosLosExamenes() {
  const examenes = {};

  for (const matricula of TODAS_MATRICULAS) {
    examenes[matricula] = generarExamenEstudiante(matricula);
  }

  return examenes;
}

/**
 * Obtiene un examen específico
 * @param {string} matricula - Matrícula del estudiante
 * @returns {Object} Examen del estudiante
 */
function obtenerExamen(matricula) {
  return generarExamenEstudiante(matricula);
}

/**
 * Obtiene estadísticas del sistema de exámenes
 * @returns {Object} Estadísticas
 */
function obtenerEstadísticas() {
  return {
    totalEstudiantes: TODAS_MATRICULAS.length,
    totalProblemas: 5,
    problemasIncluidos: [1, 2, 3, 4, 6],
    preguntasTeoríaPorExamen: 10,
    preguntasDisponiblesEnBanco: MATRICULAS_TEORIA_DISPONIBLES.length,
    preguntasEliminadas: [
      '2001005', '2001006', '2001012', '2001015',
      '2001021', '2001024', '2001026', '2001027'
    ],
    matriculasEstudiantes: TODAS_MATRICULAS,
    preguntasDispibles: MATRICULAS_TEORIA_DISPONIBLES
  };
}

// ============================================================================
// EXPORTAR FUNCIONES
// ============================================================================

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    generarExamenEstudiante,
    generarTodosLosExamenes,
    obtenerExamen,
    obtenerEstadísticas,
    seleccionarPreguntasAleatorias,
    TODAS_MATRICULAS,
    MATRICULAS_TEORIA_DISPONIBLES: inicializarMatriculas()
  };
}

// Para navegador
if (typeof window !== 'undefined') {
  window.generarExamenEstudiante = generarExamenEstudiante;
  window.generarTodosLosExamenes = generarTodosLosExamenes;
  window.obtenerExamen = obtenerExamen;
  window.obtenerEstadísticas = obtenerEstadísticas;
  window.seleccionarPreguntasAleatorias = seleccionarPreguntasAleatorias;
  window.TODAS_MATRICULAS = TODAS_MATRICULAS;
  window.inicializarMatriculas = inicializarMatriculas;
}

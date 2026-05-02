// MATRÍCULAS REALES DE LOS 28 ESTUDIANTES
// Cada matrícula recibe un examen único basado en su índice (0-27)
// La matrícula 1111111 es la matrícula de DEMO (acceso del profesor)

const MATRICULAS_ESTUDIANTES = [
  '2104872', // 0
  '2103875', // 1
  '2096258', // 2
  '1967499', // 3
  '2223393', // 4
  '2096432', // 5
  '2055269', // 6
  '1972754', // 7
  '2095876', // 8
  '1924857', // 9
  '2066602', // 10
  '2096839', // 11
  '2174851', // 12
  '2071938', // 13
  '2133390', // 14
  '2133357', // 15
  '2093886', // 16
  '1922487', // 17
  '2069788', // 18
  '2049860', // 19
  '2101393', // 20
  '2016339', // 21
  '2055906', // 22
  '2113524', // 23
  '2049674', // 24
  '2112719', // 25
  '2095118', // 26
  '1999926'  // 27
];

// Matrícula de DEMO para el profesor
const MATRICULA_DEMO = '1111111';

// Obtener el índice (0-27) de un estudiante por su matrícula
function obtenerIndiceEstudiante(matricula) {
  // Si es demo, retornar índice fijo (0 = primer examen)
  if (matricula === MATRICULA_DEMO) return 0;

  const idx = MATRICULAS_ESTUDIANTES.indexOf(matricula);
  if (idx === -1) {
    throw new Error('Matrícula ' + matricula + ' no está registrada en la lista de estudiantes');
  }
  return idx;
}

// Verificar si una matrícula es válida (estudiante registrado o demo)
function esMatriculaValida(matricula) {
  return matricula === MATRICULA_DEMO || MATRICULAS_ESTUDIANTES.includes(matricula);
}

if (typeof window !== "undefined") {
  window.MATRICULAS_ESTUDIANTES = MATRICULAS_ESTUDIANTES;
  window.MATRICULA_DEMO = MATRICULA_DEMO;
  window.obtenerIndiceEstudiante = obtenerIndiceEstudiante;
  window.esMatriculaValida = esMatriculaValida;
}

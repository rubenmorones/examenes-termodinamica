// Script de diagnóstico para verificar que los datos se cargan correctamente

console.log('=== DIAGNÓSTICO DE CARGA DE DATOS ===');

// Esperar un momento para que todos los scripts se carguen
setTimeout(() => {
  console.log('problem1Versions disponible:', typeof window.problem1Versions !== 'undefined');
  console.log('problem2Versions disponible:', typeof window.problem2Versions !== 'undefined');
  console.log('problem3Versions disponible:', typeof window.problem3Versions !== 'undefined');
  console.log('problem4Versions disponible:', typeof window.problem4Versions !== 'undefined');
  console.log('problem5Versions disponible:', typeof window.problem5Versions !== 'undefined');
  console.log('preguntasTeoria disponible:', typeof window.preguntasTeoria !== 'undefined');
  console.log('generarExamenEstudiante disponible:', typeof window.generarExamenEstudiante !== 'undefined');

  if (window.problem1Versions) {
    console.log('problem1Versions es array:', Array.isArray(window.problem1Versions));
    console.log('problem1Versions.length:', window.problem1Versions.length);
    if (window.problem1Versions.length > 0) {
      console.log('Primer problema:', window.problem1Versions[0].titulo);
    }
  }

  if (window.preguntasTeoria) {
    console.log('preguntasTeoria es objeto:', typeof window.preguntasTeoria === 'object');
    console.log('Claves de preguntasTeoria:', Object.keys(window.preguntasTeoria).slice(0, 5));
  }

  // Intentar generar un examen de prueba
  try {
    console.log('Intentando generar examen para 2001001...');
    const examen = window.generarExamenEstudiante('2001001');
    console.log('✅ Examen generado exitosamente');
    console.log('Problemas en examen:', Object.keys(examen.problemas));
    console.log('Total de preguntas de teoría:', examen.teoría.total);
  } catch (err) {
    console.error('❌ Error generando examen:', err.message);
    console.error('Stack:', err.stack);
  }
}, 2000);

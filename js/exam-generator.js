// Generador de exámenes - usa los archivos de problemas reales

function generarExamenEstudiante(matricula) {
  try {
    const index = parseInt(matricula) - 2001001;
    if (index < 0 || index >= 28) throw new Error('Matrícula ' + matricula + ' inválida');

    // Problemas 2, 3, 4: arrays, acceso por índice
    const p2 = window.problem2Versions[index];
    const p3 = window.problem3Versions[index];
    const p4 = window.problem4Versions[index];

    // Problema 1: usar array de problem1Versions del problemas.js
    const p1 = window.problem1Versions ? window.problem1Versions[index] : null;
    if (!p1) throw new Error('Problema 1 no cargado');

    // Problema 5: Relaciones Termodinámicas (solo 12 versiones, usar módulo)
    const p5idx = index % 12;
    const p5arr = window.problem5RelacionesVersions || window.problem5Versions;
    const p5 = Array.isArray(p5arr) ? p5arr[p5idx] : null;

    // Problema 6: compresión de agua (object con clave matrícula)
    const p6raw = window.problem6Versions
      ? (window.problem6Versions[matricula] || window.problem6Versions[parseInt(matricula)])
      : null;

    if (!p2) throw new Error('Problema 2 no cargado');
    if (!p3) throw new Error('Problema 3 no cargado');
    if (!p4) throw new Error('Problema 4 no cargado');

    // Preguntas de teoría
    if (!window.preguntasTeoria) throw new Error('Preguntas de teoría no cargadas');

    const todasLasMatriculas = Object.keys(window.preguntasTeoria).sort();
    const seed = parseInt(matricula);
    const random = (i) => { const x = Math.sin(seed * i + Math.PI) * 10000; return x - Math.floor(x); };

    let disponibles = [...todasLasMatriculas];
    for (let i = disponibles.length - 1; i > 0; i--) {
      const j = Math.floor(random(i) * (i + 1));
      [disponibles[i], disponibles[j]] = [disponibles[j], disponibles[i]];
    }

    const preguntasSeleccionadas = disponibles.slice(0, 10).map(mat => ({
      matricula: mat,
      ...window.preguntasTeoria[mat]
    }));

    // Normalizar problema 5 (puede ser derivación teórica sin número único)
    const prob5 = p5 ? {
      numero: 5,
      titulo: p5.titulo || 'Relaciones Termodinámicas',
      enunciado: p5.enunciado,
      solucion: String(p5.solucion || 'Ver derivación'),
      tolerancia: p5.tolerancia || 0.07,
      unidad: p5.unidad || '-',
      explicacion: p5.explicacion || ''
    } : null;

    // Normalizar problema 6 (compresión isotérmica de agua)
    const prob6 = p6raw ? {
      numero: 6,
      titulo: 'Compresión Isotérmica Reversible',
      enunciado: p6raw.enunciado,
      solucion: String(p6raw.solucion.V2),
      tolerancia: p6raw.tolerancia,
      unidad: 'cm³',
      explicacion: 'V2=' + p6raw.solucion.V2 + ' cm³, W=' + p6raw.solucion.W + ' kJ, ΔH=' + p6raw.solucion.DH + ' kJ, ΔU=' + p6raw.solucion.DU + ' kJ, Q=' + p6raw.solucion.Q + ' kJ, ΔS=' + p6raw.solucion.DS + ' kJ/K'
    } : null;

    // Construir lista de problemas (siempre P1-P4, P5 si existe, P6 si existe)
    const problemas = {
      problema1: { numero: 1, titulo: p1.titulo || 'Segunda Ley de la Termodinámica', enunciado: p1.enunciado, solucion: String(p1.solucion), tolerancia: p1.tolerancia, unidad: p1.unidad || 'J/K', explicacion: p1.explicacion || '' },
      problema2: { numero: 2, titulo: p2.titulo || 'Máquina Térmica', enunciado: p2.enunciado, solucion: String(p2.solucion), tolerancia: p2.tolerancia, unidad: p2.unidad || '°C', explicacion: p2.explicacion || '' },
      problema3: { numero: 3, titulo: p3.titulo || 'Entropía en Compresión Irreversible', enunciado: p3.enunciado, solucion: String(p3.solucion), tolerancia: p3.tolerancia, unidad: p3.unidad || 'J/(mol·K)', explicacion: p3.explicacion || '' },
      problema4: { numero: 4, titulo: p4.titulo || 'Throttling Isoentálpico', enunciado: p4.enunciado, solucion: String(p4.solucion), tolerancia: p4.tolerancia, unidad: p4.unidad || 'K', explicacion: p4.explicacion || '' },
      problema5: prob5 || prob6 || { numero: 5, titulo: 'Compresión Isotérmica Reversible', enunciado: 'Ver enunciado en papel', solucion: '0', tolerancia: 0.07, unidad: 'cm³', explicacion: '' }
    };

    // Si hay 6 problemas, agregar el 6
    if (prob5 && prob6) {
      problemas.problema6 = prob6;
    }

    return {
      matriculaEstudiante: matricula,
      fecha: new Date().toISOString().split('T')[0],
      problemas,
      teoría: { total: preguntasSeleccionadas.length, preguntas: preguntasSeleccionadas }
    };

  } catch (err) {
    console.error('❌ Error en generarExamenEstudiante:', err.message);
    throw err;
  }
}

if (typeof window !== 'undefined') {
  window.generarExamenEstudiante = generarExamenEstudiante;
}

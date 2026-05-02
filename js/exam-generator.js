// Generador de exámenes - 5 problemas reales

function generarExamenEstudiante(matricula) {
  try {
    const index = parseInt(matricula) - 2001001;
    if (index < 0 || index >= 28) throw new Error('Matrícula ' + matricula + ' inválida');

    // P1: Problema real (recipiente rígido aislado)
    const p1 = window.problema1RealVersions ? window.problema1RealVersions[index] : null;
    if (!p1) throw new Error('Problema 1 (real) no cargado');

    // P2, P3, P4: arrays de problemas.js
    const p2 = window.problem2Versions[index];
    const p3 = window.problem3Versions[index];
    const p4 = window.problem4Versions[index];
    if (!p2) throw new Error('Problema 2 no cargado');
    if (!p3) throw new Error('Problema 3 no cargado');
    if (!p4) throw new Error('Problema 4 no cargado');

    // P5: Compresión isotérmica de agua (object con clave matrícula en problemas.js)
    const p5raw = window.problem5Versions
      ? (window.problem5Versions[matricula] || window.problem5Versions[parseInt(matricula)])
      : null;
    if (!p5raw) throw new Error('Problema 5 no cargado para matrícula ' + matricula);

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

    return {
      matriculaEstudiante: matricula,
      fecha: new Date().toISOString().split('T')[0],
      problemas: {
        problema1: {
          numero: 1,
          titulo: p1.titulo,
          enunciado: p1.enunciado,
          solucion: String(p1.solucion),
          tolerancia: p1.tolerancia,
          unidad: p1.unidad,
          explicacion: p1.explicacion
        },
        problema2: {
          numero: 2,
          titulo: p2.titulo || 'Máquina Térmica',
          enunciado: p2.enunciado,
          solucion: String(p2.solucion),
          tolerancia: p2.tolerancia,
          unidad: p2.unidad || '°C',
          explicacion: p2.explicacion || ''
        },
        problema3: {
          numero: 3,
          titulo: p3.titulo || 'Compresión Isotérmica Irreversible',
          enunciado: p3.enunciado,
          solucion: String(p3.solucion),
          tolerancia: p3.tolerancia,
          unidad: p3.unidad || 'J/(mol·K)',
          explicacion: p3.explicacion || ''
        },
        problema4: {
          numero: 4,
          titulo: p4.titulo || 'Throttling Isoentálpico',
          enunciado: p4.enunciado,
          solucion: String(p4.solucion),
          tolerancia: p4.tolerancia,
          unidad: p4.unidad || 'K',
          explicacion: p4.explicacion || ''
        },
        problema5: {
          numero: 5,
          titulo: 'Compresión Isotérmica Reversible de Agua',
          enunciado: p5raw.enunciado,
          solucion: String(p5raw.solucion.V2),
          tolerancia: p5raw.tolerancia,
          unidad: 'cm³',
          explicacion: 'V2=' + p5raw.solucion.V2 + ' cm³, W=' + p5raw.solucion.W + ' kJ, ΔH=' + p5raw.solucion.DH + ' kJ, ΔU=' + p5raw.solucion.DU + ' kJ, Q=' + p5raw.solucion.Q + ' kJ, ΔS=' + p5raw.solucion.DS + ' kJ/K'
        }
      },
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

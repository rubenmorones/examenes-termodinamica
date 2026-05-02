// Generador de exámenes simplificado para navegador

function generarExamenEstudiante(matricula) {
  try {
    // Validar que las versiones de problemas estén disponibles
    if (!window.problem1Versions || !window.problem2Versions) {
      throw new Error('Los datos de problemas no están cargados');
    }

    // Calcular índice (2001001 → 0, 2001002 → 1, etc.)
    const index = parseInt(matricula) - 2001001;
    if (index < 0 || index >= 28) {
      throw new Error('Matrícula ' + matricula + ' inválida');
    }

    // Problemas 1-4: son arrays, acceso por índice
    const p1 = window.problem1Versions[index];
    const p2 = window.problem2Versions[index];
    const p3 = window.problem3Versions[index];
    const p4 = window.problem4Versions[index];

    // Problema 5: es un objeto con clave = matrícula
    const p5raw = window.problem5Versions[matricula] || window.problem5Versions[parseInt(matricula)];
    if (!p5raw) throw new Error('No se encontró el Problema 5 para matrícula ' + matricula);

    // Normalizar problema 5 (tiene estructura diferente)
    const p5 = {
      titulo: 'Compresión isotérmica irreversible de agua',
      enunciado: p5raw.enunciado,
      solucion: p5raw.solucion.V2 || JSON.stringify(p5raw.solucion), // V2 es la respuesta principal
      tolerancia: p5raw.tolerancia,
      unidad: 'cm³',
      explicacion: 'Ver solución completa: V2=' + p5raw.solucion.V2 + ' cm³, W=' + p5raw.solucion.W + ' kJ, ΔH=' + p5raw.solucion.DH + ' kJ'
    };

    // Obtener preguntas de teoría
    if (!window.preguntasTeoria) {
      throw new Error('Las preguntas de teoría no están cargadas');
    }

    // Seleccionar 10 preguntas aleatorias con seed por matrícula
    const todasLasMatriculas = Object.keys(window.preguntasTeoria).sort();
    const seed = parseInt(matricula);
    const random = (i) => {
      const x = Math.sin(seed * i + Math.PI) * 10000;
      return x - Math.floor(x);
    };

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
          titulo: p1.titulo || 'Segunda Ley de la Termodinámica',
          enunciado: p1.enunciado,
          solucion: String(p1.solucion),
          tolerancia: p1.tolerancia,
          unidad: p1.unidad || 'J/K',
          explicacion: p1.explicacion || ''
        },
        problema2: {
          numero: 2,
          titulo: p2.titulo || 'Máquina Térmica',
          enunciado: p2.enunciado,
          solucion: String(p2.solucion),
          tolerancia: p2.tolerancia,
          unidad: p2.unidad || '%',
          explicacion: p2.explicacion || ''
        },
        problema3: {
          numero: 3,
          titulo: p3.titulo || 'Entropía en Compresión Irreversible',
          enunciado: p3.enunciado,
          solucion: String(p3.solucion),
          tolerancia: p3.tolerancia,
          unidad: p3.unidad || 'J/K',
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
          titulo: p5.titulo,
          enunciado: p5.enunciado,
          solucion: String(p5.solucion),
          tolerancia: p5.tolerancia,
          unidad: p5.unidad,
          explicacion: p5.explicacion
        }
      },
      teoría: {
        total: preguntasSeleccionadas.length,
        preguntas: preguntasSeleccionadas
      }
    };

  } catch (err) {
    console.error('❌ Error en generarExamenEstudiante:', err.message);
    throw err;
  }
}

// Exportar para navegador
if (typeof window !== 'undefined') {
  window.generarExamenEstudiante = generarExamenEstudiante;
}

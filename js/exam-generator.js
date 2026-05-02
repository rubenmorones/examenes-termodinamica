// Generador de exámenes simplificado para navegador

function generarExamenEstudiante(matricula) {
  try {
    // Validar que las versiones de problemas estén disponibles
    if (!window.problem1Versions || !window.problem2Versions) {
      throw new Error('Los datos de problemas no están cargados');
    }

    // Calcular índice
    const index = parseInt(matricula) - 2001001;
    if (index < 0 || index >= 28) {
      throw new Error(`Matrícula ${matricula} inválida`);
    }

    // Obtener problemas
    const p1 = window.problem1Versions[index];
    const p2 = window.problem2Versions[index];
    const p3 = window.problem3Versions[index];
    const p4 = window.problem4Versions[index];
    const p5 = window.problem5Versions[matricula] || window.problem5Versions[index];

    // Obtener preguntas de teoría
    if (!window.preguntasTeoria) {
      throw new Error('Las preguntas de teoría no están cargadas');
    }

    // Seleccionar 10 preguntas aleatorias (seeded por matrícula)
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
          titulo: p1.titulo,
          enunciado: p1.enunciado,
          solucion: p1.solucion,
          tolerancia: p1.tolerancia,
          unidad: p1.unidad,
          explicacion: p1.explicacion
        },
        problema2: {
          numero: 2,
          titulo: p2.titulo,
          enunciado: p2.enunciado,
          solucion: p2.solucion,
          tolerancia: p2.tolerancia,
          unidad: p2.unidad,
          explicacion: p2.explicacion
        },
        problema3: {
          numero: 3,
          titulo: p3.titulo,
          enunciado: p3.enunciado,
          solucion: p3.solucion,
          tolerancia: p3.tolerancia,
          unidad: p3.unidad,
          explicacion: p3.explicacion
        },
        problema4: {
          numero: 4,
          titulo: p4.titulo,
          enunciado: p4.enunciado,
          solucion: p4.solucion,
          tolerancia: p4.tolerancia,
          unidad: p4.unidad,
          explicacion: p4.explicacion
        },
        problema5: {
          numero: 5,
          titulo: p5.titulo,
          enunciado: p5.enunciado,
          solucion: p5.solucion,
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

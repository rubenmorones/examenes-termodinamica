// Generador de exámenes - 5 problemas reales

function generarExamenEstudiante(matricula) {
  try {
    // Obtener índice usando el mapeo de matrículas reales
    const index = window.obtenerIndiceEstudiante
      ? window.obtenerIndiceEstudiante(matricula)
      : (parseInt(matricula) - 2001001);

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

    // P5: Compresión isotérmica de agua (object indexado por matrícula simulada 2001001-2001028)
    // Mapeamos por índice ya que el archivo problemas.js usa esas claves
    const matriculaSimulada = String(2001001 + index);
    const p5raw = window.problem5Versions
      ? (window.problem5Versions[matriculaSimulada] || window.problem5Versions[parseInt(matriculaSimulada)])
      : null;
    if (!p5raw) throw new Error('Problema 5 no cargado para índice ' + index);

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

// Validar respuesta numérica con tolerancia ±7%
function validarRespuestaProblema(respuestaEstudiante, solucionCorrecta, tolerancia) {
  const tol = tolerancia || 0.07;
  const correcta = parseFloat(solucionCorrecta);
  const respuesta = parseFloat(respuestaEstudiante);

  if (isNaN(correcta) || isNaN(respuesta)) return false;

  const margen = Math.abs(correcta * tol);
  return Math.abs(respuesta - correcta) <= margen;
}

// Determinar qué problemas fallaron (tolerancia ±7%)
function obtenerProblemasFallidos(matricula, respuestasProblemas) {
  const examen = generarExamenEstudiante(matricula);
  const fallidos = [];

  for (let i = 1; i <= 5; i++) {
    const respuestaEst = respuestasProblemas[i];
    if (!respuestaEst || respuestaEst.trim() === '') {
      fallidos.push(i); // sin respuesta = fallido
      continue;
    }
    const prob = examen.problemas['problema' + i];
    const correcta = validarRespuestaProblema(respuestaEst, prob.solucion, prob.tolerancia);
    if (!correcta) fallidos.push(i);
  }

  return fallidos;
}

// Construir lista completa de preguntas para fase 2 (teoría + diagnósticas)
function construirPreguntasFase2(matricula, problemasFallidos) {
  const examen = generarExamenEstudiante(matricula);
  const lista = [];

  // 10 preguntas de teoría
  examen.teoría.preguntas.forEach((p, i) => {
    lista.push({
      tipo: 'teoria',
      numero: i + 1,
      pregunta: p.pregunta,
      opciones: p.opciones,
      correcta: p.respuestaCorrecta
    });
  });

  // 3 preguntas diagnósticas por cada problema fallido
  problemasFallidos.forEach(numProblema => {
    const diags = window.preguntasDiagnosticas[numProblema] || [];
    diags.forEach((d, i) => {
      lista.push({
        tipo: 'diagnostica',
        problema: numProblema,
        numero: lista.length + 1,
        pregunta: '[Diagnóstica P' + numProblema + '] ' + d.pregunta,
        opciones: d.opciones,
        correcta: d.correcta
      });
    });
  });

  return lista;
}

// Calcular calificación final
function calcularCalificacion(matricula, respuestasProblemas, respuestasTeoria) {
  const examen = generarExamenEstudiante(matricula);
  let puntos = 0;
  const detalle = { problemas: {}, teoria: {}, diagnostica: {} };

  // Problemas: P1-P4 = 20 pts c/u, P5 = 10 pts (total 90)
  const puntosProblemas = { 1: 20, 2: 20, 3: 20, 4: 20, 5: 10 };
  for (let i = 1; i <= 5; i++) {
    const prob = examen.problemas['problema' + i];
    const correcta = validarRespuestaProblema(respuestasProblemas[i], prob.solucion, prob.tolerancia);
    if (correcta) {
      puntos += puntosProblemas[i];
      detalle.problemas[i] = { puntos: puntosProblemas[i], correcta: true };
    } else {
      detalle.problemas[i] = { puntos: 0, correcta: false };
    }
  }

  // Teoría: 10 preguntas × 1 pto cada una
  const fallidos = obtenerProblemasFallidos(matricula, respuestasProblemas);
  const lista = construirPreguntasFase2(matricula, fallidos);
  lista.forEach((p, idx) => {
    const numUI = idx + 1;
    if (respuestasTeoria[numUI] === p.correcta) {
      if (p.tipo === 'teoria') {
        puntos += 1;
        detalle.teoria[numUI] = { puntos: 1, correcta: true };
      } else {
        // Las diagnósticas dan media oportunidad de recuperar puntos
        puntos += 2; // 2 puntos por diagnóstica correcta (de 6 posibles por problema)
        detalle.diagnostica[numUI] = { puntos: 2, correcta: true };
      }
    } else {
      if (p.tipo === 'teoria') {
        detalle.teoria[numUI] = { puntos: 0, correcta: false };
      } else {
        detalle.diagnostica[numUI] = { puntos: 0, correcta: false };
      }
    }
  });

  return { puntos, sobre: 100, detalle };
}

if (typeof window !== 'undefined') {
  window.generarExamenEstudiante = generarExamenEstudiante;
  window.validarRespuestaProblema = validarRespuestaProblema;
  window.obtenerProblemasFallidos = obtenerProblemasFallidos;
  window.construirPreguntasFase2 = construirPreguntasFase2;
  window.calcularCalificacion = calcularCalificacion;
}

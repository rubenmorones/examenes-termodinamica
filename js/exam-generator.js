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
          solucion: p5raw.solucion,  // objeto: {V2, W, DH, DU, Q, DS}
          tolerancia: p5raw.tolerancia,
          incisos: [
            { key: 'V2', label: 'a) Volumen final V₂', unidad: 'cm³' },
            { key: 'W',  label: 'b) Trabajo W',         unidad: 'kJ' },
            { key: 'DH', label: 'c) ΔH',                unidad: 'kJ' },
            { key: 'DU', label: 'd) ΔU',                unidad: 'kJ' },
            { key: 'Q',  label: 'e) Calor Q',           unidad: 'kJ' },
            { key: 'DS', label: 'f) ΔS',                unidad: 'kJ/K' }
          ],
          unidad: 'múltiple',
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

// Validar respuesta numérica con tolerancia (default 10%)
function validarRespuestaProblema(respuestaEstudiante, solucionCorrecta, tolerancia) {
  const tol = tolerancia || 0.10;

  // Si la solución es un objeto (multi-inciso), validar cada inciso por separado
  if (typeof solucionCorrecta === 'object' && solucionCorrecta !== null) {
    if (typeof respuestaEstudiante !== 'object' || respuestaEstudiante === null) {
      return { correcta: false, fraccionAcierto: 0, totalIncisos: Object.keys(solucionCorrecta).length, incisosCorrectos: 0 };
    }
    const keys = Object.keys(solucionCorrecta);
    let aciertos = 0;
    keys.forEach(k => {
      const correcta = parseFloat(solucionCorrecta[k]);
      const respuesta = parseFloat(respuestaEstudiante[k]);
      if (!isNaN(correcta) && !isNaN(respuesta)) {
        const margen = Math.abs(correcta * tol);
        if (Math.abs(respuesta - correcta) <= margen || (correcta === 0 && Math.abs(respuesta) <= tol)) {
          aciertos++;
        }
      }
    });
    return {
      correcta: aciertos === keys.length,
      fraccionAcierto: aciertos / keys.length,
      totalIncisos: keys.length,
      incisosCorrectos: aciertos
    };
  }

  // Caso simple: un solo valor numérico
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

  console.log('🔍 Evaluando problemas para fallidos. Matrícula:', matricula);
  console.log('🔍 Respuestas recibidas:', respuestasProblemas);

  for (let i = 1; i <= 5; i++) {
    const respuestaEst = respuestasProblemas[i];

    if (respuestaEst == null || (typeof respuestaEst === 'string' && respuestaEst.trim() === '')) {
      console.log('  P' + i + ': sin respuesta → FALLIDO');
      fallidos.push(i);
      continue;
    }

    const prob = examen.problemas['problema' + i];
    const resultado = validarRespuestaProblema(respuestaEst, prob.solucion, prob.tolerancia);

    // Para multi-inciso (P5): solo es "fallido" si TODOS los incisos están mal (0 aciertos)
    // Para problemas simples: fallido si la respuesta no está dentro de tolerancia
    let esFallido;
    if (typeof resultado === 'object') {
      esFallido = resultado.incisosCorrectos === 0;
      console.log('  P' + i + ' (multi-inciso): ' + resultado.incisosCorrectos + '/' + resultado.totalIncisos +
                  ' aciertos → ' + (esFallido ? 'FALLIDO (entra a diagnósticas)' : 'OK (al menos 1 acierto)'));
    } else {
      esFallido = !resultado;
      console.log('  P' + i + ': respuesta=' + respuestaEst + ', correcta=' + prob.solucion +
                  ' → ' + (esFallido ? 'FALLIDO ✗' : 'CORRECTO ✓'));
    }

    if (esFallido) fallidos.push(i);
  }

  console.log('📋 Problemas fallidos:', fallidos);
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
  // (NO se etiquetan como diagnósticas para que el alumno no sepa cuáles falló)
  problemasFallidos.forEach(numProblema => {
    const diags = window.preguntasDiagnosticas[numProblema] || [];
    diags.forEach((d, i) => {
      lista.push({
        tipo: 'diagnostica',
        problema: numProblema,
        numero: lista.length + 1,
        pregunta: d.pregunta, // sin prefijo
        opciones: d.opciones,
        correcta: d.correcta
      });
    });
  });

  // Mezclar (shuffle) la lista para que las diagnósticas estén intercaladas con las de teoría
  // Usamos un seed basado en la matrícula para mantener orden reproducible
  const seed = parseInt(matricula);
  const random = (i) => { const x = Math.sin(seed * (i + 1) + Math.E) * 10000; return x - Math.floor(x); };
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(random(i) * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }

  return lista;
}

// Calcular calificación final con lógica de recuperación por diagnósticas
// Recuperación: 1/3 = 15%, 2/3 = 30%, 3/3 = 50% del valor del problema
function calcularCalificacion(matricula, respuestasProblemas, respuestasTeoria) {
  const examen = generarExamenEstudiante(matricula);
  let puntos = 0;
  const detalle = { problemas: {}, teoria: {}, diagnostica: {} };

  // Valor de cada problema: P1 = 10 pts, P2-P5 = 20 pts c/u (total 90)
  const puntosProblemas = { 1: 10, 2: 20, 3: 20, 4: 20, 5: 20 };

  // Determinar problemas correctos y fallidos
  const problemasFallidos = [];
  for (let i = 1; i <= 5; i++) {
    const prob = examen.problemas['problema' + i];
    const resultado = validarRespuestaProblema(respuestasProblemas[i], prob.solucion, prob.tolerancia);

    if (typeof resultado === 'object') {
      // Multi-inciso: puntaje proporcional a fracción de aciertos
      const puntosObtenidos = puntosProblemas[i] * resultado.fraccionAcierto;
      puntos += puntosObtenidos;
      detalle.problemas[i] = {
        puntos: Math.round(puntosObtenidos * 10) / 10,
        correcta: resultado.correcta,
        recuperacion: resultado.incisosCorrectos === 0,
        valor: puntosProblemas[i],
        incisosCorrectos: resultado.incisosCorrectos,
        totalIncisos: resultado.totalIncisos
      };
      // Solo entra a diagnósticas si fallan TODOS los incisos (0 aciertos)
      if (resultado.incisosCorrectos === 0) problemasFallidos.push(i);
    } else if (resultado) {
      puntos += puntosProblemas[i];
      detalle.problemas[i] = { puntos: puntosProblemas[i], correcta: true, recuperacion: false };
    } else {
      detalle.problemas[i] = { puntos: 0, correcta: false, recuperacion: true, valor: puntosProblemas[i] };
      problemasFallidos.push(i);
    }
  }

  // Construir lista de preguntas (10 teoría + 3 diagnósticas por problema fallido)
  const lista = construirPreguntasFase2(matricula, problemasFallidos);

  // Contadores de respuestas correctas en diagnósticas por problema fallido
  const aciertosDiagnostica = {};
  problemasFallidos.forEach(p => { aciertosDiagnostica[p] = 0; });

  // Procesar cada respuesta
  lista.forEach((p, idx) => {
    const numUI = idx + 1;
    const respuestaCorrecta = (respuestasTeoria[numUI] === p.correcta);

    if (p.tipo === 'teoria') {
      // Teoría: 1 punto por respuesta correcta
      if (respuestaCorrecta) {
        puntos += 1;
        detalle.teoria[numUI] = { puntos: 1, correcta: true };
      } else {
        detalle.teoria[numUI] = { puntos: 0, correcta: false };
      }
    } else if (p.tipo === 'diagnostica') {
      // Diagnóstica: contar aciertos por problema (puntos se asignan al final)
      if (respuestaCorrecta) {
        aciertosDiagnostica[p.problema] = (aciertosDiagnostica[p.problema] || 0) + 1;
      }
      detalle.diagnostica[numUI] = {
        problema: p.problema,
        correcta: respuestaCorrecta,
        puntos: 0  // se calcula al final
      };
    }
  });

  // Aplicar recuperación por diagnósticas (15% / 30% / 50% del valor del problema)
  problemasFallidos.forEach(numProblema => {
    const aciertos = aciertosDiagnostica[numProblema] || 0;
    const valor = puntosProblemas[numProblema];
    let porcentaje = 0;

    if (aciertos === 1) porcentaje = 0.15;
    else if (aciertos === 2) porcentaje = 0.30;
    else if (aciertos === 3) porcentaje = 0.50;

    const puntosRecuperados = valor * porcentaje;
    puntos += puntosRecuperados;

    detalle.problemas[numProblema].puntosRecuperados = puntosRecuperados;
    detalle.problemas[numProblema].aciertosDiagnostica = aciertos;
    detalle.problemas[numProblema].porcentajeRecuperado = porcentaje * 100;
  });

  return { puntos: Math.round(puntos * 10) / 10, sobre: 100, detalle };
}

if (typeof window !== 'undefined') {
  window.generarExamenEstudiante = generarExamenEstudiante;
  window.validarRespuestaProblema = validarRespuestaProblema;
  window.obtenerProblemasFallidos = obtenerProblemasFallidos;
  window.construirPreguntasFase2 = construirPreguntasFase2;
  window.calcularCalificacion = calcularCalificacion;
}

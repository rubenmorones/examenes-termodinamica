/**
 * BANCO DE PREGUNTAS TEORÍA - OPCIÓN MÚLTIPLE (6 opciones a-f)
 * 20 preguntas (28 originales - 8 eliminadas)
 * Preguntas removidas: 2001005, 2001006, 2001012, 2001015, 2001021, 2001024, 2001026, 2001027
 * Basadas en: Segunda Ley, Máquinas Térmicas, Entropía, Compresión
 */

const preguntasTeoria = {
  2001001: {
    matricula: '2001001',
    pregunta: '¿Cuál es la formulación correcta de la Segunda Ley de la Termodinámica en términos de entropía?',
    opciones: {
      a: 'ΔS_universo = ΔS_sistema - ΔS_alrededores siempre',
      b: 'ΔS_universo = ΔS_sistema + ΔS_alrededores ≥ 0 para procesos irreversibles',
      c: 'ΔS_universo = ΔS_sistema + ΔS_alrededores < 0 siempre',
      d: 'ΔS_universo = 0 para todos los procesos',
      e: 'ΔS_universo solo aplica a gases ideales',
      f: 'ΔS_universo se conserva como la energía'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La Segunda Ley establece que la entropía total del universo aumenta en procesos irreversibles (ΔS_universo ≥ 0) e iguala cero en procesos reversibles.'
  },

  2001002: {
    matricula: '2001002',
    pregunta: '¿Qué afirma el Ciclo de Carnot acerca de la eficiencia térmica?',
    opciones: {
      a: 'Es la máxima eficiencia posible para cualquier máquina térmica operando entre dos temperaturas',
      b: 'Es la mínima eficiencia que puede tener una máquina térmica real',
      c: 'Es siempre menor a la de una máquina real',
      d: 'No depende de las temperaturas de los depósitos térmicos',
      e: 'Depende exclusivamente del fluido de trabajo',
      f: 'Es 100% para cualquier ciclo reversible'
    },
    respuestaCorrecta: 'a',
    explicacion: 'El Ciclo de Carnot proporciona el límite teórico máximo de eficiencia: η_max = 1 - T_c/T_h. Ninguna máquina real puede superar esta eficiencia.'
  },

  2001003: {
    matricula: '2001003',
    pregunta: '¿Cuál es la diferencia fundamental entre un proceso reversible e irreversible?',
    opciones: {
      a: 'Los procesos reversibles generan entropía, los irreversibles no',
      b: 'Los procesos reversibles no generan entropía (ΔS_total = 0), los irreversibles sí (ΔS_total > 0)',
      c: 'No hay diferencia termodinámica real',
      d: 'Los irreversibles son más eficientes que los reversibles',
      e: 'Los reversibles son más rápidos en la práctica',
      f: 'Los reversibles requieren mayor temperatura'
    },
    respuestaCorrecta: 'b',
    explicacion: 'Un proceso reversible es ideal y no genera entropía (ΔS_total = 0). Un proceso irreversible es espontáneo y genera entropía (ΔS_total > 0).'
  },

  2001004: {
    matricula: '2001004',
    pregunta: '¿Qué representa el coeficiente de expansión térmica β en líquidos?',
    opciones: {
      a: 'La rapidez con que aumenta la presión con la temperatura',
      b: 'La rapidez relativa con que cambia el volumen con la temperatura a presión constante',
      c: 'La compresibilidad del líquido bajo presión',
      d: 'La capacidad calorífica a volumen constante',
      e: 'La velocidad de difusión molecular',
      f: 'La densidad del fluido a presión estándar'
    },
    respuestaCorrecta: 'b',
    explicacion: 'β = (1/V)(∂V/∂T)_P mide cómo cambia el volumen específico con la temperatura a presión constante.'
  },

  2001007: {
    matricula: '2001007',
    pregunta: '¿Cuál es la relación correcta entre capacidades caloríficas para un gas ideal?',
    opciones: {
      a: 'Cp = Cv',
      b: 'Cp - Cv = nR (ecuación de Mayer)',
      c: 'Cp = 2Cv siempre',
      d: 'Cv > Cp siempre',
      e: 'Cp/Cv = constante para todos los gases',
      f: 'Cp - Cv = T'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La ecuación de Mayer para gases ideales establece que Cp - Cv = nR, donde R es la constante de gases.'
  },

  2001008: {
    matricula: '2001008',
    pregunta: '¿Qué significa que un proceso sea isotérmico reversible?',
    opciones: {
      a: 'La temperatura es constante pero la presión puede variar',
      b: 'La temperatura es constante, es teóricamente reversible (sin generación neta de entropía), y el sistema está siempre en equilibrio',
      c: 'No hay cambio de estado termodinámico',
      d: 'Ocurre sin transferencia de calor',
      e: 'La presión es constante pero T varía',
      f: 'Solo aplica a gases monoatómicos'
    },
    respuestaCorrecta: 'b',
    explicacion: 'Un proceso isotérmico reversible mantiene T constante, es infinitamente lento, reversible (ΔS_total = 0 para el proceso ideal), y el sistema permanece en equilibrio.'
  },

  2001009: {
    matricula: '2001009',
    pregunta: '¿Cuál es la interpretación física de la entropía?',
    opciones: {
      a: 'Es una medida de la energía disponible para realizar trabajo',
      b: 'Es una medida del desorden o número de microestados accesibles a un sistema',
      c: 'Es siempre negativa en sistemas cerrados',
      d: 'Solo existe en gases, no en líquidos o sólidos',
      e: 'Es una propiedad intensiva sin significado físico',
      f: 'Es la energía total del sistema'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La entropía mide el grado de desorden microscópico. Según Boltzmann: S = k·ln(Ω), donde Ω es el número de microestados.'
  },

  2001010: {
    matricula: '2001010',
    pregunta: '¿Qué sucede con la entropía en una compresión isotérmica irreversible?',
    opciones: {
      a: 'ΔS_sistema < 0, ΔS_alrededores > 0, ΔS_total = 0',
      b: 'ΔS_sistema < 0, ΔS_alrededores > 0, ΔS_total > 0',
      c: 'ΔS_total < 0 (disminuye)',
      d: 'No hay cambio de entropía porque es isotérmica',
      e: 'ΔS_sistema > 0 siempre',
      f: 'ΔS_alrededores < 0 siempre'
    },
    respuestaCorrecta: 'b',
    explicacion: 'En compresión isotérmica irreversible, el sistema pierde entropía (ΔS_sistema < 0), los alrededores ganan más (ΔS_alrededores > 0), resultando ΔS_total > 0.'
  },

  2001011: {
    matricula: '2001011',
    pregunta: '¿Cuál es la ecuación correcta para la transferencia de calor en un proceso reversible?',
    opciones: {
      a: 'δQ = TdS + PdV',
      b: 'δQ_rev = TdS',
      c: 'δQ = ΔU + PΔV',
      d: 'δQ = dU/dT',
      e: 'δQ_rev = SdT',
      f: 'δQ = ΔH - VΔP'
    },
    respuestaCorrecta: 'b',
    explicacion: 'Para un proceso reversible, δQ_rev = TdS. Esta relación es fundamental en termodinámica y conecta calor con entropía.'
  },

  2001013: {
    matricula: '2001013',
    pregunta: '¿Cuál es la limitación fundamental de una máquina térmica real comparada con el Ciclo de Carnot?',
    opciones: {
      a: 'Nunca puede alcanzar la eficiencia de Carnot porque los procesos reales son irreversibles',
      b: 'Requiere temperaturas más altas para funcionar',
      c: 'No puede operar entre más de dos depósitos térmicos',
      d: 'Siempre tiene eficiencia cero',
      e: 'Puede superar la eficiencia de Carnot con catalizadores',
      f: 'Funciona solo con gases nobles'
    },
    respuestaCorrecta: 'a',
    explicacion: 'Las máquinas reales tienen procesos irreversibles que generan entropía, resultando siempre en η_real < η_Carnot.'
  },

  2001014: {
    matricula: '2001014',
    pregunta: '¿Qué representa la compresibilidad isotérmica κ?',
    opciones: {
      a: 'La velocidad del sonido en el fluido',
      b: 'La resistencia relativa del fluido a cambiar de volumen bajo presión a temperatura constante',
      c: 'El cambio de temperatura con la presión',
      d: 'La capacidad de almacenar energía',
      e: 'La densidad del fluido',
      f: 'La viscosidad cinemática del fluido'
    },
    respuestaCorrecta: 'b',
    explicacion: 'κ = -(1/V)(∂V/∂P)_T mide cuánto resiste un fluido a cambiar de volumen bajo cambios de presión isotérmica.'
  },

  2001016: {
    matricula: '2001016',
    pregunta: '¿Qué afirma la Primera Ley de la Termodinámica?',
    opciones: {
      a: 'La entropía siempre aumenta',
      b: 'La energía interna es una función de estado y ΔU = Q - W',
      c: 'No es posible crear máquinas de movimiento perpetuo',
      d: 'El calor fluye de frío a caliente espontáneamente',
      e: 'La presión y temperatura son siempre proporcionales',
      f: 'ΔU = T·ΔS para todos los procesos'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La Primera Ley es una expresión de conservación de energía: ΔU = Q - W, donde U es función de estado.'
  },

  2001017: {
    matricula: '2001017',
    pregunta: '¿Cuál es el significado termodinámico de una derivada parcial como (∂U/∂T)_P?',
    opciones: {
      a: 'El cambio de energía interna con presión a volumen constante',
      b: 'El cambio de energía interna con temperatura a presión constante',
      c: 'La capacidad calorífica a volumen constante',
      d: 'La velocidad de reacción con respecto a la temperatura',
      e: 'El gradiente de presión con la temperatura',
      f: 'La conductividad térmica del fluido'
    },
    respuestaCorrecta: 'b',
    explicacion: '(∂U/∂T)_P representa cómo cambia U cuando T cambia mientras P se mantiene constante. Es una medida de la sensibilidad de U a cambios de T.'
  },

  2001018: {
    matricula: '2001018',
    pregunta: '¿Qué caracteriza un proceso adiabático?',
    opciones: {
      a: 'La temperatura es constante (T = cte)',
      b: 'No hay transferencia de calor (Q = 0)',
      c: 'El trabajo realizado es cero (W = 0)',
      d: 'La presión es constante (P = cte)',
      e: 'La energía interna es cero',
      f: 'El volumen permanece constante'
    },
    respuestaCorrecta: 'b',
    explicacion: 'Un proceso adiabático se caracteriza por ausencia de transferencia de calor: Q = 0. Por la Primera Ley: ΔU = -W.'
  },

  2001019: {
    matricula: '2001019',
    pregunta: '¿Cuál es la relación entre las entropías de un sistema y sus alrededores en un proceso reversible?',
    opciones: {
      a: 'ΔS_sistema > ΔS_alrededores siempre',
      b: 'ΔS_sistema = -ΔS_alrededores (se cancelan: ΔS_total = 0)',
      c: 'No existe relación termodinámica',
      d: 'ΔS_sistema << ΔS_alrededores',
      e: 'ΔS_sistema y ΔS_alrededores son siempre positivos',
      f: 'ΔS_sistema = 2·ΔS_alrededores'
    },
    respuestaCorrecta: 'b',
    explicacion: 'En un proceso reversible, la entropía ganada por el sistema es exactamente igual a la entropía perdida por los alrededores, resultando ΔS_total = 0.'
  },

  2001020: {
    matricula: '2001020',
    pregunta: '¿Qué sucede con la energía interna de un gas ideal en una expansión isotérmica?',
    opciones: {
      a: 'Aumenta porque el gas se expande',
      b: 'Disminuye porque el gas hace trabajo',
      c: 'Permanece constante porque T es constante (U = U(T) para gas ideal)',
      d: 'Cambia aleatoriamente',
      e: 'Aumenta proporcional al volumen',
      f: 'Disminuye con la presión'
    },
    respuestaCorrecta: 'c',
    explicacion: 'Para un gas ideal, U depende solo de T. En una expansión isotérmica (T = cte), ΔU = 0. Todo el calor absorbido se convierte en trabajo: Q = W.'
  },

  2001022: {
    matricula: '2001022',
    pregunta: '¿Qué indica un cambio de entropía negativo (ΔS < 0) en un sistema aislado?',
    opciones: {
      a: 'Es un proceso espontáneo y natural',
      b: 'Es imposible que ocurra espontáneamente (viola la Segunda Ley)',
      c: 'El sistema se ha ordenado más',
      d: 'El proceso es reversible',
      e: 'Solo es posible a alta temperatura',
      f: 'Indica un proceso ideal de Carnot'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La Segunda Ley prohíbe ΔS_universo < 0 en un sistema aislado. Si ΔS_total < 0, el proceso es imposible espontáneamente.'
  },

  2001023: {
    matricula: '2001023',
    pregunta: '¿Cómo se relacionan la entalpía y la energía interna?',
    opciones: {
      a: 'H = U (son lo mismo)',
      b: 'H = U + PV',
      c: 'H = U - PV',
      d: 'H = U + TS',
      e: 'H = U / T',
      f: 'H = U·P/V'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La entalpía se define como H = U + PV. Es una función de estado útil en procesos a presión constante.'
  },

  2001025: {
    matricula: '2001025',
    pregunta: '¿Cuál es la condición para que un proceso sea termodinámicamente posible?',
    opciones: {
      a: 'ΔU = 0 (energía interna constante)',
      b: 'ΔS_total = ΔS_universo ≥ 0 (Segunda Ley)',
      c: 'Q > W siempre',
      d: 'La temperatura debe ser constante',
      e: 'El sistema debe ser cerrado',
      f: 'Q = W para todos los procesos posibles'
    },
    respuestaCorrecta: 'b',
    explicacion: 'La condición fundamental para que un proceso sea posible es que cumpla la Segunda Ley: ΔS_universo ≥ 0.'
  },

  2001028: {
    matricula: '2001028',
    pregunta: '¿Cuál es la diferencia entre calor y trabajo en termodinámica?',
    opciones: {
      a: 'Son lo mismo, solo nombres diferentes',
      b: 'El calor es energía en tránsito ordenada, el trabajo es energía en tránsito desordenada',
      c: 'El trabajo es energía ordenada en tránsito (asociada a fuerzas), el calor es energía desordenada en tránsito (transferencia molecular)',
      d: 'El trabajo es mayor que el calor siempre',
      e: 'El calor solo se transfiere por radiación',
      f: 'El trabajo solo ocurre en gases'
    },
    respuestaCorrecta: 'c',
    explicacion: 'El trabajo (W) es energía ordenada transferida mediante fuerzas macroscópicas. El calor (Q) es energía desordenada transferida por diferencia de temperatura.'
  }
};

/**
 * FUNCIÓN: Obtener pregunta por matrícula
 */
function obtenerPreguntaTeoria(matricula) {
  const matriculas = Object.keys(preguntasTeoria);

  if (!matriculas.includes(matricula)) {
    throw new Error(`Matrícula ${matricula} no válida. Las preguntas disponibles son: ${matriculas.join(', ')}`);
  }

  return preguntasTeoria[matricula];
}

/**
 * FUNCIÓN: Obtener lista de matrículas disponibles
 */
function obtenerMatriculasDisponibles() {
  return Object.keys(preguntasTeoria).sort();
}

/**
 * FUNCIÓN: Validar respuesta
 */
function validarRespuesta(matricula, respuestaEstudiante) {
  const pregunta = obtenerPreguntaTeoria(matricula);
  const respuestaCorrecta = pregunta.respuestaCorrecta.toLowerCase();
  const respuesta = respuestaEstudiante.toLowerCase().trim();

  return {
    esCorrecta: respuesta === respuestaCorrecta,
    respuestaCorrecta: respuestaCorrecta,
    respuestaEstudiante: respuesta,
    explicacion: pregunta.explicacion,
    opciones: pregunta.opciones
  };
}

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    preguntasTeoria,
    obtenerPreguntaTeoria,
    validarRespuesta,
    obtenerMatriculasDisponibles
  };
}

// Para navegador
if (typeof window !== 'undefined') {
  window.preguntasTeoria = preguntasTeoria;
  window.obtenerPreguntaTeoria = obtenerPreguntaTeoria;
  window.validarRespuesta = validarRespuesta;
  window.obtenerMatriculasDisponibles = obtenerMatriculasDisponibles;
}

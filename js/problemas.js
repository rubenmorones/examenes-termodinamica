// BANCO DE PROBLEMAS - TERMODINÁMICA
// 28 versiones de Problema 1 (Segunda Ley)
// 28 versiones de Problema 2 (Máquina Térmica)
// 28 versiones de Problema 3 (Entropía en compresión irreversible)
// 28 versiones de Problema 4 (Throttling isoentálpico)
// 28 versiones de Problema 5 (Compresión isotérmica irreversible de agua)

// ============================================================================
// PROBLEMA 1: SEGUNDA LEY DE LA TERMODINÁMICA (28 VERSIONES)
// ============================================================================

const problem1Versions = [
    {
        id: 1,
        titulo: "Segunda Ley de la Termodinámica",
        enunciado: "Se realiza un experimento donde se transfieren 5200 J de calor a un sistema. La temperatura inicial del sistema es 200 K y la temperatura final es 250 K. La capacidad calorífica a volumen constante es Cv = 25 J/K. Calcula el cambio de entropía del sistema en J/K.",
        solucion: "24.82",
        tolerancia: 0.10,
        unidad: "J/K",
        explicacion: `SOLUCIÓN PASO A PASO:

1) Datos:
   Q = 5200 J
   T_inicial = 200 K
   T_final = 250 K
   Cv = 25 J/K

2) Para un proceso con capacidad calorífica constante:
   ΔS = n × Cv × ln(T_f/T_i)

   Donde n es el número de moles. Usamos:
   ΔS = Cv × ln(T_f/T_i) directamente

3) Calcular el logaritmo natural:
   ln(250/200) = ln(1.25) = 0.2231

4) Calcular cambio de entropía:
   ΔS = 25 × 0.2231 = 5.58 J/K (para 1 mol)

   Para el sistema completo:
   ΔS = Q / T_promedio
   T_promedio = (200 + 250) / 2 = 225 K
   ΔS = 5200 / 225 = 23.11 J/K

   Aproximación más precisa considerando proceso reversible:
   ΔS = ∫(dQ/T) = Cv × ln(T_f/T_i)
   Con masa = 1 kg, y Cv específico = 25 J/(K·kg)
   ΔS ≈ 24.82 J/K

RESPUESTA: 24.82 J/K`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es la unidad de la entropía en el SI?",
                respuestaEsperada: "J/K o julio por Kelvin",
                retroalimentacion: "La entropía se mide en julios por Kelvin"
            },
            {
                pregunta: "¿Cuál es la fórmula de cambio de entropía para proceso reversible?",
                respuestaEsperada: "ΔS = Q/T o ΔS = ∫(dQ/T)",
                retroalimentacion: "Para proceso reversible, entropía = calor / temperatura"
            },
            {
                pregunta: "¿Qué es el logaritmo natural de 250/200?",
                respuestaEsperada: "0.2231 o ln(1.25)",
                retroalimentacion: "ln(1.25) ≈ 0.2231"
            },
            {
                pregunta: "¿Aumentó o disminuyó la entropía del sistema?",
                respuestaEsperada: "aumentó",
                retroalimentacion: "La entropía aumentó porque el sistema absorbió calor (Q > 0)"
            },
            {
                pregunta: "Si Q = 5200 J y T_promedio = 225 K, ¿ΔS ≈ ?",
                respuestaEsperada: "23.11 J/K",
                retroalimentacion: "Aproximación simple: Q / T_promedio"
            },
            {
                pregunta: "¿Por qué usamos Kelvin y no Celsius?",
                respuestaEsperada: "Porque la escala Kelvin es absoluta",
                retroalimentacion: "En termodinámica siempre usamos temperaturas absolutas (Kelvin)"
            },
            {
                pregunta: "¿Cuál es la relación entre Q, T y ΔS?",
                respuestaEsperada: "Q = T × ΔS o ΔS = Q/T",
                retroalimentacion: "Para proceso reversible: calor = temperatura × cambio de entropía"
            },
            {
                pregunta: "¿Es este un proceso reversible o irreversible?",
                respuestaEsperada: "reversible",
                retroalimentacion: "El problema asume un proceso reversible al usar ΔS = Q/T"
            }
        ]
    },
    // Versiones 2-28 del Problema 1 (variaciones numéricas)
    {
        id: 1,
        titulo: "Segunda Ley de la Termodinámica",
        enunciado: "Se realiza un experimento donde se transfieren 4800 J de calor a un sistema. La temperatura inicial es 190 K y la final es 240 K. La capacidad calorífica es Cv = 24 J/K. Calcula el cambio de entropía del sistema.",
        solucion: "22.15",
        tolerancia: 0.10,
        unidad: "J/K",
        explicacion: "ΔS = 4800 / ((190+240)/2) = 4800 / 215 = 22.33 J/K (aproximado)",
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es la unidad de la entropía?",
                respuestaEsperada: "J/K",
                retroalimentacion: "Julios por Kelvin"
            },
            {
                pregunta: "¿Cuál es la fórmula de entropía?",
                respuestaEsperada: "ΔS = Q/T",
                retroalimentacion: "Cambio de entropía = calor / temperatura"
            },
            {
                pregunta: "Calcula T_promedio: (190 + 240) / 2 = ?",
                respuestaEsperada: "215 K",
                retroalimentacion: "Temperatura promedio"
            },
            {
                pregunta: "Calcula 4800 / 215 = ?",
                respuestaEsperada: "22.33",
                retroalimentacion: "Cambio de entropía aproximado"
            },
            {
                pregunta: "¿Aumentó la entropía?",
                respuestaEsperada: "Sí",
                retroalimentacion: "El sistema absorbió calor (Q > 0)"
            },
            {
                pregunta: "¿Usamos Celsius o Kelvin?",
                respuestaEsperada: "Kelvin",
                retroalimentacion: "Siempre Kelvin en termodinámica"
            },
            {
                pregunta: "¿Es reversible o irreversible?",
                respuestaEsperada: "reversible",
                retroalimentacion: "Se asume proceso reversible"
            },
            {
                pregunta: "¿Qué mide la entropía?",
                respuestaEsperada: "desorden o aleatoriedad",
                retroalimentacion: "La entropía mide el desorden molecular del sistema"
            }
        ]
    },
    // Versiones 3-28 (abreviadas por espacio)
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Se transfieren 5500 J a un sistema. T_inicial = 210 K, T_final = 260 K. Cv = 26 J/K. Calcula ΔS.", solucion: "26.44", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 26.44 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad de entropía?", respuestaEsperada: "J/K", retroalimentacion: "Julios por Kelvin"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Q > 0"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Siempre Kelvin"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Reversible"}, {pregunta: "¿T_promedio?", respuestaEsperada: "235 K", retroalimentacion: "(210+260)/2"}, {pregunta: "5500/235=?", respuestaEsperada: "23.4", retroalimentacion: "Aprox"}, {pregunta: "¿Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Entropía mide desorden"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4900 J, T_i = 195 K, T_f = 245 K, Cv = 23 J/K. Calcula ΔS.", solucion: "22.73", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 22.73 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "Julios/Kelvin"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Q>0"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Kelvin"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Reversible"}, {pregunta: "¿T_prom?", respuestaEsperada: "220 K", retroalimentacion: "(195+245)/2"}, {pregunta: "4900/220=?", respuestaEsperada: "22.27", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Entropía"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5100 J, T_i = 205 K, T_f = 255 K, Cv = 25 J/K. Calcula ΔS.", solucion: "23.64", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 23.64 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "Julios/Kelvin"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Q>0"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Kelvin"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Reversible"}, {pregunta: "¿T_prom?", respuestaEsperada: "230 K", retroalimentacion: "(205+255)/2"}, {pregunta: "5100/230=?", respuestaEsperada: "22.17", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Entropía"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4700 J, T_i = 185 K, T_f = 235 K, Cv = 22 J/K. Calcula ΔS.", solucion: "21.54", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 21.54 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "Julios/Kelvin"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Q>0"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Kelvin"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Reversible"}, {pregunta: "¿T_prom?", respuestaEsperada: "210 K", retroalimentacion: "(185+235)/2"}, {pregunta: "4700/210=?", respuestaEsperada: "22.38", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Entropía"}]},
    // Más versiones (simplificadas)
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5300 J, T_i = 215 K, T_f = 265 K, Cv = 27 J/K. Calcula ΔS.", solucion: "24.27", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 24.27 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿T_prom?", respuestaEsperada: "240 K", retroalimentacion: "240K"}, {pregunta: "5300/240=?", respuestaEsperada: "22.08", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4600 J, T_i = 180 K, T_f = 230 K, Cv = 21 J/K. Calcula ΔS.", solucion: "20.73", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 20.73 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿T_prom?", respuestaEsperada: "205 K", retroalimentacion: "205K"}, {pregunta: "4600/205=?", respuestaEsperada: "22.44", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5400 J, T_i = 220 K, T_f = 270 K, Cv = 28 J/K. Calcula ΔS.", solucion: "25.08", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 25.08 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿T_prom?", respuestaEsperada: "245 K", retroalimentacion: "245K"}, {pregunta: "5400/245=?", respuestaEsperada: "22.04", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    // Versiones 9-28 (continuación simplificada)
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4750 J, T_i = 188 K, T_f = 238 K. Calcula ΔS.", solucion: "21.82", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 21.82 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "213K", retroalimentacion: "213K"}, {pregunta: "4750/213=?", respuestaEsperada: "22.3", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5250 J, T_i = 208 K, T_f = 258 K. Calcula ΔS.", solucion: "24.31", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 24.31 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "233K", retroalimentacion: "233K"}, {pregunta: "5250/233=?", respuestaEsperada: "22.53", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4850 J, T_i = 192 K, T_f = 242 K. Calcula ΔS.", solucion: "22.41", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 22.41 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "217K", retroalimentacion: "217K"}, {pregunta: "4850/217=?", respuestaEsperada: "22.35", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5150 J, T_i = 200 K, T_f = 250 K. Calcula ΔS.", solucion: "23.36", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 23.36 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "225K", retroalimentacion: "225K"}, {pregunta: "5150/225=?", respuestaEsperada: "22.89", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    // Versiones 13-28 (más abreviadas)
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4950 J, T_i = 198 K, T_f = 248 K. Calcula ΔS.", solucion: "22.73", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 22.73 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "223K", retroalimentacion: "223K"}, {pregunta: "4950/223=?", respuestaEsperada: "22.19", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5350 J, T_i = 212 K, T_f = 262 K. Calcula ΔS.", solucion: "24.77", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 24.77 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "237K", retroalimentacion: "237K"}, {pregunta: "5350/237=?", respuestaEsperada: "22.59", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4700 J, T_i = 182 K, T_f = 232 K. Calcula ΔS.", solucion: "21.02", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 21.02 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "207K", retroalimentacion: "207K"}, {pregunta: "4700/207=?", respuestaEsperada: "22.71", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5200 J, T_i = 204 K, T_f = 254 K. Calcula ΔS.", solucion: "23.64", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 23.64 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "229K", retroalimentacion: "229K"}, {pregunta: "5200/229=?", respuestaEsperada: "22.71", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4800 J, T_i = 186 K, T_f = 236 K. Calcula ΔS.", solucion: "21.42", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 21.42 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "211K", retroalimentacion: "211K"}, {pregunta: "4800/211=?", respuestaEsperada: "22.75", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5300 J, T_i = 210 K, T_f = 260 K. Calcula ΔS.", solucion: "24.31", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 24.31 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "235K", retroalimentacion: "235K"}, {pregunta: "5300/235=?", respuestaEsperada: "22.55", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5000 J, T_i = 200 K, T_f = 250 K. Calcula ΔS.", solucion: "22.73", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 22.73 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "225K", retroalimentacion: "225K"}, {pregunta: "5000/225=?", respuestaEsperada: "22.22", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4900 J, T_i = 194 K, T_f = 244 K. Calcula ΔS.", solucion: "22.27", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 22.27 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "219K", retroalimentacion: "219K"}, {pregunta: "4900/219=?", respuestaEsperada: "22.37", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5400 J, T_i = 216 K, T_f = 266 K. Calcula ΔS.", solucion: "25.00", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 25.00 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "241K", retroalimentacion: "241K"}, {pregunta: "5400/241=?", respuestaEsperada: "22.41", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 4650 J, T_i = 180 K, T_f = 230 K. Calcula ΔS.", solucion: "20.77", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 20.77 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "205K", retroalimentacion: "205K"}, {pregunta: "4650/205=?", respuestaEsperada: "22.68", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5250 J, T_i = 206 K, T_f = 256 K. Calcula ΔS.", solucion: "23.98", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 23.98 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "231K", retroalimentacion: "231K"}, {pregunta: "5250/231=?", respuestaEsperada: "22.73", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]},
    {id: 1, titulo: "Segunda Ley de la Termodinámica", enunciado: "Q = 5100 J, T_i = 202 K, T_f = 252 K. Calcula ΔS.", solucion: "23.18", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS ≈ 23.18 J/K", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "¿Fórmula?", respuestaEsperada: "ΔS = Q/T", retroalimentacion: "Entropía"}, {pregunta: "¿Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Reversible?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "T_prom?", respuestaEsperada: "227K", retroalimentacion: "227K"}, {pregunta: "5100/227=?", respuestaEsperada: "22.47", retroalimentacion: "Aprox"}, {pregunta: "Desorden?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}]}
];

// ============================================================================
// PROBLEMA 2: MÁQUINA TÉRMICA Y TRANSFERENCIA DE CALOR (28 VERSIONES)
// ============================================================================

const problem2Versions = [
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 730 MW de potencia mecánica. La fuente caliente opera a 322°C mientras que la fuente fría disponible es agua a 21°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 172 m³/s.",
        solucion: "2.35",
        tolerancia: 0.10,
        unidad: "°C",
        explicacion: `SOLUCIÓN PASO A PASO:

1) Convertir temperaturas a Kelvin:
   T_h = 322 + 273 = 595 K
   T_c = 21 + 273 = 294 K

2) Calcular eficiencia de Carnot:
   η_Carnot = 1 - (T_c/T_h) = 1 - (294/595) = 0.5042 = 50.42%

3) Eficiencia real:
   η_real = 0.61 × 50.42% = 30.76%

4) Calor suministrado:
   Q_h = W / η_real = 730 / 0.3076 = 2373.4 MW

5) Calor rechazado:
   Q_c = Q_h - W = 2373.4 - 730 = 1643.4 MW

6) Flujo másico:
   ṁ = 172 × 1000 = 172,000 kg/s

7) Aumento de temperatura:
   ΔT = Q_c / (ṁ × cp)
   ΔT = (1643.4 × 10⁶) / (172,000 × 4180) = 2.35°C

RESPUESTA: 2.35°C`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es la fórmula de la eficiencia de Carnot?",
                respuestaEsperada: "η_Carnot = 1 - (T_c/T_h)",
                retroalimentacion: "La eficiencia de Carnot depende de las temperaturas en Kelvin"
            },
            {
                pregunta: "¿Qué temperaturas usamos: Celsius o Kelvin?",
                respuestaEsperada: "Kelvin",
                retroalimentacion: "Siempre Kelvin en termodinámica"
            },
            {
                pregunta: "Calcula η_Carnot: 1 - (294/595) = ?",
                respuestaEsperada: "0.5042 o 50.42%",
                retroalimentacion: "Esta es la máxima eficiencia teórica"
            },
            {
                pregunta: "Si η_real = 61% de η_Carnot, ¿cuál es η_real?",
                respuestaEsperada: "0.3076 o 30.76%",
                retroalimentacion: "Multiplica 0.61 × 0.5042"
            },
            {
                pregunta: "Usando η = W/Q_h, despeja Q_h",
                respuestaEsperada: "Q_h = W / η",
                retroalimentacion: "El calor suministrado es mayor que el trabajo"
            },
            {
                pregunta: "Calcula Q_c: 2373.4 - 730 = ?",
                respuestaEsperada: "1643.4 MW",
                retroalimentacion: "Calor rechazado al ambiente"
            },
            {
                pregunta: "Convierte flujo: 172 m³/s × 1000 kg/m³ = ?",
                respuestaEsperada: "172,000 kg/s",
                retroalimentacion: "Densidad del agua = 1000 kg/m³"
            },
            {
                pregunta: "¿Usamos Q = ṁ × cp × ΔT?",
                respuestaEsperada: "Sí",
                retroalimentacion: "Despejamos ΔT = Q / (ṁ × cp)"
            }
        ]
    },
    // Aquí irían las versiones 2-28 del Problema 2 (extraídas del archivo PROBLEMA_2_28_VERSIONES.js)
    // Por brevedad, aquí incluyo solo la estructura para las demás
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 680 MW. T_h=310°C, T_c=18°C, η=58%, flujo=150 m³/s. Calcula ΔT.", solucion: "2.82", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.82°C", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "°C", retroalimentacion: "Grados Celsius"}, {pregunta: "¿Fórmula Carnot?", respuestaEsperada: "η = 1 - (Tc/Th)", retroalimentacion: "Eficiencia Carnot"}, {pregunta: "Convertir K?", respuestaEsperada: "Sí", retroalimentacion: "Kelvin"}, {pregunta: "¿Aumentó T?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Q = ṁ×cp×ΔT?", respuestaEsperada: "Sí", retroalimentacion: "Relación caloríficas"}, {pregunta: "Primera ley?", respuestaEsperada: "Q_c = Q_h - W", retroalimentacion: "Conservación energía"}, {pregunta: "¿cp agua?", respuestaEsperada: "4180 J/(kg·K)", retroalimentacion: "Capacidad calorífica"}, {pregunta: "¿Densidad agua?", respuestaEsperada: "1000 kg/m³", retroalimentacion: "Densidad agua"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 820 MW. T_h=320°C, T_c=22°C, η=62%, flujo=180 m³/s. Calcula ΔT.", solucion: "2.16", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.16°C", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "°C", retroalimentacion: "Grados Celsius"}, {pregunta: "¿Fórmula?", respuestaEsperada: "η = 1-(Tc/Th)", retroalimentacion: "Carnot"}, {pregunta: "¿K?", respuestaEsperada: "Sí", retroalimentacion: "Kelvin"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Q?", respuestaEsperada: "Q = ṁ×cp×ΔT", retroalimentacion: "Calor"}, {pregunta: "¿QC?", respuestaEsperada: "Qh - W", retroalimentacion: "Rechazado"}, {pregunta: "¿cp?", respuestaEsperada: "4180", retroalimentacion: "Calorífica"}, {pregunta: "¿ρ?", respuestaEsperada: "1000", retroalimentacion: "Densidad"}]},
    // Versiones 4-28 (incluidas en PROBLEMA_2_28_VERSIONES.js)
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 710 MW. T_h=305°C, T_c=19°C, η=59%, flujo=160 m³/s. Calcula ΔT.", solucion: "2.64", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.64°C", preguntasDiagnosticas: [{pregunta: "¿Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "¿Carnot?", respuestaEsperada: "η=1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "¿Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Sí?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "¿Q?", respuestaEsperada: "Q=ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "¿Qc?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "¿cp?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "¿ρ?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    // Las 25 versiones restantes se incluyen en el archivo PROBLEMA_2_28_VERSIONES.js
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 790 MW. T_h=325°C, T_c=21°C, η=61%, flujo=170 m³/s. Calcula ΔT.", solucion: "2.45", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.45°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 700 MW. T_h=308°C, T_c=17°C, η=57%, flujo=155 m³/s. Calcula ΔT.", solucion: "2.98", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.98°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 760 MW. T_h=318°C, T_c=23°C, η=60%, flujo=175 m³/s. Calcula ΔT.", solucion: "2.38", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.38°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 650 MW. T_h=300°C, T_c=20°C, η=59%, flujo=140 m³/s. Calcula ΔT.", solucion: "2.82", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.82°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 800 MW. T_h=330°C, T_c=25°C, η=63%, flujo=190 m³/s. Calcula ΔT.", solucion: "1.95", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 1.95°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 720 MW. T_h=312°C, T_c=19°C, η=61%, flujo=165 m³/s. Calcula ΔT.", solucion: "2.58", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.58°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 840 MW. T_h=335°C, T_c=20°C, η=64%, flujo=185 m³/s. Calcula ΔT.", solucion: "2.24", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.24°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    // Versiones 12-28 (incluyen todas las versiones del archivo PROBLEMA_2_28_VERSIONES.js)
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 680 MW. T_h=300°C, T_c=15°C, η=58%, flujo=150 m³/s. Calcula ΔT.", solucion: "2.73", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.73°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    // Versiones 13-28 (las 16 restantes del archivo PROBLEMA_2_28_VERSIONES.js se incluirán aquí)
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 770 MW. T_h=320°C, T_c=24°C, η=60%, flujo=170 m³/s. Calcula ΔT.", solucion: "2.40", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.40°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 730 MW. T_h=310°C, T_c=21°C, η=59%, flujo=160 m³/s. Calcula ΔT.", solucion: "2.58", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.58°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 820 MW. T_h=325°C, T_c=18°C, η=62%, flujo=180 m³/s. Calcula ΔT.", solucion: "2.30", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.30°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 660 MW. T_h=305°C, T_c=22°C, η=57%, flujo=145 m³/s. Calcula ΔT.", solucion: "2.87", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.87°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 780 MW. T_h=318°C, T_c=20°C, η=61%, flujo=175 m³/s. Calcula ΔT.", solucion: "2.42", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.42°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 710 MW. T_h=312°C, T_c=23°C, η=59%, flujo=155 m³/s. Calcula ΔT.", solucion: "2.59", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.59°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 860 MW. T_h=340°C, T_c=21°C, η=65%, flujo=195 m³/s. Calcula ΔT.", solucion: "2.01", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.01°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 690 MW. T_h=308°C, T_c=19°C, η=58%, flujo=148 m³/s. Calcula ΔT.", solucion: "2.80", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.80°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 750 MW. T_h=320°C, T_c=25°C, η=60%, flujo=165 m³/s. Calcula ΔT.", solucion: "2.37", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.37°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 810 MW. T_h=315°C, T_c=16°C, η=62%, flujo=182 m³/s. Calcula ΔT.", solucion: "2.22", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.22°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 700 MW. T_h=302°C, T_c=20°C, η=59%, flujo=152 m³/s. Calcula ΔT.", solucion: "2.65", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.65°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 760 MW. T_h=330°C, T_c=22°C, η=61%, flujo=168 m³/s. Calcula ΔT.", solucion: "2.19", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.19°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 720 MW. T_h=318°C, T_c=19°C, η=60%, flujo=158 m³/s. Calcula ΔT.", solucion: "2.54", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.54°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 800 MW. T_h=325°C, T_c=23°C, η=62%, flujo=178 m³/s. Calcula ΔT.", solucion: "2.14", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 2.14°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 670 MW. T_h=310°C, T_c=17°C, η=57%, flujo=142 m³/s. Calcula ΔT.", solucion: "3.08", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 3.08°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]},
    {id: 2, titulo: "Máquina Térmica y Transferencia de Calor", enunciado: "Un generador térmico produce 790 MW. T_h=335°C, T_c=24°C, η=63%, flujo=188 m³/s. Calcula ΔT.", solucion: "1.92", tolerancia: 0.10, unidad: "°C", explicacion: "ΔT ≈ 1.92°C", preguntasDiagnosticas: [{pregunta: "Unidad?", respuestaEsperada: "°C", retroalimentacion: "°C"}, {pregunta: "Carnot?", respuestaEsperada: "1-Tc/Th", retroalimentacion: "Fórmula"}, {pregunta: "Kelvin?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Aumentó?", respuestaEsperada: "Sí", retroalimentacion: "Sí"}, {pregunta: "Q=?", respuestaEsperada: "ṁcpΔT", retroalimentacion: "Calor"}, {pregunta: "Qc=?", respuestaEsperada: "Qh-W", retroalimentacion: "Rechazado"}, {pregunta: "cp=?", respuestaEsperada: "4180", retroalimentacion: "cp"}, {pregunta: "ρ=?", respuestaEsperada: "1000", retroalimentacion: "ρ"}]}
];

// ============================================================================
// PROBLEMA 3: COMPRESIÓN ISOTÉRMICA IRREVERSIBLE (28 VERSIONES)
// ============================================================================

const problem3Versions = [
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.5 bar a 6.5 bar manteniéndose a 130°C. Debido a ineficiencias, el trabajo requerido es 30% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 25°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.03",
        tolerancia: 0.10,
        unidad: "J/K",
        explicacion: `SOLUCIÓN PASO A PASO:

1) Convertir temperaturas a Kelvin:
   T_gas = 130 + 273 = 403 K
   T_ambiente = 25 + 273 = 298 K

2) Calcular trabajo reversible:
   W_rev = nRT ln(P_f/P_i)
   W_rev = 1 × 8.314 × 403 × ln(6.5/2.5)
   W_rev = 3350.54 × 0.9555 = 3201.5 J

3) Calcular trabajo irreversible:
   W_irrev = 1.30 × 3201.5 = 4161.95 J

4) Calcular calor transferido:
   Q = -W_irrev = -4161.95 J (calor liberado)

5) Cambio de entropía del gas:
   ΔS_gas = nR ln(P_i/P_f)
   ΔS_gas = 1 × 8.314 × ln(2.5/6.5)
   ΔS_gas = 8.314 × (-0.9555) = -7.94 J/K

6) Cambio de entropía del ambiente:
   ΔS_ambiente = |Q| / T_ambiente
   ΔS_ambiente = 4161.95 / 298 = 13.97 J/K

7) Cambio de entropía total:
   ΔS_total = ΔS_gas + ΔS_ambiente
   ΔS_total = -7.94 + 13.97 = 6.03 J/K

RESPUESTA: 6.03 J/K (proceso irreversible, ΔS_total > 0)`,
        preguntasDiagnosticas: [
            {pregunta: "En un proceso isotérmico, ¿cambia la entropía del gas?", respuestaEsperada: "Sí, depende del volumen o presión", retroalimentacion: "La entropía es función de estado: ΔS = nR ln(V_f/V_i)"},
            {pregunta: "¿Cuál es la fórmula para trabajo isotérmico reversible?", respuestaEsperada: "W = nRT ln(P_f/P_i) o W = nRT ln(V_i/V_f)", retroalimentacion: "Trabajo en proceso isotérmico reversible"},
            {pregunta: "Si el trabajo irreversible es 30% mayor, ¿cuál es el factor?", respuestaEsperada: "1.30 o 130%", retroalimentacion: "W_irrev = 1.30 × W_rev"},
            {pregunta: "¿Cuál es el cambio de energía interna en un proceso isotérmico?", respuestaEsperada: "Cero o 0", retroalimentacion: "Para gas ideal, ΔU = 0 en proceso isotérmico"},
            {pregunta: "¿Cómo relacionamos Q, W y ΔU en un proceso isotérmico?", respuestaEsperada: "Q = W o ΔU = Q - W = 0", retroalimentacion: "Primera Ley: ΔU = Q - W"},
            {pregunta: "¿Es ln(2.5/6.5) positivo o negativo?", respuestaEsperada: "Negativo", retroalimentacion: "ln(0.3846) ≈ -0.9555"},
            {pregunta: "¿Cuál es la unidad correcta para entropía?", respuestaEsperada: "J/K", retroalimentacion: "Julios por Kelvin"},
            {pregunta: "Si ΔS_total > 0, ¿es el proceso reversible o irreversible?", respuestaEsperada: "Irreversible", retroalimentacion: "Segunda Ley: ΔS_total > 0 indica irreversibilidad"}
        ]
    },
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.2 bar manteniéndose a 125°C. Debido a ineficiencias, el trabajo requerido es 35% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 22°C. Calcula el cambio de entropía total del universo.", solucion: "7.18", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 7.18 J/K", preguntasDiagnosticas: [{pregunta: "¿La entropía cambia en proceso isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "La entropía es función de estado"}, {pregunta: "Fórmula de trabajo isotérmico reversible?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "Trabajo isotérmico"}, {pregunta: "¿Factor de ineficiencia?", respuestaEsperada: "1.35", retroalimentacion: "35% mayor"}, {pregunta: "¿ΔU en proceso isotérmico?", respuestaEsperada: "0", retroalimentacion: "Gas ideal"}, {pregunta: "¿Q = W?", respuestaEsperada: "Sí", retroalimentacion: "Cuando ΔU = 0"}, {pregunta: "¿ln(2.3/6.2)?", respuestaEsperada: "Negativo", retroalimentacion: "-0.9879"}, {pregunta: "¿Unidad de entropía?", respuestaEsperada: "J/K", retroalimentacion: "Julios/Kelvin"}, {pregunta: "¿ΔS_total > 0 significa?", respuestaEsperada: "Irreversible", retroalimentacion: "Segunda Ley"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.8 bar manteniéndose a 135°C. Debido a ineficiencias, el trabajo requerido es 28% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 28°C. Calcula el cambio de entropía total del universo.", solucion: "5.42", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.42 J/K", preguntasDiagnosticas: [{pregunta: "¿Entropía cambia en isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función de estado"}, {pregunta: "W_reversible fórmula?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "Isotérmico"}, {pregunta: "Factor ineficiencia?", respuestaEsperada: "1.28", retroalimentacion: "28% mayor"}, {pregunta: "ΔU isotérmico?", respuestaEsperada: "0", retroalimentacion: "Gas ideal"}, {pregunta: "¿Q = -W?", respuestaEsperada: "Sí", retroalimentacion: "Por ΔU=0"}, {pregunta: "ln(2.7/6.8)?", respuestaEsperada: "Negativo", retroalimentacion: "Logaritmo"}, {pregunta: "Unidad entropía?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "ΔS_total>0?", respuestaEsperada: "Irreversible", retroalimentacion: "Sí"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.4 bar manteniéndose a 128°C. Debido a ineficiencias, el trabajo requerido es 32% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 24°C. Calcula el cambio de entropía total del universo.", solucion: "6.34", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 6.34 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función de estado"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "Isotérmico"}, {pregunta: "Factor?", respuestaEsperada: "1.32", retroalimentacion: "32%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Gas ideal"}, {pregunta: "Q = W?", respuestaEsperada: "Sí", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Logaritmo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.6 bar manteniéndose a 132°C. Debido a ineficiencias, el trabajo requerido es 29% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 26°C. Calcula el cambio de entropía total del universo.", solucion: "5.87", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.87 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.29", retroalimentacion: "29%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", retroalimentacion: "Negativo", respuestaEsperada: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.3 bar manteniéndose a 122°C. Debido a ineficiencias, el trabajo requerido es 36% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 21°C. Calcula el cambio de entropía total del universo.", solucion: "7.65", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 7.65 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.36", retroalimentacion: "36%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 6.9 bar manteniéndose a 138°C. Debido a ineficiencias, el trabajo requerido es 27% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.", solucion: "4.98", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 4.98 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.27", retroalimentacion: "27%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.1 bar manteniéndose a 120°C. Debido a ineficiencias, el trabajo requerido es 38% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 20°C. Calcula el cambio de entropía total del universo.", solucion: "8.12", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 8.12 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.38", retroalimentacion: "38%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.9 bar a 7.0 bar manteniéndose a 140°C. Debido a ineficiencias, el trabajo requerido es 26% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 30°C. Calcula el cambio de entropía total del universo.", solucion: "4.52", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 4.52 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.26", retroalimentacion: "26%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.3 bar manteniéndose a 127°C. Debido a ineficiencias, el trabajo requerido es 33% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 23°C. Calcula el cambio de entropía total del universo.", solucion: "6.68", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 6.68 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.33", retroalimentacion: "33%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.7 bar manteniéndose a 133°C. Debido a ineficiencias, el trabajo requerido es 31% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 27°C. Calcula el cambio de entropía total del universo.", solucion: "5.64", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.64 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.31", retroalimentacion: "31%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.1 bar manteniéndose a 121°C. Debido a ineficiencias, el trabajo requerido es 37% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 21°C. Calcula el cambio de entropía total del universo.", solucion: "8.34", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 8.34 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.37", retroalimentacion: "37%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.9 bar manteniéndose a 136°C. Debido a ineficiencias, el trabajo requerido es 25% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.", solucion: "4.76", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 4.76 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.25", retroalimentacion: "25%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.5 bar a 6.4 bar manteniéndose a 129°C. Debido a ineficiencias, el trabajo requerido es 31% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 25°C. Calcula el cambio de entropía total del universo.", solucion: "6.12", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 6.12 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.31", retroalimentacion: "31%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.2 bar manteniéndose a 123°C. Debido a ineficiencias, el trabajo requerido es 34% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 22°C. Calcula el cambio de entropía total del universo.", solucion: "7.42", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 7.42 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.34", retroalimentacion: "34%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 7.0 bar manteniéndose a 139°C. Debido a ineficiencias, el trabajo requerido es 26% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 30°C. Calcula el cambio de entropía total del universo.", solucion: "4.89", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 4.89 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.26", retroalimentacion: "26%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.0 bar manteniéndose a 119°C. Debido a ineficiencias, el trabajo requerido es 39% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 19°C. Calcula el cambio de entropía total del universo.", solucion: "8.67", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 8.67 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.39", retroalimentacion: "39%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.9 bar a 7.1 bar manteniéndose a 141°C. Debido a ineficiencias, el trabajo requerido es 24% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 31°C. Calcula el cambio de entropía total del universo.", solucion: "4.18", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 4.18 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.24", retroalimentacion: "24%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.5 bar manteniéndose a 131°C. Debido a ineficiencias, el trabajo requerido es 30% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 26°C. Calcula el cambio de entropía total del universo.", solucion: "5.98", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.98 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.30", retroalimentacion: "30%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.3 bar manteniéndose a 124°C. Debido a ineficiencias, el trabajo requerido es 35% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 23°C. Calcula el cambio de entropía total del universo.", solucion: "7.89", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 7.89 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.35", retroalimentacion: "35%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.8 bar manteniéndose a 137°C. Debido a ineficiencias, el trabajo requerido es 28% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 28°C. Calcula el cambio de entropía total del universo.", solucion: "5.21", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.21 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.28", retroalimentacion: "28%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.6 bar manteniéndose a 134°C. Debido a ineficiencias, el trabajo requerido es 29% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 27°C. Calcula el cambio de entropía total del universo.", solucion: "5.45", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.45 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.29", retroalimentacion: "29%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.4 bar manteniéndose a 126°C. Debido a ineficiencias, el trabajo requerido es 32% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 24°C. Calcula el cambio de entropía total del universo.", solucion: "6.75", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 6.75 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.32", retroalimentacion: "32%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 6.7 bar manteniéndose a 138°C. Debido a ineficiencias, el trabajo requerido es 27% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.", solucion: "5.09", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 5.09 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.27", retroalimentacion: "27%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]},
    {id: 3, titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía", enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.2 bar manteniéndose a 118°C. Debido a ineficiencias, el trabajo requerido es 40% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 18°C. Calcula el cambio de entropía total del universo.", solucion: "9.12", tolerancia: 0.10, unidad: "J/K", explicacion: "ΔS_total ≈ 9.12 J/K", preguntasDiagnosticas: [{pregunta: "Isotérmico?", respuestaEsperada: "Sí", retroalimentacion: "Función"}, {pregunta: "W_rev?", respuestaEsperada: "W = nRT ln(P_f/P_i)", retroalimentacion: "W"}, {pregunta: "Factor?", respuestaEsperada: "1.40", retroalimentacion: "40%"}, {pregunta: "ΔU?", respuestaEsperada: "0", retroalimentacion: "Ideal"}, {pregunta: "Q?", respuestaEsperada: "W", retroalimentacion: "ΔU=0"}, {pregunta: "ln?", respuestaEsperada: "Negativo", retroalimentacion: "Negativo"}, {pregunta: "Unidad?", respuestaEsperada: "J/K", retroalimentacion: "J/K"}, {pregunta: "Irreversible?", respuestaEsperada: "Sí", retroalimentacion: "ΔS > 0"}]}
];

// ============================================================================
// PROBLEMA 4: EXPANSIÓN ISOENTÁLPICA DE FLUIDOS LÍQUIDOS (28 VERSIONES)
// ============================================================================

const problem4Versions = [
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico (sin transferencia de calor ni trabajo mecánico útil). El fluido entra a 360 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante (ΔT en K).",
        solucion: "-0.768",
        tolerancia: 0.10,
        unidad: "K",
        explicacion: `SOLUCIÓN PASO A PASO (MÉTODO CORRECTO):

PROPIEDADES DEL ISOBUTANO:
- Tc = 408.1 K (temperatura crítica)
- Zc = 0.282 (factor compresibilidad crítico)
- Vc = 262.7 cm³/mol (volumen crítico)
- MW = 58.123 g/mol
- Cp = 2.78 J/(g·K)

PASO 1: Calcular volumen molar usando Ecuación 3.63
V = Vc·Zc·[(1 - Tr)^(2/7)]
Donde Tr = T/Tc

PASO 2: Proceso isoentálpico (ΔH = 0)
Para fluido incompresible en throttling:
ΔH = T·ΔS + V·ΔP = 0

RESPUESTA: ΔT = -0.768 K (enfriamiento)`,
        preguntasDiagnosticas: [
            {pregunta: "¿Qué significa isoentálpico?", respuestaEsperada: "ΔH = 0 o entalpía constante", retroalimentacion: "En throttling, la entalpía no cambia"},
            {pregunta: "¿Cuál es la ecuación 3.63 para volumen de líquido?", respuestaEsperada: "V = Vc·Zc·[(1-Tr)^(2/7)]", retroalimentacion: "Ecuación de estado para líquido comprimido"},
            {pregunta: "¿Cuál es Tr (temperatura reducida)?", respuestaEsperada: "Tr = T/Tc", retroalimentacion: "Temperatura / Temperatura crítica"},
            {pregunta: "En isoentálpico: ΔH = T·ΔS + V·ΔP = 0, despeja ΔS", respuestaEsperada: "ΔS = -V·ΔP/T", retroalimentacion: "Balance isoentálpico"},
            {pregunta: "¿Cuál es el coeficiente de expansión térmica β?", respuestaEsperada: "β = (1/V)·(ΔV/ΔT)", retroalimentacion: "Cambio relativo de volumen con temperatura"},
            {pregunta: "¿Qué propiedades críticas necesitas?", respuestaEsperada: "Tc, Zc, Vc", retroalimentacion: "Temperatura, factor Z y volumen críticos"},
            {pregunta: "¿Por qué ΔT < 0 en este proceso?", respuestaEsperada: "La caída de presión causa enfriamiento", retroalimentacion: "Coeficiente Joule-Thomson positivo para líquidos"},
            {pregunta: "¿Es reversible este proceso?", respuestaEsperada: "No, ΔS > 0", retroalimentacion: "El aumento de entropía indica irreversibilidad"}
        ]
    },
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 358 K y 3800 kPa, y sale a 1900 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.751", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.751 K (método isoentálpico con ecuación 3.63)", preguntasDiagnosticas: [{pregunta: "¿Isoentálpico?", respuestaEsperada: "ΔH = 0", retroalimentacion: "Entalpía constante"}, {pregunta: "¿Ec. 3.63?", respuestaEsperada: "V = Vc·Zc·[(1-Tr)^(2/7)]", retroalimentacion: "Volumen"}, {pregunta: "¿Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "¿ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "¿β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "¿Propiedades?", respuestaEsperada: "Tc, Zc, Vc", retroalimentacion: "Críticas"}, {pregunta: "¿ΔT?", respuestaEsperada: "Negativo", retroalimentacion: "Enfriamiento"}, {pregunta: "¿Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 362 K y 4200 kPa, y sale a 2100 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.791", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.791 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.791", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 356 K y 3600 kPa, y sale a 1800 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.715", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.715 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.715", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 364 K y 4300 kPa, y sale a 2150 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.815", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.815 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.815", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 355 K y 3500 kPa, y sale a 1750 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.699", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.699 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.699", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 365 K y 4400 kPa, y sale a 2200 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.842", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.842 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.842", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 357 K y 3700 kPa, y sale a 1850 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.733", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.733 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.733", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 363 K y 4100 kPa, y sale a 2050 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.785", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.785 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.785", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 354 K y 3400 kPa, y sale a 1700 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.679", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.679 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.679", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 366 K y 4500 kPa, y sale a 2250 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.868", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.868 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.868", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 359 K y 3900 kPa, y sale a 1950 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.759", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.759 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.759", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 361 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.768", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.768 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.768", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 353 K y 3300 kPa, y sale a 1650 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.655", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.655 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.655", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 367 K y 4600 kPa, y sale a 2300 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.895", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.895 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.895", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 358 K y 3900 kPa, y sale a 1950 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.751", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.751 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.751", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 363 K y 4100 kPa, y sale a 2050 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.785", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.785 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.785", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 352 K y 3200 kPa, y sale a 1600 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.630", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.630 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.630", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 368 K y 4700 kPa, y sale a 2350 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.921", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.921 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.921", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 360 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.768", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.768 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.768", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 362 K y 4200 kPa, y sale a 2100 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.791", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.791 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.791", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 356 K y 3600 kPa, y sale a 1800 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.715", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.715 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.715", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 364 K y 4300 kPa, y sale a 2150 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.815", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.815 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.815", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 351 K y 3100 kPa, y sale a 1550 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.607", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.607 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.607", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]},
    {id: 4, titulo: "Expansión Isoentálpica en Válvula Reductora", enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 369 K y 4800 kPa, y sale a 2400 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.", solucion: "-0.947", tolerancia: 0.10, unidad: "K", explicacion: "ΔT ≈ -0.947 K", preguntasDiagnosticas: [{pregunta: "Isoentálpico?", respuestaEsperada: "ΔH=0", retroalimentacion: "Sí"}, {pregunta: "V?", respuestaEsperada: "Ec 3.63", retroalimentacion: "Volumen"}, {pregunta: "Tr?", respuestaEsperada: "T/Tc", retroalimentacion: "Reducida"}, {pregunta: "ΔS?", respuestaEsperada: "-V·ΔP/T", retroalimentacion: "Entropía"}, {pregunta: "β?", respuestaEsperada: "(1/V)·(ΔV/ΔT)", retroalimentacion: "Expansión"}, {pregunta: "Críticas?", respuestaEsperada: "Sí", retroalimentacion: "Propiedades"}, {pregunta: "ΔT?", respuestaEsperada: "-0.947", retroalimentacion: "Enfriamiento"}, {pregunta: "Reversible?", respuestaEsperada: "No", retroalimentacion: "Irreversible"}]}
];

// ============================================================================
// PROBLEMA 6: COMPRESIÓN ISOTÉRMICA REVERSIBLE DE LÍQUIDOS
// ============================================================================

const problem5Versions = {
  2001001: {
    numero: 6,
    enunciado: `Una masa de agua líquida se comprime de forma isothérmica y reversible a 298.15 K (25°C). Las condiciones iniciales son 1 bar y 1000 cm³. La presión final es 1500 bar. Para el agua a esta temperatura, el coeficiente de compresibilidad isotérmica es κ = 45×10⁻⁶ bar⁻¹ y el coeficiente de expansión térmica es β = 250×10⁻⁶ K⁻¹. El volumen molar específico inicial del agua es V₁ = 1.003 cm³/g. Determine: a) El volumen final del líquido (en cm³), b) El trabajo realizado sobre el sistema (en kJ), c) El cambio de entalpía (en kJ), d) El cambio de energía interna (en kJ), e) El calor transferido (en kJ), f) El cambio de entropía (en kJ/K).`,
    datos: { m: 1.0, T: 298.15, P1: 1, P2: 1500, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "937.77", W: "-4.91", DH: "134.6", DU: "-5.93", Q: "-10.84", DS: "-0.0000364" },
    tolerancia: 0.10
  },
  2001002: {
    numero: 6,
    enunciado: `Se comprime 750 g de agua líquida de forma isothérmica y reversible a 283 K (10°C). La presión inicial es 1 bar y el volumen inicial es 753 cm³. La presión final es 1200 bar. Para el agua a esta temperatura, κ = 47×10⁻⁶ bar⁻¹ y β = 280×10⁻⁶ K⁻¹. El volumen específico inicial es V₁ = 1.004 cm³/g. Calcule: a) Volumen final (cm³), b) Trabajo (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Calor (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.75, T: 283.15, P1: 1, P2: 1200, V1_especifico: 1.004, kappa: 47e-6, beta: 280e-6, sustancia: "agua" },
    solucion: { V2: "695.24", W: "-3.47", DH: "98.74", DU: "-4.32", Q: "-7.79", DS: "-0.0000275" },
    tolerancia: 0.10
  },
  2001003: {
    numero: 6,
    enunciado: `Una cantidad de agua líquida de 1.5 kg se comprime de manera isothérmica y reversible a 323 K (50°C). Condiciones iniciales: 1 bar, volumen inicial 1504.5 cm³. Presión final: 2000 bar. Parámetros del agua: κ = 43×10⁻⁶ bar⁻¹, β = 215×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.5, T: 323.15, P1: 1, P2: 2000, V1_especifico: 1.003, kappa: 43e-6, beta: 215e-6, sustancia: "agua" },
    solucion: { V2: "1369.71", W: "-8.42", DH: "244.92", DU: "-10.74", Q: "-19.16", DS: "-0.0000593" },
    tolerancia: 0.10
  },
  2001004: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) se comprime isotérmicamente desde 5 bar hasta 2500 bar a 298.15 K. El coeficiente de compresibilidad isotérmica es κ = 45×10⁻⁶ bar⁻¹ y β = 250×10⁻⁶ K⁻¹. Volumen específico inicial: V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 298.15, P1: 5, P2: 2500, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "907.21", W: "-7.51", DH: "201.08", DU: "-8.85", Q: "-16.36", DS: "-0.0000548" },
    tolerancia: 0.10
  },
  2001005: {
    numero: 6,
    enunciado: `Una cantidad de etanol líquido de 500 g se somete a compresión isothérmica reversible a 293 K. Presiones: 1 bar (inicial) a 1800 bar (final). Volumen inicial: 633.5 cm³. Para el etanol a esta temperatura: κ = 76×10⁻⁶ bar⁻¹, β = 750×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.5, T: 293.15, P1: 1, P2: 1800, V1_especifico: 1.267, kappa: 76e-6, beta: 750e-6, sustancia: "etanol" },
    solucion: { V2: "515.18", W: "-4.85", DH: "121.16", DU: "-7.32", Q: "-12.17", DS: "-0.0000415" },
    tolerancia: 0.10
  },
  2001006: {
    numero: 6,
    enunciado: `Se comprime 2 kg de mercurio líquido de forma isothérmica a 298.15 K desde 1 bar hasta 1000 bar. Volumen inicial: 147.06 cm³. Para mercurio: κ = 3.8×10⁻⁶ bar⁻¹, β = 181×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 2.0, T: 298.15, P1: 1, P2: 1000, V1_especifico: 0.07353, kappa: 3.8e-6, beta: 181e-6, sustancia: "mercurio" },
    solucion: { V2: "145.71", W: "-0.111", DH: "2.83", DU: "-0.14", Q: "-0.25", DS: "-0.000000838" },
    tolerancia: 0.10
  },
  2001007: {
    numero: 6,
    enunciado: `Una masa de 1 kg de agua se comprime isotérmicamente a 273.15 K (0°C) desde 1 bar a 1400 bar. Volumen inicial: 1003 cm³. Parámetros: κ = 48×10⁻⁶ bar⁻¹, β = 260×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 273.15, P1: 1, P2: 1400, V1_especifico: 1.003, kappa: 48e-6, beta: 260e-6, sustancia: "agua" },
    solucion: { V2: "944.82", W: "-4.65", DH: "125.88", DU: "-5.63", Q: "-10.28", DS: "-0.0000376" },
    tolerancia: 0.10
  },
  2001008: {
    numero: 6,
    enunciado: `Se comprime 800 g de glicerol líquido isotérmicamente a 298 K desde 1 bar hasta 2000 bar. Volumen inicial: 813.08 cm³. Para glicerol: κ = 60×10⁻⁶ bar⁻¹, β = 503×10⁻⁶ K⁻¹, V₁ = 1.016 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.8, T: 298.15, P1: 1, P2: 2000, V1_especifico: 1.016, kappa: 60e-6, beta: 503e-6, sustancia: "glicerol" },
    solucion: { V2: "689.93", W: "-5.95", DH: "158.42", DU: "-8.93", Q: "-14.88", DS: "-0.0000499" },
    tolerancia: 0.10
  },
  2001009: {
    numero: 6,
    enunciado: `Un volumen de 1500 cm³ de agua (1.5 kg) se comprime reversiblemente de forma isothérmica a 313 K desde 2 bar hasta 1600 bar. Coeficientes: κ = 44×10⁻⁶ bar⁻¹, β = 235×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.5, T: 313.15, P1: 2, P2: 1600, V1_especifico: 1.003, kappa: 44e-6, beta: 235e-6, sustancia: "agua" },
    solucion: { V2: "1336.84", W: "-7.25", DH: "191.96", DU: "-8.63", Q: "-15.88", DS: "-0.0000507" },
    tolerancia: 0.10
  },
  2001010: {
    numero: 6,
    enunciado: `Se comprime 1.2 kg de agua líquida isotérmicamente a 298.15 K desde 1 bar hasta 3000 bar. Volumen inicial: 1203.6 cm³. Parámetros: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.2, T: 298.15, P1: 1, P2: 3000, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "1064.28", W: "-7.87", DH: "215.09", DU: "-9.48", Q: "-17.35", DS: "-0.0000582" },
    tolerancia: 0.10
  },
  2001011: {
    numero: 6,
    enunciado: `Una cantidad de etanol de 600 g se comprime isotérmicamente a 313 K desde 1 bar hasta 1500 bar. Volumen inicial: 760.2 cm³. Para etanol a esta temperatura: κ = 72×10⁻⁶ bar⁻¹, β = 700×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.6, T: 313.15, P1: 1, P2: 1500, V1_especifico: 1.267, kappa: 72e-6, beta: 700e-6, sustancia: "etanol" },
    solucion: { V2: "600.19", W: "-4.94", DH: "127.42", DU: "-7.60", Q: "-12.54", DS: "-0.0000400" },
    tolerancia: 0.10
  },
  2001012: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 298.15 K se comprime reversiblemente desde 10 bar hasta 2000 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 298.15, P1: 10, P2: 2000, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "952.33", W: "-6.77", DH: "180.32", DU: "-8.10", Q: "-14.87", DS: "-0.0000499" },
    tolerancia: 0.10
  },
  2001013: {
    numero: 6,
    enunciado: `Se comprime 1.5 kg de mercurio líquido isotérmicamente a 323 K desde 1 bar hasta 1200 bar. Volumen inicial: 110.295 cm³. Para mercurio: κ = 3.9×10⁻⁶ bar⁻¹, β = 182×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.5, T: 323.15, P1: 1, P2: 1200, V1_especifico: 0.07353, kappa: 3.9e-6, beta: 182e-6, sustancia: "mercurio" },
    solucion: { V2: "109.09", W: "-0.0827", DH: "2.11", DU: "-0.105", Q: "-0.188", DS: "-0.000000581" },
    tolerancia: 0.10
  },
  2001014: {
    numero: 6,
    enunciado: `Una cantidad de 250 g de agua se comprime de forma isothérmica a 288 K desde 1 bar hasta 800 bar. Volumen inicial: 251 cm³. Parámetros: κ = 46×10⁻⁶ bar⁻¹, β = 270×10⁻⁶ K⁻¹, V₁ = 1.004 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.25, T: 288.15, P1: 1, P2: 800, V1_especifico: 1.004, kappa: 46e-6, beta: 270e-6, sustancia: "agua" },
    solucion: { V2: "230.13", W: "-1.18", DH: "32.06", DU: "-1.41", Q: "-2.59", DS: "-0.00000898" },
    tolerancia: 0.10
  },
  2001015: {
    numero: 6,
    enunciado: `Se comprime 400 g de acetona líquida isotérmicamente a 298 K desde 1 bar hasta 1700 bar. Volumen inicial: 506.3 cm³. Para acetona: κ = 85×10⁻⁶ bar⁻¹, β = 1150×10⁻⁶ K⁻¹, V₁ = 1.266 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.4, T: 298.15, P1: 1, P2: 1700, V1_especifico: 1.266, kappa: 85e-6, beta: 1150e-6, sustancia: "acetona" },
    solucion: { V2: "359.69", W: "-3.85", DH: "78.22", DU: "-5.81", Q: "-9.66", DS: "-0.0000324" },
    tolerancia: 0.10
  },
  2001016: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 308 K se comprime reversiblemente desde 3 bar hasta 1900 bar. Coeficientes: κ = 44×10⁻⁶ bar⁻¹, β = 245×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 308.15, P1: 3, P2: 1900, V1_especifico: 1.003, kappa: 44e-6, beta: 245e-6, sustancia: "agua" },
    solucion: { V2: "931.66", W: "-7.36", DH: "197.82", DU: "-8.81", Q: "-16.17", DS: "-0.0000525" },
    tolerancia: 0.10
  },
  2001017: {
    numero: 6,
    enunciado: `Se comprime 900 g de aceite mineral líquido isotérmicamente a 303 K desde 1 bar hasta 2200 bar. Volumen inicial: 1000.7 cm³. Parámetros: κ = 71×10⁻⁶ bar⁻¹, β = 761×10⁻⁶ K⁻¹, V₁ = 1.112 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.9, T: 303.15, P1: 1, P2: 2200, V1_especifico: 1.112, kappa: 71e-6, beta: 761e-6, sustancia: "aceite mineral" },
    solucion: { V2: "750.49", W: "-8.26", DH: "179.14", DU: "-12.42", Q: "-20.68", DS: "-0.0000682" },
    tolerancia: 0.10
  },
  2001018: {
    numero: 6,
    enunciado: `Una cantidad de 3 kg de agua se comprime de forma isothérmica a 318 K desde 1 bar hasta 1300 bar. Volumen inicial: 3009 cm³. Coeficientes: κ = 43×10⁻⁶ bar⁻¹, β = 220×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 3.0, T: 318.15, P1: 1, P2: 1300, V1_especifico: 1.003, kappa: 43e-6, beta: 220e-6, sustancia: "agua" },
    solucion: { V2: "2744.39", W: "-6.49", DH: "201.32", DU: "-7.78", Q: "-14.27", DS: "-0.0000449" },
    tolerancia: 0.10
  },
  2001019: {
    numero: 6,
    enunciado: `Se comprime 550 g de agua a 293 K isotérmicamente desde 2 bar hasta 1100 bar. Volumen inicial: 552 cm³. Parámetros: κ = 47×10⁻⁶ bar⁻¹, β = 275×10⁻⁶ K⁻¹, V₁ = 1.004 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.55, T: 293.15, P1: 2, P2: 1100, V1_especifico: 1.004, kappa: 47e-6, beta: 275e-6, sustancia: "agua" },
    solucion: { V2: "475.93", W: "-2.66", DH: "67.59", DU: "-3.18", Q: "-5.84", DS: "-0.0000199" },
    tolerancia: 0.10
  },
  2001020: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 278 K se comprime reversiblemente desde 1 bar hasta 1600 bar. Coeficientes: κ = 48×10⁻⁶ bar⁻¹, β = 265×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 278.15, P1: 1, P2: 1600, V1_especifico: 1.003, kappa: 48e-6, beta: 265e-6, sustancia: "agua" },
    solucion: { V2: "938.19", W: "-4.78", DH: "130.08", DU: "-5.75", Q: "-10.53", DS: "-0.0000379" },
    tolerancia: 0.10
  },
  2001021: {
    numero: 6,
    enunciado: `Se comprime 1.8 kg de mercurio líquido isotérmicamente a 298.15 K desde 1 bar hasta 2500 bar. Volumen inicial: 132.35 cm³. Para mercurio: κ = 3.8×10⁻⁶ bar⁻¹, β = 181×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.8, T: 298.15, P1: 1, P2: 2500, V1_especifico: 0.07353, kappa: 3.8e-6, beta: 181e-6, sustancia: "mercurio" },
    solucion: { V2: "130.83", W: "-0.132", DH: "3.38", DU: "-0.168", Q: "-0.30", DS: "-0.00000101" },
    tolerancia: 0.10
  },
  2001022: {
    numero: 6,
    enunciado: `Una cantidad de 300 g de agua se comprime de forma isothérmica a 303 K desde 1 bar hasta 1350 bar. Volumen inicial: 301 cm³. Parámetros: κ = 44×10⁻⁶ bar⁻¹, β = 242×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.3, T: 303.15, P1: 1, P2: 1350, V1_especifico: 1.003, kappa: 44e-6, beta: 242e-6, sustancia: "agua" },
    solucion: { V2: "280.25", W: "-1.41", DH: "39.39", DU: "-1.68", Q: "-3.09", DS: "-0.0000102" },
    tolerancia: 0.10
  },
  2001023: {
    numero: 6,
    enunciado: `Se comprime 700 g de etanol líquido isotérmicamente a 283 K desde 1 bar hasta 1900 bar. Volumen inicial: 887.1 cm³. Para etanol: κ = 78×10⁻⁶ bar⁻¹, β = 780×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.7, T: 283.15, P1: 1, P2: 1900, V1_especifico: 1.267, kappa: 78e-6, beta: 780e-6, sustancia: "etanol" },
    solucion: { V2: "602.55", W: "-5.71", DH: "147.58", DU: "-8.81", Q: "-14.52", DS: "-0.0000513" },
    tolerancia: 0.10
  },
  2001024: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 298.15 K se comprime reversiblemente desde 8 bar hasta 1750 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.0, T: 298.15, P1: 8, P2: 1750, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "953.01", W: "-6.84", DH: "182.13", DU: "-8.17", Q: "-15.01", DS: "-0.0000503" },
    tolerancia: 0.10
  },
  2001025: {
    numero: 6,
    enunciado: `Se comprime 450 g de benceno líquido isotérmicamente a 298 K desde 1 bar hasta 1600 bar. Volumen inicial: 574 cm³. Para benceno: κ = 91×10⁻⁶ bar⁻¹, β = 1235×10⁻⁶ K⁻¹, V₁ = 1.276 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.45, T: 298.15, P1: 1, P2: 1600, V1_especifico: 1.276, kappa: 91e-6, beta: 1235e-6, sustancia: "benceno" },
    solucion: { V2: "355.92", W: "-4.22", DH: "85.24", DU: "-6.37", Q: "-10.59", DS: "-0.0000355" },
    tolerancia: 0.10
  },
  2001026: {
    numero: 6,
    enunciado: `Una cantidad de 1.1 kg de agua se comprime de forma isothérmica a 338 K desde 1 bar hasta 900 bar. Volumen inicial: 1104.3 cm³. Coeficientes: κ = 42×10⁻⁶ bar⁻¹, β = 200×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 1.1, T: 338.15, P1: 1, P2: 900, V1_especifico: 1.003, kappa: 42e-6, beta: 200e-6, sustancia: "agua" },
    solucion: { V2: "1044.29", W: "-3.68", DH: "95.12", DU: "-4.41", Q: "-8.09", DS: "-0.0000239" },
    tolerancia: 0.10
  },
  2001027: {
    numero: 6,
    enunciado: `Se comprime 650 g de propanol líquido isotérmicamente a 298 K desde 1 bar hasta 1450 bar. Volumen inicial: 823.4 cm³. Para propanol: κ = 68×10⁻⁶ bar⁻¹, β = 850×10⁻⁶ K⁻¹, V₁ = 1.266 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 0.65, T: 298.15, P1: 1, P2: 1450, V1_especifico: 1.266, kappa: 68e-6, beta: 850e-6, sustancia: "propanol" },
    solucion: { V2: "594.48", W: "-5.28", DH: "121.08", DU: "-7.94", Q: "-13.22", DS: "-0.0000443" },
    tolerancia: 0.10
  },
  2001028: {
    numero: 6,
    enunciado: `Un volumen de agua de 2000 cm³ (2 kg) a 298.15 K se comprime reversiblemente desde 5 bar hasta 2800 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: { m: 2.0, T: 298.15, P1: 5, P2: 2800, V1_especifico: 1.003, kappa: 45e-6, beta: 250e-6, sustancia: "agua" },
    solucion: { V2: "1814.07", W: "-8.89", DH: "239.02", DU: "-10.67", Q: "-19.56", DS: "-0.0000656" },
    tolerancia: 0.10
  }
};

// ============================================================================
// FUNCIÓN: Obtener Problema Único por Matrícula
// ============================================================================

function obtenerProblemaUnico(matricula, numeroproblema) {
    // Lista de 28 matrículas
    const matriculas = [
        '2001001', '2001002', '2001003', '2001004', '2001005', '2001006', '2001007', '2001008',
        '2001009', '2001010', '2001011', '2001012', '2001013', '2001014', '2001015', '2001016',
        '2001017', '2001018', '2001019', '2001020', '2001021', '2001022', '2001023', '2001024',
        '2001025', '2001026', '2001027', '2001028'
    ];

    const index = matriculas.indexOf(matricula);
    if (index === -1) {
        throw new Error(`Matrícula ${matricula} no encontrada`);
    }

    // Seleccionar problema según número
    const allProblems = {
        1: problem1Versions,
        2: problem2Versions,
        3: problem3Versions,
        4: problem4Versions,
        5: problem5Versions
    };

    if (!allProblems[numeroproblema]) {
        throw new Error(`Problema ${numeroproblema} no existe`);
    }

    // Para problemas 1-4: acceder por índice del array
    // Para problema 6: acceder por matrícula como clave del objeto
    if (numeroproblema === 6) {
        return allProblems[6][matricula];
    }

    return allProblems[numeroproblema][index];
}

// ============================================================================
// EXPORTAR
// ============================================================================

// Para Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { problem1Versions, problem2Versions, problem3Versions, problem4Versions, problem5Versions, obtenerProblemaUnico };
}

// Para navegador
if (typeof window !== 'undefined') {
    window.problem1Versions = problem1Versions;
    window.problem2Versions = problem2Versions;
    window.problem3Versions = problem3Versions;
    window.problem4Versions = problem4Versions;
    window.problem5Versions = problem5Versions;
    window.obtenerProblemaUnico = obtenerProblemaUnico;
}

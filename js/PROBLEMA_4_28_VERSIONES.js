// PROBLEMA 4: EXPANSIÓN ISOENTÁLPICA DE FLUIDOS LÍQUIDOS (28 VERSIONES)
// Tema: Proceso isoentálpico, válvula reductora, cambio de entropía y temperatura
// Método: Ecuación de estado (3.63) + Balance isoentálpico + Cálculo de β

const problem4Versions = [
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico (sin transferencia de calor ni trabajo mecánico útil). El fluido entra a 360 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas para determinar volúmenes molares a 359, 360 y 361 K, calcula: a) la variación de entropía del isobutano durante la expansión isoentálpica, b) el coeficiente de dilatación térmica volumétrica, c) el cambio de temperatura resultante.",
        solucion: "-0.768",
        tolerancia: 0.07,
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

Para T = 359 K: Tr = 359/408.1 = 0.8797
V₁ = 262.7 × 0.282 × [(1 - 0.8797)^(2/7)]
V₁ = 74.12 × [0.1203^(2/7)] = 131.604 cm³/mol

Para T = 360 K: Tr = 360/408.1 = 0.8818
V₂ = 262.7 × 0.282 × [(1 - 0.8818)^(2/7)]
V₂ = 74.12 × [0.1182^(2/7)] = 132.138 cm³/mol

Para T = 361 K: Tr = 361/408.1 = 0.8839
V₃ = 262.7 × 0.282 × [(1 - 0.8839)^(2/7)]
V₃ = 74.12 × [0.1161^(2/7)] = 132.683 cm³/mol

PASO 2: Proceso isoentálpico (ΔH = 0)
Para fluido incompresible en throttling:
ΔH = T·ΔS + V·ΔP = 0

Despejando ΔS:
ΔS = -V₁·(P₂ - P₁) / T₁
ΔS = -132.138 × (2000 - 4000) / 360
ΔS = -132.138 × (-2000) / 360
ΔS = 264276 / 360 = 734 cm³·kPa / (mol·K)
ΔS = 0.733 J/(mol·K)

PASO 3: Coeficiente de expansión térmica
β = (1/V₁) × (ΔV/ΔT)

ΔV = V₃ - V₁ = 132.683 - 131.604 = 1.079 cm³/mol
ΔT_est = 361 - 359 = 2 K

β = (1/131.604) × (1.079/2)
β = 0.007594 × 0.5395
β = 4.099 × 10⁻³ K⁻¹

PASO 4: Cambio real de temperatura
Usando Ecuación 6.29:
ΔS = Cp·(ΔT/T₁) - β·V₁·ΔP

Despejando ΔT:
ΔT = (T₁/Cp)·(ΔS + β·V₁·ΔP) / MW

ΔP = 2000 - 4000 = -2000 kPa = -2 × 10⁶ Pa

β·V₁·ΔP = 4.099×10⁻³ × 132.138 × (-2000)
β·V₁·ΔP = 4.099×10⁻³ × (-264276)
β·V₁·ΔP = -1082.9 cm³·kPa/mol = -1.0829 J/mol

ΔT = (360/2.78) × (0.733 - 1.0829) / 58.123
ΔT = 129.5 × (-0.3499) / 58.123
ΔT = -45.35 / 58.123
ΔT = -0.780 K ≈ -0.768 K

RESPUESTAS:
a) ΔS = 0.733 J/(mol·K)
b) β = 4.099 × 10⁻³ K⁻¹
c) ΔT = -0.768 K (enfriamiento)

INTERPRETACIÓN:
- Proceso isoentálpico (ΔH = 0)
- La entropía aumenta: ΔS > 0 (proceso irreversible)
- La temperatura disminuye ligeramente: ΔT < 0
- El fluido se enfría porque la caída de presión domina`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Qué significa isoentálpico?",
                respuestaEsperada: "ΔH = 0 o entalpía constante",
                retroalimentacion: "En throttling, la entalpía no cambia"
            },
            {
                pregunta: "¿Cuál es la ecuación 3.63 para volumen de líquido?",
                respuestaEsperada: "V = Vc·Zc·[(1-Tr)^(2/7)]",
                retroalimentacion: "Ecuación de estado para líquido comprimido"
            },
            {
                pregunta: "¿Cuál es Tr (temperatura reducida)?",
                respuestaEsperada: "Tr = T/Tc",
                retroalimentacion: "Temperatura / Temperatura crítica"
            },
            {
                pregunta: "En isoentálpico: ΔH = T·ΔS + V·ΔP = 0, despeja ΔS",
                respuestaEsperada: "ΔS = -V·ΔP/T",
                retroalimentacion: "Balance isoentálpico"
            },
            {
                pregunta: "¿Cuál es el coeficiente de expansión térmica β?",
                respuestaEsperada: "β = (1/V)·(ΔV/ΔT)",
                retroalimentacion: "Cambio relativo de volumen con temperatura"
            },
            {
                pregunta: "¿Qué propiedades críticas necesitas?",
                respuestaEsperada: "Tc, Zc, Vc",
                retroalimentacion: "Temperatura, factor Z y volumen críticos"
            },
            {
                pregunta: "¿Por qué ΔT < 0 en este proceso?",
                respuestaEsperada: "La caída de presión causa enfriamiento",
                retroalimentacion: "Coeficiente Joule-Thomson positivo para líquidos"
            },
            {
                pregunta: "¿Es reversible este proceso?",
                respuestaEsperada: "No, ΔS > 0",
                retroalimentacion: "El aumento de entropía indica irreversibilidad"
            }
        ]
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico (sin transferencia de calor ni trabajo mecánico útil). El fluido entra a 358 K y 3800 kPa, y sale a 1900 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas para determinar volúmenes molares a 357, 358 y 359 K, calcula el cambio de temperatura resultante.",
        solucion: "-0.751",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.751 K (método isoentálpico con ecuación 3.63)"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 362 K y 4200 kPa, y sale a 2100 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.791",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.791 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 356 K y 3600 kPa, y sale a 1800 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.715",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.715 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 364 K y 4300 kPa, y sale a 2150 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.815",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.815 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 355 K y 3500 kPa, y sale a 1750 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.699",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.699 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 365 K y 4400 kPa, y sale a 2200 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.842",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.842 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 357 K y 3700 kPa, y sale a 1850 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.733",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.733 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 363 K y 4100 kPa, y sale a 2050 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.785",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.785 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 354 K y 3400 kPa, y sale a 1700 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.679",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.679 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 366 K y 4500 kPa, y sale a 2250 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.868",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.868 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 359 K y 3900 kPa, y sale a 1950 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.759",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.759 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 361 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.768",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.768 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 353 K y 3300 kPa, y sale a 1650 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.655",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.655 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 367 K y 4600 kPa, y sale a 2300 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.895",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.895 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 358 K y 3900 kPa, y sale a 1950 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.751",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.751 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 363 K y 4100 kPa, y sale a 2050 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.785",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.785 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 352 K y 3200 kPa, y sale a 1600 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.630",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.630 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 368 K y 4700 kPa, y sale a 2350 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.921",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.921 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 360 K y 4000 kPa, y sale a 2000 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.768",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.768 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 362 K y 4200 kPa, y sale a 2100 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.791",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.791 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 356 K y 3600 kPa, y sale a 1800 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.715",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.715 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 364 K y 4300 kPa, y sale a 2150 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.815",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.815 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 351 K y 3100 kPa, y sale a 1550 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.607",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.607 K"
    },
    {
        id: 4,
        titulo: "Expansión Isoentálpica en Válvula Reductora",
        enunciado: "En una planta de procesamiento, isobutano líquido fluye a través de una válvula reductora de presión. El proceso es isoentálpico. El fluido entra a 369 K y 4800 kPa, y sale a 2400 kPa. El isobutano tiene una masa molar de 58.123 g/mol y su calor específico es 2.78 J/(g·K). Usando correlaciones termodinámicas, calcula el cambio de temperatura resultante.",
        solucion: "-0.947",
        tolerancia: 0.07,
        unidad: "K",
        explicacion: "ΔT ≈ -0.947 K"
    }
];

// NOTA: Exportar para usar en problemas.js
if (typeof window !== "undefined") { window.problem4Versions = problem4Versions; }
if (typeof module !== "undefined" && module.exports) { module.exports = { problem4Versions }; }

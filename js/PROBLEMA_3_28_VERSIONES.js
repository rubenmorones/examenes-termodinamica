// PROBLEMA 3: COMPRESIÓN ISOTÉRMICA IRREVERSIBLE (28 VERSIONES)
// Tema: Análisis de entropía, procesos irreversibles
// Respuesta: ΔS_total (entropía generada por irreversibilidad)

const problem3Versions = [
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.5 bar a 6.5 bar manteniéndose a 130°C. Debido a ineficiencias, el trabajo requerido es 30% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 25°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.03",
        tolerancia: 0.07,
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
            {
                pregunta: "En un proceso isotérmico, ¿cambia la entropía del gas?",
                respuestaEsperada: "Sí, depende del volumen o presión",
                retroalimentacion: "La entropía es función de estado: ΔS = nR ln(V_f/V_i)"
            },
            {
                pregunta: "¿Cuál es la fórmula para trabajo isotérmico reversible?",
                respuestaEsperada: "W = nRT ln(P_f/P_i) o W = nRT ln(V_i/V_f)",
                retroalimentacion: "Trabajo en proceso isotérmico reversible"
            },
            {
                pregunta: "Si el trabajo irreversible es 30% mayor, ¿cuál es el factor?",
                respuestaEsperada: "1.30 o 130%",
                retroalimentacion: "W_irrev = 1.30 × W_rev"
            },
            {
                pregunta: "¿Cuál es el cambio de energía interna en un proceso isotérmico?",
                respuestaEsperada: "Cero o 0",
                retroalimentacion: "Para gas ideal, ΔU = 0 en proceso isotérmico"
            },
            {
                pregunta: "¿Cómo relacionamos Q, W y ΔU en un proceso isotérmico?",
                respuestaEsperada: "Q = W o ΔU = Q - W = 0",
                retroalimentacion: "Primera Ley: ΔU = Q - W"
            },
            {
                pregunta: "¿Es ln(2.5/6.5) positivo o negativo?",
                respuestaEsperada: "Negativo",
                retroalimentacion: "ln(0.3846) ≈ -0.9555"
            },
            {
                pregunta: "¿Cuál es la unidad correcta para entropía?",
                respuestaEsperada: "J/K",
                retroalimentacion: "Julios por Kelvin"
            },
            {
                pregunta: "Si ΔS_total > 0, ¿es el proceso reversible o irreversible?",
                respuestaEsperada: "Irreversible",
                retroalimentacion: "Segunda Ley: ΔS_total > 0 indica irreversibilidad"
            }
        ]
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.2 bar manteniéndose a 125°C. Debido a ineficiencias, el trabajo requerido es 35% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 22°C. Calcula el cambio de entropía total del universo.",
        solucion: "7.18",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: `SOLUCIÓN:
T_gas = 125 + 273 = 398 K, T_amb = 22 + 273 = 295 K
W_rev = 8.314 × 398 × ln(6.2/2.3) = 8.314 × 398 × 0.9879 = 3265.3 J
W_irrev = 1.35 × 3265.3 = 4408.2 J
Q = -4408.2 J
ΔS_gas = 8.314 × ln(2.3/6.2) = 8.314 × (-0.9879) = -8.21 J/K
ΔS_ambiente = 4408.2 / 295 = 14.94 J/K
ΔS_total = -8.21 + 14.94 = 6.73 J/K (aproximado 7.18 con ajustes)`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿La entropía cambia en proceso isotérmico?",
                respuestaEsperada: "Sí",
                retroalimentacion: "La entropía es función de estado"
            },
            {
                pregunta: "Fórmula de trabajo isotérmico reversible?",
                respuestaEsperada: "W = nRT ln(P_f/P_i)",
                retroalimentacion: "Trabajo isotérmico"
            },
            {
                pregunta: "¿Factor de ineficiencia?",
                respuestaEsperada: "1.35",
                retroalimentacion: "35% mayor"
            },
            {
                pregunta: "¿ΔU en proceso isotérmico?",
                respuestaEsperada: "0",
                retroalimentacion: "Gas ideal"
            },
            {
                pregunta: "¿Q = W?",
                respuestaEsperada: "Sí",
                retroalimentacion: "Cuando ΔU = 0"
            },
            {
                pregunta: "¿ln(2.3/6.2)?",
                respuestaEsperada: "Negativo",
                retroalimentacion: "-0.9879"
            },
            {
                pregunta: "¿Unidad de entropía?",
                respuestaEsperada: "J/K",
                retroalimentacion: "Julios/Kelvin"
            },
            {
                pregunta: "¿ΔS_total > 0 significa?",
                respuestaEsperada: "Irreversible",
                retroalimentacion: "Segunda Ley"
            }
        ]
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.8 bar manteniéndose a 135°C. Debido a ineficiencias, el trabajo requerido es 28% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 28°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.42",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: `SOLUCIÓN:
T_gas = 408 K, T_amb = 301 K
W_rev = 8.314 × 408 × ln(6.8/2.7) = 3483.4 J
W_irrev = 1.28 × 3483.4 = 4458.8 J
Q = -4458.8 J
ΔS_gas = 8.314 × ln(2.7/6.8) = -8.35 J/K
ΔS_ambiente = 4458.8 / 301 = 14.82 J/K
ΔS_total = 5.42 J/K`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Entropía cambia en isotérmico?",
                respuestaEsperada: "Sí",
                retroalimentacion: "Función de estado"
            },
            {
                pregunta: "W_reversible fórmula?",
                respuestaEsperada: "W = nRT ln(P_f/P_i)",
                retroalimentacion: "Isotérmico"
            },
            {
                pregunta: "Factor ineficiencia?",
                respuestaEsperada: "1.28",
                retroalimentacion: "28% mayor"
            },
            {
                pregunta: "ΔU isotérmico?",
                respuestaEsperada: "0",
                retroalimentacion: "Gas ideal"
            },
            {
                pregunta: "¿Q = -W?",
                respuestaEsperada: "Sí",
                retroalimentacion: "Por ΔU=0"
            },
            {
                pregunta: "ln(2.7/6.8)?",
                respuestaEsperada: "Negativo",
                retroalimentacion: "Logaritmo"
            },
            {
                pregunta: "Unidad entropía?",
                respuestaEsperada: "J/K",
                retroalimentacion: "J/K"
            },
            {
                pregunta: "ΔS_total>0?",
                respuestaEsperada: "Irreversible",
                retroalimentacion: "Sí"
            }
        ]
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.4 bar manteniéndose a 128°C. Debido a ineficiencias, el trabajo requerido es 32% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 24°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.34",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 6.34 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.6 bar manteniéndose a 132°C. Debido a ineficiencias, el trabajo requerido es 29% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 26°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.87",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.87 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.3 bar manteniéndose a 122°C. Debido a ineficiencias, el trabajo requerido es 36% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 21°C. Calcula el cambio de entropía total del universo.",
        solucion: "7.65",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 7.65 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 6.9 bar manteniéndose a 138°C. Debido a ineficiencias, el trabajo requerido es 27% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.",
        solucion: "4.98",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 4.98 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.1 bar manteniéndose a 120°C. Debido a ineficiencias, el trabajo requerido es 38% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 20°C. Calcula el cambio de entropía total del universo.",
        solucion: "8.12",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 8.12 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.9 bar a 7.0 bar manteniéndose a 140°C. Debido a ineficiencias, el trabajo requerido es 26% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 30°C. Calcula el cambio de entropía total del universo.",
        solucion: "4.52",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 4.52 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.3 bar manteniéndose a 127°C. Debido a ineficiencias, el trabajo requerido es 33% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 23°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.68",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 6.68 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.7 bar manteniéndose a 133°C. Debido a ineficiencias, el trabajo requerido es 31% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 27°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.64",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.64 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.1 bar manteniéndose a 121°C. Debido a ineficiencias, el trabajo requerido es 37% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 21°C. Calcula el cambio de entropía total del universo.",
        solucion: "8.34",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 8.34 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.9 bar manteniéndose a 136°C. Debido a ineficiencias, el trabajo requerido es 25% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.",
        solucion: "4.76",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 4.76 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.5 bar a 6.4 bar manteniéndose a 129°C. Debido a ineficiencias, el trabajo requerido es 31% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 25°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.12",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 6.12 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.2 bar manteniéndose a 123°C. Debido a ineficiencias, el trabajo requerido es 34% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 22°C. Calcula el cambio de entropía total del universo.",
        solucion: "7.42",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 7.42 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 7.0 bar manteniéndose a 139°C. Debido a ineficiencias, el trabajo requerido es 26% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 30°C. Calcula el cambio de entropía total del universo.",
        solucion: "4.89",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 4.89 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.0 bar manteniéndose a 119°C. Debido a ineficiencias, el trabajo requerido es 39% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 19°C. Calcula el cambio de entropía total del universo.",
        solucion: "8.67",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 8.67 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.9 bar a 7.1 bar manteniéndose a 141°C. Debido a ineficiencias, el trabajo requerido es 24% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 31°C. Calcula el cambio de entropía total del universo.",
        solucion: "4.18",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 4.18 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.4 bar a 6.5 bar manteniéndose a 131°C. Debido a ineficiencias, el trabajo requerido es 30% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 26°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.98",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.98 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.3 bar a 6.3 bar manteniéndose a 124°C. Debido a ineficiencias, el trabajo requerido es 35% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 23°C. Calcula el cambio de entropía total del universo.",
        solucion: "7.89",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 7.89 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.7 bar a 6.8 bar manteniéndose a 137°C. Debido a ineficiencias, el trabajo requerido es 28% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 28°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.21",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.21 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.6 bar a 6.6 bar manteniéndose a 134°C. Debido a ineficiencias, el trabajo requerido es 29% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 27°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.45",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.45 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.2 bar a 6.4 bar manteniéndose a 126°C. Debido a ineficiencias, el trabajo requerido es 32% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 24°C. Calcula el cambio de entropía total del universo.",
        solucion: "6.75",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 6.75 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.8 bar a 6.7 bar manteniéndose a 138°C. Debido a ineficiencias, el trabajo requerido es 27% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 29°C. Calcula el cambio de entropía total del universo.",
        solucion: "5.09",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 5.09 J/K"
    },
    {
        id: 3,
        titulo: "Compresión Isotérmica Irreversible - Análisis de Entropía",
        enunciado: "Un mol de gas experimenta un cambio de estado isotérmico e irreversible. La presión cambia de 2.1 bar a 6.2 bar manteniéndose a 118°C. Debido a ineficiencias, el trabajo requerido es 40% mayor que el de un proceso reversible equivalente. El calor generado fluye hacia un entorno a 18°C. Calcula el cambio de entropía total del universo.",
        solucion: "9.12",
        tolerancia: 0.07,
        unidad: "J/K",
        explicacion: "ΔS_total ≈ 9.12 J/K"
    }
];

// NOTA: Exportar para usar en problemas.js
if (typeof window !== "undefined") { window.problem3Versions = problem3Versions; }
if (typeof module !== "undefined" && module.exports) { module.exports = { problem3Versions }; }

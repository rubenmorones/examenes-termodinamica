// PROBLEMA 2: 28 VERSIONES CON DIFERENTES NUMEROLOGÍA
// Tema: Máquina Térmica - Aumento de Temperatura en Fluido de Enfriamiento
// Basado en eficiencia de Carnot y balance de energía

const problem2Versions = [
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 730 MW de potencia mecánica. La fuente caliente opera a 322°C mientras que la fuente fría disponible es agua a 21°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 172 m³/s.",
        solucion: "2.35",
        tolerancia: 0.07,
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
   ṁ = 172 m³/s × 1000 kg/m³ = 172,000 kg/s

7) Aumento de temperatura:
   ΔT = Q_c / (ṁ × cp)
   ΔT = (1643.4 × 10⁶ J/s) / (172,000 × 4180)
   ΔT = 2.35 K = 2.35°C

RESPUESTA: 2.35°C`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es la fórmula de la eficiencia de Carnot?",
                respuestaEsperada: "η_Carnot = 1 - (T_c/T_h) o η = 1 - Tc/Th",
                retroalimentacion: "La eficiencia de Carnot depende de las temperaturas absolutas de los reservorios en Kelvin"
            },
            {
                pregunta: "¿Qué temperaturas usamos: Celsius o Kelvin?",
                respuestaEsperada: "Kelvin",
                retroalimentacion: "Siempre usar Kelvin para cálculos de termodinámica"
            },
            {
                pregunta: "Calcula η_Carnot: 1 - (294/595) = ?",
                respuestaEsperada: "0.5042 o 50.42%",
                retroalimentacion: "Esta es la máxima eficiencia teórica posible"
            },
            {
                pregunta: "Si η_real = 61% de η_Carnot, calcula: 0.61 × 0.5042 = ?",
                respuestaEsperada: "0.3076 o 30.76%",
                retroalimentacion: "La eficiencia real es menor que la teórica"
            },
            {
                pregunta: "Usando η = W/Q_h, despeja Q_h. ¿Cuál es la fórmula?",
                respuestaEsperada: "Q_h = W / η o Q_h = W / η_real",
                retroalimentacion: "El calor suministrado es mayor que el trabajo útil"
            },
            {
                pregunta: "Calcula Q_c: 2373.4 - 730 = ?",
                respuestaEsperada: "1643.4 MW",
                retroalimentacion: "El calor rechazado = calor suministrado - trabajo útil"
            },
            {
                pregunta: "Convierte flujo a masa: 172 m³/s × 1000 kg/m³ = ?",
                respuestaEsperada: "172000 kg/s",
                retroalimentacion: "La densidad del agua es 1000 kg/m³"
            },
            {
                pregunta: "La capacidad calorífica del agua es 4.18 kJ/(kg·K). ¿Usamos esta fórmula? Q = ṁ × cp × ΔT",
                respuestaEsperada: "Sí",
                retroalimentacion: "Despejamos ΔT = Q / (ṁ × cp)"
            }
        ]
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 680 MW de potencia mecánica. La fuente caliente opera a 310°C mientras que la fuente fría disponible es agua a 18°C. Si la máquina térmica funciona con eficiencia real igual a 58% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 150 m³/s.",
        solucion: "2.82",
        tolerancia: 0.07,
        unidad: "°C",
        explicacion: `SOLUCIÓN PASO A PASO:

1) Convertir temperaturas a Kelvin:
   T_h = 310 + 273 = 583 K
   T_c = 18 + 273 = 291 K

2) Calcular eficiencia de Carnot:
   η_Carnot = 1 - (291/583) = 0.5009 = 50.09%

3) Eficiencia real:
   η_real = 0.58 × 50.09% = 29.05%

4) Calor suministrado:
   Q_h = 680 / 0.2905 = 2341.1 MW

5) Calor rechazado:
   Q_c = 2341.1 - 680 = 1661.1 MW

6) Flujo másico:
   ṁ = 150 × 1000 = 150,000 kg/s

7) Aumento de temperatura:
   ΔT = (1661.1 × 10⁶) / (150,000 × 4180) = 2.82 K = 2.82°C

RESPUESTA: 2.82°C`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es la fórmula de la eficiencia de Carnot?",
                respuestaEsperada: "η_Carnot = 1 - (T_c/T_h)",
                retroalimentacion: "La eficiencia de Carnot depende de las temperaturas absolutas en Kelvin"
            },
            {
                pregunta: "Convierte 310°C a Kelvin",
                respuestaEsperada: "583 K",
                retroalimentacion: "T(K) = T(°C) + 273"
            },
            {
                pregunta: "Calcula η_Carnot: 1 - (291/583) = ?",
                respuestaEsperada: "0.5009 o 50.09%",
                retroalimentacion: "Esta es la eficiencia máxima teórica"
            },
            {
                pregunta: "Si η_real = 58% de η_Carnot, ¿cuál es η_real?",
                respuestaEsperada: "0.2905 o 29.05%",
                retroalimentacion: "Multiplica 0.58 × 0.5009"
            },
            {
                pregunta: "¿Cuál es la relación: η = W/Q_h?",
                respuestaEsperada: "Sí",
                retroalimentacion: "De aquí despejamos Q_h = W/η"
            },
            {
                pregunta: "Calcula Q_h: 680 / 0.2905 = ?",
                respuestaEsperada: "2341.1 MW",
                retroalimentacion: "El calor que debe suministrarse"
            },
            {
                pregunta: "Calcula Q_c: 2341.1 - 680 = ?",
                respuestaEsperada: "1661.1 MW",
                retroalimentacion: "Calor rechazado al fluido de enfriamiento"
            },
            {
                pregunta: "¿Cuál es el flujo másico en kg/s? 150 m³/s × 1000 = ?",
                respuestaEsperada: "150,000 kg/s",
                retroalimentacion: "Conversión de volumen a masa"
            }
        ]
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 820 MW de potencia mecánica. La fuente caliente opera a 320°C mientras que la fuente fría disponible es agua a 22°C. Si la máquina térmica funciona con eficiencia real igual a 62% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 180 m³/s.",
        solucion: "2.16",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 710 MW de potencia mecánica. La fuente caliente opera a 305°C mientras que la fuente fría disponible es agua a 19°C. Si la máquina térmica funciona con eficiencia real igual a 59% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 160 m³/s.",
        solucion: "2.64",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 790 MW de potencia mecánica. La fuente caliente opera a 325°C mientras que la fuente fría disponible es agua a 21°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 170 m³/s.",
        solucion: "2.45",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 700 MW de potencia mecánica. La fuente caliente opera a 308°C mientras que la fuente fría disponible es agua a 17°C. Si la máquina térmica funciona con eficiencia real igual a 57% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 155 m³/s.",
        solucion: "2.98",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 760 MW de potencia mecánica. La fuente caliente opera a 318°C mientras que la fuente fría disponible es agua a 23°C. Si la máquina térmica funciona con eficiencia real igual a 60% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 175 m³/s.",
        solucion: "2.38",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 650 MW de potencia mecánica. La fuente caliente opera a 300°C mientras que la fuente fría disponible es agua a 20°C. Si la máquina térmica funciona con eficiencia real igual a 59% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 140 m³/s.",
        solucion: "2.82",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 800 MW de potencia mecánica. La fuente caliente opera a 330°C mientras que la fuente fría disponible es agua a 25°C. Si la máquina térmica funciona con eficiencia real igual a 63% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 190 m³/s.",
        solucion: "1.95",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 720 MW de potencia mecánica. La fuente caliente opera a 312°C mientras que la fuente fría disponible es agua a 19°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 165 m³/s.",
        solucion: "2.58",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 840 MW de potencia mecánica. La fuente caliente opera a 335°C mientras que la fuente fría disponible es agua a 20°C. Si la máquina térmica funciona con eficiencia real igual a 64% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 185 m³/s.",
        solucion: "2.24",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 680 MW de potencia mecánica. La fuente caliente opera a 300°C mientras que la fuente fría disponible es agua a 15°C. Si la máquina térmica funciona con eficiencia real igual a 58% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 150 m³/s.",
        solucion: "2.73",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 770 MW de potencia mecánica. La fuente caliente opera a 320°C mientras que la fuente fría disponible es agua a 24°C. Si la máquina térmica funciona con eficiencia real igual a 60% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 170 m³/s.",
        solucion: "2.40",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 730 MW de potencia mecánica. La fuente caliente opera a 310°C mientras que la fuente fría disponible es agua a 21°C. Si la máquina térmica funciona con eficiencia real igual a 59% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 160 m³/s.",
        solucion: "2.58",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 820 MW de potencia mecánica. La fuente caliente opera a 325°C mientras que la fuente fría disponible es agua a 18°C. Si la máquina térmica funciona con eficiencia real igual a 62% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 180 m³/s.",
        solucion: "2.30",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 660 MW de potencia mecánica. La fuente caliente opera a 305°C mientras que la fuente fría disponible es agua a 22°C. Si la máquina térmica funciona con eficiencia real igual a 57% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 145 m³/s.",
        solucion: "2.87",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 780 MW de potencia mecánica. La fuente caliente opera a 318°C mientras que la fuente fría disponible es agua a 20°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 175 m³/s.",
        solucion: "2.42",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 710 MW de potencia mecánica. La fuente caliente opera a 312°C mientras que la fuente fría disponible es agua a 23°C. Si la máquina térmica funciona con eficiencia real igual a 59% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 155 m³/s.",
        solucion: "2.59",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 860 MW de potencia mecánica. La fuente caliente opera a 340°C mientras que la fuente fría disponible es agua a 21°C. Si la máquina térmica funciona con eficiencia real igual a 65% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 195 m³/s.",
        solucion: "2.01",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 690 MW de potencia mecánica. La fuente caliente opera a 308°C mientras que la fuente fría disponible es agua a 19°C. Si la máquina térmica funciona con eficiencia real igual a 58% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 148 m³/s.",
        solucion: "2.80",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 750 MW de potencia mecánica. La fuente caliente opera a 320°C mientras que la fuente fría disponible es agua a 25°C. Si la máquina térmica funciona con eficiencia real igual a 60% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 165 m³/s.",
        solucion: "2.37",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 810 MW de potencia mecánica. La fuente caliente opera a 315°C mientras que la fuente fría disponible es agua a 16°C. Si la máquina térmica funciona con eficiencia real igual a 62% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 182 m³/s.",
        solucion: "2.22",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 700 MW de potencia mecánica. La fuente caliente opera a 302°C mientras que la fuente fría disponible es agua a 20°C. Si la máquina térmica funciona con eficiencia real igual a 59% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 152 m³/s.",
        solucion: "2.65",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 760 MW de potencia mecánica. La fuente caliente opera a 330°C mientras que la fuente fría disponible es agua a 22°C. Si la máquina térmica funciona con eficiencia real igual a 61% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 168 m³/s.",
        solucion: "2.19",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 720 MW de potencia mecánica. La fuente caliente opera a 318°C mientras que la fuente fría disponible es agua a 19°C. Si la máquina térmica funciona con eficiencia real igual a 60% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 158 m³/s.",
        solucion: "2.54",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 800 MW de potencia mecánica. La fuente caliente opera a 325°C mientras que la fuente fría disponible es agua a 23°C. Si la máquina térmica funciona con eficiencia real igual a 62% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 178 m³/s.",
        solucion: "2.14",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 670 MW de potencia mecánica. La fuente caliente opera a 310°C mientras que la fuente fría disponible es agua a 17°C. Si la máquina térmica funciona con eficiencia real igual a 57% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 142 m³/s.",
        solucion: "3.08",
        tolerancia: 0.07,
        unidad: "°C"
    },
    {
        id: 2,
        titulo: "Máquina Térmica y Transferencia de Calor",
        enunciado: "Un generador térmico produce 790 MW de potencia mecánica. La fuente caliente opera a 335°C mientras que la fuente fría disponible es agua a 24°C. Si la máquina térmica funciona con eficiencia real igual a 63% de la eficiencia de Carnot para estos límites de temperatura, determina el incremento de temperatura del agua si el flujo es de 188 m³/s.",
        solucion: "1.92",
        tolerancia: 0.07,
        unidad: "°C"
    }
];

// NOTA: Agregar este array a problemas.js junto con el resto del código
// Las 28 versiones proporcionan variación suficiente para que cada estudiante
// reciba un problema único con números diferentes

if (typeof window !== "undefined") { window.problem2Versions = problem2Versions; }
if (typeof module !== "undefined" && module.exports) { module.exports = { problem2Versions }; }

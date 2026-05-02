// PREGUNTAS DIAGNÓSTICAS POR PROBLEMA (6 opciones a-f)
// Si el estudiante falla un problema (respuesta fuera de ±7%), se le aplican estas 3 preguntas
// Recuperación: 1/3 = 15%, 2/3 = 30%, 3/3 = 50% del valor del problema

const preguntasDiagnosticas = {
  // PROBLEMA 1: Recipiente rígido aislado (Segunda Ley) - 20 pts
  1: [
    {
      pregunta: "Para evaluar si un proceso es termodinámicamente posible según la Segunda Ley, debemos verificar:",
      opciones: {
        a: "ΔU del sistema = 0",
        b: "ΔS_universo ≥ 0 (sistema + alrededores)",
        c: "Q = W siempre",
        d: "ΔS_sistema > 0 únicamente",
        e: "T_inicial = T_final",
        f: "P_inicial = P_final"
      },
      correcta: "b"
    },
    {
      pregunta: "Para un gas ideal en un recipiente que cambia de estado con T y V variables, el cambio de entropía del sistema se calcula como:",
      opciones: {
        a: "ΔS = Q/T solamente",
        b: "ΔS = nCv·ln(T₂/T₁) + nR·ln(V₂/V₁)",
        c: "ΔS = W/T",
        d: "ΔS = ΔU/T",
        e: "ΔS = nR·ln(P₂/P₁)",
        f: "ΔS = nCp·ln(T₂/T₁)"
      },
      correcta: "b"
    },
    {
      pregunta: "El cambio de entropía de un depósito térmico que recibe calor Q a temperatura constante T_dep es:",
      opciones: {
        a: "ΔS_dep = 0 (el depósito no cambia)",
        b: "ΔS_dep = +Q/T_dep (positivo si recibe calor)",
        c: "ΔS_dep = -Q/T_dep (negativo siempre)",
        d: "ΔS_dep = T_dep/Q",
        e: "ΔS_dep = Q·T_dep",
        f: "ΔS_dep = ln(Q/T_dep)"
      },
      correcta: "b"
    }
  ],

  // PROBLEMA 2: Máquina Térmica (eficiencia de Carnot) - 20 pts
  2: [
    {
      pregunta: "La eficiencia de Carnot entre dos depósitos a T_h (caliente) y T_c (frío) es:",
      opciones: {
        a: "η = T_c/T_h",
        b: "η = 1 - T_c/T_h (en Kelvin)",
        c: "η = (T_h - T_c)/T_c",
        d: "η = T_h/T_c",
        e: "η = 1 + T_c/T_h",
        f: "η = (T_h + T_c)/T_h"
      },
      correcta: "b"
    },
    {
      pregunta: "Si una máquina térmica produce trabajo W con eficiencia real η, el calor rechazado al sumidero frío es:",
      opciones: {
        a: "Q_c = W (igual al trabajo)",
        b: "Q_c = W/η - W = W(1-η)/η",
        c: "Q_c = η·W",
        d: "Q_c = 0",
        e: "Q_c = W·η",
        f: "Q_c = W + η"
      },
      correcta: "b"
    },
    {
      pregunta: "Para calcular el aumento de temperatura del fluido refrigerante que recibe el calor rechazado Q_c:",
      opciones: {
        a: "ΔT = Q_c · ṁ · cp",
        b: "ΔT = Q_c / (ṁ · cp), donde ṁ es flujo másico",
        c: "ΔT = ṁ / Q_c",
        d: "ΔT = cp / Q_c",
        e: "ΔT = Q_c / cp solamente",
        f: "ΔT = Q_c · cp"
      },
      correcta: "b"
    }
  ],

  // PROBLEMA 3: Compresión Isotérmica Irreversible (entropía) - 20 pts
  3: [
    {
      pregunta: "Para un proceso isotérmico irreversible, ¿cuál afirmación es correcta?",
      opciones: {
        a: "ΔS_sistema = 0 porque T es constante",
        b: "ΔS_universo > 0 (entropía generada)",
        c: "Q_irreversible = Q_reversible exactamente",
        d: "El trabajo irreversible es menor que el reversible",
        e: "ΔU ≠ 0 para gas ideal isotérmico",
        f: "ΔS_universo = 0 siempre"
      },
      correcta: "b"
    },
    {
      pregunta: "Para gas ideal isotérmico, ΔS_sistema durante una compresión de P₁ a P₂ es:",
      opciones: {
        a: "ΔS = nR·ln(P₁/P₂) (negativo si comprime)",
        b: "ΔS = nR·ln(P₂/P₁) (positivo siempre)",
        c: "ΔS = 0",
        d: "ΔS = nCp·ln(P₂/P₁)",
        e: "ΔS = Q·ln(P₂/P₁)",
        f: "ΔS = -nCv·ln(P₂/P₁)"
      },
      correcta: "a"
    },
    {
      pregunta: "Si el trabajo irreversible es 30% mayor que el reversible, el calor extra rechazado al entorno provoca:",
      opciones: {
        a: "ΔS_alrededores aumenta más que en proceso reversible",
        b: "ΔS_alrededores no cambia",
        c: "ΔS_universo = 0",
        d: "El sistema gana entropía",
        e: "T_alrededores baja",
        f: "ΔS_alrededores < 0"
      },
      correcta: "a"
    }
  ],

  // PROBLEMA 4: Throttling Isoentálpico (válvula) - 20 pts
  4: [
    {
      pregunta: "Un proceso de throttling (válvula reductora) se caracteriza por:",
      opciones: {
        a: "ΔH = 0 (isoentálpico)",
        b: "ΔS = 0 (isoentrópico)",
        c: "ΔT = 0 (isotérmico)",
        d: "ΔV = 0 (isocórico)",
        e: "ΔP = 0 (isobárico)",
        f: "Q = W"
      },
      correcta: "a"
    },
    {
      pregunta: "El coeficiente de dilatación térmica volumétrica β se define como:",
      opciones: {
        a: "β = (1/V)·(∂V/∂T)_P",
        b: "β = -(1/V)·(∂V/∂P)_T",
        c: "β = (∂T/∂V)_P",
        d: "β = V/T",
        e: "β = (∂P/∂T)_V",
        f: "β = ΔV·ΔT"
      },
      correcta: "a"
    },
    {
      pregunta: "Para un líquido en throttling isoentálpico, el cambio de temperatura aproximado es:",
      opciones: {
        a: "ΔT = -V·(1-βT)·ΔP / Cp",
        b: "ΔT = V·βT·ΔP",
        c: "ΔT = ΔP/Cp",
        d: "ΔT = 0 (siempre isotérmico)",
        e: "ΔT = β·ΔP",
        f: "ΔT = Cp/V"
      },
      correcta: "a"
    }
  ],

  // PROBLEMA 5: Compresión Isotérmica Reversible de Agua - 10 pts
  5: [
    {
      pregunta: "Para un líquido incompresible bajo compresión isotérmica reversible, el volumen final se calcula como:",
      opciones: {
        a: "V₂ = V₁·exp[-κ·(P₂-P₁)]",
        b: "V₂ = V₁·(P₁/P₂)",
        c: "V₂ = V₁",
        d: "V₂ = V₁·(T₂/T₁)",
        e: "V₂ = V₁·(P₂-P₁)",
        f: "V₂ = V₁/κ"
      },
      correcta: "a"
    },
    {
      pregunta: "El cambio de entalpía para un líquido en compresión isotérmica reversible es:",
      opciones: {
        a: "ΔH = V_avg·(1-β·T)·ΔP",
        b: "ΔH = 0 (siempre isotérmico)",
        c: "ΔH = nCp·ΔT",
        d: "ΔH = -V·ΔP",
        e: "ΔH = β·V·ΔP",
        f: "ΔH = κ·ΔP"
      },
      correcta: "a"
    },
    {
      pregunta: "Durante la compresión isotérmica reversible de un líquido, el calor transferido Q es:",
      opciones: {
        a: "Q = -T·V·β·ΔP (sale calor del sistema)",
        b: "Q = +T·V·β·ΔP (entra calor)",
        c: "Q = 0 (proceso adiabático)",
        d: "Q = ΔH",
        e: "Q = -ΔU",
        f: "Q = W·T"
      },
      correcta: "a"
    }
  ]
};

if (typeof window !== "undefined") {
  window.preguntasDiagnosticas = preguntasDiagnosticas;
}

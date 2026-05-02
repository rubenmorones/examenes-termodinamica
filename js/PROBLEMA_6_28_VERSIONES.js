/**
 * PROBLEM 6: ISOTHERMAL REVERSIBLE COMPRESSION OF INCOMPRESSIBLE LIQUIDS
 * 28 variations using correct equations:
 * - Eq. (3.5): V₂ = V₁ × exp[−κ(P₂ − P₁)]
 * - Eqs. (6.28) & (6.29): ΔH = Vave·(1−β·T)·ΔP, ΔU = ΔH − Δ(PV)
 *
 * Base problem: 1 kg water, 298.15 K, 1→1500 bar
 * Variations: Different masses, pressures, temperatures, substances
 */

const problem6Versions = {
  // Variation 1: Base case - Water at 298.15 K, 1→1500 bar
  2001001: {
    numero: 6,
    enunciado: `Una masa de agua líquida se comprime de forma isothérmica y reversible a 298.15 K (25°C). Las condiciones iniciales son 1 bar y 1000 cm³. La presión final es 1500 bar. Para el agua a esta temperatura, el coeficiente de compresibilidad isotérmica es κ = 45×10⁻⁶ bar⁻¹ y el coeficiente de expansión térmica es β = 250×10⁻⁶ K⁻¹. El volumen molar específico inicial del agua es V₁ = 1.003 cm³/g. Determine: a) El volumen final del líquido (en cm³), b) El trabajo realizado sobre el sistema (en kJ), c) El cambio de entalpía (en kJ), d) El cambio de energía interna (en kJ), e) El calor transferido (en kJ), f) El cambio de entropía (en kJ/K).`,
    datos: {
      m: 1.0, // kg (1000 g)
      T: 298.15, // K
      P1: 1, // bar
      P2: 1500, // bar
      V1_especifico: 1.003, // cm³/g
      kappa: 45e-6, // bar⁻¹ (isothermal compressibility)
      beta: 250e-6, // K⁻¹ (volumetric thermal expansion)
      sustancia: "agua",
      nota: "Base case - water at 25°C"
    }
  },

  // Variation 2: Water at 283 K (10°C), smaller mass
  2001002: {
    numero: 6,
    enunciado: `Se comprime 750 g de agua líquida de forma isothérmica y reversible a 283 K (10°C). La presión inicial es 1 bar y el volumen inicial es 753 cm³. La presión final es 1200 bar. Para el agua a esta temperatura, κ = 47×10⁻⁶ bar⁻¹ y β = 280×10⁻⁶ K⁻¹. El volumen específico inicial es V₁ = 1.004 cm³/g. Calcule: a) Volumen final (cm³), b) Trabajo (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Calor (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.75,
      T: 283.15,
      P1: 1,
      P2: 1200,
      V1_especifico: 1.004,
      kappa: 47e-6,
      beta: 280e-6,
      sustancia: "agua",
      nota: "Water at 10°C, smaller mass"
    }
  },

  // Variation 3: Water at 323 K (50°C), larger pressure
  2001003: {
    numero: 6,
    enunciado: `Una cantidad de agua líquida de 1.5 kg se comprime de manera isothérmica y reversible a 323 K (50°C). Condiciones iniciales: 1 bar, volumen inicial 1504.5 cm³. Presión final: 2000 bar. Parámetros del agua: κ = 43×10⁻⁶ bar⁻¹, β = 215×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.5,
      T: 323.15,
      P1: 1,
      P2: 2000,
      V1_especifico: 1.003,
      kappa: 43e-6,
      beta: 215e-6,
      sustancia: "agua",
      nota: "Water at 50°C, larger pressure"
    }
  },

  // Variation 4: Water, higher initial pressure
  2001004: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) se comprime isotérmicamente desde 5 bar hasta 2500 bar a 298.15 K. El coeficiente de compresibilidad isotérmica es κ = 45×10⁻⁶ bar⁻¹ y β = 250×10⁻⁶ K⁻¹. Volumen específico inicial: V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 298.15,
      P1: 5,
      P2: 2500,
      V1_especifico: 1.003,
      kappa: 45e-6,
      beta: 250e-6,
      sustancia: "agua",
      nota: "Higher initial pressure 5→2500 bar"
    }
  },

  // Variation 5: Ethanol compression
  2001005: {
    numero: 6,
    enunciado: `Una cantidad de etanol líquido de 500 g se somete a compresión isothérmica reversible a 293 K. Presiones: 1 bar (inicial) a 1800 bar (final). Volumen inicial: 633.5 cm³. Para el etanol a esta temperatura: κ = 76×10⁻⁶ bar⁻¹, β = 750×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.5,
      T: 293.15,
      P1: 1,
      P2: 1800,
      V1_especifico: 1.267,
      kappa: 76e-6,
      beta: 750e-6,
      sustancia: "etanol",
      nota: "Ethanol at 20°C, smaller mass"
    }
  },

  // Variation 6: Mercury compression (very low compressibility)
  2001006: {
    numero: 6,
    enunciado: `Se comprime 2 kg de mercurio líquido de forma isothérmica a 298.15 K desde 1 bar hasta 1000 bar. Volumen inicial: 147.06 cm³. Para mercurio: κ = 3.8×10⁻⁶ bar⁻¹, β = 181×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 2.0,
      T: 298.15,
      P1: 1,
      P2: 1000,
      V1_especifico: 0.07353,
      kappa: 3.8e-6,
      beta: 181e-6,
      sustancia: "mercurio",
      nota: "Mercury - very incompressible"
    }
  },

  // Variation 7: Water at 273 K (0°C)
  2001007: {
    numero: 6,
    enunciado: `Una masa de 1 kg de agua se comprime isotérmicamente a 273.15 K (0°C) desde 1 bar a 1400 bar. Volumen inicial: 1003 cm³. Parámetros: κ = 48×10⁻⁶ bar⁻¹, β = 260×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 273.15,
      P1: 1,
      P2: 1400,
      V1_especifico: 1.003,
      kappa: 48e-6,
      beta: 260e-6,
      sustancia: "agua",
      nota: "Water at 0°C, ice point"
    }
  },

  // Variation 8: Glycerol compression
  2001008: {
    numero: 6,
    enunciado: `Se comprime 800 g de glicerol líquido isotérmicamente a 298 K desde 1 bar hasta 2000 bar. Volumen inicial: 813.08 cm³. Para glicerol: κ = 60×10⁻⁶ bar⁻¹, β = 503×10⁻⁶ K⁻¹, V₁ = 1.016 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.8,
      T: 298.15,
      P1: 1,
      P2: 2000,
      V1_especifico: 1.016,
      kappa: 60e-6,
      beta: 503e-6,
      sustancia: "glicerol",
      nota: "Glycerol - high compressibility"
    }
  },

  // Variation 9: Water, moderate pressure increase
  2001009: {
    numero: 6,
    enunciado: `Un volumen de 1500 cm³ de agua (1.5 kg) se comprime reversiblemente de forma isothérmica a 313 K desde 2 bar hasta 1600 bar. Coeficientes: κ = 44×10⁻⁶ bar⁻¹, β = 235×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.5,
      T: 313.15,
      P1: 2,
      P2: 1600,
      V1_especifico: 1.003,
      kappa: 44e-6,
      beta: 235e-6,
      sustancia: "agua",
      nota: "Higher initial pressure 2 bar"
    }
  },

  // Variation 10: Water, very high final pressure
  2001010: {
    numero: 6,
    enunciado: `Se comprime 1.2 kg de agua líquida isotérmicamente a 298.15 K desde 1 bar hasta 3000 bar. Volumen inicial: 1203.6 cm³. Parámetros: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.2,
      T: 298.15,
      P1: 1,
      P2: 3000,
      V1_especifico: 1.003,
      kappa: 45e-6,
      beta: 250e-6,
      sustancia: "agua",
      nota: "Very high final pressure 3000 bar"
    }
  },

  // Variation 11: Ethanol at different temperature
  2001011: {
    numero: 6,
    enunciado: `Una cantidad de etanol de 600 g se comprime isotérmicamente a 313 K desde 1 bar hasta 1500 bar. Volumen inicial: 760.2 cm³. Para etanol a esta temperatura: κ = 72×10⁻⁶ bar⁻¹, β = 700×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.6,
      T: 313.15,
      P1: 1,
      P2: 1500,
      V1_especifico: 1.267,
      kappa: 72e-6,
      beta: 700e-6,
      sustancia: "etanol",
      nota: "Ethanol at 40°C"
    }
  },

  // Variation 12: Water with 10 bar initial pressure
  2001012: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 298.15 K se comprime reversiblemente desde 10 bar hasta 2000 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 298.15,
      P1: 10,
      P2: 2000,
      V1_especifico: 1.003,
      kappa: 45e-6,
      beta: 250e-6,
      sustancia: "agua",
      nota: "Higher initial pressure 10 bar"
    }
  },

  // Variation 13: Mercury at higher temperature
  2001013: {
    numero: 6,
    enunciado: `Se comprime 1.5 kg de mercurio líquido isotérmicamente a 323 K desde 1 bar hasta 1200 bar. Volumen inicial: 110.295 cm³. Para mercurio: κ = 3.9×10⁻⁶ bar⁻¹, β = 182×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.5,
      T: 323.15,
      P1: 1,
      P2: 1200,
      V1_especifico: 0.07353,
      kappa: 3.9e-6,
      beta: 182e-6,
      sustancia: "mercurio",
      nota: "Mercury at 50°C"
    }
  },

  // Variation 14: Water, small mass, moderate pressure
  2001014: {
    numero: 6,
    enunciado: `Una cantidad de 250 g de agua se comprime de forma isothérmica a 288 K desde 1 bar hasta 800 bar. Volumen inicial: 251 cm³. Parámetros: κ = 46×10⁻⁶ bar⁻¹, β = 270×10⁻⁶ K⁻¹, V₁ = 1.004 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.25,
      T: 288.15,
      P1: 1,
      P2: 800,
      V1_especifico: 1.004,
      kappa: 46e-6,
      beta: 270e-6,
      sustancia: "agua",
      nota: "Small mass, water at 15°C"
    }
  },

  // Variation 15: Acetone compression
  2001015: {
    numero: 6,
    enunciado: `Se comprime 400 g de acetona líquida isotérmicamente a 298 K desde 1 bar hasta 1700 bar. Volumen inicial: 506.3 cm³. Para acetona: κ = 85×10⁻⁶ bar⁻¹, β = 1150×10⁻⁶ K⁻¹, V₁ = 1.266 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.4,
      T: 298.15,
      P1: 1,
      P2: 1700,
      V1_especifico: 1.266,
      kappa: 85e-6,
      beta: 1150e-6,
      sustancia: "acetona",
      nota: "Acetone - higher compressibility"
    }
  },

  // Variation 16: Water at 308 K
  2001016: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 308 K se comprime reversiblemente desde 3 bar hasta 1900 bar. Coeficientes: κ = 44×10⁻⁶ bar⁻¹, β = 245×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 308.15,
      P1: 3,
      P2: 1900,
      V1_especifico: 1.003,
      kappa: 44e-6,
      beta: 245e-6,
      sustancia: "agua",
      nota: "Water at 35°C, higher P1"
    }
  },

  // Variation 17: Mineral oil compression
  2001017: {
    numero: 6,
    enunciado: `Se comprime 900 g de aceite mineral líquido isotérmicamente a 303 K desde 1 bar hasta 2200 bar. Volumen inicial: 1000.7 cm³. Parámetros: κ = 71×10⁻⁶ bar⁻¹, β = 761×10⁻⁶ K⁻¹, V₁ = 1.112 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.9,
      T: 303.15,
      P1: 1,
      P2: 2200,
      V1_especifico: 1.112,
      kappa: 71e-6,
      beta: 761e-6,
      sustancia: "aceite mineral",
      nota: "Mineral oil at 30°C"
    }
  },

  // Variation 18: Water at 318 K, very large mass
  2001018: {
    numero: 6,
    enunciado: `Una cantidad de 3 kg de agua se comprime de forma isothérmica a 318 K desde 1 bar hasta 1300 bar. Volumen inicial: 3009 cm³. Coeficientes: κ = 43×10⁻⁶ bar⁻¹, β = 220×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 3.0,
      T: 318.15,
      P1: 1,
      P2: 1300,
      V1_especifico: 1.003,
      kappa: 43e-6,
      beta: 220e-6,
      sustancia: "agua",
      nota: "Large mass 3 kg, water at 45°C"
    }
  },

  // Variation 19: Ethanol-water mixture approximation with water properties
  2001019: {
    numero: 6,
    enunciado: `Se comprime 550 g de agua a 293 K isotérmicamente desde 2 bar hasta 1100 bar. Volumen inicial: 552 cm³. Parámetros: κ = 47×10⁻⁶ bar⁻¹, β = 275×10⁻⁶ K⁻¹, V₁ = 1.004 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.55,
      T: 293.15,
      P1: 2,
      P2: 1100,
      V1_especifico: 1.004,
      kappa: 47e-6,
      beta: 275e-6,
      sustancia: "agua",
      nota: "Moderate initial pressure 2 bar"
    }
  },

  // Variation 20: Water at 278 K
  2001020: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 278 K se comprime reversiblemente desde 1 bar hasta 1600 bar. Coeficientes: κ = 48×10⁻⁶ bar⁻¹, β = 265×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 278.15,
      P1: 1,
      P2: 1600,
      V1_especifico: 1.003,
      kappa: 48e-6,
      beta: 265e-6,
      sustancia: "agua",
      nota: "Water at 5°C"
    }
  },

  // Variation 21: Mercury, large final pressure
  2001021: {
    numero: 6,
    enunciado: `Se comprime 1.8 kg de mercurio líquido isotérmicamente a 298.15 K desde 1 bar hasta 2500 bar. Volumen inicial: 132.35 cm³. Para mercurio: κ = 3.8×10⁻⁶ bar⁻¹, β = 181×10⁻⁶ K⁻¹, V₁ = 0.07353 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.8,
      T: 298.15,
      P1: 1,
      P2: 2500,
      V1_especifico: 0.07353,
      kappa: 3.8e-6,
      beta: 181e-6,
      sustancia: "mercurio",
      nota: "Mercury, very high final pressure"
    }
  },

  // Variation 22: Water, small volume
  2001022: {
    numero: 6,
    enunciado: `Una cantidad de 300 g de agua se comprime de forma isothérmica a 303 K desde 1 bar hasta 1350 bar. Volumen inicial: 301 cm³. Parámetros: κ = 44×10⁻⁶ bar⁻¹, β = 242×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.3,
      T: 303.15,
      P1: 1,
      P2: 1350,
      V1_especifico: 1.003,
      kappa: 44e-6,
      beta: 242e-6,
      sustancia: "agua",
      nota: "Small mass at 30°C"
    }
  },

  // Variation 23: Ethanol at lower temperature
  2001023: {
    numero: 6,
    enunciado: `Se comprime 700 g de etanol líquido isotérmicamente a 283 K desde 1 bar hasta 1900 bar. Volumen inicial: 887.1 cm³. Para etanol: κ = 78×10⁻⁶ bar⁻¹, β = 780×10⁻⁶ K⁻¹, V₁ = 1.267 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.7,
      T: 283.15,
      P1: 1,
      P2: 1900,
      V1_especifico: 1.267,
      kappa: 78e-6,
      beta: 780e-6,
      sustancia: "etanol",
      nota: "Ethanol at 10°C"
    }
  },

  // Variation 24: Water with intermediate pressures
  2001024: {
    numero: 6,
    enunciado: `Un volumen de agua de 1000 cm³ (1 kg) a 298.15 K se comprime reversiblemente desde 8 bar hasta 1750 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.0,
      T: 298.15,
      P1: 8,
      P2: 1750,
      V1_especifico: 1.003,
      kappa: 45e-6,
      beta: 250e-6,
      sustancia: "agua",
      nota: "Higher initial pressure 8 bar"
    }
  },

  // Variation 25: Benzene compression
  2001025: {
    numero: 6,
    enunciado: `Se comprime 450 g de benceno líquido isotérmicamente a 298 K desde 1 bar hasta 1600 bar. Volumen inicial: 574 cm³. Para benceno: κ = 91×10⁻⁶ bar⁻¹, β = 1235×10⁻⁶ K⁻¹, V₁ = 1.276 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.45,
      T: 298.15,
      P1: 1,
      P2: 1600,
      V1_especifico: 1.276,
      kappa: 91e-6,
      beta: 1235e-6,
      sustancia: "benceno",
      nota: "Benzene - higher compressibility"
    }
  },

  // Variation 26: Water at 338 K (65°C)
  2001026: {
    numero: 6,
    enunciado: `Una cantidad de 1.1 kg de agua se comprime de forma isothérmica a 338 K desde 1 bar hasta 900 bar. Volumen inicial: 1104.3 cm³. Coeficientes: κ = 42×10⁻⁶ bar⁻¹, β = 200×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Calcule: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 1.1,
      T: 338.15,
      P1: 1,
      P2: 900,
      V1_especifico: 1.003,
      kappa: 42e-6,
      beta: 200e-6,
      sustancia: "agua",
      nota: "Water at 65°C, high T"
    }
  },

  // Variation 27: Propanol compression
  2001027: {
    numero: 6,
    enunciado: `Se comprime 650 g de propanol líquido isotérmicamente a 298 K desde 1 bar hasta 1450 bar. Volumen inicial: 823.4 cm³. Para propanol: κ = 68×10⁻⁶ bar⁻¹, β = 850×10⁻⁶ K⁻¹, V₁ = 1.266 cm³/g. Determine: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 0.65,
      T: 298.15,
      P1: 1,
      P2: 1450,
      V1_especifico: 1.266,
      kappa: 68e-6,
      beta: 850e-6,
      sustancia: "propanol",
      nota: "n-Propanol at 25°C"
    }
  },

  // Variation 28: Water, very high masses and pressures
  2001028: {
    numero: 6,
    enunciado: `Un volumen de agua de 2000 cm³ (2 kg) a 298.15 K se comprime reversiblemente desde 5 bar hasta 2800 bar. Coeficientes: κ = 45×10⁻⁶ bar⁻¹, β = 250×10⁻⁶ K⁻¹, V₁ = 1.003 cm³/g. Encuentre: a) V₂ (cm³), b) W (kJ), c) ΔH (kJ), d) ΔU (kJ), e) Q (kJ), f) ΔS (kJ/K).`,
    datos: {
      m: 2.0,
      T: 298.15,
      P1: 5,
      P2: 2800,
      V1_especifico: 1.003,
      kappa: 45e-6,
      beta: 250e-6,
      sustancia: "agua",
      nota: "Large mass, high initial and final pressure"
    }
  }
};

/**
 * SOLVER FUNCTION FOR PROBLEM 6
 * Uses correct methodology: Eq. (3.5) and Eqs. (6.28) & (6.29)
 */
function solverProblema6(datos) {
  const { m, T, P1, P2, V1_especifico, kappa, beta, sustancia } = datos;

  // Step 1: Calculate initial and final volumes
  const V1_total = m * 1000 * V1_especifico; // cm³ to cm³ (m in kg, convert to g for V)
  const V1_g = m * 1000 * V1_especifico; // Total volume in cm³

  // Step 2: By Eq. (3.5), calculate V₂
  // V₂ = V₁ × exp[−κ(P₂ − P₁)]
  const deltaP_bar = P2 - P1;
  const exponent = -kappa * deltaP_bar;
  const V2_cm3 = V1_g * Math.exp(exponent);

  // Step 3: Calculate specific volume V₂ (cm³/g)
  const V2_especifico = V2_cm3 / (m * 1000);

  // Step 4: Calculate average specific volume
  const Vave_especifico = (V1_especifico + V2_especifico) / 2;

  // Step 5: By Eq. (6.28), calculate ΔH
  // ΔH = Vave·(1−β·T)·ΔP
  // Converting: V in cm³/g = 0.001 L/g, P in bar
  // ΔH [J/g] = Vave [cm³/g] × (1 - β·T) × ΔP [bar] × 0.1 [conversion factor]
  const ΔH_especifico = Vave_especifico * (1 - beta * T) * deltaP_bar * 0.1; // J/g
  const ΔH_total = ΔH_especifico * m * 1000; // Convert to kJ
  const ΔH_kJ = ΔH_total / 1000;

  // Step 6: By Eq. (6.29), calculate ΔU
  // ΔU = ΔH - (P₂V₂ - P₁V₁)
  // P in bar, V in cm³/g → need to convert properly
  // Work of compression: W = ∫PdV (work done ON system is positive)
  const PV1 = P1 * V1_especifico * 0.1; // bar·cm³/g → J/g (1 bar·cm³ = 0.1 J)
  const PV2 = P2 * V2_especifico * 0.1; // bar·cm³/g → J/g
  const delta_PV = PV2 - PV1; // J/g

  const ΔU_especifico = ΔH_especifico - delta_PV; // J/g
  const ΔU_total = ΔU_especifico * m * 1000; // J
  const ΔU_kJ = ΔU_total / 1000; // kJ

  // Step 7: Calculate work
  // For isothermal reversible process: W = -∫P dV (work done by system)
  // For incompressible: W ≈ -Vave·ΔP (average value)
  const W_especifico = -(Vave_especifico * deltaP_bar * 0.1); // J/g (work by system, negative)
  const W_total = W_especifico * m * 1000; // J
  const W_kJ = W_total / 1000; // kJ (negative = work done ON system)

  // Step 8: Calculate Q from First Law: ΔU = Q - W
  // Q = ΔU + W
  const Q_total = ΔU_total + W_total; // J
  const Q_kJ = Q_total / 1000; // kJ

  // Step 9: Calculate ΔS
  // For isothermal reversible process: dS = δQ_rev / T
  const ΔS_total = Q_total / T; // J/K
  const ΔS_kJ_K = ΔS_total / 1000; // kJ/K

  return {
    V2_cm3: V2_cm3.toFixed(2),
    W_kJ: W_kJ.toFixed(3),
    ΔH_kJ: ΔH_kJ.toFixed(3),
    ΔU_kJ: ΔU_kJ.toFixed(3),
    Q_kJ: Q_kJ.toFixed(3),
    ΔS_kJ_K: ΔS_kJ_K.toFixed(6),
    // Additional details for verification
    V1_cm3: V1_g.toFixed(2),
    Vave_especifico: Vave_especifico.toFixed(4),
    delta_P: deltaP_bar
  };
}

// Export all data and solver
if (typeof window !== "undefined") { window.problem6Versions = problem6Versions; }
if (typeof module !== "undefined" && module.exports) { module.exports = {
  problem6Versions,
  solverProblema6
};

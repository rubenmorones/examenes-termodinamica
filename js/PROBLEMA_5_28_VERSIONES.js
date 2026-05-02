// PROBLEMA 5: RELACIONES TERMODINÁMICAS ENTRE CAPACIDADES CALORÍFICAS (28 VERSIONES)
// Tema: Derivadas parciales de energía interna, identidades de Maxwell
// Métodología: Derivación rigurosa + aplicación a casos especiales

const problem5Versions = [
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Si se considera la energía interna U como función de T y P, derive la ecuación: (∂U/∂T)_P = Cp - P(∂V/∂T)_P. Luego, usando U como función de T y V, derive la segunda forma: (∂U/∂T)_P = Cv + [T(∂P/∂T)_V - P](∂V/∂T)_P. Igualando ambas expresiones, obtenga la ecuación de Mayer: Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P. Finalmente, exprese esta ecuación en términos de β = (1/V)(∂V/∂T)_P y κ = -(1/V)(∂V/∂P)_T, y evalúe para: a) gas ideal, b) líquido incompresible.",
        solucion: "Derivaciones completas en explicación. Gas ideal: (∂U/∂T)_P = Cv, Cp - Cv = nR. Líquido: (∂U/∂T)_P ≈ Cv ≈ Cp, Cp - Cv ≈ 0.",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: `SOLUCIÓN PASO A PASO:

═══════════════════════════════════════════════════════════════════════════════
PARTE 1: PRIMERA FORMA - (∂U/∂T)_P = Cp - P(∂V/∂T)_P
═══════════════════════════════════════════════════════════════════════════════

Punto de partida: Primera Ley de la Termodinámica
dU = δQ - PdV

A presión constante (dP = 0):
(∂U/∂T)_P = (∂Q/∂T)_P - P(∂V/∂T)_P

Por definición de Cp:
Cp = (∂Q/∂T)_P

RESULTADO:
═══════════════════════════════════════════════════════════════════════════════
(∂U/∂T)_P = Cp - P(∂V/∂T)_P                                               (1)
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
PARTE 2: SEGUNDA FORMA - Uso de U = U(T,V)
═══════════════════════════════════════════════════════════════════════════════

Considerar la energía interna como U(T,V):
dU = (∂U/∂T)_V dT + (∂U/∂V)_T dV

A presión constante, aplicar regla de la cadena:
(∂U/∂T)_P = (∂U/∂T)_V + (∂U/∂V)_T (∂V/∂T)_P

Sustituyendo Cv = (∂U/∂T)_V:
(∂U/∂T)_P = Cv + (∂U/∂V)_T (∂V/∂T)_P

Aplicar Relación de Maxwell: (∂U/∂V)_T = T(∂P/∂T)_V - P

RESULTADO:
═══════════════════════════════════════════════════════════════════════════════
(∂U/∂T)_P = Cv + [T(∂P/∂T)_V - P](∂V/∂T)_P                               (2)
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
PARTE 3: ECUACIÓN DE MAYER - Igualando (1) y (2)
═══════════════════════════════════════════════════════════════════════════════

Cp - P(∂V/∂T)_P = Cv + T(∂P/∂T)_V(∂V/∂T)_P - P(∂V/∂T)_P

Cancelar términos:
Cp = Cv + T(∂P/∂T)_V(∂V/∂T)_P

RESULTADO:
═══════════════════════════════════════════════════════════════════════════════
Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P                                             (3)
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
PARTE 4: EXPRESIÓN EN TÉRMINOS DE β Y κ
═══════════════════════════════════════════════════════════════════════════════

Definiciones:
β = (1/V)(∂V/∂T)_P  →  (∂V/∂T)_P = βV
κ = -(1/V)(∂V/∂P)_T  →  (∂V/∂P)_T = -κV

Relación recíproca (regla cíclica):
(∂P/∂T)_V = -(∂V/∂T)_P / (∂V/∂P)_T = -(βV) / (-κV) = β/(κT)

Sustituyendo en ecuación (3):
Cp - Cv = T · β/(κT) · βV = Tβ²V/κ

RESULTADO GENERALIZADO:
═══════════════════════════════════════════════════════════════════════════════
(∂U/∂T)_P = Cp - PβV
Cp - Cv = Tβ²V/κ
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
PARTE 5: APLICACIÓN A GAS IDEAL (PV = nRT)
═══════════════════════════════════════════════════════════════════════════════

PROPIEDADES DEL GAS IDEAL:
- β = 1/T
- κ = 1/P
- (∂P/∂T)_V = P/T
- (∂V/∂T)_P = V/T

VERIFICACIÓN CON ECUACIÓN (1):
(∂U/∂T)_P = Cp - P(V/T) = Cp - nR

Como Cp = Cv + nR para gas ideal:
(∂U/∂T)_P = (Cv + nR) - nR = Cv ✓

VERIFICACIÓN CON ECUACIÓN (2):
(∂U/∂T)_P = Cv + [T(P/T) - P](V/T)
          = Cv + [P - P](V/T)
          = Cv ✓

ECUACIÓN DE MAYER PARA GAS IDEAL:
Cp - Cv = T(P/T)(V/T) = nR ✓

RESULTADO PARA GAS IDEAL:
═══════════════════════════════════════════════════════════════════════════════
(∂U/∂T)_P = Cv = (f/2)R              [f = grados de libertad]
Cp - Cv = nR                          [Ecuación de Mayer clásica]

Ejemplo numérico - N₂ diatómico a 300 K:
(∂U/∂T)_P = (5/2)R ≈ 20.8 J/(mol·K)
Cp = (7/2)R ≈ 29.1 J/(mol·K)
Diferencia: 8.314 J/(mol·K) = R ✓
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
PARTE 6: APLICACIÓN A LÍQUIDO INCOMPRESIBLE
═══════════════════════════════════════════════════════════════════════════════

PROPIEDADES DEL LÍQUIDO INCOMPRESIBLE:
- (∂V/∂T)_P ≈ 0  (volumen casi constante)
- (∂V/∂P)_T ≈ 0  (incompresible)
- β ~ 10⁻⁴ K⁻¹   (muy pequeño pero no cero)
- κ ~ 10⁻¹⁰ Pa⁻¹ (compresibilidad negligible)
- Cp ≈ Cv         (diferencia negligible)

CON ECUACIÓN (1):
(∂U/∂T)_P = Cp - P(∂V/∂T)_P ≈ Cp - 0 ≈ Cp ✓

CON ECUACIÓN (2):
(∂U/∂T)_P = Cv + [T(∂P/∂T)_V - P] × (∂V/∂T)_P
          ≈ Cv + [algo grande] × 0 ≈ Cv ✓

ECUACIÓN DE MAYER PARA LÍQUIDO:
Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P ≈ [grande] × [cero] ≈ 0 ✓

Usando forma generalizada:
Cp - Cv = Tβ²V/κ

Para agua a 298 K: β = 2.57×10⁻⁴ K⁻¹, κ = 4.52×10⁻¹⁰ Pa⁻¹, V_m = 18 cm³/mol
Cp - Cv ≈ (298)(2.57×10⁻⁴)²(18×10⁻⁶)/(4.52×10⁻¹⁰) ≈ 0.2 J/(mol·K) << Cp ≈ 75 J/(mol·K)

RESULTADO PARA LÍQUIDO INCOMPRESIBLE:
═══════════════════════════════════════════════════════════════════════════════
(∂U/∂T)_P ≈ Cp ≈ Cv ≈ C                    [una sola capacidad calorífica]
Cp - Cv ≈ 0                                [diferencia negligible]

Ejemplo numérico - Agua líquida a 298 K:
Cp ≈ 75.3 J/(mol·K)
Cv ≈ 74.5 J/(mol·K)
(∂U/∂T)_P ≈ 75 J/(mol·K)
═══════════════════════════════════════════════════════════════════════════════

═══════════════════════════════════════════════════════════════════════════════
TABLA RESUMEN COMPARATIVO
═══════════════════════════════════════════════════════════════════════════════

PROPIEDAD                    GAS IDEAL           LÍQUIDO INCOMPRESIBLE
─────────────────────────────────────────────────────────────────────────
(∂U/∂T)_P                    = Cv                ≈ Cp ≈ Cv
(∂V/∂T)_P                    = V/T               ≈ 0
(∂P/∂T)_V                    = P/T               >> 0 (grande)
Cp - Cv                      = nR (~ 8.3)        ≈ 0 (negligible)
β = (1/V)(∂V/∂T)_P          = 1/T               ~ 10⁻⁴ K⁻¹
κ = -(1/V)(∂V/∂P)_T         = 1/P               ~ 10⁻¹⁰ Pa⁻¹
P·β·V (en unidades R)        ≈ 1 (comparable)    << 10⁻³ (negligible)
Significado físico           U = U(T) solo       U ≈ U(T,V) pero V constante
═════════════════════════════════════════════════════════════════════════════`,
        preguntasDiagnosticas: [
            {
                pregunta: "¿Cuál es el punto de partida para derivar (∂U/∂T)_P = Cp - P(∂V/∂T)_P?",
                respuestaEsperada: "La Primera Ley de la Termodinámica: dU = δQ - PdV",
                retroalimentacion: "Correctamente aplicada a presión constante"
            },
            {
                pregunta: "¿Qué relación de Maxwell se usa para derivar la segunda forma?",
                respuestaEsperada: "(∂U/∂V)_T = T(∂P/∂T)_V - P",
                retroalimentacion: "Relación fundamental que conecta derivadas de energía interna con propiedades medibles"
            },
            {
                pregunta: "Cuando igualas ambas expresiones de (∂U/∂T)_P, ¿qué obtienes?",
                respuestaEsperada: "La ecuación de Mayer: Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P",
                retroalimentacion: "Ecuación fundamental que relaciona las dos capacidades caloríficas"
            },
            {
                pregunta: "¿Cuál es la relación recíproca entre (∂P/∂T)_V y β, κ?",
                respuestaEsperada: "(∂P/∂T)_V = β/(κT)",
                retroalimentacion: "Se obtiene de la regla cíclica de derivadas parciales"
            },
            {
                pregunta: "Para un gas ideal, ¿a qué se reduce (∂U/∂T)_P?",
                respuestaEsperada: "(∂U/∂T)_P = Cv",
                retroalimentacion: "Porque la energía interna de un gas ideal solo depende de T, no de P"
            },
            {
                pregunta: "¿Cuál es la ecuación de Mayer clásica para gas ideal?",
                respuestaEsperada: "Cp - Cv = nR o Cp,m - Cv,m = R (por mol)",
                retroalimentacion: "Relación fundamental entre capacidades caloríficas molares de gas ideal"
            },
            {
                pregunta: "Para un líquido incompresible, ¿son (∂U/∂T)_P y Cp aproximadamente iguales?",
                respuestaEsperada: "Sí, (∂U/∂T)_P ≈ Cp ≈ Cv",
                retroalimentacion: "Porque (∂V/∂T)_P ≈ 0 en líquidos"
            },
            {
                pregunta: "¿Por qué Cp - Cv es negligible para líquidos pero comparable a nR para gases?",
                respuestaEsperada: "Porque el término Tβ²V/κ es muy pequeño en líquidos (κ muy pequeño) pero comparable a nR en gases",
                retroalimentacion: "La compresibilidad κ es la clave: gases son muy compresibles, líquidos casi incompresibles"
            }
        ]
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Derive la ecuación (∂U/∂T)_P = Cp - P(∂V/∂T)_P a partir de la Primera Ley de la Termodinámica. Explique por qué esta cantidad es la 'capacidad calorífica natural' cuando U = U(T,P). ¿A qué se reduce para propano gaseoso?",
        solucion: "Derivación a partir de dU = δQ - PdV. (∂U/∂T)_P = Cp,m - P(∂V/∂T)_P ≈ Cv para propano gaseoso",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Primera Ley a P constante. Para gas ideal (propano): (∂U/∂T)_P = Cv = (5/2)R ≈ 20.8 J/(mol·K)"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Derive la segunda forma (∂U/∂T)_P = Cv + [T(∂P/∂T)_V - P](∂V/∂T)_P usando U = U(T,V). Demuestre la aplicación de la relación de Maxwell (∂U/∂V)_T = T(∂P/∂T)_V - P en esta derivación.",
        solucion: "U(T,V) da dU = (∂U/∂T)_V dT + (∂U/∂V)_T dV. A P cte: (∂U/∂T)_P = Cv + (∂U/∂V)_T(∂V/∂T)_P. Maxwell: (∂U/∂V)_T = T(∂P/∂T)_V - P",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Regla de la cadena aplicada a U(T,V) con restricción de P constante. Maxwell conecta energía interna con propiedades medibles"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Igualando las dos expresiones para (∂U/∂T)_P, derive la ecuación de Mayer generalizada: Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P. Muestre todos los pasos algebraicos.",
        solucion: "Igualando: Cp - P(∂V/∂T)_P = Cv + T(∂P/∂T)_V(∂V/∂T)_P - P(∂V/∂T)_P. Cancelar términos P(∂V/∂T)_P.",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Resultado fundamental que relaciona capacidades caloríficas con derivadas de propiedades termodinámicas"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Exprese la ecuación de Mayer Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P en términos del coeficiente de expansión térmica β = (1/V)(∂V/∂T)_P y compresibilidad isotérmica κ = -(1/V)(∂V/∂P)_T. Derive la relación recíproca (∂P/∂T)_V = β/(κT).",
        solucion: "Cp - Cv = Tβ²V/κ. Relación recíproca: (∂P/∂T)_V = -(∂V/∂T)_P/(∂V/∂P)_T = βV/(-κV) = β/(κT)",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Expresión universal en términos de propiedades medibles β y κ que dependen solo de T, P, V"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Para un gas ideal, demuestre que (∂U/∂T)_P = Cv usando ambas formas de esta derivada. Calcule numéricamente para nitrógeno (N₂) diatómico a 300 K. Compare Cp - Cv con el valor teórico R.",
        solucion: "Gas ideal PV=nRT: (∂U/∂T)_P = Cv = (5/2)R ≈ 20.8 J/(mol·K). Cp = (7/2)R ≈ 29.1 J/(mol·K). Cp - Cv = R = 8.314 J/(mol·K)",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Verificación numérica. Ambas derivadas dan Cv. Confirmación de ecuación de Mayer clásica"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Para agua líquida a 298 K: β = 2.57×10⁻⁴ K⁻¹, κ = 4.52×10⁻¹⁰ Pa⁻¹, V_m = 18.07 cm³/mol, Cp,m ≈ 75.3 J/(mol·K). Usando Cp - Cv = Tβ²V/κ, calcule Cp - Cv. ¿Es significativo comparado con Cp?",
        solucion: "Cp - Cv = (298 K)(2.57×10⁻⁴)²(18.07×10⁻⁶)/(4.52×10⁻¹⁰) ≈ 0.20 J/(mol·K). Porcentaje: 0.20/75.3 ≈ 0.27% << 1%",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Diferencia negligible. Confirma que para líquidos (∂U/∂T)_P ≈ Cp ≈ Cv prácticamente igual"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Demuestre que para un gas ideal, los términos β/(κT) y (∂P/∂T)_V son equivalentes. ¿Por qué la forma β/(κT) es útil para expresar Cp - Cv en términos de propiedades universales?",
        solucion: "Gas ideal: β = 1/T, κ = 1/P, (∂P/∂T)_V = P/T. Entonces β/(κT) = (1/T)·P/(1/P)·(1/T) = P/T. Forma β/(κT) es universal para cualquier sustancia.",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "β y κ son propiedades medibles directamente, no requieren supuestos sobre ecuación de estado"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Para mercurio líquido a 298 K: β = 1.8×10⁻⁴ K⁻¹, Cp = 27.8 J/(mol·K), V_m = 14.81 cm³/mol, P = 101.325 kPa. Calcule el término P·β·V. ¿Es este término significativo en la ecuación (∂U/∂T)_P = Cp - P(∂V/∂T)_P?",
        solucion: "P·β·V = (101325)(1.8×10⁻⁴)(14.81×10⁻⁶) ≈ 0.27 J/(mol·K). Porcentaje: 0.27/27.8 ≈ 1% << Cp. Negligible.",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Para líquidos, (∂U/∂T)_P ≈ Cp - 0 ≈ Cp. El término de presión es insignificante"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Compara los valores de β para: a) aire (gas ideal) a 300 K, b) agua líquida a 298 K. Usa la ecuación Cp - Cv = Tβ²V/κ para explicar por qué sus diferencias Cp - Cv son tan distintas.",
        solucion: "Gas: β_gas = 1/300 ≈ 3.3×10⁻³ K⁻¹. Agua: β_liq ≈ 2.5×10⁻⁴ K⁻¹. β_gas/β_liq ≈ 13. También κ_gas >> κ_liq. Ambos factores explican diferencia.",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Gas es expansible; líquido casi incompresible. Efecto combinado de β y κ determina Cp - Cv"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Demuestre algebraicamente que partiendo de Cp - Cv = T(∂P/∂T)_V(∂V/∂T)_P se puede transformar en Cp - Cv = Tβ²V/κ usando la regla cíclica de derivadas parciales.",
        solucion: "(∂P/∂T)_V = β/(κT) por regla cíclica. Sustituyendo: Cp - Cv = T·[β/(κT)]·βV = Tβ²V/κ",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Transformación algebraica usando relaciones fundamentales de derivadas parciales"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Para etanol líquido a 293 K: β = 8.0×10⁻⁴ K⁻¹, κ = 7.28×10⁻¹⁰ Pa⁻¹, V_m = 58.4 cm³/mol, Cp = 111 J/(mol·K). Calcule (∂U/∂T)_P y compare con Cp. ¿Son aproximadamente iguales?",
        solucion: "(∂U/∂T)_P ≈ Cp - PβV ≈ 111 - (101325)(8.0×10⁻⁴)(58.4×10⁻⁶) ≈ 111 - 0.47 ≈ 110.5 J/(mol·K) ≈ Cp",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Diferencia < 0.5%. Confirma que para líquidos (∂U/∂T)_P ≈ Cp"
    },
    {
        id: 5,
        titulo: "Relaciones Termodinámicas entre Capacidades Caloríficas",
        enunciado: "Demuestre que en el límite de un líquido completamente incompresible (β → 0 y κ → 0, pero β²/κ → finito), la ecuación Cp - Cv = Tβ²V/κ se comporta como una indeterminación 0/0. ¿Cómo se resuelve esta indeterminación?",
        solucion: "Indeterminación 0/0. Se resuelve considerando que β y κ no pueden ambas ir a cero independientemente. Relación es: β/κ = finito, así Cp - Cv = T(β/κ)²V·κ → 0",
        tolerancia: 0.00,
        unidad: "Derivación",
        explicacion: "Análisis de límites. Para líquido real: Cp - Cv es pequeño pero no exactamente cero"
    }
];

// NOTA: Exportar para usar en problemas.js
if (typeof window !== "undefined") { window.problem5RelacionesVersions = problem5Versions; }
if (typeof module !== "undefined" && module.exports) { module.exports = { problem5Versions }; }

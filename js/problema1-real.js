// PROBLEMA 1 REAL: 28 versiones del problema del recipiente rígido aislado
// Tema: Análisis de Segunda Ley de la Termodinámica

const problema1RealVersions = [
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.0 bar y 250°C hasta 1.0 bar y 80°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1800 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 30°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.42',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-170.00) = -3533.45 J\nQ = ΔU + W = -3533.45 + 1800 = -1733.45 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.301 J/K\nΔS_alr = -Q/T_dep = 5.718 J/K\nΔS_univ = 3.417 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.8 bar y 240°C hasta 0.9 bar y 75°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1700 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 28°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.89',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-165.00) = -3429.53 J\nQ = ΔU + W = -3429.53 + 1700 = -1729.53 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -1.852 J/K\nΔS_alr = -Q/T_dep = 5.743 J/K\nΔS_univ = 3.891 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.2 bar y 260°C hasta 1.1 bar y 85°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1900 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 32°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.99',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-175.00) = -3637.38 J\nQ = ΔU + W = -3637.38 + 1900 = -1737.38 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.699 J/K\nΔS_alr = -Q/T_dep = 5.694 J/K\nΔS_univ = 2.994 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.5 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.5 bar y 230°C hasta 0.8 bar y 70°C respectivamente. Durante el proceso, el aire realiza un trabajo de 2200 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 25°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '6.86',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.5×20.785×(-160.00) = -4988.40 J\nQ = ΔU + W = -4988.40 + 2200 = -2788.40 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.495 J/K\nΔS_alr = -Q/T_dep = 9.352 J/K\nΔS_univ = 6.857 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.5 bar y 270°C hasta 1.2 bar y 90°C respectivamente. Durante el proceso, el aire realiza un trabajo de 2000 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 35°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.84',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-180.00) = -3741.30 J\nQ = ΔU + W = -3741.30 + 2000 = -1741.30 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.815 J/K\nΔS_alr = -Q/T_dep = 5.651 J/K\nΔS_univ = 2.836 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.2 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.9 bar y 245°C hasta 1.0 bar y 78°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1850 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 29°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '4.70',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.2×20.785×(-167.00) = -4165.31 J\nQ = ΔU + W = -4165.31 + 1850 = -2315.31 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.963 J/K\nΔS_alr = -Q/T_dep = 7.663 J/K\nΔS_univ = 4.700 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.1 bar y 255°C hasta 1.05 bar y 82°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1950 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 31°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.86',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-173.00) = -3595.80 J\nQ = ΔU + W = -3595.80 + 1950 = -1645.80 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.547 J/K\nΔS_alr = -Q/T_dep = 5.411 J/K\nΔS_univ = 2.864 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 0.8 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.6 bar y 235°C hasta 0.85 bar y 72°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1500 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 26°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.48',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 0.8×20.785×(-163.00) = -2710.36 J\nQ = ΔU + W = -2710.36 + 1500 = -1210.36 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -1.568 J/K\nΔS_alr = -Q/T_dep = 4.046 J/K\nΔS_univ = 2.478 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.3 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.4 bar y 265°C hasta 1.15 bar y 88°C respectivamente. Durante el proceso, el aire realiza un trabajo de 2100 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 34°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '5.36',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.3×20.785×(-177.00) = -4782.63 J\nQ = ΔU + W = -4782.63 + 2100 = -2682.63 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -3.372 J/K\nΔS_alr = -Q/T_dep = 8.734 J/K\nΔS_univ = 5.362 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.0 bar y 250°C hasta 1.0 bar y 80°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1750 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 30°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.58',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-170.00) = -3533.45 J\nQ = ΔU + W = -3533.45 + 1750 = -1783.45 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.301 J/K\nΔS_alr = -Q/T_dep = 5.883 J/K\nΔS_univ = 3.582 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.1 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.95 bar y 248°C hasta 0.95 bar y 79°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1820 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 29°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '4.58',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.1×20.785×(-169.00) = -3863.93 J\nQ = ΔU + W = -3863.93 + 1820 = -2043.93 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.184 J/K\nΔS_alr = -Q/T_dep = 6.765 J/K\nΔS_univ = 4.580 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.05 bar y 252°C hasta 1.02 bar y 81°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1780 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 30°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.50',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-171.00) = -3554.24 J\nQ = ΔU + W = -3554.24 + 1780 = -1774.24 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.357 J/K\nΔS_alr = -Q/T_dep = 5.853 J/K\nΔS_univ = 3.495 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 0.9 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.75 bar y 242°C hasta 0.88 bar y 76°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1620 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 27°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.29',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 0.9×20.785×(-166.00) = -3105.28 J\nQ = ΔU + W = -3105.28 + 1620 = -1485.28 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -1.660 J/K\nΔS_alr = -Q/T_dep = 4.948 J/K\nΔS_univ = 3.288 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.4 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.3 bar y 268°C hasta 1.08 bar y 87°C respectivamente. Durante el proceso, el aire realiza un trabajo de 2050 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 33°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '6.92',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.4×20.785×(-181.00) = -5266.92 J\nQ = ΔU + W = -5266.92 + 2050 = -3216.92 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -3.587 J/K\nΔS_alr = -Q/T_dep = 10.508 J/K\nΔS_univ = 6.921 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.85 bar y 246°C hasta 0.92 bar y 77°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1700 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 28°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.96',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-169.00) = -3512.66 J\nQ = ΔU + W = -3512.66 + 1700 = -1812.66 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.059 J/K\nΔS_alr = -Q/T_dep = 6.019 J/K\nΔS_univ = 3.960 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.15 bar y 254°C hasta 1.08 bar y 83°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1880 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 31°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.99',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-171.00) = -3554.24 J\nQ = ΔU + W = -3554.24 + 1880 = -1674.24 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.511 J/K\nΔS_alr = -Q/T_dep = 5.505 J/K\nΔS_univ = 2.994 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.2 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.65 bar y 238°C hasta 0.82 bar y 73°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1680 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 26°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '6.23',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.2×20.785×(-165.00) = -4115.43 J\nQ = ΔU + W = -4115.43 + 1680 = -2435.43 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -1.908 J/K\nΔS_alr = -Q/T_dep = 8.141 J/K\nΔS_univ = 6.233 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.25 bar y 262°C hasta 1.12 bar y 86°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1980 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 33°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.73',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-176.00) = -3658.16 J\nQ = ΔU + W = -3658.16 + 1980 = -1678.16 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.748 J/K\nΔS_alr = -Q/T_dep = 5.481 J/K\nΔS_univ = 2.734 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.0 bar y 250°C hasta 1.0 bar y 80°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1850 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 31°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.23',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-170.00) = -3533.45 J\nQ = ΔU + W = -3533.45 + 1850 = -1683.45 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.301 J/K\nΔS_alr = -Q/T_dep = 5.535 J/K\nΔS_univ = 3.234 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.1 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.7 bar y 244°C hasta 0.87 bar y 74°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1750 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 27°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '4.72',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.1×20.785×(-170.00) = -3886.80 J\nQ = ΔU + W = -3886.80 + 1750 = -2136.80 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.401 J/K\nΔS_alr = -Q/T_dep = 7.119 J/K\nΔS_univ = 4.718 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.18 bar y 258°C hasta 1.06 bar y 84°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1920 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 32°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.14',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-174.00) = -3616.59 J\nQ = ΔU + W = -3616.59 + 1920 = -1696.59 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.415 J/K\nΔS_alr = -Q/T_dep = 5.560 J/K\nΔS_univ = 3.145 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.3 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.55 bar y 232°C hasta 0.83 bar y 71°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1900 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 25°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '5.83',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.3×20.785×(-161.00) = -4350.30 J\nQ = ΔU + W = -4350.30 + 1900 = -2450.30 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.386 J/K\nΔS_alr = -Q/T_dep = 8.218 J/K\nΔS_univ = 5.832 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.0 bar y 250°C hasta 1.0 bar y 80°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1820 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 30°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.35',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-170.00) = -3533.45 J\nQ = ΔU + W = -3533.45 + 1820 = -1713.45 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.301 J/K\nΔS_alr = -Q/T_dep = 5.652 J/K\nΔS_univ = 3.351 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.92 bar y 247°C hasta 0.94 bar y 78°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1730 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 28°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.91',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-169.00) = -3512.66 J\nQ = ΔU + W = -3512.66 + 1730 = -1782.66 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.010 J/K\nΔS_alr = -Q/T_dep = 5.920 J/K\nΔS_univ = 3.910 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.2 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.12 bar y 256°C hasta 1.04 bar y 81°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1900 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 30°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '5.07',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.2×20.785×(-175.00) = -4364.85 J\nQ = ΔU + W = -4364.85 + 1900 = -2464.85 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -3.061 J/K\nΔS_alr = -Q/T_dep = 8.131 J/K\nΔS_univ = 5.070 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.4 bar y 264°C hasta 1.18 bar y 89°C respectivamente. Durante el proceso, el aire realiza un trabajo de 2030 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 34°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '2.56',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-175.00) = -3637.38 J\nQ = ΔU + W = -3637.38 + 2030 = -1607.38 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.673 J/K\nΔS_alr = -Q/T_dep = 5.233 J/K\nΔS_univ = 2.560 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 2.6 bar y 240°C hasta 0.85 bar y 73°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1620 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 26°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '4.03',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-167.00) = -3471.09 J\nQ = ΔU + W = -3471.09 + 1620 = -1851.09 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.161 J/K\nΔS_alr = -Q/T_dep = 6.188 J/K\nΔS_univ = 4.027 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
  {
    titulo: 'Segunda Ley - Recipiente Rígido Aislado',
    enunciado: 'Se realiza un experimento en un recipiente rígido aislado que contiene 1.0 mol de aire. El sistema se somete a un proceso sin flujo durante el cual la presión y temperatura del aire disminuyen desde 3.08 bar y 252°C hasta 1.04 bar y 82°C respectivamente. Durante el proceso, el aire realiza un trabajo de 1810 J contra el entorno. Simultáneamente, una cantidad de calor (por determinarse) es transferida hacia un depósito térmico externo que se mantiene a una temperatura constante de 31°C. Analizar si este cambio de estado acompañado de la producción de trabajo reportada puede ocurrir de manera consistente con la segunda ley. Calcula el cambio de entropía del universo (ΔS_universo) en J/K. Considera al aire como gas ideal diatómico (Cv = 5/2 R).',
    solucion: '3.31',
    tolerancia: 0.1,
    unidad: 'J/K',
    explicacion: 'ΔU = nCv(T2-T1) = 1.0×20.785×(-170.00) = -3533.45 J\nQ = ΔU + W = -3533.45 + 1810 = -1723.45 J\nΔS_sis = nCv·ln(T2/T1) + nR·ln(V2/V1) = -2.355 J/K\nΔS_alr = -Q/T_dep = 5.666 J/K\nΔS_univ = 3.311 J/K\nPOSIBLE (ΔS_univ ≥ 0)'
  },
];

if (typeof window !== "undefined") {
  window.problema1RealVersions = problema1RealVersions;
}

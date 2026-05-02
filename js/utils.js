/**
 * FUNCIONES UTILITARIAS COMPARTIDAS
 */

// Validar si una respuesta numérica es correcta
function validarRespuesta(respuestaEstudiante, respuestaCorrecta, tolerancia = 0.07) {
    if (!respuestaEstudiante) return false;

    const estudiante = parseFloat(respuestaEstudiante);
    const correcta = parseFloat(respuestaCorrecta);

    if (isNaN(estudiante) || isNaN(correcta)) return false;

    const diferencia = Math.abs(estudiante - correcta);
    const toleranciaCalculada = correcta * tolerancia;

    return diferencia <= toleranciaCalculada;
}

// Formatear número a 2 decimales
function formatoNumero(numero) {
    if (!numero) return '0.00';
    return parseFloat(numero).toFixed(2);
}

// Formatear fecha y hora
function formatoFecha(fecha) {
    const opciones = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    };
    return new Date(fecha).toLocaleDateString('es-MX', opciones);
}

// Guardar en localStorage
function guardarLocal(clave, valor) {
    try {
        localStorage.setItem(clave, JSON.stringify(valor));
    } catch (err) {
        console.error('Error guardando en localStorage:', err);
    }
}

// Obtener de localStorage
function obtenerLocal(clave) {
    try {
        const item = localStorage.getItem(clave);
        return item ? JSON.parse(item) : null;
    } catch (err) {
        console.error('Error obteniendo de localStorage:', err);
        return null;
    }
}

// Limpiar localStorage
function limpiarLocal(clave) {
    try {
        localStorage.removeItem(clave);
    } catch (err) {
        console.error('Error limpiando localStorage:', err);
    }
}

// Generar ID único
function generarID() {
    return Math.random().toString(36).substr(2, 9);
}

// Convertir texto a minúsculas y sin espacios
function normalizarTexto(texto) {
    return texto.toLowerCase().trim();
}

// Validar formato de matrícula
function validarMatricula(matricula) {
    return /^\d{7}$/.test(matricula);
}

// Convertir matrícula a formato 2001001
function formatoMatricula(matricula) {
    const num = matricula.replace(/\D/g, '');
    if (num.length === 7) {
        return '200' + num;
    }
    return '200' + num.padStart(4, '0');
}

// Esperar N milisegundos
function esperar(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Reproducir sonido (notificación)
function reproducirSonido(tipo = 'exito') {
    // Crear sonidos simples usando Web Audio API
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();

    oscillator.connect(gain);
    gain.connect(audioContext.destination);

    if (tipo === 'exito') {
        oscillator.frequency.value = 800;
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    } else if (tipo === 'error') {
        oscillator.frequency.value = 400;
        gain.gain.setValueAtTime(0.3, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.2);
    }
}

// Mostrar notificación toast
function mostrarNotificacion(mensaje, tipo = 'info', duracion = 3000) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${tipo}`;
    toast.textContent = mensaje;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        padding: 1rem;
        background-color: ${tipo === 'exito' ? '#27ae60' : tipo === 'error' ? '#e74c3c' : '#3498db'};
        color: white;
        border-radius: 8px;
        z-index: 10000;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        animation: slideIn 0.3s ease-out;
    `;

    document.body.appendChild(toast);

    setTimeout(() => {
        toast.remove();
    }, duracion);
}

// Descargar archivo
function descargarArchivo(contenido, nombre, tipo = 'text/plain') {
    const blob = new Blob([contenido], { type: tipo });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = nombre;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
}

// Convertir array a CSV
function arrayACSV(datos, columnas) {
    let csv = columnas.join(',') + '\n';

    datos.forEach(fila => {
        const valores = columnas.map(col => {
            let valor = fila[col];
            // Escapar comillas y envolver entre comillas si contiene coma
            if (typeof valor === 'string' && (valor.includes(',') || valor.includes('"'))) {
                valor = '"' + valor.replace(/"/g, '""') + '"';
            }
            return valor || '';
        });
        csv += valores.join(',') + '\n';
    });

    return csv;
}

// Calcular puntuación con diagnósticas
function calcularPuntuacionProblema(respuestaNumericaCorrecta, preguntasDiagnosticasCorrectas, totalPreguntas = 3) {
    if (respuestaNumericaCorrecta) {
        return 100; // Respuesta correcta = 100%
    }

    // Escala de puntos parciales
    if (preguntasDiagnosticasCorrectas === 3) {
        return 60; // 3 de 3 diagnósticas correctas = 60%
    } else if (preguntasDiagnosticasCorrectas === 2) {
        return 25; // 2 de 3 diagnósticas correctas = 25%
    } else if (preguntasDiagnosticasCorrectas === 1) {
        return 10; // 1 de 3 diagnósticas correctas = 10%
    }

    return 0; // Ninguna correcta = 0%
}

// Obtener puntuación en puntos (no porcentaje)
function obtenerPuntosProblem(puntosTotales, porcentaje) {
    return (puntosTotales * porcentaje) / 100;
}

// Formatear tiempo en horas:minutos:segundos
function formatoTiempo(ms) {
    const segundos = Math.floor(ms / 1000);
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const secs = segundos % 60;

    return `${String(horas).padStart(2, '0')}:${String(minutos).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// Detectar si el navegador está offline
function estaOnline() {
    return navigator.onLine;
}

// Registrar evento en consola con timestamp
function registrarEvento(tipo, mensaje, datos = null) {
    const timestamp = new Date().toLocaleTimeString();
    const estilos = {
        'INFO': 'color: #3498db; font-weight: bold;',
        'ERROR': 'color: #e74c3c; font-weight: bold;',
        'EXITO': 'color: #27ae60; font-weight: bold;',
        'WARNING': 'color: #f39c12; font-weight: bold;'
    };

    console.log(
        `%c[${timestamp}] ${tipo}`,
        estilos[tipo] || 'color: gray;',
        mensaje,
        datos || ''
    );
}

// Validar que no haya campos vacíos
function validarCampos(campos) {
    const invalidos = [];

    campos.forEach(campo => {
        const elemento = document.getElementById(campo.id);
        if (!elemento || !elemento.value.trim()) {
            invalidos.push(campo.nombre);
        }
    });

    return {
        valido: invalidos.length === 0,
        invalidos: invalidos
    };
}

// Mostrar spinner de carga
function mostrarCarga(mostrar = true) {
    const spinner = document.getElementById('spinner') || crearSpinner();

    if (mostrar) {
        spinner.style.display = 'flex';
    } else {
        spinner.style.display = 'none';
    }
}

function crearSpinner() {
    const spinner = document.createElement('div');
    spinner.id = 'spinner';
    spinner.style.cssText = `
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        justify-content: center;
        align-items: center;
        z-index: 9999;
    `;
    spinner.innerHTML = `
        <div style="
            width: 50px;
            height: 50px;
            border: 5px solid rgba(255, 255, 255, 0.3);
            border-top-color: white;
            border-radius: 50%;
            animation: spin 1s linear infinite;
        "></div>
        <style>
            @keyframes spin {
                to { transform: rotate(360deg); }
            }
        </style>
    `;
    document.body.appendChild(spinner);
    return spinner;
}

// Copiar al portapapeles
async function copiarAlPortapapeles(texto) {
    try {
        await navigator.clipboard.writeText(texto);
        mostrarNotificacion('✓ Copiado al portapapeles', 'exito');
        return true;
    } catch (err) {
        mostrarNotificacion('Error al copiar', 'error');
        return false;
    }
}

export const metricsData = {
    icp: {
        id: 'icp',
        title: 'Índice de Cumplimiento (ICP)',
        standard: 'ISO 29110 - Procesos',
        formula: 'ICP = (Actividades Realizadas / Actividades Planificadas) * 100',
        description: 'Mide la disciplina del proceso seguido en proyectos de software',
        icon: 'fas fa-calculator',
        iconColor: '#3b82f6',
        status: 'OPTIMIZADO',
        statusClass: 'status-optimized',
        unit: '%',
        inputs: [
            { id: 'actividadesPlanificadas', label: 'Actividades Planificadas', defaultValue: 15, min: 1 },
            { id: 'actividadesRealizadas', label: 'Actividades Realizadas', defaultValue: 13, min: 0 }
        ],
        calculate: (inputs) => {
            const res = (inputs.actividadesRealizadas / inputs.actividadesPlanificadas) * 100;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `Índice de Cumplimiento del ${value}%. Valores sobre 80% indican buena disciplina de proceso.`
    },
    nc: {
        id: 'nc',
        title: 'Índice de No Conformidades (NC)',
        standard: 'ISO 9001 - Gestión de Calidad',
        formula: 'NC = (No Conformidades / Procesos Auditados) * 100',
        description: 'Mide la salud del sistema de gestión de calidad',
        icon: 'fas fa-exclamation-triangle',
        iconColor: '#f59e0b',
        status: 'MEJORABLE',
        statusClass: 'status-mejorable',
        unit: '%',
        inputs: [
            { id: 'procesosAuditados', label: 'Procesos Auditados', defaultValue: 4, min: 1 },
            { id: 'noConformidades', label: 'No Conformidades Encontradas', defaultValue: 1, min: 0 }
        ],
        calculate: (inputs) => {
            const res = (inputs.noConformidades / inputs.procesosAuditados) * 100;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `Índice de No Conformidades del ${value}%. Valores menores al 15% son ideales.`
    },
    mtbf: {
        id: 'mtbf',
        title: 'MTBF - Tiempo Medio Entre Fallos',
        standard: 'ISO 25010 - Fiabilidad',
        formula: 'MTBF = Tiempo Total de Operación / Número de Fallos',
        description: 'Tiempo promedio que el sistema funciona sin fallos críticos',
        icon: 'fas fa-clock',
        iconColor: '#ef4444',
        status: 'CRÍTICO',
        statusClass: 'status-critico',
        unit: ' horas',
        inputs: [
            { id: 'tiempoTotalHoras', label: 'Tiempo Total de Operación (horas)', defaultValue: 168, min: 1 },
            { id: 'numeroFallos', label: 'Número de Fallos Críticos', defaultValue: 8, min: 1 }
        ],
        calculate: (inputs) => {
            const res = inputs.tiempoTotalHoras / inputs.numeroFallos;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `El sistema falla cada ${value} horas. Un MTBF menor a 24 horas es considerado crítico.`
    },
    tpr: {
        id: 'tpr',
        title: 'TPR - Tiempo Promedio de Respuesta',
        standard: 'ISO 25010 - Rendimiento',
        formula: 'TPR = Σ Tiempos / # Solicitudes',
        description: 'Métrica clave de experiencia de usuario',
        icon: 'fas fa-tachometer-alt',
        iconColor: '#10b981',
        status: 'EXCELENTE',
        statusClass: 'status-excelente',
        unit: ' ms',
        inputs: [
            { id: 'tiempoTotalMs', label: 'Tiempo Total Acumulado (ms)', defaultValue: 5400, min: 1 },
            { id: 'solicitudes', label: 'Número de Solicitudes', defaultValue: 300, min: 1 }
        ],
        calculate: (inputs) => {
            const res = inputs.tiempoTotalMs / inputs.solicitudes;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `Un TPR de ${value}ms es excelente. El umbral de alerta es 200ms.`
    },
    ivc: {
        id: 'ivc',
        title: 'IVC - Índice de Vulnerabilidades Críticas',
        standard: 'CISQ - Seguridad',
        formula: 'IVC = (Vulnerabilidades Críticas / Totales) * 100',
        description: 'Mide la exposición a riesgos de seguridad',
        icon: 'fas fa-shield-alt',
        iconColor: '#f97316',
        status: 'ALERTA',
        statusClass: 'status-alerta',
        unit: '%',
        inputs: [
            { id: 'vulnerabilidadesTotales', label: 'Vulnerabilidades Totales', defaultValue: 14, min: 1 },
            { id: 'vulnerabilidadesCriticas', label: 'Vulnerabilidades Críticas', defaultValue: 2, min: 0 }
        ],
        calculate: (inputs) => {
            const res = (inputs.vulnerabilidadesCriticas / inputs.vulnerabilidadesTotales) * 100;
            return isFinite(res) ? res.toFixed(2) : "0.00";
        },
        interpretation: (value) => `Índice de Vulnerabilidades Críticas del ${value}%. Más del 10% requiere revisión urgente.`
    },
    cc: {
        id: 'cc',
        title: 'CC - Complejidad Ciclomática',
        standard: 'CISQ - Mantenibilidad',
        formula: 'CC = E - N + 2P',
        description: 'Mide la complejidad lógica del código',
        icon: 'fas fa-code',
        iconColor: '#10b981',
        status: 'LIMPIO',
        statusClass: 'status-limpio',
        unit: '',
        inputs: [
            { id: 'aristas', label: 'Número de Aristas (E)', defaultValue: 25, min: 1 },
            { id: 'nodos', label: 'Número de Nodos (N)', defaultValue: 20, min: 1 },
            { id: 'componentes', label: 'Componentes Conectados (P)', defaultValue: 1, min: 1 }
        ],
        calculate: (inputs) => {
            return (inputs.aristas - inputs.nodos + (2 * inputs.componentes)).toFixed(0);
        },
        interpretation: (value) => `Complejidad Ciclomática de ${value}. Valores entre 1-10 indican código limpio.`
    },
    ts: {
        id: 'ts',
        title: 'Tasa de Éxito - Usabilidad',
        standard: 'ISO 9241 - Calidad en Uso',
        formula: 'TS = (Tareas Correctas / Totales) * 100',
        description: 'Mide la efectividad de la interfaz de usuario',
        icon: 'fas fa-users',
        iconColor: '#8b5cf6',
        status: 'BUENO',
        statusClass: 'status-bueno',
        unit: '%',
        inputs: [
            { id: 'tareasTotales', label: 'Total de Tareas', defaultValue: 40, min: 1 },
            { id: 'tareasCorrectas', label: 'Tareas Completadas Correctamente', defaultValue: 35, min: 0 }
        ],
        calculate: (inputs) => {
            const res = (inputs.tareasCorrectas / inputs.tareasTotales) * 100;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `Tasa de éxito del ${value}% en usabilidad. Valores sobre 85% son buenos.`
    },
    portabilidad: {
        id: 'portabilidad',
        title: 'Índice de Portabilidad',
        standard: 'ISO 25010 - Portabilidad',
        formula: 'IP = (Soportadas / Objetivo) * 100',
        description: 'Mide la compatibilidad multiplataforma',
        icon: 'fas fa-laptop-code',
        iconColor: '#6366f1',
        status: 'MODERADO',
        statusClass: 'status-moderado',
        unit: '%',
        inputs: [
            { id: 'plataformasObjetivo', label: 'Plataformas Objetivo', defaultValue: 4, min: 1 },
            { id: 'plataformasSoportadas', label: 'Plataformas Soportadas', defaultValue: 3, min: 0 }
        ],
        calculate: (inputs) => {
            const res = (inputs.plataformasSoportadas / inputs.plataformasObjetivo) * 100;
            return isFinite(res) ? res.toFixed(1) : "0.0";
        },
        interpretation: (value) => `Índice de portabilidad del ${value}%. Se espera 100% de compatibilidad.`
    }
};
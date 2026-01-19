// ISO 25022 - Medición de Calidad en Uso
// Este estándar mide la calidad desde la perspectiva del usuario en contextos de uso reales

export const iso25022Data = {
    efectividad: {
        id: 'efectividad',
        title: 'Efectividad',
        description: 'Precisión y completitud con la que los usuarios logran objetivos específicos',
        icon: 'fas fa-bullseye',
        color: '#3b82f6',
        subcharacteristics: [
            {
                id: 'completitudTarea',
                name: 'Completitud de Tarea',
                description: 'Grado en que los usuarios completan las tareas correctamente',
                questions: [
                    { id: 'q1', text: '¿Los usuarios pueden completar todas las tareas requeridas?', weight: 3 },
                    { id: 'q2', text: '¿Se logran todos los objetivos funcionales esperados?', weight: 3 },
                    { id: 'q3', text: '¿Los resultados obtenidos coinciden con las expectativas?', weight: 2 }
                ]
            },
            {
                id: 'precision',
                name: 'Precisión',
                description: 'Exactitud de los resultados obtenidos por los usuarios',
                questions: [
                    { id: 'q4', text: '¿Los usuarios obtienen resultados precisos?', weight: 3 },
                    { id: 'q5', text: '¿La información proporcionada es exacta?', weight: 3 },
                    { id: 'q6', text: '¿Se minimizan los errores en los resultados?', weight: 2 }
                ]
            }
        ]
    },

    eficiencia: {
        id: 'eficiencia',
        title: 'Eficiencia',
        description: 'Recursos gastados en relación con la precisión y completitud con que los usuarios alcanzan objetivos',
        icon: 'fas fa-rocket',
        color: '#10b981',
        subcharacteristics: [
            {
                id: 'eficienciaTemporal',
                name: 'Eficiencia Temporal',
                description: 'Tiempo que los usuarios necesitan para completar tareas',
                questions: [
                    { id: 'q7', text: '¿Los usuarios completan las tareas en tiempo razonable?', weight: 3 },
                    { id: 'q8', text: '¿El sistema permite trabajar de manera ágil?', weight: 3 },
                    { id: 'q9', text: '¿Se minimiza el tiempo de espera?', weight: 2 },
                    { id: 'q10', text: '¿Las tareas fluyen sin demoras innecesarias?', weight: 2 }
                ]
            },
            {
                id: 'eficienciaEconomica',
                name: 'Eficiencia Económica',
                description: 'Recursos económicos gastados en relación con los objetivos alcanzados',
                questions: [
                    { id: 'q11', text: '¿El costo de uso es razonable para los beneficios obtenidos?', weight: 2 },
                    { id: 'q12', text: '¿Se optimiza el uso de recursos computacionales?', weight: 2 },
                    { id: 'q13', text: '¿El sistema reduce costos operativos?', weight: 2 }
                ]
            },
            {
                id: 'productividad',
                name: 'Productividad',
                description: 'Efectividad en relación con los recursos empleados',
                questions: [
                    { id: 'q14', text: '¿Los usuarios son más productivos con el sistema?', weight: 3 },
                    { id: 'q15', text: '¿Se pueden realizar más tareas en menos tiempo?', weight: 3 },
                    { id: 'q16', text: '¿El sistema facilita el trabajo eficiente?', weight: 2 }
                ]
            }
        ]
    },

    satisfaccion: {
        id: 'satisfaccion',
        title: 'Satisfacción',
        description: 'Grado en que se satisfacen las necesidades del usuario cuando un producto se utiliza en un contexto de uso especificado',
        icon: 'fas fa-smile',
        color: '#f59e0b',
        subcharacteristics: [
            {
                id: 'utilidad',
                name: 'Utilidad',
                description: 'Grado en que el usuario está satisfecho con su logro de objetivos prácticos',
                questions: [
                    { id: 'q17', text: '¿El sistema es útil para las tareas del usuario?', weight: 3 },
                    { id: 'q18', text: '¿Los usuarios consideran el sistema valioso?', weight: 2 },
                    { id: 'q19', text: '¿El sistema resuelve problemas reales?', weight: 3 }
                ]
            },
            {
                id: 'confianza',
                name: 'Confianza',
                description: 'Grado en que el usuario confía que el producto se comportará como se pretende',
                questions: [
                    { id: 'q20', text: '¿Los usuarios confían en el sistema?', weight: 3 },
                    { id: 'q21', text: '¿El sistema se comporta de manera predecible?', weight: 2 },
                    { id: 'q22', text: '¿Los usuarios sienten seguridad al usarlo?', weight: 3 },
                    { id: 'q23', text: '¿La información es confiable?', weight: 2 }
                ]
            },
            {
                id: 'placer',
                name: 'Placer',
                description: 'Grado en que el usuario obtiene placer al cumplir sus necesidades personales',
                questions: [
                    { id: 'q24', text: '¿El uso del sistema es agradable?', weight: 2 },
                    { id: 'q25', text: '¿La interfaz es estéticamente atractiva?', weight: 1 },
                    { id: 'q26', text: '¿La experiencia de usuario es positiva?', weight: 2 }
                ]
            },
            {
                id: 'comodidad',
                name: 'Comodidad',
                description: 'Grado en que el usuario está satisfecho con la comodidad física',
                questions: [
                    { id: 'q27', text: '¿El sistema es cómodo de usar?', weight: 2 },
                    { id: 'q28', text: '¿No causa fatiga durante uso prolongado?', weight: 2 },
                    { id: 'q29', text: '¿La interfaz es ergonómica?', weight: 2 }
                ]
            }
        ]
    },

    ausenciaRiesgo: {
        id: 'ausenciaRiesgo',
        title: 'Ausencia de Riesgo',
        description: 'Grado en que el producto mitiga el riesgo potencial al estado económico, la vida y salud humana, o el medio ambiente',
        icon: 'fas fa-shield-alt',
        color: '#ef4444',
        subcharacteristics: [
            {
                id: 'mitigacionRiesgoEconomico',
                name: 'Mitigación de Riesgo Económico',
                description: 'Grado en que el producto mitiga el riesgo económico',
                questions: [
                    { id: 'q30', text: '¿El sistema protege contra pérdidas financieras?', weight: 3 },
                    { id: 'q31', text: '¿Existen salvaguardas contra operaciones costosas?', weight: 2 },
                    { id: 'q32', text: '¿Se previenen errores que causen daños económicos?', weight: 3 },
                    { id: 'q33', text: '¿Hay confirmación para transacciones importantes?', weight: 2 }
                ]
            },
            {
                id: 'mitigacionRiesgoSalud',
                name: 'Mitigación de Riesgo a la Salud y Seguridad',
                description: 'Grado en que el producto mitiga el riesgo a personas',
                questions: [
                    { id: 'q34', text: '¿El sistema es seguro para los usuarios?', weight: 3 },
                    { id: 'q35', text: '¿No causa problemas de salud (ej. visual, ergonómicos)?', weight: 2 },
                    { id: 'q36', text: '¿Protege datos sensibles de salud adecuadamente?', weight: 3 }
                ]
            },
            {
                id: 'mitigacionRiesgoAmbiental',
                name: 'Mitigación de Riesgo Ambiental',
                description: 'Grado en que el producto mitiga el riesgo al medio ambiente',
                questions: [
                    { id: 'q37', text: '¿El sistema es eficiente energéticamente?', weight: 2 },
                    { id: 'q38', text: '¿Minimiza el impacto ambiental?', weight: 2 },
                    { id: 'q39', text: '¿Promueve prácticas sostenibles?', weight: 1 }
                ]
            }
        ]
    },

    coberturaContexto: {
        id: 'coberturaContexto',
        title: 'Cobertura del Contexto',
        description: 'Grado en que el producto puede ser usado con efectividad, eficiencia, ausencia de riesgo y satisfacción en contextos de uso especificados y más allá',
        icon: 'fas fa-globe',
        color: '#8b5cf6',
        subcharacteristics: [
            {
                id: 'completitudContexto',
                name: 'Completitud del Contexto',
                description: 'Grado en que el producto puede usarse en todos los contextos especificados',
                questions: [
                    { id: 'q40', text: '¿El sistema funciona en todos los contextos previstos?', weight: 3 },
                    { id: 'q41', text: '¿Cubre todas las situaciones de uso esperadas?', weight: 2 },
                    { id: 'q42', text: '¿Es adaptable a diferentes escenarios?', weight: 2 }
                ]
            },
            {
                id: 'flexibilidad',
                name: 'Flexibilidad',
                description: 'Grado en que el producto puede usarse más allá de los contextos inicialmente especificados',
                questions: [
                    { id: 'q43', text: '¿El sistema se adapta a nuevas necesidades?', weight: 3 },
                    { id: 'q44', text: '¿Puede usarse en contextos no previstos inicialmente?', weight: 2 },
                    { id: 'q45', text: '¿Es flexible ante cambios de requisitos?', weight: 2 },
                    { id: 'q46', text: '¿Permite diferentes formas de uso?', weight: 2 }
                ]
            },
            {
                id: 'accesibilidadContexto',
                name: 'Accesibilidad en Diferentes Contextos',
                description: 'Grado en que el producto es accesible en diferentes contextos de uso',
                questions: [
                    { id: 'q47', text: '¿Es accesible desde diferentes dispositivos?', weight: 3 },
                    { id: 'q48', text: '¿Funciona en diferentes entornos (offline/online)?', weight: 2 },
                    { id: 'q49', text: '¿Es usable en diferentes ubicaciones geográficas?', weight: 2 },
                    { id: 'q50', text: '¿Soporta diferentes idiomas y culturas?', weight: 2 }
                ]
            }
        ]
    }
};

// Función helper para calcular el puntaje de una característica
export function calculateCharacteristicScore(responses) {
    if (!responses || Object.keys(responses).length === 0) return 0;

    let totalWeight = 0;
    let weightedSum = 0;

    Object.entries(responses).forEach(([questionId, value]) => {
        for (const characteristic of Object.values(iso25022Data)) {
            for (const subchar of characteristic.subcharacteristics) {
                const question = subchar.questions.find(q => q.id === questionId);
                if (question) {
                    totalWeight += question.weight;
                    weightedSum += value * question.weight;
                    break;
                }
            }
        }
    });

    return totalWeight > 0 ? (weightedSum / (totalWeight * 5)) * 100 : 0;
}

// Función para obtener interpretación según el puntaje
export function getScoreInterpretation(score) {
    if (score >= 90) return { level: 'Excelente', color: '#10b981', icon: 'fas fa-check-circle' };
    if (score >= 75) return { level: 'Bueno', color: '#3b82f6', icon: 'fas fa-thumbs-up' };
    if (score >= 60) return { level: 'Aceptable', color: '#f59e0b', icon: 'fas fa-exclamation-circle' };
    if (score >= 40) return { level: 'Mejorable', color: '#ef4444', icon: 'fas fa-exclamation-triangle' };
    return { level: 'Deficiente', color: '#dc2626', icon: 'fas fa-times-circle' };
}

// Función para obtener todas las preguntas de ISO 25022
export function getTotalQuestions() {
    return Object.values(iso25022Data).reduce((total, char) => {
        return total + char.subcharacteristics.reduce((subTotal, sub) => {
            return subTotal + sub.questions.length;
        }, 0);
    }, 0);
}

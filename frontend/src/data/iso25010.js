// ISO 25010 - Modelo de Calidad del Producto de Software
export const iso25010Data = {
    adecuacionFuncional: {
        id: 'adecuacionFuncional',
        title: 'Adecuación Funcional',
        description: 'Grado en que el producto proporciona funciones que satisfacen las necesidades declaradas e implícitas',
        icon: 'fas fa-tasks',
        color: '#3b82f6',
        subcharacteristics: [
            {
                id: 'completitud',
                name: 'Completitud Funcional',
                description: 'Grado en que el conjunto de funciones cubre todas las tareas y objetivos del usuario',
                questions: [
                    { id: 'q1', text: '¿El sistema implementa todas las funcionalidades requeridas?', weight: 3 },
                    { id: 'q2', text: '¿Las funciones cubren todos los casos de uso especificados?', weight: 2 },
                    { id: 'q3', text: '¿Se han implementado todas las reglas de negocio?', weight: 3 }
                ]
            },
            {
                id: 'correccion',
                name: 'Corrección Funcional',
                description: 'Capacidad del producto para proporcionar resultados correctos con el nivel de precisión necesario',
                questions: [
                    { id: 'q4', text: '¿Los resultados del sistema son precisos y correctos?', weight: 3 },
                    { id: 'q5', text: '¿Los cálculos y operaciones son exactos?', weight: 3 },
                    { id: 'q6', text: '¿La información mostrada es confiable?', weight: 2 }
                ]
            },
            {
                id: 'pertinencia',
                name: 'Pertinencia Funcional',
                description: 'Capacidad del producto para facilitar tareas y objetivos específicos',
                questions: [
                    { id: 'q7', text: '¿Las funciones son apropiadas para las tareas requeridas?', weight: 2 },
                    { id: 'q8', text: '¿El sistema facilita el logro de los objetivos del usuario?', weight: 2 }
                ]
            }
        ]
    },

    eficienciaDesempeno: {
        id: 'eficienciaDesempeno',
        title: 'Eficiencia de Desempeño',
        description: 'Desempeño relativo a la cantidad de recursos utilizados bajo determinadas condiciones',
        icon: 'fas fa-tachometer-alt',
        color: '#10b981',
        subcharacteristics: [
            {
                id: 'tiempoRespuesta',
                name: 'Tiempo de Respuesta',
                description: 'Tiempo que tarda el sistema en responder a las solicitudes del usuario',
                questions: [
                    { id: 'q9', text: '¿El sistema responde rápidamente a las acciones del usuario?', weight: 3 },
                    { id: 'q10', text: '¿Los tiempos de carga son aceptables (< 3 segundos)?', weight: 3 },
                    { id: 'q11', text: '¿Las transacciones se procesan en tiempo razonable?', weight: 2 }
                ]
            },
            {
                id: 'utilizacionRecursos',
                name: 'Utilización de Recursos',
                description: 'Cantidad de recursos utilizados bajo determinadas condiciones',
                questions: [
                    { id: 'q12', text: '¿El consumo de memoria es apropiado?', weight: 2 },
                    { id: 'q13', text: '¿El uso de CPU es eficiente?', weight: 2 },
                    { id: 'q14', text: '¿El ancho de banda utilizado es razonable?', weight: 1 }
                ]
            },
            {
                id: 'capacidad',
                name: 'Capacidad',
                description: 'Grado en que los límites máximos del sistema satisfacen los requisitos',
                questions: [
                    { id: 'q15', text: '¿El sistema maneja adecuadamente múltiples usuarios simultáneos?', weight: 3 },
                    { id: 'q16', text: '¿Puede procesar el volumen de datos esperado?', weight: 2 }
                ]
            }
        ]
    },

    compatibilidad: {
        id: 'compatibilidad',
        title: 'Compatibilidad',
        description: 'Capacidad de dos o más sistemas o componentes para intercambiar información',
        icon: 'fas fa-puzzle-piece',
        color: '#f59e0b',
        subcharacteristics: [
            {
                id: 'coexistencia',
                name: 'Coexistencia',
                description: 'Capacidad del producto para coexistir con otro software independiente',
                questions: [
                    { id: 'q17', text: '¿El sistema funciona correctamente junto a otros sistemas?', weight: 2 },
                    { id: 'q18', text: '¿No interfiere con otras aplicaciones del entorno?', weight: 2 }
                ]
            },
            {
                id: 'interoperabilidad',
                name: 'Interoperabilidad',
                description: 'Capacidad de dos o más sistemas para intercambiar información y utilizar la información intercambiada',
                questions: [
                    { id: 'q19', text: '¿El sistema se integra bien con sistemas externos?', weight: 3 },
                    { id: 'q20', text: '¿Utiliza estándares de comunicación reconocidos?', weight: 2 },
                    { id: 'q21', text: '¿Puede intercambiar datos con otros sistemas eficientemente?', weight: 3 }
                ]
            }
        ]
    },

    usabilidad: {
        id: 'usabilidad',
        title: 'Usabilidad',
        description: 'Capacidad del producto para ser entendido, aprendido, usado y atractivo para el usuario',
        icon: 'fas fa-user-friends',
        color: '#8b5cf6',
        subcharacteristics: [
            {
                id: 'reconocimiento',
                name: 'Reconocimiento de Adecuación',
                description: 'Capacidad del usuario para reconocer si el producto es apropiado para sus necesidades',
                questions: [
                    { id: 'q22', text: '¿Es fácil identificar las funcionalidades principales?', weight: 2 },
                    { id: 'q23', text: '¿El propósito del sistema es claro desde el inicio?', weight: 2 }
                ]
            },
            {
                id: 'aprendizaje',
                name: 'Capacidad de Aprendizaje',
                description: 'Facilidad con la que el usuario puede aprender a usar el sistema',
                questions: [
                    { id: 'q24', text: '¿Es fácil aprender a usar el sistema?', weight: 3 },
                    { id: 'q25', text: '¿Cuenta con tutoriales o ayuda integrada?', weight: 2 },
                    { id: 'q26', text: '¿Los nuevos usuarios pueden ser productivos rápidamente?', weight: 3 }
                ]
            },
            {
                id: 'operabilidad',
                name: 'Operabilidad',
                description: 'Facilidad de operación y control del producto',
                questions: [
                    { id: 'q27', text: '¿La navegación es intuitiva?', weight: 3 },
                    { id: 'q28', text: '¿Los controles son fáciles de usar?', weight: 2 },
                    { id: 'q29', text: '¿Es fácil corregir errores del usuario?', weight: 2 }
                ]
            },
            {
                id: 'proteccionError',
                name: 'Protección contra Errores del Usuario',
                description: 'Capacidad del sistema para proteger a los usuarios de cometer errores',
                questions: [
                    { id: 'q30', text: '¿El sistema previene errores del usuario?', weight: 3 },
                    { id: 'q31', text: '¿Hay validaciones adecuadas en los formularios?', weight: 2 },
                    { id: 'q32', text: '¿Se confirman acciones críticas antes de ejecutarlas?', weight: 3 }
                ]
            },
            {
                id: 'estetica',
                name: 'Estética de la Interfaz',
                description: 'Capacidad de la interfaz para ser agradable y satisfactoria',
                questions: [
                    { id: 'q33', text: '¿El diseño visual es atractivo?', weight: 2 },
                    { id: 'q34', text: '¿La interfaz es moderna y profesional?', weight: 1 },
                    { id: 'q35', text: '¿Los colores y tipografía son apropiados?', weight: 1 }
                ]
            },
            {
                id: 'accesibilidad',
                name: 'Accesibilidad',
                description: 'Capacidad de uso por personas con el más amplio rango de características',
                questions: [
                    { id: 'q36', text: '¿El sistema es accesible para personas con discapacidades?', weight: 2 },
                    { id: 'q37', text: '¿Cumple con estándares de accesibilidad (WCAG)?', weight: 2 }
                ]
            }
        ]
    },

    fiabilidad: {
        id: 'fiabilidad',
        title: 'Fiabilidad',
        description: 'Capacidad de un sistema de desempeñar funciones bajo condiciones establecidas durante un período de tiempo',
        icon: 'fas fa-shield-alt',
        color: '#ef4444',
        subcharacteristics: [
            {
                id: 'madurez',
                name: 'Madurez',
                description: 'Capacidad del sistema para evitar fallos como resultado de defectos',
                questions: [
                    { id: 'q38', text: '¿El sistema es estable y libre de fallos frecuentes?', weight: 3 },
                    { id: 'q39', text: '¿Los errores críticos son raros?', weight: 3 },
                    { id: 'q40', text: '¿El sistema ha sido probado exhaustivamente?', weight: 2 }
                ]
            },
            {
                id: 'disponibilidad',
                name: 'Disponibilidad',
                description: 'Grado en que el sistema está operativo y accesible cuando se requiere',
                questions: [
                    { id: 'q41', text: '¿El sistema tiene alta disponibilidad (>99%)?', weight: 3 },
                    { id: 'q42', text: '¿Los tiempos de inactividad son mínimos?', weight: 3 }
                ]
            },
            {
                id: 'toleranciaFallos',
                name: 'Tolerancia a Fallos',
                description: 'Capacidad del sistema para operar según lo previsto en presencia de fallos',
                questions: [
                    { id: 'q43', text: '¿El sistema maneja errores gracefully?', weight: 3 },
                    { id: 'q44', text: '¿Tiene mecanismos de respaldo y recuperación?', weight: 2 },
                    { id: 'q45', text: '¿Puede continuar operando ante fallos parciales?', weight: 2 }
                ]
            },
            {
                id: 'recuperabilidad',
                name: 'Recuperabilidad',
                description: 'Capacidad de recuperar datos afectados y restablecer el estado deseado del sistema',
                questions: [
                    { id: 'q46', text: '¿El sistema puede recuperarse rápidamente de fallos?', weight: 3 },
                    { id: 'q47', text: '¿Existen backups automáticos?', weight: 2 },
                    { id: 'q48', text: '¿Se pueden restaurar datos perdidos?', weight: 3 }
                ]
            }
        ]
    },

    seguridad: {
        id: 'seguridad',
        title: 'Seguridad',
        description: 'Protección de información y datos para que personas o sistemas no autorizados no puedan leerlos o modificarlos',
        icon: 'fas fa-lock',
        color: '#dc2626',
        subcharacteristics: [
            {
                id: 'confidencialidad',
                name: 'Confidencialidad',
                description: 'Capacidad de proteger datos para que solo sean accesibles por quienes están autorizados',
                questions: [
                    { id: 'q49', text: '¿Los datos sensibles están cifrados?', weight: 3 },
                    { id: 'q50', text: '¿Se protege la información personal del usuario?', weight: 3 },
                    { id: 'q51', text: '¿El acceso a datos está correctamente restringido?', weight: 2 }
                ]
            },
            {
                id: 'integridad',
                name: 'Integridad',
                description: 'Capacidad de prevenir acceso o modificación no autorizada de datos',
                questions: [
                    { id: 'q52', text: '¿Se previene la modificación no autorizada de datos?', weight: 3 },
                    { id: 'q53', text: '¿Se detectan alteraciones indebidas?', weight: 2 },
                    { id: 'q54', text: '¿Se mantiene un registro de cambios (audit log)?', weight: 2 }
                ]
            },
            {
                id: 'noRepudio',
                name: 'No Repudio',
                description: 'Capacidad de demostrar que acciones o eventos han tenido lugar',
                questions: [
                    { id: 'q55', text: '¿Se registran las acciones de los usuarios?', weight: 2 },
                    { id: 'q56', text: '¿Existe trazabilidad de las operaciones críticas?', weight: 2 }
                ]
            },
            {
                id: 'autenticidad',
                name: 'Autenticidad',
                description: 'Capacidad de probar la identidad de un sujeto o recurso',
                questions: [
                    { id: 'q57', text: '¿Existe autenticación robusta de usuarios?', weight: 3 },
                    { id: 'q58', text: '¿Se utiliza autenticación de múltiples factores?', weight: 2 },
                    { id: 'q59', text: '¿Las sesiones están protegidas adecuadamente?', weight: 2 }
                ]
            },
            {
                id: 'responsabilidad',
                name: 'Responsabilidad',
                description: 'Capacidad de rastrear las acciones de una entidad de forma inequívoca',
                questions: [
                    { id: 'q60', text: '¿Se puede identificar quién realizó cada acción?', weight: 2 },
                    { id: 'q61', text: '¿Existe un sistema de auditoría completo?', weight: 2 }
                ]
            }
        ]
    },

    mantenibilidad: {
        id: 'mantenibilidad',
        title: 'Mantenibilidad',
        description: 'Facilidad con la que un producto puede ser modificado para corregir defectos, mejorar el desempeño u otros atributos',
        icon: 'fas fa-wrench',
        color: '#06b6d4',
        subcharacteristics: [
            {
                id: 'modularidad',
                name: 'Modularidad',
                description: 'Grado en que el sistema está compuesto de componentes discretos',
                questions: [
                    { id: 'q62', text: '¿El código está organizado en módulos independientes?', weight: 3 },
                    { id: 'q63', text: '¿Los componentes tienen responsabilidades bien definidas?', weight: 2 },
                    { id: 'q64', text: '¿El acoplamiento entre módulos es bajo?', weight: 2 }
                ]
            },
            {
                id: 'reusabilidad',
                name: 'Reusabilidad',
                description: 'Grado en que un activo puede ser usado en más de un sistema',
                questions: [
                    { id: 'q65', text: '¿El código es reutilizable?', weight: 2 },
                    { id: 'q66', text: '¿Existen componentes genéricos?', weight: 2 },
                    { id: 'q67', text: '¿Se evita la duplicación de código?', weight: 2 }
                ]
            },
            {
                id: 'analizabilidad',
                name: 'Analizabilidad',
                description: 'Facilidad con la que se puede evaluar el impacto de un cambio',
                questions: [
                    { id: 'q68', text: '¿El código es fácil de entender?', weight: 3 },
                    { id: 'q69', text: '¿Existe documentación técnica adecuada?', weight: 2 },
                    { id: 'q70', text: '¿Los logs facilitan la identificación de problemas?', weight: 2 }
                ]
            },
            {
                id: 'modificabilidad',
                name: 'Modificabilidad',
                description: 'Facilidad con la que puede modificarse sin introducir defectos',
                questions: [
                    { id: 'q71', text: '¿Es fácil hacer cambios en el código?', weight: 3 },
                    { id: 'q72', text: '¿El diseño facilita las modificaciones?', weight: 2 },
                    { id: 'q73', text: '¿Existen pruebas automatizadas?', weight: 3 }
                ]
            },
            {
                id: 'probabilidad',
                name: 'Probabilidad',
                description: 'Facilidad con la que se pueden establecer y ejecutar pruebas',
                questions: [
                    { id: 'q74', text: '¿El código es fácilmente testeable?', weight: 2 },
                    { id: 'q75', text: '¿Existen pruebas unitarias?', weight: 3 },
                    { id: 'q76', text: '¿Se pueden ejecutar pruebas automáticamente?', weight: 2 }
                ]
            }
        ]
    },

    portabilidad: {
        id: 'portabilidad',
        title: 'Portabilidad',
        description: 'Facilidad con la que el sistema puede ser transferido de un entorno a otro',
        icon: 'fas fa-laptop-code',
        color: '#6366f1',
        subcharacteristics: [
            {
                id: 'adaptabilidad',
                name: 'Adaptabilidad',
                description: 'Facilidad con la que el producto puede adaptarse a diferentes entornos',
                questions: [
                    { id: 'q77', text: '¿El sistema se adapta a diferentes entornos?', weight: 2 },
                    { id: 'q78', text: '¿Funciona en múltiples plataformas?', weight: 3 },
                    { id: 'q79', text: '¿Es configurable para diferentes contextos?', weight: 2 }
                ]
            },
            {
                id: 'instalabilidad',
                name: 'Instalabilidad',
                description: 'Facilidad con la que el producto puede ser instalado y/o desinstalado',
                questions: [
                    { id: 'q80', text: '¿El proceso de instalación es simple?', weight: 2 },
                    { id: 'q81', text: '¿Existe documentación de instalación?', weight: 2 },
                    { id: 'q82', text: '¿Se puede desinstalar limpiamente?', weight: 1 }
                ]
            },
            {
                id: 'reemplazabilidad',
                name: 'Reemplazabilidad',
                description: 'Facilidad con la que el producto puede reemplazar a otro producto',
                questions: [
                    { id: 'q83', text: '¿Puede migrar datos de sistemas anteriores?', weight: 2 },
                    { id: 'q84', text: '¿Mantiene compatibilidad con versiones anteriores?', weight: 2 },
                    { id: 'q85', text: '¿Permite exportar datos fácilmente?', weight: 2 }
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
        // Encontrar el peso de la pregunta
        for (const characteristic of Object.values(iso25010Data)) {
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

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const pdf = require('pdf-creator-node');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Endpoint para generar el PDF
app.post('/api/generate-pdf', async (req, res) => {
    const { metric, result, inputs, interpretation } = req.body;

    // Leer el template HTML
    const html = fs.readFileSync(path.join(__dirname, 'template.html'), 'utf8');

    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm'
    };

    const document = {
        html: html,
        data: {
            metric: metric,
            result: result,
            inputs: inputs,
            interpretation: interpretation,
            date: new Date().toLocaleDateString()
        },
        path: "./reporte_metrica.pdf",
        type: ""
    };

    try {
        await pdf.create(document, options);
        const file = path.join(__dirname, 'reporte_metrica.pdf');
        res.download(file);
        // Opcional: Borrar archivo después de enviar
    } catch (error) {
        res.status(500).send(error);
    }
});

// Endpoint para generar PDF completo con todas las métricas
app.post('/api/generate-complete-pdf', async (req, res) => {
    const { metrics } = req.body;

    // Leer el template HTML para reporte completo
    const html = fs.readFileSync(path.join(__dirname, 'template-completo.html'), 'utf8');

    const options = {
        format: 'A4',
        orientation: 'portrait',
        border: '10mm'
    };

    // Calcular estadísticas
    const uniqueStandards = new Set(metrics.map(m => m.standard)).size;
    const totalEvaluations = metrics.reduce((sum, m) => sum + (m.inputs ? m.inputs.length : 0), 0);

    const document = {
        html: html,
        data: {
            metrics: metrics.map((metric, index) => ({
                number: index + 1,
                ...metric
            })),
            totalMetrics: metrics.length,
            totalStandards: uniqueStandards,
            totalEvaluations: totalEvaluations,
            date: new Date().toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            })
        },
        path: "./reporte_completo_metricas.pdf",
        type: ""
    };

    try {
        await pdf.create(document, options);
        const file = path.join(__dirname, 'reporte_completo_metricas.pdf');
        res.download(file, 'Reporte_Completo_Metricas.pdf');
    } catch (error) {
        console.error('Error generando PDF:', error);
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
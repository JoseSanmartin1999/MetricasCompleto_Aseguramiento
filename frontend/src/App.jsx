import React, { useState, useEffect } from 'react';
import { metricsData } from './data/metrics';
import ISO25010Evaluator from './components/ISO25010Evaluator';
import ISO25022Evaluator from './components/ISO25022Evaluator';
import './App.css';

function App() {
  const [currentMetricId, setCurrentMetricId] = useState('icp');
  const [inputs, setInputs] = useState({});
  const [isDownloading, setIsDownloading] = useState(false); // NUEVO: Estado para carga
  const [activeView, setActiveView] = useState('sigb'); // NUEVO: Vista activa (sigb o iso25010)

  useEffect(() => {
    const initialValues = {};
    Object.keys(metricsData).forEach((id) => {
      initialValues[id] = {};
      metricsData[id].inputs.forEach((input) => {
        initialValues[id][input.id] = input.defaultValue;
      });
    });
    setInputs(initialValues);
  }, []);

  // NUEVO: Función para conectar con el Backend y descargar el PDF
  const downloadPDF = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch('http://localhost:5000/api/generate-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metric: activeMetric.title,
          result: currentResult,
          unit: activeMetric.unit,
          standard: activeMetric.standard,
          inputs: activeMetric.inputs.map(i => ({
            label: i.label,
            value: activeInputs[i.id]
          })),
          interpretation: activeMetric.interpretation(currentResult)
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `Reporte_${activeMetric.id}.pdf`;
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Error al generar el PDF. Asegúrate de que el servidor esté encendido.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setIsDownloading(false);
    }
  };

  // NUEVO: Función para generar PDF completo con TODAS las métricas
  const downloadCompletePDF = async () => {
    setIsDownloading(true);
    try {
      // Preparar datos de todas las métricas
      const allMetricsData = Object.values(metricsData).map(metric => {
        const metricInputs = inputs[metric.id] || {};
        const result = metric.calculate(metricInputs);

        return {
          title: metric.title,
          standard: metric.standard,
          formula: metric.formula,
          description: metric.description,
          status: metric.status,
          statusClass: metric.statusClass,
          result: result,
          unit: metric.unit,
          inputs: metric.inputs.map(i => ({
            label: i.label,
            value: metricInputs[i.id] || i.defaultValue
          })),
          interpretation: metric.interpretation(result)
        };
      });

      const response = await fetch('http://localhost:5000/api/generate-complete-pdf', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          metrics: allMetricsData
        }),
      });

      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'Reporte_Completo_Metricas.pdf';
        document.body.appendChild(a);
        a.click();
        a.remove();
      } else {
        alert("Error al generar el PDF completo. Asegúrate de que el servidor esté encendido.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("No se pudo conectar con el servidor.");
    } finally {
      setIsDownloading(false);
    }
  };

  const handleInputChange = (metricId, inputId, value) => {
    const val = parseFloat(value) || 0;
    setInputs((prev) => ({
      ...prev,
      [metricId]: { ...prev[metricId], [inputId]: val },
    }));
  };

  const activeMetric = metricsData[currentMetricId];
  const activeInputs = inputs[currentMetricId] || {};
  const currentResult = activeMetric ? activeMetric.calculate(activeInputs) : 0;

  return (
    <div className="layout">
      {/* NUEVO: Navbar con pestañas */}
      <nav className="navbar">
        <div className="container">
          <div className="navbar-content">
            <div className="navbar-brand">
              <i className="fas fa-graduation-cap"></i>
              <span>ESPE - Aseguramiento de Calidad</span>
            </div>
            <div className="navbar-tabs">
              <button
                className={`nav-tab ${activeView === 'sigb' ? 'active' : ''}`}
                onClick={() => setActiveView('sigb')}
              >
                <i className="fas fa-book"></i>
                <span>SIGB</span>
              </button>
              <button
                className={`nav-tab ${activeView === 'iso25010' ? 'active' : ''}`}
                onClick={() => setActiveView('iso25010')}
              >
                <i className="fas fa-certificate"></i>
                <span>ISO 25010</span>
              </button>
              <button
                className={`nav-tab ${activeView === 'iso25022' ? 'active' : ''}`}
                onClick={() => setActiveView('iso25022')}
              >
                <i className="fas fa-user-check"></i>
                <span>ISO 25022</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <header>
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <i className="fas fa-chart-line"></i>
              <div>
                <h1>
                  {activeView === 'sigb' && 'Calculadora de Métricas de Calidad - SIGB'}
                  {activeView === 'iso25010' && 'Evaluación ISO 25010 - Calidad del Producto'}
                  {activeView === 'iso25022' && 'Evaluación ISO 25022 - Calidad en Uso'}
                </h1>
                <p>
                  {activeView === 'sigb' && 'Sistema Integrado de Gestión Bibliotecaria - Estándares ISO & CISQ'}
                  {activeView === 'iso25010' && 'Modelo de Calidad del Producto de Software'}
                  {activeView === 'iso25022' && 'Medición de Calidad desde la Perspectiva del Usuario'}
                </p>
              </div>
            </div>
            <button
              className="btn-download-complete"
              onClick={downloadCompletePDF}
              disabled={isDownloading}
              title="Descargar reporte con todas las métricas"
            >
              <i className={isDownloading ? "fas fa-spinner fa-spin" : "fas fa-file-download"}></i>
              {isDownloading ? " Generando..." : " Reporte Completo"}
            </button>
          </div>
        </div>
      </header>

      <main className="container">
        {activeView === 'sigb' ? (
          <div className="main-content">
            <div className="left-panel">
              {/* ... (Se mantiene igual el Grid de Métricas) */}
              <div className="card">
                <h2 className="card-title">
                  <i className="fas fa-check-circle" style={{ color: 'var(--success)' }}></i>
                  Métricas Disponibles
                </h2>
                <div className="metrics-grid">
                  {Object.values(metricsData).map((m) => {
                    const val = inputs[m.id] ? m.calculate(inputs[m.id]) : 0;
                    return (
                      <div
                        key={m.id}
                        className={`metric-card ${currentMetricId === m.id ? 'active' : ''}`}
                        onClick={() => setCurrentMetricId(m.id)}
                      >
                        <div className="metric-header">
                          <div className="metric-icon" style={{ backgroundColor: m.iconColor }}>
                            <i className={m.icon}></i>
                          </div>
                          <span className={`status-badge ${m.statusClass}`}>{m.status}</span>
                        </div>
                        <div className="metric-value">{val}{m.unit}</div>
                        <div className="metric-name">{m.title}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="card">
                {/* ... (Se mantiene igual la Tabla de Resumen) */}
                <h2 className="card-title">
                  <i className="fas fa-chart-bar" style={{ color: 'var(--info)' }}></i>
                  Resumen de Métricas
                </h2>
                <div style={{ overflowX: 'auto' }}>
                  <table className="summary-table">
                    <thead>
                      <tr>
                        <th>Estándar</th>
                        <th>Métrica</th>
                        <th>Resultado</th>
                        <th>Estado</th>
                      </tr>
                    </thead>
                    <tbody>
                      {Object.values(metricsData).map((m) => (
                        <tr key={m.id} onClick={() => setCurrentMetricId(m.id)} style={{ cursor: 'pointer' }}>
                          <td>{m.standard}</td>
                          <td>{m.title}</td>
                          <td>{inputs[m.id] ? m.calculate(inputs[m.id]) : 0}{m.unit}</td>
                          <td><span className={`status-badge ${m.statusClass}`}>{m.status}</span></td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="right-panel">
              <div className="card">
                <div className="calculator-header">
                  <div>
                    <h2 className="calculator-title">{activeMetric.title}</h2>
                    <div style={{ display: 'flex', gap: '10px', marginTop: '0.5rem' }}>
                      <span className="status-badge">{activeMetric.standard}</span>
                      <span className={`status-badge ${activeMetric.statusClass}`}>{activeMetric.status}</span>
                    </div>
                  </div>
                  <div className="calculator-result">
                    <div className="result-value">{currentResult}</div>
                    <div className="result-label">{activeMetric.unit}</div>
                  </div>
                </div>

                <div className="formula-box">
                  <div className="formula">{activeMetric.formula}</div>
                  <div className="formula-desc">{activeMetric.description}</div>
                </div>

                <h3 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="fas fa-calculator" style={{ color: 'var(--primary)' }}></i>
                  Parámetros de Cálculo
                </h3>

                <div className="input-grid">
                  {activeMetric.inputs.map((input) => (
                    <div key={input.id} className="input-group">
                      <label className="input-label">{input.label}</label>
                      <input
                        type="number"
                        className="input-field"
                        value={activeInputs[input.id] || ''}
                        onChange={(e) => handleInputChange(currentMetricId, input.id, e.target.value)}
                        min={input.min}
                      />
                    </div>
                  ))}
                </div>

                <div className="interpretation-box">
                  <div className="interpretation-title">
                    <i className="fas fa-info-circle"></i> Interpretación
                  </div>
                  <div className="interpretation-text">
                    {activeMetric.interpretation(currentResult)}
                  </div>
                </div>

                {/* NUEVO: Botón de descarga al final de la calculadora */}
                <button
                  className="btn-download"
                  onClick={downloadPDF}
                  disabled={isDownloading}
                >
                  <i className={isDownloading ? "fas fa-spinner fa-spin" : "fas fa-file-pdf"}></i>
                  {isDownloading ? " Generando..." : " Descargar Reporte PDF"}
                </button>
              </div>
            </div>
          </div>
        ) : activeView === 'iso25010' ? (
          <ISO25010Evaluator onGeneratePDF={downloadCompletePDF} />
        ) : (
          <ISO25022Evaluator onGeneratePDF={downloadCompletePDF} />
        )}
      </main>

      <footer>
        <div className="container footer-content">
          <p>Proyecto SIGB • Calculadora de Métricas de Calidad de Software</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
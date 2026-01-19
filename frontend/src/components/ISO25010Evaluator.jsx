import React, { useState } from 'react';
import { iso25010Data, calculateCharacteristicScore, getScoreInterpretation } from '../data/iso25010';
import './ISO25010Evaluator.css';

function ISO25010Evaluator({ onGeneratePDF }) {
    const [responses, setResponses] = useState({});
    const [activeCharacteristic, setActiveCharacteristic] = useState('adecuacionFuncional');
    const [showResults, setShowResults] = useState(false);

    const handleResponseChange = (questionId, value) => {
        setResponses(prev => ({
            ...prev,
            [questionId]: parseInt(value)
        }));
    };

    const calculateOverallScore = () => {
        const characteristics = Object.values(iso25010Data);
        let totalScore = 0;

        characteristics.forEach(char => {
            const charResponses = {};
            char.subcharacteristics.forEach(sub => {
                sub.questions.forEach(q => {
                    if (responses[q.id] !== undefined) {
                        charResponses[q.id] = responses[q.id];
                    }
                });
            });
            totalScore += calculateCharacteristicScore(charResponses);
        });

        return (totalScore / characteristics.length).toFixed(1);
    };

    const getCharacteristicScore = (characteristicId) => {
        const char = iso25010Data[characteristicId];
        const charResponses = {};

        char.subcharacteristics.forEach(sub => {
            sub.questions.forEach(q => {
                if (responses[q.id] !== undefined) {
                    charResponses[q.id] = responses[q.id];
                }
            });
        });

        return calculateCharacteristicScore(charResponses);
    };

    const getTotalQuestions = () => {
        return Object.values(iso25010Data).reduce((total, char) => {
            return total + char.subcharacteristics.reduce((subTotal, sub) => {
                return subTotal + sub.questions.length;
            }, 0);
        }, 0);
    };

    const getAnsweredQuestions = () => {
        return Object.keys(responses).length;
    };

    const isComplete = () => {
        return getAnsweredQuestions() === getTotalQuestions();
    };

    const activeChar = iso25010Data[activeCharacteristic];
    const overallScore = calculateOverallScore();
    const interpretation = getScoreInterpretation(parseFloat(overallScore));
    const progress = (getAnsweredQuestions() / getTotalQuestions()) * 100;

    return (
        <div className="iso-evaluator">
            {/* Header de Evaluación */}
            <div className="eval-header">
                <div className="eval-header-content">
                    <div>
                        <h2>Evaluación ISO 25010</h2>
                        <p>Evalúa la calidad de tu proyecto de software</p>
                    </div>
                    <div className="eval-progress">
                        <div className="progress-circle">
                            <svg width="80" height="80">
                                <circle cx="40" cy="40" r="35" fill="none" stroke="#e5e7eb" strokeWidth="6" />
                                <circle
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    fill="none"
                                    stroke="#667eea"
                                    strokeWidth="6"
                                    strokeDasharray={`${2 * Math.PI * 35}`}
                                    strokeDashoffset={`${2 * Math.PI * 35 * (1 - progress / 100)}`}
                                    transform="rotate(-90 40 40)"
                                />
                            </svg>
                            <div className="progress-text">
                                <span className="progress-value">{progress.toFixed(0)}%</span>
                                <span className="progress-label">Completo</span>
                            </div>
                        </div>
                        <div className="progress-info">
                            <div className="progress-stat">
                                <span className="stat-value">{getAnsweredQuestions()}</span>
                                <span className="stat-label">de {getTotalQuestions()} preguntas</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pestañas de Características */}
            <div className="characteristics-tabs">
                {Object.values(iso25010Data).map((char) => {
                    const score = getCharacteristicScore(char.id);
                    const hasAnswers = char.subcharacteristics.some(sub =>
                        sub.questions.some(q => responses[q.id] !== undefined)
                    );

                    return (
                        <button
                            key={char.id}
                            className={`char-tab ${activeCharacteristic === char.id ? 'active' : ''}`}
                            onClick={() => setActiveCharacteristic(char.id)}
                        >
                            <i className={char.icon} style={{ color: char.color }}></i>
                            <span className="char-tab-title">{char.title}</span>
                            {hasAnswers && (
                                <span className="char-tab-score" style={{ backgroundColor: getScoreInterpretation(score).color }}>
                                    {score.toFixed(0)}%
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Contenido de la Característica Activa */}
            <div className="eval-content">
                <div className="char-info">
                    <div className="char-icon" style={{ backgroundColor: activeChar.color }}>
                        <i className={activeChar.icon}></i>
                    </div>
                    <div>
                        <h3>{activeChar.title}</h3>
                        <p>{activeChar.description}</p>
                    </div>
                </div>

                {/* Subcaracterísticas y Preguntas */}
                <div className="subcharacteristics">
                    {activeChar.subcharacteristics.map((subchar, index) => (
                        <div key={subchar.id} className="subchar-card">
                            <div className="subchar-header">
                                <div className="subchar-number">{index + 1}</div>
                                <div>
                                    <h4>{subchar.name}</h4>
                                    <p>{subchar.description}</p>
                                </div>
                            </div>

                            <div className="questions">
                                {subchar.questions.map((question) => (
                                    <div key={question.id} className="question-item">
                                        <div className="question-text">
                                            {question.text}
                                            <span className="question-weight">Peso: {question.weight}</span>
                                        </div>
                                        <div className="rating-scale">
                                            {[1, 2, 3, 4, 5].map((value) => (
                                                <label key={value} className="rating-option">
                                                    <input
                                                        type="radio"
                                                        name={question.id}
                                                        value={value}
                                                        checked={responses[question.id] === value}
                                                        onChange={(e) => handleResponseChange(question.id, e.target.value)}
                                                    />
                                                    <span className="rating-label">{value}</span>
                                                </label>
                                            ))}
                                        </div>
                                        <div className="rating-labels">
                                            <span>Muy bajo</span>
                                            <span>Muy alto</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Panel de Resultados */}
            {getAnsweredQuestions() > 0 && (
                <div className="results-panel">
                    <div className="overall-score">
                        <div className="score-circle" style={{ borderColor: interpretation.color }}>
                            <i className={interpretation.icon} style={{ color: interpretation.color }}></i>
                            <span className="score-value">{overallScore}%</span>
                            <span className="score-level" style={{ color: interpretation.color }}>
                                {interpretation.level}
                            </span>
                        </div>
                        <div>
                            <h3>Puntuación Global</h3>
                            <p>Evaluación general del proyecto según ISO 25010</p>
                        </div>
                    </div>

                    <div className="characteristics-scores">
                        {Object.values(iso25010Data).map((char) => {
                            const score = getCharacteristicScore(char.id);
                            const charInterp = getScoreInterpretation(score);

                            return (
                                <div key={char.id} className="char-score-item">
                                    <div className="char-score-header">
                                        <i className={char.icon} style={{ color: char.color }}></i>
                                        <span>{char.title}</span>
                                    </div>
                                    <div className="char-score-bar">
                                        <div
                                            className="char-score-fill"
                                            style={{
                                                width: `${score}%`,
                                                backgroundColor: charInterp.color
                                            }}
                                        ></div>
                                    </div>
                                    <span className="char-score-value">{score.toFixed(0)}%</span>
                                </div>
                            );
                        })}
                    </div>

                    {isComplete() && (
                        <button
                            className="btn-generate-report"
                            onClick={() => onGeneratePDF && onGeneratePDF({
                                overallScore,
                                interpretation,
                                characteristicScores: Object.keys(iso25010Data).map(id => ({
                                    ...iso25010Data[id],
                                    score: getCharacteristicScore(id)
                                })),
                                responses
                            })}
                        >
                            <i className="fas fa-file-pdf"></i>
                            Generar Reporte PDF de Evaluación
                        </button>
                    )}
                </div>
            )}
        </div>
    );
}

export default ISO25010Evaluator;

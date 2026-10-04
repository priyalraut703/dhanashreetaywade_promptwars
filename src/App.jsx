import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { DecisionIntake } from './components/DecisionIntake';
import { AnalysisDashboard } from './components/AnalysisDashboard';
import { SettingsModal } from './components/SettingsModal';
import { PrintableAuditReport } from './components/PrintableAuditReport';
import { DECISION_PRESETS } from './data/presets';
import { analyzeWithGemini } from './services/aiEngine';

export default function App() {
  // Pre-fill with the Internship Dilemma from the Problem Statement
  const defaultPreset = DECISION_PRESETS[0];

  const [formData, setFormData] = useState({
    decision: defaultPreset.decision,
    factors: defaultPreset.factors,
    leaning: defaultPreset.leaning,
    assumptions: defaultPreset.assumptions,
    doubts: defaultPreset.doubts
  });

  const [selectedPresetId, setSelectedPresetId] = useState(defaultPreset.id);
  const [analysis, setAnalysis] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [apiKey, setApiKey] = useState(() => localStorage.getItem('blindspot_gemini_key') || '');
  const [selectedModel, setSelectedModel] = useState(() => localStorage.getItem('blindspot_gemini_model') || 'gemini-2.0-flash');
  const [view, setView] = useState('form'); // 'form' or 'analysis'

  const handleSaveApiKey = (newKey) => {
    setApiKey(newKey);
    localStorage.setItem('blindspot_gemini_key', newKey);
  };

  const handleSelectModel = (model) => {
    setSelectedModel(model);
    localStorage.setItem('blindspot_gemini_model', model);
  };

  const handleAnalyze = async () => {
    setIsLoading(true);
    try {
      const result = await analyzeWithGemini(formData, apiKey, selectedModel);
      setAnalysis(result);
      setView('analysis');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error("Analysis failure:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setView('form');
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header
        onOpenSettings={() => setIsSettingsOpen(true)}
        apiKey={apiKey}
        onReset={handleReset}
        onPrint={handlePrint}
        hasAnalysis={!!analysis && view === 'analysis'}
      />

      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        {view === 'form' ? (
          <DecisionIntake
            formData={formData}
            setFormData={setFormData}
            onAnalyze={handleAnalyze}
            isLoading={isLoading}
            selectedPresetId={selectedPresetId}
            onSelectPreset={setSelectedPresetId}
          />
        ) : (
          <AnalysisDashboard
            analysis={analysis}
            formData={formData}
            apiKey={apiKey}
            onBackToEdit={() => setView('form')}
            onPrint={handlePrint}
          />
        )}
      </main>

      {/* Printable Report for PDF Export */}
      <PrintableAuditReport analysis={analysis} formData={formData} />

      {/* Settings Modal */}
      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        apiKey={apiKey}
        onSaveApiKey={handleSaveApiKey}
        selectedModel={selectedModel}
        onSelectModel={handleSelectModel}
      />

      {/* Footer */}
      <footer className="no-print" style={{
        borderTop: '1px solid var(--border-subtle)',
        padding: '24px 20px',
        textAlign: 'center',
        background: 'rgba(8, 12, 20, 0.95)',
        fontSize: '0.8rem',
        color: 'var(--text-muted)'
      }}>
        <div style={{ maxWidth: '980px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px' }}>
          <div>
            <strong>The Blind Spot</strong> — AI Cognitive Mirror & Decision Forensics
          </div>
          <div>
            Built for critical thinking & epistemic clarity • Never makes the decision for you
          </div>
        </div>
      </footer>
    </div>
  );
}

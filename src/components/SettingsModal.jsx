import React, { useState } from 'react';
import { X, Key, Sparkles, Cpu, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';

export function SettingsModal({ 
  isOpen, 
  onClose, 
  apiKey, 
  onSaveApiKey,
  selectedModel,
  onSelectModel
}) {
  const [keyInput, setKeyInput] = useState(apiKey || '');
  const [model, setModel] = useState(selectedModel || 'gemini-2.0-flash');
  const [testStatus, setTestStatus] = useState(null); // 'testing', 'success', 'error'
  const [statusMsg, setStatusMsg] = useState('');

  if (!isOpen) return null;

  const handleSave = () => {
    onSaveApiKey(keyInput.trim());
    onSelectModel(model);
    onClose();
  };

  const handleClear = () => {
    setKeyInput('');
    onSaveApiKey('');
    setTestStatus(null);
    setStatusMsg('');
  };

  const handleTestKey = async () => {
    if (!keyInput.trim()) {
      setTestStatus('error');
      setStatusMsg('Please enter an API key first.');
      return;
    }

    setTestStatus('testing');
    setStatusMsg('Pinging Gemini API endpoint...');

    try {
      const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${keyInput.trim()}`;
      const res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ role: 'user', parts: [{ text: 'Test connection. Reply with "OK".' }] }]
        })
      });

      if (res.ok) {
        setTestStatus('success');
        setStatusMsg('Connection successful! Gemini API is active.');
      } else {
        const errorData = await res.json().catch(() => ({}));
        setTestStatus('error');
        setStatusMsg(`API returned error (${res.status}): ${errorData?.error?.message || 'Invalid API Key'}`);
      }
    } catch (err) {
      setTestStatus('error');
      setStatusMsg(`Connection failed: ${err.message}`);
    }
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: 'rgba(5, 8, 15, 0.8)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 100,
      padding: '20px'
    }}>
      <div className="glass-panel" style={{
        maxWidth: '560px',
        width: '100%',
        padding: '28px',
        borderRadius: 'var(--radius-xl)',
        background: '#0d1322',
        border: '1px solid rgba(255, 255, 255, 0.12)',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.8)'
      }}>
        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: 'rgba(99, 102, 241, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#a5b4fc'
            }}>
              <Key size={18} />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 700 }}>AI Intelligence Settings</h3>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                Configure live Gemini API or use built-in Cognitive Heuristics
              </p>
            </div>
          </div>
          <button 
            className="btn-ghost" 
            onClick={onClose} 
            style={{ padding: '6px', borderRadius: '50%' }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Engine Modes */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
          <div 
            onClick={() => {}}
            style={{
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              background: keyInput ? 'rgba(99, 102, 241, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${keyInput ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Sparkles size={16} color="#818cf8" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Live Google Gemini</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
              Uses Gemini 2.0 / 1.5 Flash for dynamic reasoning. Free API key from Google.
            </p>
          </div>

          <div 
            onClick={() => handleClear()}
            style={{
              padding: '14px',
              borderRadius: 'var(--radius-md)',
              background: !keyInput ? 'rgba(16, 185, 129, 0.12)' : 'rgba(255, 255, 255, 0.02)',
              border: `1px solid ${!keyInput ? 'var(--accent-emerald)' : 'var(--border-subtle)'}`,
              cursor: 'pointer'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
              <Cpu size={16} color="#10b981" />
              <span style={{ fontSize: '0.88rem', fontWeight: 600 }}>Built-in Engine</span>
            </div>
            <p style={{ margin: 0, fontSize: '0.74rem', color: 'var(--text-secondary)' }}>
              Zero setup required. Perfect for evaluators & offline evaluation.
            </p>
          </div>
        </div>

        {/* API Key Input */}
        <div style={{ marginBottom: '16px' }}>
          <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
            Google Gemini API Key (Optional)
          </label>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input 
              type="password"
              className="input-field"
              placeholder="AIzaSy..."
              value={keyInput}
              onChange={(e) => setKeyInput(e.target.value)}
              style={{ fontSize: '0.9rem', fontFamily: 'monospace' }}
            />
            {keyInput && (
              <button 
                className="btn-secondary"
                onClick={handleTestKey}
                disabled={testStatus === 'testing'}
                style={{ whiteSpace: 'nowrap', padding: '0 14px', fontSize: '0.82rem' }}
              >
                {testStatus === 'testing' ? 'Testing...' : 'Test'}
              </button>
            )}
          </div>
          <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              Keys are stored locally in your browser only.
            </span>
            <a 
              href="https://aistudio.google.com/app/apikey" 
              target="_blank" 
              rel="noreferrer"
              style={{ fontSize: '0.75rem', color: '#818cf8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '4px' }}
            >
              Get free Gemini Key <ExternalLink size={11} />
            </a>
          </div>
        </div>

        {/* Model Selector */}
        {keyInput && (
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 600, marginBottom: '8px' }}>
              Select Gemini Model
            </label>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['gemini-2.0-flash', 'gemini-1.5-flash'].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setModel(m)}
                  style={{
                    flex: 1,
                    padding: '8px 12px',
                    borderRadius: 'var(--radius-sm)',
                    background: model === m ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                    border: `1px solid ${model === m ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                    color: model === m ? '#ffffff' : 'var(--text-secondary)',
                    fontSize: '0.82rem',
                    cursor: 'pointer'
                  }}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Test Status Feedback */}
        {testStatus && (
          <div style={{
            padding: '10px 14px',
            borderRadius: 'var(--radius-sm)',
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '0.82rem',
            background: testStatus === 'success' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(244, 63, 94, 0.1)',
            border: `1px solid ${testStatus === 'success' ? 'rgba(16, 185, 129, 0.3)' : 'rgba(244, 63, 94, 0.3)'}`,
            color: testStatus === 'success' ? '#6ee7b7' : '#fda4af'
          }}>
            {testStatus === 'success' ? <CheckCircle2 size={16} /> : <AlertCircle size={16} />}
            <span>{statusMsg}</span>
          </div>
        )}

        {/* Modal Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '24px' }}>
          <button className="btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button className="btn-primary" onClick={handleSave}>
            Apply Settings
          </button>
        </div>
      </div>
    </div>
  );
}

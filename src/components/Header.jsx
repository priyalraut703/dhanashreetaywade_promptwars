import { Eye, ShieldCheck, Key, Sparkles, Printer, RefreshCw } from 'lucide-react';

export function Header({ 
  onOpenSettings, 
  apiKey, 
  onReset, 
  onPrint, 
  hasAnalysis 
}) {
  return (
    <header className="no-print" style={{
      borderBottom: '1px solid var(--border-subtle)',
      background: 'rgba(8, 12, 20, 0.85)',
      backdropFilter: 'blur(20px)',
      position: 'sticky',
      top: 0,
      zIndex: 40,
      padding: '14px 24px'
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '12px'
      }}>
        {/* Brand Logo & Tagline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={onReset}>
          <div style={{
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.45)',
            position: 'relative'
          }}>
            <Eye size={24} color="#ffffff" />
            <span style={{
              position: 'absolute',
              top: '-3px',
              right: '-3px',
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              background: '#06b6d4',
              boxShadow: '0 0 8px #06b6d4'
            }}></span>
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <h1 style={{ fontSize: '1.25rem', fontWeight: 800, letterSpacing: '-0.02em', margin: 0 }}>
                THE BLIND SPOT
              </h1>
              <span className="badge badge-indigo" style={{ fontSize: '0.68rem', padding: '2px 8px' }}>
                Cognitive Mirror
              </span>
            </div>
            <p style={{ margin: 0, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
              AI Decision Blind Spot Analyzer • Non-Decider Philosophy
            </p>
          </div>
        </div>

        {/* Cognitive Protocol Badge & Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            borderRadius: 'var(--radius-full)',
            padding: '5px 12px',
            fontSize: '0.76rem',
            color: '#6ee7b7'
          }} title="This AI will never make decisions for you. It strictly reveals what you may have overlooked.">
            <ShieldCheck size={14} color="#10b981" />
            <span style={{ fontWeight: 600 }}>Neutrality Protocol: Active</span>
          </div>

          {hasAnalysis && (
            <button 
              className="btn-secondary" 
              onClick={onPrint}
              style={{ padding: '7px 14px', fontSize: '0.82rem' }}
              title="Print or Save as PDF"
            >
              <Printer size={15} />
              <span>Export Audit</span>
            </button>
          )}

          <button 
            className="btn-secondary" 
            onClick={onOpenSettings}
            style={{ 
              padding: '7px 14px', 
              fontSize: '0.82rem',
              borderColor: apiKey ? 'rgba(16, 185, 129, 0.35)' : 'rgba(99, 102, 241, 0.35)'
            }}
          >
            <Key size={14} color={apiKey ? "#10b981" : "#a5b4fc"} />
            <span>{apiKey ? "Gemini 2.0 Connected" : "AI Engine Mode"}</span>
          </button>
        </div>
      </div>
    </header>
  );
}

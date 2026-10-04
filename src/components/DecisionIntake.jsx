import React, { useState } from 'react';
import { Sparkles, Compass, AlertCircle, ArrowRight, BookOpen, Layers, HelpCircle } from 'lucide-react';
import { DECISION_PRESETS } from '../data/presets';

export function DecisionIntake({
  formData,
  setFormData,
  onAnalyze,
  isLoading,
  selectedPresetId,
  onSelectPreset
}) {
  const [showTips, setShowTips] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handlePresetClick = (preset) => {
    onSelectPreset(preset.id);
    setFormData({
      decision: preset.decision,
      factors: preset.factors,
      leaning: preset.leaning,
      assumptions: preset.assumptions,
      doubts: preset.doubts
    });
  };

  const handleClear = () => {
    onSelectPreset(null);
    setFormData({
      decision: '',
      factors: '',
      leaning: '',
      assumptions: '',
      doubts: ''
    });
  };

  const isFormValid = formData.decision.trim().length > 5;

  return (
    <div style={{ maxWidth: '980px', margin: '0 auto', padding: '32px 16px' }}>
      {/* Hero Header */}
      <div style={{ textAlign: 'center', marginBottom: '36px' }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 16px',
          borderRadius: 'var(--radius-full)',
          background: 'rgba(99, 102, 241, 0.1)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          marginBottom: '16px'
        }}>
          <Compass size={16} color="#818cf8" />
          <span style={{ fontSize: '0.82rem', fontWeight: 600, color: '#c7d2fe' }}>
            Cognitive Blind Spot Detection Engine
          </span>
        </div>

        <h1 style={{
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          fontWeight: 800,
          lineHeight: 1.15,
          marginBottom: '16px'
        }}>
          Reveal What Your Reasoning <br />
          <span className="gradient-text-accent">Is Currently Overlooking</span>
        </h1>

        <p style={{
          fontSize: '1.05rem',
          color: 'var(--text-secondary)',
          maxWidth: '680px',
          margin: '0 auto 24px',
          lineHeight: 1.6
        }}>
          People make choices based on whatever information is most visible—a high stipend, short commute, or shiny title.
          We dissect your unstated premises, surface invisible risks, and stress-test your logic <strong style={{ color: '#ffffff' }}>without deciding for you.</strong>
        </p>

        {/* Preset Scenarios Selector */}
        <div style={{
          background: 'rgba(14, 21, 36, 0.75)',
          border: '1px solid var(--border-subtle)',
          borderRadius: 'var(--radius-lg)',
          padding: '16px',
          textAlign: 'left'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Select a Dilemma or Load Preset Scenario:
            </span>
            {selectedPresetId && (
              <button 
                className="btn-ghost" 
                onClick={handleClear}
                style={{ fontSize: '0.75rem', padding: '2px 8px' }}
              >
                Clear to Blank Canvas
              </button>
            )}
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '10px'
          }}>
            {DECISION_PRESETS.map((preset) => {
              const isSelected = selectedPresetId === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => handlePresetClick(preset)}
                  style={{
                    background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                    border: `1px solid ${isSelected ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '12px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    position: 'relative'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <span className="badge" style={{
                      fontSize: '0.65rem',
                      padding: '2px 6px',
                      background: preset.id === 'internship-dilemma' ? 'rgba(244, 63, 94, 0.2)' : 'rgba(99, 102, 241, 0.15)',
                      color: preset.id === 'internship-dilemma' ? '#fda4af' : '#a5b4fc',
                      border: 'none'
                    }}>
                      {preset.tag}
                    </span>
                  </div>
                  <h4 style={{ fontSize: '0.85rem', fontWeight: 700, margin: '0 0 4px', color: '#ffffff' }}>
                    {preset.title}
                  </h4>
                  <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.4 }}>
                    {preset.summary}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Decision Framing Form */}
      <div className="glass-panel" style={{ padding: '32px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <div>
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              Decision Framing Canvas
            </h2>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: '4px 0 0' }}>
              Articulate the dimensions of your decision to expose the unexamined gaps.
            </p>
          </div>
          <button 
            type="button" 
            className="btn-ghost" 
            onClick={() => setShowTips(!showTips)}
            style={{ fontSize: '0.8rem', color: '#a5b4fc' }}
          >
            <HelpCircle size={15} />
            <span>{showTips ? 'Hide Guidance' : 'Why this structure?'}</span>
          </button>
        </div>

        {showTips && (
          <div style={{
            background: 'rgba(99, 102, 241, 0.08)',
            border: '1px solid rgba(99, 102, 241, 0.2)',
            borderRadius: 'var(--radius-md)',
            padding: '14px 18px',
            marginBottom: '24px',
            fontSize: '0.82rem',
            color: '#c7d2fe',
            lineHeight: 1.6
          }}>
            <p style={{ margin: '0 0 6px', fontWeight: 600 }}>💡 Cognitive Science Principle: The WYSIATI Trap</p>
            Daniel Kahneman documented that the mind defaults to <em>"What You See Is All There Is"</em>. We evaluate the tangible data given to us (stipend, distance, job title) while remaining completely oblivious to missing counter-factuals. By separating visible factors from unstated assumptions, this canvas forces systemic reflection.
          </div>
        )}

        <form onSubmit={(e) => { e.preventDefault(); if (isFormValid) onAnalyze(); }}>
          {/* Field 1: The Decision */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
              1. The Specific Decision Dilemma <span style={{ color: 'var(--accent-rose)' }}>*</span>
            </label>
            <input
              type="text"
              className="input-field"
              placeholder="e.g. Should I accept a 6-month full-time internship while continuing my final college semester?"
              value={formData.decision}
              onChange={(e) => handleInputChange('decision', e.target.value)}
              required
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
              State the exact fork in the road as a clear question.
            </span>
          </div>

          {/* Field 2: Visible Factors */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
              2. Visible Context & Available Data Points
            </label>
            <textarea
              className="input-field"
              placeholder="Stipend: ₹40,000/mo, Commute: 15 mins, Working hours: 9am-6pm, Role: Frontend, College constraint: 75% attendance rule..."
              rows={4}
              value={formData.factors}
              onChange={(e) => handleInputChange('factors', e.target.value)}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
              What concrete numbers, terms, or conditions are currently visible to you?
            </span>
          </div>

          {/* Field 3: Primary Leaning */}
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', fontSize: '0.9rem', fontWeight: 700, marginBottom: '8px' }}>
              3. Current Leaning & Stated Rationalization
            </label>
            <textarea
              className="input-field"
              placeholder="e.g. I am leaning towards accepting because the money is great for a student, the office is close to home, and corporate experience will look great on my resume..."
              rows={3}
              value={formData.leaning}
              onChange={(e) => handleInputChange('leaning', e.target.value)}
            />
            <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
              Why does this option feel attractive to you right now? What makes you want to say yes (or no)?
            </span>
          </div>

          {/* Grid: Assumptions & Doubts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px', marginBottom: '28px' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                4. Implicit / Stated Assumptions
              </label>
              <textarea
                className="input-field"
                placeholder="e.g. I assume college professors will understand; I assume 15 min commute means I won't be tired at night; I assume I'll get mentorship..."
                rows={3}
                value={formData.assumptions}
                onChange={(e) => handleInputChange('assumptions', e.target.value)}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                What are you taking for granted as true?
              </span>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.88rem', fontWeight: 700, marginBottom: '8px' }}>
                5. Lingering Unease or Suppressed Doubts
              </label>
              <textarea
                className="input-field"
                placeholder="e.g. What if exam dates clash with production release? What if the work is just repetitive legacy bug fixing?..."
                rows={3}
                value={formData.doubts}
                onChange={(e) => handleInputChange('doubts', e.target.value)}
              />
              <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>
                What gut feeling or hesitation have you been brushing aside?
              </span>
            </div>
          </div>

          {/* Submit Action */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
              <Layers size={16} color="#818cf8" />
              <span>Runs multi-dimensional cognitive diagnostic & pre-mortem simulation</span>
            </div>

            <button
              type="submit"
              className="btn-primary"
              disabled={!isFormValid || isLoading}
              style={{
                padding: '14px 32px',
                fontSize: '1rem',
                minWidth: '240px'
              }}
            >
              {isLoading ? (
                <>
                  <div className="spinning" style={{ width: '18px', height: '18px', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%' }}></div>
                  <span>Scanning Blind Spots...</span>
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  <span>Illuminate Blind Spots</span>
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

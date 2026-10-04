import React, { useState } from 'react';
import { 
  Eye, AlertTriangle, ShieldCheck, Clock, Brain, Skull, 
  Users, MessageSquare, CheckSquare, ArrowLeft, Printer,
  Sparkles, ExternalLink, HelpCircle, ChevronRight, CheckCircle2,
  RefreshCw, CornerDownRight
} from 'lucide-react';
import { evaluateSocraticAnswer } from '../services/aiEngine';

export function AnalysisDashboard({
  analysis,
  formData,
  apiKey,
  onBackToEdit,
  onPrint
}) {
  const [activeTab, setActiveTab] = useState('assumptions');
  const [socraticAnswers, setSocraticAnswers] = useState({});
  const [socraticFeedback, setSocraticFeedback] = useState({});
  const [loadingQuestionId, setLoadingQuestionId] = useState(null);
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleAnswerChange = (qId, text) => {
    setSocraticAnswers(prev => ({ ...prev, [qId]: text }));
  };

  const handleStressTestAnswer = async (question) => {
    const userAnswer = socraticAnswers[question.id];
    if (!userAnswer || userAnswer.trim() === '') return;

    setLoadingQuestionId(question.id);
    try {
      const feedback = await evaluateSocraticAnswer(question, userAnswer, formData, apiKey);
      setSocraticFeedback(prev => ({ ...prev, [question.id]: feedback }));
    } catch (err) {
      console.error(err);
    } finally {
      setLoadingQuestionId(null);
    }
  };

  const tabs = [
    { id: 'assumptions', label: 'Hidden Assumptions', icon: AlertTriangle, count: analysis.unstatedAssumptions?.length },
    { id: 'overlooked', label: 'Overlooked Factors', icon: Eye, count: analysis.overlookedFactors?.length },
    { id: 'timeline', label: 'Second-Order Ripple', icon: Clock, count: analysis.secondOrderConsequences?.length },
    { id: 'biases', label: 'Cognitive Biases', icon: Brain, count: analysis.cognitiveBiases?.length },
    { id: 'premortem', label: 'Pre-Mortem Simulation', icon: Skull, count: null },
    { id: 'personas', label: 'Contrarian Personas', icon: Users, count: analysis.contrarianPersonas?.length },
    { id: 'socratic', label: 'Socratic Sparring', icon: MessageSquare, count: analysis.socraticInquiries?.length },
    { id: 'checklist', label: 'Action Checklist', icon: CheckSquare, count: analysis.preDecisionChecklist?.length }
  ];

  return (
    <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '24px 16px 80px' }}>
      {/* Top Navigation & Return */}
      <div className="no-print" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <button className="btn-secondary" onClick={onBackToEdit} style={{ fontSize: '0.85rem' }}>
          <ArrowLeft size={16} />
          <span>Edit Decision Inputs</span>
        </button>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button className="btn-secondary" onClick={onPrint} style={{ fontSize: '0.85rem' }}>
            <Printer size={16} />
            <span>Print / Save Audit PDF</span>
          </button>
        </div>
      </div>

      {/* Decision Summary & Clarity Banner */}
      <div className="glass-panel" style={{ padding: '28px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '1 1 500px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <span className="badge badge-indigo">Decision Dilemma Under Audit</span>
              <span className="badge badge-emerald">Cognitive Neutrality Enforced</span>
            </div>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 10px', color: '#ffffff' }}>
              {analysis.decisionSummary}
            </h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0 }}>
              <strong style={{ color: '#cbd5e1' }}>Stated Motivation: </strong>
              {analysis.primaryMotivation}
            </p>
          </div>

          {/* Clarity Radar Metric */}
          <div style={{
            background: 'rgba(14, 21, 36, 0.9)',
            border: '1px solid var(--border-medium)',
            borderRadius: 'var(--radius-lg)',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: '20px',
            minWidth: '280px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '50%',
                background: 'conic-gradient(#6366f1 0% 60%, rgba(255,255,255,0.08) 60% 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 6px',
                padding: '4px'
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  background: 'var(--bg-secondary)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column'
                }}>
                  <span style={{ fontSize: '1.15rem', fontWeight: 800, color: '#ffffff' }}>
                    {analysis.clarityScore}
                  </span>
                  <span style={{ fontSize: '0.55rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    / 100
                  </span>
                </div>
              </div>
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase' }}>
                Clarity Index
              </span>
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '2px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Assumption Fragility</span>
                  <span style={{ color: '#f87171', fontWeight: 700 }}>{analysis.clarityBreakdown?.assumptionFragility}% High</span>
                </div>
                <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${analysis.clarityBreakdown?.assumptionFragility}%`, height: '100%', background: '#ef4444' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '2px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Peripheral Vision</span>
                  <span style={{ color: '#fbbf24', fontWeight: 700 }}>{analysis.clarityBreakdown?.peripheralAwareness}% Narrow</span>
                </div>
                <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${analysis.clarityBreakdown?.peripheralAwareness}%`, height: '100%', background: '#f59e0b' }}></div>
                </div>
              </div>

              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem', marginBottom: '2px' }}>
                  <span style={{ color: 'var(--text-secondary)' }}>Cognitive Bias Load</span>
                  <span style={{ color: '#a78bfa', fontWeight: 700 }}>{analysis.clarityBreakdown?.biasSusceptibility}% Heavy</span>
                </div>
                <div style={{ width: '100%', height: '5px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                  <div style={{ width: `${analysis.clarityBreakdown?.biasSusceptibility}%`, height: '100%', background: '#8b5cf6' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* The Fundamental Core Tension */}
        <div style={{
          marginTop: '20px',
          padding: '14px 18px',
          borderRadius: 'var(--radius-md)',
          background: 'rgba(99, 102, 241, 0.08)',
          border: '1px solid rgba(99, 102, 241, 0.25)',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '12px'
        }}>
          <Sparkles size={20} color="#818cf8" style={{ marginTop: '2px', flexShrink: 0 }} />
          <div>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
              The Core Unresolved Tension
            </span>
            <p style={{ margin: '3px 0 0', fontSize: '0.92rem', color: '#e0e7ff', fontWeight: 500, lineHeight: 1.5 }}>
              {analysis.coreTension}
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Tabs Navigation */}
      <div className="no-print" style={{
        display: 'flex',
        gap: '6px',
        overflowX: 'auto',
        paddingBottom: '10px',
        marginBottom: '20px'
      }}>
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                borderRadius: 'var(--radius-md)',
                background: isActive ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${isActive ? 'var(--accent-primary)' : 'var(--border-subtle)'}`,
                color: isActive ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.84rem',
                fontWeight: isActive ? 600 : 500,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                transition: 'all 0.2s ease'
              }}
            >
              <Icon size={16} color={isActive ? "#818cf8" : "currentColor"} />
              <span>{tab.label}</span>
              {tab.count !== null && (
                <span style={{
                  background: isActive ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)',
                  padding: '1px 6px',
                  borderRadius: '10px',
                  fontSize: '0.7rem',
                  fontWeight: 700
                }}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Tab 1: Hidden Assumptions */}
      {activeTab === 'assumptions' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Unstated Assumptions Audit
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              These are foundational beliefs your decision relies upon as 'given', which may crumble under real-world pressure.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {analysis.unstatedAssumptions?.map((assump, idx) => {
              const fragilityColor = assump.fragility === 'Critical' ? '#f43f5e' : assump.fragility === 'High' ? '#f59e0b' : '#38bdf8';
              return (
                <div key={assump.id || idx} className="glass-panel" style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '10px', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        background: 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        color: 'var(--text-secondary)'
                      }}>
                        {idx + 1}
                      </span>
                      <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                        {assump.statement}
                      </h4>
                    </div>

                    <span className="badge" style={{
                      background: `${fragilityColor}22`,
                      color: fragilityColor,
                      border: `1px solid ${fragilityColor}55`
                    }}>
                      Fragility: {assump.fragility}
                    </span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px', marginBottom: '16px' }}>
                    <div style={{ background: 'rgba(0, 0, 0, 0.25)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        What You Implicitly Assumed:
                      </span>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#e2e8f0', lineHeight: 1.5 }}>
                        "{assump.userBelief}"
                      </p>
                    </div>

                    <div style={{ background: 'rgba(244, 63, 94, 0.06)', border: '1px solid rgba(244, 63, 94, 0.18)', padding: '14px', borderRadius: 'var(--radius-md)' }}>
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fda4af', textTransform: 'uppercase' }}>
                        The Hidden Blind Spot:
                      </span>
                      <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#fecdd3', lineHeight: 1.5 }}>
                        {assump.blindSpot}
                      </p>
                    </div>
                  </div>

                  {/* Stress Test & Verification Action */}
                  <div style={{
                    borderTop: '1px solid var(--border-subtle)',
                    paddingTop: '14px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                      <CornerDownRight size={16} color="#fbbf24" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <div style={{ fontSize: '0.82rem' }}>
                        <strong style={{ color: '#fde68a' }}>The Piercing Question: </strong>
                        <span style={{ color: '#f1f5f9' }}>{assump.stressTestQuestion}</span>
                      </div>
                    </div>

                    <div style={{
                      background: 'rgba(16, 185, 129, 0.08)',
                      border: '1px solid rgba(16, 185, 129, 0.2)',
                      borderRadius: 'var(--radius-sm)',
                      padding: '8px 12px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '8px',
                      fontSize: '0.8rem'
                    }}>
                      <CheckCircle2 size={16} color="#10b981" style={{ marginTop: '1px', flexShrink: 0 }} />
                      <div>
                        <strong style={{ color: '#6ee7b7' }}>How to verify before deciding: </strong>
                        <span style={{ color: '#d1fae5' }}>{assump.verificationAction}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Overlooked Factors */}
      {activeTab === 'overlooked' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Peripheral Blind Spots (Overlooked Factors)
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              These crucial factors were masked by the focal spotlight of your immediate incentives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '16px' }}>
            {analysis.overlookedFactors?.map((factor, idx) => (
              <div key={factor.id || idx} className="glass-panel" style={{ padding: '22px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span className="badge badge-indigo" style={{ fontSize: '0.68rem' }}>
                    {factor.category}
                  </span>
                  <span className="badge badge-rose" style={{ fontSize: '0.68rem' }}>
                    Impact: {factor.potentialImpact}
                  </span>
                </div>

                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, margin: '0 0 10px', color: '#ffffff' }}>
                  {factor.factor}
                </h4>

                <div style={{ marginBottom: '14px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                    Why It Slipped Under Your Radar:
                  </span>
                  <p style={{ margin: '3px 0 0', fontSize: '0.84rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>
                    {factor.whyOverlooked}
                  </p>
                </div>

                <div style={{
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  borderRadius: 'var(--radius-md)',
                  padding: '12px 14px'
                }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#a5b4fc', textTransform: 'uppercase' }}>
                    Critical Inquiry To Make:
                  </span>
                  <p style={{ margin: '4px 0 0', fontSize: '0.84rem', color: '#e0e7ff', fontWeight: 500, lineHeight: 1.45 }}>
                    "{factor.inquiryPrompt}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Second-Order Consequences */}
      {activeTab === 'timeline' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Ripple Effects Matrix (1st vs 2nd vs 3rd Order)
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              First-order consequences feel great immediately. Second- and third-order consequences determine your destiny.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {analysis.secondOrderConsequences?.map((stage, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '8px',
                    background: idx === 0 ? 'rgba(16, 185, 129, 0.15)' : idx === 1 ? 'rgba(245, 158, 11, 0.15)' : 'rgba(244, 63, 94, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: idx === 0 ? '#6ee7b7' : idx === 1 ? '#fcd34d' : '#fda4af',
                    fontWeight: 800,
                    fontSize: '0.9rem'
                  }}>
                    {idx + 1}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                      {stage.timeline}
                    </h4>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '14px' }}>
                  <div style={{
                    background: 'rgba(16, 185, 129, 0.05)',
                    border: '1px solid rgba(16, 185, 129, 0.15)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px'
                  }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase' }}>
                      Visible Surface Reality:
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#ecfdf5', lineHeight: 1.5 }}>
                      {stage.visibleReality}
                    </p>
                  </div>

                  <div style={{
                    background: 'rgba(244, 63, 94, 0.06)',
                    border: '1px solid rgba(244, 63, 94, 0.18)',
                    borderRadius: 'var(--radius-md)',
                    padding: '14px'
                  }}>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fda4af', textTransform: 'uppercase' }}>
                      Hidden Underlying Friction & Risk:
                    </span>
                    <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#ffe4e6', lineHeight: 1.5 }}>
                      {stage.hiddenFriction}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Cognitive Biases */}
      {activeTab === 'biases' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Cognitive Distortions Operating in Your Reasoning
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              Recognizing these mental shortcuts strips away emotional distortion and restores clarity.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {analysis.cognitiveBiases?.map((bias, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '22px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Brain size={18} color="#a855f7" />
                  <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, color: '#ffffff' }}>
                    {bias.name}
                  </h4>
                </div>

                <div style={{
                  background: 'rgba(0, 0, 0, 0.25)',
                  padding: '10px 12px',
                  borderRadius: 'var(--radius-sm)',
                  fontSize: '0.78rem',
                  color: 'var(--text-secondary)',
                  marginBottom: '12px'
                }}>
                  <strong>Definition: </strong>{bias.definition}
                </div>

                <div>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase' }}>
                    How It Affects This Specific Decision:
                  </span>
                  <p style={{ margin: '4px 0 0', fontSize: '0.85rem', color: '#f3e8ff', lineHeight: 1.5 }}>
                    {bias.manifestation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 5: Pre-Mortem Simulation */}
      {activeTab === 'premortem' && (
        <div className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '12px',
              background: 'rgba(244, 63, 94, 0.15)',
              border: '1px solid rgba(244, 63, 94, 0.3)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fda4af'
            }}>
              <Skull size={22} />
            </div>
            <div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: 0, color: '#ffffff' }}>
                Failure Forensics: The 6-Month Pre-Mortem
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: 0 }}>
                Gary Klein’s Nobel-grade technique: assume total failure in advance to preempt the disaster.
              </p>
            </div>
          </div>

          <div style={{
            background: 'rgba(244, 63, 94, 0.08)',
            border: '1px solid rgba(244, 63, 94, 0.25)',
            borderRadius: 'var(--radius-md)',
            padding: '16px 20px',
            marginBottom: '24px'
          }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fda4af', textTransform: 'uppercase' }}>
              The Hypothetical Catastrophe Scenario:
            </span>
            <p style={{ margin: '6px 0 0', fontSize: '0.95rem', color: '#ffe4e6', fontWeight: 600, lineHeight: 1.5 }}>
              "{analysis.preMortemAnalysis?.scenario}"
            </p>
          </div>

          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '10px' }}>
              Anatomy of the Failure Cascade:
            </h4>
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-md)',
              padding: '18px',
              fontSize: '0.9rem',
              color: '#f1f5f9',
              lineHeight: 1.65
            }}>
              {analysis.preMortemAnalysis?.failureNarrative}
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '0.92rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase', marginBottom: '12px' }}>
              Preventative Safeguards & Circuit-Breakers:
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {analysis.preMortemAnalysis?.preventativeSafeguards?.map((shield, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px',
                  background: 'rgba(16, 185, 129, 0.06)',
                  border: '1px solid rgba(16, 185, 129, 0.2)',
                  borderRadius: 'var(--radius-sm)',
                  padding: '12px 16px',
                  fontSize: '0.86rem',
                  color: '#d1fae5'
                }}>
                  <ShieldCheck size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                  <span>{shield}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tab 6: Contrarian Personas */}
      {activeTab === 'personas' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              The Council of Contrarians
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              Hear the uncomfortable truths from alternate vantage points with distinct incentives.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '16px' }}>
            {analysis.contrarianPersonas?.map((persona, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '22px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span className="badge badge-indigo">
                      {persona.persona}
                    </span>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      {persona.focus}
                    </span>
                  </div>

                  <p style={{
                    fontSize: '0.92rem',
                    color: '#f8fafc',
                    lineHeight: 1.6,
                    fontStyle: 'italic',
                    margin: '0 0 16px',
                    position: 'relative',
                    paddingLeft: '14px',
                    borderLeft: '3px solid var(--accent-primary)'
                  }}>
                    "{persona.quote}"
                  </p>
                </div>

                <div style={{
                  fontSize: '0.75rem',
                  color: 'var(--text-secondary)',
                  borderTop: '1px solid var(--border-subtle)',
                  paddingTop: '10px'
                }}>
                  Forces focus on: <strong style={{ color: '#c7d2fe' }}>{persona.focus}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 7: Socratic Sparring Arena */}
      {activeTab === 'socratic' && (
        <div>
          <div style={{ marginBottom: '16px' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: '0 0 4px' }}>
              Interactive Socratic Sparring Arena
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              Type your honest response to these piercing questions. The AI will challenge whether your answer is rigorous or just another rationalization.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {analysis.socraticInquiries?.map((item, idx) => {
              const qId = item.id || `q-${idx}`;
              const currentAnswer = socraticAnswers[qId] || '';
              const feedback = socraticFeedback[qId];
              const isLoading = loadingQuestionId === qId;

              return (
                <div key={qId} className="glass-panel" style={{ padding: '22px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: '14px' }}>
                    <div style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '8px',
                      background: 'rgba(99, 102, 241, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#a5b4fc',
                      fontWeight: 700,
                      fontSize: '0.85rem',
                      flexShrink: 0
                    }}>
                      {idx + 1}
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', color: '#ffffff' }}>
                        {item.question}
                      </h4>
                      <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: 0 }}>
                        <strong>Diagnostic Purpose: </strong>{item.purpose}
                      </p>
                    </div>
                  </div>

                  {/* Interactive User Answer Field */}
                  <div style={{ marginBottom: '12px' }}>
                    <textarea
                      className="input-field"
                      placeholder="Type your authentic response or reasoning here to stress-test it..."
                      rows={2}
                      value={currentAnswer}
                      onChange={(e) => handleAnswerChange(qId, e.target.value)}
                    />
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: feedback ? '14px' : '0' }}>
                    <button
                      type="button"
                      className="btn-primary"
                      disabled={!currentAnswer.trim() || isLoading}
                      onClick={() => handleStressTestAnswer(item)}
                      style={{ padding: '7px 16px', fontSize: '0.82rem' }}
                    >
                      {isLoading ? (
                        <>
                          <div className="spinning" style={{ width: '14px', height: '14px', border: '2px solid #ffffff', borderTopColor: 'transparent', borderRadius: '50%' }}></div>
                          <span>Stress-Testing Your Reasoning...</span>
                        </>
                      ) : (
                        <>
                          <Sparkles size={14} />
                          <span>Stress-Test My Answer</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* AI Sparring Friction Output */}
                  {feedback && (
                    <div style={{
                      background: 'rgba(15, 23, 42, 0.95)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: 'var(--radius-md)',
                      padding: '16px',
                      marginTop: '12px'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Brain size={16} color="#c084fc" />
                        <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#e9d5ff', textTransform: 'uppercase' }}>
                          Socratic Friction Analysis:
                        </span>
                      </div>

                      <p style={{ margin: '0 0 10px', fontSize: '0.85rem', color: '#f8fafc', lineHeight: 1.5 }}>
                        {feedback.critique}
                      </p>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '10px' }}>
                        <div style={{ background: 'rgba(244, 63, 94, 0.08)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#fda4af', textTransform: 'uppercase' }}>
                            Unresolved Risk:
                          </span>
                          <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#ffe4e6' }}>
                            {feedback.unresolvedRisk}
                          </p>
                        </div>

                        <div style={{ background: 'rgba(16, 185, 129, 0.08)', padding: '10px', borderRadius: 'var(--radius-sm)' }}>
                          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: '#6ee7b7', textTransform: 'uppercase' }}>
                            Recommended Behavioral Check:
                          </span>
                          <p style={{ margin: '2px 0 0', fontSize: '0.8rem', color: '#d1fae5' }}>
                            {feedback.recommendation}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 8: Pre-Decision Checklist */}
      {activeTab === 'checklist' && (
        <div className="glass-panel" style={{ padding: '28px' }}>
          <div style={{ marginBottom: '20px' }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 800, margin: '0 0 6px', color: '#ffffff' }}>
              Pre-Decision Verification Protocol
            </h3>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', margin: 0 }}>
              Before signing, committing, or making any irreversible move, complete these concrete verification steps.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {analysis.preDecisionChecklist?.map((item, idx) => (
              <label 
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  padding: '14px 18px',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  lineHeight: 1.5,
                  transition: 'background 0.2s ease'
                }}
              >
                <input 
                  type="checkbox" 
                  style={{ marginTop: '4px', width: '16px', height: '16px', accentColor: 'var(--accent-primary)', cursor: 'pointer' }}
                />
                <span style={{ color: '#f1f5f9' }}>{item}</span>
              </label>
            ))}
          </div>

          <div style={{
            marginTop: '28px',
            padding: '16px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(16, 185, 129, 0.08)',
            border: '1px solid rgba(16, 185, 129, 0.25)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '14px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <ShieldCheck size={20} color="#10b981" />
              <span style={{ fontSize: '0.85rem', color: '#d1fae5', fontWeight: 500 }}>
                Remember: The system does not decide for you. You now hold 360° visibility.
              </span>
            </div>
            <button className="btn-primary" onClick={onPrint} style={{ padding: '8px 18px', fontSize: '0.82rem' }}>
              <Printer size={15} />
              <span>Export Decision Audit</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

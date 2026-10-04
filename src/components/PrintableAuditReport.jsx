import React from 'react';
import { Eye, ShieldCheck, CheckSquare, AlertTriangle, Clock, Skull, Brain } from 'lucide-react';

export function PrintableAuditReport({ analysis, formData }) {
  if (!analysis) return null;

  return (
    <div className="printable-report" style={{ display: 'none' }}>
      <style>{`
        @media print {
          .printable-report {
            display: block !important;
            padding: 30px;
            color: #0f172a;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #ffffff;
          }
          .report-header {
            border-bottom: 2px solid #0f172a;
            padding-bottom: 15px;
            margin-bottom: 25px;
          }
          .section-title {
            font-size: 14pt;
            font-weight: 700;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 5px;
            margin-top: 25px;
            margin-bottom: 12px;
            color: #1e293b;
          }
          .card-box {
            border: 1px solid #e2e8f0;
            padding: 12px;
            border-radius: 6px;
            margin-bottom: 12px;
            page-break-inside: avoid;
          }
          .table-clean {
            width: 100%;
            border-collapse: collapse;
            margin-bottom: 15px;
          }
          .table-clean th, .table-clean td {
            border: 1px solid #e2e8f0;
            padding: 8px 10px;
            font-size: 10pt;
            text-align: left;
          }
          .table-clean th {
            background: #f8fafc;
            font-weight: 600;
          }
        }
      `}</style>

      <div className="report-header">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <h1 style={{ fontSize: '20pt', margin: 0, fontWeight: 800 }}>THE BLIND SPOT</h1>
            <p style={{ margin: '4px 0 0', fontSize: '10pt', color: '#64748b' }}>
              Cognitive Blind Spot Audit & Decision Forensics Report
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <span style={{ fontSize: '9pt', fontWeight: 600, padding: '4px 8px', border: '1px solid #10b981', color: '#047857', borderRadius: '4px' }}>
              NON-DECIDER PROTOCOL CERTIFIED
            </span>
            <p style={{ margin: '4px 0 0', fontSize: '9pt', color: '#64748b' }}>
              Date: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: '14pt', margin: '0 0 6px' }}>Decision Dilemma:</h2>
        <p style={{ fontSize: '12pt', fontWeight: 600, color: '#1e293b', margin: '0 0 12px' }}>
          {analysis.decisionSummary}
        </p>
        <p style={{ fontSize: '10pt', color: '#475569', margin: '0 0 16px' }}>
          <strong>Stated Leaning: </strong>{analysis.primaryMotivation}
        </p>
      </div>

      <div className="card-box" style={{ background: '#f8fafc' }}>
        <h3 style={{ fontSize: '11pt', margin: '0 0 6px', color: '#4338ca' }}>Core Unresolved Tension:</h3>
        <p style={{ fontSize: '10pt', margin: 0, color: '#1e293b' }}>
          {analysis.coreTension}
        </p>
        <p style={{ fontSize: '9pt', color: '#64748b', marginTop: '6px' }}>
          Overall Clarity Index: <strong>{analysis.clarityScore}/100</strong> | Assumption Fragility: <strong>{analysis.clarityBreakdown?.assumptionFragility}%</strong>
        </p>
      </div>

      <div className="section-title">1. High-Fragility Unstated Assumptions</div>
      <table className="table-clean">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Assumption</th>
            <th style={{ width: '40%' }}>Hidden Blind Spot</th>
            <th style={{ width: '25%' }}>Verification Test</th>
            <th style={{ width: '10%' }}>Fragility</th>
          </tr>
        </thead>
        <tbody>
          {analysis.unstatedAssumptions?.map((a, i) => (
            <tr key={i}>
              <td><strong>{a.statement}</strong><br /><small style={{ color: '#64748b' }}>"{a.userBelief}"</small></td>
              <td>{a.blindSpot}</td>
              <td>{a.verificationAction}</td>
              <td><span style={{ color: a.fragility === 'Critical' ? '#e11d48' : '#d97706', fontWeight: 600 }}>{a.fragility}</span></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="section-title">2. Overlooked Peripheral Factors</div>
      <table className="table-clean">
        <thead>
          <tr>
            <th style={{ width: '25%' }}>Category & Factor</th>
            <th style={{ width: '45%' }}>Why Overlooked</th>
            <th style={{ width: '30%' }}>Investigation Inquiry</th>
          </tr>
        </thead>
        <tbody>
          {analysis.overlookedFactors?.map((f, i) => (
            <tr key={i}>
              <td><strong>{f.factor}</strong><br /><small style={{ color: '#4338ca' }}>{f.category}</small></td>
              <td>{f.whyOverlooked}</td>
              <td><em>"{f.inquiryPrompt}"</em></td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="section-title">3. Ripple Effects Timeline</div>
      <table className="table-clean">
        <thead>
          <tr>
            <th style={{ width: '20%' }}>Horizon</th>
            <th style={{ width: '40%' }}>Surface Reality</th>
            <th style={{ width: '40%' }}>Compounding Latent Friction</th>
          </tr>
        </thead>
        <tbody>
          {analysis.secondOrderConsequences?.map((s, i) => (
            <tr key={i}>
              <td><strong>{s.timeline}</strong></td>
              <td>{s.visibleReality}</td>
              <td>{s.hiddenFriction}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="section-title">4. Failure Forensics (6-Month Pre-Mortem)</div>
      <div className="card-box" style={{ background: '#fff1f2', borderColor: '#fecdd3' }}>
        <p style={{ fontSize: '10pt', color: '#9f1239', fontWeight: 600, margin: '0 0 6px' }}>
          "{analysis.preMortemAnalysis?.scenario}"
        </p>
        <p style={{ fontSize: '9pt', color: '#334155', margin: '0 0 10px', lineHeight: 1.5 }}>
          {analysis.preMortemAnalysis?.failureNarrative}
        </p>
        <p style={{ fontSize: '9pt', fontWeight: 700, margin: '0 0 4px', color: '#047857' }}>
          Preventative Safeguards:
        </p>
        <ul style={{ margin: 0, paddingLeft: '20px', fontSize: '9pt', color: '#1e293b' }}>
          {analysis.preMortemAnalysis?.preventativeSafeguards?.map((sh, idx) => (
            <li key={idx}>{sh}</li>
          ))}
        </ul>
      </div>

      <div className="section-title">5. Pre-Decision Verification Checklist</div>
      <ul style={{ paddingLeft: '20px', fontSize: '10pt', lineHeight: 1.6 }}>
        {analysis.preDecisionChecklist?.map((chk, i) => (
          <li key={i}>{chk}</li>
        ))}
      </ul>

      <div style={{ marginTop: '30px', borderTop: '1px solid #cbd5e1', paddingTop: '10px', fontSize: '8pt', color: '#94a3b8', textAlign: 'center' }}>
        Generated by The Blind Spot AI • Empowers critical reasoning without deciding for you.
      </div>
    </div>
  );
}

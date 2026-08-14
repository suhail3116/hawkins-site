import React from 'react';
import { ShieldCheck, Lock, Flame, ShieldAlert, CheckCircle2 } from 'lucide-react';

export const SafetyShowcase: React.FC = () => {
  return (
    <section id="safety" className="section-padding" style={{ background: 'radial-gradient(circle at 30% 50%, #171A24 0%, #0B0D12 100%)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="container">
        
        {/* Section Title */}
        <div className="section-title">
          <div className="tagline-pill" style={{ borderColor: 'rgba(212, 175, 55, 0.4)', color: 'var(--gold-accent)', background: 'var(--gold-bg)' }}>
            Patented Engineering
          </div>
          <h2>Why Hawkins is India's Safest Pressure Cooker</h2>
          <p>Over 60 years of continuous safety innovations protect your family while cooking meals in half the time.</p>
        </div>

        {/* 4 Tech Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '24px' }}>
          
          {/* Card 1 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--primary-light)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Lock size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '10px' }}>Inside-Fitting Pressure Lid</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Inspired by jet airliner door design, the lid is placed inside the body. Internal steam pressure locks the lid tight—it <strong>cannot be opened until pressure drops to zero</strong>.
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'var(--gold-bg)', color: 'var(--gold-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <ShieldAlert size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '10px' }}>Shielded Safety Valve</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Positioned underneath the handle handlebar. If excess pressure builds up, the fusable alloy melts safely and releases steam downwards—protecting your face and eyes.
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(16, 185, 129, 0.15)', color: '#34D399', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <Flame size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '10px' }}>Better Pressure Regulation</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Precision calibrated vent weight maintains 15 lbs/sq inch (1.0 kg/cm²) pressure accurately. Regulates steam smoothly to conserve fuel and prevent water evaporation.
            </p>
          </div>

          {/* Card 4 */}
          <div className="glass-card" style={{ padding: '28px' }}>
            <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(226, 232, 240, 0.1)', color: 'var(--steel-accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
              <ShieldCheck size={24} />
            </div>
            <h3 style={{ fontSize: '1.25rem', color: '#FFF', marginBottom: '10px' }}>100% Tested Safety Valve</h3>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
              Every single pressure cooker manufactured by Hawkins is individual pressure tested and leak-inspected before leaving our factory.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

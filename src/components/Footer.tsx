import React from 'react';
import { FileText, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#07080B', borderTop: '1px solid rgba(255,255,255,0.08)', color: 'var(--text-muted)', paddingTop: '60px', paddingBottom: '32px' }}>
      <div className="container">
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '40px', marginBottom: '48px' }}>
          
          {/* Col 1: Brand Info */}
          <div>
            <div style={{
              background: 'var(--primary)',
              color: '#FFF',
              padding: '6px 14px',
              borderRadius: '6px',
              fontFamily: 'Plus Jakarta Sans',
              fontWeight: 900,
              fontSize: '1.3rem',
              display: 'inline-block',
              marginBottom: '16px'
            }}>
              HAWKINS
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Hawkins Cookers Limited is a pioneer in pressure cooker and cookware manufacturing. Trusted in over 40 countries worldwide since 1959.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--gold-accent)', fontSize: '0.8rem', fontWeight: 600 }}>
              <ShieldCheck size={16} /> 100% Authentic Quality Guaranteed
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: '16px' }}>Product Ranges</h4>
            <ul style={{ listStyle: 'none', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Classic Aluminum Series</a></li>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Contura Black Hard Anodised</a></li>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Stainless Steel 18/8 Series</a></li>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Tri-Ply Full Body Clad</a></li>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Futura MoMA Design Range</a></li>
              <li><a href="#catalog" style={{ color: 'inherit' }}>Bigboy Commercial (Up to 30L)</a></li>
            </ul>
          </div>

          {/* Col 3: Official Catalog & Warranty */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: '16px' }}>Downloads & Support</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a 
                href="/PriceList.pdf" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-outline" 
                style={{ justifyContent: 'flex-start', padding: '10px 16px', fontSize: '0.85rem' }}
              >
                <FileText size={16} color="var(--primary)" /> Hawkins Price List (PDF)
              </a>

              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                <strong>Warranty Claim & Spare Parts:</strong><br />
                Over 700 Authorized Service Centers across India.
              </div>
            </div>
          </div>

          {/* Col 4: Corporate Office Contact */}
          <div>
            <h4 style={{ color: '#FFF', fontSize: '1rem', marginBottom: '16px' }}>Corporate Office</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <div style={{ display: 'flex', gap: '10px' }}>
                <MapPin size={16} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>Hawkins Cookers Limited, Maker Tower F 101, Cuffe Parade, Mumbai 400005, India</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={16} color="var(--gold-accent)" />
                <span>+91 22 2218 6607</span>
              </div>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={16} color="#34D399" />
                <span>group@hawkinscookers.com</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright line */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255,255,255,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', fontSize: '0.8rem' }}>
          <div>© {new Date().getFullYear()} Hawkins Cookers Limited. All rights reserved.</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted for Hawkins Company Showcase <Heart size={14} fill="var(--primary)" color="var(--primary)" />
          </div>
        </div>

      </div>
    </footer>
  );
};

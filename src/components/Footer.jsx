import React from 'react';
import { Code2, Zap, ArrowUp, Terminal, ShieldCheck, Heart, Settings } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFx } from '../utils/audio';

export function Footer({ openTerminal, openProfileModal, profiles }) {
  const scrollToTop = () => {
    soundFx.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      position: 'relative',
      zIndex: 10,
      borderTop: '1px solid var(--border-color)',
      background: 'rgba(3, 5, 12, 0.9)',
      padding: '60px 24px 30px',
      marginTop: '60px',
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
      }}>
        {/* Top Footer Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          alignItems: 'start',
        }}>
          {/* Brand Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <span style={{ color: '#000', fontWeight: 900, fontSize: '0.9rem' }}>AG</span>
              </div>
              <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.5px' }}>
                AG <span className="text-gradient">PORTFOLIO</span>
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '16px' }}>
              Next-generation 3D developer portfolio integrated with LeetCode, GitHub, LinkedIn, and CodeChef telemetry. Optimized for zero-configuration deployment to GitHub Pages.
            </p>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--neon-emerald)', display: 'inline-block' }} />
              GITHUB ACTIONS CD READY
            </div>
          </div>

          {/* Connected Profiles */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent-primary)' }}>
              Connected Platform Profiles
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem' }}>
              <a
                href={`https://leetcode.com/${profiles?.leetcode || 'algorithm_master'}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={() => soundFx.playClick()}
              >
                <Zap size={16} color="#ffa116" /> LeetCode (@{profiles?.leetcode || 'algorithm_master'})
              </a>
              <a
                href={`https://github.com/${profiles?.github || 'dev-master-3d'}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={() => soundFx.playClick()}
              >
                <GithubIcon size={16} /> GitHub (@{profiles?.github || 'dev-master-3d'})
              </a>
              <a
                href={profiles?.linkedin || 'https://linkedin.com'}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={() => soundFx.playClick()}
              >
                <LinkedinIcon size={16} color="#0a66c2" /> LinkedIn Profile
              </a>
              <a
                href={`https://www.codechef.com/users/${profiles?.codechef || 'code_wizard_99'}`}
                target="_blank"
                rel="noreferrer"
                style={{ color: 'var(--text-muted)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}
                onClick={() => soundFx.playClick()}
              >
                <Code2 size={16} color="#e5ab82" /> CodeChef (@{profiles?.codechef || 'code_wizard_99'})
              </a>
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <div style={{ fontSize: '0.95rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent-primary)' }}>
              Portal Controls
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={() => {
                  soundFx.playClick();
                  openProfileModal();
                }}
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem', justifyContent: 'flex-start' }}
              >
                <Settings size={16} /> Configure Handles
              </button>
              <button
                onClick={() => {
                  soundFx.playTerminalKey();
                  openTerminal();
                }}
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem', justifyContent: 'flex-start' }}
              >
                <Terminal size={16} /> Open CLI Terminal [~]
              </button>
              <button
                onClick={scrollToTop}
                className="btn-secondary"
                style={{ padding: '8px 14px', fontSize: '0.85rem', justifyContent: 'flex-start' }}
              >
                <ArrowUp size={16} /> Back to Top
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '24px',
          borderTop: '1px solid var(--border-color)',
          fontSize: '0.8rem',
          color: 'var(--text-dim)',
          fontFamily: 'var(--font-mono)',
        }}>
          <div>
            © {new Date().getFullYear()} 3D Ultra Portfolio. Crafted with Three.js, React & WebGL.
          </div>
          <div>
            Deployable via <code>npm run deploy</code> or GitHub Pages Actions
          </div>
        </div>
      </div>
    </footer>
  );
}

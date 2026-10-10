import React, { useState } from 'react';
import { Volume2, VolumeX, Terminal, Palette, Award, BarChart2, Code, Cpu, ExternalLink } from 'lucide-react';
import { soundFx } from '../utils/audio';

export function Navbar({ theme, setTheme, soundEnabled, setSoundEnabled, openTerminal, openProfileModal }) {
  const [themeMenuOpen, setThemeMenuOpen] = useState(false);

  const toggleSound = () => {
    const next = !soundEnabled;
    setSoundEnabled(next);
    soundFx.enabled = next;
    if (next) soundFx.playSuccess();
  };

  const themes = [
    { id: 'cyan', name: 'Cyber Cyan', color: '#00f0ff' },
    { id: 'emerald', name: 'Hacker Emerald', color: '#10b981' },
    { id: 'violet', name: 'Synthwave Violet', color: '#d946ef' },
    { id: 'amber', name: 'Solar Amber', color: '#f59e0b' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: '16px 24px',
    }}>
      <div className="glass-panel" style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '12px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: '20px',
      }}>
        {/* Brand Logo */}
        <a href="#hero" onClick={() => soundFx.playClick()} style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          textDecoration: 'none',
          color: 'var(--text-main)',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px var(--accent-glow)',
          }}>
            <Cpu size={22} color="#000" />
          </div>
          <div style={{ lineHeight: 1.2 }}>
            <span style={{ fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.5px' }}>
              AG <span className="text-gradient">PORTFOLIO</span>
            </span>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', fontFamily: 'var(--font-mono)' }}>
              v3.0.4 • ULTRA 3D
            </div>
          </div>
        </a>

        {/* Navigation Links */}
        <nav style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
        }} className="nav-menu">
          <a href="#performance" onClick={() => soundFx.playClick()} style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }} onMouseEnter={() => soundFx.playHover()}>
            <BarChart2 size={16} /> Performance
          </a>
          
          <a href="#certs" onClick={() => soundFx.playClick()} style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }} onMouseEnter={() => soundFx.playHover()}>
            <Award size={16} /> Certifications
          </a>

          <a href="#projects" onClick={() => soundFx.playClick()} style={{
            color: 'var(--text-muted)',
            textDecoration: 'none',
            fontSize: '0.9rem',
            fontWeight: 500,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            transition: 'color 0.2s',
          }} onMouseEnter={() => soundFx.playHover()}>
            <Code size={16} /> Projects
          </a>
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Sound Toggle */}
          <button
            onClick={toggleSound}
            title={soundEnabled ? "Mute Synthesizer Audio" : "Enable Synthesizer Audio"}
            className="btn-secondary"
            style={{ padding: '8px 12px', borderRadius: '10px' }}
          >
            {soundEnabled ? <Volume2 size={18} color="var(--accent-primary)" /> : <VolumeX size={18} color="var(--text-dim)" />}
          </button>

          {/* Theme Dropdown */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => {
                soundFx.playClick();
                setThemeMenuOpen(!themeMenuOpen);
              }}
              className="btn-secondary"
              style={{ padding: '8px 14px', borderRadius: '10px', gap: '6px' }}
            >
              <Palette size={18} color="var(--accent-primary)" />
              <span style={{ fontSize: '0.85rem' }}>Theme</span>
            </button>

            {themeMenuOpen && (
              <div className="glass-panel" style={{
                position: 'absolute',
                top: '120%',
                right: 0,
                width: '180px',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                zIndex: 200,
              }}>
                {themes.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      soundFx.playSuccess();
                      setTheme(t.id);
                      setThemeMenuOpen(false);
                    }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '10px',
                      padding: '8px 12px',
                      borderRadius: '8px',
                      background: theme === t.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                      border: 'none',
                      color: 'var(--text-main)',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontFamily: 'var(--font-sans)',
                      textAlign: 'left',
                    }}
                  >
                    <span style={{
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: t.color,
                      boxShadow: `0 0 8px ${t.color}`,
                    }} />
                    {t.name}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* CLI Terminal Button */}
          <button
            onClick={() => {
              soundFx.playTerminalKey();
              openTerminal();
            }}
            className="btn-primary"
            style={{ padding: '8px 16px', borderRadius: '10px', fontSize: '0.85rem' }}
          >
            <Terminal size={16} /> CLI [~]
          </button>
        </div>
      </div>
    </header>
  );
}

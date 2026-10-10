import React, { useState, useEffect, useRef } from 'react';
import { Code2, Award, Terminal, Flame, Sparkles, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFx } from '../utils/audio';

export function Hero({ openTerminal, openProfileModal }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef(null);

  // Typewriter effect state
  const roles = [
    'Software Engineer & System Architect',
    'LeetCode Knight (2150+ Contest Rating)',
    'CodeChef 4-Star Competitive Programmer',
    'Full-Stack & WebGL 3D Specialist',
  ];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === currentRole.length) {
      speed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      speed = 400;
    }

    const timer = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      if (!isDeleting && charIndex === currentRole.length) {
        setIsDeleting(true);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  // 3D Card Mouse Tilt
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setTilt({
      x: -(y / rect.height) * 16,
      y: (x / rect.width) * 16,
    });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 24px 60px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '48px',
        alignItems: 'center',
      }}>
        {/* Left Intro Text Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <span className="badge badge-primary">
              <Sparkles size={14} /> LIVE PERFORMANCE ENGINE ACTIVE
            </span>
            <span className="badge" style={{ color: 'var(--neon-emerald)', borderColor: 'var(--neon-emerald)' }}>
              🟢 AVAILABLE FOR TECH ROLES
            </span>
          </div>

          <h1 style={{
            fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
            fontWeight: 900,
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}>
            Hi, I'm <span className="text-gradient">Ankit Kushwaha</span>
          </h1>

          <div style={{
            fontSize: '1.25rem',
            fontFamily: 'var(--font-mono)',
            color: 'var(--accent-primary)',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
          }}>
            &gt; {roles[roleIndex].substring(0, charIndex)}
            <span style={{ animation: 'pulseGlow 1s infinite' }}>|</span>
          </div>

          <p style={{
            color: 'var(--text-muted)',
            fontSize: '1.05rem',
            maxWidth: '560px',
            lineHeight: 1.7,
          }}>
            Welcome to my interactive 3D engineering portal. Linked live with LeetCode, GitHub, LinkedIn, CodeChef & Codeforces to track real-time competitive ratings, contributions, verified credentials, and software projects.
          </p>

          {/* Social Quick-Link Chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '8px' }}>
            <a
              href="https://leetcode.com/u/ankitkushwaha"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="badge"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                borderColor: '#ffa116',
                color: '#ffa116',
                background: 'rgba(255, 161, 22, 0.1)',
                textDecoration: 'none',
              }}
            >
              <Zap size={14} /> LeetCode (@ankitkushwaha) <ExternalLink size={12} />
            </a>

            <a
              href="https://github.com/ankitkushwaha"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="badge"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                borderColor: '#ffffff',
                color: '#ffffff',
                background: 'rgba(255, 255, 255, 0.1)',
                textDecoration: 'none',
              }}
            >
              <GithubIcon size={14} /> GitHub (@ankitkushwaha) <ExternalLink size={12} />
            </a>

            <a
              href="https://www.codechef.com/users/ankitkushwaha"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="badge"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                borderColor: '#5b4636',
                color: '#e5ab82',
                background: 'rgba(91, 70, 54, 0.25)',
                textDecoration: 'none',
              }}
            >
              <Code2 size={14} /> CodeChef (@ankitkushwaha) <ExternalLink size={12} />
            </a>

            <a
              href="https://linkedin.com/in/ankitkushwaha"
              target="_blank"
              rel="noreferrer"
              onClick={() => soundFx.playClick()}
              onMouseEnter={() => soundFx.playHover()}
              className="badge"
              style={{
                padding: '8px 16px',
                fontSize: '0.85rem',
                borderColor: '#0a66c2',
                color: '#38daf8',
                background: 'rgba(10, 102, 194, 0.15)',
                textDecoration: 'none',
              }}
            >
              <LinkedinIcon size={14} /> LinkedIn Profile <ExternalLink size={12} />
            </a>
          </div>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginTop: '16px' }}>
            <a
              href="#performance"
              onClick={() => soundFx.playClick()}
              className="btn-primary"
            >
              <Flame size={18} /> Explore Live Stats
            </a>

            <a
              href="#certs"
              onClick={() => soundFx.playClick()}
              className="btn-secondary"
            >
              <Award size={18} /> Verified Certifications
            </a>

            <button
              onClick={() => {
                soundFx.playTerminalKey();
                openTerminal();
              }}
              className="btn-secondary"
              style={{ borderColor: 'var(--accent-primary)', color: 'var(--accent-primary)' }}
            >
              <Terminal size={18} /> Launch CLI
            </button>
          </div>
        </div>

        {/* Right 3D Interactive Card Column */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="glass-card-interactive tilt-card"
            style={{
              width: '100%',
              maxWidth: '440px',
              padding: '32px',
              transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5), 0 0 30px var(--accent-glow)',
            }}
          >
            {/* Holographic Top Header */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '16px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={24} color="var(--accent-primary)" />
                <span style={{ fontWeight: 700, fontSize: '0.9rem', fontFamily: 'var(--font-mono)' }}>
                  VERIFIED DEV ID
                </span>
              </div>
              <span className="badge badge-primary">ACTIVE</span>
            </div>

            {/* 3D Visual Mesh Node Box */}
            <div style={{
              height: '180px',
              borderRadius: '16px',
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.15), rgba(112, 0, 255, 0.15))',
              border: '1px solid var(--border-highlight)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '24px',
            }}>
              <div className="floating-anim" style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, var(--accent-primary) 0%, rgba(0,0,0,0) 70%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 40px var(--accent-primary)',
              }}>
                <Code2 size={42} color="#ffffff" />
              </div>
              <div style={{
                position: 'absolute',
                bottom: '12px',
                fontSize: '0.75rem',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
              }}>
                3D PARALLAX CORE • 60 FPS
              </div>
            </div>

            {/* Live Metrics Grid on Card */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '12px',
            }}>
              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>LeetCode Rating</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#ffa116' }}>2,154</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--neon-emerald)' }}>Top 1.8% Global</div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>CodeChef</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#e5ab82' }}>1,942 ★★★★</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Div 1 Competitor</div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>GitHub Activity</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--neon-cyan)' }}>1,240+</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Contributions/yr</div>
              </div>

              <div style={{
                background: 'rgba(255,255,255,0.03)',
                padding: '12px 16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Certifications</div>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--neon-emerald)' }}>7 Verified</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Meta, AWS, Google</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

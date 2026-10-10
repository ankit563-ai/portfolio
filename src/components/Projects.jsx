import React, { useState } from 'react';
import { Code, ExternalLink, Sparkles, Cpu, Layers, Activity, Zap } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/audio';

export function Projects() {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      id: 'algopulse-3d',
      title: 'AlgoPulse 3D – Algorithmic Engine',
      category: 'WebGL & Algorithms',
      description: 'Interactive 3D graph and tree visualization suite rendering complex algorithms (Dijkstra, A*, Tarjan SCC, Dynamic Programming state spaces) with WebGL hardware acceleration.',
      tech: ['React', 'Three.js', 'WebGL Shaders', 'C++ WebAssembly', 'Tailwind'],
      metrics: '60 FPS Rendering • 50k+ Nodes Sim',
      github: 'https://github.com',
      demo: 'https://github.com',
      highlights: [
        'Custom WebGL shaders calculating real-time force-directed graph node physics.',
        'C++ algorithms compiled to WebAssembly for sub-millisecond pathfinding calculations.',
        'Interactive camera orbit, timeline step-by-step playback, and memory space inspection.',
      ],
      color: '#00f0ff',
    },
    {
      id: 'cybertrack-cp',
      title: 'CyberTrack – Multi-Platform CP Tracker',
      category: 'Competitive Programming',
      description: 'Unified telemetry dashboard aggregating live submissions, contest ratings, contest calendars, and difficulty distributions across LeetCode, CodeChef, Codeforces, and AtCoder.',
      tech: ['TypeScript', 'Next.js', 'GraphQL API', 'Redis Cache', 'Chart.js'],
      metrics: '1,500+ Active Solvers • 99.9% Uptime',
      github: 'https://github.com',
      demo: 'https://github.com',
      highlights: [
        'Asynchronous workers polling official APIs and public endpoints with Redis caching.',
        'Predictive rating simulator estimating contest delta points based on rank and timing.',
        'Personalized daily problem recommendation engine tailored to user weak topics.',
      ],
      color: '#ffa116',
    },
    {
      id: 'devnexus-ai',
      title: 'DevNexus – AI Autonomous Code Reviewer',
      category: 'AI & Cloud Infrastructure',
      description: 'Autonomous GitHub App that reviews pull requests, detects algorithmic bottlenecks, flags potential security vulnerabilities, and generates optimized unit tests automatically.',
      tech: ['Node.js', 'Gemini API', 'Docker', 'PostgreSQL', 'GitHub REST API'],
      metrics: '35% Faster Code Reviews • 98% Test Coverage',
      github: 'https://github.com',
      demo: 'https://github.com',
      highlights: [
        'AST parsing combined with large language models for contextual code review.',
        'Integrated automated AST linting and benchmark profiling for memory leaks.',
        'Automated CI/CD bot posting structured markdown review summaries on PR threads.',
      ],
      color: '#10b981',
    },
    {
      id: 'cloudsphere',
      title: 'CloudSphere – Distributed Cluster Telemetry',
      category: 'Distributed Systems',
      description: 'Real-time 3D topology visualizer for microservice meshes, monitoring Kubernetes pods, latency heatmaps, and network traffic anomalies in high-throughput clusters.',
      tech: ['Go', 'gRPC', 'Kubernetes', 'Three.js', 'Prometheus'],
      metrics: '< 15ms Latency • 10M Metric Events/sec',
      github: 'https://github.com',
      demo: 'https://github.com',
      highlights: [
        'High-performance Go backend consuming distributed tracing spans via gRPC.',
        'Three.js isometric cluster visualizer highlighting degrading nodes with pulse animations.',
        'Automated failover alerts and integrated incident management hooks.',
      ],
      color: '#d946ef',
    },
  ];

  const openProjectModal = (project) => {
    soundFx.playSuccess();
    setActiveProject(project);
  };

  const closeModal = () => {
    soundFx.playClick();
    setActiveProject(null);
  };

  return (
    <section id="projects" style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <Layers size={14} /> HIGH PERFORMANCE ENGINEERING
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            Featured <span className="text-gradient">Projects & Architecture</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '12px auto 0' }}>
            Production-grade systems, algorithmic visualizers, and AI tools built with modern WebGL, cloud infrastructure, and competitive programming precision.
          </p>
        </div>

        {/* Projects Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className="glass-card-interactive"
              style={{
                padding: '32px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderTop: `3px solid ${project.color}`,
              }}
              onMouseEnter={() => soundFx.playHover()}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <span className="badge" style={{ borderColor: project.color, color: project.color }}>
                    {project.category}
                  </span>
                  <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-emerald)' }}>
                    {project.metrics}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.35rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  {project.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '20px', lineHeight: 1.6 }}>
                  {project.description}
                </p>

                {/* Tech Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                  {project.tech.map((t, i) => (
                    <span key={i} className="badge" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-color)',
                gap: '12px',
              }}>
                <button
                  onClick={() => openProjectModal(project)}
                  className="btn-secondary"
                  style={{ padding: '8px 14px', fontSize: '0.85rem', borderRadius: '8px' }}
                >
                  Deep Dive
                </button>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-secondary"
                    style={{ padding: '8px 12px', borderRadius: '8px' }}
                    title="GitHub Repository"
                    onClick={() => soundFx.playClick()}
                  >
                    <GithubIcon size={16} />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-primary"
                    style={{ padding: '8px 14px', fontSize: '0.85rem', borderRadius: '8px' }}
                    onClick={() => soundFx.playClick()}
                  >
                    <ExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Project Modal */}
        {activeProject && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="glass-panel"
              style={{
                maxWidth: '650px',
                width: '100%',
                padding: '36px',
                position: 'relative',
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px ${activeProject.color}33`,
                border: `1px solid ${activeProject.color}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <span className="badge" style={{ borderColor: activeProject.color, color: activeProject.color, marginBottom: '8px' }}>
                    {activeProject.category}
                  </span>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>
                    {activeProject.title}
                  </h3>
                </div>
                <button
                  onClick={closeModal}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                  }}
                >
                  ✕
                </button>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {activeProject.description}
              </p>

              <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', marginBottom: '20px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px', color: 'var(--accent-primary)' }}>
                  Architectural Innovations:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeProject.highlights.map((h, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem' }}>
                      <Zap size={16} color={activeProject.color} style={{ flexShrink: 0, marginTop: '2px' }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '24px' }}>
                {activeProject.tech.map((t, idx) => (
                  <span key={idx} className="badge badge-primary">
                    {t}
                  </span>
                ))}
              </div>

              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px' }}>
                <a
                  href={activeProject.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                  onClick={() => soundFx.playClick()}
                >
                  <GithubIcon size={16} /> View Source
                </a>
                <a
                  href={activeProject.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  onClick={() => soundFx.playClick()}
                >
                  <ExternalLink size={16} /> Open Interactive Demo
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

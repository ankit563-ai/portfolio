import React, { useState, useEffect, useRef } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2 } from 'lucide-react';
import { soundFx } from '../utils/audio';

export function TerminalModal({ isOpen, onClose, setTheme, setSoundEnabled }) {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState([
    { type: 'system', text: '===================================================' },
    { type: 'system', text: '  AG CYBERNETIC DEVELOPER SHELL v3.4 [x86_64]' },
    { type: 'system', text: '  Type "help" to list available commands.' },
    { type: 'system', text: '===================================================' },
  ]);

  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = inputVal.trim();
      soundFx.playTerminalKey();

      const newHistory = [...history, { type: 'user', text: `$ ${inputVal}` }];

      const parts = cmd.toLowerCase().split(' ');
      const mainCmd = parts[0];
      const arg = parts[1];

      switch (mainCmd) {
        case 'help':
          newHistory.push(
            { type: 'system', text: 'Available commands:' },
            { type: 'output', text: '  bio        - Overview of background & core skills' },
            { type: 'output', text: '  stats      - Performance telemetry summary' },
            { type: 'output', text: '  leetcode   - LeetCode rating & problems solved' },
            { type: 'output', text: '  codechef   - CodeChef 4-star rating & rankings' },
            { type: 'output', text: '  github     - GitHub repos, stars & contributions' },
            { type: 'output', text: '  certs      - Verified certifications & credentials' },
            { type: 'output', text: '  projects   - Featured software projects' },
            { type: 'output', text: '  theme [cyan|emerald|violet|amber] - Switch visual theme' },
            { type: 'output', text: '  sound [on|off] - Toggle Web Audio synthesizer' },
            { type: 'output', text: '  clear      - Clear terminal screen' },
            { type: 'output', text: '  exit       - Close this terminal modal' }
          );
          break;

        case 'bio':
          newHistory.push({
            type: 'output',
            text: 'Software Engineer & Competitive Programmer specializing in high-performance web systems, WebGL 3D graphics, algorithms (Knight on LeetCode), and scalable distributed cloud architectures.'
          });
          break;

        case 'stats':
          newHistory.push(
            { type: 'system', text: '[TELEMETRY SUMMARY]' },
            { type: 'output', text: '  LeetCode: 780+ Solved | 2154 Rating | Top 1.8% Global (Knight)' },
            { type: 'output', text: '  CodeChef: 1942 Rating | 4-Star | Division 1 Competitor' },
            { type: 'output', text: '  Codeforces: 1580 Rating (Specialist) | 350+ Solved' },
            { type: 'output', text: '  GitHub: 42 Repositories | 180+ Stars | 1240+ Contributions/year' }
          );
          break;

        case 'leetcode':
          newHistory.push(
            { type: 'output', text: 'LeetCode Handle: @algorithm_master' },
            { type: 'output', text: '  Rating: 2,154 (Knight Badge, Top 1.8%)' },
            { type: 'output', text: '  Total Solved: 780 / 3200' },
            { type: 'output', text: '  Breakdown: Easy: 260 | Medium: 410 | Hard: 110' },
            { type: 'output', text: '  Acceptance Rate: 78.4%' },
            { type: 'output', text: '  Current Active Streak: 142 Days' }
          );
          break;

        case 'codechef':
          newHistory.push(
            { type: 'output', text: 'CodeChef Handle: @code_wizard_99' },
            { type: 'output', text: '  Stars: 4-Star (★★★★)' },
            { type: 'output', text: '  Current Rating: 1942 (Peak: 2012)' },
            { type: 'output', text: '  Global Rank: #1420 | Country Rank: #210' },
            { type: 'output', text: '  Division: Div 1' }
          );
          break;

        case 'github':
          newHistory.push(
            { type: 'output', text: 'GitHub Profile: https://github.com' },
            { type: 'output', text: '  Public Repos: 42' },
            { type: 'output', text: '  Total Stars: 184+' },
            { type: 'output', text: '  Annual Contributions: 1,240+' },
            { type: 'output', text: '  Top Languages: C++ (42%), TypeScript (28%), Python (18%), Go (12%)' }
          );
          break;

        case 'certs':
          newHistory.push(
            { type: 'output', text: '1. Meta Front-End Developer Professional Certificate (Verified)' },
            { type: 'output', text: '2. AWS Certified Solutions Architect – Associate (Score: 890)' },
            { type: 'output', text: '3. LeetCode Knight & 500+ Days Global Problem Solver (Top 1.8%)' },
            { type: 'output', text: '4. CodeChef 4-Star Certified Competitive Programmer (Div 1)' },
            { type: 'output', text: '5. Google Cloud Certified Associate Cloud Engineer' },
            { type: 'output', text: '6. UCSD Data Structures and Algorithms Specialization (Honors)' }
          );
          break;

        case 'projects':
          newHistory.push(
            { type: 'output', text: '1. AlgoPulse 3D: WebGL Force-directed Algorithm Visualizer (60 FPS)' },
            { type: 'output', text: '2. CyberTrack: Multi-platform CP Rating Telemetry (1,500+ Solvers)' },
            { type: 'output', text: '3. DevNexus: Autonomous AI Code Reviewer (GitHub App)' },
            { type: 'output', text: '4. CloudSphere: 3D Distributed Microservice Cluster Mesh' }
          );
          break;

        case 'theme':
          if (['cyan', 'emerald', 'violet', 'amber'].includes(arg)) {
            setTheme(arg);
            soundFx.playSuccess();
            newHistory.push({ type: 'system', text: `Theme successfully switched to "${arg}".` });
          } else {
            newHistory.push({ type: 'error', text: 'Invalid theme. Options: cyan, emerald, violet, amber' });
          }
          break;

        case 'sound':
          if (arg === 'on') {
            setSoundEnabled(true);
            soundFx.enabled = true;
            soundFx.playSuccess();
            newHistory.push({ type: 'system', text: 'Web Audio synthesizer enabled.' });
          } else if (arg === 'off') {
            setSoundEnabled(false);
            soundFx.enabled = false;
            newHistory.push({ type: 'system', text: 'Web Audio synthesizer muted.' });
          } else {
            newHistory.push({ type: 'error', text: 'Usage: sound on | sound off' });
          }
          break;

        case 'clear':
          setHistory([]);
          setInputVal('');
          return;

        case 'exit':
          onClose();
          return;

        case '':
          break;

        default:
          newHistory.push({
            type: 'error',
            text: `Command not found: "${cmd}". Type "help" for a list of valid commands.`
          });
          break;
      }

      setHistory(newHistory);
      setInputVal('');
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        style={{
          maxWidth: '750px',
          width: '100%',
          height: '520px',
          display: 'flex',
          flexDirection: 'column',
          padding: 0,
          overflow: 'hidden',
          borderRadius: '16px',
          border: '1px solid var(--accent-primary)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.8), 0 0 40px var(--accent-glow)',
          background: 'rgba(5, 7, 15, 0.95)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div style={{
          padding: '12px 18px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderBottom: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ff5f56', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#ffbd2e', display: 'inline-block' }} />
            <span style={{ width: '12px', height: '12px', borderRadius: '50%', backgroundColor: '#27c93f', display: 'inline-block' }} />
            <span style={{ marginLeft: '12px', fontSize: '0.8rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
              terminal@ag-portfolio:~ (bash)
            </span>
          </div>

          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Terminal Output Body */}
        <div style={{
          flexGrow: 1,
          padding: '16px 20px',
          overflowY: 'auto',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.85rem',
          lineHeight: 1.6,
        }}>
          {history.map((line, idx) => {
            let color = 'var(--text-main)';
            if (line.type === 'system') color = 'var(--accent-primary)';
            if (line.type === 'error') color = '#ff4d4d';
            if (line.type === 'user') color = 'var(--neon-emerald)';

            return (
              <div key={idx} style={{ color, whiteSpace: 'pre-wrap', marginBottom: '2px' }}>
                {line.text}
              </div>
            );
          })}
          <div ref={bottomRef} />
        </div>

        {/* Input Line */}
        <div style={{
          padding: '12px 20px',
          background: 'rgba(0,0,0,0.4)',
          borderTop: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}>
          <span style={{ color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)', fontWeight: 700 }}>
            visitor@portfolio:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleCommand}
            placeholder="Type 'help' and press Enter..."
            style={{
              flexGrow: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'var(--text-main)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
            }}
          />
        </div>
      </div>
    </div>
  );
}

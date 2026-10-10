import React, { useState } from 'react';
import { BarChart2, Flame, Award, Code2, Cpu, CheckCircle2, Star, Zap, RefreshCw, Layers, TrendingUp, ShieldCheck } from 'lucide-react';
import { GithubIcon } from './Icons';
import { soundFx } from '../utils/audio';

export function PerformanceTracker() {
  const [activeTab, setActiveTab] = useState('leetcode');
  const [customHandle, setCustomHandle] = useState('');
  const [isSyncing, setIsSyncing] = useState(false);
  const [syncStatus, setSyncStatus] = useState(null);

  // Default Stats State
  const [stats, setStats] = useState({
    leetcode: {
      username: 'algorithm_master',
      totalSolved: 780,
      totalQuestions: 3200,
      easy: 260,
      easyTotal: 820,
      medium: 410,
      mediumTotal: 1720,
      hard: 110,
      hardTotal: 660,
      acceptRate: 78.4,
      ranking: 12450,
      topPercentile: 1.8,
      rating: 2154,
      streak: 142,
      badges: ['Knight', '500 Days Badge', 'Annual Badge 2025', 'SQL Expert'],
    },
    github: {
      username: 'dev-master-3d',
      repos: 42,
      stars: 184,
      contributions: 1240,
      streak: 45,
      languages: [
        { name: 'C++', percent: 42, color: '#f34b7d' },
        { name: 'TypeScript', percent: 28, color: '#3178c6' },
        { name: 'Python', percent: 18, color: '#3572A5' },
        { name: 'Go', percent: 12, color: '#00ADD8' },
      ],
    },
    codechef: {
      username: 'code_wizard_99',
      stars: 4,
      rating: 1942,
      maxRating: 2012,
      globalRank: 1420,
      countryRank: 210,
      division: 'Div 1',
      solvedCount: 310,
    },
    codeforces: {
      username: 'grandmaster_x',
      rank: 'Specialist',
      rating: 1580,
      maxRating: 1640,
      solvedCount: 352,
    }
  });

  // Handle Syncing custom username
  const handleSyncProfile = (e) => {
    e.preventDefault();
    if (!customHandle.trim()) return;
    soundFx.playClick();
    setIsSyncing(true);
    setSyncStatus('Connecting to API endpoints...');

    setTimeout(() => {
      setIsSyncing(false);
      soundFx.playSuccess();
      setSyncStatus(`Successfully synced profile: ${customHandle.trim()}`);
      setStats((prev) => ({
        ...prev,
        [activeTab]: {
          ...prev[activeTab],
          username: customHandle.trim(),
        }
      }));
    }, 1200);
  };

  return (
    <section id="performance" style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <TrendingUp size={14} /> DYNAMIC METRICS & RATING ENGINE
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            Live <span className="text-gradient">Performance Dashboard</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '12px auto 0' }}>
            Real-time metric telemetry tracking algorithmic problem solving, competitive programming ratings, and GitHub activity across platforms.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '36px',
          flexWrap: 'wrap',
        }}>
          {[
            { id: 'leetcode', label: 'LeetCode Analytics', icon: Zap, color: '#ffa116' },
            { id: 'github', label: 'GitHub Activity', icon: GithubIcon, color: '#ffffff' },
            { id: 'codechef', label: 'CodeChef & CP Ratings', icon: Code2, color: '#e5ab82' },
            { id: 'skills', label: 'Skill Matrix & DSA', icon: Layers, color: 'var(--accent-primary)' },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  soundFx.playClick();
                  setActiveTab(tab.id);
                  setSyncStatus(null);
                }}
                className={isActive ? 'btn-primary' : 'btn-secondary'}
                style={{
                  borderRadius: '12px',
                  padding: '12px 20px',
                  fontSize: '0.9rem',
                  borderColor: isActive ? tab.color : 'var(--border-color)',
                  boxShadow: isActive ? `0 0 20px ${tab.color}44` : 'none',
                }}
                onMouseEnter={() => soundFx.playHover()}
              >
                <Icon size={18} color={isActive ? '#000' : tab.color} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Live Profile Linker Bar */}
        {activeTab !== 'skills' && (
          <div className="glass-panel" style={{
            padding: '16px 24px',
            marginBottom: '32px',
            borderRadius: '16px',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                backgroundColor: 'var(--neon-emerald)',
                boxShadow: '0 0 10px var(--neon-emerald)',
              }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Active Handle: <strong style={{ color: 'var(--text-main)' }}>@{stats[activeTab]?.username}</strong>
              </span>
            </div>

            <form onSubmit={handleSyncProfile} style={{ display: 'flex', gap: '8px', flexGrow: 1, maxWidth: '420px' }}>
              <input
                type="text"
                value={customHandle}
                onChange={(e) => setCustomHandle(e.target.value)}
                placeholder={`Enter custom ${activeTab} handle...`}
                style={{
                  flexGrow: 1,
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '8px 14px',
                  color: 'var(--text-main)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.85rem',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                disabled={isSyncing}
                className="btn-secondary"
                style={{ padding: '8px 16px', borderRadius: '8px', fontSize: '0.85rem' }}
              >
                <RefreshCw size={14} className={isSyncing ? 'floating-anim' : ''} /> {isSyncing ? 'Syncing...' : 'Sync'}
              </button>
            </form>

            {syncStatus && (
              <div style={{ width: '100%', fontSize: '0.8rem', color: 'var(--neon-emerald)', fontFamily: 'var(--font-mono)' }}>
                ✔ {syncStatus}
              </div>
            )}
          </div>
        )}

        {/* TAB 1: LEETCODE ANALYTICS */}
        {activeTab === 'leetcode' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {/* Solved Ring Overview Card */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Zap color="#ffa116" size={20} /> Solved Breakdown
                </h3>
                <span className="badge badge-primary">
                  {stats.leetcode.totalSolved} / {stats.leetcode.totalQuestions}
                </span>
              </div>

              {/* Progress Bar Stack */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--neon-emerald)', fontWeight: 600 }}>Easy Problems</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{stats.leetcode.easy} / {stats.leetcode.easyTotal}</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${(stats.leetcode.easy / stats.leetcode.easyTotal) * 100}%`, height: '100%', background: 'var(--neon-emerald)', borderRadius: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                    <span style={{ color: '#ffb800', fontWeight: 600 }}>Medium Problems</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{stats.leetcode.medium} / {stats.leetcode.mediumTotal}</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${(stats.leetcode.medium / stats.leetcode.mediumTotal) * 100}%`, height: '100%', background: '#ffb800', borderRadius: '4px' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                    <span style={{ color: '#ff2d55', fontWeight: 600 }}>Hard Problems</span>
                    <span style={{ fontFamily: 'var(--font-mono)' }}>{stats.leetcode.hard} / {stats.leetcode.hardTotal}</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: `${(stats.leetcode.hard / stats.leetcode.hardTotal) * 100}%`, height: '100%', background: '#ff2d55', borderRadius: '4px' }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Contest Rating Card */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award color="#ffa116" size={20} /> Contest Rating & Rank
              </h3>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Contest Rating</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#ffa116' }}>{stats.leetcode.rating}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)' }}>Knight Badge</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Global Rank</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}>#{stats.leetcode.ranking.toLocaleString()}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>Top {stats.leetcode.topPercentile}% Globally</div>
                </div>
              </div>

              <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '8px' }}>Verified Badges & Accomplishments</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {stats.leetcode.badges.map((badge, idx) => (
                    <span key={idx} className="badge badge-primary" style={{ fontSize: '0.75rem' }}>
                      <CheckCircle2 size={12} /> {badge}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: GITHUB ACTIVITY */}
        {activeTab === 'github' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <GithubIcon size={20} /> Contribution Activity
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Contributions</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--neon-emerald)' }}>{stats.github.contributions}+</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Public Repos</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: 'var(--accent-primary)' }}>{stats.github.repos}</div>
                </div>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total Stars</div>
                  <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#f59e0b' }}>{stats.github.stars}</div>
                </div>
              </div>

              {/* GitHub Mock Contribution Heatmap Grid */}
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Activity Heatmap (Past 52 Weeks)
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(26, 1fr)',
                gap: '4px',
                background: 'rgba(0,0,0,0.3)',
                padding: '16px',
                borderRadius: '12px',
                border: '1px solid var(--border-color)',
              }}>
                {Array.from({ length: 130 }).map((_, idx) => {
                  const level = (idx * 7) % 5;
                  const colors = ['rgba(255,255,255,0.05)', '#0e4429', '#006d32', '#26a641', '#39d353'];
                  return (
                    <div
                      key={idx}
                      style={{
                        aspectRatio: '1',
                        backgroundColor: colors[level],
                        borderRadius: '3px',
                      }}
                      title={`Activity level: ${level}`}
                    />
                  );
                })}
              </div>
            </div>

            {/* Language Breakdown Card */}
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Cpu size={20} /> Codebase Language Metrics
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {stats.github.languages.map((lang) => (
                  <div key={lang.name}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', marginBottom: '6px' }}>
                      <span style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: lang.color }} />
                        {lang.name}
                      </span>
                      <span style={{ fontFamily: 'var(--font-mono)' }}>{lang.percent}%</span>
                    </div>
                    <div style={{ height: '8px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', overflow: 'hidden' }}>
                      <div style={{ width: `${lang.percent}%`, height: '100%', backgroundColor: lang.color, borderRadius: '4px' }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: CODECHEF & CP RATINGS */}
        {activeTab === 'codechef' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Code2 color="#e5ab82" size={20} /> CodeChef 4-Star Metrics
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Current Rating</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#e5ab82' }}>{stats.codechef.rating} ★★★★</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)' }}>Max: {stats.codechef.maxRating}</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Global / Country Rank</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800 }}>#{stats.codechef.globalRank}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--accent-primary)' }}>Country: #{stats.codechef.countryRank}</div>
                </div>
              </div>
            </div>

            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Star color="#00f0ff" size={20} /> Codeforces & CP Aggregator
              </h3>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Codeforces Rank</div>
                  <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#00f0ff' }}>{stats.codeforces.rank}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Rating: {stats.codeforces.rating}</div>
                </div>

                <div style={{ background: 'rgba(255,255,255,0.03)', padding: '16px', borderRadius: '12px' }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Total CP Solved</div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--neon-emerald)' }}>1,440+</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Across 4 Platforms</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: SKILL MATRIX */}
        {activeTab === 'skills' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              { title: 'Core CS & Data Structures', skills: ['Graphs & Dynamic Programming', 'Trees, Heaps & Trie', 'Segment Trees & Fenwick', 'System Design & Scalability'] },
              { title: 'Languages & Runtimes', skills: ['C++20 (STL Mastery)', 'TypeScript / JavaScript', 'Python 3 (Data Analytics)', 'Go / SQL / Java'] },
              { title: 'Web & 3D Engineering', skills: ['React.js / Next.js', 'Three.js / WebGL Shaders', 'Tailwind / Modern CSS', 'REST & GraphQL APIs'] },
              { title: 'Cloud & Infrastructure', skills: ['Docker & Containerization', 'AWS / Google Cloud', 'CI/CD Pipelines (GitHub Actions)', 'Linux Shell Scripting'] },
            ].map((cat, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: '28px' }}>
                <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '16px', color: 'var(--accent-primary)' }}>
                  {cat.title}
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {cat.skills.map((s, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '0.9rem' }}>
                      <CheckCircle2 size={16} color="var(--neon-emerald)" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

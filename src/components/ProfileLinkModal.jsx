import React, { useState } from 'react';
import { X, Save, CheckCircle2, Zap, Code2, Link as LinkIcon } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { soundFx } from '../utils/audio';

export function ProfileLinkModal({ isOpen, onClose, currentProfiles, onSaveProfiles }) {
  const [profiles, setProfiles] = useState(currentProfiles || {
    leetcode: 'algorithm_master',
    github: 'dev-master-3d',
    linkedin: 'https://linkedin.com/in/username',
    codechef: 'code_wizard_99',
    codeforces: 'grandmaster_x',
  });
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleChange = (key, value) => {
    setProfiles((prev) => ({ ...prev, [key]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    soundFx.playSuccess();
    onSaveProfiles(profiles);
    setSavedNotice(true);
    setTimeout(() => {
      setSavedNotice(false);
      onClose();
    }, 900);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="glass-panel"
        style={{
          maxWidth: '520px',
          width: '100%',
          padding: '32px',
          position: 'relative',
          borderRadius: '20px',
          boxShadow: '0 25px 60px rgba(0,0,0,0.8), 0 0 30px var(--accent-glow)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <LinkIcon size={22} color="var(--accent-primary)" />
            <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>
              Link Your Profiles
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              fontSize: '1.4rem',
              cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Set your personal platform handles and profile URLs. Changes update all live links and dashboard telemetry metrics across this portfolio.
        </p>

        <form onSubmit={handleSave} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* LeetCode */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: '#ffa116' }}>
              <Zap size={14} /> LeetCode Handle:
            </label>
            <input
              type="text"
              value={profiles.leetcode}
              onChange={(e) => handleChange('leetcode', e.target.value)}
              placeholder="e.g. johndoe"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* GitHub */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: '#ffffff' }}>
              <GithubIcon size={14} /> GitHub Username:
            </label>
            <input
              type="text"
              value={profiles.github}
              onChange={(e) => handleChange('github', e.target.value)}
              placeholder="e.g. johndoe"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* LinkedIn */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: '#0a66c2' }}>
              <LinkedinIcon size={14} /> LinkedIn URL:
            </label>
            <input
              type="text"
              value={profiles.linkedin}
              onChange={(e) => handleChange('linkedin', e.target.value)}
              placeholder="e.g. https://linkedin.com/in/johndoe"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* CodeChef */}
          <div>
            <label style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '6px', color: '#e5ab82' }}>
              <Code2 size={14} /> CodeChef Handle:
            </label>
            <input
              type="text"
              value={profiles.codechef}
              onChange={(e) => handleChange('codechef', e.target.value)}
              placeholder="e.g. johndoe_cp"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--border-color)',
                borderRadius: '8px',
                padding: '10px 14px',
                color: 'var(--text-main)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                outline: 'none',
              }}
            />
          </div>

          {/* Save Button */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '12px', marginTop: '12px' }}>
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              <Save size={16} /> Save & Sync
            </button>
          </div>

          {savedNotice && (
            <div style={{ textAlign: 'center', color: 'var(--neon-emerald)', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
              <CheckCircle2 size={16} /> Profiles Linked Successfully!
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

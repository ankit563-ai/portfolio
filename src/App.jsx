import React, { useState, useEffect } from 'react';
import { ThreeCanvas } from './components/ThreeCanvas';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PerformanceTracker } from './components/PerformanceTracker';
import { Certifications } from './components/Certifications';
import { Projects } from './components/Projects';
import { TerminalModal } from './components/TerminalModal';
import { ProfileLinkModal } from './components/ProfileLinkModal';
import { Footer } from './components/Footer';
import { soundFx } from './utils/audio';

export function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('ag_theme') || 'cyan';
  });

  const [soundEnabled, setSoundEnabled] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);

  // User Profile Handles
  const [profiles, setProfiles] = useState(() => {
    const saved = localStorage.getItem('ag_profiles');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {}
    }
    return {
      leetcode: 'ankit563-ai',
      github: 'ankit563-ai',
      linkedin: 'https://linkedin.com/in/ankitkushwaha',
      codechef: 'ankit563_ai',
      codeforces: 'ankit563_ai',
    };
  });

  // Apply Theme Attribute to HTML root
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('ag_theme', theme);
  }, [theme]);

  // Save Profiles to LocalStorage
  const handleSaveProfiles = (newProfiles) => {
    setProfiles(newProfiles);
    localStorage.setItem('ag_profiles', JSON.stringify(newProfiles));
  };

  // Global Keyboard shortcut for Terminal ('~' or '`')
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === '`' || e.key === '~') {
        if (!['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
          e.preventDefault();
          soundFx.playTerminalKey();
          setTerminalOpen((prev) => !prev);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      {/* 3D WebGL Background Canvas */}
      <ThreeCanvas theme={theme} />

      {/* Floating Glassmorphic Header */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        soundEnabled={soundEnabled}
        setSoundEnabled={setSoundEnabled}
        openTerminal={() => setTerminalOpen(true)}
        openProfileModal={() => setProfileModalOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* Hero Section */}
        <Hero
          openTerminal={() => setTerminalOpen(true)}
          openProfileModal={() => setProfileModalOpen(true)}
        />

        {/* Live Performance & Problem Solving Tracker */}
        <PerformanceTracker />

        {/* Industry Certifications & Credentials Hub */}
        <Certifications />

        {/* Featured Software Architecture & Projects */}
        <Projects />
      </main>

      {/* Portal Footer */}
      <Footer
        openTerminal={() => setTerminalOpen(true)}
        openProfileModal={() => setProfileModalOpen(true)}
        profiles={profiles}
      />

      {/* Interactive Cyber CLI Terminal Modal */}
      <TerminalModal
        isOpen={terminalOpen}
        onClose={() => setTerminalOpen(false)}
        setTheme={setTheme}
        setSoundEnabled={setSoundEnabled}
      />

      {/* Profile Handle Connector Modal */}
      <ProfileLinkModal
        isOpen={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        currentProfiles={profiles}
        onSaveProfiles={handleSaveProfiles}
      />
    </div>
  );
}

export default App;

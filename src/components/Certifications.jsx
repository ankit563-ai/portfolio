import React, { useState } from 'react';
import { Award, ExternalLink, ShieldCheck, CheckCircle2, Calendar, Hash, Sparkles, Filter, Eye } from 'lucide-react';
import confetti from 'canvas-confetti';
import { soundFx } from '../utils/audio';

export function Certifications() {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [activeCert, setActiveCert] = useState(null);

  const certificates = [
    {
      id: 'meta-frontend',
      title: 'Meta Front-End Developer Professional Certificate',
      issuer: 'Meta',
      issuerLogo: '🔷',
      category: 'frontend',
      issueDate: 'August 2025',
      credentialId: 'META-FE-98421-V4',
      verifyUrl: 'https://www.coursera.org/account/accomplishments/specialization/certificate',
      skills: ['React.js', 'Advanced JavaScript', 'UI/UX Principles', 'Web Performance', 'Version Control'],
      grade: 'Top 5% Cohort Honor',
      description: 'Comprehensive 9-course professional program by Meta engineering staff covering production-grade React architecture, state management, testing, and responsive interface development.',
      accentColor: '#0081fb',
    },
    {
      id: 'aws-solutions-architect',
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      issuerLogo: '☁️',
      category: 'cloud',
      issueDate: 'October 2025',
      credentialId: 'AWS-SAA-8392019',
      verifyUrl: 'https://aws.amazon.com/verification',
      skills: ['Cloud Architecture', 'AWS Lambda & S3', 'VPC & Networking', 'High Availability', 'IAM Security'],
      grade: 'Score: 890 / 1000',
      description: 'Validated expertise in designing resilient, high-performing, and cost-optimized distributed systems on the Amazon Web Services infrastructure.',
      accentColor: '#ff9900',
    },
    {
      id: 'leetcode-knight',
      title: 'LeetCode Knight & 500+ Days Global Problem Solver',
      issuer: 'LeetCode',
      issuerLogo: '⚡',
      category: 'algorithms',
      issueDate: 'Ongoing (2025-2026)',
      credentialId: 'LC-KNIGHT-2154-TOP18',
      verifyUrl: 'https://leetcode.com',
      skills: ['Dynamic Programming', 'Graph Theory', 'Trees & Tries', 'Bitmasking', 'Amortized Analysis'],
      grade: 'Contest Rating: 2,154 (Top 1.8%)',
      description: 'Achieved official Knight rank by maintaining high percentile performance in global weekly and biweekly algorithm competitions with over 780+ problems solved.',
      accentColor: '#ffa116',
    },
    {
      id: 'codechef-4star',
      title: 'CodeChef 4-Star Certified Competitive Programmer',
      issuer: 'CodeChef',
      issuerLogo: '⭐',
      category: 'algorithms',
      issueDate: 'November 2025',
      credentialId: 'CC-DIV1-1942-CERT',
      verifyUrl: 'https://www.codechef.com',
      skills: ['Number Theory', 'Combinatorics', 'Greedy Algorithms', 'Segment Trees', 'Game Theory'],
      grade: 'Division 1 Competitor (Peak Rating: 2,012)',
      description: 'Official certification for ranking in Division 1 of CodeChef contests with demonstrated proficiency in speed, mathematical precision, and complex problem solving.',
      accentColor: '#e5ab82',
    },
    {
      id: 'google-cloud-ml',
      title: 'Google Cloud Certified – Associate Cloud Engineer',
      issuer: 'Google Cloud',
      issuerLogo: '🌐',
      category: 'cloud',
      issueDate: 'January 2026',
      credentialId: 'GCP-ACE-440192',
      verifyUrl: 'https://cloud.google.com/certification',
      skills: ['Google Kubernetes Engine', 'Compute Engine', 'Cloud Storage', 'BigQuery', 'Cloud IAM'],
      grade: 'Official Verified Credential',
      description: 'Demonstrated capability to deploy applications, monitor operations, and manage enterprise cloud solutions on Google Cloud Platform.',
      accentColor: '#4285f4',
    },
    {
      id: 'coursera-dsa-ucsd',
      title: 'Data Structures and Algorithms Specialization',
      issuer: 'UC San Diego & HSE University',
      issuerLogo: '🎓',
      category: 'algorithms',
      issueDate: 'June 2025',
      credentialId: 'UCSD-DSA-77821',
      verifyUrl: 'https://www.coursera.org/specializations/data-structures-algorithms',
      skills: ['Shortest Paths', 'Maximum Flow', 'String Algorithms', 'NP-Completeness', 'Linear Programming'],
      grade: 'Completed with Honors',
      description: 'Rigorous algorithmic specialization emphasizing proof of correctness, rigorous runtime bounds, and implementation of complex data structures from scratch.',
      accentColor: '#10b981',
    },
  ];

  const categories = [
    { id: 'all', label: 'All Certifications' },
    { id: 'algorithms', label: 'Algorithms & CP' },
    { id: 'cloud', label: 'Cloud & Infrastructure' },
    { id: 'frontend', label: 'Full Stack & Web' },
  ];

  const filteredCerts = selectedFilter === 'all'
    ? certificates
    : certificates.filter((c) => c.category === selectedFilter);

  const openCertModal = (cert) => {
    soundFx.playSuccess();
    setActiveCert(cert);
    // Trigger celebration confetti
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 },
        colors: [cert.accentColor, '#00f0ff', '#ffffff'],
      });
    } catch (e) {}
  };

  const closeModal = () => {
    soundFx.playClick();
    setActiveCert(null);
  };

  return (
    <section id="certs" style={{
      padding: '100px 24px',
      position: 'relative',
      zIndex: 10,
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="badge badge-primary" style={{ marginBottom: '12px' }}>
            <Award size={14} /> INDUSTRY VERIFIED CREDENTIALS
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 800 }}>
            Official <span className="text-gradient">Certifications & Honors</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', maxWidth: '640px', margin: '12px auto 0' }}>
            Verified technical certifications across cloud architecture, algorithmic problem solving, and modern full-stack development. Click any certificate to inspect credentials and validation proof.
          </p>
        </div>

        {/* Category Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '12px',
          marginBottom: '40px',
          flexWrap: 'wrap',
        }}>
          {categories.map((cat) => {
            const isActive = selectedFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  soundFx.playClick();
                  setSelectedFilter(cat.id);
                }}
                className={isActive ? 'btn-primary' : 'btn-secondary'}
                style={{
                  borderRadius: '10px',
                  padding: '8px 18px',
                  fontSize: '0.85rem',
                }}
                onMouseEnter={() => soundFx.playHover()}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Certifications Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '24px',
        }}>
          {filteredCerts.map((cert) => (
            <div
              key={cert.id}
              className="glass-card-interactive"
              style={{
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                borderLeft: `4px solid ${cert.accentColor}`,
                cursor: 'pointer',
              }}
              onClick={() => openCertModal(cert)}
              onMouseEnter={() => soundFx.playHover()}
            >
              <div>
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '16px',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{cert.issuerLogo}</span>
                    <div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                        {cert.issuer}
                      </div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--neon-emerald)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <ShieldCheck size={12} /> Verified Credential
                      </div>
                    </div>
                  </div>
                  <span className="badge" style={{ borderColor: cert.accentColor, color: cert.accentColor }}>
                    {cert.grade}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>

                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-muted)',
                  marginBottom: '20px',
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {cert.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className="badge" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="badge" style={{ fontSize: '0.75rem', padding: '2px 8px' }}>
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Card Footer */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '16px',
                borderTop: '1px solid var(--border-color)',
              }}>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                  Issued: {cert.issueDate}
                </span>

                <button
                  className="btn-secondary"
                  style={{
                    padding: '6px 14px',
                    fontSize: '0.8rem',
                    borderRadius: '8px',
                    gap: '6px',
                    borderColor: 'var(--border-color)',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    openCertModal(cert);
                  }}
                >
                  <Eye size={14} /> View Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeCert && (
          <div className="modal-overlay" onClick={closeModal}>
            <div
              className="glass-panel"
              style={{
                maxWidth: '600px',
                width: '100%',
                padding: '36px',
                position: 'relative',
                boxShadow: `0 25px 60px rgba(0, 0, 0, 0.7), 0 0 40px ${activeCert.accentColor}33`,
                border: `1px solid ${activeCert.accentColor}`,
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '20px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontSize: '2.4rem' }}>{activeCert.issuerLogo}</span>
                  <div>
                    <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 600 }}>
                      {activeCert.issuer}
                    </span>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800 }}>
                      {activeCert.title}
                    </h3>
                  </div>
                </div>

                <button
                  onClick={closeModal}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: 'var(--text-muted)',
                    fontSize: '1.5rem',
                    cursor: 'pointer',
                    padding: '4px',
                  }}
                >
                  ✕
                </button>
              </div>

              <div style={{
                background: 'rgba(255, 255, 255, 0.03)',
                padding: '16px',
                borderRadius: '12px',
                marginBottom: '20px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '12px',
              }}>
                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Status</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--neon-emerald)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldCheck size={16} /> Verified Authentic
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Credential ID</div>
                  <div style={{ fontSize: '0.85rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>
                    {activeCert.credentialId}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Issued Date</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>
                    {activeCert.issueDate}
                  </div>
                </div>

                <div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Performance Rank</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: 700, color: activeCert.accentColor }}>
                    {activeCert.grade}
                  </div>
                </div>
              </div>

              <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '20px' }}>
                {activeCert.description}
              </p>

              <div style={{ marginBottom: '24px' }}>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, marginBottom: '10px' }}>
                  Verified Competencies & Skills:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {activeCert.skills.map((skill, idx) => (
                    <span key={idx} className="badge badge-primary" style={{ fontSize: '0.8rem' }}>
                      <CheckCircle2 size={12} /> {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
                <button onClick={closeModal} className="btn-secondary">
                  Close
                </button>
                <a
                  href={activeCert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary"
                  style={{
                    background: `linear-gradient(135deg, ${activeCert.accentColor}, #ffffff)`,
                    color: '#000',
                  }}
                  onClick={() => soundFx.playClick()}
                >
                  <ExternalLink size={16} /> Verify Credential
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

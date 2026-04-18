import React from 'react';

const TrustBar = () => {
  const companies = [
    "Google", "Deloitte", "Infosys", "Accenture", "IBM", 
    "Meta", "Amazon", "Microsoft", "Netflix", "JPMorgan"
  ];

  return (
    <section style={{
      padding: 'var(--space-12) 0',
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border-light)',
      borderBottom: '1px solid var(--border-light)',
      overflow: 'hidden',
    }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <p style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: 'var(--space-8)'
        }}>
          Trusted by professionals at top-tier organizations
        </p>
      </div>

      <div style={{
        position: 'relative',
        display: 'flex',
        overflow: 'hidden',
        userSelect: 'none',
        gap: '4rem', /* critical: define exact gap value here */
        width: '100%',
      }} className="marquee-container">
        
        {/* Gradient Masks */}
        <div style={{
          position: 'absolute', left: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to right, var(--bg-secondary) 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute', right: 0, top: 0, bottom: 0, width: '150px',
          background: 'linear-gradient(to left, var(--bg-secondary) 0%, transparent 100%)',
          zIndex: 2, pointerEvents: 'none'
        }} />

        {/* We map twice for the seamless endless effect */}
        {[1, 2].map((track) => (
          <div key={track} className="marquee-content" style={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            minWidth: '100%',
            gap: '4rem', /* critical: match the parent gap */
            animation: 'scroll 30s linear infinite',
          }}>
            {companies.map((company, i) => (
              <div key={`${track}-${i}`} style={{
                fontSize: '1.25rem',
                fontWeight: 700,
                color: 'var(--text-secondary)',
                opacity: 0.5,
                filter: 'grayscale(100%)',
                whiteSpace: 'nowrap'
              }}>
                {company}
              </div>
            ))}
          </div>
        ))}
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          /* To loop perfectly, we must shift by 100% width PLUS the gap width */
          100% { transform: translateX(calc(-100% - 4rem)); } 
        }
        .marquee-container:hover .marquee-content {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default TrustBar;

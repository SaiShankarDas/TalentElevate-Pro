import React, { useEffect } from 'react';
import DigitalStore from '../components/sections/DigitalStore';

const Marketplace = () => {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={{ paddingTop: '80px', minHeight: '80vh' }}>
      <div 
        style={{
          paddingTop: 'var(--space-16)',
          paddingBottom: 'var(--space-12)',
          backgroundImage: 'linear-gradient(to right, rgba(252, 252, 252, 1) 0%, rgba(252, 252, 252, 0.8) 100%), url("/ananya-grey-studio.webp")',
          backgroundSize: 'cover',
          backgroundPosition: 'right center',
          borderBottom: '1px solid var(--border-light)'
        }}
      >
        <div className="container">
          <h1 className="h1" style={{ marginBottom: 'var(--space-4)' }}>Knowledge Hub.</h1>
          <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px' }}>
            Standalone playbooks and templates designed to accelerate your career independently. 
            Reserved for those who want Priyanshi's frameworks on demand.
          </p>
        </div>
      </div>
      <DigitalStore />
    </div>
  );
};

export default Marketplace;

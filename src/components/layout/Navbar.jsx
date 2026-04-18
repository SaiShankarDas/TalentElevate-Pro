import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '/#services' },
    { name: 'Success Stories', href: '/#success' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'About', href: '/#about' },
  ];

  return (
    <>
      <header 
        className="navbar" 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          background: isScrolled ? 'var(--glass-bg)' : 'transparent',
          backdropFilter: isScrolled ? `blur(${generateBlur()})` : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(12px)' : 'none',
          borderBottom: isScrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
          padding: isScrolled ? 'var(--space-3) 0' : 'var(--space-4) 0'
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="logo" style={{ fontWeight: 700, fontSize: '1.25rem', letterSpacing: '0.02em', color: 'var(--bg-dark)' }}>
            <a href="/">PRIYANSHI SHAH</a>
          </div>

          <nav className="desktop-nav" style={{ display: 'none' }}>
            <ul style={{ display: 'flex', gap: 'var(--space-8)' }}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} style={{ 

                    fontSize: '0.9rem', 
                    fontWeight: 500,
                    color: 'var(--text-secondary)',
                    transition: 'color 0.2s ease'
                  }}
                  onMouseEnter={(e) => e.target.style.color = 'var(--text-primary)'}
                  onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="nav-actions" style={{ display: 'none', alignItems: 'center', gap: 'var(--space-4)' }}>
            <Link to="/booking" className="btn btn-glow" style={{ padding: '0.5rem 1.25rem', fontSize: '0.875rem' }}>
              <Calendar size={16} />
              <span>Book Session</span>
            </Link>
          </div>

          <button 
            className="mobile-menu-btn" 
            style={{ display: 'block' }}
            onClick={() => setMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 100,
              background: 'var(--bg-primary)',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--space-12)' }}>
              <div style={{ fontWeight: 700, fontSize: '1.25rem', color: 'var(--bg-dark)' }}>
                PRIYANSHI SHAH
              </div>
              <button onClick={() => setMobileMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
            
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-6)', flex: 1 }}>
              {navLinks.map((link) => (
                <motion.li 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <a 
                    href={link.href} 
                    style={{ fontSize: '1.5rem', fontWeight: 600 }}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
            
            <div style={{ marginTop: 'auto' }}>
              <Link 
                to="/booking"
                className="btn btn-primary" 
                style={{ width: '100%', padding: '1rem', justifyContent: 'center' }}
                onClick={() => setMobileMenuOpen(false)}
              >
                <Calendar size={18} />
                <span>Book Priority Access</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: block !important; }
          .nav-actions { display: flex !important; }
          .mobile-menu-btn { display: none !important; }
        }
      `}</style>
    </>
  );
};

// Helper for dynamic rendering issues
function generateBlur() {
  return "12px";
}

export default Navbar;

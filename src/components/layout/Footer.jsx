import { Link } from 'react-router-dom';
import { Mail, ArrowUpRight } from 'lucide-react';

const LinkedInIcon = ({ size = 18 }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer style={{
      backgroundColor: 'var(--bg-dark)',
      color: 'var(--text-light)',
      padding: 'var(--space-16) 0 var(--space-8) 0',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 'var(--space-12)',
          marginBottom: 'var(--space-12)',
        }}>
          {/* Brand Column */}
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--space-4)' }}>PRIYANSHI SHAH</h3>
            <p style={{ color: 'rgba(255,255,255,0.5)', maxWidth: '280px', lineHeight: 1.7, marginBottom: 'var(--space-6)' }}>
              Strategic HR leadership and high-impact career transformations for modern professionals and tech-driven organizations.
            </p>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              {[
                { icon: <LinkedInIcon size={18} />, href: '#', label: 'LinkedIn' },
                { icon: <Mail size={18} />, href: '#', label: 'Email' }
              ].map((item) => (
                <a 
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  style={{
                    width: '40px', height: '40px',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(255,255,255,0.5)',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-gold)';
                    e.currentTarget.style.color = 'var(--accent-gold)';
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)';
                    e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Quick Links</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              {[
                { label: 'Services', href: '/#services' },
                { label: 'Success Stories', href: '/#success' },
                { label: 'Marketplace', href: '/marketplace' },
                { label: 'About', href: '/#about' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} style={{ 
                    color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', 
                    transition: 'color 0.2s' 
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Contact</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <LinkedInIcon size={14} /> LinkedIn <ArrowUpRight size={12} />
                </a>
              </li>
              <li>
                <a href="#" style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  <Mail size={14} /> Email
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-4)', color: 'var(--accent-gold)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Company</h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
              <li>
                <Link to="/booking" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                >
                  Book a Meeting
                </Link>
              </li>
              {['Terms of Service', 'Privacy Policy'].map((item) => (
                <li key={item}>
                  <a href="#" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={(e) => e.currentTarget.style.color = '#fff'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 'var(--space-4)'
        }}>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            © {currentYear} Priyanshi Shah. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            Designed for ambitious professionals.
          </p>
        </div>
      </div>

      {/* Responsive Overrides */}
      <style>{`
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, ArrowRight, Star, Clock, 
  CheckCircle2, Award, Users, FileText, Briefcase, ChevronRight
} from 'lucide-react';
import { staggerContainer, staggerChild, fadeUp, scaleIn } from '../hooks/useAnimations';
import BookingModal from '../components/ui/BookingModal';

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

const Booking = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const [activeTab, setActiveTab ] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenModal = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const tabs = ['All', '1:1 Call', 'Resume/Profile', 'Interview Prep'];

  const services = [
    {
      category: '1:1 Call',
      title: '10-Minute Quick Call',
      price: '₹499',
      oldPrice: '₹999',
      duration: '10 mins',
      desc: 'Perfect for a pressing doubt, salary negotiation advice, or a quick career block.',
      badge: 'Recommended',
      type: 'Video meeting',
      rating: 5
    },
    {
      category: '1:1 Call',
      title: '30-Minute Deep Dive',
      price: '₹1,499',
      oldPrice: '₹2,499',
      duration: '30 mins',
      desc: 'Core career guidance and switch strategies with a tailored action plan.',
      badge: 'Popular',
      type: 'Video meeting',
      rating: 5
    },
    {
      category: '1:1 Call',
      title: '60-Minute Premium Session',
      price: '₹2,499',
      oldPrice: '₹4,999',
      duration: '60 mins',
      desc: 'Intensive roadmap covering target companies, upskilling, and branding.',
      type: 'Video meeting',
      rating: 4.9
    },
    {
      category: 'Resume/Profile',
      title: 'Resume & LinkedIn Review',
      price: '₹799',
      oldPrice: '₹1,599',
      duration: 'Async (Loom)',
      desc: 'Expert video teardown of your profile gaps and fatal ATS flaws.',
      type: 'Feedback video',
      rating: 5
    },
    {
      category: 'Resume/Profile',
      title: 'Ultimate Hired Bundle',
      price: '₹3,499',
      oldPrice: '₹6,499',
      duration: '3-5 days',
      desc: 'Resume Rewrite + LinkedIn overhaul + ATS keyword optimization.',
      badge: 'Best Value',
      type: 'Done-for-you pack',
      rating: 5
    },
    {
      category: 'Interview Prep',
      title: 'Mock Interview Mastery',
      price: '₹1,999',
      oldPrice: '₹3,999',
      duration: '45 mins',
      desc: 'Rigorous 30-min mock interview + 15-min harsh constructive feedback.',
      type: 'Video meeting',
      rating: 5
    }
  ];

  const filteredServices = activeTab === 'All' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <div style={{ background: 'var(--bg-primary)', display: 'flex', flexDirection: 'column' }}>
      {/* Top spacer for fixed navbar clearance */}
      <div style={{ height: '100px', width: '100%' }}></div>
      
      <div className="container-fluid" style={{ padding: 0, flex: 1, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start' }}>
        
        {/* Left Sidebar: Profile & Bio - Aligned with Website Theme */}
        <div style={{ 
          flex: '0 0 400px', 
          background: 'var(--bg-primary)', 
          padding: '48px 32px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'sticky',
          top: '100px',
          height: 'calc(100vh - 100px)',
          alignSelf: 'flex-start',
          borderRight: '1px solid var(--border-light)'
        }}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{ position: 'relative' }}
          >
            <div className="sidebar-avatar-wrapper" style={{ 
              width: '180px', height: '180px', borderRadius: '50%', 
              overflow: 'hidden', border: '6px solid white',
              marginBottom: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: 'all 0.3s ease'
            }}>
              <img 
                src="/ananya-grey-studio.webp" 
                alt="Priyanshi Shah" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            {/* Verified Blue Tick */}
            <motion.div
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.6, type: 'spring', stiffness: 400 }}
              style={{
                position: 'absolute',
                bottom: '30px',
                right: '10px',
                background: '#fff',
                borderRadius: '50%',
                padding: '2px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
              }}
            >
              <CheckCircle2 size={28} fill="var(--accent-blue)" color="#fff" strokeWidth={2.5} />
            </motion.div>
          </motion.div>

          <h1 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--bg-dark)', marginBottom: '8px' }}>
            Priyanshi Shah
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '24px', lineHeight: 1.5 }}>
            HR Manager | Turning People, Careers & Content into Impact | <br/>42K+ Community | Open to Brand Collaborations.
          </p>

          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ 
              background: 'white', padding: '12px 20px', borderRadius: '16px', 
              boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)', 
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--bg-dark)' }}>43.2K+</div>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', textAlign: 'left', lineHeight: 1 }}>Followers</div>
            </div>
            <div style={{ 
              background: 'white', padding: '12px 20px', borderRadius: '16px', 
              boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)', 
              display: 'flex', alignItems: 'center', gap: '8px'
            }}>
              <div style={{ color: '#fbbf24' }}><Star size={20} fill="#fbbf24" /></div>
              <div style={{ fontWeight: 800, fontSize: '1.25rem', color: 'var(--bg-dark)' }}>4.9</div>
            </div>
          </div>

          <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', opacity: 0.8, maxWidth: '320px', marginBottom: '32px', lineHeight: 1.6 }}>
            Human Resources — not just resources, but humans first. In a world of AI and automation, I believe the human still matters the most.
          </p>

          <div style={{ marginTop: 'auto', display: 'flex', gap: '16px', paddingBottom: '12px' }}>
            <motion.a
              href="https://linkedin.com/in/hr-priyanshi-shah"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--bg-dark)', color: '#fff' }}
              style={{
                width: '48px', height: '48px', borderRadius: '14px', border: '1px solid var(--border-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-dark)',
                transition: 'all 0.3s', background: 'white'
              }}
            >
              <LinkedInIcon size={22} />
            </motion.a>
            <motion.a
              href="mailto:shah.priyanshi.1801@gmail.com"
              whileHover={{ scale: 1.1, backgroundColor: 'var(--bg-dark)', color: '#fff' }}
              style={{
                width: '48px', height: '48px', borderRadius: '14px', border: '1px solid var(--border-light)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--bg-dark)',
                transition: 'all 0.3s', background: 'white'
              }}
            >
              <Mail size={22} />
            </motion.a>
          </div>
        </div>

        {/* Right Content: Services - REDESIGNED */}
        <div style={{ 
          flex: 1, 
          padding: '24px var(--space-8) var(--space-12) var(--space-8)',
          background: 'var(--bg-secondary)',
          position: 'relative',
          minHeight: '100%'
        }}>
          {/* Background Image Layer */}
          <div style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: 'url("/ananya-corporate-interior.webp")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.1,
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          {/* Gradient Overlay for extra smoothness */}
          <div style={{
            position: 'absolute',
            inset: 0,
            background: 'linear-gradient(to bottom, transparent 0%, var(--bg-secondary) 100%)',
            zIndex: 0,
            pointerEvents: 'none'
          }} />

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Tabs - COMPACT 'Small Boxes' Styling */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '32px', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: '10px 20px', borderRadius: '12px', fontWeight: 600, fontSize: '0.9rem',
                  background: activeTab === tab ? '#000' : 'transparent',
                  color: activeTab === tab ? '#fff' : '#000',
                  border: '1px solid #000',
                  cursor: 'pointer', transition: 'all 0.2s',
                  whiteSpace: 'nowrap'
                }}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Service Grid - Ensuring 2-column layout for 'shorter length' cells */}
          <motion.div 
            style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', 
              gap: '24px' 
            }}
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <AnimatePresence mode="popLayout">
              {filteredServices.map((service, i) => (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  style={{ 
                    padding: '28px', 
                    display: 'flex', 
                    flexDirection: 'column', 
                    background: 'white',
                    borderRadius: '24px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.03)',
                    position: 'relative',
                    minHeight: '300px',
                    border: '1px solid #eee'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                    <div style={{ fontSize: '0.8rem', color: '#6b7280', fontWeight: 500 }}>
                      {service.type} • {service.duration}
                    </div>
                    {service.rating && (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.8rem', fontWeight: 700 }}>
                        <Star size={14} fill="#000" /> {service.rating}
                      </div>
                    )}
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#000', lineHeight: 1.25, marginBottom: '12px' }}>
                    {service.title}
                  </h3>

                  <p style={{ color: '#4b5563', fontSize: '0.95rem', marginBottom: '20px', flexGrow: 1, lineHeight: 1.5 }}>
                    {service.desc}
                  </p>

                  {service.items && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px', padding: '16px', background: '#f9fafb', borderRadius: '16px', border: '1px solid #f3f4f6' }}>
                      {service.items.map((item, idx) => (
                        <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#1f2937' }}>{item.name}</span>
                            <span style={{ fontSize: '0.7rem', color: '#6b7280' }}>{item.type}</span>
                          </div>
                          <span style={{ fontWeight: 800, color: '#6b7280', fontSize: '0.85rem' }}>×{item.count}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div style={{ borderTop: '1px solid #f3f4f6', paddingTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                        <span style={{ fontSize: '1.4rem', fontWeight: 800, color: '#000' }}>{service.price}</span>
                        {service.priceSuffix && (
                          <span style={{ fontSize: '0.85rem', color: '#6b7280', fontWeight: 500 }}>{service.priceSuffix}</span>
                        )}
                        {service.oldPrice && (
                          <span style={{ fontSize: '0.85rem', color: '#9ca3af', textDecoration: 'line-through', marginLeft: '6px' }}>{service.oldPrice}</span>
                        )}
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                        {service.secondaryPrice && (
                          <span style={{ fontSize: '0.9rem', color: '#6b7280', fontWeight: 500 }}>{service.secondaryPrice}</span>
                        )}
                        {service.category === 'Package' && service.originalValue && (
                          <span style={{ fontSize: '0.8rem', color: '#9ca3af', textDecoration: 'line-through' }}>{service.originalValue}</span>
                        )}
                      </div>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      {service.badge && (
                        <span style={{ 
                          padding: '5px 12px', borderRadius: '20px', 
                          background: service.badge === 'Popular' ? '#eff6ff' : (service.badge === 'Best Deal' || service.badge === 'Best Value') ? '#f5f3ff' : '#fff7ed',
                          color: service.badge === 'Popular' ? '#2563eb' : (service.badge === 'Best Deal' || service.badge === 'Best Value') ? '#7c3aed' : '#ea580c', 
                          fontSize: '0.75rem', fontWeight: 700
                        }}>
                          {service.badge}
                        </span>
                      )}
                      <motion.button
                        whileHover={{ scale: 1.1, background: '#000', color: '#fff' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleOpenModal(service)}
                        style={{ 
                          width: '40px', height: '40px', borderRadius: '50%', background: '#fff', border: '1px solid #e5e7eb',
                          display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.2s',
                          boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                        }}
                      >
                        <ChevronRight size={20} />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
        </div>
      </div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        service={selectedService}
      />

      <style>{`
        @media (max-width: 1024px) {
          .container-fluid { flexDirection: column !important; }
          div[style*="flex: 0 0 400px"] { 
            flex: none !important; 
            width: 100% !important; 
            minHeight: auto !important;
            position: relative !important;
            top: auto !important;
            padding: 32px 20px !important;
            border-right: none !important;
            border-bottom: 1px solid var(--border-light) !important;
          }
          .sidebar-avatar-wrapper {
            width: 120px !important;
            height: 120px !important;
            margin-bottom: 16px !important;
          }
          h1[style*="fontSize: '2.2rem'"] {
            font-size: 1.8rem !important;
          }
          p[style*="fontSize: '1.1rem'"] {
            font-size: 0.95rem !important;
            margin-bottom: 16px !important;
          }
          div[style*="gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))'"] {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          div[style*="padding: '24px var(--space-8) var(--space-12) var(--space-8)'"] {
            padding: 20px var(--space-4) !important;
          }
          div[style*="padding: '28px'"] {
            padding: 20px !important;
            min-height: auto !important;
          }
          div[style*="height: 100px"] { height: 80px !important; }
        }
      `}</style>
    </div>
  );
};


export default Booking;



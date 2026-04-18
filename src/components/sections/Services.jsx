import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, Briefcase, FileText, Target, Award, ArrowRight, Shield } from 'lucide-react';
import { staggerContainer, staggerChild, fadeUp } from '../../hooks/useAnimations';

const Services = () => {
  const [activeCategory, setActiveCategory] = React.useState('B2C');

  const categories = [
    { id: 'B2C', label: 'Career Accelerators' },
    { id: 'B2B', label: 'Enterprise Solutions' },
  ];

  const careerServices = [
    {
      group: '1:1 Consultations',
      items: [
        { title: '10-Minute Quick Call', price: '₹499', outcome: 'Immediate clarity on a specific career block or salary doubt.', positioning: 'Urgent advice / AMA' },
        { title: '30-Minute Deep Dive', price: '₹1,499', outcome: 'Tailored step-by-step action plan sent via email post-session.', positioning: 'Job switch guidance / Career planning' },
        { title: '60-Minute Premium Session', price: '₹2,499', outcome: 'Comprehensive roadmap: target companies, upskilling, and branding.', positioning: 'Intensive career strategy' },
      ]
    },
    {
      group: 'Resume & Profile',
      items: [
        { title: 'Resume & LinkedIn Review', price: '₹799', outcome: '5-minute Loom video pointing out fatal ATS flaws and profile gaps.', positioning: 'Asynchronous audit' },
        { title: 'Complete Resume Rewrite', price: '₹2,499', outcome: 'ATS-optimized, metrics-driven resume delivered in 3-5 days.', positioning: 'Done-For-You premium' },
        { title: 'Ultimate Optimization Bundle', price: '₹3,499', outcome: 'Resume Rewrite + LinkedIn Overhaul + ATS keyword optimization.', positioning: 'The "Hired" Bundle' },
      ]
    },
    {
      group: 'Interview Mastery',
      items: [
        { title: 'Mock Interview (45 mins)', price: '₹1,999', outcome: '30-min rigorous mock + 15-min scorecards/feedback.', positioning: 'Behavioral & Technical prep' },
        { title: 'HR Round Prep (30 mins)', price: '₹1,299', outcome: 'Salary negotiation + Cultural fit + "Tell me about yourself".', positioning: 'Core interview readiness' },
      ]
    }
  ];

  const enterpriseServices = [
    {
      title: 'Hiring Strategy Consultation',
      price: '₹3,500 - ₹5,000 / hr',
      outcome: 'Design recruitment SOPs, interview frameworks, and talent acquisition playbooks.',
      positioning: 'For Seed to Series Startups'
    },
    {
      title: 'B2B Strategic Advisory',
      price: '₹15,000+',
      outcome: 'Retainer-based candidate screening or building company HR frameworks from scratch.',
      positioning: 'Corporate Retainer'
    }
  ];

  return (
    <section id="services" style={{ padding: 'var(--space-24) 0', backgroundColor: 'var(--bg-primary)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: 'var(--space-16)' }}
        >
          <div style={{
            display: 'inline-flex', padding: '6px 16px',
            background: 'rgba(37, 99, 235, 0.06)', borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-4)', fontSize: '0.8rem', fontWeight: 600,
            color: 'var(--accent-blue)', letterSpacing: '0.05em', textTransform: 'uppercase'
          }}>
            Strategic Interventions
          </div>
          <h2 className="h2" style={{ marginBottom: 'var(--space-6)' }}>Elevate Your Career Mandate</h2>
          
          {/* Category Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-full)',
                  border: '1px solid',
                  borderColor: activeCategory === cat.id ? 'var(--accent-blue)' : 'var(--border-light)',
                  background: activeCategory === cat.id ? 'var(--accent-blue)' : 'transparent',
                  color: activeCategory === cat.id ? '#fff' : 'var(--text-secondary)',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {activeCategory === 'B2C' ? (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-12)' }}>
            {careerServices.map((group, idx) => (
              <motion.div 
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
              >
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--space-6)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(to left, var(--accent-blue), transparent)', opacity: 0.2 }} />
                  {group.group}
                  <div style={{ height: '1px', flexGrow: 1, background: 'linear-gradient(to right, var(--accent-blue), transparent)', opacity: 0.2 }} />
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {group.items.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={staggerChild}
                      className="glass-card"
                      style={{ padding: 'var(--space-8)', display: 'flex', flexDirection: 'column', transition: 'all 0.35s ease' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'translateY(-8px)';
                        e.currentTarget.style.borderColor = 'var(--accent-blue)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.borderColor = 'var(--border-light)';
                      }}
                    >
                      <div style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '1px' }}>
                        {item.positioning}
                      </div>
                      <h4 className="h4" style={{ marginBottom: 'var(--space-3)', fontSize: '1.1rem' }}>{item.title}</h4>
                      <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: 'var(--space-4)' }}>{item.price}</div>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: 'var(--space-6)', flexGrow: 1, borderTop: '1px solid var(--border-light)', paddingTop: '16px' }}>
                        <strong style={{ display: 'block', color: 'var(--text-primary)', marginBottom: '4px', fontSize: '0.8rem' }}>OUTCOME:</strong>
                        {item.outcome}
                      </p>
                      <Link to="/booking" className="btn btn-secondary" style={{ width: '100%', padding: '0.75rem', justifyContent: 'center' }}>Secure Session</Link>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {enterpriseServices.map((item, i) => (
              <motion.div
                key={i}
                variants={staggerChild}
                className="glass-card"
                style={{ 
                  padding: 'var(--space-12)', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  background: 'var(--bg-dark)', 
                  color: 'var(--text-light)',
                  border: '1px solid var(--border-gold)',
                  position: 'relative',
                  overflow: 'hidden'
                }}
              >
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'var(--accent-gold)', color: '#000', padding: '4px 12px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 700 }}>
                  B2B PRIORITY
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--accent-gold)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '12px' }}>{item.positioning}</div>
                <h3 className="h3" style={{ color: '#fff', marginBottom: 'var(--space-4)' }}>{item.title}</h3>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--accent-gold)', marginBottom: 'var(--space-6)' }}>{item.price}</div>
                <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.7, marginBottom: 'var(--space-8)', flexGrow: 1 }}>
                  <strong style={{ color: '#fff' }}>ROI Focus:</strong> {item.outcome}
                </p>
                <Link to="/booking" className="btn btn-gold" style={{ width: '100%', justifyContent: 'center' }}>Report Consultation</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Services;

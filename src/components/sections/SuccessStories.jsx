import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Award, Building, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { staggerContainer, staggerChild, fadeUp } from '../../hooks/useAnimations';

const SuccessStories = () => {
  const stories = [
    {
      name: "Krunal Danej",
      title: "IT Solutions Professional",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
      linkedin: "https://linkedin.com/in/hr-priyanshi-shah",
      metric: "Excellence",
      label: "Communication",
      quote: "Priyanshi is an excellent communicator, fostering strong collaborations between departments and ensuring smooth organizational operations.",
      icon: <CheckCircle2 size={20} color="var(--accent-blue)" />
    },
    {
      name: "Mehul Prajapati",
      title: "ERP Solutions Specialist",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=100&h=100",
      linkedin: "https://linkedin.com/in/hr-priyanshi-shah",
      metric: "Results",
      label: "Positive Environment",
      quote: "I highly recommend HR Priyanshi for her professionalism and ability to deliver results while fostering a positive work environment.",
      icon: <TrendingUp size={20} color="var(--accent-blue)" />
    },
    {
      name: "Pooja Sharma",
      title: "Senior Tech Consultant",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
      linkedin: "https://linkedin.com/in/hr-priyanshi-shah",
      metric: "3x",
      label: "Offer Rate",
      quote: "The 1:1 strategy sessions with Priyanshi gave me the exact frameworks I needed to command a higher compensation package and demonstrate immense value.",
      icon: <Award size={20} color="var(--accent-blue)" />
    }
  ];

  return (
    <section id="success" style={{ padding: 'var(--space-16) 0', backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          style={{ textAlign: 'center', marginBottom: 'var(--space-12)' }}
        >
          <div style={{
            display: 'inline-flex', padding: '6px 16px',
            background: 'rgba(37, 99, 235, 0.06)', borderRadius: 'var(--radius-full)',
            marginBottom: 'var(--space-4)', fontSize: '0.8rem', fontWeight: 600,
            color: 'var(--accent-blue)', letterSpacing: '0.03em'
          }}>
            Real Results
          </div>
          <h2 className="h2" style={{ marginBottom: 'var(--space-4)' }}>Transformation Wall</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Realized executive trajectories and rapid organizational growth from verifiable professionals.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {stories.map((story, i) => (
            <motion.div
              key={i}
              variants={staggerChild}
              className="glass-card"
              style={{
                padding: 'var(--space-8)',
                background: 'var(--bg-primary)',
                display: 'flex', flexDirection: 'column',
                transition: 'transform 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(0, 0, 0, 0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
              }}
            >
              <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', marginBottom: 'var(--space-6)' }}>
                <img
                  src={story.avatar}
                  alt={story.name}
                  style={{ width: '56px', height: '56px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--border-light)' }}
                />
                <div>
                  <h4 style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--bg-dark)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                    {story.name} <CheckCircle2 size={14} color="var(--accent-blue)" />
                  </h4>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{story.title}</div>
                </div>
              </div>

              <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 'var(--space-8)', flexGrow: 1, lineHeight: 1.7 }}>
                "{story.quote}"
              </p>

              <div style={{
                paddingTop: 'var(--space-4)', borderTop: '1px solid var(--border-light)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
              }}>
                <div>
                  <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--bg-dark)', lineHeight: 1.1 }}>{story.metric}</div>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-secondary)', textTransform: 'uppercase' }}>{story.label}</div>
                </div>
                <a href={story.linkedin} style={{
                  display: 'inline-flex', alignItems: 'center', gap: '4px',
                  fontSize: '0.75rem', fontWeight: 600, color: 'var(--accent-blue)',
                  padding: '6px 12px', background: 'rgba(37,99,235,0.1)', borderRadius: 'var(--radius-full)',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-blue)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'rgba(37,99,235,0.1)';
                  e.currentTarget.style.color = 'var(--accent-blue)';
                }}
                >
                  Verify <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SuccessStories;

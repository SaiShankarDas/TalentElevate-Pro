import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Globe, Award, Briefcase, Users, BookOpen } from 'lucide-react';
import { useCountUp, fadeUp, staggerContainer, staggerChild } from '../../hooks/useAnimations';

const AchievementCard = ({ count, label, icon, suffix = '' }) => {
  const isNumeric = !isNaN(parseInt(count));
  const { ref, value } = useCountUp(isNumeric ? parseInt(count) : 0, 2000, { suffix });

  return (
    <motion.div
      variants={staggerChild}
      ref={ref}
      style={{
        padding: 'var(--space-6)',
        background: 'var(--bg-secondary)',
        border: '1px solid var(--border-light)',
        borderRadius: 'var(--radius-lg)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        cursor: 'default'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-md)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ color: 'var(--accent-blue)' }}>{icon}</div>
      <div>
        <div style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px', fontVariantNumeric: 'tabular-nums' }}>
          {isNumeric ? value : count}
        </div>
        <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" style={{
      paddingTop: 'var(--space-16)',
      paddingBottom: 0,
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Dynamic Background Photo Layer - High Visibility */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        backgroundImage: 'url("/ananya-office-blur.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 0.25,
      }} />
      
      {/* Gradient Overlay for Text Legibility while keeping photo visible */}
      <div style={{
        position: 'absolute',
        inset: 0,
        zIndex: 0,
        background: 'linear-gradient(to right, rgba(252,252,252,0.95) 0%, rgba(252,252,252,0.7) 40%, rgba(252,252,252,0.3) 100%)',
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16" style={{ alignItems: 'center' }}>

          {/* Left: Biography & CTA */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={staggerChild} style={{
              display: 'inline-flex', alignItems: 'center',
              padding: 'var(--space-2) var(--space-4)',
              background: 'rgba(37, 99, 235, 0.06)', borderRadius: 'var(--radius-full)',
              marginBottom: 'var(--space-6)', fontSize: '0.8rem', fontWeight: 600,
              color: 'var(--accent-blue)', letterSpacing: '0.03em'
            }}>
              About Priyanshi
            </motion.div>

            <motion.h2 variants={staggerChild} className="h2" style={{ marginBottom: 'var(--space-6)', color: 'var(--text-primary)' }}>
              Human Resources — Not Just Resources, But Humans First.
            </motion.h2>
            <motion.p variants={staggerChild} style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--space-4)', lineHeight: 1.8 }}>
              Priyanshi Shah is an HR Manager and Creator at the intersection of people, process, and performance. With experience at organizations like L&T Heavy Engineering and Propelius Technologies, she has built a reputation for designing employee-focused systems that scale.
            </motion.p>
            <motion.p variants={staggerChild} style={{ color: 'var(--text-secondary)', fontSize: '1.125rem', marginBottom: 'var(--space-8)', lineHeight: 1.8 }}>
              Beyond the corporate boardrooms, she mentors a 43,200+ strong community on LinkedIn, sharing no-fluff insights on hiring, workplace culture, and career growth for the modern professional.
            </motion.p>

            <motion.div variants={staggerChild}>
              <Link
                to="/booking"
                className="btn btn-glow"
                style={{ padding: '0.875rem 2rem', display: 'flex', alignItems: 'center', gap: '12px', width: 'fit-content' }}
              >
                Book a Strategy Call <ArrowRight size={18} />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Achievement Dashboard */}
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <AchievementCard count="43K" suffix="+" label="Creator Community" icon={<Users />} />
            <AchievementCard count="Propelius" label="Current HR Manager" icon={<Award />} />
            <AchievementCard count="Distinction" label="M.A. in HRD" icon={<BookOpen size={24} />} />
            <AchievementCard count="Global" label="Consulting Reach" icon={<Globe />} />
          </motion.div>

        </div>
      </div>

      {/* VIP Priority CTA — Integrated into the main background */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        style={{
          marginTop: 'var(--space-8)',
          paddingBottom: 'var(--space-16)',
        }}
      >
        <div className="container vip-cta-container" style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 'var(--space-6)',
          padding: '2rem',
          background: 'rgba(255, 255, 255, 0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: 'var(--radius-xl)',
          border: '1px solid rgba(255, 255, 255, 0.5)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--text-primary)', marginBottom: '4px' }}>
              Need urgent hiring or career guidance within 24 hours?
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
              Priority sessions with guaranteed same-day turnaround for time-sensitive decisions.
            </p>
          </div>
          <Link
            to="/booking"
            className="btn btn-glow"
            style={{ padding: '0.875rem 2rem', fontSize: '1rem', whiteSpace: 'nowrap', display: 'flex', alignItems: 'center', gap: '12px' }}
          >
            Book Priority Access
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default About;

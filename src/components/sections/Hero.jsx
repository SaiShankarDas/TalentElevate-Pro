import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCountUp, staggerContainer, staggerChild, fadeUp } from '../../hooks/useAnimations';

const StatCounter = ({ target, suffix, label }) => {
  const { ref, value } = useCountUp(target, 2200, { suffix });
  return (
    <div ref={ref}>
      <div style={{ fontSize: '2.25rem', fontWeight: 700, color: 'var(--bg-dark)', marginBottom: '4px', fontVariantNumeric: 'tabular-nums' }}>{value}</div>
      <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', fontWeight: 500 }}>{label}</div>
    </div>
  );
};

const Hero = () => {
  return (
    <section style={{
      padding: 'var(--space-24) 0 var(--space-16) 0',
      minHeight: '80vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Background glow orbs */}
      <div style={{
        position: 'absolute', top: '-10%', right: '-10%',
        width: '500px', height: '500px', borderRadius: '50%',
        background: 'radial-gradient(circle, var(--accent-blue-glow) 0%, transparent 70%)',
        opacity: 0.4, zIndex: 0, pointerEvents: 'none',
        animation: 'float 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute', bottom: '-15%', left: '-5%',
        width: '400px', height: '400px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(197,168,128,0.15) 0%, transparent 70%)',
        opacity: 0.5, zIndex: 0, pointerEvents: 'none',
        animation: 'float 10s ease-in-out infinite reverse'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12" style={{ alignItems: 'center' }}>

          {/* Left Column */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={staggerChild} style={{
              display: 'inline-flex', alignItems: 'center', gap: 'var(--space-2)',
              padding: 'var(--space-2) var(--space-4)',
              background: 'var(--glass-bg)', borderRadius: 'var(--radius-full)',
              border: '1px solid var(--border-light)', marginBottom: 'var(--space-6)',
              fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-secondary)'
            }}>
              <Star size={14} style={{ color: 'var(--accent-gold)' }} /> India's Leading Executive HR Strategist
            </motion.div>

            <motion.h1 variants={staggerChild} className="h1" style={{ marginBottom: 'var(--space-6)' }}>
              Turning People, Careers & Content into <span className="text-gradient">Impact.</span>
            </motion.h1>

            <motion.p variants={staggerChild} className="text-lg" style={{
              color: 'var(--text-secondary)', marginBottom: 'var(--space-8)', maxWidth: '90%'
            }}>
              HR Manager & Creator helping teams build scalable people systems and professionals achieve high-impact careers. 42K+ community on LinkedIn.
            </motion.p>

            <motion.div variants={staggerChild} style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
              <motion.div
                whileHover={{ scale: 1.04, boxShadow: '0 0 40px var(--accent-blue-glow)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <Link
                  to="/booking"
                  className="btn btn-glow"
                  style={{ padding: '0.875rem 2rem', display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                  Book Consultation <ArrowRight size={18} />
                </Link>
              </motion.div>
              <motion.button
                className="btn btn-secondary"
                style={{ padding: '0.875rem 2rem' }}
                whileHover={{ scale: 1.03, borderColor: 'var(--bg-dark)' }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                onClick={() => document.getElementById('services').scrollIntoView({ behavior: 'smooth' })}
              >
                Explore Services
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column: Portrait & Floating Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ position: 'relative' }}
          >
            <div style={{
              position: 'relative', borderRadius: 'var(--radius-xl)',
              overflow: 'visible'
            }}>
              <img
                src="/ananya-grey-studio.webp"
                alt="Priyanshi Shah"
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-lg)', border: '1px solid var(--border-light)' }}
              />

              {/* Floating: Client Rating */}
              <motion.div
                className="glass-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  position: 'absolute', top: '24px', left: '-24px',
                  padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '12px',
                  animation: 'floatCard 6s ease-in-out infinite'
                }}
              >
                <div style={{
                  width: '40px', height: '40px', borderRadius: '50%',
                  background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--accent-gold)'
                }}>
                  <Star size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>CLIENT RATING</div>
                  <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bg-dark)' }}>4.9/5.0</div>
                </div>
              </motion.div>

              {/* Floating: Next Available */}
              <motion.div
                className="glass-card"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{
                  position: 'absolute', bottom: '32px', right: '-16px',
                  padding: '16px 20px',
                  animation: 'floatCard 7s ease-in-out infinite reverse'
                }}
              >
                <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', fontWeight: 600, letterSpacing: '0.05em' }}>NEXT AVAILABLE</div>
                <div style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--accent-blue)', marginTop: '2px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e', display: 'inline-block', animation: 'pulse 2s ease-in-out infinite' }} />
                  Tomorrow • 11:30 AM
                </div>
              </motion.div>

              {/* Floating: Trending stat */}
              <motion.div
                className="glass-card"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
                style={{
                  position: 'absolute', top: '50%', right: '-30px',
                  padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '8px',
                  animation: 'floatCard 5s ease-in-out infinite'
                }}
              >
                <TrendingUp size={18} color="var(--accent-blue)" />
                <div>
                  <div style={{ fontSize: '0.95rem', fontWeight: 700, color: 'var(--bg-dark)' }}>+45%</div>
                  <div style={{ fontSize: '0.65rem', color: 'var(--text-secondary)', fontWeight: 500 }}>Avg. Salary Bump</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>

        {/* Stats Row with Animated Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={fadeUp}
          style={{
            marginTop: 'var(--space-16)', paddingTop: 'var(--space-8)',
            borderTop: '1px solid var(--border-light)',
            display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-6)'
          }}
        >
          <StatCounter target={1200} suffix="+" label="Professionals Guided" />
          <StatCounter target={300} suffix="+" label="Hiring Consultations" />
          <StatCounter target={75} suffix="+" label="Companies Served" />
          <StatCounter target={98} suffix="%" label="Success Rate" />
        </motion.div>
      </div>

      {/* Keyframe animations & Mobile Overrides */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        @keyframes floatCard {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }

        @media (max-width: 768px) {
          section { padding: var(--space-16) 0 !important; }
          .h1 { text-align: center; margin-bottom: var(--space-4) !important; }
          .text-lg { text-align: center; margin: 0 auto var(--space-8) auto !important; width: 100% !important; }
          div[style*="inline-flex"] { width: 100%; justify-content: center; }
          div[style*="display: flex; gap: var(--space-4)"] { justify-content: center; }
          
          /* Adjust floating cards for mobile */
          div[style*="left: -24px"] { left: 0 !important; top: -10px !important; }
          div[style*="right: -16px"] { right: 0 !important; bottom: -10px !important; }
          div[style*="right: -30px"] { right: 0 !important; transform: scale(0.9) !important; }
          
          /* Stats row */
          div[style*="justify-content: space-between"] {
            justify-content: center !important;
            gap: var(--space-8) !important;
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, IndianRupee, Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { fadeUp, scaleIn } from '../../hooks/useAnimations';

const SmartBooking = () => {
  const [activeCategory, setActiveCategory] = useState("10-Minute Quick Call");
  const [selectedDate, setSelectedDate] = useState(new Date().getDate() + 1);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const categories = [
    { name: "10-Minute Quick Call", price: "₹499", duration: "10 Minutes", desc: "A highly focused 'Ask Me Anything' session for urgent results." },
    { name: "30-Minute Deep Dive", price: "₹1,499", duration: "30 Minutes", desc: "The core career growth session with a tailored step-by-step action plan." },
    { name: "60-Minute Premium Session", price: "₹2,499", duration: "60 Minutes", desc: "Intensive career strategy covering upskilling, target companies, and branding." },
  ];

  const dates = Array.from({ length: 14 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i + 1);
    return {
      day: d.toLocaleString('en-us', { weekday: 'short' }),
      date: d.getDate(),
      full: d
    };
  });

  const slots = ["10:00 AM", "11:30 AM", "02:00 PM", "04:30 PM", "06:00 PM"];

  return (
    <section id="book" style={{
      padding: 'var(--space-16) 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background image layer */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url("/ananya-corporate-interior.webp")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        filter: 'brightness(0.5) contrast(1.1)',
        opacity: 0.1,
      }} />
      {/* Dark gradient overlay for extreme readability */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        background: 'linear-gradient(180deg, var(--bg-secondary) 0%, rgba(244,245,247,0.92) 50%, var(--bg-secondary) 100%)',
      }} />
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

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
            Book Directly
          </div>
          <h2 className="h2" style={{ marginBottom: 'var(--space-4)' }}>Book a Session</h2>
          <p className="text-lg" style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
            Direct access to transformative strategy. Choose your engagement level.
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{
            display: 'flex', overflowX: 'auto', gap: 'var(--space-2)',
            paddingBottom: 'var(--space-4)', marginBottom: 'var(--space-8)',
            scrollbarWidth: 'none', msOverflowStyle: 'none'
          }}
        >
          {categories.map((cat) => (
            <motion.button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="glass-card"
              style={{
                padding: 'var(--space-3) var(--space-6)', whiteSpace: 'nowrap',
                fontWeight: 600, fontSize: '0.875rem',
                border: activeCategory === cat.name ? '1px solid var(--accent-blue)' : '1px solid transparent',
                background: activeCategory === cat.name ? 'var(--bg-primary)' : 'var(--bg-secondary)',
                color: activeCategory === cat.name ? 'var(--accent-blue)' : 'var(--text-secondary)',
                boxShadow: activeCategory === cat.name ? 'var(--shadow-md)' : 'none',
                transition: 'border-color 0.25s, background 0.25s, color 0.25s, box-shadow 0.25s',
              }}
            >
              {cat.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Smart Calendar Flow */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={scaleIn}
          className="glass-card grid grid-cols-1 md:grid-cols-2 gap-0"
          style={{ overflow: 'hidden', padding: 0 }}
        >

          {/* Left: Summary Panel */}
          <div style={{ padding: 'var(--space-8)', borderRight: '1px solid var(--glass-border)', background: 'var(--bg-primary)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
              <span style={{
                background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)',
                padding: '4px 12px', borderRadius: 'var(--radius-full)',
                fontSize: '0.75rem', fontWeight: 700,
                display: 'flex', alignItems: 'center', gap: '4px'
              }}>
                <Star size={12} fill="currentColor" /> POPULAR
              </span>
            </div>

            <AnimatePresence mode="wait">
              <motion.h3
                key={activeCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
                className="h3"
                style={{ marginBottom: 'var(--space-4)' }}
              >
                {activeCategory}
              </motion.h3>
            </AnimatePresence>

            <p style={{ color: 'var(--text-secondary)', marginBottom: 'var(--space-8)' }}>
              {categories.find(c => c.name === activeCategory)?.desc || "A high-impact strategy session tailored to your specific career crossroads."}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 500 }}>
                <Clock size={20} color="var(--accent-blue)" /> {categories.find(c => c.name === activeCategory)?.duration || "60 Minutes"}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: 'var(--text-primary)', fontWeight: 500 }}>
                <IndianRupee size={20} color="var(--accent-blue)" /> {categories.find(c => c.name === activeCategory)?.price || "1,499"}
              </div>
            </div>

            <div style={{
              background: 'var(--bg-secondary)', padding: 'var(--space-4)', borderRadius: 'var(--radius-md)',
              display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start'
            }}>
              <img
                src="/ananya-grey-studio.webp"
                alt="Avatar"
                style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }}
              />
              <div>
                <div style={{ fontWeight: 600 }}>Priyanshi Shah</div>
                <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>Senior HR Strategist</div>
              </div>
            </div>
          </div>

          {/* Right: Calendar Selection */}
          <div style={{ padding: 'var(--space-8)', background: 'var(--glass-bg)' }}>
            <h4 style={{ fontWeight: 600, marginBottom: 'var(--space-6)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              Select Date & Time
              <div style={{ display: 'flex', gap: '8px' }}>
                {[ChevronLeft, ChevronRight].map((Icon, i) => (
                  <motion.button
                    key={i}
                    whileHover={{ scale: 1.15, backgroundColor: 'var(--bg-secondary)' }}
                    whileTap={{ scale: 0.9 }}
                    style={{ padding: '6px', borderRadius: '50%', border: '1px solid var(--border-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 0.2s' }}
                  >
                    <Icon size={16} />
                  </motion.button>
                ))}
              </div>
            </h4>

            {/* Dates Carousel */}
            <div style={{ display: 'flex', gap: 'var(--space-2)', overflowX: 'auto', marginBottom: 'var(--space-8)', paddingBottom: '8px', scrollbarWidth: 'none' }}>
              {dates.map((d, i) => (
                <motion.button
                  key={i}
                  onClick={() => setSelectedDate(d.date)}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  style={{
                    minWidth: '60px', padding: 'var(--space-3) var(--space-2)',
                    borderRadius: 'var(--radius-md)', border: '1px solid',
                    borderColor: selectedDate === d.date ? 'var(--accent-blue)' : 'var(--border-light)',
                    background: selectedDate === d.date ? 'var(--accent-blue)' : 'transparent',
                    color: selectedDate === d.date ? 'var(--text-light)' : 'var(--text-primary)',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                    transition: 'border-color 0.2s, background 0.25s, color 0.25s',
                  }}
                >
                  <span style={{ fontSize: '0.75rem', fontWeight: 500, color: selectedDate === d.date ? 'rgba(255,255,255,0.8)' : 'var(--text-secondary)' }}>{d.day}</span>
                  <span style={{ fontSize: '1.25rem', fontWeight: 600 }}>{d.date}</span>
                </motion.button>
              ))}
            </div>

            {/* Time Slots */}
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <div style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: 'var(--space-4)', fontWeight: 500 }}>
                Available times for {dates.find(d => d.date === selectedDate)?.full.toDateString() || 'selected date'}
              </div>
              <div className="grid grid-cols-2 gap-3">
                {slots.map((time, i) => (
                  <motion.button
                    key={i}
                    onClick={() => setSelectedSlot(time)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    style={{
                      padding: 'var(--space-3)', borderRadius: 'var(--radius-md)',
                      border: '1px solid var(--accent-blue)', fontWeight: 600,
                      background: selectedSlot === time ? 'var(--accent-blue)' : 'transparent',
                      color: selectedSlot === time ? '#fff' : 'var(--accent-blue)',
                      transition: 'background 0.2s, color 0.2s',
                    }}
                  >
                    {time}
                  </motion.button>
                ))}
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02, boxShadow: '0 10px 25px rgba(10, 17, 40, 0.4)' }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                to="/booking"
                className="btn btn-primary"
                style={{ width: '100%', padding: '1rem', display: 'flex', justifyContent: 'center' }}
              >
                Continue to Secure Checkout
              </Link>
            </motion.div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginTop: 'var(--space-4)', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
              <CheckCircle2 size={12} color="green" /> Secure <span style={{ opacity: 0.3 }}>•</span> Fast <span style={{ opacity: 0.3 }}>•</span> Confirmed instantly
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SmartBooking;

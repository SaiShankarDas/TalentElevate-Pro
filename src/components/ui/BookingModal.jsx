import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, Calendar as CalendarIcon, Clock, User, Mail, 
  MessageSquare, ChevronLeft, ChevronRight, CheckCircle2 
} from 'lucide-react';

const BookingModal = ({ isOpen, onClose, service }) => {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    goal: ''
  });

  // Reset state when modal closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setStep(1);
        setSelectedDate(null);
        setSelectedTime(null);
        setFormData({ name: '', email: '', goal: '' });
      }, 300);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  // Mock available dates (next 14 days)
  const generateDates = () => {
    const dates = [];
    const today = new Date();
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      // Skip Sundays for a professional feel
      if (date.getDay() !== 0) {
        dates.push(date);
      }
    }
    return dates;
  };

  // Mock time slots (9 AM - 5 PM)
  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', 
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(4); // Success step
  };

  const formatDate = (date) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px',
          background: 'rgba(10, 17, 40, 0.4)',
          backdropFilter: 'blur(8px)'
        }}>
          {/* Backdrop click to close */}
          <div 
            style={{ position: 'absolute', inset: 0 }} 
            onClick={onClose} 
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            style={{
              width: '100%',
              maxWidth: '500px',
              background: 'white',
              borderRadius: '32px',
              overflow: 'hidden',
              position: 'relative',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
              border: '1px solid var(--border-light)'
            }}
          >
            {/* Header */}
            <div style={{ 
              padding: '24px 32px', 
              borderBottom: '1px solid #f3f4f6',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'var(--bg-primary)'
            }}>
              <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--bg-dark)' }}>
                  {step === 4 ? 'Booking Confirmed!' : `Book ${service?.title}`}
                </h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '2px' }}>
                  {step === 1 && 'Step 1: Choose a preferred date'}
                  {step === 2 && 'Step 2: Pick a convenient time'}
                  {step === 3 && 'Step 3: Share a few details'}
                  {step === 4 && 'Check your email for calendar invite'}
                </p>
              </div>
              <button 
                onClick={onClose}
                style={{ 
                  width: '36px', height: '36px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: '#f3f4f6', color: '#6b7280', transition: 'all 0.2s'
                }}
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Area */}
            <div style={{ padding: '32px' }}>
              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                      {generateDates().map((date, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedDate(date);
                            handleNext();
                          }}
                          style={{
                            padding: '16px 12px',
                            borderRadius: '16px',
                            border: selectedDate?.getTime() === date.getTime() 
                              ? '2px solid var(--accent-blue)' 
                              : '1px solid var(--border-light)',
                            background: selectedDate?.getTime() === date.getTime() 
                              ? 'rgba(37, 99, 235, 0.05)' 
                              : 'white',
                            textAlign: 'center',
                            transition: 'all 0.2s'
                          }}
                        >
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontWeight: 600, textTransform: 'uppercase' }}>
                            {date.toLocaleDateString('en-US', { weekday: 'short' })}
                          </div>
                          <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--bg-dark)', margin: '4px 0' }}>
                            {date.getDate()}
                          </div>
                          <div style={{ fontSize: '0.7rem', color: 'var(--text-secondary)' }}>
                            {date.toLocaleDateString('en-US', { month: 'short' })}
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px', color: 'var(--accent-blue)', fontWeight: 600 }}>
                      <CalendarIcon size={18} />
                      <span>{formatDate(selectedDate)}</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                      {timeSlots.map((time, i) => (
                        <motion.button
                          key={i}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => {
                            setSelectedTime(time);
                            handleNext();
                          }}
                          style={{
                            padding: '14px',
                            borderRadius: '12px',
                            border: selectedTime === time 
                              ? '2px solid var(--accent-blue)' 
                              : '1px solid var(--border-light)',
                            background: selectedTime === time 
                              ? 'rgba(37, 99, 235, 0.05)' 
                              : 'white',
                            fontSize: '0.95rem',
                            fontWeight: 700,
                            color: 'var(--bg-dark)',
                            transition: 'all 0.2s'
                          }}
                        >
                          {time}
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem', color: 'var(--text-secondary)', background: '#f9fafb', padding: '12px', borderRadius: '12px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <CalendarIcon size={14} /> {formatDate(selectedDate)}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <Clock size={14} /> {selectedTime}
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ position: 'relative' }}>
                        <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input 
                          required
                          type="text"
                          placeholder="Your Full Name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          style={{
                            width: '100%', padding: '14px 14px 14px 48px', borderRadius: '12px',
                            border: '1px solid var(--border-light)', fontSize: '0.95rem', outline: 'none'
                          }}
                        />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#9ca3af' }} />
                        <input 
                          required
                          type="email"
                          placeholder="Email Address"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          style={{
                            width: '100%', padding: '14px 14px 14px 48px', borderRadius: '12px',
                            border: '1px solid var(--border-light)', fontSize: '0.95rem', outline: 'none'
                          }}
                        />
                      </div>
                      <div style={{ position: 'relative' }}>
                        <MessageSquare size={18} style={{ position: 'absolute', left: '16px', top: '23px', color: '#9ca3af' }} />
                        <textarea 
                          placeholder="What would you like to discuss?"
                          rows={3}
                          value={formData.goal}
                          onChange={(e) => setFormData({...formData, goal: e.target.value})}
                          style={{
                            width: '100%', padding: '16px 16px 16px 48px', borderRadius: '12px',
                            border: '1px solid var(--border-light)', fontSize: '0.95rem', outline: 'none',
                            resize: 'none', fontFamily: 'inherit'
                          }}
                        />
                      </div>
                      <button 
                        type="submit"
                        className="btn btn-glow"
                        style={{ width: '100%', height: '54px', fontSize: '1.1rem', marginTop: '8px' }}
                      >
                        Confirm Booking
                      </button>
                    </form>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    style={{ textAlign: 'center', padding: '20px 0' }}
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                      style={{ marginBottom: '24px', display: 'flex', justifyContent: 'center' }}
                    >
                      <CheckCircle2 size={80} color="var(--accent-blue)" strokeWidth={1.5} />
                    </motion.div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 800, color: 'var(--bg-dark)', marginBottom: '12px' }}>
                      Success!
                    </h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                      We've reserved your slot for <strong>{formatDate(selectedDate)}</strong> at <strong>{selectedTime}</strong>. 
                      A calendar invite has been sent to <strong>{formData.email}</strong>.
                    </p>
                    <button 
                      onClick={onClose}
                      className="btn btn-primary"
                      style={{ width: '100%', height: '54px' }}
                    >
                      Close
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Footer / Navigation */}
            {step < 4 && (
              <div style={{ 
                padding: '20px 32px', 
                background: '#f9fafb', 
                borderTop: '1px solid #f3f4f6',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                {step > 1 ? (
                  <button 
                    onClick={handleBack}
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '6px', 
                      fontSize: '0.9rem', fontWeight: 600, color: 'var(--text-secondary)'
                    }}
                  >
                    <ChevronLeft size={18} /> Back
                  </button>
                ) : <div />}
                
                <div style={{ display: 'flex', gap: '6px' }}>
                  {[1, 2, 3].map(dot => (
                    <div 
                      key={dot}
                      style={{ 
                        width: '8px', height: '8px', borderRadius: '50%',
                        background: dot === step ? 'var(--accent-blue)' : '#d1d5db',
                        transition: 'all 0.3s'
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

const FloatingBookingBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      
      // Show button after scrolling past hero (400px)
      // Hide button when approaching the footer (within 400px of the bottom)
      const isPastHero = scrollY > 400;
      const isNearBottom = windowHeight + scrollY > documentHeight - 400;

      if (isPastHero && !isNearBottom) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          style={{
            position: 'fixed',
            bottom: 'var(--space-6)',
            right: 'var(--space-6)',
            zIndex: 40,
          }}
        >
          <Link 
            to="/booking"
            className="btn btn-glow"
            style={{
              padding: '1rem 1.5rem',
              fontSize: '1rem',
              boxShadow: '0 10px 30px var(--accent-blue-glow)',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <Calendar size={20} style={{ marginRight: '8px' }} />
            <span>Book Consultation</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default FloatingBookingBtn;

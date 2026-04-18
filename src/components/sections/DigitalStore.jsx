import React from 'react';
import { motion } from 'framer-motion';
import { Download, Zap } from 'lucide-react';

const DigitalStore = () => {
  const products = [
    { title: "ATS-Friendly Resume Templates", price: "₹199", bestseller: true, tag: "Essential" },
    { title: "The Ultimate HR Round Cheat Sheet", price: "₹299", bestseller: true, tag: "Highest Value" },
    { title: "LinkedIn Networking Scripts", price: "₹149", bestseller: false, tag: "Connector" },
    { title: "Career Switch Strategy Guide", price: "₹499", bestseller: false, tag: "Comprehensive" },
  ];

  return (
    <section id="marketplace" style={{ padding: 'var(--space-24) 0' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 'var(--space-12)', flexWrap: 'wrap', gap: 'var(--space-4)' }}>
          <div>
            <h2 className="h2" style={{ marginBottom: 'var(--space-2)' }}>Digital Storefront</h2>
            <p className="text-lg" style={{ color: 'var(--text-secondary)' }}>Premium resources and playbooks for immediate access.</p>
          </div>
          <button className="btn btn-secondary">View All Products</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass-card"
              style={{ padding: 'var(--space-6)', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
            >
              {p.bestseller && (
                <div style={{ 
                  position: 'absolute', top: '12px', right: '-24px', background: 'var(--bg-dark)', color: 'var(--accent-gold)',
                  fontSize: '0.65rem', fontWeight: 700, padding: '4px 24px', transform: 'rotate(45deg)', letterSpacing: '1px'
                }}>
                  BESTSELLER
                </div>
              )}
              
              <div style={{ 
                height: '160px', 
                background: 'linear-gradient(135deg, var(--bg-secondary) 0%, rgba(37,99,235,0.05) 100%)', 
                borderRadius: 'var(--radius-md)', 
                marginBottom: 'var(--space-6)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                border: '1px solid var(--border-light)'
              }}>
                <Zap size={32} color="var(--accent-blue)" opacity={0.5} />
              </div>

              <div style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--accent-blue)', textTransform: 'uppercase', marginBottom: '8px', letterSpacing: '0.5px' }}>
                {p.tag}
              </div>
              <h4 style={{ fontWeight: 600, fontSize: '1.1rem', marginBottom: 'var(--space-2)', lineHeight: 1.4, flexGrow: 1 }}>{p.title}</h4>
              <div style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--bg-dark)', marginBottom: 'var(--space-4)' }}>{p.price}</div>
              
              <button className="btn btn-secondary" style={{ width: '100%', padding: '0.75rem', gap: '8px' }}>
                <Download size={16} /> Instant Access
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DigitalStore;

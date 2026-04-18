import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Booking from './pages/Booking';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import FloatingBookingBtn from './components/ui/FloatingBookingBtn';

function App() {
  return (
    <Router>
      <div className="app-container" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/booking" element={<Booking />} />
          </Routes>
        </main>
        <Footer />
        <FloatingBookingBtn />
      </div>
    </Router>
  );
}

export default App;

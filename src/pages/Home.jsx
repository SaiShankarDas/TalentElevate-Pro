import React from 'react';
import Hero from '../components/sections/Hero';
import TrustBar from '../components/sections/TrustBar';
import Services from '../components/sections/Services';
import SmartBooking from '../components/sections/SmartBooking';
import SuccessStories from '../components/sections/SuccessStories';
import About from '../components/sections/About';

const Home = () => {
  return (
    <div>
      <Hero />
      <TrustBar />
      <Services />
      <SmartBooking />
      <SuccessStories />
      <About />
    </div>
  );
};

export default Home;

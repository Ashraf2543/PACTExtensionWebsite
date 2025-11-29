import React from 'react';
import Hero from '../../components/Hero/Hero';
import Features from '../../components/Features/Features';
import Download from '../../components/Download/Download';
import FAQ from '../../components/FAQ/FAQ';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Features />
      <Download />
      <FAQ />
    </div>
  );
};

export default Home;
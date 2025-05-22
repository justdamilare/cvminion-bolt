import React from 'react';
import { Hero } from '../components/landing/Hero';
import { Features } from '../components/landing/Features';
import { HowItWorks } from '../components/landing/HowItWorks';
import { Stats } from '../components/landing/Stats';
import { Pricing } from '../components/landing/Pricing';
import { Footer } from '../components/Footer';

export const Landing = () => {
  return (
    <div className="min-h-screen bg-dark">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <Hero />
        <Features />
        <Stats />
      </div>
      <HowItWorks />
      <Pricing />
      <Footer />
    </div>
  );
};

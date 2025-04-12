import React from 'react';
import { FadeIn } from '../ui/FadeIn';
import { StatCard } from './StatCard';

const stats = [
  { 
    value: '4.9/5',
    label: 'User Rating',
    description: 'Based on 1000+ reviews'
  },
  { 
    value: '10k+',
    label: 'Active Users',
    description: 'Trust CVMinion daily'
  },
  { 
    value: '95%',
    label: 'Success Rate',
    description: 'Get more interviews'
  }
];

export const Stats = () => {
  return (
    <div className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-dark-light/50 to-transparent" />
      <FadeIn className="relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by <span className="gradient-text">Thousands</span>
          </h2>
          <p className="text-gray-400 text-xl">Join our community of successful job seekers</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <StatCard {...stat} />
            </FadeIn>
          ))}
        </div>
      </FadeIn>
    </div>
  );
};
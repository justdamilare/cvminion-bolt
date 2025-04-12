import React from 'react';

interface StatCardProps {
  value: string;
  label: string;
  description: string;
}

export const StatCard: React.FC<StatCardProps> = ({ value, label, description }) => {
  return (
    <div className="text-center p-8 rounded-lg bg-dark-light border border-yellow-500/10 hover:border-yellow-500/30 transition-colors">
      <div className="text-5xl font-bold text-primary mb-2 animate-float">{value}</div>
      <div className="text-white font-semibold text-lg mb-1">{label}</div>
      <div className="text-gray-400 text-sm">{description}</div>
    </div>
  );
};
import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="group relative">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-primary-dark rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500" />
      <div className="relative bg-white dark:bg-dark-light p-8 rounded-lg transform transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400">{description}</p>
      </div>
    </div>
  );
};
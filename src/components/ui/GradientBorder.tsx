import React from 'react';

interface GradientBorderProps {
  children: React.ReactNode;
}

export const GradientBorder: React.FC<GradientBorderProps> = ({ children }) => {
  return (
    <div className="relative group">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
      <div className="relative">
        {children}
      </div>
    </div>
  );
};
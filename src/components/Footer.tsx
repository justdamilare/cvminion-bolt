import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-dark-light py-12">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-gray-400 text-center">
          &copy; {new Date().getFullYear()} CVMinion. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

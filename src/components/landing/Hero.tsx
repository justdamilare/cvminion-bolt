import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';
import { GradientBorder } from '../ui/GradientBorder';

export const Hero = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-radial from-primary/10 via-transparent to-transparent dark:from-primary/5" />
      
      <FadeIn className="relative text-center lg:py-32 py-20">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 dark:bg-primary/20 text-gray-900 dark:text-primary text-sm mb-8">
          <Sparkles className="w-4 h-4 mr-2" />
          AI-Powered Resume Builder
        </span>
        
        <h1 className="text-7xl font-bold mb-6 leading-tight">
          <span className="text-gray-900 dark:text-white">Land Your</span>
          <br />
          <span className="gradient-text">Dream Job Faster</span>
        </h1>
        
        <p className="text-gray-600 dark:text-gray-300 text-xl max-w-2xl mx-auto mb-12">  
          Let AI craft your perfect resume for every application. 
          <span className="text-gray-900 dark:text-white"> Get more interviews</span> with tailored resumes 
          that beat ATS systems.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <GradientBorder>
            <Link
              to="/signup"
              className="bg-primary text-dark px-8 py-4 rounded-lg font-bold text-lg hover:bg-primary-dark inline-flex items-center space-x-2 transform hover:scale-105 transition-all w-full justify-center"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </GradientBorder>
          
          <Link
            to="/demo"
            className="text-gray-900 dark:text-white hover:text-primary transition-colors px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center"
          >
            See Demo
          </Link>
        </div>
      </FadeIn>
    </div>
  );
};
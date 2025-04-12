import React from 'react';
import { FileText, Search, Send } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const steps = [
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "Create Your Base Profile",
    description: "Input your experience, skills, and achievements once to create your master profile."
  },
  {
    icon: <Search className="w-12 h-12 text-primary" />,
    title: "Find Your Dream Job",
    description: "Paste the job description and let our AI analyze the requirements."
  },
  {
    icon: <Send className="w-12 h-12 text-primary" />,
    title: "Apply with Confidence",
    description: "Get your tailored resume and track your application progress in one place."
  }
];

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-dark-light">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
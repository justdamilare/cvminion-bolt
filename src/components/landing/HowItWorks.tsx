import React from 'react';
import { FilePen, FileText, Send, Wand } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const steps = [
  {
    icon: <FilePen className="w-12 h-12 text-primary" />,
    title: "Create Your Base Profile",
    description: "Input your experience, skills, and achievements once to create your master profile."
  },
  {
    icon: <FileText className="w-12 h-12 text-primary" />,
    title: "Create New Job Application",
    description: "Input the job description and let our AI analyze the requirements."
  },
  {
    icon: <Wand className="w-12 h-12 text-primary" />,
    title: "AI-Powered Resume",
    description: "Our AI will generate a tailored resume based on your profile and the job description."
  },
  {
    icon: <Send className="w-12 h-12 text-primary" />,
    title: "Apply with Confidence",
    description: "Get your tailored resume and track your application progress in one place."
  }
];

export const HowItWorks = () => {
  return (
    <div className="py-20 bg-gray-50 dark:bg-dark-light transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How It <span className="gradient-text">Works</span>
          </h2>
        </FadeIn>
        <div className="grid md:grid-cols-4 gap-12">
          {steps.map((step, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <div className="text-center">
                <div className="mb-6 flex justify-center">{step.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{step.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};
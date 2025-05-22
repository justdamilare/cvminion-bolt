import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Check, Star } from 'lucide-react';
import { FadeIn } from '../components/ui/FadeIn';

export const Landing = () => {
  return (
    <div className="bg-white dark:bg-dark transition-colors duration-200">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative">
          <FadeIn className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 dark:bg-primary/20 mb-8">
              <Star className="w-4 h-4 text-primary mr-2" />
              <span className="text-gray-900 dark:text-white text-sm font-medium">
                Trusted by 10,000+ professionals
              </span>
            </div>
            
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
              Your Career Journey,
              <br />
              <span className="text-primary">Elevated</span>
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
              Create ATS-optimized resumes tailored to each job application. Stand out from the crowd and land your dream job faster.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/signup"
                className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-dark px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center justify-center group transition-all"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/demo"
                className="w-full sm:w-auto px-8 py-4 rounded-lg font-bold text-lg text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors inline-flex items-center justify-center"
              >
                See Demo
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-50 dark:bg-dark-light">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose <span className="text-primary">CVMinion</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              The smartest way to manage your job applications
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={index} delay={index * 0.2}>
                <div className="bg-white dark:bg-dark p-8 rounded-2xl shadow-lg dark:shadow-gray-900/10">
                  <div className="w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-3xl p-12 text-center">
            <FadeIn>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Ready to Transform Your Job Search?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                Join thousands of successful professionals who have already optimized their job application process with CVMinion.
              </p>
              <Link
                to="/signup"
                className="bg-primary hover:bg-primary-dark text-dark px-8 py-4 rounded-lg font-bold text-lg inline-flex items-center group transition-all"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
};

const features = [
  {
    icon: <Brain className="w-6 h-6 text-primary" />,
    title: "AI-Powered Optimization",
    description: "Our advanced AI analyzes job descriptions and tailors your resume to match requirements perfectly."
  },
  {
    icon: <Check className="w-6 h-6 text-primary" />,
    title: "ATS-Friendly Format",
    description: "Ensure your resume passes through Applicant Tracking Systems with our optimized templates."
  },
  {
    icon: <Star className="w-6 h-6 text-primary" />,
    title: "Smart Tracking",
    description: "Keep track of all your job applications, interviews, and follow-ups in one organized dashboard."
  }
];
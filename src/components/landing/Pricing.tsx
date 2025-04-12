import React from 'react';
import { Check } from 'lucide-react';
import { FadeIn } from '../ui/FadeIn';

const plans = [
  {
    name: "Free",
    price: "$0",
    features: [
      "3 job applications per month",
      "Basic ATS optimization",
      "Standard resume templates",
    ],
    buttonText: "Get Started",
    popular: false
  },
  {
    name: "Pro",
    price: "$12",
    period: "/month",
    features: [
      "Unlimited job applications",
      "Advanced ATS optimization",
      "Premium resume templates",
      "Priority support",
      "Custom branding"
    ],
    buttonText: "Start Free Trial",
    popular: true
  }
];

export const Pricing = () => {
  return (
    <div className="py-20">
      <FadeIn>
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Simple, Transparent <span className="gradient-text">Pricing</span>
        </h2>
      </FadeIn>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto px-6">
        {plans.map((plan, index) => (
          <FadeIn 
            key={index} 
            delay={index * 0.2}
            className={`bg-dark-light p-8 rounded-lg ${
              plan.popular ? 'ring-2 ring-primary' : ''
            }`}
          >
            {plan.popular && (
              <span className="bg-primary text-dark text-sm font-bold px-3 py-1 rounded-full">
                Most Popular
              </span>
            )}
            <h3 className="text-2xl font-bold text-white mt-4">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-4xl font-bold text-white">{plan.price}</span>
              {plan.period && (
                <span className="text-gray-400">{plan.period}</span>
              )}
            </div>
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-gray-400">
                  <Check className="w-5 h-5 text-primary mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
            <button className={`w-full py-3 rounded-lg font-bold ${
              plan.popular
                ? 'bg-primary text-dark hover:bg-primary-dark'
                : 'bg-dark text-white hover:bg-dark-light border border-gray-700'
            } transition-all transform hover:scale-105`}>
              {plan.buttonText}
            </button>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};
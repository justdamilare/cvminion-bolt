import React from 'react';
import { Check } from 'lucide-react';
import { ResumeTemplate } from './templates/TemplateBase';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ModernTemplate } from './templates/ModernTemplate';

interface ResumeTemplatesProps {
  selectedTemplate: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
}

const templates: ResumeTemplate[] = [
  MinimalTemplate,
  ModernTemplate,
  CreativeTemplate,
  // Add more templates here
];

export const ResumeTemplates: React.FC<ResumeTemplatesProps> = ({
  selectedTemplate,
  onSelect
}) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
      {templates.map((template) => (
        <div
          key={template.id}
          onClick={() => onSelect(template)}
          className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-200 transform hover:scale-105 ${
            selectedTemplate.id === template.id
              ? 'ring-2 ring-primary'
              : 'hover:ring-2 hover:ring-gray-400'
          }`}
        >
          <div className="aspect-[8.5/11] bg-dark-light">
            <img
              src={template.style.preview}
              alt={template.name}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            {selectedTemplate.id === template.id && (
              <div className="bg-primary text-dark rounded-full p-2">
                <Check className="w-6 h-6" />
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-lg font-semibold text-white">{template.name}</h3>
            <p className="text-sm text-gray-200">{template.description}</p>
            <div className="flex gap-2 mt-2">
              <span className="text-xs text-gray-300 bg-dark-light px-2 py-1 rounded">
                {template.style.layout}
              </span>
              <span className="text-xs text-gray-300 bg-dark-light px-2 py-1 rounded">
                {template.style.theme}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

import React from 'react';
import { Check } from 'lucide-react';

export type ResumeTemplate = 'modern' | 'classic' | 'minimal' | 'creative' | 'executive' | 'professional';

interface ResumeTemplatesProps {
  selectedTemplate: ResumeTemplate;
  onSelect: (template: ResumeTemplate) => void;
}

const templates: { id: ResumeTemplate; name: string; description: string; preview: string }[] = [
  {
    id: 'professional',
    name: 'Professional',
    description: 'Modern professional design with blue accents',
    preview: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&q=80'
  },
  {
    id: 'modern',
    name: 'Modern',
    description: 'Clean and contemporary design with bold accents',
    preview: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&q=80'
  },
  {
    id: 'classic',
    name: 'Classic',
    description: 'Traditional format for conservative industries',
    preview: 'https://images.unsplash.com/photo-1574347439246-527970f58baa?w=400&q=80'
  },
  {
    id: 'minimal',
    name: 'Minimal',
    description: 'Simple and elegant with focus on content',
    preview: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&q=80'
  },
  {
    id: 'creative',
    name: 'Creative',
    description: 'Bold design for creative professionals',
    preview: 'https://images.unsplash.com/photo-1611532736576-1865ce24e589?w=400&q=80'
  },
  {
    id: 'executive',
    name: 'Executive',
    description: 'Sophisticated design for senior positions',
    preview: 'https://images.unsplash.com/photo-1586282391129-76a6df230234?w=400&q=80'
  }
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
          onClick={() => onSelect(template.id)}
          className={`relative cursor-pointer rounded-lg overflow-hidden transition-all duration-200 transform hover:scale-105 ${
            selectedTemplate === template.id
              ? 'ring-2 ring-primary'
              : 'hover:ring-2 hover:ring-gray-400'
          }`}
        >
          <div className="aspect-[8.5/11] bg-dark-light">
            <img
              src={template.preview}
              alt={template.name}
              className="w-full h-full object-cover opacity-80"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
            {selectedTemplate === template.id && (
              <div className="bg-primary text-dark rounded-full p-2">
                <Check className="w-6 h-6" />
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
            <h3 className="text-lg font-semibold text-white">{template.name}</h3>
            <p className="text-sm text-gray-200">{template.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
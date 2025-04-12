import React, { useState } from 'react';
import { Edit2, Trash2 } from 'lucide-react';
import { Experience } from '../../../types/profile';
import { ExperienceForm } from '../forms/ExperienceForm';

interface ExperienceCardProps {
  experience: Experience;
  onUpdate: (id: string, data: Partial<Experience>) => Promise<void>;
  onDelete: (id: string) => Promise<void>;
}

export const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  onUpdate,
  onDelete
}) => {
  const [isEditing, setIsEditing] = useState(false);

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'short',
      year: 'numeric'
    });
  };

  if (isEditing) {
    return (
      <ExperienceForm
        experience={experience}
        onSubmit={async (data) => {
          await onUpdate(experience.id, data);
          setIsEditing(false);
        }}
        onCancel={() => setIsEditing(false)}
      />
    );
  }

  return (
    <div className="bg-dark-light p-6 rounded-lg">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-white">{experience.position}</h3>
          <p className="text-gray-400">{experience.company}</p>
          <p className="text-sm text-gray-400">
            {formatDate(experience.start_date)} - {experience.end_date ? formatDate(experience.end_date) : 'Present'}
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsEditing(true)}
            className="text-gray-400 hover:text-white"
          >
            <Edit2 className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(experience.id)}
            className="text-gray-400 hover:text-red-400"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>
      
      <p className="text-gray-400 text-sm mb-4">{experience.description}</p>
      
      {experience.highlights.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-400 mb-2">Key Achievements</h4>
          <ul className="list-disc list-inside space-y-1">
            {experience.highlights.map((highlight, index) => (
              <li key={index} className="text-gray-400 text-sm">
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
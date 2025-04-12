import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Experience } from '../../types/profile';
import { ExperienceForm } from './forms/ExperienceForm';
import { ExperienceCard } from './cards/ExperienceCard';

interface ExperienceSectionProps {
  experience: Experience[];
  onUpdate: (data: { experience: Experience[] }) => Promise<void>;
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({ 
  experience, 
  onUpdate 
}) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async (newExp: Omit<Experience, 'id'>) => {
    await onUpdate({
      experience: [...experience, { ...newExp, id: crypto.randomUUID() }]
    });
    setIsAdding(false);
  };

  const handleUpdate = async (id: string, data: Partial<Experience>) => {
    await onUpdate({
      experience: experience.map(exp => 
        exp.id === id ? { ...exp, ...data } : exp
      )
    });
  };

  const handleDelete = async (id: string) => {
    await onUpdate({
      experience: experience.filter(exp => exp.id !== id)
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Experience</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="text-primary hover:text-primary-dark"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {experience.map(exp => (
          <ExperienceCard
            key={exp.id}
            experience={exp}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isAdding && (
        <ExperienceForm
          onSubmit={handleAdd}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};
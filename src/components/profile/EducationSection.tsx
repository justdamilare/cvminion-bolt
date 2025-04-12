import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { Education } from '../../types/profile';
import { EducationForm } from './forms/EducationForm';
import { EducationCard } from './cards/EducationCard';

interface EducationSectionProps {
  education: Education[];
  onUpdate: (data: { education: Education[] }) => Promise<void>;
}

export const EducationSection: React.FC<EducationSectionProps> = ({ 
  education, 
  onUpdate 
}) => {
  const [isAdding, setIsAdding] = useState(false);

  const handleAdd = async (newEdu: Omit<Education, 'id'>) => {
    await onUpdate({
      education: [...education, { ...newEdu, id: crypto.randomUUID() }]
    });
    setIsAdding(false);
  };

  const handleUpdate = async (id: string, data: Partial<Education>) => {
    await onUpdate({
      education: education.map(edu => 
        edu.id === id ? { ...edu, ...data } : edu
      )
    });
  };

  const handleDelete = async (id: string) => {
    await onUpdate({
      education: education.filter(edu => edu.id !== id)
    });
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-white">Education</h2>
        <button
          onClick={() => setIsAdding(true)}
          className="text-primary hover:text-primary-dark"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-4">
        {education.map(edu => (
          <EducationCard
            key={edu.id}
            education={edu}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {isAdding && (
        <EducationForm
          onSubmit={handleAdd}
          onCancel={() => setIsAdding(false)}
        />
      )}
    </div>
  );
};
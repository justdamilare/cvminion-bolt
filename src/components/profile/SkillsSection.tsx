import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';
import { Skill } from '../../types/profile';

interface SkillsSectionProps {
  skills: Skill[];
  onUpdate: (data: { skills: Skill[] }) => Promise<void>;
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ skills, onUpdate }) => {
  const [newSkill, setNewSkill] = useState('');
  const [selectedLevel, setSelectedLevel] = useState<Skill['level']>('Intermediate');

  const handleAddSkill = async () => {
    if (!newSkill.trim()) return;

    await onUpdate({
      skills: [...skills, {
        id: crypto.randomUUID(),
        name: newSkill.trim(),
        level: selectedLevel
      }]
    });

    setNewSkill('');
  };

  const handleRemoveSkill = async (id: string) => {
    await onUpdate({
      skills: skills.filter(skill => skill.id !== id)
    });
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-white">Skills</h2>

      <div className="flex gap-4">
        <input
          type="text"
          value={newSkill}
          onChange={(e) => setNewSkill(e.target.value)}
          className="flex-1 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          placeholder="Add a skill..."
        />
        <select
          value={selectedLevel}
          onChange={(e) => setSelectedLevel(e.target.value as Skill['level'])}
          className="bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
        >
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
          <option value="Expert">Expert</option>
        </select>
        <button
          onClick={handleAddSkill}
          className="bg-primary text-dark px-4 py-2 rounded-lg hover:bg-primary-dark"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-wrap gap-2">
        {skills.map(skill => (
          <div
            key={skill.id}
            className="flex items-center gap-2 bg-dark-light text-white px-3 py-1 rounded-full"
          >
            <span>{skill.name}</span>
            <span className="text-xs text-gray-400">({skill.level})</span>
            <button
              onClick={() => handleRemoveSkill(skill.id)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
import React, { useState } from 'react';
import { Education } from '../../../types/profile';

interface EducationFormProps {
  education?: Education;
  onSubmit: (data: Omit<Education, 'id'>) => Promise<void>;
  onCancel: () => void;
}

export const EducationForm: React.FC<EducationFormProps> = ({
  education,
  onSubmit,
  onCancel
}) => {
  const [formData, setFormData] = useState({
    institution: education?.institution || '',
    degree: education?.degree || '',
    field: education?.field || '',
    start_date: education?.start_date || '',
    end_date: education?.end_date || '',
    description: education?.description || ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-dark-light p-6 rounded-lg space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">
          Institution
        </label>
        <input
          type="text"
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">
          Degree
        </label>
        <input
          type="text"
          value={formData.degree}
          onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
          className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">
          Field of Study
        </label>
        <input
          type="text"
          value={formData.field}
          onChange={(e) => setFormData({ ...formData, field: e.target.value })}
          className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          required
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            Start Date
          </label>
          <input
            type="date"
            value={formData.start_date}
            onChange={(e) => setFormData({ ...formData, start_date: e.target.value })}
            className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-400 mb-1">
            End Date
          </label>
          <input
            type="date"
            value={formData.end_date}
            onChange={(e) => setFormData({ ...formData, end_date: e.target.value })}
            className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-400 mb-1">
          Description
        </label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full h-32 bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
        />
      </div>

      <div className="flex justify-end gap-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-gray-400 hover:text-white"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-primary text-dark rounded-lg hover:bg-primary-dark"
        >
          {education ? 'Update' : 'Add'} Education
        </button>
      </div>
    </form>
  );
};

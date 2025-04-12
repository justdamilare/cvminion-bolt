import React from 'react';
import { FileText } from 'lucide-react';

interface JobDescriptionFieldProps {
  value: string;
  onChange: (value: string) => void;
  onBlur?: () => void;
  className?: string;
}

export const JobDescriptionField: React.FC<JobDescriptionFieldProps> = ({
  value,
  onChange,
  onBlur,
  className = ''
}) => {
  return (
    <div className={className}>
      <label className="flex items-center text-sm font-medium text-gray-400 mb-2">
        <FileText className="w-4 h-4 mr-2" />
        Job Description
      </label>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="w-full h-48 bg-dark text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
        placeholder="Paste the job description here..."
      />
    </div>
  );
};
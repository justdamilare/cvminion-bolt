import React from 'react';
import { LinkedInImport } from './LinkedInImport';
import { Profile } from '../../types/profile';

interface ImportSectionProps {
  onImport: (data: Partial<Profile>) => Promise<void>;
}

export const ImportSection: React.FC<ImportSectionProps> = ({ onImport }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-white">Import Profile</h3>
      <p className="text-gray-400 text-sm">
        Import your professional data from LinkedIn to quickly set up your profile.
      </p>
      <LinkedInImport onImport={onImport} />
    </div>
  );
};
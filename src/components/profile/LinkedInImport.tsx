import React, { useState } from 'react';
import { FileUp, Loader } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { parseLinkedInData } from '../../utils/linkedinParser';
import { Profile } from '../../types/profile';

interface LinkedInImportProps {
  onImport: (data: Partial<Profile>) => Promise<void>;
}

export const LinkedInImport: React.FC<LinkedInImportProps> = ({ onImport }) => {
  const [loading, setLoading] = useState(false);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setLoading(true);
    try {
      const text = await file.text();
      const profileData = parseLinkedInData(text);
      await onImport(profileData);
      toast.success('LinkedIn data imported successfully');
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <label 
        htmlFor="linkedin-import"
        className="flex items-center gap-2 px-4 py-2 bg-dark-light text-white rounded-lg cursor-pointer hover:bg-dark-light/80 transition-colors"
      >
        {loading ? (
          <Loader className="w-5 h-5 animate-spin" />
        ) : (
          <FileUp className="w-5 h-5" />
        )}
        Import from LinkedIn
      </label>
      <input
        id="linkedin-import"
        type="file"
        accept=".zip"
        onChange={handleFileUpload}
        className="hidden"
        disabled={loading}
      />
    </div>
  );
};
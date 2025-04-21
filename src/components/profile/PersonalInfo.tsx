import React from 'react';
import { User, MapPin, Phone, Mail, Globe, Briefcase, Building2, ExternalLink } from 'lucide-react';
import { Profile } from '../../types/profile';
import { EditableField } from '../ui/EditableField';

interface PersonalInfoProps {
  profile: Profile | null;
  onUpdate: (data: Partial<Profile>) => Promise<void>;
}

export const PersonalInfo: React.FC<PersonalInfoProps> = ({ profile, onUpdate }) => {
  return (
    <div className="bg-dark-light rounded-lg overflow-hidden">
      {/* Header Section */}
      <div className="relative h-48 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 px-6 flex items-end pb-6">
        <div className="flex items-end gap-6">
          <div className="w-32 h-32 rounded-full bg-dark-light border-4 border-dark-light flex items-center justify-center">
            <User className="w-16 h-16 text-gray-400" />
          </div>
          <div className="mb-4">
            <EditableField
              value={profile?.full_name ?? ''}
              onSave={(value) => onUpdate({ full_name: value })}
              className="text-3xl font-bold text-white block mb-2"
              placeholder="Your Full Name"
            />
            <EditableField
              value={profile?.title ?? ''}
              onSave={(value) => onUpdate({ title: value })}
              className="text-xl text-gray-300"
              placeholder="Professional Title"
              icon={<Briefcase className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6 space-y-8">
        {/* Contact Information */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <EditableField
                icon={<Mail className="w-5 h-5" />}
                value={profile?.email ?? ''}
                onSave={(value) => onUpdate({ email: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="Email Address"
              />
              <EditableField
                icon={<Phone className="w-5 h-5" />}
                value={profile?.phone_number ?? ''}
                onSave={(value) => onUpdate({ phone_number: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="Phone Number"
              />
              <EditableField
                icon={<MapPin className="w-5 h-5" />}
                value={profile?.address ?? ''}
                onSave={(value) => onUpdate({ address: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="Address"
              />
            </div>
            <div className="space-y-4">
              <EditableField
                icon={<Globe className="w-5 h-5" />}
                value={profile?.website ?? ''}
                onSave={(value) => onUpdate({ website: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="Personal Website"
                optional
              />
              <EditableField
                icon={<ExternalLink className="w-5 h-5" />}
                value={profile?.linkedin ?? ''}
                onSave={(value) => onUpdate({ linkedin: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="LinkedIn URL"
                optional
              />
              <EditableField
                icon={<Building2 className="w-5 h-5" />}
                value={profile?.github ?? ''}
                onSave={(value) => onUpdate({ github: value })}
                className="text-gray-300 hover:text-white transition-colors"
                placeholder="GitHub Profile"
                optional
              />
            </div>
          </div>
        </div>

        {/* Professional Summary */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Professional Summary</h3>
          <textarea
            value={profile?.summary ?? ''}
            onChange={(e) => onUpdate({ summary: e.target.value })}
            className="w-full h-32 bg-dark text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none border border-gray-700 hover:border-gray-600 transition-colors"
            placeholder="Write a brief professional summary highlighting your key strengths and career objectives..."
          />
        </div>
      </div>
    </div>
  );
};

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
      <div className="relative h-32 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20">
        <div className="absolute -bottom-16 left-6">
          <div className="w-32 h-32 rounded-full bg-dark-light border-4 border-dark-light flex items-center justify-center">
            <User className="w-16 h-16 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="pt-20 px-6 pb-6">
        <div className="grid gap-6">
          {/* Name and Title */}
          <div>
            <EditableField
              value={profile?.fullName ?? ''}
              onSave={(value) => onUpdate({ fullName: value })}
              className="text-2xl font-bold text-white block mb-1"
              placeholder="Your Full Name"
            />
            <EditableField
              value={profile?.title ?? ''}
              onSave={(value) => onUpdate({ title: value })}
              className="text-lg text-gray-400"
              placeholder="Professional Title"
              icon={<Briefcase className="w-4 h-4" />}
            />
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <EditableField
                icon={<Mail className="w-4 h-4" />}
                value={profile?.email ?? ''}
                onSave={(value) => onUpdate({ email: value })}
                className="text-gray-400"
                placeholder="Email Address"
              />
              <EditableField
                icon={<Phone className="w-4 h-4" />}
                value={profile?.phone ?? ''}
                onSave={(value) => onUpdate({ phone: value })}
                className="text-gray-400"
                placeholder="Phone Number"
              />
              <EditableField
                icon={<MapPin className="w-4 h-4" />}
                value={profile?.location ?? ''}
                onSave={(value) => onUpdate({ location: value })}
                className="text-gray-400"
                placeholder="Location"
              />
            </div>

            <div className="space-y-3">
              <EditableField
                icon={<Globe className="w-4 h-4" />}
                value={profile?.website ?? ''}
                onSave={(value) => onUpdate({ website: value })}
                className="text-gray-400"
                placeholder="Personal Website"
                optional
              />
              <EditableField
                icon={<ExternalLink className="w-4 h-4" />}
                value={profile?.linkedin ?? ''}
                onSave={(value) => onUpdate({ linkedin: value })}
                className="text-gray-400"
                placeholder="LinkedIn URL"
                optional
              />
              <EditableField
                icon={<Building2 className="w-4 h-4" />}
                value={profile?.github ?? ''}
                onSave={(value) => onUpdate({ github: value })}
                className="text-gray-400"
                placeholder="GitHub Profile"
                optional
              />
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Professional Summary
            </label>
            <textarea
              value={profile?.summary ?? ''}
              onChange={(e) => onUpdate({ summary: e.target.value })}
              className="w-full h-32 bg-dark text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none resize-none"
              placeholder="Write a brief professional summary highlighting your key strengths and career objectives..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
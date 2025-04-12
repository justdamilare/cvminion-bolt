import React from 'react';
import { X, Calendar, Building2, Briefcase, Target, Clock } from 'lucide-react';
import { Application, ApplicationStatus } from '../../types/application';
import { StatusBadge } from './StatusBadge';
import { EditableField } from '../ui/EditableField';
import { JobDescriptionField } from './JobDescriptionField';
import { ResumeGenerator } from './ResumeGenerator';
import { useProfile } from '../../hooks/useProfile';

interface ApplicationDetailsProps {
  application: Application;
  isOpen: boolean;
  onClose: () => void;
  onUpdate: (id: string, data: Partial<Application>) => Promise<void>;
}

export const ApplicationDetails: React.FC<ApplicationDetailsProps> = ({
  application,
  isOpen,
  onClose,
  onUpdate,
}) => {
  const { profile } = useProfile();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-light rounded-lg w-full max-w-4xl relative overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="p-6 space-y-8">
          <div className="mb-6">
            <EditableField
              value={application.position}
              onSave={(value) => onUpdate(application.id, { position: value })}
              className="text-2xl font-bold text-white"
            />
            <EditableField
              value={application.company}
              onSave={(value) => onUpdate(application.id, { company: value })}
              className="text-gray-400 text-lg"
              icon={<Building2 className="w-4 h-4" />}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-400 mb-2 block">Status</label>
                <select
                  value={application.status}
                  onChange={(e) => onUpdate(application.id, { status: e.target.value as ApplicationStatus })}
                  className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                >
                  <option value="Draft">Draft</option>
                  <option value="Applied">Applied</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Offer</option>
                  <option value="Rejected">Rejected</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-400 mb-2 block">Applied Date</label>
                <input
                  type="date"
                  value={application.appliedDate}
                  onChange={(e) => onUpdate(application.id, { appliedDate: e.target.value })}
                  className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="space-y-4">
              {application.atsScore > 0 && (
                <div className="bg-dark p-4 rounded-lg">
                  <div className="flex items-center text-gray-400 mb-2">
                    <Target className="w-4 h-4 mr-2" />
                    <span>ATS Score</span>
                  </div>
                  <div className="text-2xl font-bold text-primary">
                    {application.atsScore}%
                  </div>
                </div>
              )}

              <div className="bg-dark p-4 rounded-lg">
                <div className="flex items-center text-gray-400 mb-2">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>Created</span>
                </div>
                <div className="text-white">
                  {new Date(application.createdAt).toLocaleDateString()}
                </div>
              </div>

              {application.lastGeneratedAt && (
                <div className="bg-dark p-4 rounded-lg">
                  <div className="flex items-center text-gray-400 mb-2">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>Last Generated</span>
                  </div>
                  <div className="text-white">
                    {new Date(application.lastGeneratedAt).toLocaleDateString()}
                  </div>
                </div>
              )}
            </div>
          </div>

          <JobDescriptionField
            value={application.jobDescription}
            onChange={(value) => onUpdate(application.id, { jobDescription: value })}
          />

          {profile && application.jobDescription && (
            <ResumeGenerator 
              profile={profile} 
              application={application} 
              onUpdate={onUpdate}
            />
          )}
        </div>
      </div>
    </div>
  );
};
import React from 'react';
import { X } from 'lucide-react';
import { ApplicationStatus } from '../../types/application';
import { JobDescriptionField } from './JobDescriptionField';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: ApplicationFormData) => Promise<void>;
}

export interface ApplicationFormData {
  company: string;
  position: string;
  jobDescription: string;
  status: ApplicationStatus;
  appliedDate?: string;
}

export const ApplicationModal: React.FC<ApplicationModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = React.useState<ApplicationFormData>({
    company: '',
    position: '',
    jobDescription: '',
    status: 'Draft',
    appliedDate: new Date().toISOString().split('T')[0],
  });

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-dark-light rounded-lg w-full max-w-2xl relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>
        
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold text-white mb-6">New Application</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-1">
                Company
              </label>
              <input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>

            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-400 mb-1">
                Position
              </label>
              <input
                id="position"
                type="text"
                value={formData.position}
                onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
                required
              />
            </div>

            <JobDescriptionField
              value={formData.jobDescription}
              onChange={(value) => setFormData({ ...formData, jobDescription: value })}
            />

            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-400 mb-1">
                Status
              </label>
              <select
                id="status"
                value={formData.status}
                onChange={(e) => setFormData({ ...formData, status: e.target.value as ApplicationStatus })}
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
              <label htmlFor="appliedDate" className="block text-sm font-medium text-gray-400 mb-1">
                Applied Date
              </label>
              <input
                id="appliedDate"
                type="date"
                value={formData.appliedDate}
                onChange={(e) => setFormData({ ...formData, appliedDate: e.target.value })}
                className="w-full bg-dark text-white px-4 py-2 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-dark font-bold py-2 rounded-lg mt-6 hover:bg-primary-dark transition-colors"
          >
            Create Application
          </button>
        </form>
      </div>
    </div>
  );
};
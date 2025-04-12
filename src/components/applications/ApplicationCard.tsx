import React from 'react';
import { FileText, Target, Calendar, MoreVertical, RefreshCw } from 'lucide-react';
import { Application } from '../../types/application';
import { StatusBadge } from './StatusBadge';

interface ApplicationCardProps {
  application: Application;
  onView: (id: string) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, onView }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div 
      onClick={() => onView(application.id)}
      className="bg-dark-light p-6 rounded-lg cursor-pointer hover:bg-dark-light/80 transition-colors group"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{application.position}</h3>
          <p className="text-gray-400">{application.company}</p>
        </div>
        <StatusBadge status={application.status} />
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-400">
          <Target className="w-4 h-4 mr-2" />
          <span>ATS Score: </span>
          <span className="ml-1 text-primary font-medium">{application.atsScore}%</span>
        </div>

        <div className="flex items-center text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{application.appliedDate ? formatDate(application.appliedDate) : 'Not applied'}</span>
        </div>

        {application.lastGeneratedAt && (
          <div className="flex items-center text-gray-400">
            <RefreshCw className="w-4 h-4 mr-2" />
            <span className="text-sm">
              Resume generated {formatDate(application.lastGeneratedAt)}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};
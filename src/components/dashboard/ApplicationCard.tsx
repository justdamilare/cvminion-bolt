import React from 'react';
import { FileText, Target, Calendar, MoreVertical } from 'lucide-react';

interface ApplicationCardProps {
  application: {
    id: string;
    company: string;
    position: string;
    status: string;
    atsScore: number;
    appliedDate: string;
  };
  onView: (id: string) => void;
}

export const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, onView }) => {
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
        <button className="text-gray-400 hover:text-white p-1">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-gray-400">
          <Target className="w-4 h-4 mr-2" />
          <span>ATS Score: </span>
          <span className="ml-1 text-primary font-medium">{application.atsScore}%</span>
        </div>

        <div className="flex items-center text-gray-400">
          <Calendar className="w-4 h-4 mr-2" />
          <span>{new Date(application.appliedDate).toLocaleDateString()}</span>
        </div>

        <div className="flex items-center text-gray-400">
          <FileText className="w-4 h-4 mr-2" />
          <span>Status: </span>
          <span className={`ml-1 ${
            application.status === 'Applied' ? 'text-blue-400' :
            application.status === 'Interview' ? 'text-green-400' :
            application.status === 'Rejected' ? 'text-red-400' :
            'text-yellow-400'
          }`}>
            {application.status}
          </span>
        </div>
      </div>
    </div>
  );
};
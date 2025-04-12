import React from 'react';
import { ApplicationStatus } from '../../types/application';

interface StatusBadgeProps {
  status: ApplicationStatus;
}

export const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case 'Draft':
        return 'bg-gray-500/20 text-gray-400';
      case 'Applied':
        return 'bg-blue-500/20 text-blue-400';
      case 'Interview':
        return 'bg-green-500/20 text-green-400';
      case 'Offer':
        return 'bg-primary/20 text-primary';
      case 'Rejected':
        return 'bg-red-500/20 text-red-400';
      default:
        return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  );
};
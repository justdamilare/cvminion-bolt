import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Application } from '../../types/application';
import { ResumeTemplate } from './templates/TemplateBase';

interface PDFResumeProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  template: ResumeTemplate;
}

export const PDFResume: React.FC<PDFResumeProps> = ({ resume, template }) => {
  return (
    <PDFViewer style={{ width: '100%', height: '600px' }}>
      {template.render({ resume })}
    </PDFViewer>
  );
};

import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Application } from '../../types/application';
import { ResumeTemplate } from './ResumeTemplates';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { CreativeResume } from './templates/CreativeTemplate';

interface PDFResumeProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  template: ResumeTemplate;
}

const getTemplate = (template: ResumeTemplate) => {
  switch (template) {
    case 'minimal':
      return MinimalTemplate;
    case 'creative':
      return CreativeResume;
    default:
      return MinimalTemplate;
  }
};

export const PDFResume: React.FC<PDFResumeProps> = ({ resume, template }) => {
  const Template = getTemplate(template);

  return (
    <PDFViewer style={{ width: '100%', height: '600px' }}>
      <Template.render resume={resume} />
    </PDFViewer>
  );
};

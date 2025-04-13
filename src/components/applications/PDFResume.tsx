import React from 'react';
import { PDFViewer } from '@react-pdf/renderer';
import { Application } from '../../types/application';
import { ResumeTemplate } from './ResumeTemplates';
import { ModernTemplate } from './templates/ModernTemplate';
import { ClassicTemplate } from './templates/ClassicTemplate';
import { MinimalTemplate } from './templates/MinimalTemplate';
import { CreativeTemplate } from './templates/CreativeTemplate';
import { ExecutiveTemplate } from './templates/ExecutiveTemplate';
import { ProfessionalTemplate } from './templates/ProfessionalTemplate';

interface PDFResumeProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  template: ResumeTemplate;
}

const getTemplate = (template: ResumeTemplate) => {
  switch (template) {
    case 'modern':
      return ModernTemplate;
    case 'classic':
      return ClassicTemplate;
    case 'minimal':
      return MinimalTemplate;
    case 'creative':
      return CreativeTemplate;
    case 'executive':
      return ExecutiveTemplate;
    case 'professional':
      return ProfessionalTemplate;
    default:
      return ModernTemplate;
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

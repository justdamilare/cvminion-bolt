import { Application } from '../../../types/application';
import { Document, Page } from '@react-pdf/renderer';

export interface TemplateProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
}

export interface ResumeTemplate {
  render: (props: TemplateProps) => JSX.Element;
  styles: any;
}

export const BaseTemplate: ResumeTemplate = {
  render: ({ resume }) => (
    <Document>
      <Page size="A4" style={BaseTemplate.styles.page}>
        {/* Template specific content will go here */}
      </Page>
    </Document>
  ),
  styles: {},
}; 

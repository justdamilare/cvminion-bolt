import { Application } from '../../../types/application';
import { Document, Page, StyleSheet, ViewStyle, TextStyle } from '@react-pdf/renderer';

export interface TemplateProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  options?: {
    showCompanyDescription?: boolean;
    showKeyAchievements?: boolean;
    showResponsibilities?: boolean;
  };
}

export interface TemplateStyle {
  name: string;
  description: string;
  preview: string;
  styles: ReturnType<typeof StyleSheet.create>;
  layout: 'single' | 'double' | 'creative';
  theme: 'light' | 'dark' | 'modern';
  sections: {
    header: boolean;
    summary: boolean;
    experience: boolean;
    education: boolean;
    skills: boolean;
    languages: boolean;
    projects: boolean;
    certifications: boolean;
  };
  customSections?: string[];
}

export interface ResumeTemplate {
  id: string;
  name: string;
  description: string;
  preview: string;
  style: TemplateStyle;
  render: (props: TemplateProps) => JSX.Element;
  defaultOptions?: TemplateProps['options'];
}

export const BaseTemplate: ResumeTemplate = {
  id: 'base',
  name: 'Base Template',
  description: 'Base template for all resume templates',
  preview: '',
  style: {
    name: 'Base',
    description: 'Base template style',
    preview: '',
    styles: StyleSheet.create({
      page: {
        padding: 30,
        fontFamily: 'Inter',
        fontSize: 10,
        color: '#333',
        backgroundColor: '#fff',
      },
    }),
    layout: 'single',
    theme: 'light',
    sections: {
      header: true,
      summary: true,
      experience: true,
      education: true,
      skills: true,
      languages: true,
      projects: true,
      certifications: true,
    },
  },
  render: ({ resume, options }) => (
    <Document>
      <Page size="A4" style={BaseTemplate.style.styles.page}>
        {/* Template specific content will go here */}
      </Page>
    </Document>
  ),
  defaultOptions: {
    showCompanyDescription: true,
    showKeyAchievements: true,
    showResponsibilities: true,
  },
}; 

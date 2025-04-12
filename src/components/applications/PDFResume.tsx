import React from 'react';
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Font,
  Link,
} from '@react-pdf/renderer';
import { Application } from '../../types/application';
import { ResumeTemplate } from './ResumeTemplates';
import { modernStyles } from './templates/ModernTemplate';
import { classicStyles } from './templates/ClassicTemplate';
import { minimalStyles } from './templates/MinimalTemplate';
import { creativeStyles } from './templates/CreativeTemplate';
import { executiveStyles } from './templates/ExecutiveTemplate';
import { professionalStyles } from './templates/ProfessionalTemplate';

interface PDFResumeProps {
  resume: NonNullable<Application['generatedResume']>['tailored_resume'];
  template: ResumeTemplate;
}

// Register fonts
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf', fontWeight: 300 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 400 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.ttf', fontWeight: 500 },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 700 },
  ],
});

Font.register({
  family: 'Lato',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh7USSwiPHA.ttf', fontWeight: 300 },
    { src: 'https://fonts.gstatic.com/s/lato/v24/S6uyw4BMUTPHjx4wWw.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/lato/v24/S6u9w4BMUTPHh6UVSwiPHA.ttf', fontWeight: 700 },
  ],
});

Font.register({
  family: 'Montserrat',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCtr6Hw5aX8.ttf', fontWeight: 400 },
    { src: 'https://fonts.gstatic.com/s/montserrat/v26/JTUHjIg1_i6t8kCHKm4532VJOt5-QNFgpCuM73w5aX8.ttf', fontWeight: 700 },
  ],
});

const getTemplateStyles = (template: ResumeTemplate) => {
  switch (template) {
    case 'modern':
      return modernStyles;
    case 'classic':
      return classicStyles;
    case 'minimal':
      return minimalStyles;
    case 'creative':
      return creativeStyles;
    case 'executive':
      return executiveStyles;
    case 'professional':
      return professionalStyles;
    default:
      return modernStyles;
  }
};

export const PDFResume: React.FC<PDFResumeProps> = ({ resume, template }) => {
  const styles = getTemplateStyles(template);

  return (
    <PDFViewer style={{ width: '100%', height: '600px' }}>
      <Document>
        <Page size="A4" style={styles.page} wrap>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{resume.name}</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactItem}>{resume.email}</Text>
              <Text style={styles.contactItem}>{resume.phone_number}</Text>
              <Text style={styles.contactItem}>{resume.address}</Text>
              {resume.website && (
                <Link src={resume.website} style={styles.contactItem}>
                  <Text style={styles.link}>{resume.website.replace(/^https?:\/\//, '')}</Text>
                </Link>
              )}
              {resume.linkedin && (
                <Link src={resume.linkedin} style={styles.contactItem}>
                  <Text style={styles.link}>LinkedIn</Text>
                </Link>
              )}
            </View>
          </View>

          <View style={styles.content}>
            {/* Summary */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Professional Summary</Text>
              <Text style={styles.description}>{resume.summary}</Text>
            </View>

            <View style={styles.columns}>
              <View style={styles.leftColumn}>
                {/* Experience */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Professional Experience</Text>
                  {resume.experience.map((exp, index) => (
                    <View key={index} style={styles.experienceItem}>
                      <Text style={styles.jobTitle}>{exp.title}</Text>
                      <Text style={styles.company}>{exp.company}</Text>
                      <Text style={styles.period}>
                        {exp.start_date} - {exp.end_date}
                      </Text>
                      {exp.key_achievements.map((achievement, i) => (
                        <View key={i} style={styles.bulletPoint}>
                          <Text style={styles.description}>• {achievement}</Text>
                        </View>
                      ))}
                    </View>
                  ))}
                </View>
              </View>

              <View style={styles.rightColumn}>
                {/* Education */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Education</Text>
                  {resume.education.map((edu, index) => (
                    <View key={index} style={styles.educationItem}>
                      <Text style={styles.degree}>{edu.degree}</Text>
                      <Text style={styles.school}>{edu.institution}</Text>
                      <Text style={styles.period}>
                        {edu.start_date} - {edu.end_date}
                      </Text>
                    </View>
                  ))}
                </View>

                {/* Skills */}
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Skills</Text>
                  <View style={styles.skillsContainer}>
                    {resume.skills.map((skill, index) => (
                      <View key={index} style={styles.skillCategory}>
                        <Text style={styles.skill}>• {skill.name} ({skill.level})</Text>
                      </View>
                    ))}
                  </View>
                </View>

                {/* Languages */}
                {resume.languages && resume.languages.length > 0 && (
                  <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Languages</Text>
                    {resume.languages.map((lang, index) => (
                      <Text key={index} style={styles.description}>
                        • {lang.name} - {lang.level}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </View>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
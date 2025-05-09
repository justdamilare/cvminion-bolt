import { Document, Page, StyleSheet, View, Text } from '@react-pdf/renderer';
import { ResumeTemplate } from './TemplateBase';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Inter',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
    color: '#1A1A1A',
  },
  header: {
    marginBottom: 20,
    borderBottom: '2px solid #FF3366',
    paddingBottom: 15,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 5,
    letterSpacing: 1,
  },
  title: {
    fontSize: 16,
    color: '#FF3366',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#FF3366',
    marginBottom: 8,
    borderBottom: '1px solid #FF3366',
    paddingBottom: 4,
  },
  experience: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: '2px solid #FF3366',
  },
  company: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  role: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 2,
  },
  date: {
    fontSize: 9,
    color: '#FF3366',
    marginBottom: 4,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 9,
    color: '#1A1A1A',
    marginBottom: 4,
    lineHeight: 1.4,
  },
  skills: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  skill: {
    fontSize: 9,
    color: '#FFFFFF',
    backgroundColor: '#FF3366',
    padding: '2px 6px',
    borderRadius: 3,
  },
  education: {
    marginBottom: 10,
    paddingLeft: 10,
    borderLeft: '2px solid #FF3366',
  },
  degree: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 2,
  },
  institution: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 2,
  },
});

export const PulseTemplate: ResumeTemplate = {
  id: 'pulse',
  name: 'Pulse',
  description: 'A vibrant, energetic design with bold accents and dynamic typography',
  preview: '/templates/pulse-preview.png',
  style: {
    name: 'Pulse',
    description: 'Vibrant and energetic design',
    preview: '/templates/pulse-preview.png',
    styles,
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
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.full_name}</Text>
          <Text style={styles.title}>{resume.experience[0]?.position}</Text>
          <View style={styles.contact}>
            <Text>{resume.email}</Text>
            <Text>{resume.phone_number}</Text>
            <Text>{resume.address}</Text>
          </View>
        </View>

        {resume.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.description}>{resume.summary}</Text>
          </View>
        )}

        {resume.experience && resume.experience.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Experience</Text>
            {resume.experience.map((exp, index) => (
              <View key={index} style={styles.experience}>
                <Text style={styles.company}>{exp.company}</Text>
                <Text style={styles.role}>{exp.position}</Text>
                <Text style={styles.date}>
                  {exp.start_date} - {exp.end_date || 'Present'}
                </Text>
                {options?.showResponsibilities && exp.responsibilities && (
                  <Text style={styles.description}>{exp.responsibilities.join('\n')}</Text>
                )}
                {options?.showKeyAchievements && exp.key_achievements && (
                  <Text style={styles.description}>{exp.key_achievements.join('\n')}</Text>
                )}
              </View>
            ))}
          </View>
        )}

        {resume.education && resume.education.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Education</Text>
            {resume.education.map((edu, index) => (
              <View key={index} style={styles.education}>
                <Text style={styles.degree}>{edu.degree}</Text>
                <Text style={styles.institution}>{edu.institution}</Text>
                <Text style={styles.date}>
                  {edu.start_date} - {edu.end_date || 'Present'}
                </Text>
              </View>
            ))}
          </View>
        )}

        {resume.skills && resume.skills.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Skills</Text>
            <View style={styles.skills}>
              {resume.skills.map((skill, index) => (
                <Text key={index} style={styles.skill}>
                  {skill.name}
                </Text>
              ))}
            </View>
          </View>
        )}
      </Page>
    </Document>
  ),
  defaultOptions: {
    showCompanyDescription: true,
    showKeyAchievements: true,
    showResponsibilities: true,
  },
}; 

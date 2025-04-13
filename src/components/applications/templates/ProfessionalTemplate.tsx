import React from 'react';
import { StyleSheet } from '@react-pdf/renderer';
import { Document, Page, View, Text, Link } from '@react-pdf/renderer';
import { ResumeTemplate } from './TemplateBase';

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#3498DB',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498DB',
  },
  contact: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  links: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#3498DB',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
    paddingBottom: 4,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 15,
    color: '#333333',
  },
  experienceItem: {
    marginBottom: 12,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#444444',
  },
  companyDescription: {
    fontSize: 10,
    color: '#666666',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  location: {
    fontSize: 10,
    color: '#666666',
  },
  dates: {
    fontSize: 10,
    color: '#666666',
    marginBottom: 4,
  },
  achievements: {
    marginTop: 4,
  },
  responsibilities: {
    marginTop: 4,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.5,
    marginBottom: 2,
    paddingLeft: 12,
    color: '#333333',
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  major: {
    fontSize: 10,
    color: '#444444',
    fontStyle: 'italic',
  },
  institution: {
    fontSize: 10,
    color: '#444444',
  },
  coursework: {
    marginTop: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 6,
    marginTop: 4,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#F5F5F5',
    padding: '4 8',
    borderRadius: 4,
    color: '#333333',
  },
  language: {
    fontSize: 10,
    marginBottom: 4,
    color: '#333333',
  }
});

export const ProfessionalTemplate: ResumeTemplate = {
  styles,
  render: ({ resume }) => (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.name}>{resume.name}</Text>
          <View style={styles.contact}>
            <Text>{resume.email}</Text>
            <Text>{resume.phone_number}</Text>
            <Text>{resume.address}</Text>
          </View>
          <View style={styles.links}>
            {resume.website && (
              <Link src={resume.website}>
                <Text>{resume.website}</Text>
              </Link>
            )}
            {resume.linkedin && (
              <Link src={resume.linkedin}>
                <Text>LinkedIn</Text>
              </Link>
            )}
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Summary</Text>
          <Text style={styles.summary}>{resume.summary}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {resume.experience.map((exp, index) => (
            <View key={index} style={styles.experienceItem}>
              <Text style={styles.jobTitle}>{exp.title}</Text>
              <Text style={styles.company}>{exp.company}</Text>
              <Text style={styles.dates}>
                {exp.start_date} - {exp.end_date}
              </Text>
              <View style={styles.achievements}>
                {exp.key_achievements.map((achievement, i) => (
                  <Text key={i} style={styles.bullet}>
                    • {achievement}
                  </Text>
                ))}
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Education</Text>
          {resume.education.map((edu, index) => (
            <View key={index} style={styles.educationItem}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.institution}>{edu.institution}</Text>
              <Text style={styles.dates}>
                {edu.start_date} - {edu.end_date}
              </Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <View style={styles.skillsGrid}>
            {resume.skills.map((skill, index) => (
              <Text key={index} style={styles.skill}>
                {skill.name} ({skill.level})
              </Text>
            ))}
          </View>
        </View>

        {resume.languages && resume.languages.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Languages</Text>
            {resume.languages.map((lang, index) => (
              <Text key={index} style={styles.language}>
                {lang.name} - {lang.level}
              </Text>
            ))}
          </View>
        )}
      </Page>
    </Document>
  ),
}; 

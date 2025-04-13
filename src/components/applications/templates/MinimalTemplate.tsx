'use client';

import type React from 'react';
import { ResumeTemplate } from './TemplateBase';    
import { Document, Page, Text, View, StyleSheet, Font, Link } from "@react-pdf/renderer"

// Register fonts
Font.register({
  family: 'Helvetica',
  fonts: [
    {
      src: 'https://fonts.cdnfonts.com/s/29107/Helvetica.woff',
    },
    {
      src: 'https://fonts.cdnfonts.com/s/29107/Helvetica-Bold.woff',
      fontWeight: 700,
    },
  ],
});

Font.register({
  family: "Inter",
  fonts: [
    {
      src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Inter/static/Inter_18pt-Regular.ttf",
    },
    {
      src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Inter/static/Inter_18pt-SemiBold.ttf",
      fontWeight: 600,
    },
    {
      src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Inter/static/Inter_18pt-Bold.ttf",
      fontWeight: 700,
    },
  ],
});

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: "Inter",
    fontSize: 10,
    color: "#333",
    backgroundColor: "#fff",
  },
  header: {
    marginBottom: 20,
    borderBottom: "1px solid #e5e7eb",
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    letterSpacing: 1,
  },
  title: {
    fontSize: 12,
    marginTop: 5,
    color: "#6b7280",
  },
  contactInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  contactItem: {
    marginRight: 15,
    fontSize: 9,
    color: "#6b7280",
  },
  link: {
    color: "#000",
    textDecoration: "none",
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700,
    marginBottom: 8,
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  experienceItem: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 600,
  },
  company: {
    fontSize: 11,
  },
  period: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 5,
    marginTop: 5,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
  },
  bulletPoint: {
    marginBottom: 3,
  },
  skillsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  skill: {
    fontSize: 9,
    padding: "2 5",
    margin: 2,
    borderRadius: 2,
    border: "0.5px solid #d1d5db",
  },
  columns: {
    flexDirection: "row",
  },
  leftColumn: {
    width: "70%",
    paddingRight: 15,
  },
  rightColumn: {
    width: "30%",
  },
  educationItem: {
    marginBottom: 8,
  },
  degree: {
    fontSize: 11,
    fontWeight: 600,
  },
  school: {
    fontSize: 10,
  },
  divider: {
    borderBottom: "1px solid #e5e7eb",
    marginVertical: 10,
  },
});

export const MinimalTemplate: ResumeTemplate = {
  styles,
  render: ({ resume }) => (
    <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.name}>{resume.name}</Text>
        <Text style={styles.title}>{resume.experience[0]?.position}</Text>
        <View style={styles.contactInfo}>
          <Text style={styles.contactItem}>{resume.email}</Text>
          <Text style={styles.contactItem}>{resume.phone_number}</Text>
          <Text style={styles.contactItem}>{resume.address}</Text>
          {resume.website && (
            <Link src={resume.website} style={styles.contactItem}>
              <Text style={styles.link}>{resume.website.replace(/^https?:\/\//, "")}</Text>
            </Link>
          )}
          {resume.linkedin && (
            <Link src={`https://${resume.linkedin}`} style={styles.contactItem}>
              <Text style={styles.link}>LinkedIn</Text>
            </Link>
          )}
        </View>
      </View>

      <View style={styles.columns}>
        <View style={styles.leftColumn}>
          {/* Summary */}
          {resume.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Profile</Text>
              <Text style={styles.description}>{resume.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Experience</Text>
              {resume.experience.map((exp, index) => (
                <View key={index} style={styles.experienceItem}>
                  <Text>
                    <Text style={styles.jobTitle}>{exp.position}</Text>
                    <Text style={styles.company}>, {exp.company}</Text>
                  </Text>
                  <Text style={styles.period}>
                    {exp.start_date} - {exp.end_date}
                  </Text>
                  {/* {exp.company_description && (
                    <Text style={styles.description}>{exp.company_description}</Text>
                  )} */}
                  {(exp.key_achievements.length > 0 ? exp.key_achievements : exp.responsibilities).map((item, i) => (
                    <View key={i} style={styles.bulletPoint}>
                      <Text style={styles.description}>• {item}</Text>
                    </View>
                  ))}
                  {index < resume.experience.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          )}
        </View>

        <View style={styles.rightColumn}>
          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resume.education.map((edu, index) => (
                <View key={index} style={styles.educationItem}>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.school}>{edu.institution}</Text>
                  <Text style={styles.period}>
                    {edu.start_date} - {edu.end_date}
                  </Text>
                  {edu.other_details.map((detail, i) => (
                    <Text key={i} style={styles.description}>• {detail}</Text>
                  ))}
                  {index < resume.education.length - 1 && <View style={styles.divider} />}
                </View>
              ))}
            </View>
          )}

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Skills</Text>
              <View style={styles.skillsContainer}>
                {resume.skills.map((skill, index) => (
                  <Text key={index} style={styles.skill}>
                    {skill.name} ({skill.level})
                  </Text>
                ))}
              </View>
            </View>
          )}

          {/* Languages */}
          {resume.languages && resume.languages.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {resume.languages.map((language, index) => (
                <Text key={index} style={styles.description}>
                  • {language.name} - {language.level}
                </Text>
              ))}
            </View>
          )}
        </View>
      </View>
    </Page>
  </Document>
  ),
}; 

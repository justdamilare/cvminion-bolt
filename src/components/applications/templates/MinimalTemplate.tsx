'use client';

import { Document, Page, Text, View, StyleSheet, Font } from "@react-pdf/renderer";
import { ResumeTemplate } from './TemplateBase';

// Register fonts
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
  institution: {
    fontSize: 10,
  },
  projectItem: {
    marginBottom: 8,
  },
  projectTitle: {
    fontSize: 11,
    fontWeight: 600,
  },
  divider: {
    borderBottom: "1px solid #e5e7eb",
    marginVertical: 10,
  },
});

export const MinimalTemplate: ResumeTemplate = {
  id: 'minimal',
  name: 'Minimal',
  description: 'Simple and elegant with focus on content',
  preview: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&q=80',
  style: {
    name: 'Minimal',
    description: 'Clean and professional design',
    preview: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=400&q=80',
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
  render: ({ resume, options = {} }) => {
    const { showCompanyDescription = true, showKeyAchievements = true, showResponsibilities = true } = options;
    
    return (
      <Document>
        <Page size="A4" style={styles.page}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.name}>{resume.full_name}</Text>
            <Text style={styles.title}>{resume.experience[0]?.position}</Text>
            <View style={styles.contactInfo}>
              <Text style={styles.contactItem}>{resume.email}</Text>
              <Text style={styles.contactItem}>{resume.phone_number}</Text>
              <Text style={styles.contactItem}>{resume.address}</Text>
              {resume.website && (
                <Text style={styles.contactItem}>
                  <Text style={styles.link}>{resume.website.replace(/^https?:\/\//, "")}</Text>
                </Text>
              )}
              {resume.linkedin && (
                <Text style={styles.contactItem}>
                  <Text style={styles.link}>LinkedIn</Text>
                </Text>
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
                        {exp.start_date} - {exp.end_date || 'Present'}
                      </Text>
                      {showCompanyDescription && exp.company_description && (
                        <Text style={styles.description}>{exp.company_description}</Text>
                      )}
                      {showKeyAchievements && exp.key_achievements?.map((item, i) => (
                        <View key={i} style={styles.bulletPoint}>
                          <Text style={styles.description}>• {item}</Text>
                        </View>
                      ))}
                      {showResponsibilities && exp.responsibilities?.map((item, i) => (
                        <View key={i} style={styles.bulletPoint}>
                          <Text style={styles.description}>• {item}</Text>
                        </View>
                      ))}
                      {index < resume.experience.length - 1 && <View style={styles.divider} />}
                    </View>
                  ))}
                </View>
              )}

              {/* Projects */}
              {resume.projects && resume.projects.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Projects</Text>
                  {resume.projects.map((project, index) => (
                    <View key={index} style={styles.projectItem}>
                      <Text style={styles.projectTitle}> • {project.title}</Text>
                      {project.description && (
                        <Text style={styles.description}>{project.description}</Text>
                      )}
                      {project.start_date && project.end_date && (
                        <Text style={styles.period}>
                          {project.start_date} - {project.end_date}
                        </Text>
                      )}
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
                      <Text style={styles.degree}>{edu.field}</Text>
                      <Text style={styles.institution}>{edu.institution}</Text>
                      <Text style={styles.period}>
                        {edu.start_date} - {edu.end_date || 'Present'}
                      </Text>
                      {edu.other_details && (
                        <Text style={styles.description}>{edu.other_details}</Text>
                      )}
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

              {/* Certifications */}
              {resume.certifications && resume.certifications.length > 0 && (
                <View style={styles.section}>
                  <Text style={styles.sectionTitle}>Certifications</Text>
                  {resume.certifications.map((certification, index) => (
                    <Text key={index} style={styles.description}>
                      • {certification.organization ? `${certification.name} - ${certification.organization}` : certification.name}
                    </Text>
                  ))}
                </View>
              )}
            </View>
          </View>
        </Page>
      </Document>
    );
  },
  defaultOptions: {
    showCompanyDescription: true,
    showKeyAchievements: true,
    showResponsibilities: true,
  },
}; 

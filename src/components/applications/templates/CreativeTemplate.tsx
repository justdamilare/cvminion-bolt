"use client"

import type React from "react"
import { Document, Page, Text, View, StyleSheet, Font, Link, Svg, Circle } from "@react-pdf/renderer"
import type { ResumeData } from "@/types/resume"
import { ResumeTemplate } from "./TemplateBase"

// Register fonts
Font.register({
  family: "Poppins",
  fonts: [
    { src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Poppins/Poppins-Regular.ttf" },
    { src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Poppins/Poppins-Medium.ttf", fontWeight: 500 },
    { src: "https://zhlpovxcsalhfxzjfcun.supabase.co/storage/v1/object/public/fonts/Poppins/Poppins-Bold.ttf", fontWeight: 700 },
  ],
})

// Create styles
const styles = StyleSheet.create({
  page: {
    fontFamily: "Poppins",
    fontSize: 10,
    color: "#333",
    flexDirection: "row",
  },
  sidebar: {
    width: "35%",
    backgroundColor: "#6366f1",
    color: "white",
    padding: 20,
  },
  mainContent: {
    width: "65%",
    padding: 30,
  },
  name: {
    fontSize: 24,
    fontWeight: 700,
    marginBottom: 5,
    marginTop: 20,
  },
  title: {
    fontSize: 12,
    marginBottom: 20,
    opacity: 0.8,
  },
  sidebarSection: {
    marginBottom: 20,
  },
  sidebarSectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
    paddingBottom: 5,
  },
  contactInfo: {
    marginBottom: 5,
  },
  contactItem: {
    marginBottom: 8,
    fontSize: 9,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 700,
    marginBottom: 10,
    color: "#6366f1",
    position: "relative",
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  company: {
    fontSize: 11,
    fontWeight: 500,
  },
  period: {
    fontSize: 9,
    color: "#6b7280",
    marginBottom: 5,
  },
  description: {
    fontSize: 9,
    lineHeight: 1.5,
  },
  bulletPoint: {
    marginBottom: 3,
  },
  skillBar: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
  },
  skillName: {
    width: "40%",
    fontSize: 9,
  },
  skillLevel: {
    width: "60%",
    height: 5,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    borderRadius: 3,
  },
  skillFill: {
    height: 5,
    backgroundColor: "white",
    borderRadius: 3,
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 12,
    fontWeight: 700,
  },
  school: {
    fontSize: 11,
  },
  timelineDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#6366f1",
    marginRight: 10,
  },
  timelineItem: {
    flexDirection: "row",
    marginBottom: 15,
  },
  timelineContent: {
    flex: 1,
  },
})


export const CreativeResume: ResumeTemplate = {
  styles, 
  render: ({ resume }) => {
    // Helper function to calculate skill level (1-5)
    const getSkillLevel = (skill: string): number => {
      if (skill.includes("(")) {
      const levelMatch = skill.match(/$$(\d+)$$/)
      if (levelMatch && levelMatch[1]) {
        const level = Number.parseInt(levelMatch[1], 10)
        return Math.min(Math.max(level, 1), 5) // Ensure between 1-5
      }
    }
    return 4 // Default level
  }


  const Resume = (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Sidebar */}
        <View style={styles.sidebar}>
          <Text style={styles.name}>{resume.name}</Text>
          <Text style={styles.title}>{resume.experience[0]?.position}</Text>

          {/* Contact Information */}
          <View style={styles.sidebarSection}>
            <Text style={styles.sidebarSectionTitle}>Contact</Text>
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
                <Link src={resume.linkedin} style={styles.contactItem}>
                  <Text style={styles.link}>LinkedIn</Text>
                </Link>
              )}
            </View>
          </View>

          {/* Skills */}
          {resume.skills && resume.skills.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Skills</Text>
              {resume.skills.map((skill, index) => (
                <View key={index} style={styles.skillBar}>
                  <Text style={styles.skillName}>{skill.name}</Text>
                  <View style={styles.skillLevel}>
                    <View style={[styles.skillFill, { width: `${getSkillLevel(skill.name) * 20}%` }]} />
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Languages */}
          {resume.languages && resume.languages.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Languages</Text>
              {resume.languages.map((language, index) => (
                <View key={index} style={styles.skillBar}>
                  <Text style={styles.skillName}>{language.name}</Text>
                  <View style={styles.skillLevel}>
                    <View
                      style={[
                        styles.skillFill,
                        {
                          width: language.level.toLowerCase().includes("native")
                            ? "100%"
                            : language.level.toLowerCase().includes("fluent")
                              ? "90%"
                              : language.level.toLowerCase().includes("advanced")
                                ? "75%"
                                : language.level.toLowerCase().includes("intermediate")
                                  ? "50%"
                                  : "30%",
                        },
                      ]}
                    />
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Certifications
          {resume.certifications && resume.certifications.length > 0 && (
            <View style={styles.sidebarSection}>
              <Text style={styles.sidebarSectionTitle}>Certifications</Text>
              {resume.certifications.map((cert, index) => (
                <View key={index} style={{ marginBottom: 5 }}>
                  <Text style={{ fontSize: 9, fontWeight: 700 }}>{cert.name}</Text>
                  <Text style={{ fontSize: 8 }}>{cert.issuer}</Text>
                  {cert.date && <Text style={{ fontSize: 8 }}>{cert.date}</Text>}
                </View>
              ))}
            </View>
          )}
        </View> */}

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Summary */}
          {resume.summary && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>About Me</Text>
              <Text style={styles.description}>{resume.summary}</Text>
            </View>
          )}

          {/* Experience */}
          {resume.experience && resume.experience.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Work Experience</Text>
              {resume.experience.map((exp, index) => (
                <View key={index} style={styles.timelineItem}>
                  <Svg width={8} height={8} style={{ marginTop: 4, marginRight: 10 }}>
                    <Circle cx={4} cy={4} r={4} fill="#6366f1" />
                  </Svg>
                  <View style={styles.timelineContent}>
                    <Text style={styles.jobTitle}>{exp.position}</Text>
                    <Text style={styles.company}>{exp.company}</Text>
                    <Text style={styles.period}>
                      {exp.start_date} - {exp.end_date || "Present"}
                    </Text>
                    {exp.company_description && <Text style={styles.description}>{exp.company_description}</Text>}
                    {(exp.key_achievements.length > 0 ? exp.key_achievements : exp.responsibilities).map((item, i) => (
                      <View key={i} style={styles.bulletPoint}>
                        <Text style={styles.description}>• {item}</Text>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {resume.education && resume.education.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {resume.education.map((edu, index) => (
                <View key={index} style={styles.timelineItem}>
                  <Svg width={8} height={8} style={{ marginTop: 4, marginRight: 10 }}>
                    <Circle cx={4} cy={4} r={4} fill="#6366f1" />
                  </Svg>
                  <View style={styles.timelineContent}>
                    <Text style={styles.degree}>{edu.degree}</Text>
                    <Text style={styles.school}>{edu.institution}</Text>
                    <Text style={styles.period}>
                      {edu.start_date} - {edu.end_date || "Present"}
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          )}

          {/* Projects
          {resume.projects && resume.projects.length > 0 && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Projects</Text>
              {resume.projects.map((project, index) => (
                <View key={index} style={styles.timelineItem}>
                  <Svg width={8} height={8} style={{ marginTop: 4, marginRight: 10 }}>
                    <Circle cx={4} cy={4} r={4} fill="#6366f1" />
                  </Svg>
                  <View style={styles.timelineContent}>
                    <Text style={styles.jobTitle}>{project.name}</Text>
                    {project.url && (
                      <Link src={project.url}>
                        <Text style={[styles.description, { color: "#6366f1" }]}>{project.url}</Text>
                      </Link>
                    )}
                    {project.description && <Text style={styles.description}>{project.description}</Text>}
                    {project.technologies && (
                      <Text style={[styles.description, { marginTop: 3 }]}>
                        Technologies: {project.technologies.join(", ")}
                      </Text>
                    )}
                  </View>
                </View>
              ))}
            </View>
          )} */}
        </View>
        </View>
      </Page>
    </Document>
  )

  return Resume
  }
}

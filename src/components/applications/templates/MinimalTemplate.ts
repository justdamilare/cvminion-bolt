import { StyleSheet } from '@react-pdf/renderer';

export const minimalStyles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 'light',
    marginBottom: 8,
    color: '#000000',
  },
  contact: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 4,
  },
  links: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 4,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'medium',
    marginBottom: 12,
    color: '#000000',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summary: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 15,
    color: '#333333',
  },
  experienceItem: {
    marginBottom: 20,
  },
  jobTitle: {
    fontSize: 11,
    fontWeight: 'medium',
    color: '#000000',
  },
  company: {
    fontSize: 10,
    color: '#333333',
  },
  companyDescription: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 4,
  },
  location: {
    fontSize: 9,
    color: '#666666',
  },
  dates: {
    fontSize: 9,
    color: '#666666',
    marginBottom: 6,
  },
  achievements: {
    marginTop: 6,
  },
  responsibilities: {
    marginTop: 6,
  },
  bullet: {
    fontSize: 9,
    lineHeight: 1.6,
    marginBottom: 2,
    paddingLeft: 8,
    color: '#333333',
  },
  educationItem: {
    marginBottom: 12,
  },
  degree: {
    fontSize: 10,
    fontWeight: 'medium',
    color: '#000000',
  },
  major: {
    fontSize: 9,
    color: '#666666',
  },
  institution: {
    fontSize: 9,
    color: '#666666',
  },
  coursework: {
    marginTop: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 4,
  },
  skill: {
    fontSize: 9,
    color: '#333333',
  },
  language: {
    fontSize: 9,
    marginBottom: 4,
    color: '#333333',
  }
});
import { StyleSheet } from '@react-pdf/renderer';

export const modernStyles = StyleSheet.create({
  page: {
    padding: 30,
    fontFamily: 'Helvetica',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    borderBottom: 2,
    borderBottomColor: '#FFD700',
    paddingBottom: 10,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1A1A1A',
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
    color: '#FFD700',
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
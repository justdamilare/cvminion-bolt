import { StyleSheet } from '@react-pdf/renderer';

export const classicStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Times-Roman',
    fontSize: 11,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
    textTransform: 'uppercase',
  },
  contact: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 4,
  },
  links: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 4,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#000000',
    textTransform: 'uppercase',
    textAlign: 'center',
    borderBottom: 1,
    borderBottomColor: '#000000',
    paddingBottom: 4,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 15,
    color: '#000000',
    textAlign: 'justify',
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000000',
  },
  company: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#333333',
  },
  companyDescription: {
    fontSize: 11,
    color: '#333333',
    fontStyle: 'italic',
    marginBottom: 2,
  },
  location: {
    fontSize: 11,
    color: '#333333',
  },
  dates: {
    fontSize: 11,
    color: '#333333',
    marginBottom: 4,
  },
  achievements: {
    marginTop: 4,
  },
  responsibilities: {
    marginTop: 4,
  },
  bullet: {
    fontSize: 11,
    lineHeight: 1.5,
    marginBottom: 2,
    paddingLeft: 12,
    color: '#000000',
  },
  educationItem: {
    marginBottom: 10,
  },
  degree: {
    fontSize: 11,
    fontWeight: 'bold',
    color: '#000000',
  },
  major: {
    fontSize: 11,
    color: '#333333',
    fontStyle: 'italic',
  },
  institution: {
    fontSize: 11,
    color: '#333333',
  },
  coursework: {
    marginTop: 4,
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 4,
    justifyContent: 'center',
  },
  skill: {
    fontSize: 11,
    padding: '2 6',
    color: '#000000',
  },
  language: {
    fontSize: 11,
    marginBottom: 4,
    color: '#000000',
    textAlign: 'center',
  }
});
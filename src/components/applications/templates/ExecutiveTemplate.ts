import { StyleSheet } from '@react-pdf/renderer';

export const executiveStyles = StyleSheet.create({
  page: {
    padding: 50,
    fontFamily: 'Lato',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 40,
    borderLeft: 4,
    borderLeftColor: '#1A365D',
    paddingLeft: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#1A365D',
    letterSpacing: 1,
  },
  contact: {
    fontSize: 10,
    color: '#4A5568',
    marginBottom: 4,
  },
  links: {
    fontSize: 10,
    color: '#4A5568',
    marginBottom: 4,
  },
  section: {
    marginBottom: 30,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1A365D',
    borderBottom: 1,
    borderBottomColor: '#CBD5E0',
    paddingBottom: 8,
    letterSpacing: 1,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.8,
    marginBottom: 20,
    color: '#2D3748',
    paddingRight: 40,
  },
  experienceItem: {
    marginBottom: 24,
  },
  experienceHeader: {
    marginBottom: 10,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    color: '#1A365D',
    marginBottom: 2,
  },
  companyDescription: {
    fontSize: 10,
    color: '#4A5568',
    marginBottom: 4,
    fontStyle: 'italic',
  },
  dates: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 8,
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 4,
    paddingLeft: 12,
    color: '#2D3748',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
    marginTop: 8,
  },
  skill: {
    fontSize: 10,
    padding: '4 12',
    color: '#2D3748',
    borderLeft: 1,
    borderLeftColor: '#1A365D',
  },
  languagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    marginTop: 8,
  },
  language: {
    fontSize: 10,
    color: '#2D3748',
  }
});
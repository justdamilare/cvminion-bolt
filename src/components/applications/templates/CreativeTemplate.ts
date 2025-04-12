import { StyleSheet } from '@react-pdf/renderer';

export const creativeStyles = StyleSheet.create({
  page: {
    padding: 40,
    fontFamily: 'Montserrat',
    fontSize: 10,
    backgroundColor: '#FFFFFF',
  },
  header: {
    marginBottom: 30,
    backgroundColor: '#2D3748',
    margin: -40,
    marginBottom: 30,
    padding: 40,
    paddingBottom: 30,
  },
  name: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#FFFFFF',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  contact: {
    fontSize: 10,
    color: '#CBD5E0',
    marginBottom: 4,
    fontFamily: 'Lato',
  },
  links: {
    fontSize: 10,
    color: '#CBD5E0',
    marginBottom: 4,
    fontFamily: 'Lato',
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#2D3748',
    borderBottom: 2,
    borderBottomColor: '#E53E3E',
    paddingBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  summary: {
    fontSize: 11,
    lineHeight: 1.6,
    marginBottom: 20,
    color: '#4A5568',
    fontFamily: 'Lato',
  },
  experienceItem: {
    marginBottom: 20,
  },
  experienceHeader: {
    marginBottom: 8,
  },
  jobTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#2D3748',
    marginBottom: 2,
  },
  company: {
    fontSize: 12,
    color: '#E53E3E',
    marginBottom: 2,
  },
  companyDescription: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 2,
    fontStyle: 'italic',
    fontFamily: 'Lato',
  },
  dates: {
    fontSize: 10,
    color: '#718096',
    marginBottom: 6,
    fontFamily: 'Lato',
  },
  bullet: {
    fontSize: 10,
    lineHeight: 1.6,
    marginBottom: 2,
    paddingLeft: 12,
    color: '#4A5568',
    fontFamily: 'Lato',
  },
  skillsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  skill: {
    fontSize: 10,
    backgroundColor: '#EDF2F7',
    padding: '6 12',
    borderRadius: 4,
    color: '#2D3748',
    fontFamily: 'Lato',
  },
  languagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 16,
    marginTop: 8,
  },
  language: {
    fontSize: 10,
    color: '#4A5568',
    fontFamily: 'Lato',
  }
});
import { StyleSheet } from '@react-pdf/renderer';

export const professionalStyles = StyleSheet.create({
  page: {
    fontFamily: 'Roboto',
    fontSize: 10,
    color: '#333',
  },
  header: {
    backgroundColor: '#1e40af',
    color: 'white',
    padding: 30,
  },
  name: {
    fontSize: 28,
    fontWeight: 700,
    marginBottom: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: 300,
    marginBottom: 15,
  },
  contactInfo: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  contactItem: {
    marginRight: 15,
    fontSize: 10,
    fontWeight: 300,
  },
  link: {
    color: 'white',
    textDecoration: 'none',
  },
  content: {
    padding: 30,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 700,
    marginBottom: 10,
    color: '#1e40af',
    borderBottom: '1px solid #e5e7eb',
    paddingBottom: 3,
  },
  experienceItem: {
    marginBottom: 15,
  },
  jobTitle: {
    fontSize: 12,
    fontWeight: 700,
  },
  company: {
    fontSize: 12,
    fontWeight: 500,
  },
  period: {
    fontSize: 10,
    color: '#6b7280',
    marginBottom: 5,
  },
  description: {
    fontSize: 10,
    lineHeight: 1.5,
  },
  bulletPoint: {
    marginBottom: 3,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  skillCategory: {
    marginBottom: 10,
    width: '50%',
  },
  skillCategoryTitle: {
    fontSize: 11,
    fontWeight: 700,
    marginBottom: 5,
  },
  skill: {
    fontSize: 10,
    marginBottom: 2,
  },
  columns: {
    flexDirection: 'row',
    marginTop: 10,
  },
  leftColumn: {
    width: '60%',
    paddingRight: 15,
  },
  rightColumn: {
    width: '40%',
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
    fontWeight: 500,
  },
});
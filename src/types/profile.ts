import { LanguageLevel } from './common';

export interface Education {
  id: string;
  school: string;
  degree: string;
  field: string;
  start_date: string;
  end_date?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  start_date: string;
  end_date?: string;
  description: string;
  highlights: string[];
}

export interface Skill {
  id: string;
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
}

export interface Language {
  id: string;
  name: string;
  level: LanguageLevel;
}

export interface Project {
  id: string;
  title: string;
  start_date: string | null;
  end_date: string | null;
}

export interface Certification {
  id: string;
  name: string;
  organization: string | null;
}

export interface Profile {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  title: string;
  website?: string;
  linkedin?: string;
  github?: string;
  education: Education[];
  experience: Experience[];
  skills: Skill[];
  languages: Language[];
  projects: Project[];
  certifications: Certification[];
  created_at: string;
  updated_at: string;
}

export interface CreateProfileData {
  full_name: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  title: string;
  website?: string;
  linkedin?: string;
  github?: string;
}

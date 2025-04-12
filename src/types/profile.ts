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

export interface Profile {
  id: string;
  fullName: string;
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
  createdAt: string;
  updatedAt: string;
}

export interface CreateProfileData {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  title: string;
  website?: string;
  linkedin?: string;
  github?: string;
}
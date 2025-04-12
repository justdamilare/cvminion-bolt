import { Profile } from '../types/profile';
import { Application } from '../types/application';

interface TailoredResume {
  name: string;
  phone_number: string;
  address: string;
  email: string;
  website: string;
  linkedin: string;
  summary: string;
  experience: {
    title: string;
    company: string;
    company_description: string;
    start_date: string;
    end_date: string;
    location: string;
    key_achievements: string[];
    responsibilities: string[];
  }[];
  skills: {
    name: string;
    level: string;
  }[];
  education: {
    degree: string;
    field: string;
    institution: string;
    start_date: string;
    end_date: string;
    relevant_coursework: string[];
    other_details: string[];
  }[];
  languages: {
    name: string;
    level: string;
  }[];
}

interface ATSScore {
  overall_score: number;
  keyword_match_score: number;
  format_score: number;
  content_quality_score: number;
  missing_keywords: string[];
  improvement_suggestions: string[];
}

interface TailorResumeResponse {
  status: 'success' | 'error';
  tailored_resume?: TailoredResume;
  ats_score?: ATSScore;
  error?: string;
}

const formatDate = (dateString: string | undefined | null): string => {
  if (!dateString) return 'Present';
  try {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return 'Present';
    return date.toLocaleDateString('en-US', {
      month: 'long',
      year: 'numeric'
    });
  } catch {
    return 'Present';
  }
};

export const tailorResume = async (
  profile: Profile,
  application: Application
): Promise<TailorResumeResponse> => {
  // Check for required profile fields
  if (!profile.fullName || !profile.phone || !profile.location || !profile.email) {
    return {
      status: 'error',
      error: 'Please complete your profile information (name, phone, location, and email) before generating a resume.'
    };
  }

  try {
    const response = await fetch('https://api.cvminion.com/api/tailor-resume', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        resume: {
          name: profile.fullName,
          phone_number: profile.phone,
          address: profile.location,
          email: profile.email,
          website: profile.website || '',
          linkedin: profile.linkedin || '',
          summary: profile.summary || '',
          experience: profile.experience.map(exp => ({
            title: exp.position,
            company: exp.company,
            company_description: exp.description || '',
            start_date: formatDate(exp.start_date),
            end_date: formatDate(exp.end_date),
            location: profile.location,
            key_achievements: exp.highlights || [],
            responsibilities: exp.description ? [exp.description] : [],
          })),
          education: profile.education.map(edu => ({
            degree: edu.degree,
            major: edu.field,
            institution: edu.school,
            start_date: formatDate(edu.start_date),
            end_date: formatDate(edu.end_date),
            relevant_coursework: [],
            other_details: edu.description ? [edu.description] : []
          })),
          skills: profile.skills.map(skill => ({
            name: skill.name,
            level: skill.level,
          })),
          languages: (profile.languages || []).map(lang => ({
            name: lang.name,
            level: lang.level,
          }))
        },
        job_description: application.jobDescription,
        additional_instructions: "Focus on relevant experience and skills for this position"
      })
    });

    if (!response.ok) {
      console.error('Resume API error:', await response.text());
      return {
        status: 'error',
        error: 'Failed to generate resume. Please try again.'
      };
    }

    const data = await response.json();
    return {
      status: 'success',
      ...data
    };
  } catch (error: any) {
    console.error('Resume generation error:', error);
    return {
      status: 'error',
      error: error.message || 'Failed to generate resume. Please try again.'
    };
  }
};
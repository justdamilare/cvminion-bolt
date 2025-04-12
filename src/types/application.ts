export type ApplicationStatus = 'Draft' | 'Applied' | 'Interview' | 'Offer' | 'Rejected';

export interface Application {
  id: string;
  company: string;
  position: string;
  jobDescription: string;
  status: ApplicationStatus;
  atsScore: number;
  appliedDate: string;
  createdAt: string;
  updatedAt: string;
  generatedResume?: {
    tailored_resume: {
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
        major: string;
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
    };
    ats_score: {
      overall_score: number;
      keyword_match_score: number;
      format_score: number;
      content_quality_score: number;
      missing_keywords: string[];
      improvement_suggestions: string[];
    };
  };
  lastGeneratedAt?: string;
}
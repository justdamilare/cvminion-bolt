import { Profile } from '../types/profile';
import { Application, ATSScore } from '../types/application';

interface TailorResumeResponse {
  status: 'success' | 'error';
  tailored_resume?: Application;
  ats_score?: ATSScore;
  error?: string;
}

export const tailorResume = async (
  profile: Profile,
  application: Application
): Promise<TailorResumeResponse> => {
  // Check for required profile fields
  if (!profile.full_name || !profile.phone_number || !profile.address || !profile.email) {
    return {
      status: 'error',
      error: 'Please complete your profile information (name, phone, location, and email) before generating a resume.'
    };
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify({
        resume: profile,
        job_description: application.jobDescription,
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
  } catch (error: unknown) {
    console.error('Resume generation error:', error);
    const errorMessage = error instanceof Error ? error.message : 'Failed to generate resume. Please try again.';
    return {
      status: 'error',
      error: errorMessage
    };
  }
};

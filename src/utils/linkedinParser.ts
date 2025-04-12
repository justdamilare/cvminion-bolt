import { Profile } from '../types/profile';

interface LinkedInProfile {
  firstName?: string;
  lastName?: string;
  email?: string;
  phoneNumbers?: string[];
  location?: {
    city?: string;
    country?: string;
  };
  summary?: string;
}

export const parseLinkedInData = (fileContent: string): Partial<Profile> => {
  try {
    // LinkedIn exports data as a ZIP file containing JSON
    // This is a simplified version - in reality, we'd need to:
    // 1. Extract the ZIP file
    // 2. Find the profile.json file
    // 3. Parse it properly
    const linkedInData = JSON.parse(fileContent) as LinkedInProfile;

    return {
      fullName: linkedInData.firstName && linkedInData.lastName 
        ? `${linkedInData.firstName} ${linkedInData.lastName}`
        : undefined,
      email: linkedInData.email,
      phone: linkedInData.phoneNumbers?.[0],
      location: linkedInData.location 
        ? [linkedInData.location.city, linkedInData.location.country]
            .filter(Boolean)
            .join(', ')
        : undefined,
      summary: linkedInData.summary,
    };
  } catch (error) {
    throw new Error('Failed to parse LinkedIn data. Please make sure you uploaded the correct file.');
  }
};
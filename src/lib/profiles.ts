import { getSupabaseClient } from './supabase';
import { Profile, CreateProfileData } from '../types/profile';

const mapToDbFields = (data: Partial<Profile>) => {
  const mapped: Record<string, any> = {};
  
  if (data.fullName !== undefined) mapped.full_name = data.fullName;
  if (data.email !== undefined) mapped.email = data.email;
  if (data.phone !== undefined) mapped.phone = data.phone;
  if (data.location !== undefined) mapped.location = data.location;
  if (data.summary !== undefined) mapped.summary = data.summary;
  if (data.title !== undefined) mapped.title = data.title;
  if (data.website !== undefined) mapped.website = data.website;
  if (data.linkedin !== undefined) mapped.linkedin = data.linkedin;
  if (data.github !== undefined) mapped.github = data.github;
  
  // Handle arrays with proper date formatting
  if (data.education !== undefined) {
    mapped.education = data.education.map(edu => ({
      ...edu,
      start_date: edu.start_date,
      end_date: edu.end_date || null
    }));
  }
  
  if (data.experience !== undefined) {
    mapped.experience = data.experience.map(exp => ({
      ...exp,
      start_date: exp.start_date,
      end_date: exp.end_date || null
    }));
  }
  
  if (data.skills !== undefined) mapped.skills = data.skills;
  if (data.languages !== undefined) mapped.languages = data.languages;
  
  return mapped;
};

const mapFromDbFields = (data: any): Profile => ({
  id: data.id,
  fullName: data.full_name || '',
  email: data.email || '',
  phone: data.phone || '',
  location: data.location || '',
  summary: data.summary || '',
  title: data.title || '',
  website: data.website || '',
  linkedin: data.linkedin || '',
  github: data.github || '',
  education: Array.isArray(data.education) ? data.education.map((edu: any) => ({
    ...edu,
    start_date: edu.start_date || '',
    end_date: edu.end_date || ''
  })) : [],
  experience: Array.isArray(data.experience) ? data.experience.map((exp: any) => ({
    ...exp,
    start_date: exp.start_date || '',
    end_date: exp.end_date || ''
  })) : [],
  skills: Array.isArray(data.skills) ? data.skills : [],
  languages: Array.isArray(data.languages) ? data.languages : [],
  createdAt: data.created_at,
  updatedAt: data.updated_at
});

export const getProfile = async (userId: string): Promise<Profile | null> => {
  const supabase = getSupabaseClient();
  
  try {
    // First try to get existing profile
    const { data: existingProfile, error: getError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .maybeSingle();

    if (getError) throw getError;

    if (existingProfile) {
      return mapFromDbFields(existingProfile);
    }

    // Use upsert instead of insert to handle race conditions
    const { data: newProfile, error: upsertError } = await supabase
      .from('profiles')
      .upsert([{
        user_id: userId,
        full_name: '',
        email: '',
        phone: '',
        location: '',
        summary: '',
        title: '',
        website: '',
        linkedin: '',
        github: '',
        education: [],
        experience: [],
        skills: [],
        languages: []
      }], {
        onConflict: 'user_id',
        ignoreDuplicates: true
      })
      .select()
      .single();

    if (upsertError) {
      // If upsert fails, try one more time to get the profile
      // as it might have been created by another concurrent request
      const { data: retryProfile, error: retryError } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .single();

      if (retryError) throw retryError;
      return mapFromDbFields(retryProfile);
    }

    return mapFromDbFields(newProfile);

  } catch (error: any) {
    // Only log and throw if it's not a duplicate key error
    if (!error.message?.includes('duplicate key value')) {
      console.error('Profile operation failed:', error);
      throw error;
    }
    
    // For duplicate key errors, try one final time to get the profile
    const { data: finalProfile, error: finalError } = await supabase
      .from('profiles')
      .select('*')
      .eq('user_id', userId)
      .single();

    if (finalError) throw finalError;
    return mapFromDbFields(finalProfile);
  }
};

export const updateProfile = async (userId: string, data: Partial<Profile>) => {
  const supabase = getSupabaseClient();
  
  const { data: profile, error } = await supabase
    .from('profiles')
    .update(mapToDbFields(data))
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return mapFromDbFields(profile);
};
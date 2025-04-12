import { getSupabaseClient } from './supabase';
import { Application, ApplicationStatus } from '../types/application';

interface CreateApplicationData {
  company: string;
  position: string;
  jobDescription: string;
  status: ApplicationStatus;
  appliedDate?: string;
}

const mapToDbFields = (data: Partial<Application>) => {
  const mapped: Record<string, any> = {};
  
  if (data.jobDescription !== undefined) mapped.job_description = data.jobDescription;
  if (data.atsScore !== undefined) mapped.ats_score = data.atsScore;
  if (data.appliedDate !== undefined) mapped.applied_date = data.appliedDate;
  if (data.status !== undefined) mapped.status = data.status;
  if (data.company !== undefined) mapped.company = data.company;
  if (data.position !== undefined) mapped.position = data.position;
  if (data.generatedResume !== undefined) mapped.generated_resume = data.generatedResume;
  
  return mapped;
};

const mapFromDbFields = (data: any): Application => ({
  id: data.id,
  company: data.company,
  position: data.position,
  jobDescription: data.job_description || '',
  status: data.status,
  atsScore: data.ats_score,
  appliedDate: data.applied_date,
  createdAt: data.created_at,
  updatedAt: data.updated_at,
  generatedResume: data.generated_resume,
  lastGeneratedAt: data.last_generated_at
});

export const createApplication = async (userId: string, data: CreateApplicationData) => {
  const supabase = getSupabaseClient();
  
  const { data: application, error } = await supabase
    .from('applications')
    .insert([{
      user_id: userId,
      ...mapToDbFields(data)
    }])
    .select()
    .single();

  if (error) throw error;
  return mapFromDbFields(application);
};

export const getApplications = async (userId: string): Promise<Application[]> => {
  const supabase = getSupabaseClient();
  
  const { data, error } = await supabase
    .from('applications')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data.map(mapFromDbFields);
};

export const updateApplication = async (
  userId: string,
  id: string,
  data: Partial<Application>
) => {
  const supabase = getSupabaseClient();
  
  const { data: application, error } = await supabase
    .from('applications')
    .update(mapToDbFields(data))
    .eq('id', id)
    .eq('user_id', userId)
    .select()
    .single();

  if (error) throw error;
  return mapFromDbFields(application);
};
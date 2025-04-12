import { createClient } from '@supabase/supabase-js';
import { getEnvConfig } from '../config/env';

let supabase: ReturnType<typeof createClient> | null = null;

export const getSupabaseClient = () => {
  if (!supabase) {
    const config = getEnvConfig();
    supabase = createClient(config.supabaseUrl, config.supabaseAnonKey);
  }
  return supabase;
};
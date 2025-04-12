interface EnvConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
}

export const getEnvConfig = (): EnvConfig => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
      'Missing Supabase configuration. Please connect to Supabase using the "Connect to Supabase" button.'
    );
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
  };
};
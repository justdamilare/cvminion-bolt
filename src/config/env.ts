interface EnvConfig {
  supabaseUrl: string;
  supabaseAnonKey: string;
  backendUrl: string;
}

export const getEnvConfig = (): EnvConfig => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  if (!supabaseUrl || !supabaseAnonKey || !backendUrl) {
    throw new Error(
      'Missing Supabase configuration. Please connect to Supabase using the "Connect to Supabase" button.'
    );
  }

  return {
    supabaseUrl,
    supabaseAnonKey,
    backendUrl,
  };
};

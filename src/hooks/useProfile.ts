import { useState, useEffect } from 'react';
import { Profile } from '../types/profile';
import { getProfile } from '../lib/profiles';
import { getSupabaseClient } from '../lib/supabase';

export const useProfile = () => {
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const supabase = getSupabaseClient();
        const { data: { user } } = await supabase.auth.getUser();
        if (!user) return;

        const userProfile = await getProfile(user.id);
        setProfile(userProfile);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  return { profile, loading, error };
};

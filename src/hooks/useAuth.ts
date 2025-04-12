import { useState, useEffect } from 'react';
import { getSupabaseClient } from '../lib/supabase';
import { toast } from 'react-hot-toast';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const MAX_RETRIES = 3;
  const RETRY_DELAY = 1000; // 1 second

  useEffect(() => {
    let mounted = true;
    let retryTimeout: NodeJS.Timeout;

    const initAuth = async () => {
      try {
        const supabase = getSupabaseClient();
        
        // First try to get the session
        const { data: { session }, error: sessionError } = await supabase.auth.getSession();
        
        if (sessionError) {
          // If it's a token error, try to refresh the session
          if (sessionError.message.includes('token') && retryCount < MAX_RETRIES) {
            const { data: refreshData, error: refreshError } = await supabase.auth.refreshSession();
            
            if (refreshError) {
              if (refreshError.message.includes('refresh_token_not_found')) {
                // Clear the invalid session state
                await supabase.auth.signOut();
                if (mounted) {
                  setIsAuthenticated(false);
                  setError(null);
                  setRetryCount(0);
                }
                return;
              }
              throw refreshError;
            }

            if (mounted && refreshData.session) {
              setIsAuthenticated(true);
              setError(null);
              setRetryCount(0);
              return;
            }
          }

          // For retryable errors, attempt retry with exponential backoff
          if (sessionError.name === 'AuthRetryableFetchError' && retryCount < MAX_RETRIES) {
            retryTimeout = setTimeout(() => {
              if (mounted) {
                setRetryCount(prev => prev + 1);
              }
            }, RETRY_DELAY * Math.pow(2, retryCount));
            return;
          }

          throw sessionError;
        }

        if (mounted) {
          setIsAuthenticated(!!session);
          setError(null);
          setRetryCount(0);
        }

        // Set up auth state change listener
        const {
          data: { subscription },
        } = supabase.auth.onAuthStateChange(async (event, session) => {
          if (!mounted) return;

          if (event === 'TOKEN_REFRESHED') {
            setIsAuthenticated(true);
            setError(null);
          } else if (event === 'SIGNED_OUT') {
            setIsAuthenticated(false);
            setError(null);
          } else {
            setIsAuthenticated(!!session);
          }
        });

        return () => {
          subscription.unsubscribe();
        };
      } catch (err: any) {
        if (mounted) {
          console.error('Auth error:', err);
          setError(err.message);
          setIsAuthenticated(false);
          
          if (!err.__isAuthError) {
            toast.error('Authentication error. Please try again later.');
          }
        }
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    };

    initAuth();

    return () => {
      mounted = false;
      if (retryTimeout) {
        clearTimeout(retryTimeout);
      }
    };
  }, [retryCount]);

  return { isAuthenticated, isLoading, error };
};
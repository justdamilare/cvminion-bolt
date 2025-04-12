import { getSupabaseClient } from './supabase';
import { toast } from 'react-hot-toast';

const handleAuthError = (error: any) => {
  if (error.name === 'AuthRetryableFetchError') {
    throw error; // Let the hook handle retryable errors
  }
  
  // Map error messages and codes to user-friendly messages
  const errorMessages: Record<string, string> = {
    'invalid_credentials': 'Invalid email or password. Please check your credentials and try again.',
    'user_not_found': 'No account found with this email. Please sign up first.',
    'email_not_confirmed': 'Please check your email and confirm your account before signing in.',
    'invalid_grant': 'Invalid email or password. Please check your credentials and try again.',
    'email_taken': 'An account with this email already exists. Please sign in instead.',
    'weak_password': 'Password is too weak. Please use a stronger password.',
    'refresh_token_not_found': 'Your session has expired. Please sign in again.',
  };

  // Get error code from various possible locations in the error object
  const errorCode = error.code || 
                   error.error_description || 
                   (error.message && error.message.toLowerCase().includes('invalid') ? 'invalid_credentials' : null);

  const message = errorMessages[errorCode] || error.message || 'An unexpected error occurred. Please try again.';
  
  // Add error code to the error object for debugging
  const enhancedError = new Error(message);
  enhancedError.__isAuthError = true;
  enhancedError.code = errorCode;
  
  throw enhancedError;
};

export const signUp = async (email: string, password: string) => {
  const supabase = getSupabaseClient();
  try {
    // Validate password strength
    if (password.length < 8) {
      throw new Error('Password must be at least 8 characters long');
    }

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: window.location.origin,
      }
    });

    if (error) {
      handleAuthError(error);
    }

    toast.success('Account created successfully! You can now sign in.');
    return data;
  } catch (error: any) {
    handleAuthError(error);
  }
};

export const signIn = async (email: string, password: string) => {
  const supabase = getSupabaseClient();
  try {
    // Basic validation
    if (!email || !password) {
      throw new Error('Please enter both email and password');
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      handleAuthError(error);
    }

    return data;
  } catch (error: any) {
    handleAuthError(error);
  }
};

export const signOut = async () => {
  const supabase = getSupabaseClient();
  try {
    // Clear any stored session data first
    localStorage.removeItem('supabase.auth.token');
    
    const { error } = await supabase.auth.signOut();
    if (error) {
      handleAuthError(error);
    }
  } catch (error: any) {
    handleAuthError(error);
  }
};
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { AuthForm } from '../components/auth/AuthForm';
import { signIn } from '../lib/auth';
import { FadeIn } from '../components/ui/FadeIn';

export const SignIn = () => {
  const navigate = useNavigate();

  const handleSignIn = async (email: string, password: string) => {
    await signIn(email, password);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <FadeIn className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center space-x-2 mb-8">
            <Brain className="w-8 h-8 text-primary" />
            <span className="text-white font-bold text-2xl">CVMinion</span>
          </Link>
          <h1 className="text-3xl font-bold text-white mb-2">Welcome back</h1>
          <p className="text-gray-400">Sign in to continue to your dashboard</p>
        </div>

        <AuthForm mode="signin" onSubmit={handleSignIn} />

        <p className="text-center mt-8 text-gray-400">
          Don't have an account?{' '}
          <Link to="/signup" className="text-primary hover:text-primary-dark">
            Sign up
          </Link>
        </p>
      </FadeIn>
    </div>
  );
};
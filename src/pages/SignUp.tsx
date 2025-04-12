import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain } from 'lucide-react';
import { AuthForm } from '../components/auth/AuthForm';
import { signUp } from '../lib/auth';
import { FadeIn } from '../components/ui/FadeIn';

export const SignUp = () => {
  const navigate = useNavigate();

  const handleSignUp = async (email: string, password: string) => {
    await signUp(email, password);
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
          <h1 className="text-3xl font-bold text-white mb-2">Create your account</h1>
          <p className="text-gray-400">Start building your perfect resume today</p>
        </div>

        <AuthForm mode="signup" onSubmit={handleSignUp} />

        <p className="text-center mt-8 text-gray-400">
          Already have an account?{' '}
          <Link to="/signin" className="text-primary hover:text-primary-dark">
            Sign in
          </Link>
        </p>
      </FadeIn>
    </div>
  );
};
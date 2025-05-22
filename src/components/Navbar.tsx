import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, LogOut, User } from 'lucide-react';
import { getSupabaseClient } from '../lib/supabase';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-white dark:bg-dark border-b border-gray-200 dark:border-gray-800 px-6 py-4 transition-colors duration-200">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-primary" />
          <span className="text-gray-900 dark:text-white font-bold text-xl">CVMinion</span>
        </Link>
        
        <div className="flex items-center gap-6">
          <ThemeToggle />
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                Dashboard
              </Link>
              <Link to="/profile" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary inline-flex items-center">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary inline-flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary">
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-primary text-dark px-4 py-2 rounded-lg font-medium hover:bg-primary-dark"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
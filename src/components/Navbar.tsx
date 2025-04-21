import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Brain, LogOut, User } from 'lucide-react';
import { getSupabaseClient } from '../lib/supabase';

export const Navbar = ({ isAuthenticated }: { isAuthenticated: boolean }) => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const supabase = getSupabaseClient();
    await supabase.auth.signOut();
    navigate('/');
  };

  return (
    <nav className="bg-dark px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Brain className="w-8 h-8 text-primary" />
          <span className="text-white font-bold text-xl">CVMinion</span>
        </Link>
        
        <div className="flex items-center gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-white hover:text-primary inline-flex items-center">Dashboard</Link>
              <Link to="/profile" className="text-white hover:text-primary inline-flex items-center">
                <User className="w-4 h-4 mr-2" />
                Profile
              </Link>
              <button
                onClick={handleSignOut}
                className="text-white hover:text-primary inline-flex items-center"
              >
                <LogOut className="w-4 h-4 mr-2" />
                <span>Sign Out</span>
              </button>
            </>
          ) : (
            <>
              <Link to="/signin" className="text-white hover:text-primary">Login</Link>
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

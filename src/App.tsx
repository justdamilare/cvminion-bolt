import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { ThemeProvider } from './contexts/ThemeContext';
import { Landing } from './pages/Landing';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { Dashboard } from './pages/Dashboard';
import { ProfilePage } from './pages/Profile';
import { Navbar } from './components/Navbar';
import { ConnectSupabase } from './components/ui/ConnectSupabase';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated, isLoading, error } = useAuth();

  if (isLoading) {
    return null;
  }

  if (error?.includes('Missing Supabase configuration')) {
    return <ConnectSupabase />;
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-dark transition-colors duration-200">
          <Navbar isAuthenticated={isAuthenticated} />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route 
              path="/signin" 
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignIn />} 
            />
            <Route 
              path="/signup" 
              element={isAuthenticated ? <Navigate to="/dashboard" /> : <SignUp />} 
            />
            <Route 
              path="/dashboard" 
              element={isAuthenticated ? <Dashboard /> : <Navigate to="/signin" />} 
            />
            <Route 
              path="/profile" 
              element={isAuthenticated ? <ProfilePage /> : <Navigate to="/signin" />} 
            />
          </Routes>
          <Toaster position="top-right" />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
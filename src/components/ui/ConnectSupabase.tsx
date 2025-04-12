import React from 'react';
import { Brain } from 'lucide-react';

export const ConnectSupabase = () => {
  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to CVMinion</h1>
        <p className="text-gray-400 mb-8">
          To get started, please connect your Supabase project using the "Connect to Supabase" button in the top right corner.
        </p>
        <div className="bg-dark-light p-4 rounded-lg text-sm text-gray-400">
          <p>This will set up the necessary database tables and authentication for your application.</p>
        </div>
      </div>
    </div>
  );
};
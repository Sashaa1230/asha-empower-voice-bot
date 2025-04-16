
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import Dashboard from '@/components/Dashboard';
import { Briefcase, Info, User } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-asha-purple">
              Asha <span className="text-asha-teal">AI</span>
            </h1>
            <span className="ml-2 px-2 py-0.5 text-xs bg-asha-purple/10 text-asha-purple rounded-full">
              by JobsForHer Foundation
            </span>
          </div>
          <nav className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-asha-purple px-3 py-2 text-sm font-medium flex items-center">
              <Briefcase className="h-4 w-4 mr-1" />
              Jobs
            </a>
            <a href="#" className="text-gray-600 hover:text-asha-purple px-3 py-2 text-sm font-medium flex items-center">
              <Info className="h-4 w-4 mr-1" />
              About
            </a>
            <a href="#" className="text-gray-600 hover:text-asha-purple px-3 py-2 text-sm font-medium flex items-center">
              <User className="h-4 w-4 mr-1" />
              Profile
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 md:px-8">
        <div className="mb-6">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to Asha AI</h2>
          <p className="text-gray-600 mt-1">Your voice-enabled career assistant for women empowerment</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-[70vh]">
          <div className="h-full">
            <ChatInterface />
          </div>
          <div className="h-full">
            <Dashboard />
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t py-6 px-6 mt-10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-sm text-gray-600">
            © 2025 JobsForHer Foundation. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Empowering women with career opportunities and guidance.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

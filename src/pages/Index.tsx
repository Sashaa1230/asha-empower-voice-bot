
import React, { useState } from 'react';
import { 
  MessageSquare, 
  CalendarIcon, 
  Briefcase, 
  Users, 
  ArrowRight
} from 'lucide-react';
import ChatInterface from '@/components/ChatInterface';
import Dashboard from '@/components/Dashboard';
import MainSidebar from '@/components/MainSidebar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Index = () => {
  const [activePage, setActivePage] = useState('chat');

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 hidden md:block flex-shrink-0">
        <MainSidebar activePage={activePage} onNavigate={setActivePage} />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b py-4 px-6">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold text-asha-purple">
              <span className="text-black">Chat with</span> ASHA
            </h1>
            <Button variant="outline" className="text-asha-purple border-asha-purple hover:bg-asha-purple/10">
              New Conversation
            </Button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-auto">
          <div className="max-w-7xl mx-auto p-4 md:p-6 flex h-full">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full">
              {/* Chat section - takes 2 columns on large screens */}
              <div className="lg:col-span-2 h-[calc(100vh-160px)]">
                <ChatInterface />
              </div>
              
              {/* Resources section - takes 1 column */}
              <div className="h-[calc(100vh-160px)] overflow-auto">
                <Card className="mb-6">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl text-gray-800">Women Career Resources</CardTitle>
                    <CardDescription>
                      JobsForHer Foundation initiatives to empower your career
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-100 rounded-full p-2">
                          <Briefcase className="h-6 w-6 text-blue-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">Women-Focused Jobs</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Discover career opportunities specifically designed for women
                        returning to work, seeking flexibility, or aiming for leadership roles.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-asha-purple flex items-center">
                        Explore Jobs
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-green-100 rounded-full p-2">
                          <CalendarIcon className="h-6 w-6 text-green-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">Empowerment Events</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Join networking sessions, skill-building workshops, and leadership
                        webinars tailored to women's professional development.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-asha-purple flex items-center">
                        Browse Events
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-100 rounded-full p-2">
                          <Users className="h-6 w-6 text-purple-600" />
                        </div>
                        <h3 className="font-medium text-gray-800">Mentorship for Women</h3>
                      </div>
                      <p className="text-sm text-gray-600">
                        Connect with industry leaders who can guide your career journey
                        with personalized advice and support.
                      </p>
                      <Button variant="link" className="p-0 h-auto text-asha-purple flex items-center">
                        Find Mentors
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Dashboard />
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-white border-t py-4 px-6">
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
    </div>
  );
};

export default Index;

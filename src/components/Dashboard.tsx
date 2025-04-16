
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ScrollArea } from '@/components/ui/scroll-area';
import { jobListings, dailyChallenges } from '@/data/mock-data';
import JobCard from './JobCard';
import DailyChallenge from './DailyChallenge';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState('challenges');
  
  return (
    <div className="h-full flex flex-col">
      <Tabs 
        defaultValue="challenges" 
        className="w-full h-full"
        onValueChange={setActiveTab}
      >
        <div className="border-b sticky top-0 bg-white z-10">
          <TabsList className="w-full h-12 bg-transparent">
            <TabsTrigger
              value="challenges"
              className="flex-1 data-[state=active]:bg-asha-purple data-[state=active]:text-white"
            >
              Daily Challenges
            </TabsTrigger>
            <TabsTrigger
              value="jobs"
              className="flex-1 data-[state=active]:bg-asha-purple data-[state=active]:text-white"
            >
              Job Listings
            </TabsTrigger>
          </TabsList>
        </div>
        
        <TabsContent value="challenges" className="flex-1 m-0 overflow-hidden">
          <ScrollArea className="h-full py-4">
            <div className="px-4 space-y-4">
              <h3 className="text-lg font-medium">Today's Challenges</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Complete these challenges to build your skills and earn points.
              </p>
              <div className="grid gap-4">
                {dailyChallenges.map((challenge) => (
                  <DailyChallenge key={challenge.id} challenge={challenge} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
        
        <TabsContent value="jobs" className="flex-1 m-0 overflow-hidden">
          <ScrollArea className="h-full py-4">
            <div className="px-4 space-y-4">
              <h3 className="text-lg font-medium">Latest Job Openings</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Explore these job opportunities curated for you.
              </p>
              <div className="grid gap-4">
                {jobListings.map((job) => (
                  <JobCard key={job.id} job={job} />
                ))}
              </div>
            </div>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Dashboard;

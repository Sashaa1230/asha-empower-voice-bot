
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import { JobListing } from '@/data/mock-data';
import { cn } from '@/lib/utils';

interface JobCardProps {
  job: JobListing;
  className?: string;
}

const JobCard: React.FC<JobCardProps> = ({ job, className }) => {
  return (
    <Card className={cn("shadow-sm hover:shadow-md transition-shadow duration-300", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-base font-semibold">{job.title}</CardTitle>
          <Badge className="bg-asha-purple text-white hover:bg-asha-purple/90">
            {job.type}
          </Badge>
        </div>
        <div className="text-sm font-medium mt-1">{job.company}</div>
        <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
          <div className="flex items-center">
            <MapPin className="h-3.5 w-3.5 mr-1" />
            {job.location}
          </div>
          <div className="flex items-center">
            <Clock className="h-3.5 w-3.5 mr-1" />
            {job.postedDate}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex flex-wrap gap-1">
          {job.skills.map((skill, index) => (
            <Badge key={index} variant="outline" className="font-normal text-xs">
              {skill}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button className="w-full bg-asha-purple hover:bg-asha-purple/90 text-white">
          <Briefcase className="h-4 w-4 mr-2" />
          View Job
        </Button>
      </CardFooter>
    </Card>
  );
};

export default JobCard;


import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Award, Clock, Trophy } from 'lucide-react';
import { Challenge } from '@/data/mock-data';
import { cn } from '@/lib/utils';

interface DailyChallengeProps {
  challenge: Challenge;
  className?: string;
}

const DailyChallenge: React.FC<DailyChallengeProps> = ({ challenge, className }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'easy': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <Card className={cn("overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300", className)}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div>
            <Badge 
              variant="outline" 
              className={cn(
                "mb-2 font-normal capitalize",
                getDifficultyColor(challenge.difficulty)
              )}
            >
              {challenge.difficulty}
            </Badge>
            <CardTitle className="text-base font-semibold">{challenge.title}</CardTitle>
          </div>
          <div className="flex items-center text-xs text-muted-foreground bg-muted rounded-full px-2 py-1">
            <Clock className="h-3 w-3 mr-1" />
            {challenge.estimatedTime}
          </div>
        </div>
        <CardDescription className="text-sm mt-1">
          {challenge.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="flex items-center text-asha-purple">
          {challenge.type === 'quiz' ? (
            <Award className="h-4 w-4 mr-1" />
          ) : (
            <Trophy className="h-4 w-4 mr-1" />
          )}
          <span className="text-sm font-medium capitalize">{challenge.type}</span>
          <span className="ml-auto flex items-center text-sm">
            {challenge.points} pts
          </span>
        </div>
      </CardContent>
      <CardFooter className="pt-2">
        <Button className="w-full bg-white text-asha-purple hover:bg-asha-purple hover:text-white border border-asha-purple">
          Start {challenge.type === 'quiz' ? 'Quiz' : 'Challenge'}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DailyChallenge;

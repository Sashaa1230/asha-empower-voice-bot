
export type ChatMessage = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
};

export type JobListing = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  postedDate: string;
  skills: string[];
};

export type Challenge = {
  id: string;
  title: string;
  description: string;
  type: 'quiz' | 'challenge';
  difficulty: 'easy' | 'medium' | 'hard';
  estimatedTime: string;
  points: number;
};

export const initialMessages: ChatMessage[] = [
  {
    id: '1',
    content: 'Hello! I\'m Asha, your career assistant from JobsForHer Foundation. How can I help you today?',
    role: 'assistant',
    timestamp: new Date(),
  },
];

export const jobListings: JobListing[] = [
  {
    id: '1',
    title: 'Frontend Developer',
    company: 'TechSphere Solutions',
    location: 'Bangalore, India',
    type: 'Full-time',
    postedDate: '2 days ago',
    skills: ['React', 'JavaScript', 'HTML/CSS'],
  },
  {
    id: '2',
    title: 'Product Manager',
    company: 'InnovateCorp',
    location: 'Remote',
    type: 'Full-time',
    postedDate: '1 week ago',
    skills: ['Product Strategy', 'Agile', 'User Research'],
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'DataInsights',
    location: 'Hyderabad, India',
    type: 'Full-time',
    postedDate: '3 days ago',
    skills: ['Python', 'Machine Learning', 'Data Analysis'],
  },
  {
    id: '4',
    title: 'HR Manager',
    company: 'Global Talent Inc',
    location: 'Mumbai, India',
    type: 'Full-time',
    postedDate: '5 days ago',
    skills: ['Recruitment', 'Employee Relations', 'HR Strategy'],
  },
  {
    id: '5',
    title: 'Content Writer',
    company: 'CreativeMinds Media',
    location: 'Remote',
    type: 'Contract',
    postedDate: '1 day ago',
    skills: ['Content Creation', 'SEO', 'Editing'],
  },
];

export const dailyChallenges: Challenge[] = [
  {
    id: '1',
    title: 'Which Leadership Style Fits You Best?',
    description: 'Take this 2-minute quiz to discover your natural leadership tendencies and how to leverage them in your career.',
    type: 'quiz',
    difficulty: 'easy',
    estimatedTime: '2 min',
    points: 20,
  },
  {
    id: '2',
    title: 'Craft A Killer Resume Headline',
    description: 'Learn the art of writing attention-grabbing resume headlines with this quick challenge.',
    type: 'challenge',
    difficulty: 'medium',
    estimatedTime: '5 min',
    points: 30,
  },
  {
    id: '3',
    title: 'Master The Salary Negotiation',
    description: 'Practice responses to common salary questions and learn negotiation techniques.',
    type: 'challenge',
    difficulty: 'hard',
    estimatedTime: '10 min',
    points: 50,
  },
];

export const sampleResponses: Record<string, string> = {
  greeting: "Hello! I'm Asha, your career assistant from JobsForHer Foundation. How can I help you today?",
  jobSearch: "I'd be happy to help you find job opportunities. Could you tell me what role you're looking for and your preferred location?",
  resume: "Crafting a powerful resume is crucial! Here are some key tips: 1) Highlight your achievements with quantifiable results, 2) Tailor your resume for each application, 3) Use strong action verbs, 4) Keep it concise and error-free.",
  interview: "Preparing for interviews? Remember to research the company thoroughly, practice your answers to common questions, prepare thoughtful questions to ask the interviewer, and follow up with a thank you note afterward.",
  mentorship: "Mentorship can accelerate your career growth! JobsForHer offers mentorship programs connecting women with experienced professionals across industries. Would you like me to share more details about our mentorship opportunities?",
  events: "JobsForHer regularly hosts career events, workshops, and networking opportunities. Our upcoming events include a Leadership Summit next month and a series of technical workshops starting next week.",
  fallback: "I'm still learning and didn't quite catch that. Could you rephrase your question or choose a topic like job search, resume building, interview tips, or mentorship programs?"
};

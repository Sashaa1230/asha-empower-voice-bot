export type ChatMessage = {
  id: string;
  content: string;
  role: 'user' | 'assistant';
  timestamp: Date;
  suggestions?: string[];
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
    content: "Hello! I'm ASHA, the AI assistant for JobsForHer Foundation. I'm here to help empower your career journey with:\n\n• Discovering job listings and opportunities for women\n• Finding community events, sessions and workshops\n• Connecting with mentorship programs\n• Accessing women empowerment resources and initiatives\n• Answering your questions about career development\n\nHow can I assist you today?",
    role: 'assistant',
    timestamp: new Date(Date.now() - 60000),
    suggestions: ['Job Listings', 'Community Events', 'Mentorship Programs', 'Women Empowerment']
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

export const sampleResponses = {
  greeting: "Hello! It's great to connect with you. I'm ASHA, your AI career assistant from JobsForHer Foundation. How can I help with your career journey today?",
  jobSearch: "I can help you find great job opportunities. What kind of roles are you looking for? I can filter by location, remote options, industry, or part-time/full-time preferences.",
  resume: "I can provide guidance on optimizing your resume. Would you like tips on highlighting your skills, formatting advice, or tailored feedback for specific industries?",
  interview: "Preparing for interviews is crucial. I can share common interview questions, industry-specific preparation tips, or strategies to address career gaps confidently.",
  mentorship: "Mentorship can accelerate your career growth. I can help you find mentors in your field, prepare for mentorship conversations, or suggest mentorship programs through JobsForHer.",
  events: "There are several upcoming career events for women. Would you like to explore networking events, skill-building workshops, or industry-specific conferences?",
  fallback: "I understand you're asking about something important. To help you better, could you tell me more about what specific career information you're looking for?"
};

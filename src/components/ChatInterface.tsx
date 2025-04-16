
import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VoiceRecognition from './VoiceRecognition';
import ChatMessage from './ChatMessage';
import { ChatMessage as ChatMessageType, initialMessages, sampleResponses } from '@/data/mock-data';
import { useToast } from '@/hooks/use-toast';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const simulateResponse = (userMessage: string) => {
    setIsProcessing(true);
    
    // Simple keyword matching for demo purposes
    const lowerMessage = userMessage.toLowerCase();
    let responseContent = sampleResponses.fallback;
    
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      responseContent = sampleResponses.greeting;
    } else if (lowerMessage.includes('job') || lowerMessage.includes('work') || lowerMessage.includes('career')) {
      responseContent = sampleResponses.jobSearch;
    } else if (lowerMessage.includes('resume') || lowerMessage.includes('cv')) {
      responseContent = sampleResponses.resume;
    } else if (lowerMessage.includes('interview')) {
      responseContent = sampleResponses.interview;
    } else if (lowerMessage.includes('mentor') || lowerMessage.includes('guide')) {
      responseContent = sampleResponses.mentorship;
    } else if (lowerMessage.includes('event') || lowerMessage.includes('workshop')) {
      responseContent = sampleResponses.events;
    }

    // Simulate a delay for realism
    setTimeout(() => {
      const botResponse: ChatMessageType = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsProcessing(false);
    }, 1000);
  };

  const handleSendMessage = () => {
    if (input.trim() === '') return;
    
    const userMessage: ChatMessageType = {
      id: Date.now().toString(),
      content: input,
      role: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    simulateResponse(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleVoiceInput = (transcript: string) => {
    if (transcript.trim()) {
      setInput(transcript);
      toast({
        title: "Voice detected",
        description: transcript,
        duration: 3000
      });
      
      // Focus the input to show the transcribed text
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-md">
      <CardHeader className="border-b pb-3 pt-4">
        <CardTitle className="text-lg flex items-center gap-2">
          <span className="text-asha-purple">Asha</span>
          <span className="text-xs bg-asha-purple/10 text-asha-purple px-2 py-0.5 rounded-full">AI Assistant</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4">
        <div className="flex flex-col">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
          {isProcessing && (
            <div className="flex items-start mb-4">
              <div className="h-8 w-8 mr-2 flex items-center justify-center">
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-asha-purple text-white">A</AvatarFallback>
                </Avatar>
              </div>
              <div className="py-2 px-3 bg-white rounded-lg border border-gray-200 text-gray-800 rounded-tl-none">
                <div className="wave-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <div className="border-t p-3 bg-white">
        <div className="flex items-center gap-2">
          <Input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-1"
            disabled={isProcessing}
          />
          <VoiceRecognition 
            onTranscript={handleVoiceInput} 
            className="flex-shrink-0"
          />
          <Button
            onClick={handleSendMessage}
            disabled={input.trim() === '' || isProcessing}
            className="bg-asha-purple hover:bg-asha-purple/90"
            size="icon"
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default ChatInterface;

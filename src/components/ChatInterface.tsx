
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import ChatMessage from './ChatMessage';
import { ChatMessage as ChatMessageType, initialMessages, sampleResponses } from '@/data/mock-data';
import { useToast } from '@/hooks/use-toast';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessageType[]>(initialMessages);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();
  const recognitionRef = useRef<any>(null);

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
      const suggestions = ['Tell me more', 'How does it work?', 'Can you explain?', 'What are the benefits?'];
      
      const botResponse: ChatMessageType = {
        id: Date.now().toString(),
        content: responseContent,
        role: 'assistant',
        timestamp: new Date(),
        suggestions: suggestions
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

  const startListening = () => {
    if (!('webkitSpeechRecognition' in window) && !('SpeechRecognition' in window)) {
      toast({
        title: "Speech Recognition Not Supported",
        description: "Your browser doesn't support speech recognition.",
        variant: "destructive"
      });
      return;
    }

    // Initialize speech recognition
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognitionRef.current = new SpeechRecognition();
    recognitionRef.current.continuous = false;
    recognitionRef.current.interimResults = false;
    recognitionRef.current.lang = 'en-US';

    recognitionRef.current.onstart = () => {
      setIsListening(true);
      toast({
        title: "Listening...",
        description: "Speak now, I'm listening.",
        duration: 3000
      });
    };

    recognitionRef.current.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
      
      // Focus the input to show the transcribed text
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    };

    recognitionRef.current.onerror = (event: any) => {
      console.error("Speech recognition error", event.error);
      setIsListening(false);
      toast({
        title: "Error",
        description: `Speech recognition error: ${event.error}`,
        variant: "destructive"
      });
    };

    recognitionRef.current.onend = () => {
      setIsListening(false);
    };

    recognitionRef.current.start();
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  return (
    <Card className="h-full flex flex-col overflow-hidden shadow-md">
      <CardContent className="flex-1 overflow-y-auto p-4 pt-6">
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
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-75"></div>
                  <div className="w-2 h-2 rounded-full bg-gray-400 animate-pulse delay-150"></div>
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
          <Button
            onClick={toggleListening}
            variant="outline"
            className={isListening ? "bg-red-50 text-red-500 border-red-200" : ""}
            size="icon"
            type="button"
          >
            {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
          </Button>
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

export default ChatInterface;

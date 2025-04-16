
import React from 'react';
import { cn } from '@/lib/utils';
import { ChatMessage as ChatMessageType } from '@/data/mock-data';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ChatMessageProps {
  message: ChatMessageType;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';
  
  return (
    <div
      className={cn(
        "flex w-full mb-4",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "flex max-w-[80%] md:max-w-[70%]",
          isUser ? "flex-row-reverse" : "flex-row"
        )}
      >
        {!isUser && (
          <Avatar className="h-8 w-8 mr-2">
            <AvatarFallback className="bg-asha-purple text-white">A</AvatarFallback>
            <AvatarImage src="/placeholder.svg" alt="Asha" />
          </Avatar>
        )}
        
        <div
          className={cn(
            "py-2 px-3 rounded-lg",
            isUser 
              ? "bg-asha-purple text-white rounded-tr-none" 
              : "bg-white text-gray-800 border border-gray-200 rounded-tl-none"
          )}
        >
          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
          
          {/* Suggestion buttons - only show for assistant messages */}
          {!isUser && message.suggestions && message.suggestions.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-3">
              {message.suggestions.map((suggestion, index) => (
                <Button 
                  key={index} 
                  variant="outline" 
                  size="sm"
                  className="text-xs bg-white hover:bg-gray-100 text-asha-purple border border-asha-purple/30"
                >
                  {suggestion}
                </Button>
              ))}
            </div>
          )}
          
          <div 
            className={cn(
              "text-xs mt-1",
              isUser ? "text-asha-light/80" : "text-gray-500"
            )}
          >
            {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
          </div>
        </div>
        
        {isUser && (
          <Avatar className="h-8 w-8 ml-2">
            <AvatarFallback className="bg-gray-300">U</AvatarFallback>
            <AvatarImage src="/placeholder.svg" alt="User" />
          </Avatar>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;

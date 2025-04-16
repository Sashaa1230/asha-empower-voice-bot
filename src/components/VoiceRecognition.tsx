
import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface VoiceRecognitionProps {
  onTranscript: (text: string) => void;
  className?: string;
}

const VoiceRecognition: React.FC<VoiceRecognitionProps> = ({ 
  onTranscript, 
  className 
}) => {
  const [isListening, setIsListening] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    // Check if browser supports SpeechRecognition
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const transcript = Array.from(event.results)
          .map((result: any) => result[0])
          .map((result) => result.transcript)
          .join('');
        
        if (event.results[0].isFinal) {
          onTranscript(transcript);
          stopListening();
        }
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error', event.error);
        setErrorMessage(`Error: ${event.error}`);
        stopListening();
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };

    } else {
      setErrorMessage('Speech recognition is not supported in this browser.');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.onresult = null;
        recognitionRef.current.onend = null;
        recognitionRef.current.onerror = null;
        stopListening();
      }
    };
  }, [onTranscript]);

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const startListening = () => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        setErrorMessage(null);
      } catch (error) {
        console.error('Speech recognition error', error);
        setErrorMessage('Error starting speech recognition.');
      }
    }
  };

  const stopListening = () => {
    if (recognitionRef.current && isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  return (
    <div className={cn("flex flex-col items-center", className)}>
      <Button 
        variant={isListening ? "destructive" : "outline"}
        size="icon" 
        onClick={toggleListening}
        disabled={!!errorMessage && !isListening}
        className={cn(
          "h-10 w-10 rounded-full transition-all duration-200",
          isListening ? "bg-red-500 hover:bg-red-600 animate-pulse" : ""
        )}
        aria-label={isListening ? "Stop listening" : "Start voice input"}
      >
        {isListening ? <MicOff className="h-5 w-5" /> : <Mic className="h-5 w-5" />}
      </Button>
      {isListening && (
        <div className="mt-2 text-xs text-asha-purple">
          <div className="wave-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      )}
      {errorMessage && <p className="text-xs text-destructive mt-1">{errorMessage}</p>}
    </div>
  );
};

export default VoiceRecognition;

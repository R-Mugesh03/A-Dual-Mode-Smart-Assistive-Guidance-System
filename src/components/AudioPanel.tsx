import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mic, Volume2, Bell, MessageSquare } from "lucide-react";
import { useState, useEffect } from "react";

export const AudioPanel = () => {
  const [captions, setCaptions] = useState<string[]>([]);
  const [soundLevel, setSoundLevel] = useState(0);
  
  useEffect(() => {
    // Simulate live captions
    const captionTexts = [
      "Hello, how are you?",
      "The door is opening",
      "Phone ringing nearby",
      "Someone is approaching"
    ];
    
    const interval = setInterval(() => {
      setCaptions(prev => [...captionTexts.slice(-3)]);
      setSoundLevel(Math.random() * 100);
    }, 4000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card border-secondary/20">
      <div className="flex items-center gap-3 mb-4">
        <Ear className="w-6 h-6 text-secondary" />
        <h2 className="text-xl font-bold">Audio Assistance</h2>
      </div>
      
      <div className="space-y-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">Sound Detection</span>
            </div>
            <Badge className="bg-success text-success-foreground">Listening</Badge>
          </div>
          
          <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
            <div 
              className="h-full bg-gradient-secondary transition-all duration-300"
              style={{ width: `${soundLevel}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">Ambient noise: {Math.round(soundLevel)}dB</p>
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <MessageSquare className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Live Captions</span>
          </div>
          <div className="space-y-2 max-h-32 overflow-y-auto">
            {captions.map((caption, i) => (
              <div key={i} className="p-2 bg-background/50 rounded text-sm">
                {caption}
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Bell className="w-5 h-5 text-warning" />
            <span className="text-sm font-medium">Alert System</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Badge variant="outline" className="justify-center">Doorbell</Badge>
            <Badge variant="outline" className="justify-center">Alarm</Badge>
            <Badge variant="outline" className="justify-center">Phone</Badge>
            <Badge variant="outline" className="justify-center">Timer</Badge>
          </div>
        </div>
      </div>
    </Card>
  );
};

const Ear = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M6 8.5C6 5.46243 8.46243 3 11.5 3C14.5376 3 17 5.46243 17 8.5V10C17 11.6569 15.6569 13 14 13H13C12.4477 13 12 13.4477 12 14V16C12 17.1046 11.1046 18 10 18C8.89543 18 8 17.1046 8 16V14" />
  </svg>
);

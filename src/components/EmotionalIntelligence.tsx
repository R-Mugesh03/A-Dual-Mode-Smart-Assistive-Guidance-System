import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Brain, Heart, Zap, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

const emotions = ["Calm", "Focused", "Happy", "Neutral", "Attentive"];
const contexts = ["Indoor", "Outdoor", "Crowded", "Quiet", "Moving"];

export const EmotionalIntelligence = () => {
  const [emotion, setEmotion] = useState(emotions[0]);
  const [context, setContext] = useState(contexts[0]);
  const [confidence, setConfidence] = useState(95);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setEmotion(emotions[Math.floor(Math.random() * emotions.length)]);
      setContext(contexts[Math.floor(Math.random() * contexts.length)]);
      setConfidence(85 + Math.floor(Math.random() * 15));
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card border-accent/20">
      <div className="flex items-center gap-3 mb-4">
        <Brain className="w-6 h-6 text-accent" />
        <h2 className="text-xl font-bold">Emotional & Contextual Intelligence</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Heart className="w-5 h-5 text-accent" />
            <span className="text-sm font-medium">Emotional State</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge className="bg-accent text-accent-foreground">{emotion}</Badge>
              <span className="text-xs text-muted-foreground">{confidence}% confident</span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div 
                className="h-full bg-gradient-accent rounded-full transition-all duration-500"
                style={{ width: `${confidence}%` }}
              />
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Context Awareness</span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Badge variant="outline">{context}</Badge>
              <span className="text-xs text-muted-foreground">Environment</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Adapting assistance based on detected environment
            </p>
          </div>
        </div>
        
        <div className="col-span-1 md:col-span-2 p-4 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2 mb-3">
            <TrendingUp className="w-5 h-5 text-secondary" />
            <span className="text-sm font-medium">Adaptive Learning</span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">847</div>
              <div className="text-xs text-muted-foreground">Interactions</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-secondary">94%</div>
              <div className="text-xs text-muted-foreground">Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-accent">32</div>
              <div className="text-xs text-muted-foreground">Preferences</div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

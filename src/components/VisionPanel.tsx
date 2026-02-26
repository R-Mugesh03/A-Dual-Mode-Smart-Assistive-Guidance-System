import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Scan, Type, Navigation } from "lucide-react";
import { useState, useEffect } from "react";

export const VisionPanel = () => {
  const [detectedObjects, setDetectedObjects] = useState<string[]>([]);
  
  useEffect(() => {
    // Simulate object detection
    const objects = ["Person ahead", "Chair 2m left", "Door 5m forward", "Table 3m right"];
    const interval = setInterval(() => {
      setDetectedObjects(objects.sort(() => Math.random() - 0.5).slice(0, 3));
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="p-6 bg-card border-primary/20">
      <div className="flex items-center gap-3 mb-4">
        <Camera className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold">Vision Assistance</h2>
      </div>
      
      <div className="space-y-4">
        <div className="aspect-video bg-muted rounded-lg flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
          <Scan className="w-16 h-16 text-primary/50 animate-spin" style={{ animationDuration: '3s' }} />
          <div className="absolute top-4 left-4">
            <Badge className="bg-success text-success-foreground">Camera Active</Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-2">
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Scan className="w-5 h-5 text-primary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Object Detection</p>
              <div className="flex flex-wrap gap-2 mt-1">
                {detectedObjects.map((obj, i) => (
                  <Badge key={i} variant="outline" className="text-xs">{obj}</Badge>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Type className="w-5 h-5 text-secondary" />
            <div className="flex-1">
              <p className="text-sm font-medium">Text Recognition</p>
              <p className="text-xs text-muted-foreground mt-1">Ready to read text</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-lg">
            <Navigation className="w-5 h-5 text-accent" />
            <div className="flex-1">
              <p className="text-sm font-medium">Navigation</p>
              <p className="text-xs text-muted-foreground mt-1">Clear path ahead</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

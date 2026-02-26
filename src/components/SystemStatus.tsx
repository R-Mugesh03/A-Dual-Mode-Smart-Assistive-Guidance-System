import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Eye, Ear, Brain, Wifi } from "lucide-react";

export const SystemStatus = () => {
  return (
    <Card className="p-6 bg-card border-primary/20 shadow-glow">
      <h2 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
        System Status
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-primary/20">
            <Eye className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Vision Mode</span>
          <Badge className="bg-success text-success-foreground">Active</Badge>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-secondary/20">
            <Ear className="w-6 h-6 text-secondary" />
          </div>
          <span className="text-sm font-medium">Audio Mode</span>
          <Badge className="bg-success text-success-foreground">Active</Badge>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-accent/20">
            <Brain className="w-6 h-6 text-accent" />
          </div>
          <span className="text-sm font-medium">AI Engine</span>
          <Badge className="bg-success text-success-foreground">Online</Badge>
        </div>
        
        <div className="flex flex-col items-center gap-2">
          <div className="p-3 rounded-full bg-primary/20">
            <Wifi className="w-6 h-6 text-primary" />
          </div>
          <span className="text-sm font-medium">Connection</span>
          <Badge className="bg-success text-success-foreground">Strong</Badge>
        </div>
      </div>
    </Card>
  );
};

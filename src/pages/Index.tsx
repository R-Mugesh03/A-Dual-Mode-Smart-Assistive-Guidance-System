import { SystemStatus } from "@/components/SystemStatus";
import { VisionPanel } from "@/components/VisionPanel";
import { AudioPanel } from "@/components/AudioPanel";
import { EmotionalIntelligence } from "@/components/EmotionalIntelligence";
import { ControlPanel } from "@/components/ControlPanel";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-3 bg-gradient-primary bg-clip-text text-transparent">
            SmartSense AI
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dual-Mode Vision & Audio Guidance System with Emotional Intelligence
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Advanced assistive technology for enhanced independence
          </p>
        </header>
        
        <SystemStatus />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <VisionPanel />
          <AudioPanel />
        </div>
        
        <EmotionalIntelligence />
        
        <ControlPanel />
        
        <footer className="text-center text-sm text-muted-foreground pt-8">
          <p>Hardware Implementation Demo • Powered by AI & Computer Vision</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Settings, Volume2, Sun, Vibrate } from "lucide-react";
import { useState } from "react";

export const ControlPanel = () => {
  const [volume, setVolume] = useState([75]);
  const [brightness, setBrightness] = useState([80]);
  const [haptics, setHaptics] = useState(true);
  const [voice, setVoice] = useState(true);

  return (
    <Card className="p-6 bg-card border-border">
      <div className="flex items-center gap-3 mb-6">
        <Settings className="w-6 h-6 text-primary" />
        <h2 className="text-xl font-bold">Controls & Settings</h2>
      </div>
      
      <div className="space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Volume2 className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Audio Volume</span>
            </div>
            <span className="text-sm text-muted-foreground">{volume[0]}%</span>
          </div>
          <Slider 
            value={volume} 
            onValueChange={setVolume}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sun className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm font-medium">Display Brightness</span>
            </div>
            <span className="text-sm text-muted-foreground">{brightness[0]}%</span>
          </div>
          <Slider 
            value={brightness} 
            onValueChange={setBrightness}
            max={100}
            step={1}
            className="w-full"
          />
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Vibrate className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Haptic Feedback</span>
          </div>
          <Switch checked={haptics} onCheckedChange={setHaptics} />
        </div>
        
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <span className="text-sm font-medium">Voice Guidance</span>
          </div>
          <Switch checked={voice} onCheckedChange={setVoice} />
        </div>
        
        <div className="grid grid-cols-2 gap-3 pt-4">
          <Button variant="outline" className="w-full">
            Calibrate
          </Button>
          <Button className="w-full bg-gradient-primary">
            Save Settings
          </Button>
        </div>
      </div>
    </Card>
  );
};

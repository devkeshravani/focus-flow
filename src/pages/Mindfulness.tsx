import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, Coffee, Music, Lightbulb } from "lucide-react";

const Mindfulness = () => {
  const [isBreathing, setIsBreathing] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Mindfulness & Breaks</h1>
        <p className="text-muted-foreground">Tools to help you recharge and refocus</p>
      </div>

      {/* Breathing Exercise */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className={`w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center ${isBreathing ? 'animate-pulse' : ''}`}>
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-2">Breathing Exercise</h2>
            <p className="text-muted-foreground mb-4">Take 2 minutes to center yourself</p>
          </div>
          <Button 
            size="lg" 
            onClick={() => setIsBreathing(!isBreathing)}
            className="gap-2"
          >
            {isBreathing ? "Stop Exercise" : "Start Breathing"}
          </Button>
          {isBreathing && (
            <div className="text-lg font-medium animate-pulse">
              Breathe in... Hold... Breathe out...
            </div>
          )}
        </div>
      </Card>

      {/* Quick Break Tools */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-warning/10">
              <Coffee className="w-8 h-8 text-warning" />
            </div>
            <h3 className="font-semibold text-lg">5-Minute Break</h3>
            <p className="text-sm text-muted-foreground">Quick stretch and hydration reminder</p>
            <Button variant="outline" className="w-full">Start Break</Button>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-accent/10">
              <Music className="w-8 h-8 text-accent" />
            </div>
            <h3 className="font-semibold text-lg">Focus Sounds</h3>
            <p className="text-sm text-muted-foreground">Ambient music for concentration</p>
            <Button variant="outline" className="w-full">Play Sounds</Button>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Lightbulb className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-semibold text-lg">Study Tips</h3>
            <p className="text-sm text-muted-foreground">Evidence-based learning strategies</p>
            <Button variant="outline" className="w-full">Read Tips</Button>
          </div>
        </Card>
      </div>

      {/* Study Tips */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Today's Study Tip</h2>
        <div className="space-y-4">
          <p className="text-lg">🧠 <strong>The Pomodoro Technique:</strong></p>
          <p className="text-muted-foreground">
            Work in focused 25-minute intervals, followed by 5-minute breaks. After four cycles, take a longer 15-30 minute break. 
            This helps maintain high concentration while preventing burnout.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm">Time Management</span>
            <span className="px-3 py-1 rounded-full bg-success/10 text-success text-sm">Proven Method</span>
            <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-sm">Focus Boost</span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Mindfulness;

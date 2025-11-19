import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Play, Pause, Thermometer, Volume2, User } from "lucide-react";

const Dashboard = () => {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [sessionTime, setSessionTime] = useState(0);
  const [focusStatus, setFocusStatus] = useState<"focused" | "absent" | "stressed">("focused");
  const [noiseLevel, setNoiseLevel] = useState(35);
  const [temperature, setTemperature] = useState(22);
  const [presence, setPresence] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSessionActive) {
      interval = setInterval(() => {
        setSessionTime((prev) => prev + 1);
        // Simulate sensor data changes
        setNoiseLevel(Math.floor(Math.random() * 100));
        setTemperature(20 + Math.random() * 8);
        setPresence(Math.random() > 0.1);
        
        // Determine focus status
        if (noiseLevel > 70) {
          setFocusStatus("stressed");
        } else if (!presence) {
          setFocusStatus("absent");
        } else {
          setFocusStatus("focused");
        }
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isSessionActive, noiseLevel, presence]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const getStatusColor = () => {
    switch (focusStatus) {
      case "focused": return "bg-success";
      case "stressed": return "bg-warning";
      case "absent": return "bg-destructive";
    }
  };

  const getStatusText = () => {
    switch (focusStatus) {
      case "focused": return "You are focused! 🎯";
      case "stressed": return "High noise detected 😰";
      case "absent": return "You seem absent 🤔";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      {/* Status Banner */}
      <Card className={`${getStatusColor()} text-white p-8 shadow-lg`}>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-2">{getStatusText()}</h2>
          <p className="text-lg opacity-90">Session time: {formatTime(sessionTime)}</p>
        </div>
      </Card>

      {/* Session Controls */}
      <div className="flex justify-center gap-4">
        <Button
          size="lg"
          onClick={() => {
            setIsSessionActive(!isSessionActive);
            if (!isSessionActive) setSessionTime(0);
          }}
          className="gap-2"
        >
          {isSessionActive ? (
            <>
              <Pause className="w-5 h-5" />
              End Session
            </>
          ) : (
            <>
              <Play className="w-5 h-5" />
              Start Session
            </>
          )}
        </Button>
      </div>

      {/* Live Sensor Readings */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-primary/10">
              <User className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Presence</h3>
              <p className="text-sm text-muted-foreground">Seat occupancy</p>
            </div>
          </div>
          <div className="text-3xl font-bold">
            {presence ? (
              <span className="text-success">Present ✓</span>
            ) : (
              <span className="text-destructive">Absent</span>
            )}
          </div>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-warning/10">
              <Volume2 className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Noise Level</h3>
              <p className="text-sm text-muted-foreground">Sound intensity</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold">{noiseLevel} dB</div>
            <Progress value={noiseLevel} className="h-2" />
          </div>
        </Card>

        <Card className="p-6 shadow-md hover:shadow-lg transition-shadow">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-full bg-accent/10">
              <Thermometer className="w-6 h-6 text-accent" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Temperature</h3>
              <p className="text-sm text-muted-foreground">Room climate</p>
            </div>
          </div>
          <div className="text-3xl font-bold">{temperature.toFixed(1)}°C</div>
        </Card>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Current Streak</h3>
          <p className="text-3xl font-bold text-primary">5 days</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-success/5 to-accent/5">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Today's Focus</h3>
          <p className="text-3xl font-bold text-success">87%</p>
        </Card>
        <Card className="p-6 bg-gradient-to-br from-warning/5 to-destructive/5">
          <h3 className="text-sm font-medium text-muted-foreground mb-2">Distractions</h3>
          <p className="text-3xl font-bold text-warning">3</p>
        </Card>
      </div>

      {/* Motivational Banner */}
      <Card className="p-6 bg-gradient-to-r from-primary to-accent text-white shadow-lg">
        <h3 className="text-2xl font-bold mb-2">🎉 Longest focus streak: 32 minutes!</h3>
        <p className="text-lg opacity-90">Keep up the great work. You're building strong study habits!</p>
      </Card>
    </div>
  );
};

export default Dashboard;

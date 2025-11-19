import { Card } from "@/components/ui/card";
import { Calendar, Clock, TrendingUp, AlertCircle } from "lucide-react";

interface Session {
  id: string;
  date: string;
  duration: number;
  focusPercentage: number;
  distractions: number;
  avgNoise: number;
  avgTemp: number;
}

const mockSessions: Session[] = [
  { id: "1", date: "2024-01-19 14:30", duration: 45, focusPercentage: 92, distractions: 2, avgNoise: 35, avgTemp: 22.5 },
  { id: "2", date: "2024-01-19 10:15", duration: 60, focusPercentage: 85, distractions: 4, avgNoise: 42, avgTemp: 23.1 },
  { id: "3", date: "2024-01-18 16:00", duration: 30, focusPercentage: 78, distractions: 5, avgNoise: 48, avgTemp: 24.2 },
  { id: "4", date: "2024-01-18 11:45", duration: 50, focusPercentage: 88, distractions: 3, avgNoise: 38, avgTemp: 21.8 },
  { id: "5", date: "2024-01-17 15:20", duration: 40, focusPercentage: 95, distractions: 1, avgNoise: 32, avgTemp: 22.0 },
];

const History = () => {
  const formatDuration = (mins: number) => {
    const hours = Math.floor(mins / 60);
    const minutes = mins % 60;
    return hours > 0 ? `${hours}h ${minutes}m` : `${minutes}m`;
  };

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Session History</h1>
        <p className="text-muted-foreground">Review your past study sessions and performance</p>
      </div>

      <div className="space-y-4">
        {mockSessions.map((session) => (
          <Card key={session.id} className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold text-lg">{session.date}</span>
                </div>
                <div className="flex flex-wrap gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>{formatDuration(session.duration)}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-success" />
                    <span className="font-medium">{session.focusPercentage}% focused</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-warning" />
                    <span>{session.distractions} distractions</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{session.avgNoise}</div>
                  <div className="text-xs text-muted-foreground">Avg Noise (dB)</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">{session.avgTemp.toFixed(1)}</div>
                  <div className="text-xs text-muted-foreground">Avg Temp (°C)</div>
                </div>
              </div>
            </div>

            {/* Performance bar */}
            <div className="mt-4 pt-4 border-t">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-sm font-medium">Focus Quality</span>
                <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-success to-accent transition-all"
                    style={{ width: `${session.focusPercentage}%` }}
                  />
                </div>
                <span className="text-sm font-semibold text-success">{session.focusPercentage}%</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default History;

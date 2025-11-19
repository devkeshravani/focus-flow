import { Card } from "@/components/ui/card";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { TrendingUp, Award, Target, Zap } from "lucide-react";

const weeklyData = [
  { day: "Mon", focus: 85, distractions: 3 },
  { day: "Tue", focus: 78, distractions: 5 },
  { day: "Wed", focus: 92, distractions: 2 },
  { day: "Thu", focus: 88, distractions: 3 },
  { day: "Fri", focus: 95, distractions: 1 },
  { day: "Sat", focus: 82, distractions: 4 },
  { day: "Sun", focus: 90, distractions: 2 },
];

const hourlyPattern = [
  { hour: "9am", focus: 70 },
  { hour: "10am", focus: 75 },
  { hour: "11am", focus: 82 },
  { hour: "12pm", focus: 65 },
  { hour: "1pm", focus: 60 },
  { hour: "2pm", focus: 78 },
  { hour: "3pm", focus: 85 },
  { hour: "4pm", focus: 92 },
  { hour: "5pm", focus: 88 },
];

const Trends = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Trends & Insights</h1>
        <p className="text-muted-foreground">Discover patterns in your study habits</p>
      </div>

      {/* Key Insights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="p-6 bg-gradient-to-br from-success/10 to-success/5 border-success/20">
          <div className="flex items-center gap-3 mb-2">
            <Award className="w-6 h-6 text-success" />
            <h3 className="font-semibold">Best Day</h3>
          </div>
          <p className="text-2xl font-bold text-success">Friday</p>
          <p className="text-sm text-muted-foreground">95% focus rate</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
          <div className="flex items-center gap-3 mb-2">
            <Target className="w-6 h-6 text-primary" />
            <h3 className="font-semibold">Peak Time</h3>
          </div>
          <p className="text-2xl font-bold text-primary">4-5 PM</p>
          <p className="text-sm text-muted-foreground">92% focus rate</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-6 h-6 text-accent" />
            <h3 className="font-semibold">Weekly Avg</h3>
          </div>
          <p className="text-2xl font-bold text-accent">87%</p>
          <p className="text-sm text-muted-foreground">Focus rate</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-warning/10 to-warning/5 border-warning/20">
          <div className="flex items-center gap-3 mb-2">
            <Zap className="w-6 h-6 text-warning" />
            <h3 className="font-semibold">Streak</h3>
          </div>
          <p className="text-2xl font-bold text-warning">7 days</p>
          <p className="text-sm text-muted-foreground">Keep it going!</p>
        </Card>
      </div>

      {/* Weekly Focus Trend */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Weekly Focus Pattern</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={weeklyData}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="day" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Line 
              type="monotone" 
              dataKey="focus" 
              stroke="hsl(var(--success))" 
              strokeWidth={3}
              dot={{ fill: "hsl(var(--success))", r: 5 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Hourly Pattern */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Best Time of Day</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={hourlyPattern}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
            <XAxis dataKey="hour" stroke="hsl(var(--muted-foreground))" />
            <YAxis stroke="hsl(var(--muted-foreground))" />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: "hsl(var(--card))", 
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px"
              }} 
            />
            <Bar dataKey="focus" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Insights Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
          <h3 className="font-semibold text-lg mb-2">💡 Key Insight</h3>
          <p className="text-muted-foreground">You focus best in the afternoon (4-5 PM). Try scheduling your most important tasks during this time!</p>
        </Card>

        <Card className="p-6 bg-gradient-to-br from-success/5 to-accent/5">
          <h3 className="font-semibold text-lg mb-2">🎯 Recommendation</h3>
          <p className="text-muted-foreground">Your focus drops after lunch. Consider a 10-minute walk or breathing exercise before your 1 PM session.</p>
        </Card>
      </div>
    </div>
  );
};

export default Trends;

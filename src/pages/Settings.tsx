import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Bluetooth, Volume2, Thermometer, Timer } from "lucide-react";

const Settings = () => {
  const [noiseThreshold, setNoiseThreshold] = useState([60]);
  const [tempMin, setTempMin] = useState([18]);
  const [tempMax, setTempMax] = useState([26]);
  const [absenceTime, setAbsenceTime] = useState([5]);
  const [audioAlerts, setAudioAlerts] = useState(true);
  const [vibrationAlerts, setVibrationAlerts] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Settings</h1>
        <p className="text-muted-foreground">Customize your monitoring experience</p>
      </div>

      {/* Device Connection */}
      <Card className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <Bluetooth className="w-6 h-6 text-primary" />
          <h2 className="text-xl font-semibold">Device Connection</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 rounded-lg bg-success/10 border border-success/20">
            <div>
              <p className="font-medium text-success">BBC micro:bit Connected</p>
              <p className="text-sm text-muted-foreground">Device ID: MB-2847</p>
            </div>
            <div className="w-3 h-3 rounded-full bg-success animate-pulse" />
          </div>
          <Button variant="outline" className="w-full">Test Connection</Button>
        </div>
      </Card>

      {/* Sensor Thresholds */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Sensor Thresholds</h2>
        
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="w-5 h-5 text-warning" />
              <Label className="text-base font-medium">Noise Alert Level</Label>
            </div>
            <div className="space-y-2">
              <Slider
                value={noiseThreshold}
                onValueChange={setNoiseThreshold}
                max={100}
                step={5}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>Quiet (0 dB)</span>
                <span className="font-semibold text-foreground">{noiseThreshold[0]} dB</span>
                <span>Loud (100 dB)</span>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Thermometer className="w-5 h-5 text-accent" />
              <Label className="text-base font-medium">Temperature Range</Label>
            </div>
            <div className="space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Minimum</p>
                <Slider
                  value={tempMin}
                  onValueChange={setTempMin}
                  min={15}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm font-semibold">{tempMin[0]}°C</p>
              </div>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Maximum</p>
                <Slider
                  value={tempMax}
                  onValueChange={setTempMax}
                  min={15}
                  max={30}
                  step={1}
                  className="w-full"
                />
                <p className="text-sm font-semibold">{tempMax[0]}°C</p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Timer className="w-5 h-5 text-destructive" />
              <Label className="text-base font-medium">Absence Detection</Label>
            </div>
            <div className="space-y-2">
              <Slider
                value={absenceTime}
                onValueChange={setAbsenceTime}
                min={1}
                max={15}
                step={1}
                className="w-full"
              />
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>1 minute</span>
                <span className="font-semibold text-foreground">{absenceTime[0]} minutes</span>
                <span>15 minutes</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Alert Preferences */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-6">Alert Preferences</h2>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Audio Alerts</Label>
              <p className="text-sm text-muted-foreground">Play sounds for notifications</p>
            </div>
            <Switch checked={audioAlerts} onCheckedChange={setAudioAlerts} />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className="text-base font-medium">Vibration Alerts</Label>
              <p className="text-sm text-muted-foreground">Vibrate on threshold breach</p>
            </div>
            <Switch checked={vibrationAlerts} onCheckedChange={setVibrationAlerts} />
          </div>
        </div>
      </Card>

      <Button size="lg" className="w-full">Save Settings</Button>
    </div>
  );
};

export default Settings;

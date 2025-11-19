import { Card } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BookOpen, AlertCircle, Shield, Mail } from "lucide-react";

const Help = () => {
  return (
    <div className="container mx-auto px-4 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Help & Support</h1>
        <p className="text-muted-foreground">Everything you need to know about FocusFlow</p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-primary/10">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Getting Started</h3>
              <p className="text-sm text-muted-foreground">Learn the basics</p>
            </div>
          </div>
        </Card>

        <Card className="p-6 hover:shadow-lg transition-shadow cursor-pointer">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-full bg-warning/10">
              <AlertCircle className="w-6 h-6 text-warning" />
            </div>
            <div>
              <h3 className="font-semibold text-lg">Troubleshooting</h3>
              <p className="text-sm text-muted-foreground">Fix common issues</p>
            </div>
          </div>
        </Card>
      </div>

      {/* FAQ */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do I connect my micro:bit device?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Go to Settings → Device Connection and click "Connect Device". Make sure your micro:bit is powered on 
                and Bluetooth is enabled on your computer. The device should appear in the list of available devices.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>What do the sensor readings mean?</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-3 text-muted-foreground">
                <p><strong>Presence:</strong> Detects if you're seated at your desk using motion sensors.</p>
                <p><strong>Noise Level:</strong> Measures ambient sound in decibels (dB). Higher values indicate more noise/potential stress.</p>
                <p><strong>Temperature:</strong> Room temperature in Celsius. Optimal range is typically 20-24°C.</p>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How can I adjust sensitivity settings?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Visit Settings → Sensor Thresholds to customize when alerts trigger. You can adjust noise levels, 
                temperature ranges, and how long before absence is detected. Experiment to find what works best for your environment.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Is my data private and secure?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                Yes! All your data is stored locally on your device. We never upload sensor readings or session data to external servers. 
                Your privacy is our priority.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>How do I interpret the charts?</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                In the History and Trends pages, green lines indicate focused periods, yellow shows moderate distractions, 
                and red highlights stress events. Higher percentages and upward trends are positive indicators of improved focus habits.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>

      {/* Contact & About */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield className="w-6 h-6 text-success" />
            <h2 className="text-xl font-semibold">Privacy & Data</h2>
          </div>
          <p className="text-muted-foreground">
            FocusFlow is designed with privacy first. All sensor data is processed and stored locally. 
            We never collect personal information or share your study patterns.
          </p>
        </Card>

        <Card className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-primary" />
            <h2 className="text-xl font-semibold">Contact Us</h2>
          </div>
          <p className="text-muted-foreground mb-4">
            Need more help? Have suggestions for improvement?
          </p>
          <p className="font-medium">support@focusflow.app</p>
        </Card>
      </div>

      {/* About */}
      <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
        <h2 className="text-xl font-semibold mb-3">About FocusFlow</h2>
        <p className="text-muted-foreground">
          FocusFlow is a student-centered application designed to promote better study habits through gentle, 
          data-driven feedback. Built on HCI principles, it helps you understand your focus patterns and 
          make positive behavioral changes without judgment or pressure.
        </p>
        <p className="text-muted-foreground mt-3">
          <strong>Version:</strong> 1.0.0 | <strong>micro:bit Compatible</strong>
        </p>
      </Card>
    </div>
  );
};

export default Help;

import React from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Monitor, Palette } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { DarkReaderStatus } from "./DarkReaderStatus";

export function ThemeDemo() {
  const { theme, setTheme, systemTheme } = useTheme();

  const colorExamples = [
    {
      name: "Background",
      class: "bg-background text-foreground",
      description: "Main app background",
    },
    {
      name: "Card",
      class: "bg-card text-card-foreground border border-border",
      description: "Card containers",
    },
    {
      name: "Muted",
      class: "bg-muted text-muted-foreground",
      description: "Subtle backgrounds",
    },
    {
      name: "Primary",
      class: "bg-primary text-primary-foreground",
      description: "Primary actions",
    },
    {
      name: "Secondary",
      class: "bg-secondary text-secondary-foreground",
      description: "Secondary elements",
    },
    {
      name: "Accent",
      class: "bg-accent text-accent-foreground",
      description: "Interactive states",
    },
    {
      name: "Destructive",
      class: "bg-destructive text-destructive-foreground",
      description: "Error/danger states",
    },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-foreground flex items-center justify-center gap-2">
          <Palette className="w-8 h-8" />
          Theme System Demo
        </h1>
        <p className="text-muted-foreground">
          Showcasing theme-aware components and color tokens
        </p>
      </div>

      {/* Dark Reader Status */}
      <DarkReaderStatus />

      {/* Theme Controls */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Theme Controls
        </h2>
        <div className="space-y-4">
          <div className="text-sm text-muted-foreground">
            Current theme:{" "}
            <span className="font-medium text-foreground">{theme}</span>
            {theme === "system" && systemTheme && (
              <span className="ml-2">({systemTheme})</span>
            )}
          </div>

          <div className="flex gap-2 flex-wrap">
            <Button
              variant={theme === "light" ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme("light")}
              className="flex items-center gap-2"
            >
              <Sun className="w-4 h-4" />
              Light
            </Button>

            <Button
              variant={theme === "dark" ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme("dark")}
              className="flex items-center gap-2"
            >
              <Moon className="w-4 h-4" />
              Dark
            </Button>

            <Button
              variant={theme === "system" ? "default" : "outline"}
              size="sm"
              onClick={() => setTheme("system")}
              className="flex items-center gap-2"
            >
              <Monitor className="w-4 h-4" />
              System
            </Button>
          </div>
        </div>
      </Card>

      {/* Color Palette */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Semantic Color Tokens
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {colorExamples.map((color) => (
            <div
              key={color.name}
              className={`p-4 rounded-lg ${color.class} transition-colors`}
            >
              <div className="font-medium">{color.name}</div>
              <div className="text-sm opacity-80">{color.description}</div>
              <code className="text-xs font-mono mt-2 block opacity-60">
                {color.class}
              </code>
            </div>
          ))}
        </div>
      </Card>

      {/* Interactive Examples */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Interactive Components
        </h2>
        <div className="space-y-4">
          {/* Buttons */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-foreground">
              Button Variants
            </h3>
            <div className="flex gap-2 flex-wrap">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>

          {/* Form Elements */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-foreground">
              Form Elements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-md">
              <input
                type="text"
                placeholder="Text input"
                className="px-3 py-2 rounded-md border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring placeholder:text-muted-foreground"
              />
              <select className="px-3 py-2 rounded-md border bg-background text-foreground border-border focus:outline-none focus:ring-2 focus:ring-ring">
                <option>Select option</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
            </div>
          </div>

          {/* Status Examples */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-foreground">
              Status Messages
            </h3>
            <div className="space-y-2">
              <div className="p-3 rounded-md bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800">
                ✓ Success: Operation completed successfully
              </div>
              <div className="p-3 rounded-md bg-yellow-100 dark:bg-yellow-900/20 text-yellow-800 dark:text-yellow-200 border border-yellow-200 dark:border-yellow-800">
                ⚠ Warning: Please review your settings
              </div>
              <div className="p-3 rounded-md bg-destructive/10 text-destructive border border-destructive/20">
                ✗ Error: Something went wrong
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Usage Tips */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Theme Usage Tips
        </h2>
        <div className="space-y-3 text-sm">
          <div className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <div>
              <strong className="text-foreground">Use semantic colors:</strong>
              <code className="ml-2 text-xs bg-muted px-1 py-0.5 rounded">
                bg-background text-foreground
              </code>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <div>
              <strong className="text-foreground">Add hover states:</strong>
              <code className="ml-2 text-xs bg-muted px-1 py-0.5 rounded">
                hover:bg-accent hover:text-accent-foreground
              </code>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-500 mt-0.5">✓</span>
            <div>
              <strong className="text-foreground">Use transitions:</strong>
              <code className="ml-2 text-xs bg-muted px-1 py-0.5 rounded">
                transition-colors
              </code>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-red-500 mt-0.5">✗</span>
            <div>
              <strong className="text-foreground">Avoid fixed colors:</strong>
              <code className="ml-2 text-xs bg-muted px-1 py-0.5 rounded line-through">
                bg-white text-black
              </code>
            </div>
          </div>
        </div>
      </Card>

      {/* Dark Reader vs Native Themes Comparison */}
      <Card className="p-6">
        <h2 className="text-xl font-semibold mb-4 text-foreground">
          Dark Reader vs Native Themes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Dark Reader Column */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <Monitor className="w-5 h-5 text-purple-500" />
              Dark Reader Extension
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Requires browser extension installation</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>No mobile browser support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Performance overhead from CSS filters</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>Unpredictable color inversions</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-red-500 mt-0.5">✗</span>
                <span>May break custom designs</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-yellow-500 mt-0.5">~</span>
                <span>Automatic but inconsistent</span>
              </div>
            </div>
          </div>

          {/* Native Themes Column */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-foreground flex items-center gap-2">
              <Palette className="w-5 h-5 text-blue-500" />
              Our Native Themes
            </h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Works on ALL devices and browsers</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Full mobile and tablet support</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Optimized performance with CSS variables</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Carefully designed color palettes</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Consistent across all components</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-0.5">✓</span>
                <span>Professional and reliable</span>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

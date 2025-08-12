import { Plus, Settings, User } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ThemeToggle } from "./theme-toggle";

interface TopBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function TopBar({ activeTab, onTabChange }: TopBarProps) {
  const tabs = [
    { id: "main-table", label: "Main table", icon: "⋯" },
    { id: "form", label: "Form", icon: null },
    { id: "kanban", label: "Kanban", icon: null },
    { id: "theme-demo", label: "Theme Demo", icon: null },
  ];

  return (
    <header className="bg-card border-b border-border px-6 py-3 flex items-center justify-between">
      {/* Left side - Navigation tabs */}
      <div className="flex items-center gap-1">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`px-4 py-2 rounded-md transition-colors flex items-center gap-2 text-sm ${
              activeTab === tab.id
                ? "bg-accent text-accent-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-accent"
            }`}
          >
            {tab.icon && <span>{tab.icon}</span>}
            {tab.label}
          </button>
        ))}

        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground ml-2"
        >
          <Plus className="w-4 h-4 mr-1" />
          Add View
        </Button>
      </div>

      {/* Right side - Branding and controls */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-medium text-foreground">MYTICK</h1>
          <Badge
            variant="secondary"
            className="bg-emerald-600 text-white border-none"
          >
            In Portal
          </Badge>
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Settings className="w-4 h-4" />
          </Button>

          <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
        </div>
      </div>
    </header>
  );
}

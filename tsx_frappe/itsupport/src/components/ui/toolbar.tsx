import { ReactNode } from "react";
import { Button } from "./button";
import { LucideIcon } from "lucide-react";

interface ToolbarAction {
  id: string;
  icon?: LucideIcon | string;
  text?: string;
  onClick?: () => void;
  variant?:
    | "default"
    | "outline"
    | "ghost"
    | "destructive"
    | "secondary"
    | "link";
  disabled?: boolean;
  className?: string;
}

interface ToolbarSection {
  id: string;
  actions: ToolbarAction[];
  align?: "left" | "right" | "center";
}

interface ToolbarProps {
  sections: ToolbarSection[];
  className?: string;
  children?: ReactNode;
}

export function Toolbar({ sections, className = "", children }: ToolbarProps) {
  const renderAction = (action: ToolbarAction) => {
    const IconComponent = typeof action.icon === "string" ? null : action.icon;
    const isEmojiIcon =
      typeof action.icon === "string" && action.icon.length <= 2;

    return (
      <Button
        key={action.id}
        variant={action.variant || "ghost"}
        size="sm"
        onClick={action.onClick}
        disabled={action.disabled}
        className={`text-muted-foreground hover:text-foreground ${action.className || ""}`}
      >
        {IconComponent && <IconComponent className="w-4 h-4 mr-2" />}
        {isEmojiIcon && <span className="mr-2">{action.icon as string}</span>}
        {!IconComponent && !isEmojiIcon && action.icon && (
          <span className="mr-2">{action.icon as string}</span>
        )}
        {action.text}
      </Button>
    );
  };

  const renderSection = (section: ToolbarSection) => {
    const alignClass = {
      left: "justify-start",
      right: "justify-end",
      center: "justify-center",
    }[section.align || "left"];

    return (
      <div key={section.id} className={`flex items-center gap-3 ${alignClass}`}>
        {section.actions.map(renderAction)}
      </div>
    );
  };

  return (
    <div className={`bg-card border-b border-border p-4 ${className}`}>
      <div className="flex items-center justify-between">
        {sections.map(renderSection)}
        {children}
      </div>
    </div>
  );
}

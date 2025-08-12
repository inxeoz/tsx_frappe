import { useState } from "react";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Settings,
  Download,
  Upload,
  RefreshCw,
  Save,
  Edit,
  Trash,
  Copy,
  Share
} from "lucide-react";
import { Toolbar } from "./ui/toolbar";

export function ToolbarExamples() {
  const [activeExample, setActiveExample] = useState(1);

  // Example 1: Basic toolbar with common actions
  const basicToolbarSections = [
    {
      id: "main-actions",
      align: "left" as const,
      actions: [
        {
          id: "new",
          icon: Plus,
          text: "New",
          variant: "outline" as const,
          onClick: () => console.log("New clicked"),
        },
        {
          id: "search",
          icon: Search,
          text: "Search",
          onClick: () => console.log("Search clicked"),
        },
        {
          id: "filter",
          icon: Filter,
          text: "Filter",
          onClick: () => console.log("Filter clicked"),
        },
      ],
    },
    {
      id: "secondary-actions",
      align: "right" as const,
      actions: [
        {
          id: "settings",
          icon: Settings,
          onClick: () => console.log("Settings clicked"),
        },
      ],
    },
  ];

  // Example 2: File management toolbar
  const fileToolbarSections = [
    {
      id: "file-actions",
      align: "left" as const,
      actions: [
        {
          id: "save",
          icon: Save,
          text: "Save",
          variant: "outline" as const,
          onClick: () => console.log("Save clicked"),
        },
        {
          id: "edit",
          icon: Edit,
          text: "Edit",
          onClick: () => console.log("Edit clicked"),
        },
        {
          id: "copy",
          icon: Copy,
          text: "Copy",
          onClick: () => console.log("Copy clicked"),
        },
        {
          id: "delete",
          icon: Trash,
          text: "Delete",
          variant: "destructive" as const,
          onClick: () => console.log("Delete clicked"),
        },
      ],
    },
    {
      id: "export-actions",
      align: "right" as const,
      actions: [
        {
          id: "download",
          icon: Download,
          text: "Download",
          onClick: () => console.log("Download clicked"),
        },
        {
          id: "upload",
          icon: Upload,
          text: "Upload",
          onClick: () => console.log("Upload clicked"),
        },
        {
          id: "share",
          icon: Share,
          onClick: () => console.log("Share clicked"),
        },
      ],
    },
  ];

  // Example 3: Dashboard toolbar with emoji icons
  const dashboardToolbarSections = [
    {
      id: "dashboard-main",
      align: "left" as const,
      actions: [
        {
          id: "analytics",
          icon: "📊",
          text: "Analytics",
          onClick: () => console.log("Analytics clicked"),
        },
        {
          id: "reports",
          icon: "📈",
          text: "Reports",
          onClick: () => console.log("Reports clicked"),
        },
        {
          id: "notifications",
          icon: "🔔",
          text: "Notifications",
          onClick: () => console.log("Notifications clicked"),
        },
      ],
    },
    {
      id: "dashboard-actions",
      align: "right" as const,
      actions: [
        {
          id: "refresh",
          icon: RefreshCw,
          onClick: () => console.log("Refresh clicked"),
        },
        {
          id: "more",
          icon: MoreHorizontal,
          onClick: () => console.log("More clicked"),
        },
      ],
    },
  ];

  // Example 4: Minimal toolbar with only icons
  const minimalToolbarSections = [
    {
      id: "minimal-actions",
      align: "center" as const,
      actions: [
        {
          id: "action1",
          icon: "🏠",
          onClick: () => console.log("Home clicked"),
        },
        {
          id: "action2",
          icon: "⭐",
          onClick: () => console.log("Favorites clicked"),
        },
        {
          id: "action3",
          icon: "📁",
          onClick: () => console.log("Folder clicked"),
        },
        {
          id: "action4",
          icon: "🔍",
          onClick: () => console.log("Search clicked"),
        },
      ],
    },
  ];

  const examples = [
    {
      id: 1,
      title: "Basic Toolbar",
      description: "Common toolbar with text and icons, left and right alignment",
      sections: basicToolbarSections,
    },
    {
      id: 2,
      title: "File Management",
      description: "File operations with different button variants",
      sections: fileToolbarSections,
    },
    {
      id: 3,
      title: "Dashboard Toolbar",
      description: "Mixed emoji and lucide icons for dashboard actions",
      sections: dashboardToolbarSections,
    },
    {
      id: 4,
      title: "Minimal Icons",
      description: "Center-aligned emoji icons only",
      sections: minimalToolbarSections,
    },
  ];

  const activeExampleData = examples.find((ex) => ex.id === activeExample);

  return (
    <div className="flex flex-col h-full">
      <div className="p-6 border-b border-border">
        <h2 className="text-2xl font-bold mb-4">Toolbar Component Examples</h2>
        <p className="text-muted-foreground mb-4">
          Click on different examples to see various toolbar configurations
        </p>

        <div className="flex gap-2 flex-wrap">
          {examples.map((example) => (
            <button
              key={example.id}
              onClick={() => setActiveExample(example.id)}
              className={`px-3 py-2 rounded-md text-sm transition-colors ${
                activeExample === example.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:text-foreground"
              }`}
            >
              {example.title}
            </button>
          ))}
        </div>
      </div>

      {activeExampleData && (
        <div className="flex-1">
          <div className="p-6 border-b border-border bg-muted/30">
            <h3 className="text-lg font-semibold mb-2">{activeExampleData.title}</h3>
            <p className="text-muted-foreground">{activeExampleData.description}</p>
          </div>

          <Toolbar sections={activeExampleData.sections} />

          <div className="p-6">
            <h4 className="text-md font-medium mb-3">Code Example:</h4>
            <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
              <code>{`const toolbarSections = ${JSON.stringify(
                activeExampleData.sections,
                null,
                2
              )};

<Toolbar sections={toolbarSections} />`}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  );
}

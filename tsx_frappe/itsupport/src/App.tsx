import { useState } from "react";
import { TopBar } from "./components/TopBar";
import { TicketDashboard } from "./components/TicketDashboard";
import { KanbanBoard } from "./components/KanbanBoard";
import { ThemeDemo } from "./components/ThemeDemo";

export default function App() {
  const [activeTab, setActiveTab] = useState("main-table");

  return (
    <div className="it-support-dashboard h-screen bg-background text-foreground flex flex-col">
      <TopBar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex-1 overflow-auto m-5">
        {activeTab === "main-table" && <TicketDashboard />}
        {activeTab === "form" && (
          <div className="p-6">
            <h2 className="text-xl mb-4">Form View</h2>
            <p className="text-muted-foreground">Form view coming soon...</p>
          </div>
        )}
        {activeTab === "kanban" && <KanbanBoard />}
        {activeTab === "theme-demo" && <ThemeDemo />}
      </main>
    </div>
  );
}

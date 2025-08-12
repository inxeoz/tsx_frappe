import { Plus, Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "./ui/button";
import { Toolbar } from "./ui/toolbar";
import { TicketGroup } from "./TicketGroup";

const mockTicketData = [
  {
    id: "AS",
    name: "AS",
    color: "bg-red-500",
    count: 2,
    tickets: [
      {
        id: 1,
        agent: null,
        status: "open",
        priority: "high",
        creationDate: "May 2, 24",
        resolutionDate: null,
      },
      {
        id: 2,
        agent: null,
        status: "pending",
        priority: "medium",
        creationDate: "Apr 28, 24",
        resolutionDate: "May 1, 24",
      },
    ],
  },
  {
    id: "OP",
    name: "OP",
    color: "bg-blue-500",
    count: 1,
    tickets: [
      {
        id: 3,
        agent: "John Doe",
        status: "in-progress",
        priority: "high",
        creationDate: "May 1, 24",
        resolutionDate: null,
      },
    ],
  },
  {
    id: "WR",
    name: "WR",
    color: "bg-purple-500",
    count: 1,
    tickets: [
      {
        id: 4,
        agent: "Jane Smith",
        status: "waiting",
        priority: "low",
        creationDate: "Apr 29, 24",
        resolutionDate: null,
      },
    ],
  },
  {
    id: "RT",
    name: "RT",
    color: "bg-green-500",
    count: 2,
    tickets: [
      {
        id: 5,
        agent: null,
        status: "resolved",
        priority: "medium",
        creationDate: "Apr 10, 24",
        resolutionDate: "Apr 15, 24",
      },
      {
        id: 6,
        agent: "Mike Johnson",
        status: "closed",
        priority: "low",
        creationDate: "Apr 5, 24",
        resolutionDate: "Apr 7, 24",
      },
    ],
  },
];

export function TicketDashboard() {
  const toolbarSections = [
    {
      id: "left-actions",
      align: "left" as const,
      actions: [
        {
          id: "new-ticket",
          icon: Plus,
          text: "New ticket",
          variant: "outline" as const,
          className:
            "bg-accent border-border text-accent-foreground hover:bg-accent/80",
          onClick: () => console.log("New ticket clicked"),
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
        {
          id: "group-by",
          icon: "📊",
          text: "Group by",
          onClick: () => console.log("Group by clicked"),
        },
        {
          id: "more",
          icon: MoreHorizontal,
          onClick: () => console.log("More options clicked"),
        },
      ],
    },
    {
      id: "right-actions",
      align: "right" as const,
      actions: [
        {
          id: "export",
          icon: "⬆",
          onClick: () => console.log("Export clicked"),
        },
      ],
    },
  ];

  return (
    <div className="flex flex-col h-full">
      {/* Toolbar */}
      <Toolbar sections={toolbarSections} />

      {/* Table Header */}
      <div className="bg-muted border-b border-border px-6 py-3">
        <div className="grid grid-cols-6 gap-4 text-sm text-muted-foreground">
          <div></div>
          <div>Agent</div>
          <div>Status</div>
          <div>Priority</div>
          <div>Creation Date</div>
          <div>Resolution Date</div>
        </div>
      </div>

      {/* Ticket Groups */}
      <div className="flex-1 overflow-auto">
        {mockTicketData.map((group) => (
          <TicketGroup key={group.id} group={group} />
        ))}

        <div className="p-4">
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            Add new group
          </Button>
        </div>
      </div>
    </div>
  );
}

export interface Workflow {
  id: number;
  title: string;
  lastUpdated: string;
  createdAt: string;
  owner: string;
  status: "Active" | "Inactive";
  options: string[];
}

export const workflows: Workflow[] = [
  {
    id: 1,
    title: "n8n Tutorial",
    lastUpdated: "5 days ago",
    createdAt: "10 September",
    owner: "Personal",
    status: "Inactive",
    options: ["Open", "Share", "Duplicate", "Archive"],
  },
  {
    id: 2,
    title: "Demo: My first AI Agent in n8n",
    lastUpdated: "6 days ago",
    createdAt: "9 September",
    owner: "Personal",
    status: "Inactive",
    options: ["Open", "Share", "Duplicate", "Archive"],
  },
  {
    id: 3,
    title: "Slack Automation Bot",
    lastUpdated: "2 days ago",
    createdAt: "14 September",
    owner: "Team",
    status: "Active",
    options: ["Open", "Share", "Duplicate", "Archive"],
  },
  {
    id: 4,
    title: "Weekly Data Backup",
    lastUpdated: "1 day ago",
    createdAt: "15 September",
    owner: "Personal",
    status: "Active",
    options: ["Open", "Share", "Duplicate", "Archive"],
  },
];

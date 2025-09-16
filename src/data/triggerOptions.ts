import {
  PlayCircle,
  Bell,
  Clock,
  Globe,
  FileText,
  Workflow,
  MessageSquare,
  BarChart2,
  MoreHorizontal,
} from "lucide-react";

export const triggerOptions = [
  {
    id: "manual",
    title: "Trigger manually",
    description:
      "Runs the flow on clicking a button in n8n. Good for getting started quickly",
    icon: PlayCircle,
  },
  {
    id: "app-event",
    title: "On app event",
    description:
      "Runs the flow when something happens in an app like Telegram, Notion or Airtable",
    icon: Bell,
  },
  {
    id: "schedule",
    title: "On a schedule",
    description: "Runs the flow every day, hour, or custom interval",
    icon: Clock,
  },
  {
    id: "webhook",
    title: "On webhook call",
    description: "Runs the flow on receiving an HTTP request",
    icon: Globe,
  },
  {
    id: "form",
    title: "On form submission",
    description:
      "Generate webforms in n8n and pass their responses to the workflow",
    icon: FileText,
  },
  {
    id: "workflow",
    title: "When executed by another workflow",
    description:
      "Runs the flow when called by the Execute Workflow node from a different workflow",
    icon: Workflow,
  },
  {
    id: "chat",
    title: "On chat message",
    description:
      "Runs the flow when a user sends a chat message. For use with AI nodes",
    icon: MessageSquare,
  },
  {
    id: "evaluation",
    title: "When running evaluation",
    description: "Run a dataset through your workflow to test performance",
    icon: BarChart2,
  },
  {
    id: "other",
    title: "Other ways...",
    description: "Runs the flow on workflow errors, file changes, etc.",
    icon: MoreHorizontal,
  },
];

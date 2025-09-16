import { type Edge, type Node } from "@xyflow/react";

export const initialNodes: Node[] = [
  { id: "n1", position: { x: 0, y: 0 }, data: { label: "Node 1" } },
  { id: "n2", position: { x: 0, y: 100 }, data: { label: "Node 2 " } },
];

export const initialEdges: Edge[] = [
  { id: "n1-n2", source: "n1", target: "n2" },
];

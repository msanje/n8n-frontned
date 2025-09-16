import { useCallback, useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  ReactFlow,
  type Connection,
  type Edge,
  type Node,
  type EdgeChange,
  type NodeChange,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import Triggers from "./Triggers";

const testInitialNodes: Node[] = [
  {
    id: "add-step",
    position: { x: 200, y: 50 },
    data: {
      label: (
        <div className="flex flex-col items-center justify-center text-gray-400">
          <div className="w-12 h-12 rounded-md border-2 border-dashed border-gray-500 flex items-center justify-center">
            <span className="text-2xl">+</span>
          </div>
          <div>Add first step...</div>
        </div>
      ),
    },
  },
];

const testInitialEdges: Edge[] = [];

function Reactflow() {
  const [nodes, setNodes] = useState<Node[]>(testInitialNodes);
  const [edges, setEdges] = useState<Edge[]>(testInitialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );

  const onConnect = useCallback(
    (connection: Connection) =>
      setEdges((edgesSnapshot) => addEdge(connection, edgesSnapshot)),
    [],
  );

  return (
    <div className="">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      />

      <div>
        <Triggers />
      </div>
    </div>
  );
}

export default Reactflow;

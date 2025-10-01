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
import { Plus } from "lucide-react";

function Reactflow() {
  const testInitialNodes: Node[] = [
    {
      id: "add-step",
      position: { x: 200, y: 50 },
      data: {
        label: <div className="bg-green-500 h-48">Add first step...</div>,
      },
    },
    {
      id: "add-button",
      position: { x: 400, y: 50 },
      data: {
        label: <Plus size={48} />,
      },
      style: {
        width: 48,
        height: 48,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
    },
  ];

  const testInitialEdges: Edge[] = [
    { id: "e1-2", source: "add-step", target: "add-button" },
  ];

  const [show, setShow] = useState(false);

  const [nodes, setNodes] = useState<Node[]>(testInitialNodes);
  const [edges, setEdges] = useState<Edge[]>(testInitialEdges);

  // TODO: verify whether we really need this
  const sampleTrigger = {
    id: "webhook",
    title: "On webhook call",
    description: "Runs the flow on receiving an HTTP request",
  };

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
    <div className="h-full min-h-0 bg-red-700">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0 }}
        onClick={() => setShow((prev) => !prev)}
        className="h-full min-h-0 min-w-0"
      />

      <div
        className={`fixed top-0 right-0 w-[450px] bg-white dark:bg-gray-400 shadow-lg transform transition-transform duration-300 ${show ? "translate-x-0" : "translate-x-full"}`}
      >
        <Triggers
          open={show}
          trigger={sampleTrigger}
          close={() => setShow(false)}
        />
      </div>
    </div>
  );
}

export default Reactflow;

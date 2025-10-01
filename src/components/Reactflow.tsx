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
        <div className="flex flex-col items-center justify-center text-gray-400 cursor-pointer">
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
    <div style={{ height: 500 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        fitViewOptions={{ padding: 0 }}
        onClick={() => setShow((prev) => !prev)}
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

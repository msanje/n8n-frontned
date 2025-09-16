import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";

function Workflow() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <h1>Reactflow Page</h1>
        <Reactflow />
      </div>
    </div>
  );
}

export default Workflow;

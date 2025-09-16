import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";
import WorkflowLogs from "./WorkflowLogs";

function Workflow() {
  return (
    <div className="grid grid-cols-[16rem_1fr] h-screen">
      <Sidebar />
      <div className="grid grid-rows-[2fr_1fr]">
        <Reactflow />
        <WorkflowLogs />
      </div>
    </div>
  );
}

export default Workflow;

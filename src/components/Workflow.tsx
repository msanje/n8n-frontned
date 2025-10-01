import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";
import WorkflowLogs from "./WorkflowLogs";

function Workflow() {
  return (
    <div className="w-screen h-screen">
      <div className=" grid grid-cols-[16rem_1fr]">
        <Sidebar />
        <div className="grid grid-rows-[2fr_1fr]">
          <Reactflow />
          <WorkflowLogs />
        </div>
      </div>
    </div>
  );
}

export default Workflow;

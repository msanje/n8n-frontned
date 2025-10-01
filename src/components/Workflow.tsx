import { useUIStore } from "../store/uiStore";
import CollapsedSidebar from "./CollapsedSidebar";
import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";
import WorkflowLogs from "./WorkflowLogs";

function Workflow() {
  const { sidebarCollapsed, toggleSidebar } = useUIStore();

  return (
    <div className="w-screen h-screen">
      <div className=" grid grid-cols-[16rem_1fr] bg-yellow-500">
        {sidebarCollapsed ? <CollapsedSidebar /> : <Sidebar />}
        <div className="grid grid-rows-[2fr_1fr]">
          <div className="bg-green-500">
            <Reactflow />
          </div>
          <div className="bg-blue-500">
            <WorkflowLogs />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

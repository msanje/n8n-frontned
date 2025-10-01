import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import WorkflowLogs from "./WorkflowLogs";

function Workflow() {
  return (
    <div className="w-screen h-screen">
      <div className=" grid grid-cols-[auto_1fr] h-full min-h-0">
        <Sidebar />
        <div className="h-full min-h-0">
          <ResizablePanelGroup
            direction="vertical"
            className="h-full w-full min-h-0"
          >
            <ResizablePanel defaultSize={70}>
              <div className="h-full min-h-0">
                <Reactflow />
              </div>
            </ResizablePanel>

            <ResizableHandle withHandle />

            <ResizablePanel defaultSize={30}>
              <div className="h-full min-h-0 min-w-0">
                <WorkflowLogs />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

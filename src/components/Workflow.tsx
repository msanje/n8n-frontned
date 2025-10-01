import { useEffect, useState } from "react";
import Reactflow from "./Reactflow";
import Sidebar from "./Sidebar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "./ui/resizable";
import WorkflowLogs from "./WorkflowLogs";

function Workflow() {
  const [show, setShow] = useState(false);

  useEffect(() => {}, [show]);

  return (
    <div className="w-screen h-screen">
      <div className="grid grid-cols-[auto_1fr] h-full min-h-0">
        <Sidebar />
        <div className="h-full min-h-0">
          <ResizablePanelGroup
            key={show ? "open" : "cloased"}
            direction="vertical"
            className="h-full w-full min-h-0"
          >
            <ResizablePanel defaultSize={show ? 70 : 100}>
              <Reactflow />
            </ResizablePanel>

            {show && <ResizableHandle withHandle />}

            <ResizablePanel defaultSize={show ? 40 : 4} minSize={4}>
              <WorkflowLogs
                show={show}
                toggleShow={() => setShow((prev) => !prev)}
              />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
      </div>
    </div>
  );
}

export default Workflow;

import { ChevronDown, ChevronUp, Ellipsis } from "lucide-react";
import { useState } from "react";

function WorkflowLogs() {
  const [logs, setLogs] = useState([]);

  return (
    <div>
      <div className="border-y-1 flex justify-between px-2 py-1">
        <h3 className="">Logs</h3>
        <div className="flex gap-2">
          <Ellipsis />
          {/* TODO: Add open close logic */}
          {/* <ChevronUp /> */}
          <ChevronDown />
        </div>
      </div>
      <div className="flex items-center justify-center h-full">
        {logs.length == 0 && (
          <p className="w-68 text-center text-gray-400">
            Nothing to display yet. Execute the workflow to see execution logs.
          </p>
        )}
      </div>
    </div>
  );
}

export default WorkflowLogs;

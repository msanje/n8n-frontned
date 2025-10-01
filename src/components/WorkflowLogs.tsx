import { ChevronDown, ChevronUp, Ellipsis } from "lucide-react";
import { useState } from "react";

function WorkflowLogs() {
  const [logs, setLogs] = useState([]);
  const [show, setShow] = useState(false);
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div>
      <div className="border-y-1 flex justify-between px-2 py-1">
        <h3 className="">Logs</h3>
        <div className="flex gap-2 ">
          <button
            className="cursor-pointer"
            onClick={() => setShowOptions((prev) => !prev)}
          >
            <Ellipsis />
          </button>
          <button
            className="cursor-pointer"
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? (
              <>
                <ChevronUp />
              </>
            ) : (
              <>
                <ChevronDown />
              </>
            )}
          </button>
        </div>
      </div>
      {show && (
        <div className="flex items-center justify-center h-full">
          {logs.length == 0 ? (
            <p className="w-68 text-center text-gray-400">
              Nothing to display yet. Execute the workflow to see execution
              logs.
            </p>
          ) : (
            <ul>
              {logs.map((log, idx) => (
                <li key={idx}>{log}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

export default WorkflowLogs;

import { useState } from "react";
import { workflows as dummyWorkflows } from "../data/workflows";
import { EllipsisVertical, User } from "lucide-react";

function Workflows() {
  const [workflows, setWorkflows] = useState(dummyWorkflows);

  return (
    <div className="cursor-pointer">
      {workflows.map((workflow, idx) => (
        <div key={idx} className="w-full bg-zinc-700 my-4 px-6 py-4 rounded-md">
          <h1 className="text-gray-300">{workflow.title}</h1>
          <div className="flex justify-between text-gray-500 items-center">
            <div className="flex">
              <p>{workflow.lastUpdated}</p>
              <p className="px-2">|</p>
              <p>{workflow.createdAt}</p>
            </div>
            <div id="more_options" className="flex items-center gap-4">
              <div className="flex gap-2 border border-gray-500 px-2 py-1 text-white text-sm rounded-sm">
                <User size={16} />
                <p>{workflow.owner}</p>
              </div>

              <label className="flex items-center gap-2 px-2 py-1">
                <span className="text-sm leading-none">
                  {workflow.status === "Active" ? "Active" : "Inactive"}
                </span>
                <input
                  type="checkbox"
                  name={`workflow.status === "active"`}
                  readOnly
                  className="sr-only peer"
                />

                <div className="w-10 h-5 bg-gray-600 rounded-full peer-checked:bg-green-500 relative transition-colors">
                  <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5"></div>
                </div>
              </label>

              {/* TODO: Add move options */}
              <button className="">
                <EllipsisVertical />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Workflows;

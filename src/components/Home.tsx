import { useState } from "react";
import Sidebar from "./Sidebar";
import { ChevronDown } from "lucide-react";
import Workflows from "./Workflows";
import Executions from "./Executions";
import Credentials from "./Credentials";

function Home() {
  const [credentials, setCredentials] = useState();
  const [executions, setExecutions] = useState();
  const [selected, setSelected] = useState<
    "workflows" | "credentials" | "executions"
  >("workflows");

  return (
    <div className="flex min-h-screen bg-gray-900 text-gray-100">
      <div>
        <Sidebar />
      </div>
      <div className="mx-96">
        <div className="flex justify-between items-center">
          <div className="py-12">
            <h1 className="text-3xl">Overview</h1>
            <p className="text-gray-400">
              All the workflows, credentials and executions you have access to
            </p>
          </div>

          <div className="flex h-8 w-auto px-4">
            <button>Create Workflow</button>
            <ChevronDown />
          </div>
        </div>

        {/* TODO: Add move info */}
        <div className="flex w-[1000px] h-32 border-1 border-gray-500 rounded-sm">
          <div className="flex-1 flex items-center justify-center border-r-1 border-gray-500">
            <p>Prod. executions</p>
          </div>

          <div className="flex-1 flex items-center justify-center border-r-1 border-gray-500">
            <p>Failed prod. executions</p>
          </div>

          <div className="flex-1 flex items-center justify-center border-r-1 border-gray-500">
            <p>Failure rate</p>
          </div>

          <div className="flex-1 flex items-center justify-center border-r-1 border-gray-500">
            <p>Time saved</p>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <p>Run time (avg.)</p>
          </div>
        </div>

        {/* worlflows, credentials, executions */}
        <div className="flex justify-start w-auto gap-10 py-12">
          <button
            onClick={() => setSelected("workflows")}
            className="border-b-2 border-orange-500 text-orange-500 px-4 pb-1 cursor-pointer"
          >
            Workflows
          </button>
          <button
            onClick={() => setSelected("credentials")}
            className="border-b-2 border-orange-500 text-orange-500 px-4 pb-1 cursor-pointer"
          >
            Credentials
          </button>
          <button
            onClick={() => setSelected("executions")}
            className="border-b-2 border-orange-500 px-4 pb-1 text-orange-500 cursor-pointer"
          >
            Executions
          </button>
        </div>
        <div>
          {selected === "workflows" && <Workflows />}
          {selected === "credentials" && <Credentials />}
          {selected === "executions" && <Executions />}
        </div>
      </div>
    </div>
  );
}

export default Home;

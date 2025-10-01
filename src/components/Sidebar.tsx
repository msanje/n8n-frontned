import {
  Bell,
  ChartColumnDecreasing,
  CircleQuestionMark,
  Cloud,
  Home,
  Layers,
  LayoutPanelTop,
  Plus,
  User,
  Variable,
} from "lucide-react";
import { useState } from "react";

function Sidebar() {
  const otherOptions = [
    { name: "Admin Panel", icon: Cloud },
    { name: "Templates", icon: LayoutPanelTop },
    { name: "Variables", icon: Variable },
    { name: "Insights", icon: ChartColumnDecreasing },
    { name: "Help", icon: CircleQuestionMark },
    { name: "What's New", icon: Bell },
  ];

  const [projects, setProjects] = useState([
    "Project One",
    "Project Two",
    "Project Three",
  ]);

  return (
    <div className="flex flex-col justify-between min-h-screen w-64 border-r-1 bg-red-700">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-3xl cursor-pointer">n8n</h1>
        {/* TODO: On hover style color and border to orange */}
        <Plus size={20} className="text-gray-500 border border-gray-500" />
      </div>
      <div className="flex flex-col justify-between pl-4">
        <div className="flex flex-col gap-4 -mt-80">
          <button className="flex gap-2">
            <Home size={24} className="text-gray-500" />
            Overview
          </button>
          <button className="flex gap-2">
            <User size={24} className="text-gray-500" />
            Personal
          </button>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl mb-4">Projects</h2>
          {projects.map((project, index) => (
            <div key={index} className="flex items-center gap-2">
              <Layers />
              <button key={index} className="py-2 hover:bg-gray-500 rounded-md">
                {project}
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="px-4">
        {otherOptions.map((option, idx) => (
          <div key={idx} className="flex items-center gap-2 m-4">
            <option.icon />
            <p>{option.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;

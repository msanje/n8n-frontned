import {
  Bell,
  ChartColumnDecreasing,
  CircleChevronLeft,
  CircleChevronRight,
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
import Icon from "./Icons";
import { useUIStore } from "../store/uiStore";

function CollapsedSidebar() {
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

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
    <div className="flex flex-col justify-between min-h-screen w-14 border-r-1 bg-red-700">
      <div className="flex justify-between items-center px-4 py-2">
        <h1 className="text-3xl cursor-pointer">
          <Icon name="logo" size={28} color="gray" className="text-blue-500" />
        </h1>
      </div>
      {/* TODO: On hover style color and border to orange */}
      <div className="flex flex-col justify-between mx-auto">
        <div className="flex flex-col gap-4">
          <button className="flex gap-2 cursor-pointer">
            <Plus
              size={20}
              className="text-gray-500 border border-gray-500 mx-auto"
            />
          </button>
          <button className="flex gap-2">
            <Home size={24} className="text-gray-500" />
          </button>
          <button className="flex gap-2">
            <User size={24} className="text-gray-500" />
          </button>
        </div>

        <div className="flex flex-col">
          {projects.map((project, index) => (
            <div key={index} className="flex items-center gap-2">
              <button key={index} className="py-2 hover:bg-gray-500 rounded-md">
                <Layers />
              </button>
            </div>
          ))}
        </div>
      </div>

      <div onClick={toggleSidebar} className="cursor-pointer">
        {collapsed ? <CircleChevronRight /> : <CircleChevronLeft />}
      </div>

      <div className="px-4">
        {otherOptions.map((option, idx) => (
          <div key={idx} className="flex items-center gap-2 m-4">
            <option.icon />
            {/* <p>{option.name}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollapsedSidebar;

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
import Icon from "./Icons";
import { useUIStore } from "../store/uiStore";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

const nav = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "personal", label: "Personal", icon: User },
  { id: "projects", label: "Projects", icon: Layers },
];

const projects = ["Project One", "Project Two", "Project Three"];
const otherOptions = [
  { name: "Admin Panel", icon: Cloud },
  { name: "Templates", icon: LayoutPanelTop },
  { name: "Variables", icon: Variable },
  { name: "Insights", icon: ChartColumnDecreasing },
  { name: "Help", icon: CircleQuestionMark },
  { name: "What's New", icon: Bell },
];

function Sidebar() {
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const toggleSidebar = useUIStore((s) => s.toggleSidebar);

  return (
    <div className="relative min-h-screen bg-gray-400">
      <aside
        className={`relative min-h-screen transition-[width] duration-500 ease-in-out overflow-hidden ${collapsed ? "w-18" : "w-64"}`}
      >
        {/* Header */}
        <div
          className={`flex items-center justify-between p-2 ${collapsed ? "flex-col gap-2" : "flex-row gap-2"}`}
        >
          <div
            className={`flex items-center ${collapsed ? "flex-col gap-6 mb-4" : "flex-row gap-2"}`}
          >
            <Icon
              name="logo"
              size={28}
              color="gray"
              className="text-blue-500"
            />
            {!collapsed && (
              <span
                className={`overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap ${
                  collapsed
                    ? "max-w-0 opacity-0 translate-x-2"
                    : "max-w-xs opacity-100 translate-x-0"
                }`}
              >
                n8n
              </span>
            )}
          </div>

          <Popover>
            <PopoverTrigger>
              <button className="p-1 cursor-pointer rounded bg-white/10 hover:bg-white/20 -mb-2">
                <Plus size={16} />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <div className="flex flex-col w-48 h-auto bg-gray-800 rounded-md shadow-md p-2 gap-2">
                <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                  Workflow
                </button>
                <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                  Credential
                </button>
                <button className="w-full py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-md transition-colors">
                  Project
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Navigation */}
        <nav className="mt-4 flex flex-col gap-2 px-2">
          {nav.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                title={collapsed ? item.label : undefined} // tooltip when collapsed
                className="group w-full flex items-center gap-3 px-3 py-2 rounded hover:bg-white/5 focus:outline-none"
              >
                <Icon className="flex-none" />
                <div
                  className={`overflow-hidden transition-all duration-200 ease-in-out
                  ${collapsed ? "max-w-0 opacity-0 translate-x-2" : "max-w-xs opacity-100 translate-x-0"}`}
                  aria-hidden={collapsed}
                >
                  <span className="whitespace-nowrap">{item.label}</span>
                </div>
              </button>
            );
          })}

          {projects.map((project, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 w-full px-3 py-2 rounded hover:bg-white/5"
            >
              <Layers className="flex-none" />
              <span
                className={`overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap ${collapsed ? "max-w-0 opacity-0 translate-x-2" : "max-w-xs opacity-100 translate-x-0"}`}
              >
                {project}
              </span>
            </button>
          ))}
        </nav>
        {/* Footer / Other options */}
        <div className="absolute bottom-4 left-0 right-0 px-3 flex flex-col gap-2">
          {otherOptions.map((option, idx) => {
            const IconComp = option.icon;

            return (
              <button
                key={idx}
                className="flex items-center gap-2 w-full px-2 py-1 rounded hover:bg-white/5"
                title={collapsed ? option.name : undefined}
              >
                <IconComp />
                <span
                  className={`overflow-hidden transition-all duration-300 ease-in-out whitespace-nowrap ${collapsed ? "max-w-0 opacity-0 translate-x-2" : "max-w-xs opacity-100 translate-x-0"}`}
                >
                  {option.name}
                </span>
              </button>
            );
          })}
        </div>
      </aside>

      {/* Sidebar Toggle */}
      <div
        onClick={toggleSidebar}
        className={`absolute top-1/2 z-50 cursor-pointer p-1 bg-white rounded-full shadow-lg transform -translate-y-1/2 transition-all duration-500 ease-in-out`}
        style={{
          left: collapsed ? "4.5rem" : "16rem",
          transform: "translateX(-50%) translateY(-50%)",
        }}
      >
        {collapsed ? <CircleChevronRight /> : <CircleChevronLeft />}
      </div>
    </div>
  );
}

export default Sidebar;

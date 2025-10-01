import { Home, User, Layers, Plus, Cloud } from "lucide-react";
import { useUIStore } from "../store/uiStore";

const nav = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "personal", label: "Personal", icon: User },
  { id: "projects", label: "Projects", icon: Layers },
];

export default function Sidebar() {
  const collapsed = useUIStore((s) => s.sidebarCollapsed);
  const toggle = useUIStore((s) => s.toggleSidebar);

  return (
    <aside
      className={`relative h-full min-h-screen bg-red-700
        transition-[width] duration-500 ease-in-out overflow-hidden
        ${collapsed ? "w-20" : "w-64"}`}
      aria-expanded={!collapsed}
    >
      {/* header */}
      <div className="flex items-center gap-3 px-3 py-3">
        <div className="flex-none">
          {/* <IconLogo /> */}
          <h1>Icon</h1>
        </div>

        {/* label — animate in/out */}
        <div
          className={`overflow-hidden flex-1 transition-all duration-200 ease-in-out
            ${collapsed ? "max-w-0 opacity-0 translate-x-2" : "max-w-xs opacity-100 translate-x-0"}`}
          aria-hidden={collapsed}
        >
          <span className="whitespace-nowrap">n8n</span>
        </div>

        <button
          onClick={toggle}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className="ml-2 p-1 rounded bg-white/10 hover:bg-white/20"
        >
          <Plus size={16} />
        </button>
      </div>

      {/* nav */}
      <nav className="mt-6 px-1">
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
      </nav>

      {/* footer / other options */}
      <div className="absolute bottom-4 left-0 right-0 px-3">
        {/* show icons-only when collapsed; labels when expanded */}
        <div className="flex flex-col gap-3">
          <button
            title={collapsed ? "Admin panel" : undefined}
            className="flex items-center gap-3 px-2 py-1 rounded hover:bg-white/5"
          >
            <Cloud />
            <div
              className={`${collapsed ? "max-w-0 opacity-0" : "max-w-xs opacity-100"} overflow-hidden transition-all duration-200`}
            >
              Admin Panel
            </div>
          </button>
        </div>
      </div>
    </aside>
  );
}

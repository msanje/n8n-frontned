import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="flex justify-around w-full h-16 bg-gray-100 items-center">
      <div className="flex justify-between w-96">
        <div>{/* LOGO */}n8n</div>
        <div className="flex justify-between w-80">
          <NavLink
            to={"/dashboard"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-700"
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/manage"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-700"
            }
          >
            Manage
          </NavLink>
          <NavLink
            to={"/help"}
            className={({ isActive }) =>
              isActive
                ? "text-orange-500 border-b-2 border-orange-500"
                : "text-gray-700"
            }
          >
            Help Center
          </NavLink>
        </div>
      </div>
      <div>
        <button className="border p-2 rounded-sm border-orange-500 text-orange-500">
          Sign Out
        </button>
      </div>
    </div>
  );
}

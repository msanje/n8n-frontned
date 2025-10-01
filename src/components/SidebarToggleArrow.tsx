import { useEffect, useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";

interface Props {
  sidebarHeight: number;
  collapsed: boolean;
  toggle: () => void;
}

function SidebarToggleArrow({ sidebarHeight, collapsed, toggle }: Props) {
  const [arrowTop, setArrowTop] = useState(0);

  useEffect(() => {
    setArrowTop(sidebarHeight / 2);
  }, [sidebarHeight]);

  return (
    <div
      onClick={toggle}
      className="absolute -left-4 cursor-pointer bg-white rounded-full p-1 shadow-lg"
      style={{ top: arrowTop, transform: "translateY(-50%" }}
    >
      {collapsed ? <CircleChevronRight /> : <CircleChevronLeft />}
    </div>
  );
}
export default SidebarToggleArrow;

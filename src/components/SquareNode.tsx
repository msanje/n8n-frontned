import { type LucideIcon } from "lucide-react";
import { useState } from "react";

type SquareNodeProps = {
  Icon: LucideIcon;
};

function SquareNode({ Icon }: SquareNodeProps) {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`w-24 h-24 
bg-[#414243] rounded-md border-2 border-[#BBC2CD]-400
flex items-center justify-center cursor-pointer select-none ${selected ? "ring-4 ring-zinc-400 shadow-lg shadow-zinc-400/50" : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <Icon size={32} color="green" />
    </div>
  );
}

export default SquareNode;

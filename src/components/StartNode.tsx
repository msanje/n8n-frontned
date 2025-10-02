import { useState } from "react";

function StartNode() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`w-24 h-24 rounded-l-[2.5rem] rounded-r-md bg-[#414243] border-2 border-[#BBC2CD] flex items-center justify-center cursor-pointer select-none ${selected ? "ring-4 ring-zinc-400 shadow-lg shadow-zinc-400/50" : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <img
        src="/cursor.svg"
        alt="cursor"
        className="w-12 h-12 pointer-events-none"
      />
    </div>
  );
}

export default StartNode;

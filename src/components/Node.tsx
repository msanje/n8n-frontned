import { useState } from "react";

function Node() {
  const [selected, setSelected] = useState(false);

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center items-center">
      <div
        className={`w-24 h-24 bg-gray-700 rounded-l-[2.5rem] rounded-r-md border-2 border-gray-400 flex items-center justify-center cursor-pointer select-none ${selected ? "ring-4 ring-zinc-400 shadow-lg shadow-zinc-400/50" : ""}`}
        onClick={() => setSelected((prev) => !prev)}
      >
        <img
          src="/cursor.svg"
          alt="cursor"
          className="w-12 h-12 pointer-events-none"
        />
      </div>
    </div>
  );
}

export default Node;

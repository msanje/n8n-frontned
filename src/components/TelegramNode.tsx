import { useState } from "react";

function TelegramNode() {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`w-24 h-24 bg-[#414243] rounded-md border-2 border-[#BBC2CD]-400 flex items-center justify-center cursor-pointer select-none ${selected ? "ring-4 ring-zinc-400 shadow-lg shadow-zinc-400/50" : ""}`}
      onClick={() => setSelected((prev) => !prev)}
    >
      <img
        src="/telegram.svg"
        alt="cursor"
        className="w-12 h-12 pointer-events-none"
      />
    </div>
  );
}

export default TelegramNode;

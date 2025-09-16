import { useState } from "react";
import { triggerOptions } from "../data/triggerOptions";

function Triggers({
  open,
  trigger,
  close,
}: {
  open: boolean;
  trigger?: any;
  close: () => void;
}) {
  const [selectedTrigger, setSelectedTrigger] = useState<string | null>(null);

  return (
    <div
      className={`absolute top-0 px-4 py-4 right-0 h-full w-[450px] bg-white dark:bg-gray-400 shadow-lg transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <h1 className="text-xl">What Triggers this workflow?</h1>
      <p className="text-gray-300">
        A trigger is a step that starts your workflow
      </p>
      <input className="w-full" placeholder="Search nodes..." />

      {triggerOptions.map((option, idx) => (
        <div
          key={idx}
          className={`-mx-4 px-8 w-[450px] h-24 flex items-center gap-4 cursor-pointer ${selectedTrigger === option.id ? "border-l-4 border-l-orange-500" : "hover:border-l-4 hover:border-l-white"}`}
          onClick={() => setSelectedTrigger(option.id)}
        >
          <option.icon />
          <div>
            <h1>{option.title}</h1>
            <p className="text-sm text-gray-500">{option.description}</p>
          </div>
        </div>
      ))}

      <button onClick={close} aria-label="Close">
        x
      </button>
    </div>
  );
}

export default Triggers;

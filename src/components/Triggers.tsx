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
  return (
    <div
      className={`absolute top-0 right-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <h1>What Triggers this workflow?</h1>
      <p>A trigger is a step that starts your workflow</p>
      <input placeholder="Search nodes..." />

      {triggerOptions.map((option, idx) => (
        <div key={idx}>
          <h1>{option.title}</h1>
          <p>{option.description}</p>
          <option.icon />
        </div>
      ))}

      <button onClick={close} aria-label="Close">
        x
      </button>
    </div>
  );
}

export default Triggers;

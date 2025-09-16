import { triggerOptions } from "../data/triggerOptions";

function Triggers() {
  return (
    <div>
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
    </div>
  );
}

export default Triggers;

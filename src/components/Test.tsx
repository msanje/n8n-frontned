import { useState } from "react";
import Triggers from "./Triggers";

function Test() {
  const [show, setShow] = useState(false);

  const sampleTrigger = {
    id: "webhook",
    title: "On webhook call",
    description: "Runs the flow on receiving an HTTP request",
  };

  return (
    <div>
      <div className="relative flex items-center justify-center h-screen w-screen">
        <button
          className="bg-red-700 w-32 h-12 rounded-md cursor-pointer"
          onClick={() => setShow(!show)}
        >
          {show ? "Close Triggers " : "Open Triggers"}
        </button>
      </div>

      <Triggers
        open={show}
        trigger={sampleTrigger}
        close={() => setShow(false)}
      />
    </div>
  );
}

export default Test;

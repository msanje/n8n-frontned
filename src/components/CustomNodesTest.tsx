import { Mail } from "lucide-react";
import SquareNode from "./SquareNode";
import StartNode from "./StartNode";
import TelegramNode from "./TelegramNode";
import NodeOptions from "./NodeOptions";

function Test() {
  return (
    <div className="h-screen w-screen bg-[#2D2D2E] bg-yellow-700">
      <div className="flex flex-row justify-center items-center h-full gap-x-6">
        <div className="flex flex-col justify-center items-center gap-1  ">
          <NodeOptions />
          <StartNode />
        </div>
        <div className="flex flex-col justify-center items-center gap-1  ">
          <NodeOptions />
          <SquareNode Icon={Mail} />
        </div>
        <div className="flex flex-col justify-center items-center gap-1  ">
          <NodeOptions />
          <TelegramNode />
        </div>
      </div>
    </div>
  );
}

export default Test;

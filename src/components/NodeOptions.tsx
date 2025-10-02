import { Ellipsis, Play, Power, Trash } from "lucide-react";

function NodeOptions() {
  return (
    <div className="flex justify-between w-22 text-gray-600">
      <Play size={16} />
      <Power size={16} />
      <Trash size={16} />
      <Ellipsis size={16} />
    </div>
  );
}

export default NodeOptions;

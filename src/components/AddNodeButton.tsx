import { PlusIcon } from "lucide-react";

function AddNodeButton() {
  return (
    <div className="w-10 h-10 border-2 flex justify-center items-center rounded-lg border-2 border-slate-300">
      <PlusIcon size={24} className="text-slate-300" />
    </div>
  );
}

export default AddNodeButton;

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

// import {
//   ResizableHandle,
//   ResizablePanel,
//   ResizablePanelGroup,
// } from "../components/ui/resizable";
//
// export function ResizableDemo() {
//   return (
//     <ResizablePanelGroup
//       direction="horizontal"
//       className="max-w-md rounded-lg border md:min-w-[450px]"
//     >
//       <ResizablePanel defaultSize={50}>
//         <div className="flex h-[200px] items-center justify-center p-6">
//           <span className="font-semibold">One</span>
//         </div>
//       </ResizablePanel>
//       <ResizableHandle />
//       <ResizablePanel defaultSize={50}>
//         <ResizablePanelGroup direction="vertical">
//           <ResizablePanel defaultSize={25}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Two</span>
//             </div>
//           </ResizablePanel>
//           <ResizableHandle />
//           <ResizablePanel defaultSize={75}>
//             <div className="flex h-full items-center justify-center p-6">
//               <span className="font-semibold">Three</span>
//             </div>
//           </ResizablePanel>
//         </ResizablePanelGroup>
//       </ResizablePanel>
//     </ResizablePanelGroup>
//   );
// }
//
// export default ResizableDemo;

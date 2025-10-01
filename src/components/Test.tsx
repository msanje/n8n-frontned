import IconDemo from "./IconDemo";

function Test() {
  return (
    <div className="h-screen w-screen overflow-clip">
      <div className="h-screen min-h-0 flex flex-col bg-red-700">
        <div className="flex-1 min-h-0 bg-red-700">
          {/* <h1>Hello world</h1> */}
          {/* <Reactflow /> */}
          <IconDemo />
        </div>
      </div>
    </div>
  );
}

export default Test;

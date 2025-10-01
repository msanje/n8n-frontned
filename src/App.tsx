import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import LandingPage from "./components/Landing";
import Workflow from "./components/Workflow";
import Test from "./components/Test";

function App() {
  return (
    <div className="w-full h-full">
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import TaskBoard from "./Components/TaskManagement/TaskBoard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black ">
      <div className="w-full  max-w-7xl container mx-auto">
        <Navbar />
        <TaskBoard />
      </div>
    </div>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-black ">
      <div className="w-full max-w-7xl container mx-auto">
        <Navbar />
      </div>
    </div>
  );
}

export default App;

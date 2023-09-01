import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Welcom from "./components/Welcom";
import Korzinka from "./components/Korzinka";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Welcom />} />
          <Route path="/home" element={<Home />} />
          <Route path="/korzinka" element={<Korzinka />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

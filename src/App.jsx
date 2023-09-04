import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Korzinka from "./components/Korzinka";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/korzinka" element={<Korzinka />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

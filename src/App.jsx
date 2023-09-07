import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Welcome from "./components/Welcome";
import Korzinka from "./components/Korzinka";
import AboutPizza from "./components/AboutPizza";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          <Route path="/aboutpizza/:id" element={<AboutPizza />} />
          <Route path="/home" element={<Home />} />
          <Route path="/korzinka" element={<Korzinka />} />
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

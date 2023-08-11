import "./App.css";
import NavBar from "./components/nav-bar";
import HomePage from "./pages/home";
import { Route, Routes } from "react-router-dom";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <div style={{ background: "#414040" }}>
      <NavBar />

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

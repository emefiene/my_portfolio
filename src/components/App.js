import Project from "./Project"
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <h1>HELLOO</h1>
    <Navbar/>
    <Routes>
    <Route path="/projects" element={<Project/>}/>
    </Routes>
    </div>
  );
}

export default App;

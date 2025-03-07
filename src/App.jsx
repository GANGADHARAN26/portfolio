import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Layout from "./components/Layout";
import Skill from './pages/Skill';
import About from './pages/About';
import Contact from './pages/Contact';
import SingleProject from "./pages/SingleProject";
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
   <>
   <Analytics/>
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="projects" element={<Projects/>}/>
      <Route path="skills" element={<Skill/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="project/:index" element={<SingleProject/>}/>
    </Route>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;

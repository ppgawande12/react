import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Education from "./Components/Education/Education";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Project from "./Components/Projects/Project";
import Skills from "./Components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Project />
      <Education />
      <Contact />
    </div>
  );
}

export default App;

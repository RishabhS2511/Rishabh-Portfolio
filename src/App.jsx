import React from "react";
import NavBar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Project from "./Components/Projects";
import Projects from "./Components/ProjectsCopy";
import Skills from "./Components/Skills";


const App = () => {
  return(
    <div>
      <NavBar/>
      <Hero/>
      <About/>
      <Skills/>
      <Project/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App;
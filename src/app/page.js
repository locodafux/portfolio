import Navbar from "./components/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills"
import Experiences from "./components/Experience/Experiences"
import About from "./components/About"
import Projects from "./components/Projects/Projects"

import Contact from "./components/Contact/Contact"

export default function Home() {
  return (
    <div className = "flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Skills id="skills" />
      <Experiences />
      <About id="about"/>
      <Projects id="projects"/>
      <Contact id="contact" />
    </div>
  );
}

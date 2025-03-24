import Navbar from "./components/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills"
import Experiences from "./components/Experience/Experiences"
import About from "./components/About.jsx"
import Projects from "./components/Projects/Projects"


export default function Home() {
  return (
    <div className = "flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Skills id="skills" />
      <Experiences />
      <About />
      <Projects id="projects"/>
    </div>
  );
}

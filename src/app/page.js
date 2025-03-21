import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Experiences from "./components/Experiences"
import About from "./components/About.jsx"


export default function Home() {
  return (
    <div className = "flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Skills id="skills" />
      <Experiences />
      <About />
    </div>
  );
}

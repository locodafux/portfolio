import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Skills from "./components/Skills"


export default function Home() {
  return (
    <div className = "flex flex-col h-screen">
      <Navbar />
      <Hero />
      <Skills id="skills" />
    </div>
  );
}

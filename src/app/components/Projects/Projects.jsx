import Title from "../Title" 
import ProjectCard from "./ProjectCard"

const Projects = (props) => {
  const projects = [
    {
      path: "/projects/project-1.png",
      alt: "Project 1",
      title: "Crypto Screener Application",
      desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
    },
    {
      path: "/projects/project-1.png",
      alt: "Project 1",
      title: "Crypto Screener Application",
      desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
    },
    {
      path: "/projects/project-1.png",
      alt: "Project 1",
      title: "Crypto Screener Application",
      desc: "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book."
    },
  ] 

  return (
    <div id={props.id} className=" p-12 lg:p-24 flex flex-col items-center bg-black">
      <div className="w-screen flex justify-center gap-x-3 lg:text-5xl  text-3xl text-white">
        <span >My</span> <span className = " font-bold">Projects</span>
      </div>
      {projects.map((item, index) => (
        <ProjectCard {...item} count={index + 1} key={index} />
      ))}
    </div>
  )
}

export default Projects

import Title from "../Title" 
import ProjectCard from "./ProjectCard"

const Projects = (props) => {
  return (
    <div id={props.id} className=" p-24 flex flex-col items-center bg-black">
      <Title first="My" second="Projects" isDark={ true }/>
      <ProjectCard /> 
      <ProjectCard /> 
      <ProjectCard /> 
    </div>
  )
}

export default Projects

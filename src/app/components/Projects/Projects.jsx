import Title from "../Title" 

const Projects = (props) => {
  return (
    <div id={props.id} className="min-h-screen p-24 flex flex-col items-center bg-black">
      <Title first="My" second="Projects" isDark={ true }/>
    </div>
  )
}

export default Projects

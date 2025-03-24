
import { Banner } from "../Image"
const ProjectCard = () => {
  return (
    <div className = "flex text-white w-[1216px] min-h-[516px] px-12 py-24 gap-x-24 mt-4">
      <div className=" w-1/2 ">
        <Banner path="/projects/project-1.png" alt="Project 1" type="png"/>
      </div> 

      <div className="w-1/2 flex flex-col items-center justify-around 8">
        <span className="text-5xl font-extrabold w-full">01</span>
        <span className="text-3xl font-extrabold w-full">Crypto Screener Application</span>
        <p className="text-zinc-500">I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.</p>
        <div></div>
      </div> 
    </div>
  )
}

export default ProjectCard

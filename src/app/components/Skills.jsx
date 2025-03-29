import SkillCard from "./SkillCard"
import Title from "./Title"

const Skills = () => {
  const skillList = [
    {
      id: "icon-git",
      name: "Git",
    },
    {
      id: "icon-express",
      name: "Express",
    },
    {
      id: "icon-figma",
      name: "Figma",
    },
    {
      id: "icon-javascript",
      name: "JavaScript",
    },
    {
      id: "icon-nextjs",
      name: "Next JS",
    },
    {
      id: "icon-nodejs",
      name: "Node JS",
    },
    {
      id: "icon-react",
      name: "React",
    },
    {
      id: "icon-tailwindcss",
      name: "Talwind CSS",
    },
  ]

  return(
    <div id = "skills" className = "flex flex-col items-center flex-1 lg:min-h-screen w-screen pb-12 ">

      <div className="w-screen flex justify-center gap-x-3 lg:text-5xl  text-3xl">
        <span >My</span> <span className = " font-bold">Skills</span>
      </div>

      <div className="mt-12 lg:mt-30 grid lg:grid-cols-4 gap-12 w-full max-w-6xl  place-items-center">
        {
          skillList.map((item, index) => (
            <SkillCard key={index} id={item.id} name={item.name} alt="icon"/>
          ))
        }
      </div>
    </div>
  )
}

export default Skills

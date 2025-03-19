import SkillCard from "./SkillCard"

const Skills = () => {
  return(
    <div id = "skills" className = "flex flex-col items-center flex-1 min-h-screen w-screen p-16">
      <div className = 'w-screen flex justify-center gap-x-3'>
        <span className = "text-5xl ">My</span> <span className = "text-5xl font-bold">Skills</span>
      </div>

        <SkillCard />
    </div>
  )
}

export default Skills

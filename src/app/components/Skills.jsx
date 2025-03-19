import SkillCard from "./SkillCard"

const Skills = () => {
  return(
    <div id = "skills" className = "flex flex-col items-center flex-1 min-h-screen w-screen p-16">
      <div className="w-screen flex justify-center gap-x-3">
        <span className="text-5xl ">My</span> <span className = "text-5xl font-bold">Skills</span>
      </div>
      <div className="grid grid-cols-4 gap-4 w-full max-w-6xl mt-10">
        <SkillCard id="icon-git" name="Git" alt="git"/>
        <SkillCard id="icon-git" name="Git" alt="git"/>
        <SkillCard id="icon-git" name="Git" alt="git"/>
        <SkillCard id="icon-git" name="Git" alt="git"/>
        <SkillCard id="icon-git" name="Git" alt="git"/>
      </div>
    </div>
  )
}

export default Skills

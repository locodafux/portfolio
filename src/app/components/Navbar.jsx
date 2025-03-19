"use client"
import CustomButton from "./Button"

const Navbar = () => { 

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if(section){
      section.scrollIntoView({ behavior: "smooth"})
    }
  }
  return (
    <div className = "w-screen h-[100px] flex justify-between items-center p-6">
      <div>
        <span className= "font-bold text-2xl">Tims</span> 
      </div> 

      <div className = "flex w-[40%] justify-between">
        <button onClick = {() => scrollToSection("skills")} className="cursor-pointer">Skills</button>
        <a>About Me</a>
        <a>Project</a>
        <a>Contact Me</a>
      </div> 

      <div>
        <CustomButton> 
          Resume
        </CustomButton>
      </div> 
    </div>
  )
}

export default Navbar

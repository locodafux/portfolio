import CustomButton from "./Button"

const Navbar = () => { 
  return (
      <div className = "w-screen h-[100px] bg-red-700 flex justify-between items-center p-6">
      <div>
        Logo
      </div> 

      <div className = "flex w-[40%] justify-between">
        <a>About Me</a>
        <a>Skills</a>
        <a>Project</a>
        <a>Contact Me</a>
      </div> 

      <div>
        <CustomButton name = "Resume" />
      </div> 
    </div>
  )
}

export default Navbar

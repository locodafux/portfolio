import CustomButton from "./Button"

const Navbar = () => { 
  return (
      <div className = "w-screen h-[100px] flex justify-between items-center p-6">
      <div>
        <span className= "font-bold text-2xl">Tims</span> 
      </div> 

      <div className = "flex w-[40%] justify-between">
        <a>About Me</a>
        <a>Skills</a>
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

import ExpCard from "./ExpCard"

const Experiences = () => {
  return (
    <div className="w-screen min-h-screen bg-black w-screen p-32">
      <div className="text-5xl text-gray-200 flex gap-x-3 justify-center">
        <span>My</span> 
        <span className="font-bold">Experience</span> 
      </div>
      <ExpCard />
    </div>
  )
}

export default Experiences

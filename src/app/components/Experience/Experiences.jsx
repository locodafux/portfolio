import ExpCard from "./ExpCard"
import Title from "../Title"

const Experiences = () => {
  const experienceList = [
    {
      id: "wilcon-logo",
      image_type: "jpg",
      job_title: "Junior Systems Developer at Wilcon",
      year_attended: "July 2024 - Present",
      job_desc: "As a Systems Developer, I develop projects assigned by the Systems Analyst and maintain the Omnibus website. Currently, I'm working on a Petty Cash Replenishment system for Wilcon Depot Inc., using Vue, Laravel 7, and MySQL, integrated with the Infor API for expense data management."
    },
    {
      id: "erovoutika-logo",
      image_type: "png",
      job_title: "Web Developer at Erovoutika Inc. ( Internship )",
      year_attended: "Feb 2024 - June 2024",
      job_desc: "As a Web Developer, I handle the backend development of an Attendance Monitoring System using Tailwind CSS, Bootstrap, MySQL, and PHP, hosted on GoDaddy. I have also worked on the backend of Eroquiz, a quiz app built with Android Studio.",
    },
    {
      id: "smiley-logo",
      image_type: "jpg",
      job_title: "My First Hello World",
      year_attended: "2016",
      job_desc: "As a student, I wrote my first C++ program, 'Hello World,' for my Computer Programming subject. Since then, I have been passionate about programming."
    },
  ]
  return (
    <div className="w-screen lg:min-h-screen bg-black p-12  lg:p-24 flex flex-col gap-y-8 items-center">
      <div className="w-screen flex justify-center gap-x-3 lg:text-5xl  text-3xl text-white lg:mb-6">
        <span >My</span> <span className = "font-bold">Experiences</span>
      </div>
      {
        experienceList.map((item,index)=>(
          <ExpCard key={index} id={item.id} image_type={item.image_type} job_title={item.job_title} year_attended={item.year_attended} job_desc={item.job_desc}/>
        ))
      }
    </div>
  )
}

export default Experiences

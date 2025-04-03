import Title from "../Title";
import ProjectCard from "./ProjectCard";

const Projects = (props) => {
  const projects = [
    {
      path: "/projects/project-1.png",
      alt: "Petty Cash Replenishment",
      title: "Petty Cash Replenishment",
      desc: "Created using LARAVEL 7, MYSQL VUE.JS. Petty Cash Replenishment is a project that is aim to be used by all of the branches of Wilcon. They will use this to request for petty cash that is going to be approved by several higher ups while maintaining records, utilizing api to save into internal software that is used across all Wilcon Branches.",
    },
    {
      path: "/projects/project-1.png",
      alt: "Attendance Management System",
      title: "Attendance Management System",
      desc: "Created using Vanilla Javascript, Tailwind, PHP, MYSQL.Attendance Application where the Employees / Interns of Erovoutika Inc. will time in and time out. To time in the need to input their employee Id and Log in. And by logging in they will see their own profile showing the record of their attendance",
    },
    {
      path: "/projects/project-1.png",
      alt: "Thesis",
      title:
        "APyro:  SMART ATTENDANCE SYSTEM FOR HYFLEX LEARNING IN HIGHER EDUCATION USING CONVOLUTIONAL NEURAL NETWORK ALGORITHM",
      desc: "APyro is a thesis project built with ASP.NET, SQL Server, and Bootstrap. It uses machine learning for attendance monitoring by verifying students' identities via facial recognition. The system has admin, student, and teacher interfaces, where teachers start live sessions, and students are marked absent if not detected in front of the camera, even if logged in.",
    },
  ];

  return (
    <div
      id={props.id}
      className=" p-12 lg:p-24 flex flex-col items-center bg-black w-screen"
    >
      <div className=" flex justify-center gap-x-3 lg:text-5xl  text-3xl text-white">
        <span>My</span> <span className=" font-bold">Projects</span>
      </div>
      {projects.map((item, index) => (
        <ProjectCard {...item} count={index + 1} key={index} />
      ))}
    </div>
  );
};

export default Projects;

import { Banner } from "../Image";

const ProjectCard = (props) => {
  const isRight = props.count % 2 !== 0; 

  return (
    <div className={`flex flex-col lg:flex-row text-white lg:w-[1216px] lg:min-h-[516px] px-12 lg:py-24 gap-x-24 lg:mt-4 justify-center ${isRight && "lg:flex-row-reverse" }`}>
      <div className="w-[343px] h-[398px] lg:w-1/2 lg:h-auto">
        <Banner path={props.path} alt="Project Image" type="png" />
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-around">
        <span className="text-2xl lg:text-5xl font-extrabold w-full">{String(props.count).padStart(2, '0')}</span>
        <span className="text-2xl font-extrabold w-full mb-4 lg:mb-0">{props.title}</span>
        <p className="text-zinc-500">{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

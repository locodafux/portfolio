import { Banner } from "../Image";

const ProjectCard = (props) => {
  const isRight = props.count % 2 !== 0; 

  return (
    <div className={`flex text-white w-[1216px] min-h-[516px] px-12 py-24 gap-x-24 mt-4 ${isRight && "flex-row-reverse" }`}>
      <div className="w-1/2">
        <Banner path={props.path} alt="Project Image" type="png" />
      </div>

      <div className="w-1/2 flex flex-col items-center justify-around">
        <span className="text-5xl font-extrabold w-full">{String(props.count).padStart(2, '0')}</span>
        <span className="text-3xl font-extrabold w-full">{props.title}</span>
        <p className="text-zinc-500">{props.desc}</p>
      </div>
    </div>
  );
};

export default ProjectCard;

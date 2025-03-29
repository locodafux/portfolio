import { RoundImage } from "../Image"

const ExpCard = ({ id, job_title, year_attended, job_desc, image_type}) => {
  return (
    <div className="lg:w-[1168px] sm:w-[343px] lg:h-[192px] border-1 rounded-lg border-zinc-500 p-4 lg:p-6 bg-red flex flex-col gap-y-6">
      <div className="flex flex-col lg:flex-row  justify-around">

        <div className="flex w-full lg:gap-x-4 items-center justify-between mb-2">
          <div className="relative w-[32px] h-[32px] "> 
            <RoundImage id={id} image_type={image_type} />
          </div>
          <span className="text-white font-bold text-md lg:text-xl w-[75%] lg:w-full">{ job_title }</span>
        </div> 
        <span className="font-bold text-zinc-300 w-full lg:text-right ">
          {year_attended}
        </span>
      </div>

      <p className="text-zinc-300 text-lg">{job_desc}</p>
    </div>
  )
}
export default ExpCard

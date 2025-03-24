import { RoundImage } from "../Image"

const ExpCard = ({ id, job_title, year_attended, job_desc, image_type}) => {
  return (
    <div className="w-[1168px] h-[192px] border-1 rounded-lg border-zinc-500 p-6 bg-red flex flex-col gap-y-6">
      <div className="flex justify-between">
        <div className="flex gap-x-4 items-center">
          <div className="relative w-[32px] h-[32px]"> 
            <RoundImage id={id} image_type={image_type} />
          </div>
          <span className="text-white font-bold text-xl">{ job_title }</span>
        </div> 
        <span className="font-bold text-zinc-300">{ year_attended }</span>
      </div>
      <p className="text-zinc-300 text-lg">{job_desc}</p>
    </div>
  )
}
export default ExpCard

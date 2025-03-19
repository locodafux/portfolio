import Image from "next/image"

import { SkillImage } from "./Image"
const SkillCard = ({ id, alt, name}) => {
  return (
    <div className="w-[186px] h-[186px] rounded-sm border-2 border-black flex flex-col items-center justify-around p-4">
      <div className="w-[56px] h-[56px]">
        <SkillImage id={ id }  alt={ alt }/>
      </div>
      <span className="text-xl font-bold">{ name }</span>
    </div> 
  )
}

export default SkillCard

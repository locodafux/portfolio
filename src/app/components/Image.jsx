import Image from 'next/image'

const Banner = ({ id, alt, }) => {
  return (
    <div className="relative w-full h-full">
      <Image src={`/${ id }.png`} alt={ alt } fill className="object-contain" />
    </div>
  )
} 

const SkillImage = ({ id, alt }) => {
  return (
    <div className="relative w-full h-full">
      <Image src = {`/skills/${ id }.svg`} alt = {`${ alt }`} fill className="object-contain" /> 
    </div>
  )
}

const RoundImage = ({ id, alt, image_type}) => {
  return <Image src={`/${ id }.${image_type}`} alt="logo" fill className="rounded-full"/>
}

export {
  Banner,
  RoundImage,
  SkillImage,
} 

import Image from 'next/image'

const Banner = ({id, alt}) => {
  return (
    <div className="relative w-full h-full">
      <Image src={`/${id}.png`} alt={alt} fill className="object-contain" />
    </div>
  )
} 

export default Banner

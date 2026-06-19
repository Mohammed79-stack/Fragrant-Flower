import { BsFlower1 } from "react-icons/bs"
import { PiFlower } from "react-icons/pi"

const FlowerButton = ({title}:{title:string}) => {
  return (
    <a href="#" className="relative w-0 bg-[#000] text-white group text-center hover:w-40 hover:px-4 hover:py-2 duration-300">
        <PiFlower size={30} className="absolute duration-300 group-hover:rotate-90 text-[#9752b8] group-hover:text-[#7355b9] group-hover:top-0 left-0 top-1/2 -translate-1/2"/>
        <div className="overflow-hidden">{title}</div>
    </a>
  )
}

export default FlowerButton
import { BsFlower1 } from "react-icons/bs"
import { PiFlower } from "react-icons/pi"

const FlowerButton = ({title}:{title:string}) => {
  return (
    <a href="#" className="relative w-0 bg-black text-primary group text-center hover:w-40 hover:px-4 hover:py-2 duration-300">
        <PiFlower size={30} className="absolute duration-300 group-hover:rotate-90 text-black group-hover:text-blue-500 group-hover:top-0 left-0 top-1/2 -translate-1/2"/>
        <span>{title}</span>
    </a>
  )
}

export default FlowerButton
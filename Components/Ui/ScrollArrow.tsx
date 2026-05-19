import { BsArrowDown, BsArrowUp } from "react-icons/bs"
import {AnimatePresence, motion} from 'framer-motion'

const ScrollArrow = ({scrollVisible = true}:{scrollVisible:boolean}) => {

    

  return <AnimatePresence mode="wait">{scrollVisible && 

    <motion.div
  exit={{opacity:0}}
  onClick={()=> window.scrollBy(0, window.innerHeight)}
  className="p-4 cursor-pointer hover:scale-[1.1] hover:opacity-0 duration-300 animate-bounce absolute bottom-4 z-20 bg-black rounded-2xl">
    <BsArrowDown color="white" size={30} />
  </motion.div>}
  
  </AnimatePresence>
    
}

export default ScrollArrow
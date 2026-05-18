import Image from "next/image"
import {motion} from 'framer-motion'
const Char = ({img, flip = false, x, y}:{img:string, flip:boolean, x:number, y:number}) => {
  return (
    <motion.div 
    initial={{opacity:0, x:flip ? -20 : 20}}
    animate={{opacity:1, x:0}}
    transition={{duration:0.4}}
    style={{left:x, top:y, flexDirection:flip ? 'row-reverse' : 'row'}} className="flex absolute">



    <div style={{flexDirection:flip ? 'row-reverse' : 'row'}} className="flex items-center gap-2">

    <motion.div 
        initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{duration:0.6}}
    style={{clipPath:'polygon(10% 0, 90% 0, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0 90%, 0 10%)'}} className="size-[100] drop-shadow-[0_0_5px] drop-shadow-black contrast-110 grayscale-40 saturate-80">
    <img src={img} className="w-full cursor-pointer h-full object-cover"  alt=""/>
    </motion.div>
    <motion.div
            initial={{width:0}}
        animate={{width:'80px'}}
        transition={{duration:0.4}}
    className="h-1 w-20 bg-white" />


    </div>


    <div style={{flexDirection:flip ? 'row-reverse' : 'row', transformOrigin:flip ? 'right' : 'left'}} className="flex items-center gap-2 rotate-40">

        <motion.div 
        initial={{width:0}}
        animate={{width:'80px'}}
        transition={{duration:0.4, delay:0.4}}
        className="h-1 w-20 bg-white" />
        <span className="size-3 bg-white rounded-full"></span>

    </div>

    </motion.div>
  )
}

export default Char